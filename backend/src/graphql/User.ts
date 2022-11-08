import { extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("username");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const CurrentUserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("currentUser", {
      type: "User",
      resolve: async (parent, args, context) => {
        const currentUser = context.userId;

        if (!currentUser) {
          throw new Error("User not signed in");
        }

        const user = await context.prisma.user.findUnique({
          where: { id: currentUser },
        });
        return user;
      },
    })
  },
})