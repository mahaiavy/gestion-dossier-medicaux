import React,{useState,useEffect,useContext} from 'react';
import {useForm} from 'react-hook-form';
import General from './General';
import Observation from './Observation';
import Information from './Information';
import Antecedent from './Antecedent';
import PatientContext from '../context/PatientContext';


const FicheConsultation=(props)=>{

    const[patient,setPatient] = useState([{}]);
    const[ide,setId] = useState(null);
    const[soin,setSoin] = useState(null);

    const contextPatientValue=useContext(PatientContext);
  

    // let admission_id=props.admission_id;
    let admission_id=props.match.params.id;
    const { register,handleSubmit,formState:{errors,isValid,isSubmitted}} = useForm({mode:"all"});

    useEffect(() => {

        const admission_id=props.match.params.id;
      
        axios.get(`http://${adresseIP}:8000/api/pediatrie/consultation/soin/${admission_id}`).then((response)=>{
        
        if (response.data.length>0) {
          console.log(response.data);
          if(response.data[0].id){
            setSoin(response.data);
            console.log(response.data);
          }
        }
      
         
          
      });

        axios.get(`http://${adresseIP}:8000/api/pediatrie/consultation/${admission_id}`).then((reponse)=>{
          
          if (reponse.data.length>0) {
            setId(reponse.data[0].id);

            axios.get(`http://${adresseIP}:8000/api/pediatrie/consultation/${reponse.data[0].id}/show`).then((response)=>{
        
              setPatient(response.data);
              
          });
          }

     
      });
    

    }, []);

   


    return (
        <div className="">
          {/* <contextPatientValue.ReactNotification/> */}
            {/* nom patient[0] */}
                <div className="p-3">
                    
              <p> Patient :<span className="pl-1 pr-1 font-bold text-gray-800">{patient.nom}</span><span className="pl-1 pr-1 font-bold text-gray-800">{patient.prenom}</span>
               , Age :<span className="pl-1 pr-1 font-bold text-gray-800">{patient.age}</span> mois
               </p>

               </div>

               {/* modal */}

<div id="exampleModalLong" className=" modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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

                <div className="p-3">
                    
                        <button className="mr-1 btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"><i className="p-1 text-white fa fa-plus"></i>Traitement</button>
                        <button className="mr-1 btn btn-primary"><i className="p-1 text-white fa fa-plus"></i>Actes et Observations</button>
                        <button className="mr-1 btn btn-primary"><i className="p-1 text-white fa fa-plus"></i>Ordonnance</button>
                        <button className="btn btn-primary"><i className="p-1 text-white fa fa-plus"></i>Examen Paraclinique</button>
      
                </div>
                {/* fin nom patient[0] */}

                {/* card */}

                <div className="bg-gray-200 card">

                    {/* card body */}

                    <div className="card-body">

                    {/* tabs */}
                    <div className="bd-example bd-example-tabs ">

                        <nav className="font-semibold text-gray-900 ">
                            <div className="nav nav-tabs " id="nav-tab" role="tablist">
                        {!soin &&   <a className=" nav-item nav-link active" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="true">Fiche Consultation</a>}  
                        {soin &&   <a className=" nav-item nav-link active" id="nav-observation-tab" data-toggle="tab" href="#nav-observation" role="tab" aria-controls="nav-observation" aria-selected="true">Observations</a>}  
                            <a className= "nav-item nav-link" id="nav-antecedent-tab" data-toggle="tab" href="#nav-antecedent" role="tab" aria-controls="nav-antecedent" aria-selected="false">Antécédents</a>
                            <a className=" nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Dossier Médical</a>
                            <a className=" nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">Informations</a>
                            </div>
                        </nav>

                        {/* content tab */}
                        <div className=" tab-content bg-light" id="nav-tabContent">

                                {/* fiche consultations */}

                             {ide && <General admission_id={admission_id} ide={ide} soin={soin}/>}  
                             {soin && <Observation admission_id={admission_id} ide={ide} soin={soin}/>}

                                {/* fin fiche consultation */}

                                 {/* information */}

                         {ide && <Antecedent patient={patient} id={ide}  soin={soin} />}  

                                {/* fin information */}

                           {/* information */}

                           <Information patient={patient}/>

                           {/* fin information */}

                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <p>Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.</p>
                            </div>

                        </div>
                        {/* fin content tab */}

                    </div>
                    {/* fin tabs */}
                    </div>
                    {/* fin card body */}
                </div>

                {/* fin card */}
               


        </div>
    );


}
export default React.memo(FicheConsultation);