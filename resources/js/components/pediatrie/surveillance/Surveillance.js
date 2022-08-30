import React,{useState,useEffect,useContext,useRef} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import ListeSurveillance from './ListeSurveillance';
import FicheSurveillance from './FicheSurveillance';
// import AuthContext from  '../../AuthContext';
// import DossierContext from  './DossierContext';
// import PatientContext from '../context/PatientContext';





const Surveillance=()=>{


    // const [soinped_id, setSoinped_id] = useState();
    // const contextValue=useContext(AuthContext);
    // const contextPatientValue=useContext(PatientContext);
    // // const user=contextValue.user;
    // const contextValues=({
    //         soinped_id,
    //         createSoinped_id:setSoinped_id
    // });
 

return(

    

    <main role="main" className="pt-3 home_content col-lg-11">

         {/* row 2 contenue nav droite */}
         <div className="row">

                {/* dix dernier consultation */}


                <div className=" col-md-12">

                {/* <DossierContext.Provider value={contextValues}>
                <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" >
                {soinped_id ? <FicheSurveillance soinped_id={soinped_id}/> : <ListeSurveillance /> } 
                </Route>

                <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/fiche" >
                {soinped_id  &&   <FicheSurveillance soinped_id={soinped_id} /> } 
                </Route>
                </DossierContext.Provider> */}

                 <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" component={ListeSurveillance}/>
                <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/:id" component={FicheSurveillance}/>
           


                </div>


                {/* fin dix dernier consultation */}

                </div>
                {/* fin row 2 contenue nav droite */}
     
    </main>
 

);
}
export default React.memo(Surveillance);