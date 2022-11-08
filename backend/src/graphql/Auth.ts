import { objectType, extendType, nonNull, stringArg, unionType } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

export const CurrentUser = objectType({
  name: "CurrentUser",
  isTypeOf(data: any) {
    return Boolean(data.user);
  },
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", {
      type: "User",
    });
  },
});

export const IncorrectCredentialsError = objectType({
  name: "IncorrectCredentialsError",
  isTypeOf(data: any) {
    return Boolean(data.errorCode === "INCORRECT_EMAIL_ADDRESS_ERROR");
  },
  definition(t) {
    t.implements("Error");
  },
});

export const IncorrectPasswordError = objectType({
  name: "IncorrectPasswordError",
  isTypeOf(data: any) {
    return Boolean(data.errorCode === "INCORRECT_PASSWORD_ERROR");
  },
  definition(t) {
    t.implements("Error");
  },
});

export const SignInResult = unionType({
  name: "SignInResult",
  definition(t) {
    t.members("CurrentUser", "IncorrectCredentialsError", "IncorrectPasswordError")
  }
})

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("signIn", {
      type: "SignInResult",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const user = await context.prisma.user.findUnique({
          where: { email: args.email },
        });

        if (!user) {
          return {
            errorCode: "INCORRECT_EMAIL_ADDRESS_ERROR",
            message: "A user with this email address does not exist.",
          }
        }

        const valid = await bcrypt.compare(
          args.password,
          user.password,
        );

        if (!valid) {
          return {
            errorCode: "INCORRECT_PASSWORD_ERROR",
            message: "The password was incorrect. Please try again.",
          }
        }

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        return {
          token,
          user,
        };
      },
    });

    t.nonNull.field("signUp", {
      type: CurrentUser,
      args: {
        username: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { username, email } = args;
        const password = await bcrypt.hash(args.password, 10);
        const user = await context.prisma.user.create({
          data: { username, email, password },
        });
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: "365d" });
        return {
          token,
          user,
        };
      },
    });
  },
});