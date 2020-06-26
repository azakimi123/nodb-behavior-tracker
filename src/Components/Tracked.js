import React from 'react';
import Edit from './Edit';

const Tracked = (props) => {
      let mappedBehaviors = props.behaviorLog.map((behavior, index) => (
    <Edit 
        key={index} 
        behavior={behavior}
        deleteFn={props.deleteFn}/>
  ))
    return (
        <div className='tracked-behavior-display'>
            {mappedBehaviors}
        </div>
    )
}

export default Tracked;