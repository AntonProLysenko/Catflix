const React = require ("react")
const DefaultLayout = require("../Default")

class Login extends React.Component{
    render(){
        return(
            <DefaultLayout title = "User Login">
                <form action="/user/login" method="post">
                    <fieldset>
                        <legend>User Login</legend>
                        <label
                        >USERNAME: <input type="text" name="username" required />
                        </label>
                        <label
                        >PASSWORD: <input type="password" name="password" required />
                        </label>
                        <input type="submit" value="Login" />
                    </fieldset>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Login