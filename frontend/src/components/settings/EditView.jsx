import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-secondary px-4" type='button'>
            {props.text}
        </button>
    );
}

const EditView = (props) => {
    return (
        <div>
        </div>
    );
};



export default EditView;
