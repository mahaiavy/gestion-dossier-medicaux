import React,{useState,useEffect ,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import LigneTablePatient from './LigneTablePatient';
import AuthContext from  '../../AuthContext';
import DossierContext from  './DossierContext';
import PatientContext from '../context/PatientContext';
import Pagination from './Pagination';


const wait=function (duration=1000) {
  return new Promise((resolve)=>{
    window.setTimeout(resolve,duration)
  })
}

const ListePatient=(props)=>{

    const[patients,setPatients]=useState([]);
    const[searchColumns,setSearchColumns]=useState(["nom","prenom","age","genre","lot","fkt","commune","tel"]);
    const[cle,setCle]=useState("");
    const contextAuthValue=useContext(AuthContext);
    const contextValues=useContext(DossierContext);
    const contextPatientValue=useContext(PatientContext);



    const[currentCountries,setCurrentCountries]=useState( []);
    const[currentPage,setCurrentPage]=useState( null);
    const[totalPages,setTotalPages]=useState( null);
    const[limite,setLimite]=useState( 10);

  const  onPageChanged = data => {
      const { currentPage, totalPages, pageLimit } = data;
      const offset = (currentPage - 1) * pageLimit;
      const currentCountries = patients.slice(offset, offset + pageLimit);
      setCurrentCountries(currentCountries);
      setCurrentPage(currentPage);
      setTotalPages(totalPages);

    }

    useEffect(() => {
            contextAuthValue.socket.emit("demandePatient",contextAuthValue.user.id);

         //getAllPatient
             contextAuthValue.socket.on("getAllPatient",pats=>{
            setPatients(pats);     
      
         });
    //     axios.get("http://169.254.218.64:8000/api/pediatrie/patient").then((response)=>{       
    //     setPatients(response.data);    
    // });
            return () => {
              setPatients(null);
              }

     },[]);


const  consulterDossier=(id)=>{
    // contextValues.createIdpatient(id);
      props.history.push("/chrr.vakinankaratra.com/pediatrie/patient/dossier/"+id);
  }



  const  showLimite=(evt)=>{
    const paginationData = {
      currentPage:currentPage,
      totalPages: totalPages,
      pageLimit: evt.currentTarget.value,
    
    };
    onPageChanged(paginationData);
    setLimite(evt.currentTarget.value);
  }

const rechercher=(rows)=>{

  return rows.filter((row)=>
  searchColumns.some(
    (column)=>
    row[column].toString().toLowerCase().indexOf(cle.toLowerCase())> -1
  )
  );


}

       let ligneTablePatient;
       let totalCountries;
  const columns=["nom","prenom","age","genre","commune"];

    if (patients) {
      totalCountries  = patients.length;
     
         ligneTablePatient =rechercher(currentCountries).map(patient=>{
            return(
               <LigneTablePatient patientes={patient} consulterDossier={()=>consulterDossier(patient.pediatrie_id)} onDoubleClick={()=>consulterDossier(patient.pediatrie_id)} key={patient.pediatrie_id}/>
            )
        });
    }
    
 

    return(
 
      <div>

                { totalCountries != 0 ? 
                  <div className="p-2 card ">
                <div className="border-gray-300 rounded-t-lg card-header d-flex justify-content-between">
                <div>Liste des Patients</div>
                <div >
                  <input defaultValue={cle} className="form-control input" onChange={(e)=>setCle(e.currentTarget.value)} placeholder="Rechercher..." />
                  {
                    columns && columns.map((column)=>(
                      <label className="mr-2" key={column}>
                        <input type="checkbox" checked={searchColumns.includes(column)}
                        onChange={(e)=>{
                          const checked=searchColumns.includes(column);
                          setSearchColumns(prev =>checked
                            ? prev.filter(sc => sc !=column)
                            :[...prev,column]);
                        }}
                        />
                        {column}

                        </label >
                       
                    ))
                  }
                </div>
              
                    <div className="mr-16"> 
                        <Link to="/chrr.vakinankaratra.com/pediatrie/patient/add" type="button" className="text-white bg-green-600 btn-sm form-control"> <span className="fa fa-plus"></span> Nouveau Admission</Link>
                
                    {/* <button type="button" className="text-white bg-green-600 btn-sm form-control"><span className="fa fa-plus"></span> Ajouter</button> */}
                    </div>
            </div>

            <div className="card-body ">
            <div className="mb-2 form-group pull-left col-md-1">
<label>Montrez:</label>
<select  className="form-control " id="showTab" name="showTab" onChange={showLimite}>
<option value="5">5</option>
<option value="10">10</option>
<option value="15">15</option>
<option value="20">20</option>
</select>
</div>
              <div className="row">

              <div id="page_navigation"></div>
              { currentPage &&
                <span className="pl-4 current-page d-inline-block h-100 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
               }
                     {/* table */}
            <table className="table table-striped table-sm table-bordered col-sm-12">
            <thead className="font-bold text-gray-800 bg-blue-400 border-t-4 border-blue-800 rounded-xl">
            <tr className="text-center ">
            <td className="">Nom</td><td>Prénom</td>
            <td>Age</td><td>Genre</td>
            <td>Adresse</td>
            <td>Contact</td><td>Actions</td>
            </tr>
            </thead>
            <tbody className="text-sm ">
        
            {ligneTablePatient && ligneTablePatient}
     

            </tbody>
            </table>

            <div >
              <Pagination totalRecords={totalCountries} pageLimit={limite} pageNeighbours={1} onPageChanged={onPageChanged} />
            </div>
           
              </div>

            </div> 
                   </div>
            : null
              
                }

                    

                        </div>
       
    )

}
export default React.memo(ListePatient);