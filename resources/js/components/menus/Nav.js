import React,{useState,useEffect,useRef,useContext} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';

const Nav=()=>{

    const activer=useRef(1);
    const setActiver=(ide)=>{
        activer.current=ide;
      
    }
    const menu=[
        { id:1,nom:'acceuil'},
        { id:2,nom:'maternite'},
        { id:3,nom:'pediatrie'},
        { id:4,nom:'neonatologie'},
        { id:5,nom:'parametres'},
    ]

    let menus=menu.map(men=>{

        if (men.nom=="acceuil") {

            return(
                <li key={men.id} className={"nav-item"} role="presentation">
                <Link  to="/chrr.vakinankaratra.com/home"className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> Acceuil </Link>
                </li>
            )  
                   
               }

        if (men.nom=="maternite") {

    //  return(
    //     <li onClick={()=>setActiver(men.id)}  className={"border-t-2 border-l-2 border-r-2 border-white nav-item "} role="presentation" key={men.id}>
    //     <Link to={"/chrr.vakinankaratra.com/maternite"} className={activer!=men.id ? "font-bold text-blue-900 nav-link maternite " : "font-bold text-blue-900 nav-link maternite border-blue-800 border-b-4"}  type="button"><i className="fa fa-user "></i> Maternité</Link>
    //     </li>
    //  )  
            
        }

        if (men.nom=="pediatrie") {

            return(
                <li  key={men.id} className={" nav-item"} role="presentation">
                <Link to="/chrr.vakinankaratra.com/pediatrie" className="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Pediatrie</Link>
                </li>
            )  
                   
               }

    if (men.nom=="neonatologie") {

    return(
        <li  key={men.id} className={" nav-item"} role="presentation">
   <Link to="/chrr.vakinankaratra.com/neonatologie" className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Neonatologie</Link>
   </li>
    )  
            
        }

    if (men.nom=="parametres") {

        return(
            <li key={men.id} className={" nav-item"} role="presentation">
   <Link to="/chrr.vakinankaratra.com/parametres"  className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"> <i className="fa fa-cogs"></i> Parametrages</Link>
   </li>
        )  
                
            }
        
       
    });

    return(
      
<div className="mt-16 bg-gray-200 border-b-4 border-gray-50 fixed-top align-items-center justify-content-around d-flex"> 


<ul className="font-bold nav nav-tabs colorbleu" id="myTab" role="tablist">
  
 {menus} 
 
</ul>

</div>



    )
}
export default Nav;