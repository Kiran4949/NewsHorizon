import React from 'react';
import loading from '../../assets/loading.gif';

const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3 mt-5" src={loading} alt="loading" style={{width: "60px"}} />
        </div>
    )
}

export default Spinner;
