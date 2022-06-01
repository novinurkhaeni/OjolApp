import { combineReducers } from 'redux';

// initialState = {
//     appName: 'O-JOL',
// }

initialStateRegister = {
    title: 'Register Page',
    desc: 'Ini adalah deskripsi untuk Register',
    form: {
        fullName: '',
        email: '',
        password: '',
    }
}

const RegisterReducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE'){
        return {
            ...state,
            title: 'Register Ganti Title',
        }
    }
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        }
    }
    return state;
}

initialStateLogin = {
    info: 'Tolong masukkan password anda',
    isLogin: true,
    form: {
        email: '',
        password: '',
    }
}

const LoginReducer = (state = initialStateLogin, action) => {
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        }
    }
    return state;
}

// const reducer = (state = initialState, action) => {
//     return state;
// }

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
})

export default reducer;