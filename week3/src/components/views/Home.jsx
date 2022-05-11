/*
 * Three different locations to store images:
 *   - public folder
 *   - src/assets folder
 *   - on the server
 *  
 *  https://www.upbeatcode.com/react/where-to-store-images-in-react-app/
 *
 */

const Home = (props) => {

    return (
        <>
            <section className="jumbotron">
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies as well as add your own movies to the database.</p>
                <p>Fun for the whole family. 🍿 </p>
            </section>

            <section className="featured-movies-container">
                <h2>Featured Movies:</h2>
                <div className="featured-movies-list">
                {
                    !props.isLoading  ? 
                        props.movies.map((item, index) => {
                            return (
                                <div key={index} className="featured-movie">
                                    <a rel="noreferrer" href={item.imdb} target="_blank" ><img src={item.image} alt={item.alt} /></a>
                                    <div className="featured-movie-info">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                        )
                    })
                    :
                    <p>Loading...</p>
                }
                </div>
            </section>  
        </>
    );
}

export default Home;