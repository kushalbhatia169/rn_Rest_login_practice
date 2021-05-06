import React from 'react';

const UserContext = React.createContext({
isLogin: false,
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;