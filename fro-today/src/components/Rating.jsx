import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function HalfRating({setRating}) {

    const handleChange = (event) => {
        setRating(event.target.value)
    
    };

  return (
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={handleChange} />
  );
}