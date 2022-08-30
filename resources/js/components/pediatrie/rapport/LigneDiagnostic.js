import React,{useState,useEffect,useContext,useRef} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';

const LigneDiagnostic=({diag,c0,d0,c29,d29,c1,d1,c5,d5})=>{


return(

    <tr className="text-center border-gray-500">
    <td className="text-center border-4 border-black ">{diag}</td>
    <td>{c0}</td>
    <td>{d0}</td>
    <td>{c29}</td>
    <td>{d29}</td>
    <td>{c1}</td>
    <td>{d1}</td>
    <td >{c5}</td>
    <td>{d5}</td>
 
    </tr>

               
 

);
}
export default React.memo(LigneDiagnostic);