import React from 'react';
    
const PersonCard = (props) => {
    return (
        <div>
            <h2> { props.name } </h2>
            <p>Age: { props.age }</p>
            <p>Occupation: { props.occupation }</p>
            <p>Hometown: { props.home } </p>

    </div>
    )
}
export default PersonCard;