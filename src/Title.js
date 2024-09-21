import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h1 style={{ textAlign: "center", borderBottom: "5px solid red" }}>
                {props.mainTitle}
            </h1>
        </div>
    )
}
