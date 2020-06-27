import React from 'react';
import Edit from './Edit';

const Tracked = (props) => {
      let mappedBehaviors = props.behaviorLog.map((behavior, index) => (
    <Edit 
        key={index} 
        behavior={behavior}
        deleteFn={props.deleteFn}
        editFn={props.editFn}/>
  ))
    return (
        <div className='tracked-behavior-display'>
            {mappedBehaviors}
        </div>
    )
}

export default Tracked;