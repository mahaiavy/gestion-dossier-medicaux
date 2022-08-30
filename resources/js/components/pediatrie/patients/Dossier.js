import React,{useState,useEffect ,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import LigneTablePatient from './LigneTablePatient';
import AuthContext from  '../../AuthContext';
import DossierContext from  './DossierContext';
import PatientContext from '../context/PatientContext';
import {useForm} from 'react-hook-form';

const Dossier=({dossier})=>{
    console.log(dossier);
    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});

    return(
   
         <div className="p-4 tab-pane fade row" id="nav-dossier" role="tabpanel" aria-labelledby="nav-dossier-tab">    
        {/* col 1 */}
    <div className=" col-md-6">

    </div>

    
    <div className=" col-md-6">

    </div>
    {/* fin col 2 */}

    {/* fin row */}
    </div>
    )

}
export default React.memo(Dossier);