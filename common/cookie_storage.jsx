import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from 'prop-types';

//creating instance of cookie
export const cookies = {
cookies: instanceOf(Cookies).isRequired
};

//getting the cookie value
export const getCookie = (cookies, key) => {
const cookieData = cookies.get(key);
if (cookieData) return cookieData; //returning cookie value
else return null; // return null if no cookie found
}

//setting the cookie value
export const setCookie = (cookies, key, value) => {
const options = {
path: "/",
httpOnly: false,
secure: false,
sameSite: "lax"
};
cookies.set(key, value, options);
return true;
}

//removing the cookie value
export const removeCookie = (cookies, key) => {
cookies.remove(key);
return true;
}

export default withCookies(cookies);