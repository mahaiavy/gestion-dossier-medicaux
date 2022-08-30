import React from 'react';
import {Route,Link} from 'react-router-dom';

const LigneTablePatient=(props)=>{


    return(
            <tr className="text-center active pagesLine" type="button" onDoubleClick={props.onDoubleClick} >
                    <td className="" >{props.patientes.nom}</td><td className="">{props.patientes.prenom}</td>
                    <td className="">{props.patientes.age}</td><td className="">{props.patientes.genre}</td>
                    <td className="">{props.patientes.lot} {props.patientes.fkt}/{props.patientes.commune}</td>
                    <td className="">{props.patientes.tel}</td>
                    <td className="">               
                <span type="button"><i className="font-normal fa fa-edit hover:"></i></span>  
              
                <span type="button" className="pl-3 " onClick={props.consulterDossier} ><i className="fa fa-folder-open hover:text-blue-400"></i></span>               
                                        
               
                </td>

            </tr>
    )
}

export default LigneTablePatient;