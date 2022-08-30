import React from 'react';

const LigneTableSurveillance=(props)=>{


    return(
        <tr className="text-center active" type="button" onDoubleClick={props.onDoubleClick} >
        <td className="">{props.patientes.soinped_id}</td>
          <td className="" >{props.patientes.nom}</td><td className="">{props.patientes.prenom}</td>
          <td className="">{props.patientes.age} mois</td><td className="">{props.patientes.genre}</td>
          <td className="">{props.patientes.motif}</td>
          <td className="">{props.patientes.mode}</td>
          <td className="">{props.patientes.salleped_id}</td>
          <td className="">{props.patientes.lit}</td>
          <td className="">{props.patientes.date_admission} {props.patientes.heure_admission}</td>
          <td className="">               
      <span type="button" className="px-2 py-1 text-white bg-info">{props.patientes.updated_at}</span>                               
                   
      </td>

  </tr>
    )
}

export default React.memo(LigneTableSurveillance);