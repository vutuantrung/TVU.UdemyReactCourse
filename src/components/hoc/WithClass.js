import React from 'react'

function WithClass(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default WithClass
