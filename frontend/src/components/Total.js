import React from 'react';

function Total(props){

    return (
            <div className="col">
              <div className="card">
                <div className={`card-header bg-${props.type} text-white`}>
                  {props.text}
                </div>
                <div className="card-body">
                  {props.amount}
                </div>
              </div>
            </div>
        );
}


export default Total;
