import React from 'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';



const UpdateFormPediatrie=()=>{


    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
    
    const onSubmit= async (data)=>{
           const res= await axios.post(`http://${adresseIP}:8000/api/pediatrie/add`,data);
           if(res.data=="success"){
            console.log(res.data);
           }else if(res.data=="existe"){
            console.log("efa misy");
           }
     
    }

    let notif="";

    return(
       
<div className="pl-20 col-md-11 col-sm-12 col-xs-12">


    {/* nav droite */}
       
    <div >

            <div className="pb-2 border-b-2 border-gray-500 rounded-lg"> Patient &gt; Nouveau Patient</div>

            {/* contenue nav droite */}

            <div className="w-full h-full bg-white">

            <form onSubmit={handleSubmit(onSubmit)}>

              

            <div className="pl-6 row d-flex justify-content-between">
                            <div className="font-bold text-green-600 rounded-lg ">
                            Fiche d'enregistrement
                            </div>
                
                             <div className="pt-1 pr-12"> 
                             <button className={"text-white bg-green-700 btn "} disabled={false}>
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
                    <div className="col-md-7">
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
                                        <div className="bg-gray-300 rounded-lg">
                                           
                                    <div className="p-1 text-sm font-bold text-gray-800 row">
                                  
                                        <div className="mb-2 col-md-4 ">
                                        <label htmlFor="nom" className=" form-label">Nom</label>
                                        <input type="text" className={"form-control "+ notif} {...register('nom', { required:"ce champ ne peut pas vide" })}  placeholder="nom ..."/>                                 
                                       {errors.nom && <span className="text-danger">{errors.nom.message}</span>}
                                        </div>

                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="prenom" className="form-label">Prénom</label>
                                        <input type="text" className="form-control " {...register('prenom', { required:"pas vide" })}  placeholder="prenom ..."/>                                 
                                        {errors.prenom && <span className="text-danger">{errors.prenom.message}</span>}
                                        </div>

                                        <div className="mb-2 col-md-2">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input type="tel" className="form-control" {...register('age', { pattern: /\d+/ })}  placeholder="age..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-2">
                                            
                                        <label htmlFor="genre" className="form-label">Genre</label>
                                        <div className="form-check">
                                        <input className="form-check-input" value="Masculin" type="radio" {...register('genre')} defaultChecked/>
                                        <label className="form-check-label" htmlFor="genre1">
                                        Masculin
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input"  value="Feminin" type="radio"{...register('genre')}   />
                                        <label className="form-check-label" htmlFor="genre2">
                                            Feminin
                                        </label>
                                        </div>
                                        </div>

                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="accompagnant" className="form-label">Accompagnant</label>
                                        <input type="text" className="form-control " {...register('accompagnant')}  placeholder="accompagnant..."/>                                 
                                        </div>

                                        <div className="col-md-3">
                                        <label htmlFor="date_naissance" className="form-label">Date de Naissance</label>
                                        <input type="date" className="form-control " {...register('date_naissance', { required:true })}    placeholder="date de naissance..."/>                                 
                                        </div>

                                        <div className="col-md-4 ">
                                        <label htmlFor="lieu_naissance" className="form-label">Lieu de Naissance</label>
                                        <input type="text" className="form-control " {...register('lieu_naissance', { required:true })}    placeholder="lieu naissance..."/>                                 
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


                        {/* row 2 dans col 1 contenue */}

                        <div className="row">
                                {/* card  */}
                            <div className=" card">
                                {/* card header */}
                                <div className="font-semibold text-center border-blue-800 rounded-sm border-b-1 card-header">
                                    <div>CONTEXTE SOCIAL</div>
                                    
                                </div>
                                {/* fin card header */}

                                {/* card body */}
                                <div className="card-body ">
                                        {/* row body */}
                                        <div className="bg-gray-300 rounded-lg">
                                           
                                    <div className="p-1 text-sm font-bold text-gray-800 row">
                                   
                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="nom_mere" className=" form-label">Nom de la mère</label>
                                        <input type="text" className="form-control " {...register('nom_mere', { required:true })}    placeholder="nom de la mère..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="nom_pere" className="form-label">Nom du père</label>
                                        <input type="text" className="form-control" {...register('nom_pere')}    placeholder="nom du père ..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="profession_mere" className="form-label">Profession mère</label>
                                        <input type="text" className="form-control" {...register('profession_mere', { required:true })}    placeholder="profession mère..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-4">
                                        <label htmlFor="profession_pere" className="form-label">Profession père</label>
                                        <input type="text" className="form-control" {...register('profession_pere')}    placeholder="profession père..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-2">
                                        <label htmlFor="age_mere" className="form-label">Age mère</label>
                                        <input type="text" className="form-control" {...register('age_mere', { required:true })}    placeholder="age mère..."/>                                 
                                        </div>

                                        <div className="mb-2 col-md-2">
                                        <label htmlFor="age_pere" className="form-label">Age père</label>
                                        <input type="tel" className="form-control" {...register('age_pere')}    placeholder="age père..."/>                                 
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="situation_mere" className="form-label">Situation matrimoniale de la mère</label>
                                                <select className="form-control-sm" {...register('situation_mere')}  >
                                                    <option value="Mariée" >Mariée</option>
                                                    <option value="Veuve">Veuve</option>
                                                    <option value="Divorcée">Divorcée</option>
                                                    <option value="Fille-mère">Fille-mère</option>
                                                   
                                                </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="niveau_mere" className="form-label">Niveau d'instruction de la mère</label>
                                                <select className="form-control-sm" {...register('niveau_mere')}  >
                                                    <option value="Universitaire">Universitaire</option>
                                                    <option value="Secondaire">Secondaire</option>
                                                    <option value="Primaire">Primaire</option>
                                                    <option value="Illetrée">Illetrée</option>                         
                                                </select>
                                        </div>

                                        <div className="col-md-2">
                                        <label htmlFor="nombre_fratrie" className="form-label">Nombre fratrie</label>
                                        <input type="text" className="form-control " {...register('nombre_fratrie', { required:true })}  />                                 
                                        </div>

                                        <div className="col-md-3">
                                        <label htmlFor="ethnie" className="form-label">Ethnie</label>
                                        <input type="text" className="form-control " {...register('ethnie')}   />                                 
                                        </div>

                                        <div className="col-md-3 ">
                                        <label htmlFor="religion" className="form-label">Religion</label>
                                        <input type="text" className="form-control " {...register('religion')}   />                                 
                                        </div>

                                        <div className="col-md-3 ">
                                        <label htmlFor="conact" className="form-label">Contact</label>
                                        <input type="text" className="form-control " {...register('contact')}    placeholder="contact..."/>                                 
                                        </div>

                                        <div className="col-md-4 ">
                                        <label htmlFor="adresse" className="form-label">Adresse</label>
                                        <input type="text" className="form-control " {...register('adresse', { required:true })}    placeholder="adresse..."/>                                 
                                        </div>
                                     
                                    </div>
                                   
                                    </div>
                                        {/* fin row body */}
                                   
                                    
                                </div>
                                {/*fin card body */}
                                

                            </div>
                                {/* fin card */}
                        </div>

                        {/* fin row 2 dans col 1 contenue */}


                    </div>
                    {/*fin col 1 row contenue */}

                    {/* col 2 row contenue */}

                    <div className="pl-4 col-md-5">

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

                                    <div className="bg-gray-300 rounded-lg">
                                        <div className="p-2 text-sm font-bold text-gray-800 row">

                                            <div className="mb-2 col-md-4">
                                            <label htmlFor="date_admission" className="form-label">Date d'admission</label>
                                            <input type="date" className="form-control" {...register('date_admission', { required:true })}  />
                                            </div>

                                            <div className="mb-2 col-md-4">
                                            <label htmlFor="heure_admission" className="form-label">Heure d'admission</label>
                                            <input type="dateTime" className="form-control" {...register('heure_admission', { required:true })}   placeholder="14:22:56"/>
                                            </div>

                                            
                                            <div className="mb-2 col-md-4">
                                            <label htmlFor="num_be" className="form-label">N° d'enregistrement BE</label>
                                            <input type="text" className="form-control" {...register('num_be')}  />
                                            </div>                                       

                                            <div className="mb-2 col-md-8">
                                            <label htmlFor="motif" className="form-label">Motif d'admission</label>
                                            <input type="text" className="form-control" {...register('motif', { required:true })}  />
                                            </div>

                                            <div className="col-md-2">
                                            <label htmlFor="salle" className="form-label">Salle</label>
                                            <input type="text" className="form-control" {...register('salle_id')}  />
                                            </div>

                                            <div className=" col-md-2">
                                            <label htmlFor="service_id" className="form-label">Salle</label>
                                            <input type="text" value={1} className="form-control" {...register('service_id')}  />
                                            </div>

                                            <div className="col-md-2">
                                            <label htmlFor="lit" className="form-label">Lit</label>
                                            <input type="text" className="form-control" {...register('lit')}  />
                                            </div>
                                           
                                            <div className="col-md-4">
                                            <label htmlFor="mode" className="form-label">Mode de reference</label>
                                                <select className="form-control-sm" {...register('mode')}  >
                                                    <option >Auto-référé</option>
                                                    <option>Référé</option>
                                                    <option>Agent de Santé Public</option>
                                                    <option>Agent de Santé Privé</option>
                                                    <option>Médecin Spécialiste</option>
                                                    <option>Généraliste</option>
                                                    <option>Paramédicaux</option>
                                                    <option>Autres</option>
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

                                <Link to="/pediatrie/patient" className="text-white bg-blue-500 btn form-control">
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

            {/* fin contenue nav droite */}

    </div>

    {/* fin nav droite */}


</div>

    )};
export default UpdateFormPediatrie