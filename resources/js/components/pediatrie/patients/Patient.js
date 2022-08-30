import React,{useState,useEffect,useContext} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import ListePatient from './ListePatient';
import DossierPatient from './DossierPatient';
import AddFormPediatrie from './AddFormPediatrie';
import AuthContext from  '../../AuthContext';
import DossierContext from  './DossierContext';
import PatientContext from '../context/PatientContext';
// import ReactNotification,{store} from 'react-notifications-component';



const Patient=()=>{

        // const [idpatient, setIdpatient] = useState();

        // const contextValue=useContext(AuthContext);
        // const contextPatientValue=useContext(PatientContext);
        // const contextValues=({
        //         idpatient,
        //         createIdpatient:setIdpatient
        // });
        // const user=contextValue.user;
 

return(

        <main role="main" className="pt-3 pl-4 home_content col-lg-11">
                {/* <contextPatientValue.ReactNotification/> */}
             {/* row 2 contenue nav droite */}
             <div className="row">

                    {/* dix dernier consultation */}


                    <div className=" col-md-12">

                {/* <DossierContext.Provider value={contextValues}>
                <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" >
                {idpatient ? <DossierPatient idpatient={idpatient} /> : <ListePatient/> } 
                </Route>

                <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier" >
                        {idpatient && <DossierPatient idpatient={idpatient} />} 
                </Route>
                </DossierContext.Provider>

                <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" >
                        {user && <AddFormPediatrie />} 
                </Route> */}

                    <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" component={ListePatient}/>
                    <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier/:id" component={DossierPatient}/>
                    <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" component={AddFormPediatrie}/>


                    </div>


                    {/* fin dix dernier consultation */}

                    </div>
                    {/* fin row 2 contenue nav droite */}
         
        </main>
     

);
}
export default React.memo(Patient);