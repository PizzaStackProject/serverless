import { Handler } from "@netlify/functions";
import { HASURA_CLAIMS, HASURA_USER_ID, getTokenData } from "../common/jwt";
import { api } from "../common/api";

const handler: Handler = async (event, context) => {
  const { headers } = event;
  const authHeader = headers["authorization"];

  if (!authHeader) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden" }),
    };
  }

  const [_, authToken] = authHeader.split(' ');

  const adminObj = getTokenData(authToken);
  const adminId = adminObj[HASURA_CLAIMS][HASURA_USER_ID];

  const data = await api.AdminGetMe(
    { id: adminId },
    { "x-hasura-admin-secret": "myadminsecretkey" }
  );

  //   const input: AdminLoginInput = JSON.parse(body!).input.admin;

  //   const data = await api.GetAdminByUsername(
  //     { username: input.username },
  //     { "x-hasura-admin-secret": "myadminsecretkey" }
  //   );

  return {
    statusCode: 200,
    body: JSON.stringify({id:adminId, username: data.admin_by_pk?.username }),
  };
};

export { handler };
