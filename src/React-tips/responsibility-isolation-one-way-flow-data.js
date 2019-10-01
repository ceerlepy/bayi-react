import { useState } from "react";

function Button(props){
    const handleClick = () => props.onClickFunction(props.increment);
    return(
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props){
    return(
        <div>{props.message}</div>
    );
}

function App(){
    const [counter, setCounter] = useState(42);
    const onClickFunction = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <div>
            <Button onClick={onClickFunction} increment={1}/>
            <Button onClick={onClickFunction} increment={5}/>
            <Button onClick={onClickFunction} increment={10}/>
            <Button onClick={onClickFunction} increment={20}/>
            <Display message={counter}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));