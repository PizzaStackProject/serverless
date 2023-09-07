import jwt from "jsonwebtoken";

export const signToken = (id:string) =>
  jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-user-id": id,
      },
    },
    "E0pFuRteHc14J0S6BKO85sIQsNbYGS1f"
);
