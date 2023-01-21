import "@testing-library/jest-dom";
import { server } from "./src/mocks/node";
import dotenv from "dotenv";

dotenv.config();

jest.mock("./src/getEnvs", () => ({
  getEnvs: () => ({ ...process.env }),
}));

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
