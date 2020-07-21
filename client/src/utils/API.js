import axios from 'axios';

export default ({
    login: function (form) {
        return axios({
            url: "/api/user/login",
            method: "POST",
            data: form
        })
    },
    me: function () {
        return axios({
            url: "/api/user/me",
            method: "GET"
        })
    },
    signUp: function (form) {
        return axios({
            url: "/api/user/signup",
            method: "POST",
            data: form
        })
    },
    logout: function () {
        return axios({
            url: "/api/user/logout",
            method: "GET"
        })
    }
});