//Imports react components
import React from 'react'; 
import Card from 'react-bootstrap/Card';

function MovieItem(props) { //Gets the movie details through props
return (
<div>
<Card style={{ width: '18rem', margin: '10px' }}> {/*Card width and spacing */}
<Card.Header>
{props.mymovie.Title}
</Card.Header>

            <Card.Body>
                <Card.Img
                    variant="top"
                    src={props.mymovie.Poster} //displays the poster in the body
                    alt={props.mymovie.Title} //displays alt text for the image
                />
            </Card.Body>

            <Card.Footer>
                {props.mymovie.Year} {/*displays release year in footer section*/}
            </Card.Footer>
        </Card>
    </div>
);

}

export default MovieItem; //Exports the component to be used in Movies.jsx