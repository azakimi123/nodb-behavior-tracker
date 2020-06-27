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
        <div>
            <h2 className='form-title'>BEHAVIOR LOG</h2>
            <section className='tracked-behavior-display'>

                {mappedBehaviors}
            </section>
        </div>
    )
}

export default Tracked;