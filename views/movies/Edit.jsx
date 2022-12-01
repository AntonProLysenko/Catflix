const React = require ("react")
const DefaultLayout = require ("../Default")

class Edit extends React.Component{
    render(){
        console.log(this.props.movie.title)
        return(
            <DefaultLayout>
        <form action={`/movies/${this.props.movie._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit {this.props.movie.title}</legend>
            <label>
              TITLE:<input type="text" name="title" placeholder="Enter movie title" value = {this.props.movie.title}/>
            </label>
            <label>
              GENRE:<input type="text" name="genre" placeholder="enter genre" value = {this.props.movie.genre}/>
            </label>

            <label> RELEASE DATE:<input type="text" name="releaseDate" value = {this.props.movie.releaseDate}/> </label>

            <label> LENGTH:<input type="number" name="length" value = {this.props.movie.length}/> </label>

            <label> POSTER:<input type="text" name="poster" value = {this.props.movie.poster}/> </label>

            <label>DIRECTOR :<input type="text" name="director" value = {this.props.movie.director}/> </label>

            <label>RATING :<input type="text" name="rating" value = {this.props.movie.raiting}/> </label>

          
            <label> CAST:<input type="text" name="cast" value={this.props.movie.cast.join("")} /> </label>
            {
                this.props.movie.watchAgain?
                <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" checked="true" /> </label> 
                : <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" /> </label>
                
            }   
         
          </fieldset>
          <input type="submit" value="Edit Movie" />
        </form>
      </DefaultLayout>
        )
    }
}
module.exports = Edit