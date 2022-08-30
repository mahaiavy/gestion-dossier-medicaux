import React,{useState,useEffect,useRef,useContext,useLayoutEffect,useCallback,useMemo} from 'react';
import {Route,Link} from 'react-router-dom';
import {useForm,Controller} from 'react-hook-form';
import AuthContext from '../../AuthContext';
import ReactNotification,{store} from 'react-notifications-component';
// import PatientContext from '../context/PatientContext';


const wait=function (duration=1000) {
    return new Promise((resolve)=>{
      window.setTimeout(resolve,duration)
    })
  }

const AddFormPediatrie=(props)=>{

    const [salle, setSalle] = useState();
    const [num_salleped, setNumSalle] = useState();
    const [categorieped, setCategorieSalle] = useState();
    const [nombre_litped, setNombreLit] = useState();
    const [litdispo, setLitdispo] = useState();
    const [num_salle_dispo, setNumSalleDispo] = useState();
 
    let salle_ped_id=0;
    let lit_ped_id=1;
    const { register,handleSubmit,control,formState:{errors,isValid,isSubmitted}} = useForm({mode:"all"});

    const touteSalle= async()=>{

        axios.get(`http://${adresseIP}:8000/api/pediatrie/patient/salle`).then((response)=>{
      
            setSalle(response.data);           
        
            });                    
    }


    //notification
   const handleNotification=(reponse)=>{
    store.removeNotification("testa");
    if (reponse=="un patient ajouté!") {
        store.addNotification({
            id:"testa",
            title:"Action succés",
            message:reponse,
            type:"success",
            container:"top-center",
            insert:"bottom",
            animationIn: ["animated","fadeIn"],
            animationOut: ["animated","fadeOut"],
            dismiss:{
              duration:4000,
              showIcon:true
            },
            
        })
    }else{
        store.addNotification({
            id:"testa",
            title:"Patient déjà existe!",
            message:reponse,
            type:"warning",
            container:"top-center",
            insert:"bottom",
            animationIn: ["animated","fadeIn"],
            animationOut: ["animated","fadeOut"],
            dismiss:{
              duration:4000,
              showIcon:true
            },
            
        })
    }
 
  } 

  const notifRight= () => {

        
        //notif ajout success
        contextAuthValue.socket.on("ajoutsuccess",reponse=>{
        console.log("success");

      handleNotification(reponse);
  
   });
    }


    useEffect(() => {
        touteSalle();
        notifRight();
    }, []);


 const showLitDispo=(event)=>{

    salle_ped_id = event.currentTarget.value;

    axios.get(`http://${adresseIP}:8000/api/pediatrie/patient/salle/lit/${salle_ped_id}`).then((response)=>{
                  
         setLitdispo(response.data);
         
         setNumSalleDispo(salle_ped_id);

        });
        
  
 }

 const litPedId=(event)=>{
     lit_ped_id=event.currentTarget.value;
 }
 
    // const contextPatientValue=useContext(PatientContext);
const contextAuthValue=useContext(AuthContext);
    
    const onSubmit= async (data)=>{
  
        data["salleped_id"]=num_salle_dispo;
        data["lit"]=lit_ped_id;
        let   datas=data;
        // contextPatientValue.createAdmission(data); 
        contextAuthValue.socket.emit("newAdmission",datas);

      
        // props.newAdmission(data);
        //    const res= await axios.post("http://127.0.0.1:8000/api/pediatrie/add",data);
        //    console.log(res);
        //    if(res.data=="success"){
        //     props.history.push("/chrr.vakinankaratra.com/pediatrie/patient");
        //    }else if(res.data=="existe"){
        //     console.log("efa misy");
        //    }
     

    }
  
    const handleBlur=(event)=>{
        const values=   event.currentTarget.value;
        const nom=event.currentTarget.name;
            if(values!=""){
                if (nom=="num_salleped") setNumSalle(values);
                if (nom=="categorieped") setCategorieSalle(values);
                if (nom=="nombre_litped") setNombreLit(values);
               
        
            }
        }



    const onSubmit2= async ()=>{
       
        const datas={
            num_salleped:num_salleped,
            categorieped:categorieped,
        
            nombre_litped:nombre_litped,
        
        }

           const res= await axios.post("http://"+adresseIP+":8000/api/pediatrie/patient/salle/ajout",datas);
           if (res.data=="existe") {
               console.log(res.data);
               touteSalle();
           }else{
            console.log(res);
            touteSalle();
           }
          
         
     
    }

let liste_salle;

if (salle) {

    liste_salle=salle.map(salles=>{
          
            return(
                <option   key={salles.id} value={salles.id}>N°{salles.num_salleped} {salles.categorieped}</option>
                ) 
  
    });
}

let listelitdispo;


  if (litdispo) {
         listelitdispo=litdispo.map(salles=>{
         
                return(
                    <option   key={salles.id} value={salles.id}>N°{salles.num_lit} </option>
                     )
            
    });
  }



const showSalle=(event)=>{
event.preventDefault();
}


    return(
       

         
<div>


  {/* modal */}

  <div id="salleModal" className=" modal fade" tabIndex="-1" role="dialog" aria-labelledby="salleModal" aria-hidden="true">
  <div className=" modal-dialog" >
      {/* modal content */}
    <div className=" modal-content">
        {/* modal header */}
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Ajouter Nouveau Salle</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* fin modal header */}
        <form >
 {/* modal body */}
 <div className=" modal-body">

        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
        <span htmlFor="nom" className="pr-1 form-label">Numero Salle:</span>
        <input type="text" className={"input form-control"} onBlur={handleBlur} name='num_salleped' placeholder="num salle ..."/>                                 
     
        </div>

        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
        <span htmlFor="nom" className="pr-1 form-label">Categorie:</span>
        <input type="text" className={"input form-control"} onBlur={handleBlur} name="categorieped" placeholder="categorie ..."/>                                 
        
        </div>

        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
        <span htmlFor="nom" className="pr-1 form-label">Nombre Lit:</span>
        <input type="text" className={"input form-control"} onBlur={handleBlur} name="nombre_litped" placeholder="nombre lit ..."/>                                 
  
        </div>
</div>
{/* fin modal body */}

{/* modal footer */}
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
<button  className="btn btn-primary" data-dismiss="modal" onClick={onSubmit2}>Save changes</button>
</div>
{/* fin modal footer */}
        </form>
     
    </div>
    {/* fin modal content */}
  </div>
</div>

               {/* fin modal */}


    {/* form2 */}
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* <contextPatientValue.ReactNotification/> */}

              <ReactNotification/>   


            <div className="pl-6 row d-flex justify-content-between">
                
                            <div className="font-bold text-green-600 rounded-lg ">
                            Fiche d'enregistrement
                            </div>

                            <div className="font-bold text-green-600 rounded-lg ">
                         <button onClick={showSalle} className="btn btn-success" id="showSalle" data-toggle="modal" data-target="#salleModal"><i className="fa fa-plus"></i> Nouveau Salle</button>
                            </div>
                
                             <div className="pt-1 pr-12"> 
                             <button className={"text-white bg-green-700 btn "} >
                             <span className="fa fa-save"></span> Sauvegarder
                                </button>
                                {/* <Link onClick={ajouter} to="/pediatrie/patient" type="button" className="text-white bg-green-600 btn-sm form-control"> <span className="fa fa-plus"></span> Ajouter</Link>
                            */}
                             {/* <button type="button" className="text-white bg-green-600 btn-sm form-control"><span className="fa fa-plus"></span> Ajouter</button> */}
                             </div>
            
            </div>



                {/* row contenue */}
                <div className="mt-3 d-flex justify-content-between">
                  
                    {/* col 1 row contenue */}
                    <div className="col-md-8">
                        {/* row 1 dans col 1 contenue */}
                        <div className="row">
                                {/* card  */}
                            <div className=" card">
                                {/* card header */}
                                <div className="font-semibold text-center border-t-4 border-blue-800 rounded-sm border-b-1 card-header">
                                    <div>ETAT CIVIL</div>
                                    
                                </div>
                                {/* fin card header */}

                                {/* card body */}
                                <div className="card-body ">
                                        {/* row body */}
                                        <div className="rounded-lg ">
                                           
                                    <div className="p-1 text-sm font-bold text-gray-800 row"> 
                                  
                                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                        <span htmlFor="nom" className="pr-1 form-label">Nom:</span>
                                        <input type="text" className={"input form-control"} {...register('nom', { required:"ce champ ne peut pas vide" })} placeholder="nom ..."/>                                 
                                       {errors.nom && <span className="text-danger">{errors.nom.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                        <span  className="pr-1 form-label">Prénom:</span>
                                        <input type="text" className="input form-control" {...register('prenom', { required:"pas vide" })}  placeholder="prenom ..."/>                                 
                                        {errors.prenom && <span className="text-danger">{errors.prenom.message}</span>}
                                        </div>                                        

                                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                        <span htmlFor="date_naissance" className="form-label">Date de Naissance:</span>
                                        <input type="date" className="form-control input " {...register('date_naissance', { required:true })}    placeholder="date de naissance..."/>                                 
                                        {errors.date_naissance && <span className="text-danger">{errors.date_naissance.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                        <span htmlFor="lieu_naissance" className="form-label">Lieu de Naissance:</span>
                                        <input type="text" className="form-control input" {...register('lieu_naissance', { required:true })}    placeholder="lieu naissance..."/>                                 
                                        {errors.lieu_naissance && <span className="text-danger">{errors.lieu_naissance.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                        <span htmlFor="age" className="form-label">Age:</span>
                                        <input type="tel" className="form-control input" {...register('age', { pattern: /\d+/ })}  placeholder="age..."/>                                 
                                        <span  className="form-label">mois</span>
                                        {errors.age && <span className="text-danger">{errors.age.message}</span>}
                                        </div> 



                                        <div className="mb-6 col-md-6 d-flex align-items-end justify-content-center">
                                            
                                            <span htmlFor="genre" className="mr-2 form-label">Genre :</span>
                                            <div className=" form-check">
                                            <input className="text-blue-800 form-check-input" value="Masculin" type="radio" {...register('genre')} defaultChecked/>
                                            <label className="form-check-label" htmlFor="genre1">
                                            Masculin
                                            </label>
                                            </div>
                                            <div className="ml-1 form-check">
                                            <input className="text-blue-800 form-check-input"  value="Feminin" type="radio"{...register('genre')}   />
                                            <label className="form-check-label" htmlFor="genre2">
                                                Feminin
                                            </label>
                                            </div>
                                            </div>

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="telephone" className="form-label">Téléphone:</span>
                                            <input type="tel" className="form-control input" {...register('tel')}  placeholder="téléphone..."/>                                 
                                            {errors.tel && <span className="text-danger">{errors.tel.message}</span>}
                                            </div> 

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="accompagnant" className="form-label">Accompagnant:</span>
                                            <input type="text" className="form-control input" {...register('accompagnant')}  placeholder="accompagnant..."/>                                 
                                            {errors.accompagnat && <span className="text-danger">{errors.accompagnat.message}</span>}
                                            </div> 

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="accompagnant" className="form-label">Profession mère:</span>
                                            <input type="text" className="form-control input" {...register('profession_mere')}  placeholder="profession de la mère..."/>                                 
                                            {errors.profession_mere && <span className="text-danger">{errors.profession_mere.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="accompagnant" className="form-label">Profession père:</span>
                                            <input type="text" className="form-control input" {...register('profession_pere')}  placeholder="profession du père..."/>                                 
                                            {errors.profession_pere && <span className="text-danger">{errors.profession_pere.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="religion" className="form-label">Réligion:</span>
                                            <input type="text" className="form-control input" {...register('religion')}  placeholder="religion..."/>                                 
                                            {errors.religion && <span className="text-danger">{errors.religion.message}</span>}
                                            </div> 

                                            <div className="mb-6 col-md-6 d-flex align-items-end input-group">
                                            <span htmlFor="accompagnant" className="form-label">Situation matrimoniale mère:</span>
                                            <input type="text" className="form-control input" {...register('situation_mere')}  placeholder="situation matrimoniale mère..."/>                                 
                                            {errors.situation_mere && <span className="text-danger">{errors.situation_mere.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="accompagnant" className="mr-4 form-label">Adresse : </span>
                                            <span htmlFor="accompagnant" className="mr-1 form-label">lot:</span>
                                            <input type="text" className="form-control input" {...register('lot')}  placeholder="lot..."/>                                 
                                            <span htmlFor="accompagnant" className="form-label">Fokontany:</span>
                                            <input type="text" className="form-control input" {...register('fkt')}  placeholder="fonkotany..."/> 
                                            {errors.lot && <span className="text-danger">{errors.lot.message}</span>}
                                            {errors.fkt && <span className="text-danger">{errors.fkt.message}</span>}
                                           
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                           
                                            <span htmlFor="accompagnant" className="form-label">Commune:</span>
                                            <input type="text" className="form-control input" {...register('commune')}  placeholder="commune..."/> 
                                            <span htmlFor="accompagnant" className="form-label">District:</span>
                                            <input type="text" className="form-control input" {...register('distric')}  placeholder="distric..."/> 
                                            <span htmlFor="accompagnant" className="form-label">Region:</span>
                                            <input type="text" className="form-control input" {...register('region')}  placeholder="region..."/> 
                                            {errors.commune && <span className="text-danger">{errors.commune.message}</span>}
                                            {errors.district && <span className="text-danger">{errors.district.message}</span>}
                                            {errors.region && <span className="text-danger">{errors.region.message}</span>}
                                            </div>

                                       
                                     
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

                    {/* col 2 row contenue */}

                    <div className="pl-4 col-md-4">

                         {/* row 1 dans col 2 contenue */}
                         <div className="row">
                                {/* card  */}
                            <div className=" card">
                                {/* card header */}
                                <div className="font-semibold text-center border-t-4 border-blue-800 rounded-sm border-b-1 card-header">
                                    <div>ADMISSION</div>
                                    
                                </div>
                                {/* fin card header */}

                                {/* card body */}
                                <div className="card-body ">

                                    <div className="rounded-lg ">
                                        <div className="p-2 text-sm font-bold text-gray-800 row">

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="date_admission" className="form-label">Date d'admission</span>
                                            <input type="date" className="form-control input" {...register('date_admission', { required:true })}  />
                                            {errors.date_admission && <span className="text-danger">{errors.date_admission.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="heure_admission" className="form-label">Heure d'admission</span>
                                            <input type="time" className="form-control input" {...register('heure_admission', { required:true })}   placeholder="14:22:56"/>
                                            {errors.heure_admission && <span className="text-danger">{errors.heure_admission.message}</span>}
                                            </div>

                                            
                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="num_be" className="form-label">N° BE</span>
                                            <input type="text" className="form-control input" {...register('num_be')}  placeholder="numero BE..."/>
                                            {errors.num_BE && <span className="text-danger">{errors.num_BE.message}</span>}
                                            </div>                                       

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="motif" className="form-label">Motif d'admission</span>
                                            <input type="text" className="form-control input" {...register('motif', { required:true })}  placeholder="motif..."/>
                                            {errors.motif && <span className="text-danger">{errors.motif.message}</span>}
                                            </div>

                                    

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="salle" className="form-label">Salle</span>
                                                                             
                                            <select onChange={showLitDispo} className="form-control input"  >
                                               <option value="aucun">Aucun</option>
                                                {liste_salle && liste_salle}
                                            
                                                </select>
                                            </div>

                                            

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="lit" className="form-label">Lit</span>
                                                                             
                                            <select  onChange={litPedId} className="form-control input"  >
                                            <option value="aucun">Aucun</option>
                                                {listelitdispo && listelitdispo}
                                            
                                                </select>
                                            </div>
                                           
                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <label htmlFor="mode" className="mr-2 form-label">Mode de reference : </label>
                                                <select className="border-2 border-blue-900 form-control-sm" {...register('mode')}  >
                                                    <option value="Auto-référé">Auto-référé</option>
                                                    <option value="Référé">Référé</option>
                                                    <option value="Agent de Santé Public">Agent de Santé Public</option>
                                                    <option value="Agent de Santé Privé">Agent de Santé Privé</option>
                                                    <option value="Médecin Spécialiste">Médecin Spécialiste</option>
                                                    <option value="Généraliste">Généraliste</option>
                                                    <option value="Paramédicaux">Paramédicaux</option>
                                                    <option value="Autres">Autres</option>
                                                </select>
                                            </div>

                                        </div>                                       
                                    </div>                                  
                                    
                                </div>
                                {/*fin card body */}

                            </div>
                                {/* fin card */}
                        </div>
                        {/* fin row 1 dans col 2 contenue */}

                        {/* row 2 dans col 2 contenue */}

                        <div className="row d-lex justify-content-center">

                            <div className="bg-blue-300 border-t-4 border-blue-800 rounded-lg col-md-8">

                                <h4 className="text-center underline">
                                        Description
                                </h4>
                                Le champ en * est obligatoire
                               

                            </div>
                                <div className=" col-md-4">

                                <Link to="/chrr.vakinankaratra.com/pediatrie/patient" className="text-white bg-blue-500 btn form-control">
                              Annuler
                            </Link>

                                </div>                          

                        </div>

                        {/* fin row 2 dans col 2 contenue */}

                    </div>


                    {/* fin col 2 row contenue */}


                </div>
                {/* fin row contenue  */}

                </form>


                </div>

    )};
export default React.memo(AddFormPediatrie);