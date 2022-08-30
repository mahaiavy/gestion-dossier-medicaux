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

const logOut=async(data)=>{
   
    const res= await axios.post("http://169.254.218.64:8000/logout",data);
    axios.get().then((response)=>{
              
        console.log("deconnecte io");
    
                });
}

    let menus=menu.map(men=>{

        if (men.nom=="acceuil") {

            return(
                <li key={men.id} onClick={()=>setActiver(men.id)} className={activer.current==men.id ? "h-full border-t-2  border-l-2 border-r-2  nav-item border-blue-800 border-b-4" :"h-full border-t-2  border-b-2 border-l-2 border-r-2 border-white nav-item"} role="presentation">
                <Link type="button" to="/chrr.vakinankaratra.com/home" className={activer.current==men.id ? "h-full font-bold acceuil nav-link d-flex align-items-center border-blue-800 border-b-4" : "h-full font-bold acceuil nav-link d-flex align-items-center " }><span className={"pt-1 pl-3 "}> Acceuil</span> </Link>
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
                <li  key={men.id} onClick={()=>setActiver(men.id)}  className={activer.current==men.id ? "border-t-2 border-l-2 border-r-2  nav-item border-blue-800 border-b-4"  :"border-t-2 border-l-2 border-r-2 border-white nav-item"} role="presentation">
                <Link to="/chrr.vakinankaratra.com/pediatrie" className={activer!=men.id ? "font-bold text-blue-900 nav-link pediatrie " : "font-bold text-blue-900 nav-link pediatrie border-blue-800 border-b-4"}  type="button"> <span className="pt-1 pl-2">Pediatrie</span></Link>
                </li>
            )  
                   
               }

    if (men.nom=="neonatologie") {

    return(
        <li  key={men.id} onClick={()=>setActiver(men.id)} className={"border-t-2  border-l-2 border-r-2 border-white nav-item"} role="presentation">
   <Link to="/chrr.vakinankaratra.com/neonatologie" className={activer!=men.id ? "font-bold text-blue-900 nav-link neonatologie " : "font-bold text-blue-900 nav-link neonatologie border-blue-800 border-b-4"}  type="button"> <span className="pt-1 pl-2">Neonatologie</span></Link>
   </li>
    )  
            
        }

    if (men.nom=="parametres") {

        return(
            <li key={men.id} onClick={()=>setActiver(men.id)} className={"border-t-2  border-l-2 border-r-2 border-white nav-item"} role="presentation">
   <Link to="/chrr.vakinankaratra.com/parametres" className={activer!=men.id ? "font-bold text-blue-900 nav-link parametres " : "font-bold text-blue-900 nav-link parametres border-blue-800 border-b-4"}  type="button"> <i className="fa fa-cogs"></i> Parametrages</Link>
   </li>
        )  
                
            }
        
       
    });

    return(
        <nav className="bg-gray-100 navbar navbar-expand-md fixed-top row">
{/* row sous nave */}


    <div className=" row">
   

    <div className="h-12 row entete col-sm-12">
    
    {/* logo */}
                  <div className="col-sm-2 sm-hide">
                  <div className="h-full text-gray-100 d-flex align-items-center">
                     {/* <img src="images/logo.PNG" alt="logo" /> */}CHRR Vakinankaratra
                  </div>  
                  </div>
                   
                                           
          {/* titre */}

              <div className="d-flex align-items-center col-sm-6 justify-content-center ">

                  <div className="font-bold text-gray-200 ">GESTION DES DOSSIERS MEDICAUX</div>

              </div>
   {/* logiciel simplifier votre vie */}
             
      
                  <div className="text-xs font-bold text-yellow-400 xs-hide s-hide col-sm-2 align-items-center justify-content-center d-flex">Le Logiciel des dossiers medicaux pour simplifier votre gestion quotidienne</div>
                  {/* login */}
                  <div className="dropdown col-sm-2 justify-content-end d-flex align-items-center">
                      <div className="relative mr-10" type="button">
                            <span className="absolute text-xs text-white rounded-full left-2 bg-danger badges">1</span>

                            <span><i className="text-lg text-gray-300 fa fa-bell text-xxl"></i></span>
                      </div>
     
                      <span><i className="pr-2 text-gray-300 fa fa-user "></i></span>
      
                      <a  className="pr-5 text-gray-300 dropdown-toggle hover:text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                         Dr Richard  
                      </a>
      
                      <div className="w-5 mr-20 dropdown-menu " >
                          
                          <form onSubmit={logOut}  className=" dropdown-item">
                            <button type="submit"> Log out</button>
                            </form>
                      </div>
      
                  </div>

                 {/* fin Login */}
      
      
             
                
              
          </div>
         
          {/* fin en tete */}

          {/* date */}
          {/* col contenue date */}
          <div className="col-md-12">

          <div className="bg-gray-100 shadow row menus">

{/* tete nev tab */}
<div className=" align-items-center col-md-10 justify-content-around d-flex"> 


<ul className=" nav nav-tabs align-items-center" id="myTab" role="tablist">
  
 
 {menus}
  
 
</ul>


</div>

{/* fin tete nav tab */}

   <div className="text-yellow-400 align-items-center d-flex col-md-2">
   
       <span className="pl-5 text-yellow-400">
       {new Date().getDate()}
       </span>  
   Heure : <span className="text-white">10:25:55</span> 
   </div>


  

</div>

          </div>
          {/* fin col contnue date */}
        
    </div>

   {/*fin row sous nave */}
            </nav>

    )
}
export default Nav;