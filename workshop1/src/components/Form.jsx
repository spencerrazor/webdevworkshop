import Button from "./Button"

function Form({login}) {

    function handleLogin(event) {
        event.preventDefault();
        let data = new FormData(event.target)
        let creds = Array.from(data.values())

        // usually call an api make to login

        if (creds[0] == 'Spencer' && creds[1] == 'password') {
            console.log('hooray!')
            login();
        } else {
            console.log('invalid username or password')
        }

    }



    return (
        <>
        <h1>Please log in</h1>

        <form onSubmit={handleLogin}>
            {/* Username */}
            <p>
                <label>Username</label>
                <input type="text" name="username"/>
            </p>
            {/* Password */}
            <p>
                <label>Password</label>
                <input type="text" name="password"/>
            </p>

            <Button name="Login"/>
        </form>
        </>
    )
}

export default Form