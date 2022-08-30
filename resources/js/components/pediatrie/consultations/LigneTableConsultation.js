import React from 'react';

const LigneTableConsultation=(props)=>{


    return(
 
            <tr className="text-center active" type="button" onDoubleClick={props.onDoubleClick} >

                  <td className="">{props.patientes.id}</td>
                    <td className="" >{props.patientes.nom}</td><td className="">{props.patientes.prenom}</td>
                    <td className="">{props.patientes.age} mois</td><td className="">{props.patientes.genre}</td>
                    <td className="">{props.patientes.lot} {props.patientes.fkt}/{props.patientes.commune}</td>
                    <td className="">{props.patientes.motif}</td>
                    <td className="">{props.patientes.mode}</td>
                    <td className="">{props.patientes.salleped_id}</td>
                    <td className="">{props.patientes.lit}</td>
                    <td className="">{props.patientes.date_admission} {props.patientes.heure_admission}</td>
                    <td className="">               
                    <span type="button"><i className="font-normal fa fa-edit hover:"></i></span>  
              
              <span type="button" className="p-1 ml-3 text-white rounded-full fa fa-plus bg-success button-small" onClick={props.createConsultation} ></span>               
              <span data-toggle="modal" onClick={props.fermer} data-target="modalFermer" type="button" className="pl-3 "><i className=" hover:text-blue-400 fa fa-folder"></i></span>               
                                                                            
                </td>

            </tr>
           
    )
}

export default LigneTableConsultation;