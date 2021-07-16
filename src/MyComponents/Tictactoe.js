import React from 'react';
import { useState } from 'react';

let cnt=0;
let a=["","","","","","","","","",""];
let turn="X";
let winner="";

export default function Tictactoe() {

    const [valxo1, setValxo1] = useState("");
    const [valxo2, setValxo2] = useState("");
    const [valxo3, setValxo3] = useState("");
    const [valxo4, setValxo4] = useState("");
    const [valxo5, setValxo5] = useState("");
    const [valxo6, setValxo6] = useState("");
    const [valxo7, setValxo7] = useState("");
    const [valxo8, setValxo8] = useState("");
    const [valxo9, setValxo9] = useState("");

    const check=()=>{
        if(a[1]===a[2] && a[2]===a[3]){
            if(a[1]==="X")winner="X wins the game";
            else if(a[1]==="O") winner="O wins the game";
        }
        else if(a[1]===a[4] && a[4]===a[7]){
            if(a[1]==="X")winner="X wins the game";
            else if(a[1]==="O") winner="O wins the game";
        }
        else if(a[1]===a[5] && a[5]===a[9]){
            if(a[1]==="X")winner="X wins the game";
            else if(a[1]==="O") winner="O wins the game";
        }
        else if(a[2]===a[5] && a[5]===a[8]){
            if(a[2]==="X")winner="X wins the game";
            else if(a[2]==="O") winner="O wins the game";
        }
        else if(a[3]===a[6] && a[6]===a[9]){
            if(a[3]==="X")winner="X wins the game";
            else if(a[3]==="O") winner="O wins the game";
        }
        else if(a[3]===a[5] && a[5]===a[7]){
            if(a[3]==="X")winner="X wins the game";
            else if(a[3]==="O") winner="O wins the game";
        }
        else if(a[4]===a[5] && a[5]===a[6]){
            if(a[4]==="X")winner="X wins the game";
            else if(a[4]==="O") winner="O wins the game";
        }
        else if(a[7]===a[8] && a[8]===a[9]){
            if(a[7]==="X")winner="X wins the game";
            else if(a[7]==="O") winner="O wins the game";
        }
        else if(cnt===9){
            // console.log("Draw");
            winner="Draw";
        }
    }

    const got = ()=>{
        if(a[1]===""){
            setValxo1("-");
            a[1]="-";
        }
        if(a[2]===""){
            setValxo2("-");
            a[2]="-";
        }
        if(a[3]===""){
            setValxo3("-");
            a[3]="-";
        }
        if(a[4]===""){
            setValxo4("-");
            a[4]="-";
        }
        if(a[5]===""){
            setValxo5("-");
            a[5]="-";
        }
        if(a[6]===""){
            setValxo6("-");
            a[6]="-";
        }
        if(a[7]===""){
            setValxo7("-");
            a[7]="-";
        }
        if(a[8]===""){
            setValxo8("-");
            a[8]="-";
        }
        if(a[9]===""){
            setValxo9("-");
            a[9]="-";
        }
    }

    const game = (e) =>{
        if(a[e.target.name]!==""){
            // console.log(a[e.target.name]);
        }
        else{
            if(cnt%2===0){
                cnt++;
                if(e.target.name==="1")setValxo1("X");
                else if(e.target.name==="2")setValxo2("X");
                else if(e.target.name==="3")setValxo3("X");
                else if(e.target.name==="4")setValxo4("X");
                else if(e.target.name==="5")setValxo5("X");
                else if(e.target.name==="6")setValxo6("X");
                else if(e.target.name==="7")setValxo7("X");
                else if(e.target.name==="8")setValxo8("X");
                else if(e.target.name==="9")setValxo9("X");
                a[e.target.name]="X";
                turn="O";
                check();
                if(winner!==""){
                    got();
                }
                // console.log(winner);
            }
            else{  
                cnt++;          
                if(e.target.name==="1")setValxo1("O");
                else if(e.target.name==="2")setValxo2("O");
                else if(e.target.name==="3")setValxo3("O");
                else if(e.target.name==="4")setValxo4("O");
                else if(e.target.name==="5")setValxo5("O");
                else if(e.target.name==="6")setValxo6("O");
                else if(e.target.name==="7")setValxo7("O");
                else if(e.target.name==="8")setValxo8("O");
                else if(e.target.name==="9")setValxo9("O");
                a[e.target.name]="O";
                turn="X";
                check();
                if(winner!==""){
                    got();
                }
                
                // console.log(winner);
            }
        }
    }

    const newGame = ()=>{
        setValxo1("");
        setValxo2("");
        setValxo3("");
        setValxo4("");
        setValxo5("");
        setValxo6("");
        setValxo7("");
        setValxo8("");
        setValxo9("");
        cnt=0;
        a=["","","","","","","","","",""];
        winner="";
        turn="X";
    }

    return (
        <>
        <div className="turn">{turn} Turn</div>
        <button className="btn" onClick={newGame}>NEW GAME</button>
        <div className="winner">
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading win">{winner}</h4>
            </div>
        </div>
        <div className="tic">
            <input name="1" className="one" onClick={game} value={valxo1} readOnly/>
            <input name="2" className="one" onClick={game} value={valxo2} readOnly/>
            <input name="3" className="one" onClick={game} value={valxo3} readOnly/><br />
            <input name="4" className="two" onClick={game} value={valxo4} readOnly/>
            <input name="5" className="two" onClick={game} value={valxo5} readOnly/>
            <input name="6" className="two" onClick={game} value={valxo6} readOnly/><br />
            <input name="7" className="three" onClick={game} value={valxo7} readOnly/>
            <input name="8" className="three" onClick={game} value={valxo8} readOnly/>
            <input name="9" className="three" onClick={game} value={valxo9} readOnly/><br />
        </div>
        </>
    )
}

