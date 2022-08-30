import React,{useState,useEffect ,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import LigneTablePatient from './LigneTablePatient';
import AuthContext from  '../../AuthContext';
import DossierContext from  './DossierContext';
import PatientContext from '../context/PatientContext';

const Information=({patient})=>{


    return(
   
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        {/* row information */}
        <div className="p-2 font-semibold text-center text-blue-900">Les Informations du patient</div>
         <div className="pl-4 row">

             {/* col 1 dans row information */}

             <div className="pt-8 font-bold col-md-3">
               
                 <p className="pb-2">Nom et Prénom :</p>
                
                 
                 <p className="pb-2">Genre :</p>
                 <p className="pb-2">Age :</p>
                 <p className="pb-2">Date de naissance :</p>
                 <p className="pb-2">Lieu de naissance :</p>
                 <p className="pb-2">Lot :</p>
                 <p className="pb-2">Fokontany :</p>
                 <p className="pb-2">Commune :</p>
                 <p className="pb-2">District :</p>
                 <p className="pb-2">Region :</p>
                 <p className="pb-2">Nom de la mère :</p>
                 <p className="pb-2">Nom du père :</p>
                 <p className="pb-2">Profession mère :</p>
                 <p className="pb-2">Profession père :</p>
                                                            
                 <p className="pb-2">Situation matrimoniale de la mère :</p>
                 <p className="pb-2">Contact :</p>                  
                 <p className="pb-2">Religion :</p>
             </div>

             {/* fin col 1 dans row information */}

             {/* col 2 dans row information */}
             <div className="pt-8 col-md-8">
                
             <p className="pb-2"><span className="pr-1">{patient[0].nom ? patient[0].nom : '----------------'}</span><span>{patient[0].prenom ? patient[0].prenom : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].genre ? patient[0].genre : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].age ? patient[0].age : '----------------'}</span><span className="pl-1">mois</span></p>
                 <p className="pb-2"><span>{patient[0].date_naissance ? patient[0].date_naissance : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].lieu_naissance ? patient[0].lieu_naissance : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].lot ? patient[0].lot : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].fkt ? patient[0].fkt : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].commune ? patient[0].commune : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].distric ? patient[0].distric : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].region ? patient[0].region : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].nom_mere ? patient[0].nom_mere : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].nom_pere ? patient[0].nom_pere : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].profession_mere ? patient[0].profession_mere : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].profession_pere ? patient[0].profession_pere : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].situation_mere ? patient[0].situation_mere : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].tel ? patient[0].tel : '----------------'}</span></p>
                 <p className="pb-2"><span>{patient[0].religion ? patient[0].religion : '----------------'}</span></p>
                 
             </div>
              {/*fin col 2 dans row information */}

         </div>
         {/* fin row information */}
 </div>
    )

}
export default React.memo(Information);