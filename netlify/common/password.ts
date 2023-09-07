import * as crypto from "crypto";

export const hashPassword = (password:string) =>  crypto
  .pbkdf2Sync(password, "mygreatestsecret", 1000, 64, "sha512")
  .toString("hex");
