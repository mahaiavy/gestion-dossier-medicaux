import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
 import NavBar from './Navigation/Navigations';
// import Login from './Login/Login';
// import Acceuil from './menus/Header';
 import AuthContext from './AuthContext';



const App=()=>{
    
    const [user, setUser] = useState(null);
    const un=1;
    useEffect(() => {

        axios.get(`http://${adresseIP}:8000/user/connected`).then((response)=>{
              
            setUser(response.data);
       
        
                    });

    }, [un]);

    const contextValue={
        user,
        socket:io(`ws://${adresseIP}:5000`),
        createUser:setUser
    }

   
return(

    <Router>

    <Switch>
    <AuthContext.Provider value={contextValue}> 
   {user && <NavBar />} 
    </AuthContext.Provider>  
    </Switch>

    </Router>

//     <Router>

//     <Switch>
//         <AuthContext.Provider value={contextValue}>

//             <Route exact path="/chrr.vakinankaratra.com/home" >
//             {user && <Acceuil user={user}/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie" >
//             {user && <Acceuil user={user}/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" >
//             {user && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier" >
//             {user && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" >
//             {user && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" >
//             {user && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/fiche" >
//             {user  && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" >
//             {user && <Acceuil/>} 
//             </Route>

//             <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/fiche" >
//             {user && <Acceuil/>} 
//             </Route>

//         </AuthContext.Provider>
        
//     </Switch>

// </Router>


    
);
}

if(document.getElementById('root')){
    ReactDOM.render(<App />,document.getElementById('root'));
}