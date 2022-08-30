import React,{useState,useEffect,useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import LigneTableConsultation from './LigneTableConsultation';
import AuthContext from  '../../AuthContext';
import Pagination from '../patients/Pagination';
// import DossierContext from  './DossierContext';
// import PatientContext from '../context/PatientContext';

const ListeConsultation=(props)=>{

    const[consultations,setConsultations]=useState([]);
    const[searchColumns,setSearchColumns]=useState(["nom","prenom","age","genre","lot","fkt","commune","motif","mode","date_admission"]);
    const[cle,setCle]=useState("");
    const[numCons,setNumCons]=useState( );
    // const contextValues=useContext(DossierContext);
    // const contextPatientValue=useContext(PatientContext);
    const contextAuthValue=useContext(AuthContext);

    const[currentCountries,setCurrentCountries]=useState( []);
    const[currentPage,setCurrentPage]=useState( null);
    const[totalPages,setTotalPages]=useState( null);
    const[limite,setLimite]=useState( 10);

  const  onPageChanged = data => {
      const { currentPage, totalPages, pageLimit } = data;
      const offset = (currentPage - 1) * pageLimit;
      const currentCountries = consultations.slice(offset, offset + pageLimit);
      setCurrentCountries(currentCountries);
      setCurrentPage(currentPage);
      setTotalPages(totalPages);

    }
    
    const fermer=(num)=>{
        setNumCons(num);

        axios.put(`http://${adresseIP}:8000/api/pediatrie/consultation/${num}/ferme`,{etat:"ferme"}).then((response)=>{
      
          // setDossier(response.data);
        
      console.log(response.data);
      });
    }

    useEffect(() => {
        contextAuthValue.socket.emit("demandeConsultation",contextAuthValue.user.id);

         //getAllConsultation
         contextAuthValue.socket.on("getAllConsultation",cons=>{
        setConsultations(cons);      
    });
        // axios.get("http://169.254.218.64:8000/api/pediatrie/consultation").then((response)=>{      
        //     setConsultations(response.data);    
        //  });
        return () => {
            setConsultations(null);
            }
      
    },[]);

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

    let ligneTableConsultation;
    let totalCountries;
    const columns=["nom","prenom","age","genre","commune","motif","mode","date_admission"];
    const  createConsultation=(id)=>{

        // contextValues.createAdmission_id(id);
         props.history.push("/chrr.vakinankaratra.com/pediatrie/consultation/"+id);
       }

    if(consultations){

        totalCountries  = consultations.length;
        ligneTableConsultation=rechercher(currentCountries).map(consultation=>{
            return(
               <LigneTableConsultation fermer={()=>fermer(consultation.admission_id)} patientes={consultation} createConsultation={()=>createConsultation(consultation.admission_id)} onDoubleClick={()=>createConsultation(consultation.admission_id)} key={consultation.admission_id}/>
            )
        });

    }
       

    return(
        <div>


 {/* modal */}

 <div id="modalFermer" className=" modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className=" modal-dialog" >
      {/* modal content */}
    <div className=" modal-content">
        {/* modal header */}
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* fin modal header */}

      {/* modal body */}
        <div className=" modal-body">

{numCons}
        </div>
        {/* fin modal body */}

        {/* modal footer */}
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
      {/* fin modal footer */}
    </div>
    {/* fin modal content */}
  </div>
</div>

               {/* fin modal */}




            
        { totalCountries != 0 ? 
              <div className="p-2 card ">
                   
                  {/* <contextPatientValue.ReactNotification/> */}
                        <div className="border-blue-800 rounded-t-lg card-header d-flex justify-content-between">
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

                                <div> 
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

                          { currentPage &&
                                <span className="pl-4 current-page d-inline-block h-100 text-secondary">
                                Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                                </span>
                            }

                                 {/* table */}
                        <table className="table table-striped table-sm table-bordered table-responsive">
                        <thead className="font-bold text-gray-800 bg-blue-400 border-t-4 border-blue-800 rounded-xl">
                        <tr className="text-center ">
                        <td>N°</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Age</td>
                        <td>Genre</td>
                        <td>Adresse</td>
                        <td>Motif</td>
                        <td>Mode</td>
                        <td>Salle</td>
                        <td>Lit</td>
                        <td>Date d'Admission</td>
                        <td>Actions</td>
                        </tr>
                        </thead>
                        <tbody className="text-sm ">

                        {ligneTableConsultation && ligneTableConsultation}

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
export default React.memo(ListeConsultation);