import React,{useState,useEffect,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Pediatrie from '../pediatrie/Pediatrie';
import AuthContext from '../AuthContext';

const Login=(props)=>{

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');

const contextValue=useContext(AuthContext);

const handleCreateUser=()=>{
    if (userId && userName) {
        const user={userId,userName}
        contextValue.createUser(user);
    }
}
    // const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
    
    // const onSubmit= async (data)=>{
        
    //        if(res.data=="success"){
    //         props.history.push("/chrr.vakinankaratra.com/home");
    //        }else if(res.data=="existe"){
    //         console.log("efa misy");
    //        }
     
    // }

   
return(
      
 
  <div className="mt-3 d-flex justify-content-between">
                  
  {/* col 1 row contenue */}
  <div className="col-md-6">
      {/* row 1 dans col 1 contenue */}
      <div className="row">
              {/* card  */}
          <div className=" card">
              {/* card header */}
              <div className="font-semibold text-center border-t-4 border-blue-800 rounded-sm border-b-1 card-header">
                  <div>LOGIN</div>
                  
              </div>
              {/* fin card header */}

              {/* card body */}
              <div className="card-body ">
                      {/* row body */}
                      <div className="rounded-lg ">
                         
                  <div className="p-1 text-sm font-bold text-gray-800 row"> 


                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                      <span htmlFor="nom" className="pr-1 form-label">Nom:</span>
                      <input onChange={(event) => setUserId(event.target.value)} type="text" className={"input form-control"}  placeholder="name ..."/>                                 
                
                      </div>

                      <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                      <span htmlFor="nom" className="pr-1 form-label">Room:</span>
                      <input onChange={(event) => setUserName(event.target.value)} type="text" className={"input form-control"}  placeholder="room ..."/>                                 
                
                      </div>
                
                      {/* <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                      <span htmlFor="nom" className="pr-1 form-label">Nom:</span>
                      <input type="text" className={"input form-control"} {...register('name', { required:"ce champ ne peut pas vide" })} placeholder="nom ..."/>                                 
                     {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </div> */}

                      {/* <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                      <span  className="pr-1 form-label">Room:</span>
                      <input type="text" className="input form-control" {...register('room', { required:"pas vide" })}  placeholder="prenom ..."/>                                 
                      {errors.room && <span className="text-danger">{errors.room.message}</span>}
                      </div>    */}

                  
                          
                          <button className="mt-20 btn btn-info" onClick={handleCreateUser}>Sign In</button>
                          
                    

                      {/* <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chrr.vakinankaratra.com/home?io=testa&userId=${name}&userName=${room}`}  >
                          
                          <button className="mt-20 btn btn-info" type="submit">Sign In</button>
                          
                    </Link>                                    */}
                     
                   
                  </div>
                 
                  </div>
                      {/* fin row body */}
                 
                  
              </div>
              {/*fin card body */}
              

          </div>
              {/* fin card */}
      </div>
      {/* fin row 1 dans col 1 contenue */}                      


  </div>

  {/*fin col 1 row contenue */}


  </div>
);
}
export default Login;