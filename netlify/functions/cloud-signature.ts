import { Handler } from "@netlify/functions";
import { v2 as cloudinary } from "cloudinary";
import { getAdminFromHeaders } from "../common/getAdminFromHeaders";
import { GetAdminByIdQuery } from "../common/sdk";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const handler: Handler = async (event, context) => {
  const { headers } = event;

  let admin: GetAdminByIdQuery;
  try {
    admin = await getAdminFromHeaders(headers);
  } catch (e) {
    return JSON.parse(e.message);
  }

  if (!admin.admin_by_pk?.id) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden" }),
    };
  }

  const timeStamp = Math.round(new Date().getTime() / 1000);
  const publicId = `menu-${timeStamp}`;

  const signature = cloudinary.utils.api_sign_request(
    {
      timeStamp,
      folder: "menu",
      public_id: publicId,
    },
    process.env.API_SECRET!
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      signature,
      apiKey: process.env.API_KEY,
      timeStamp,
      cloudName: process.env.CLOUD_NAME,
      publicId,
    }),
  };
};

export { handler };
