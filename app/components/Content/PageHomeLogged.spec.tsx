import { fireEvent, render } from "@testing-library/react";
import PageHomeLogged from "./PageHomeLogged";
import { useSession } from "next-auth/react";
import React, { useState } from 'react';

jest.mock("next-auth/react");
const mockUseSession = useSession as jest.MockedFunction<typeof useSession>
const session = {
    user: { name: 'John Doe',email:'johndoe@test.com' },
    expires: '2025-01-01T00:00:00.000Z' // add this line
};

// Criando uma simulação da sessão de usuário
function setSession() {
    (useSession as jest.Mock).mockReturnValue({ data: session, status: 'authenticated' })
}

describe('Test Component PageHomeLogged', () => {

    it('should render component PageHomeLogged', () => {
        setSession() //sessão do usuário
        const { getByTestId } = render(<PageHomeLogged />);
        expect(getByTestId('divPageHomeLoggedComponent')).toBeInTheDocument();
    });

    it('should render name and email component PageHomeLogged', () => {
        setSession() //sessão do usuario

        const { getByText,getByTestId } = render(<PageHomeLogged />);
        fireEvent.click(getByTestId('ButtonExibirOcultar'));

        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('johndoe@test.com')).toBeInTheDocument();
    });

    it('should not render name and email component PageHomeLogged', () => {
        setSession() //sessão do usuario      

        const { queryByTestId } = render(<PageHomeLogged />);
        
        expect(queryByTestId('John Doe')).not.toBeInTheDocument();
        expect(queryByTestId('johndoe@test.com')).not.toBeInTheDocument();
    });




})