import React from 'react';

const Single = (props) => {
    return (
        < div className = "Post" >
            this is the {props.match.params.slug}
           </div>
    )
}

export default Single;
