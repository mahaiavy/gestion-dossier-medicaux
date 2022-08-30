import React,{useEffect,useState,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import Home from './Home';
import queryString from 'querystring';
import Patient from './patients/Patient';
import Consultation from './consultations/Consultation';
import Surveillance from './surveillance/Surveillance';
import Rapport from './rapport/Rapport';
import AuthContext from '../AuthContext';
import PatientContext from './context/PatientContext';
// import ReactNotification,{store} from 'react-notifications-component';

const Pediatrie=()=>{

  const contextValue=useContext(AuthContext);
  const contextPatientValue=useContext(PatientContext);
  const user=contextValue.user;

    const [actives, setActives] = useState("active");
    const [board, setBoard] = useState(null);
const showSidebar=()=>{
    if(actives==null){
        setActives("active")
    }else{
        setActives(null)
    }
}
useEffect(() => {
    if (board=="active") {
        setBoard(null)
    }else{
        setBoard("active")
    }

  return function () {
      setBoard(null)
  }
}, []);
const activer=(event)=>{
    if(event.currentTarget.name!="board"){
        if (board=="active") {
            setBoard("null");
        }
        event.currentTarget.className="active linke";
      
        console.log(board);
      
    }else{
       
        setBoard("active");
        console.log("board:"+board);
    }
   
}


return(

<div className="mt-28 ">
 
  {/* <contextPatientValue.ReactNotification/> */}
 

<div className="row sides">



        {/* side bar */}

          <div className={"mt-24 sidebar "+actives}>
{/* logo */}
              <div className="mt-3 logo_content">

                <i className="fa fa-bars" id="btn" type="button" onClick={showSidebar}></i>
                <div className="logo">
                <img src="/images/logo.PNG" title="logo_CHRR" alt="logo_CHRR" className=""/> 
                </div>
              </div>

              <ul className=" nav_list">
        

              <li className="mt-5" >
                <Link name="board" className= {"linke "+board} onClick={activer} to="/chrr.vakinankaratra.com/pediatrie">
                <i className="fa fa-home"></i>
                  <span className="links_name"> Tableau de bord</span> 
                  {/* <span className="tooltip"> Tableau de bord</span> */}
                </Link>
              </li>
              <li>
                <Link className="linke" onClick={activer} to="/chrr.vakinankaratra.com/pediatrie/patient/add">
                <i className="text-green-600 fa fa-plus"></i>
                  <span className="links_name"> Nouveau Admission</span>
                                    
                </Link>
                
              </li>
              <li>
                <Link className="linke"  onClick={activer} to="/chrr.vakinankaratra.com/pediatrie/patient">
                <img src="/images/patient.png" title="logo_CHRR" alt="logo_CHRR" className="w-10 h-10 fontimg"/> 
                  <span className="ml-3 links_name"> Patients</span>                  
                </Link>
              </li>
              <li>
                <Link className="linke"  to="/chrr.vakinankaratra.com/pediatrie/consultation">
                <img src="/images/testoscop1.png" title="logo_CHRR" alt="logo_CHRR" className="w-8 h-8 fontimg"/> 
                  <span className="ml-1 links_name">Consultations</span>                  
                </Link>
              </li>
              <li>
                <Link className="linke"  to="/chrr.vakinankaratra.com/pediatrie/surveillance">
                <img src="/images/thermometre.png" title="logo_CHRR" alt="logo_CHRR" className="w-5 h-8 fontimg"/> 
                  <span className="ml-2 links_name"> Surveillances</span>                  
                </Link>
              </li>

              <li>
                <Link className="linke"  to="/chrr.vakinankaratra.com/pediatrie/rapport">
                <i className=" fa fa-2x fa-chart-bar"></i>
                  <span className="ml-1 links_name"> Statistiques</span>                  
                </Link>
              </li>

              </ul>
{/* fin logo */}
          </div>
        
        {/*fin side bar */}     

                        <Route exact path="/chrr.vakinankaratra.com/pediatrie" component={Home}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" component={Patient}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier/:id" component={Patient}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" component={Patient}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" component={Consultation}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/:id" component={Consultation}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" component={Surveillance}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/:id" component={Surveillance}/>
                        <Route exact path="/chrr.vakinankaratra.com/pediatrie/rapport" component={Rapport}/>




{/* 
        <Route exact path="/chrr.vakinankaratra.com/pediatrie" >
                {user && <Home/>} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" >
                {user && <Patient />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier" >
                {user && <Patient  />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" >
                {user && <Patient />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" >
                {user && <Consultation />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/fiche" >
                {user && <Consultation />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" >
                {user && <Surveillance />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/fiche" >
                {user && <Surveillance />} 
        </Route> */}
   
                             
                  
       
                        </div>          
</div>

);
}

export default React.memo(Pediatrie);