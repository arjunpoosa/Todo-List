import { useState } from "react";

export default function Lodo() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    let bluemoves = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    };

    let yellowmoves = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    };

    let greenmoves = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        });
    };

    let redmoves = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        });
    };

    return (
        <div>
            <p  >
                <p>Blue moves: {moves.blue}</p>
                <button onClick={bluemoves} style={{backgroundColor:"blue"}}>+1</button>
                </p>
                <p  >
                <p>Yellow moves: {moves.yellow}</p>
                <button onClick={yellowmoves} style={{backgroundColor:"yellow", color:"black"} }>+1</button>
                </p>
                <p  >
                <p>Green moves: {moves.green}</p>
                <button onClick={greenmoves} style={{backgroundColor:"green"}}>+1</button>
                </p>
                <p  >
                <p>Red moves: {moves.red}</p>
                <button onClick={redmoves} style={{backgroundColor:"red"}}>+1</button>
                </p>
        </div>
    );
}
