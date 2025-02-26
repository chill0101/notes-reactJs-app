


export const initialState = {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: '1234ABC',
    email: 'demo@demo.com',
    displayName: 'Soy un test',
    photoURL: 'https://placeimg.com/100/100/any',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: '1234ABC',
    email: 'demo@demo.com',
    displayName: 'Soy un test',
    photoURL: 'https://placeimg.com/100/100/any',
}