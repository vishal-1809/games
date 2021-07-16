import React from 'react';
import { useState } from 'react';

export default function Calculator() {

    const [val, setVal] = useState("");
    
    const getval = (e) =>{
        setVal(val.concat(e.target.name));
    }

    const clear = () =>{
        setVal("");
    }

    const back = () =>{
        setVal(val.slice(0,-1));
    }

    const clac = () =>{
        try{
            setVal(eval(val).toString());
        }
        catch(err){
            setVal("ERROR");
        }
    }

    return (
        <div className="box">
        <div className="calc">
            <form>
                <input type="text" className="input" value={val}/>
            </form>
            <div className="container">
            <button onClick={clear} className="first op clear">Clear</button>
                    <button onClick={back} className="first op">C</button>
                    <button name="(" onClick={getval} className="first op">(</button>
                    <button name=")" onClick={getval} className="first op">)</button><br />
                    <button name="7" onClick={getval} className="second">7</button>
                    <button name="8" onClick={getval} className="second">8</button>
                    <button name="9" onClick={getval} className="second">9</button>
                    <button name="/" onClick={getval} className="second op">&divide;</button><br />
                    <button name="4" onClick={getval} className="third">4</button>
                    <button name="5" onClick={getval} className="third">5</button>
                    <button name="6" onClick={getval} className="third">6</button>
                    <button name="*" onClick={getval} className="third op">&times;</button><br />
                    <button name="1" onClick={getval} className="fourth">1</button>
                    <button name="2" onClick={getval} className="fourth">2</button>
                    <button name="3" onClick={getval} className="fourth">3</button>
                    <button name="-" onClick={getval} className="fourth op">-</button><br />
                    <button name="0" onClick={getval} className="fifth">0</button>
                    <button name="." onClick={getval} className="fifth">.</button>
                    <button name="+" onClick={getval} className="fifth op">+</button>
                    <button onClick={clac} className="fifth op">=</button><br /><br />
            </div>
        </div>
        </div>
    )
}
