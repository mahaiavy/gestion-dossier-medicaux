import React,{useState,useEffect} from 'react';
import Information from './Information';
import Antecedent from './Antecedent';
import Dossier from './Dossier';

const DossierPatient=(props)=>{

    const[patient,setpatient] = useState([{}]);
    const[antecedent,setAntecedent] = useState();
    const[dossier,setDossier] = useState();

    useEffect(() => {

         const id=props.match.params.id;
        // const id=props.idpatient;


        axios.get(`http://${adresseIP}:8000/api/pediatrie/patient/${id}/dossier`).then((response)=>{
      
            setpatient(response.data);
        
        });

        axios.get(`http://${adresseIP}:8000/api/pediatrie/patient/${id}/antecedent`).then((response)=>{
      
            setAntecedent(response.data);
        
        
        });

        axios.get(`http://${adresseIP}:8000/api/pediatrie/consultation/${id}/dossier`).then((response)=>{
      
            setDossier(response.data);
          
        console.log(response.data);
        });
       

    }, []);

   


    return (
        <div className="">
            {/* nom patient[0] */}
                <div className="p-3">
                    
              <p> Patient :<span className="pl-1 pr-1 font-bold text-gray-800">{patient[0].nom}</span><span className="pl-1 pr-1 font-bold text-gray-800">{patient[0].prenom}</span>
               , Age :<span className="pl-1 pr-1 font-bold text-gray-800">{patient[0].age}</span> ans
               </p>

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
                            <a className=" nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Informations</a>
                            <a className=" nav-item nav-link" id="nav-antecedent-tab" data-toggle="tab" href="#nav-antecedent" role="tab" aria-controls="nav-antecedent" aria-selected="false">Antécédents</a>
                            <a className=" nav-item nav-link" id="nav-dossier-tab" data-toggle="tab" href="#nav-dossier" role="tab" aria-controls="nav-dossier" aria-selected="false">Dossier Médical</a>
                            </div>
                        </nav>

                        {/* content tab */}
                        <div className=" tab-content bg-light" id="nav-tabContent">

                           <Information patient={patient}/>
                         {antecedent &&  <Antecedent antecedent={antecedent}/>} 
                         {dossier &&  <Dossier dossier={dossier}/>} 
                         

                            {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <p>Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.</p>
                            </div> */}

                        </div>
                        {/* fin content tab */}

                    </div>
                    {/* fin tabs */}
                    </div>
                    {/* fin card body */}
                </div>

                {/* fin card */}
               


        </div>
    )


}
export default React.memo(DossierPatient);