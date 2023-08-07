export default {
    async loginUser() {

    },
    async registerUser() {
        const user = {
            email: data.username,
            password: data.password,
            returnSecureToken: true
        }

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdZwMm5w7vRAmiRJXDlUr8NGcRPffqGCs', {
            method: 'POST',
            body: JSON.stringify(email)
        })

        console.log(response);
    }
}