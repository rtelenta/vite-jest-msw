import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";

test("should fetch data", async () => {
  render(<App />);

  const user = {
    id: "aabbcc123",
    name: "Jhon Doe",
    email: "jhon.doe@test.com",
  };

  await waitFor(() => {
    expect(screen.getByText(user.id)).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});
