import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";

export default function Convertor() {
  
  const [forval, setForval] = useState("____");
  const [toval, setToval] = useState("____");
  const [ans, setAns] = useState();

  const putforval = (e)=>{
    setForval(e.target.name);
    // console.log(e.target.name);
  }

  const puttoval = (e)=>{
    setToval(e.target.name);
    // console.log(e.target.name);
  }

  const solve = () => {
    if(forval==="____" || toval==="____"){
      alert("Invalid Types to Convert");
    }
    else if(forval==="Kilometer" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Kilometer" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.621371);
    }
    else if(forval==="Kilometer" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000);
    }
    else if(forval==="Kilometer" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*100000);
    }
    else if(forval==="Kilometer" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000);
    }
    else if(forval==="Kilometer" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000000);
    }
    else if(forval==="Kilometer" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000000000);
    }
    else if(forval==="Kilometer" && toval==="Yard"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1093.61);
    }
    else if(forval==="Kilometer" && toval==="Foot"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*3280.84);
    }
    else if(forval==="Kilometer" && toval==="Inch"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*39370.1);
    }
    else if(forval==="Kilometer" && toval==="Nautical Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.539957);
    }

    else if(forval==="Meter" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Meter" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.001);
    }
    else if(forval==="Meter" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*100);
    }
    else if(forval==="Meter" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000);
    }
    else if(forval==="Meter" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000);
    }
    else if(forval==="Meter" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000000);
    }
    else if(forval==="Meter" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000621371);
    }
    else if(forval==="Meter" && toval==="Yard"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1.09361);
    }
    else if(forval==="Meter" && toval==="Foot"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*3.28084);
    }
    else if(forval==="Meter" && toval==="Inch"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*39.3701);
    }
    else if(forval==="Meter" && toval==="Nautical Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000539957);
    }

    else if(forval==="Centimeter" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.00001);
    }
    else if(forval==="Centimeter" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.01);
    }
    else if(forval==="Centimeter" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Centimeter" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*10);
    }
    else if(forval==="Centimeter" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*10000);
    }
    else if(forval==="Centimeter" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*10000000);
    }
    else if(forval==="Centimeter" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/160934);
    }
    else if(forval==="Centimeter" && toval==="Yard"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.0109361);
    }
    else if(forval==="Centimeter" && toval==="Foot"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.0328084);
    }
    else if(forval==="Centimeter" && toval==="Inch"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.393701);
    }
    else if(forval==="Centimeter" && toval==="Nautical Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/185200);
    }

    else if(forval==="Millimeter" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Millimeter" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000001);
    }
    else if(forval==="Millimeter" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.001);
    }
    else if(forval==="Millimeter" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.1);
    }
    else if(forval==="Millimeter" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000);
    }
    else if(forval==="Millimeter" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000000);
    }
    else if(forval==="Millimeter" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/(1.609*1000000));
    }
    else if(forval==="Millimeter" && toval==="Yard"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.00109361);
    }
    else if(forval==="Millimeter" && toval==="Foot"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.00328084);
    }
    else if(forval==="Millimeter" && toval==="Inch"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.0393701);
    }
    else if(forval==="Millimeter" && toval==="Nautical Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/(1.852*1000000));
    }

    else if(forval==="Micrometer" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000000001);
    }
    else if(forval==="Micrometer" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000001);
    }
    else if(forval==="Micrometer" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.0001);
    }
    else if(forval==="Micrometer" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.001);
    }
    else if(forval==="Micrometer" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Micrometer" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1000);
    }
    else if(forval==="Micrometer" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/(1.609*10000000000));
    }
    else if(forval==="Micrometer" && toval==="Yard"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/914400);
    }
    else if(forval==="Micrometer" && toval==="Foot"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/304800);
    }
    else if(forval==="Micrometer" && toval==="Inch"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/25400);
    }
    else if(forval==="Micrometer" && toval==="Nautical Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/(1.852*100000000));
    }

    else if(forval==="Nanometer" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000000000001);
    }
    else if(forval==="Nanometer" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000000001);
    }
    else if(forval==="Nanometer" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.0000001);
    }
    else if(forval==="Nanometer" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.000001);
    }
    else if(forval==="Nanometer" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*0.001);
    }
    else if(forval==="Nanometer" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
    else if(forval==="Nanometer" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con/(1.609*10000000000000));
    }

    else if(forval==="Mile" && toval==="Kilometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1.60934);
    }
    else if(forval==="Mile" && toval==="Meter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1609.34);
    }
    else if(forval==="Mile" && toval==="Centimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*160934);
    }
    else if(forval==="Mile" && toval==="Millimeter"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1.609*1000000);
    }
    else if(forval==="Mile" && toval==="Micrometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1.609*1000000000);
    }
    else if(forval==="Mile" && toval==="Nanometer"){
      let con = document.getElementById("floatingInput").value;
      setAns(con*1.609*1000000000000);
    }
    else if(forval==="Mile" && toval==="Mile"){
      let con = document.getElementById("floatingInput").value;
      setAns(con);
    }
  }

    return (
        <>
        <div className="btns conv"> <strong>From : </strong> 
          <button name="Kilometer" onClick={putforval} className="btn btns convbtn">Kilometer</button>
          <button name="Mile" onClick={putforval} className="btn btns convbtn">Mile</button>
          <button name="Meter" onClick={putforval} className="btn btns convbtn">Metre</button>
          <button name="Centimeter" onClick={putforval} className="btn btns convbtn">Centimeter</button>
          <button name="Millimeter" onClick={putforval} className="btn btns convbtn">Millimeter</button>
          <button name="Micrometer" onClick={putforval} className="btn btns convbtn">Micrometer</button>
          <button name="Nanometer" onClick={putforval} className="btn btns convbtn">Nanometer</button>
          {/* <button name="Yard" onClick={putforval} className="btn btns convbtn">Yard</button>
          <button name="Foot" onClick={putforval} className="btn btns convbtn">Foot</button>
          <button name="Inch" onClick={putforval} className="btn btns convbtn">Inch</button>
          <button name="Nautical Mile" onClick={putforval} className="btn btns convbtn">Nautical Mile</button>
          <button name="Weight" onClick={putforval} className="btn btns convbtn">Weight</button>
          <button name="Pound" onClick={putforval} className="btn btns convbtn">Pound</button> */}
        </div>

        <div className="btns conv"><strong>To : </strong>
          <button name="Kilometer" onClick={puttoval} className="btn btns convbtn">Kilometer</button>
          <button name="Mile" onClick={puttoval} className="btn btns convbtn">Mile</button>
          <button name="Meter" onClick={puttoval} className="btn btns convbtn">Metre</button>
          <button name="Centimeter" onClick={puttoval} className="btn btns convbtn">Centimeter</button>
          <button name="Millimeter" onClick={puttoval} className="btn btns convbtn">Millimeter</button>
          <button name="Micrometer" onClick={puttoval} className="btn btns convbtn">Micrometer</button>
          <button name="Nanometer" onClick={puttoval} className="btn btns convbtn">Nanometer</button>
          {/* <button name="Yard" onClick={puttoval} className="btn btns convbtn">Yard</button>
          <button name="Foot" onClick={puttoval} className="btn btns convbtn">Foot</button>
          <button name="Inch" onClick={puttoval} className="btn btns convbtn">Inch</button>
          <button name="Nautical Mile" onClick={puttoval} className="btn btns convbtn">Nautical Mile</button>
          <button name="Weight" onClick={puttoval} className="btn btns convbtn">Weight</button>
          <button name="Pound" onClick={puttoval} className="btn btns convbtn">Pound</button> */}
        </div>

        <h3 className="headings">From {forval} to {toval}</h3>
        <div className="form-floating mb-3 m-4">
            <input type="text" className="form-control inpbox" id="floatingInput" />
            <label htmlFor="floatingInput">From {forval}</label>
        </div>
        <div className="form-floating m-4">
            <input type="text" className="form-control inpbox" id="floatingPassword" value={ans}/>
            <label htmlFor="floatingPassword">To {toval}</label>
        </div>
        <div className="btns">
        <button type="button" className="btn btn-outline-success" onClick={solve}>Calculate</button></div>
        </>
    )
}

