import React from 'react';

const ScrollContent = (props) => {
    return (<React.Fragment>
        <h2>You found the {props.clue}</h2>
        {props.imgLink ? <div>
            <img src={props.imgLink} alt={props.clue} />
        </div>: null}
    </React.Fragment>);
}
 
export default ScrollContent;