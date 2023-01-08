import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { User } from "../../models/user";
dotenv.config();

const queries = {
  activeUser: async (root, args, contextValue) => {
    if (!contextValue.userId) return null;

    const user = await User.findById(contextValue.userId);
    return {
      id: user.id,
      email: user.email
    };
  },
};

const mutations = {
  login: async (root, args) => {
    const user = await User.findOne().where({ email: args.email });
    const valid = await bcrypt.compare(
      args.password,
      user?.password || "",
    );

    if (!user || !valid) {
      return {
        __typename: "IncorrectCredentialsError",
        message: "Incorrect credentials." //Ändra 
      }
    }

    const token = jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "365d" });
    return {
      __typename: "CurrentUser",
      token: token,
      user: {
        id: user.id,
        email: user.email,
      }
    }
  },
  register: async (root, args) => {
    const existingEmailAddresses = await User.find().where({ email: args.email });

    if (existingEmailAddresses.length >= 1) {
      return {
        __typename: "EmailAddressConflictError",
        message: "Email address already exists." //Ändra
      }
    }

    const password = await bcrypt.hash(args.password, 10);
    const newUser = new User({
      email: args.email.toLowerCase(),
      password: password
    });
    const user = await newUser.save();
    const token = jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "365d" });

    return {
      __typename: "CurrentUser",
      token: token,
      user: {
        id: user.id,
        email: user.email,
      }
    };
  },
};

export const resolvers = { queries, mutations };