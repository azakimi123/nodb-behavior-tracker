import React from 'react';
import Edit from './Edit';

const Tracked = (props) => {
      let mappedBehaviors = props.behaviorLog.map((behavior, index) => (
    <Edit key={index} behavior={behavior}/>
  ))
    return (
        <div>
            {mappedBehaviors}
        </div>
    )
}

export default Tracked;