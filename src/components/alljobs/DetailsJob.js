import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsJob = () => {
    const {state} = useLocation()
 const {job} = state
    return (
        <div>
            <h1> Job details {job.name} </h1>
            
        </div>
    );
};

export default DetailsJob;