import Cookies from "js-cookie";

// TOKEN CREDENTIAL
const userToken = `${process.env.NODE_ENV}_user_access_token`;
const expiredToken = `${process.env.NODE_ENV}_user_expired_token`;

const getToken = () => Cookies.get(userToken) || null;

const getExpired = () => Cookies.get(expiredToken);

const setCredential = ({ token, expired }) => {
    Cookies.set(userToken, token);
    Cookies.set(expiredToken, expired);
};

const removeAuthCredential = () => {
    Cookies.remove(userToken);
    Cookies.remove(expiredToken);
};

export { getToken, getExpired, setCredential, removeAuthCredential};
