import { enumType, interfaceType } from "nexus";

export const Error = interfaceType({
  name: "Error",
  definition(t) {
    t.nonNull.string("message");
    t.nonNull.field("errorCode", {
      type: "ErrorCode"
    })
  },
})

export const ErrorCode = enumType({
  name: "ErrorCode",
  members: [
    "INCORRECT_EMAIL_ADDRESS_ERROR", "INCORRECT_PASSWORD_ERROR"
  ]
});