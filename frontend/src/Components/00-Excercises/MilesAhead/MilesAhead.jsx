import {useState} from 'react';

const MilesAhead = () => {

const [step, setSteps] = useState(0);

function increment (){
    setSteps (prev => prev + 1);
}


return(
    <>
        <p>Today you've taken {step} steps!</p>
        <br/>
        <button onClick={increment}>I took another step </button>
    </>
);

}

export default MilesAhead;