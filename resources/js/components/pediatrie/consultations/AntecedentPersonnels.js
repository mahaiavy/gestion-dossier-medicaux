import React,{useState,useEffect,useContext} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
 import LignePathologie from './ligneantecedent/LignePathologie';
import InputBasic from './ligneantecedent/InputBasic';
import InputRadioButton from './ligneantecedent/InputRadioButton';
import PatientContext from '../context/PatientContext';
import AuthContext from '../../AuthContext';

const AntecedentPersonnels=({id})=>{


    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
    const contextPatientValue=useContext(PatientContext);
    const contextAuthValue=useContext(AuthContext);


    const onSubmit= async (data)=>{

        contextAuthValue.socket.emit("newAntecedent",data);
        // contextPatientValue.createAntecedent(data);
        // const res= await axios.post("http://169.254.218.64:8000/api/pediatrie/antecedent/add",data);
        // console.log(res);
        // if(res.data=="success"){
        //     console.log("success");
        //  props.history.push("/chrr.vakinankaratra.com/pediatrie/patient");
        // }
  
 }


    return(
           
          
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4 row">
            

                    {/* col 1 */}
                <div className=" col-md-6">


                <div><label  className="pr-10 text-sm font-bold form-label">Familiaux :</label></div>

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="nombre_fratrie" className="form-label">Nombre de la fratrie :</span>
                <input type="text" className="form-control input" {...register('nombre_fratrie', { required:true })}  />               
                <span htmlFor="nombre_fratrie" className="form-label">Rang :</span>
                <input type="text" className="form-control input" {...register('rang', { required:true })}  />
                {errors.nombre_fratrie && <span className="text-danger">{errors.nombre_fratrie.message}</span>}
                {errors.rang && <span className="text-danger">{errors.rang.message}</span>}
                </div>

              

                <InputBasic register={register} errors={errors} nom="collatereau" label="Collatéreau"/>

                <InputBasic register={register} errors={errors} nom="parents" label="Parents"/>

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span  className="pr-2 form-label">Grossesse :</span>
                <span htmlFor="cpn" className="form-label ">CPN : </span>
                <input type="text" className="mr-1 form-control input" {...register('cpn')}  />
                <span htmlFor="vat" className="form-label">VAT : </span>
                <input type="text" className="mr-1 form-control input" {...register('vat')}  />
                <span htmlFor="age_de_mere" className="form-label">Age de la mère : </span>
                <input type="text" className="form-control input" {...register('age_de_mere')}  />
                {errors.cpn && <span className="text-danger">{errors.cpn.message}</span>}
                {errors.age_de_mere && <span className="text-danger">{errors.age_de_mere.message}</span>}
                {errors.vat && <span className="text-danger">{errors.vat.message}</span>}
                </div>

                <div><label  className="pr-10 text-sm font-bold form-label">Serologie durant la grossesse :</label></div>
                <div className="pl-20 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="HIV"   {...register('serologie')} />
                    <label className="mr-32 form-check-label" htmlFor="serologie">
                    HIV 
                    </label>
                    </div>

                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="Hépatite B"  {...register('serologie')}/>
                    <label className="form-check-label" htmlFor="serologie">
                    Hépatite B 
                    </label>
                    </div>
                </div>

                <div className="pl-20 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="Syphilis"  {...register('serologie')}/>
                    <label className="pr-1 mr-24 form-check-label" htmlFor="serologie">
                    Syphilis 
                    </label>
                    </div>

                    <div className="text-sm font-bold">
                    <input className="form-check-input" type="checkbox" value="Rubéole"  {...register('serologie')}/>
                    <label className="form-check-label" htmlFor="serologie">
                    Rubéole 
                    </label>
                    </div>
                </div>

                <div className="pl-20 mb-8 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="Toxoplasmose"  {...register('serologie')}/>
                    <label className="pr-1 form-check-label mr-14" htmlFor="serologie">
                    Toxoplasmose 
                    </label>
                    </div>

                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="CMV"  {...register('serologie')}/>
                    <label className="form-check-label" htmlFor="serologie">
                    CMV 
                    </label>
                    </div>
                </div>

                <div className="mb-6 text-sm font-bold col-md-12">
                <label htmlFor="pathologie" className=" form-label">Pathologie:</label>
                <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('pathologie')}/>                                 
                {errors.pathologie && <span className="text-danger">{errors.pathologie.message}</span>}
                </div>

                <div className="mb-6 text-sm font-bold col-md-12">
      
                <input type="text" defaultValue={id} className={" form-control  hidden"} {...register('antcdped_id')}/>                                 
                {errors.antcdped_id && <span className="text-danger">{errors.antcdped_id.message}</span>}
                </div>

                <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Accouchement :</label></div>
                <InputBasic register={register} errors={errors} nom="lieu" label="Lieu"/>

                <InputBasic register={register} errors={errors} nom="voie" label="Voie"/>

                <InputRadioButton register={register}  nom="eutocique" label="Eutocique"/>

                <InputBasic register={register} errors={errors} nom="terme" label="Terme"/>

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="poid_naiss" className="form-label">Poids de naissanse :</span>
                <input type="text" className="form-control input" {...register('poid_naiss', { required:true })}  />
                        <div className=" form-check">
                        <input className="text-blue-800 form-check-input" value="kg" type="radio" {...register('kg')} defaultChecked/>
                        <label className="form-check-label" htmlFor="eutocique1">
                        Kg
                        </label>
                        </div>
                        <div className="ml-4 form-check">
                        <input className="text-blue-800 form-check-input"  value="g" type="radio"{...register('kg')}   />
                        <label className="form-check-label" htmlFor="eutocique2">
                            g
                        </label>
                        </div>
                {errors.poid_naiss && <span className="text-danger">{errors.poid_naiss.message}</span>}
                </div>

                <InputBasic register={register} errors={errors} nom="liquide_amniotiq" label="Liquide Amniotique"/>

                <InputRadioButton register={register} nom="cri_immed_naiss" label="Cri immédiatement à la naissance"/>

                

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                    <span  className="pr-2 form-label">APGAR :</span>
                    <span htmlFor="m1" className="form-label ">M1 : </span>
                    <input type="text" className="mr-1 form-control input" {...register('m1')}  />
                    <span htmlFor="m5" className="form-label">M5 : </span>
                    <input type="text" className="mr-1 form-control input" {...register('m5')}  />
                    <span htmlFor="m10" className="form-label">M10 : </span>
                    <input type="text" className="form-control input" {...register('m10')}  />
                    {errors.m1 && <span className="text-danger">{errors.m1.message}</span>}
                    {errors.m5 && <span className="text-danger">{errors.m5.message}</span>}
                    {errors.m10 && <span className="text-danger">{errors.m10.message}</span>}
                </div>

                <InputBasic register={register} errors={errors} nom="perinataux" label="Périnataux"/>

                <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Vaccination :</label></div>

                <InputRadioButton register={register}  nom="carnet_vaccin" label="Carnet de Santé/de Vaccination"/>

               
                <InputRadioButton register={register}  nom="diplome_pev" label="Diplome PEV"/>

                <div className="pl-20 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="oui"   {...register('bcg')} />
                    <label className="mr-32 form-check-label" htmlFor="bcg">
                    BCG 
                    </label>
                    </div>

                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="oui"  {...register('po')}/>
                    <label className="form-check-label" htmlFor="po">
                    PO
                    </label>
                    </div>
                </div>

                <div className="pl-20 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="oui"  {...register('semaine6')}/>
                    <label className="pr-4 mr-16 form-check-label " htmlFor="semaine6">
                    Semaine6 
                    </label>
                    </div>

                    <div className="text-sm font-bold">
                    <input className="form-check-input" type="checkbox" value="oui"  {...register('semaine10')}/>
                    <label className="form-check-label" htmlFor="semaine10">
                    Semaine10 
                    </label>
                    </div>
                </div>

                <div className="pl-20 mb-8 form-check d-flex">
                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="oui"  {...register('semaine14')}/>
                    <label className="pr-1 mr-20 form-check-label" htmlFor="semaine14">
                    Semaine14 
                    </label>
                    </div>

                    <div className="text-sm font-bold ">
                    <input className="form-check-input" type="checkbox" value="oui"  {...register('var')}/>
                    <label className="form-check-label" htmlFor="var">
                    VAR 
                    </label>
                    </div>
                </div>

                <InputRadioButton register={register}  nom="vaccin_hors_pev" label="Vaccin hors PEV"/>

                <div className="mb-6 text-sm font-bold col-md-12">
                <label htmlFor="vaccin_hors_pev" className=" form-label">Lesquels :</label>
                <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('vaccin_hors_pev')}/>                                 
                {errors.vaccin_hors_pev && <span className="text-danger">{errors.vaccin_hors_pev.message}</span>}
                </div>

                <InputBasic register={register} errors={errors} nom=" dernier_parasitage" label="Dernier déparasitage"/>

               

             


                </div>
                    {/*fin col 1 */}

                    {/* col 2 */}
                <div className="col-md-6">

                <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Alimentation :</label></div>

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="allaitement mr-2" className="form-label">Allaitement :</span>
                <span htmlFor="allaitement" className="form-label">Durée :</span>
                <input type="text" className="form-control input" {...register('duree_allait')}  />
                        <div className=" form-check">
                        <input className="text-blue-800 form-check-input" value="maternel" type="radio" {...register('allaitement')} defaultChecked/>
                        <label className="form-check-label" htmlFor="allaitement">
                        Maternel exclusif
                        </label>
                        </div>
                        <div className="ml-4 form-check">
                        <input className="text-blue-800 form-check-input"  value="mixte" type="radio"{...register('allaitement')}   />
                        <label className="form-check-label" htmlFor="allaitement">
                            Mixte
                        </label>
                        </div>
                        <div className="ml-4 form-check">
                        <input className="text-blue-800 form-check-input"  value="artificiel" type="radio"{...register('allaitement')}   />
                        <label className="form-check-label" htmlFor="allaitement">
                            Artificiel
                        </label>
                        </div>
                {errors.poid_naiss && <span className="text-danger">{errors.poid_naiss.message}</span>}
                </div>


                <InputBasic register={register} errors={errors}  nom="age_diversification" label="Age de debut de diversification"/>

                <InputBasic register={register} errors={errors}  nom="sevrage_lait_mat" label="Sevrage lait maternel"/>


                <InputBasic register={register} errors={errors}  nom="diversification_actu" label="Diversification actuelle"/>

                <InputBasic register={register} errors={errors}  nom="matin" label="Matin"/>

                <InputBasic register={register} errors={errors}  nom="midi" label="Midi"/>

                <InputBasic register={register} errors={errors}  nom="soir" label="Soir"/>

                <InputBasic register={register} errors={errors}  nom="gouter" label="Gouter"/>

                <InputRadioButton register={register}  nom="propre_ration" label="Propre ration/assiette"/>

                <InputBasic register={register} errors={errors}  nom="dev_psychomoteur" label="Développement psychomoteur"/>
               
                <InputBasic register={register} errors={errors}  nom="motricite" label="Motricité"/>
            
                <InputBasic register={register} errors={errors}  nom="sociabilite" label="Sociabilité "/>
               
                <InputBasic register={register} errors={errors}  nom="language" label="Language "/>
               
                <InputBasic register={register} errors={errors}  nom="scolarite" label="Scolarité "/>
                
                <InputBasic register={register} errors={errors}  nom="vie_en_collectiv" label="Vie en collectivité "/>
                

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="allaitement mr-2" className="form-label">Propreté diurne :</span>
               
                        <div className="ml-2 form-check">
                        <input className="text-blue-800 form-check-input" value="oui" type="radio" {...register('proprete_diurne')} defaultChecked/>
                        <label className="form-check-label" htmlFor="allaitement">
                        Oui
                        </label>
                        </div>
                        
                        <div className="ml-4 mr-2 form-check">
                        <input className="text-blue-800 form-check-input"  value="non" type="radio"{...register('proprete_diurne')}   />
                        <label className="form-check-label" htmlFor="allaitement">
                            Non
                        </label>
                        </div>
                        <span htmlFor="allaitement" className="form-label">Age :</span>
                <input type="text" className="form-control input" {...register('age_propre_diurne')}  />
                {errors.poid_naiss && <span className="text-danger">{errors.poid_naiss.message}</span>}
                </div>

                <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="allaitement mr-2" className="form-label">Propreté nocturne :</span>
               
                        <div className="ml-2 form-check">
                        <input className="text-blue-800 form-check-input" value="oui" type="radio" {...register('proprete_nocturne')} defaultChecked/>
                        <label className="form-check-label" htmlFor="allaitement">
                        Oui
                        </label>
                        </div>
                       
                        <div className="ml-4 mr-2 form-check">
                        <input className="text-blue-800 form-check-input"  value="non" type="radio"{...register('proprete_nocturne')}   />
                        <label className="form-check-label" htmlFor="allaitement">
                            Non
                        </label>
                        </div>
                        <span htmlFor="allaitement" className="form-label">Age :</span>
                <input type="text" className="form-control input" {...register('age_propre_noct')}  />
                {errors.poid_naiss && <span className="text-danger">{errors.poid_naiss.message}</span>}
                </div>

                <InputBasic register={register} errors={errors}  nom="sommeil" label="Sommeil "/>
               

              








                <button className="btn btn-info" type="submit">Ajouter</button>






                </div>
                {/* fin col 2 */}

               



            
                {/* fin row */}
                </form>
                                    
   
    );
}
export default React.memo(AntecedentPersonnels);