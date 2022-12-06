const React = require ("react")
const DefaultLayout = require("./Default")

class Index extends React.Component{
    render(){
        return(
            <DefaultLayout title ="Create Account" >
                <div>
                    <a href="/user/signup"><button>Signup</button></a> 
                    <hr/>
                    <a href="/user/login"><button>Login</button></a>
                </div>

            </DefaultLayout>
        )
    }
}
module.exports = Index