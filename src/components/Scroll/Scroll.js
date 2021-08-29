import React from 'react';

const Scroll = (props) => {
    return <React.Fragment>
        <div className="overlay">
        </div>
        <div class="scoll">
            {props.children}
        </div>
    </React.Fragment>;
}
 
export default Scroll;