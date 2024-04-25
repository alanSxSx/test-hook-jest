import { render } from "@testing-library/react";
import Home from "./page";
import { mocked } from "jest-mock";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { SessionProvider, useSession } from "next-auth/react";

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

const session = {
	user: { name: "Alan Barbosa" },
	expires: "2024-08-31T15:00:00.00Z",
};

jest.mock("next-auth/react");

(useSession as jest.Mock).mockReturnValueOnce([session, "authenticated"]);

const renderHome = async () => {
    return render(await Home());
};


describe("Test Home Component", () => {
	it("should render page home logged", async () => {

		//(getServerSession as jest.Mock).mockImplementationOnce(() => null);

		const { getByTestId, queryByTestId } = await renderHome();

		expect(queryByTestId("divHomeNotLogged")).not.toBeInTheDocument();
		expect(getByTestId("divPageHomeLoggedComponent")).toBeInTheDocument();
	});

	it("should render page home not logged", async () => {

		(getServerSession as jest.Mock).mockImplementationOnce(() => null); //Seta o session como NULL, simulando uma sessão sem autenticação.

		const { getByTestId, queryByTestId } = await renderHome();

		expect(getByTestId("divHomeNotLogged")).toBeInTheDocument();
		expect(queryByTestId("divPageHomeLoggedComponent")).not.toBeInTheDocument();
	});



});
