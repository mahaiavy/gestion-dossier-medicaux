import React,{useState,useEffect,useContext} from 'react';
import {useForm} from 'react-hook-form';
import PatientContext from '../context/PatientContext';
import InputActe from './inputsurveillance/InputActe';
import InputConjonctives from './inputsurveillance/InputConjonctives';
import InputDiurese from './inputsurveillance/InputDiurese';
import InputFC from './inputsurveillance/InputFC';
import InputFR from './inputsurveillance/InputFR';
import InputGlasgow from './inputsurveillance/InputGlasgow';
import InputSaignement from './inputsurveillance/InputSaignement';
import InputSPO from './inputsurveillance/InputSPO';
import InputTA from './inputsurveillance/InputTA';
import InputTemperature from './inputsurveillance/InputTemperature';
import AuthContext from '../../AuthContext';


const wait=function (duration=1000) {
    return new Promise((resolve)=>{
      window.setTimeout(resolve,duration)
    })
  }
const FicheSurveillance=(props)=>{

    const[traitement,setTraitement] = useState([{}]);
    const[actesoin,setActesoin] = useState([{}]);
    const [heure, setHeure] = useState();
    const [jours, setJours] = useState();
    const [heureActu, setHeureActu] = useState();
    const [acte, setActe] = useState(false);
    const [acteperos, setActeperos] = useState(false);
    const [acteAutres, setActeAutres] = useState(false);
    const [acteperiodique, setActeperiodique] = useState(false);
    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
    const contextAuthValue=useContext(AuthContext);
    // let id=props.soinped_id;
    let id=props.match.params.id;
    let soinPed;

// formulaire acte

const [count, setCount] = useState([{'id':0}]);
const [autre, setAutre] = useState([{'id':-1,'values':""}]);
const [actes, setActes] = useState(null);
const [conjonctives, setConjonctives] = useState(null);
const [diurese, setDiurese] = useState(null);
const [fc, setFc] = useState(null);
const [fr, setFr] = useState(null);
const [glasgow, setGlasgow] = useState(null);
const [saignement, setSaignement] = useState(null);
const [spo, setSpo] = useState(null);
const [ta, setTa] = useState(null);
const [temperature, setTemperature] = useState(null);
const [etatinjectable, setEtatinjectable] = useState("fait");
const [etatPeros, setEtatPeros] = useState("fait");
const [etatAutres, setEtatAutres] = useState("fait");


const handleBlur=(event)=>{
const values=   event.currentTarget.value;
const nom=event.currentTarget.name;
    if(values!=""){
        if (nom=="actes") setActes(values);
        if (nom=="conjonctives") setConjonctives(values);
        if (nom=="diurese") setDiurese(values);
        if (nom=="fc") setFc(values);
        if (nom=="fr") setFr(values);
        if (nom=="glasgow") setGlasgow(values);
        if (nom=="saignement") setSaignement(values);
        if (nom=="spo") setSpo(values);
        if (nom=="ta") setTa(values);
        if (nom=="temperature") setTemperature(values);

    }
}



let ligne=count.map(counte=>{
  if(count.length==1){
    return(
        <tr className="text-center " key={counte.id}>
            <td></td>
        <InputTA cle={null} onBlur={handleBlur} name={"ta"} register={register} label={"traitement"+counte.id} errors={errors} />
        <InputFC cle={null} onBlur={handleBlur} name={"fc"} register={register} label={"traitement"+counte.id} errors={errors}  />
        <InputFR cle={null} onBlur={handleBlur} name={"fr"} register={register} label={"traitement"+counte.id} errors={errors} />
        <InputSPO cle={null} onBlur={handleBlur} name={"spo"} register={register} label={"traitement"+counte.id} errors={errors}  />
        <InputTemperature cle={null} onBlur={handleBlur} name={"temperature"} register={register} label={"traitement"+counte.id} errors={errors} />
        <InputDiurese cle={null} onBlur={handleBlur} name={"diurese"} register={register} label={"traitement"+counte.id} errors={errors}  />
        <InputGlasgow cle={null} onBlur={handleBlur} name={"glasgow"} register={register} label={"traitement"+counte.id} errors={errors} />
        <InputConjonctives cle={null} onBlur={handleBlur} name={"conjonctives"} register={register} label={"traitement"+counte.id} errors={errors}  />
        <InputSaignement cle={null} onBlur={handleBlur} name={"saignement"} register={register} label={"traitement"+counte.id} errors={errors} />
        <InputActe cle={null} onBlur={handleBlur} name={"actes"} register={register} label={"traitement"+counte.id} errors={errors}  />
     

        </tr>
    )
  }
   
});

let autreValue=autre.map(autre=>{
  
    if (autre.values!="") {
       
        return(
            autre.values+"\n"
       );
    }
    
});
let vale="";
if (autreValue) {
    for (let index = 1; index < autreValue.length; index++) {
        
        vale=vale+autreValue[index];
    }
}


const afficheActesoin=(id)=>{
    axios.get(`http://169.254.218.64:8000/api/pediatrie/surveillance/acte/${id}/show`).then((response)=>{
          
        setActesoin(response.data);
    
                });
}

const onSubmit= async ()=>{

    const datas={
        actesoinped_id:soinPed,
        observation:actes,
        fr,ta,fc,temperature,conjonctives,diurese,
        spo2:spo,
        saignement,
        glas_gow:glasgow,

    }
await wait(1000);
console.log(datas);
contextAuthValue.socket.emit("newSurveillance",datas);
console.log(heure);
setHeureActu(heure);

console.log(heureActu);
        //  contextPatientValue.createActe(datas);
await wait(1000);
afficheActesoin(soinPed);


}


// fin formulaire acte

const arreteActeSoin=(id)=>{
    axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soin/edit/${id}`,{etat:"fait"}).then((response)=>{              
        console.log(response);     
                });
}

    const editSoin=async(id)=>{

     
        axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soininjectable/edit/${id}`,{etat_injectable:etatinjectable}).then((response)=>{              
            console.log(response.data.etat_injectable);  
            setEtatinjectable("fait");   
            setActe(response.data.etat_injectable);       
                    });
    }

    const editEtatPeriodique=async(id)=>{
    
     
        axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soininjectable/edit/${id}`,{etat_periodique:etatPeros}).then((response)=>{              
            console.log(response.data.etat_peros);  
            setEtatPeros("fait");   
            setActeperiodique(response.data.etat_periodique);    
                    });
    }

    const editEtatPeros=async(id)=>{
    
     
        axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soininjectable/edit/${id}`,{etat_peros:etatPeros}).then((response)=>{              
            console.log(response.data.etat_peros);  
            setEtatPeros("fait");   
            setActeperos(response.data.etat_peros);    
                    });
    }

    const editEtatAutres=async(id)=>{
      
     
     axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soininjectable/edit/${id}`,{etat_autre:etatAutres}).then((response)=>{              
            console.log(response.data.etat_autre);  
            setEtatAutres("fait");   
            setActeAutres(response.data.etat_autre);
                    });
    }

    let tempe=traitement.map(traitements=>{

        if(traitements.soinped_id){
           
           let contenue= traitements.autre_periodique.split("\\n");

           for (let index = 0; index < contenue.length; index++) {

               let ligne=contenue[index].split("\\t");

           }
        }
       
    });

 
    useEffect(() => {

let daty;
        axios.get(`http://169.254.218.64:8000/api/pediatrie/surveillance/${id}/show`).then((response)=>{
              
        setTraitement(response.data);
    
        afficheActesoin(response.data[0].soinped_id);

        axios.put(`http://169.254.218.64:8000/api/pediatrie/consultation/soininjectable/edit/${response.data[0].soinped_id}`,{etat_ine:etatinjectable}).then((response)=>{              
            console.log(response.data.etat_injectable);  
            setEtatinjectable("fait");   
            setActe(response.data.etat_injectable);     
            setActeperos(response.data.etat_peros); 
            setActeAutres(response.data.etat_autre);   
            setActeperiodique(response.data.etat_periodique);
                    });
      
    
                });
        axios.get('http://169.254.218.64:8000/api/pediatrie/maintenant').then((response)=>{           
            let annee= response.data.split(" "); 
            const ane=  annee[0].split("-"); 
            const heu=annee[1].split(":")     ;
            daty= new Date(ane[2],ane[1],ane[0],heu[0],heu[1],heu[2]);               
        });  
    
        
        const timer = setInterval(()=> {           
           if (daty) {
               const years=daty.getFullYear();
               const month=daty.getMonth()<10 ? "0"+daty.getMonth() : daty.getMonth();
               const date=daty.getDate()<10 ? "0"+daty.getDate() : daty.getDate();
               const hours=daty.getHours()<10 ? "0"+daty.getHours() : daty.getHours();
               const minutes=daty.getMinutes()<10 ? "0"+daty.getMinutes() : daty.getMinutes();
               const secondes=daty.getSeconds()<10 ? "0"+daty.getSeconds() : daty.getSeconds();
                        
                    daty.setTime(daty.getTime()+1000);
                setHeure(hours+":"+minutes+":"+secondes);
                setJours(years+":"+month+":"+date);
 
                     } 
            },1000);
              

                return function () {
                    clearInterval(timer)
                }
    }, []);

 let k=0;

 
    
    let ligneSurveillance=traitement.map(traitements=>{
    
        if(traitements.soinped_id){
           soinPed=traitements.soinped_id;
      
        //    afficheActesoin(traitements.soinped_id);
      
let i=0;
            let injectable=traitements.injectable.split("\n");
            let autre_periodique=traitements.autre_periodique.split("\n");
            let autre=traitements.autres.split("\n");
            let peros=traitements.peros.split("\n");

               let injectables=
                        <li key={i} className="justify-between m-2 mt-4 shadow shadow-5-primary bg-info listeacte d-flex" type="button" onClick={()=>editSoin(traitements.soinped_id)} >
                          <span className="ml-2 text-white">{traitements.injectable}</span>  
                          {!acte ? <input type="checkbox" value="" className="mr-2 text-blue-600 small" /> : <i className="mt-1 mr-2 text-white fa fa-check"></i>}
                        </li>;
                    

                let autre_periodiques=autre_periodique.map(autre_periodiq=>{

                    let periode=autre_periodiq.split("\t");

                  
                    i++;
                  
                        return(
                            <li key={i} className="justify-between m-2 shadow bg-info listeacte d-flex" type="button" onClick={()=>editEtatPeriodique(traitements.soinped_id)}>
                              
                              <span className="ml-2 text-white"><span className="mr-2"> {periode[0]}</span><span className="font-bold">/{periode[1]}{periode[2]}</span> </span> 
                           {!acteperiodique ? <span className="mr-2 text-white small">encours...</span> : <i className="mt-1 mr-2 text-white fa fa-check"></i> }    
                     
                            </li>
                            )});

                let autres=
                            <li key={i} className="justify-between m-2 mt-4 shadow shadow-5-primary bg-info listeacte d-flex" type="button" onClick={()=>editEtatAutres(traitements.soinped_id)}>
                               
                                <span className="ml-2 text-white"> {traitements.autres}</span> 
                                {!acteAutres ? <input type="checkbox" className="mr-2 text-blue-600 small"/>: <i className="mt-1 mr-2 text-white fa fa-check"></i>}
                     
                            </li>;
                          

                let pero=
                           
                            <li key={i} className="justify-between m-2 mt-4 shadow shadow-5-primary bg-info listeacte d-flex" type="button" onClick={()=>editEtatPeros(traitements.soinped_id)} >
                              
                                <span className="ml-2 text-white">   {traitements.peros}</span> 
                                {!acteperos ?  <input type="checkbox" className="mr-2 text-blue-600 small"/> : <i className="mt-1 mr-2 text-white fa fa-check"></i>}
                     
                            </li>;
                          
           

            return(

                <tr className="text-center " key={traitements.soinped_id}>
                <td  className="col-md-4">
                    <ul className="mt-3">
                        {injectables && injectables}
                    </ul>
                   
                </td>
                <td className="col-md-4">
                    <ul className="mt-3">
                        {pero && pero}
                    </ul>
                </td>
                <td className="col-md-4"> 
                    <ul className="mt-3">
                    {autres && autres}
                        {autre_periodiques && autre_periodiques}
                    </ul>
                </td>
            </tr>
            )
        }
       
    });


    let listeActesoin=actesoin.map(actesoins=>{
        k++;
        return(
            <tr className="text-center" key={k}>
            <td className="col-md-1"><span>{actesoins.heure_acte}</span></td>
            <td className="col-md-1"><span>{actesoins.ta}</span></td>
            <td className="col-md-1"><span>{actesoins.fc}</span></td>
            <td className="col-md-1"><span>{actesoins.fr}</span></td>
            <td className="col-md-1"><span>{actesoins.spo2}</span></td>
            <td className="col-md-1"><span>{actesoins.temperature}</span></td>
            <td className="col-md-1"><span>{actesoins.diurese}</span></td>
            <td className="col-md-1"><span>{actesoins.glas_gow}</span></td>
            <td className="col-md-1"><span>{actesoins.conjonctives}</span></td>
            <td className="col-md-1"><span>{actesoins.saignement}</span></td>
            <td className="col-md-2"><span>{actesoins.observation}</span></td>
        </tr>
        )
     
    })


    return (
        <div className="">
            {/* nom patient[0] */}
                <div className="p-3">
                {jours} {heure}
              <p> Patient :<span className="pl-1 pr-1 font-bold text-gray-800">{traitement[0].nom}</span><span className="pl-1 pr-1 font-bold text-gray-800">{traitement[0].prenom}</span>
               , Age :<span className="pl-1 pr-1 font-bold text-gray-800">{traitement[0].age}</span> mois
               </p>

               </div>

                {/* fin nom patient[0] */}

                {/* card */}

                <div className="p-2 bg-gray-200 card">


                    {/* card body */}


                    <div className=" bg-light card-body">
                        {/* date */}
                        <div className="p-3">
                        <span >Date du :</span> <span className="ml-2 mr-1 text-sm font-bold"></span>   {jours} <span>Jour d'hospitalisation :</span>
                        <span className="ml-1 mr-1 text-sm font-bold">1</span><span >jrs</span>
                        </div>
                        {/* fin date */}

                        <div>
                            <span className="mb-1 text-sm font-bold">TRAITEMENTS :</span>
                        </div>

                        <div className="rounded-t-md table-responsive">
                            <table className="table table-sm ">
                                <thead>
                                    <tr className="text-center bg-gray-300 border-t-4 border-blue-800">
                                        <th className="col-md-4">LIQUIDES ET INJECTABLES</th><th className="col-md-4">PER OS</th><th className="col-md-4"> AUTRES</th>
                                    </tr>
                                </thead>
                                <tbody>
                               { ligneSurveillance}
                                </tbody>
                            </table>
                        </div>

                        {/* formulaire acte */}

                        <table className="table table-bordered">

<tbody>
    <tr className="text-center">
    <td className="col-md-1"><span>Heure</span></td>
        <td className="col-md-1"><span>TA</span></td>
        <td className="col-md-1"><span>FC</span></td>
        <td className="col-md-1"><span>FR</span></td>
        <td className="col-md-1"><span>SPo2</span></td>
        <td className="col-md-1"><span>T°</span></td>
        <td className="col-md-1"><span>Diurèse</span></td>
        <td className="col-md-1"><span>Glas gow</span></td>
        <td className="col-md-1"><span>conjonctives</span></td>
        <td className="col-md-1"><span>Saignement</span></td>
        <td className="col-md-2"><span>Actes/Observations</span></td>
    </tr>
    {listeActesoin}
{ligne}
</tbody>
<tfoot>
    <tr className="text-left ">

     <td colSpan="11" className="text-right">
        <button onClick={onSubmit} className="p-1 btn btn-info">Ajouter</button>
    {soinPed &&  <button onClick={()=>editEtatPeriodique(soinPed)} className="p-1 ml-2 btn btn-danger">Arreter</button>}   
    </td>
    
    </tr>
   
</tfoot>

</table>


<textarea defaultValue={autreValue} type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold "}  />                                 
                                      

                        {/* fin formulaire acte */}
                      
                 
                    </div>
                    {/* fin card body */}
                </div>

                {/* fin card */}
               
               

        </div>
    )


}
export default React.memo(FicheSurveillance);