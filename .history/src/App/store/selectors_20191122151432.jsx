export const appSelector = (state) => state.appReducer;

export const isLoginSelector = (state) => appSelector(state).isLogin.isAuth;
export const isNewUserSelector = (state) => appSelector(state).isLogin.isNewUser;