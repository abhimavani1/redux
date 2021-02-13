import React, { useEffect } from 'react'
import { connect } from 'react-redux';

function Countss(props) {
    console.log(props.count);
    function incerement() {
        props.dispatch({ type: "inecrement" })
    }
    function decerement() {
        if (props.count) {
            props.dispatch({ type: "dnecrement" })
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={incerement}>+</button>
            <h1>{props.count}</h1>
            <button onClick={decerement}>-</button>
        </div>
    )
} const mapStateToProps = (props) => ({
    count: props.count
})
export default connect(mapStateToProps)(Countss);