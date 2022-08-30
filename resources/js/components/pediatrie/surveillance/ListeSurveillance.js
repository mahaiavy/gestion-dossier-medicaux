import React,{useState,useEffect,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import LigneTableSurveillance from './LigneTableSurveillance';
import AuthContext from  '../../AuthContext';
// import DossierContext from  './DossierContext';
// import PatientContext from '../context/PatientContext';

const wait=function (duration=1000) {
  return new Promise((resolve)=>{
    window.setTimeout(resolve,duration)
  })
}

const ListeSurveillance=(props)=>{

    const[consultations,setConsultations]=useState([]);
    const[longue,setLongue]=useState(0);

    // const contextValues=useContext(DossierContext);
    // const contextPatientValue=useContext(PatientContext);
     const contextAuthValue=useContext(AuthContext);


    useEffect(() => {

      contextAuthValue.socket.emit("demandeSurveillance",contextAuthValue.user.id);
        //getAllSurveillance
        contextAuthValue.socket.on("getAllSurveillance",surv=>{
          console.log(surv);
            setConsultations(surv)   ;
        }); 
        // axios.get("http://169.254.218.64:8000/api/pediatrie/surveillance/liste").then((response)=>{     
        //     setConsultations(response.data);    
        // });
        return () => {
          setConsultations(null);
          }
    },[]);


    let  ligneTableSurveillance;
    const  createConsultation=(id)=>{
      // contextValues.createSoinped_id(id);
         props.history.push("/chrr.vakinankaratra.com/pediatrie/surveillance/"+id);
       }

       let cons=[];

     if (consultations) {

      consultations.map( (consul)=>{
 
          cons.push(consul);
     
          });
        }

        ligneTableSurveillance=cons.map((consultation)=>{
       
          if (consultation[0]) {
          
            return(
              <LigneTableSurveillance  patientes={consultation[0]} onDoubleClick={()=>createConsultation(consultation[0].soinped_id)} key={consultation[0].soinped_id}/>       
            )  
          }
        })
 
     

    return(
   
              <div className="p-2 card ">

                        <div className="border-blue-800 rounded-t-lg card-header d-flex justify-content-between">
                            <div>Liste des Patients</div>
                                <div> 
                                    <Link to="/chrr.vakinankaratra.com/pediatrie/patient/add" type="button" className="text-white bg-green-600 btn-sm form-control"> <span className="fa fa-plus"></span> Nouveau Admission</Link>
                            
                                {/* <button type="button" className="text-white bg-green-600 btn-sm form-control"><span className="fa fa-plus"></span> Ajouter</button> */}
                                </div>
                        </div>

                        <div className="card-body ">

                          <div className="row">

                            {/* table */}
                        <table className="table table-striped table-sm table-bordered table-responsive">
                        <thead className="font-bold text-gray-800 bg-blue-400 border-t-4 border-blue-800 rounded-xl">
                        <tr className="text-center ">
                        <td>N°</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Age</td>
                        <td>Genre</td>
                        <td>Motif</td>
                        <td>Mode</td>
                        <td>Salle</td>
                        <td>Lit</td>
                        <td>Date d'Admission</td>
                        <td>Dernière observation</td>
                        </tr>
                        </thead>
                        <tbody className="text-sm ">

                        {ligneTableSurveillance &&   ligneTableSurveillance}

                        </tbody>
                        </table>

                          </div>

                     

                        </div>

                        </div>
       
    )

}
export default React.memo(ListeSurveillance);