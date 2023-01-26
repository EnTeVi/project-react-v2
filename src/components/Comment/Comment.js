import React from 'react';

const Comment = ({comment}) => {
    const {id} = comment;

    return (
        <div>
            <div>
                <p>Id: {id}</p>
            </div>

            <div>
                <button onClick={() => {

                }}>

                </button>
            </div>
        </div>
    );
};

export {Comment};