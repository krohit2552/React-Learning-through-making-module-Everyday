import React, { useRef } from 'react';
import './App.css';

function A() {
    const InputEl = useRef();

    const focusInput = () => {
        InputEl.current.focus();
    }
    return (
        <div className="App">
            <intput type="text" ref={InputEl} />
            <button onClick={focusInput}>focus Input</button>
        </div>
    )
}

export default A