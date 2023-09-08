import jwt from "jsonwebtoken";

const JWT_SECRET = "E0pFuRteHc14J0S6BKO85sIQsNbYGS1f";

export const HASURA_CLAIMS = "https://hasura.io/jwt/claims";
export const HASURA_USER_ID = "x-hasura-user-id";

export const signToken = (id: string) =>
  jwt.sign(
    {
      HASURA_CLAIMS: {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        HASURA_USER_ID: id,
      },
    },
    JWT_SECRET
  );

export const getTokenData = (token:string) => {
  return jwt.verify(token, JWT_SECRET);
}
