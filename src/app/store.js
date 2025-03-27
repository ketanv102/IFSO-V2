import { configureStore } from '@reduxjs/toolkit';
// import appToastReducer from '../features/utilities/appToastSlice';
import authReducer from '../features/auth/authSlice';
// import locationModalReducer from '../features/popup/locationModalSlice';
// import selectedDriveReducer from '../features/data/selectedDriveSlice';
// import OffcanvasReducer from '../features/popup/offcanvasSlice';
// import ProfileUpdateReducer from '../features/popup/ProfileUpdateModalSlice';
// import VerificatinReducer from '../features/popup/VerificationModalSlice';
// import ScopeDetailModalReducer from '../features/popup/ScopeDetailModalSlice';
// import DataReducer from '../features/data/DataSlice'

export const store = configureStore({
    reducer: {
        // appToast: appToastReducer,
        auth: authReducer,
        // locationModal: locationModalReducer,
        // selectedDrive: selectedDriveReducer,
        // offcanvas: OffcanvasReducer,
        // profileUpdate: ProfileUpdateReducer,
        // verification: VerificatinReducer,
        // scopeDetail: ScopeDetailModalReducer,
        // data: DataReducer
    },
});