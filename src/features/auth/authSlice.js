import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import config from '../../config'
// import jwt_decode from 'jwt-decode'
import { jwtDecode } from "jwt-decode";
import axios from '../../AxiosConfig'


export const requestOtp = createAsyncThunk(
    'auth/requestOtp',
    async (params) => {
        const { mobileNumber, role, email } = params
        console.log("mob No: ", mobileNumber);
        const response = await axios.get(config.apiUrl + '/user/login?mobile=' + mobileNumber + '&role=' + role + '&email=' + email + '&source=ifso')
        const { data } = response
        return data
    }
)

export const validateOtp = createAsyncThunk(
    'auth/validateOtp',
    async (params) => {
        const { mobileNumber, otp, role } = params;
        const response = await axios.get(config.apiUrl + '/user/login?mobile=' + mobileNumber + '&otp=' + otp + '&role=' + role + '&source=ifso')
        const { data } = response;
        return data
    }
)

const initialState = {
    authToken: null,
    ID: null,
    role: null,
    otpRequestError: false,
    message: null,
    showLoginPage: true,
    showVerifyOtpForm: false,
    registationStep: null,
    token: null,
    role: null,
    FullName: null,
}
// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logout: (state, action) => {
//             console.log('user has been logged out!')
//             localStorage.clear()
//             state.ID = null
//             state.authToken = null
//         },
//         backToLogin: (state, action) => {
//             console.log('back to the login state')
//             state.ID = null
//             state.authToken = null
//             localStorage.clear()
//         },
//         setToken: (state, action) => {
//             const tokenData = jwtDecode(action.payload.authToken);
//             if (tokenData.userInfo.registationStep === 0) {
//                 state.authToken = action.payload.authToken;
//                 state.ID = tokenData.userInfo.ID;
//             }
//             else if (tokenData.userInfo.registationStep === -1) {
//                 console.log('show registration from')
//             }
//         }
//     },
//     extraReducers: {
//         [requestOtp.fulfilled]: (state, action) => {
//             const { message, data } = action.payload;
//             console.log('cation payload', action.payload);
//             if (message === 'Success') {
//                 if (data === 'OTP sent') {
//                     state.showVerifyOtpForm = true
//                     state.message = message
//                 }
//                 else {
//                     state.otpRequestError = true
//                 }
//             }
//             else if (message === 'user not found') {
//                 state.showRegistrationForm = true
//                 state.showVerifyOtpForm = false
//             }
//             else {
//                 state.showVerifyOtpForm = false
//                 state.showRegistrationForm = false
//             }
//         },

//         [validateOtp.fulfilled]: (state, action) => {
//             const { data, message } = action.payload;
//             if (message !== 'invalid emial otp' && message !== 'invalid mobile otp') {
//                 console.log('data: ', data);
//                 const tokenData = jwtDecode(data);
//                 state.authToken = data;
//                 if (tokenData.userInfo.registationStep === '0') {
//                     state.ID = tokenData.userInfo.ID;
//                     state.registationStep = tokenData.userInfo.registationStep
//                 }
//                 else if (tokenData.userInfo.registationStep === '-1') {
//                     state.ID = tokenData.userInfo.ID
//                     state.showRegistrationForm = true
//                 }
//             }
//             else {
//                 state.otpValidateError = true
//                 state.authToken = null
//             }
//         }
//     }
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            console.log('User has been logged out!');
            localStorage.clear();
            state.ID = null;
            state.authToken = null;
        },
        backToLogin: (state) => {
            console.log('Back to the login state');
            localStorage.clear();
            state.ID = null;
            state.authToken = null;
            state.showLoginPage = true
        },
        setToken: (state, action) => {
            const tokenData = jwtDecode(action.payload.authToken);
            if (tokenData.userInfo.registationStep === 0) {
                state.authToken = action.payload.authToken;
                state.ID = tokenData.userInfo.ID;
                state.FullName = tokenData.userInfo.FullName;
            }
            else if (tokenData.userInfo.registationStep === -1) {
                console.log('Show registration form');
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestOtp.fulfilled, (state, action) => {
                const { message, data } = action.payload;
                console.log('Action payload:', action.payload);
                if (message === 'Success') {
                    if (data === 'OTP sent') {
                        state.showVerifyOtpForm = true;
                        // state.showLoginPage = false;
                        state.message = message;

                    } else {
                        state.otpRequestError = true;
                    }
                } else if (message === 'user not found') {
                    state.showRegistrationForm = true;
                    state.showVerifyOtpForm = false;
                } else {
                    // state.showVerifyOtpForm = false;
                    // state.showRegistrationForm = false;
                }

            })
            .addCase(validateOtp.fulfilled, (state, action) => {
                const { data, message } = action.payload;
                if (message !== 'invalid email otp' && message !== 'invalid mobile otp') {
                    console.log('Data:', data);
                    console.log('Data:', action.payload);
                    const tokenData = jwtDecode(data);
                    console.log('tokenData: ', tokenData)
                    state.authToken = data;
                    if (tokenData?.userInfo?.registrationStep === 0) {
                        console.log('registration step 0 if working')
                        localStorage.setItem('token', data)
                        state.role = tokenData.userInfo.RoleID;
                        state.token = tokenData
                        state.ID = tokenData.userInfo.ID;
                        state.registationStep = tokenData.userInfo.registationStep;

                    } else if (tokenData.userInfo.registationStep === '-1') {
                        state.ID = tokenData.userInfo.ID;
                        state.showRegistrationForm = true;
                    }
                } else {
                    state.otpValidateError = true;
                    state.authToken = null;
                }
            });

    }
});

export const { logout, backToLogin, setToken } = authSlice.actions;

export default authSlice.reducer