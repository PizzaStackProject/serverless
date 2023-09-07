import { Handler } from "@netlify/functions";
import { hashPassword } from "../common/password";
import { AdminLoginInput } from "../common/sdk";
import { api } from "../common/api";
import { signToken } from "../common/jwt";

const invalidUserOrPassword = {
  statusCode: 404,
  body: JSON.stringify({ message: "User not found or password invalid" }),
};

const handler: Handler = async (event, context) => {
  const { body, headers } = event;

  const input: AdminLoginInput = JSON.parse(body!).input.admin;
  

  const data = await api.GetAdminByUsername(
    { username: input.username },
    { "x-hasura-admin-secret": "myadminsecretkey" }
  );

  if (data.admin.length === 0) {
    return invalidUserOrPassword;
  }

  const hashedPassword = hashPassword(input.password);
  
  if (hashedPassword !== data.admin[0].password) {
    return invalidUserOrPassword;
  }

  const accessToken = signToken(data.admin[0].id)

  // const accessToken = jwt.sign(
  //   {
  //     "https://hasura.io/jwt/claims": {
  //       "x-hasura-default-role": "admin",
  //       "x-hasura-allowed-roles": ["admin"],
  //       "x-hasura-user-id": data.insert_admin_one?.id,
  //     },
  //   },
  //   "E0pFuRteHc14J0S6BKO85sIQsNbYGS1f"
  // );

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken }),
  };
};

export { handler };
