import React,{useState,useEffect,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import ListeConsultation from './ListeConsultation';
import FicheConsultation from './FicheConsultation';
// import AuthContext from  '../../AuthContext';
// import DossierContext from  './DossierContext';
// import PatientContext from '../context/PatientContext';




const Consultation=()=>{

//     const[admission_id,setAdmission_id] = useState();

//     const contextPatientValue=useContext(PatientContext);
   
//     const contextValues=({
//         admission_id,
//         createAdmission_id:setAdmission_id
// });


return(

    <main role="main" className="pt-3 home_content col-lg-11">
        {/* <contextPatientValue.ReactNotification/> */}
         {/* row 2 contenue nav droite */}
         <div className="row">

                {/* dix dernier consultation */}


                <div className=" col-md-12">

                {/* <DossierContext.Provider value={contextValues}>
                <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" >
                {admission_id ? <FicheConsultation admission_id={admission_id} /> : <ListeConsultation /> } 
                </Route>

                <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/fiche" >
                        {admission_id && <FicheConsultation admission_id={admission_id}/>} 
                </Route>
                </DossierContext.Provider> */}

                   <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" component={ListeConsultation}/>
                    <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/:id" component={FicheConsultation}/>
                 


                </div>


                {/* fin dix dernier consultation */}

                </div>
                {/* fin row 2 contenue nav droite */}
     
    </main>


);
}
export default React.memo(Consultation);