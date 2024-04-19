import { render } from '@testing-library/react';
import Header from './page';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import Provider from '../Provider';

jest.mock("next-auth/react");

  const mockUseSession = useSession as jest.MockedFunction<typeof useSession>
  const mockSignIn = signIn as jest.MockedFunction<typeof signIn>; // Defina o tipo do mock para signIn
  const mockSignOut = signOut as jest.MockedFunction<typeof signOut>; // Defina o tipo do mock para signOut


describe('Test component Header', () => {
    it('should render component home ', () => {

        const session = { 
            user: { name: 'John Doe' },
            expires: '2025-01-01T00:00:00.000Z' // add this line
        };
        // mockUseSession.mockImplementationOnce(() => ({
        //     update: jest.fn(), // add this line
        //     data: session,
        //     status: "authenticated" // add this line
        // }));

        (useSession as jest.Mock).mockReturnValueOnce([session, 'authenticated']);

        const { getByTestId } = render(

        <Header/>

    );
        expect(getByTestId('headerComponent')).toBeInTheDocument();
    });


})