const React = require ("react")
const DefaulLayout = require("../Default")

class Index extends React.Component{
    render(){
        return(
            <DefaulLayout>
                <a href="/user/logout"><button>Logout</button></a>
                <br />
                {/* <a href="https://ps-rtt-sei.herokuapp.com/mod-2/week-9/day-3/slides/">Lesson how I compleated it</a> */}
                <div>
                    <a href="/movies/new">Create New Movie</a>
                    {
                        this.props.movies.map((movie, i)=>{
                            return(
                                <a href={`/movies/${movie._id}`}> <article key = {i}>
                                    <h2>{movie.title}</h2>
                                    <p>{movie.rating}</p>
                                     <img src={movie.poster} width="300" height="500" alt={ `${movie.title} Poster`} />
                                    <br />
                                </article></a>
                            )
                        })
                    }
                </div>
            </DefaulLayout>
        )
    }
}

module.exports = Index
