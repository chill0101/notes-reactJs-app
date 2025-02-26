import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../helpers/fixtures/authFixtures";




describe('Pruebas en authSlice', () => {


    test('debe retornar el estado inicial y llamarse "auth"', () => {
        
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);


    });

    test('debe realizar la autenticación', () => {
            const state = authSlice.reducer(initialState, login(demoUser));
            expect(state).toEqual({
                status: 'authenticated',
                uid: demoUser.uid,
                email: demoUser.email,
                displayName: demoUser.displayName,
                photoURL: demoUser.photoURL,
                errorMessage: null,
            });
    });


    test('Debe realizar el logout', () => {
        const state = authSlice.reducer(initialState, logout());
        
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
    });

    test('Debe realizar el logout', () => {
        const errorMessage = 'Credenciales no son correctas';
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
        
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    });

    test('Debe cambiar el estado a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking');
    });

});