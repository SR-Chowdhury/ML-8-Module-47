import './App.css';

// Passing props to a component in React
function UserComponent () {
    const movies = [
        {movieName: 'The massenger', year: '2002'},
        {movieName: 'Next', year: '2005'},
        {movieName: 'Good will hunting', year: '1998'},
    ];
    return (
        <div>
            {
                movies.map(movie => <UserData movieName= {movie.movieName} year = {movie.year}/>)
            }
            
        </div>
    );
}

function UserData (props) {
    const {movieName, year} = props;
    return (
        <div className='container'>
            <h3>Movie Name: {movieName}</h3>
            <p>Year of Published: {year}</p>
        </div>
    );
}

export default UserComponent;