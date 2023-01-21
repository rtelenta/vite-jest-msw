import { setupServer } from "msw/node";
import { userHandler } from "./userHandler";

export const server = setupServer(...userHandler);
