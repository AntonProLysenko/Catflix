const React = require ("react")
const DefaultLayout = require("../Default")

class Signup extends React.Component{
    render(){
        return(
            <DefaultLayout title ="Create Account" >
                Already have an account? <a href="/user/login">Log in</a>
                <form action="/user/signup" method="POST">
                    <fieldset>
                        <legend>New User</legend>
                        <label>
                            USER NAME: <input type="text" name="username" required /> 
                        </label>
                        <br/>
                        <label
                            >PASSWORD: <input type="password" name="password" required />
                        </label>
                        <br />
                        <input type="submit" value="Create Account" />
                    </fieldset>

                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Signup