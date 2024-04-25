import { render } from "@testing-library/react";
import Home from "./page";
import { mocked } from "jest-mock";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { SessionProvider, useSession } from "next-auth/react";

let setServerSession = {}

jest.mock("next-auth", () => ({
  __esModule: true, // this property makes it work
  default: jest.fn(),
  getServerSession: jest.fn().mockResolvedValue({
		expires: "2024-08-31T15:00:00.00Z",
		user: {
			admin: true,
			email: "teste@teste.com",
			expirationDate: "2024-08-31T15:00:00.00Z",
			id: "123",
			idSystem: "123",
			name: "Alan Barbosa",
			phone: "123456789",
			token: "...",
			userId: "123",
		},
	}),
}));

jest.mock("next-auth/react");

describe("Test Home Component", () => {
  it("should render page home", async () => {
    const session = {
      user: { name: "Alan Barbosa" },
      expires: "2024-08-31T15:00:00.00Z",
    };

		//(getServerSession as jest.Mock).mockImplementationOnce(() => null);

    (useSession as jest.Mock).mockReturnValueOnce([session, "authenticated"]);

    const { getByTestId, queryByTestId } = render(await Home());

    expect(queryByTestId("divHomeNotLogged")).not.toBeInTheDocument();
    expect(getByTestId("divPageHomeLoggedComponent")).toBeInTheDocument();
  });
});
