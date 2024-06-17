import { useCallback } from "react";
import { useRef } from "react"; //this is needed to include
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef=useRef();
    // useEffect(() => {
    //     document.getElementById("inputBox").focus()
    // }, []);

    useEffect(() => {
            inputRef.current.focus()
        }, []);

    const handleButtonClick = () => {
        //document.getElementById("inputBox").focus()   //for useEffect one with dom "inputBox"
        inputRef.current.focus()
        //statement that focuses the element with the id inputBox.
    };

    return (
        <div>
            <input ref={inputRef} type="text" id="inputBox" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
