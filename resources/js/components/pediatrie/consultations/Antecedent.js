import React,{useContext} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import AntecedentPersonnels from './AntecedentPersonnels';
import DataTableTesta from './ligneantecedent/dataTableTesta';
import PatientContext from '../context/PatientContext';

const Antecedent=({patient,id,soin})=>{

    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
    const contextPatientValue=useContext(PatientContext);


    return(
           
    <div className= "tab-pane fade" id="nav-antecedent" role="tabpanel" aria-labelledby="nav-antecedent-tab">
   {/* <contextPatientValue.ReactNotification/> */}
             {/* row antecendent */}
             <div className="p-2 font-semibold text-center text-blue-900">Antecedent</div>
             
              <div className="pl-4 row">


                
                            {/* personnel */}
                            <AntecedentPersonnels id={id} />
                            {/* personnel */}
                           
                       

                    {/* testa */}
                
              </div>
              {/* fin row antecedent */}
      </div>
   
    );
}
export default React.memo(Antecedent);