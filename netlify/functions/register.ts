import {Handler} from '@netlify/functions';
import { GraphQLClient } from 'graphql-request';
import jwt from 'jsonwebtoken';
import { getSdk } from '../common/sdk';
import * as crypto from "crypto";

interface AdminRegisterInput {
    username: string;
    password: string;
}

const handler: Handler = async (event, context) => {
    const { body } = event;
    const input:AdminRegisterInput = JSON.parse(body!).input.admin;
    const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'))

    const password = crypto.pbkdf2Sync(input.password, "mygreatestsecret", 1000, 64, "sha512")
      .toString("hex");

    const data = await sdk.InsertAdmin({
      username: input.username,
      password
    })

    
    const accessToken = jwt.sign({
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-user-id": data.insert_admin?.returning[0].id,
      },
    }, 'mygreatjwtsecret');


    return {
        statusCode: 200,
        body: JSON.stringify({accessToken: accessToken})
    }
}

export { handler }; 