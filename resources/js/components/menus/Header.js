import React,{useState,useEffect,useRef,useContext,useLayoutEffect,useCallback,useMemo} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import Pediatrie from '../pediatrie/Pediatrie';
import Nav from './Nav';
import Acceuil from '../Acceuil';
import AuthContext from '../AuthContext';
import PatientContext from '../pediatrie/context/PatientContext';
import ReactNotification,{store} from 'react-notifications-component';


const wait=function (duration=1000) {
    return new Promise((resolve)=>{
      window.setTimeout(resolve,duration)
    })
  }

const Header=()=>{

    // const [count, setCount] = useState(0);
    const [notifsuccess, setNotifsuccess] = useState(null);
    const [patients, setPatients] = useState(null);
    const [consultations, setConsultations] = useState(null);
    const [surveillances, setSurveillances] = useState(null);
    const [count, setCount] = useState(0);

    const socket = useRef();
   

    useEffect(() => {
        window.localStorage.setItem("count",count);
    }, [])


// admission
const newAdmission=(data)=>{

socket.current.emit("newAdmission",data);
    
    }

    
// soin
const newSoin=async(data)=>{
  
    socket.current.emit("newSoin",data);
   
   }

      // Surveillance
const newSurveillance=async(data)=>{
  
    socket.current.emit("newSurveillance",data);
   
   }

// Antecedent
const newAntecedent=async(data)=>{
  
    socket.current.emit("newAntecedent",data);
   
   }

//notification
   const handleNotification=(reponse)=>{

    store.addNotification({
        title:"New card Add",
        message:reponse,
        type:"success",
        container:"top-right",
        insert:"bottom",
        animationIn: ["animated","fadeIn"],
        animationOut: ["animated","fadeOut"],
        dismiss:{
          duration:4000,
          showIcon:true
        },
        
    })
  } 


  const un=1;
     //connecte server
useEffect( async() => {
 
        socket.current=io("ws://"+adresseIP+":5000");
        await wait(1000);
        socket.current.emit("addUser",user.id);
        socket.current.on("getUsers",users=>{
            console.log(users)
        });

      
  return () => {
   socket.current.emit("disconnect");
//    socket.current.off();
}
}, [un]);

    const contextValue=useContext(AuthContext);

    const user=contextValue.user;

    const contextValues=({
        ReactNotification,
        socket:io("ws://"+adresseIP+":5000"),
        patients,
        consultations,
        surveillances,
        createPatient:setPatients,
        createConsultation:setConsultations,
        createSurveillance:setSurveillances,
        createAdmission:newAdmission,
        createSoin:newSoin,
        createActe:newSurveillance,
        createAntecedent:newAntecedent,
        createNotification:handleNotification
    });





useEffect(() => {

    if (count>=0) {
        setCount(Number(window.localStorage.getItem("count"))  +1);
        console.log(count);
    }
 
  }, [count])



useEffect( async() => {

    await wait(1000);

    socket.current.emit("demandePatient",user.id);
    socket.current.emit("demandeConsultation",user.id);
    socket.current.emit("demandeSurveillance",user.id);

    //getAllPatient
    socket.current.on("getAllPatient",pats=>{
        setPatients(pats);     
      
    });

    //getAllConsultation
    socket.current.on("getAllConsultation",cons=>{
        setConsultations(cons);      
    });

  
}, []);

const notifRight=useCallback(
    () => {

        
        //notif ajout success
      socket.current.on("ajoutsuccess",reponse=>{
        console.log("success");
        setNotifsuccess(reponse);
      handleNotification(reponse);
  
   });
    },
    [notifsuccess],
)

useEffect(() => {


     notifRight();

  

     setCount(Number(localStorage.getItem("count"))  +1);
    //  setCount(c+1);
    
   
}, [])
 

   
return(
      
//tete

<div  className="">

<ReactNotification/>   

<Nav user={user}/>
<PatientContext.Provider value={contextValues}>
        <Route exact path="/chrr.vakinankaratra.com/home" >
                {user && <Acceuil />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie" >
                {user && <Pediatrie  />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/fiche" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" >
                {user && <Pediatrie />} 
        </Route>

        <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/fiche" >
                {user && <Pediatrie />} 
        </Route>
        <Route exact path="/chrr.vakinankaratra.com/pediatrie/rapport" >
                {user && <Pediatrie />} 
        </Route>
        </PatientContext.Provider >

{/* <Contenue/> */}



</div>


  
);
}
export default React.memo(Header);

//get Message
// useEffect(() => {

//     console.log("arrivalmesage :"+arrivalMessage);
  
// }, [arrivalMessage]);


// const sendMessage=(event)=>{
//     event.preventDefault();

//    socket.current.emit("sendMessage",{
//        senderId:user.userId,
//        receiverId:"2",
//        text:message
//    })

// }