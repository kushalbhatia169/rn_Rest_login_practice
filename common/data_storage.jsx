/ currenly using local storage /
/* main setValue funtion to set localStorage Value*/
export const setValue = (key, value) => {
localStorage.setItem(key, JSON.stringify(value));
    return true;
}

/* main getValue funtion to get localStorage Value*/
export const getValue = (key) => {
const userStr = JSON.parse(localStorage.getItem(key));
if (userStr) return userStr;
else return null;
}

/ main removeValue funtion /
export const removeValue = (key) => {
localStorage.removeItem(key);
return true;
}
// remove the PageValue and userFields values from the localStorage
export const removePageValue = () => {
localStorage.removeItem('pageValue');
localStorage.removeItem('custId');
localStorage.removeItem('empId');
}

export const removePageName_FTE = () => {
localStorage.removeItem('pageName');
return true;
}



// set the PageValue and userFields values to the localStorage
export const setPageValue = (pageValue, fields1, fields2) => {
localStorage.setItem('pageValue', JSON.stringify(pageValue));
localStorage.setItem('custId', fields1);
localStorage.setItem('empId', fields2);
return true;
}

//setting the page remember the page
export const setPageName_FTE = (pagename) => {
localStorage.setItem('pageName', pagename);
return true;
}



//for get the pagevalue from the localStorage
export const getPageValue = (key) => {
const userStr = localStorage.getItem(key);
console.log(userStr);
if (userStr) return userStr;
else return null;
}

//getting the page remember the page
export const getPageName_FTE = () => {
const userStr = localStorage.getItem('pageName');
console.log(userStr);
if (userStr) return userStr;
else return null;
}



//!currently not using session storage

export const getUser = () => {
const userStr = localStorage.getItem('Userid');
if (userStr) return JSON.parse(userStr);
else return null;
}

// return the token from the session storage
export const getToken = () => {
console.log(localStorage.getItem('token'));
return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
localStorage.removeItem('token');
localStorage.removeItem('Userid');
localStorage.removeItem('EmpCode');
localStorage.removeItem('EmpName');
}

// set the token and user from the session storage
export const setUserSession = (token, Userid, EmpCode, EmpName) => {
localStorage.setItem('token', JSON.stringify(token));
localStorage.setItem('Userid', JSON.stringify(Userid));
localStorage.setItem('EmpCode', JSON.stringify(EmpCode));
localStorage.setItem('EmpName', JSON.stringify(EmpName));
console.log(token, Userid, EmpCode, EmpName);
return true;
}
