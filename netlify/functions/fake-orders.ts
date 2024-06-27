import { Handler } from "@netlify/functions";
import { faker } from "@faker-js/faker";
import { api } from "../common/api";
import { config } from "../core/config";
import { verify } from "crypto";
import { verifyHasura } from "../common/verifyHasura";

const handler: Handler = async (event, context) => {
  const { headers } = event;

  try {
    verifyHasura(headers);
  } catch (error) {
    return JSON.parse(error.message);
  }

  const fakeData = {
    client_address: faker.location.streetAddress(),
    client_name: faker.person.fullName(),
    client_phone: faker.string.numeric("+48-###-###-###"),
  };

  const categories = await api.GetCategories();
  const menuItems = await Promise.all(
    categories.category.map(
      async (category) =>
        await api.GetMenuItemByCategoryId({ categoryId: category.id })
    )
  );

  const firstCategory = menuItems[0].menu;
  const secondCategory = menuItems[1].menu;

  const newOrder = await api.CreateFakeOrder(fakeData, {
    "x-hasura-admin-secret": config.hasuraAdminSecret,
  });

  const firstCategoryLength = firstCategory.length;
  const secondCategoryLength = secondCategory.length;

  const firstGroupIndex =
    firstCategory[faker.number.int({ max: firstCategoryLength - 1, min: 0 })]
      .id;

  const secondGroupIndex =
    secondCategory[faker.number.int({ max: secondCategoryLength - 1, min: 0 })]
      .id;

  await api.AddItemsToFakeOrder(
    {
      objects: [
        { order_id: newOrder.insert_orders_one.id, menu_id: firstGroupIndex },
        { order_id: newOrder.insert_orders_one.id, menu_id: secondGroupIndex },
      ],
    },
    { "x-hasura-admin-secret": config.hasuraAdminSecret }
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "OK" }),
  };
};

export { handler };
