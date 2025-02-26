import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { demoUser } from "../../helpers/fixtures/authFixtures";
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle} from "../../../src/firebase/providers";
import { clearNotesLogout } from "../../../src/store/journal";



jest.mock('../../../src/firebase/providers');



describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach(()=> jest.clearAllMocks());
    
    test('Debe invocar checkingCredentials', async() => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({"payload": undefined, "type": "auth/checkingCredentials"});
        
    });

    test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async() => {
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login( loginData ));

    });

    test('startGoogleSignIn debe llamar checkingCredentials y logout - Error', async() => {
        const loginData = {ok: false, errorMessage: 'Error con Google'};
        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith({type: 'auth/logout', payload: loginData.errorMessage});


    });

    test('StartLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async() => {

        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password: '123456'};
        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login( loginData ));
        
    });

    test('startLogout debe llamar checkingCredentials', async() => {
        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    });




});