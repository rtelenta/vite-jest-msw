import { rest } from "msw";

const user = {
  id: "aabbcc123",
  name: "Jhon Doe",
  email: "jhon.doe@test.com",
};

export const userHandler = [
  rest.get(`*/me`, (_, res, ctx) => {
    return res(ctx.json(user));
  }),
];
