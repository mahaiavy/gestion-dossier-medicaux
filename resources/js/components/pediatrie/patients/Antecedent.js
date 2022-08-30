import React,{useState,useEffect ,useContext} from 'react';

import {useForm} from 'react-hook-form';

const Antecedent=({antecedent})=>{
    console.log(antecedent);
    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});

    return(
   
         <div className="p-4 tab-pane fade row" id="nav-antecedent" role="tabpanel" aria-labelledby="nav-antecedent-tab">    
        {/* col 1 */}
    <div className=" col-md-6">


    <div><label  className="pr-10 text-sm font-bold form-label">Familiaux :</label></div>

    <div className="mb-5 font-bold d-flex align-items-end">
    <p  className="font-normal font-italic ">Nombre de la fratrie :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].nombre_fratrie}</span> </p>              
    <p  className="pl-2 font-normal font-italic">Rang :<span  className="pl-2 font-bold form-label "> {antecedent[0] && antecedent[0].rang}</span> </p> 
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Collatéreau :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].collatereau}</span> </p>              
   </div>

   <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Parents :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].parents}</span> </p>              
   </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <span  className="pr-2 form-label">Grossesse :</span>
    <p  className="font-normal font-italic ">CPN :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].cpn}</span> </p>              
    <p  className="font-normal font-italic ">VAT :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].vat}</span> </p>              
    <p  className="font-normal font-italic ">Age de la mère :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].age_de_mere}</span> </p>              
    </div>

    <div><label  className="pr-10 text-sm font-bold form-label">Serologie durant la grossesse :</label></div>

 
    <div className="pl-20 form-check d-flex">
        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="HIV"    defaultChecked  {...register('serologie')} />
        <label className="mr-32 form-check-label" htmlFor="serologie">
        HIV 
        </label>
        </div>

        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="Hépatite B" defaultChecked  {...register('serologie')}/>
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
        <input className="form-check-input" type="checkbox" value="Rubéole" defaultChecked  {...register('serologie')}/>
        <label className="form-check-label" htmlFor="serologie">
        Rubéole 
        </label>
        </div>
    </div>

    <div className="pl-20 mb-8 form-check d-flex">
        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="Toxoplasmose" defaultChecked  {...register('serologie')}/>
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
    <p  className="font-normal font-italic ">Pathologie :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].pathologie}</span> </p>              
   </div>

    <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Accouchement :</label></div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Lieu :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].lieu}</span> </p>              
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Voie :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].voie}</span> </p>              
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Eutocique :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].eutocique}</span> </p>              
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Terme :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].terme}</span> </p>              
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Poids de naissanse :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].poid_naiss}</span> </p>              
   </div>

   <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Liquide Amniotique :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].liquide_amniotiq}</span> </p>              
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Cri immédiatement à la naissance :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].cri_immed_naiss}</span> </p>              
    </div>   

    <div className="mb-6 font-bold input-group d-flex align-items-end">
        <span  className="pr-2 form-label">APGAR :</span>
        <p  className="font-normal font-italic ">M1:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].m1}</span> </p>              
        <p  className="font-normal font-italic ">M5:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].m5}</span> </p>              
        <p  className="font-normal font-italic ">M1:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].m10}</span> </p>              

    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Périnataux :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].perinataux}</span> </p>              
    </div>
 
    <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Vaccination :</label></div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Carnet de Santé/de Vaccination:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].carnet_vaccin}</span> </p>              
    </div>
 
    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Diplome PEV :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].diplome_pev}</span> </p>              
    </div>        

    <div className="pl-20 form-check d-flex">
        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="oui" defaultChecked  {...register('bcg')} />
        <label className="mr-32 form-check-label" htmlFor="bcg">
        BCG 
        </label>
        </div>

        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="oui" defaultChecked  {...register('po')}/>
        <label className="form-check-label" htmlFor="po">
        PO
        </label>
        </div>
    </div>

    <div className="pl-20 form-check d-flex">
        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="oui"  defaultChecked {...register('semaine6')}/>
        <label className="pr-4 mr-16 form-check-label " htmlFor="semaine6">
        Semaine6 
        </label>
        </div>

        <div className="text-sm font-bold">
        <input className="form-check-input" type="checkbox" value="oui" defaultChecked  {...register('semaine10')}/>
        <label className="form-check-label" htmlFor="semaine10">
        Semaine10 
        </label>
        </div>
    </div>

    <div className="pl-20 mb-8 form-check d-flex">
        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="oui" defaultChecked  {...register('semaine14')}/>
        <label className="pr-1 mr-20 form-check-label" htmlFor="semaine14">
        Semaine14 
        </label>
        </div>

        <div className="text-sm font-bold ">
        <input className="form-check-input" type="checkbox" value="oui" defaultChecked  {...register('var')}/>
        <label className="form-check-label" htmlFor="var">
        VAR 
        </label>
        </div>
    </div>

    <div className="mb-6 text-sm font-bold col-md-12">
    <p  className="font-normal font-italic ">Vaccin hors PEV :<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].vaccin_hors_pev}</span> </p>              
    </div>    

    <div className="mb-6 font-bold col-md-12">
    <p  className="font-normal font-italic ">Lesquels:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].vaccin_hors_pev}</span> </p>              
    </div>

    <div className="mb-6 font-bold col-md-12">
    <p  className="font-normal font-italic ">Dernier déparasitage:<span  className="pl-2 font-bold form-label"> {antecedent[0] && antecedent[0].dernier_parasitage}</span> </p>              
    </div>


    </div>
        {/*fin col 1 */}

        {/* col 2 */}
    <div className="col-md-6">

    <div> <label htmlFor="lieu" className="text-sm font-bold form-label">Alimentation :</label></div>

    <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
    <span htmlFor="allaitement mr-2" className="form-label">Allaitement :</span>
    <span htmlFor="allaitement" className="form-label">Durée :{antecedent[0] && antecedent[0].duree_allait}</span>
    
            <div className=" form-check">
            <input className="text-blue-800 form-check-input" value="maternel" defaultChecked type="radio" {...register('allaitement')} defaultChecked/>
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
   
    </div>

    

    <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
    <span htmlFor="allaitement mr-2" className="form-label">Propreté diurne :</span>
   
            <div className="ml-2 form-check">
            <input className="text-blue-800 form-check-input" value="oui" type="radio" defaultChecked {...register('proprete_diurne')} defaultChecked/>
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
            <span htmlFor="allaitement" className="form-label">Age : {antecedent[0] && antecedent[0].age_propre_diurne}</span>

    </div>

    <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
    <span htmlFor="allaitement mr-2" className="form-label">Propreté nocturne :</span>
   
            <div className="ml-2 form-check">
            <input className="text-blue-800 form-check-input" value="oui" type="radio" disabled defaultChecked {...register('proprete_nocturne')} defaultChecked/>
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
            <span htmlFor="allaitement" className="form-label">Age :{antecedent[0] && antecedent[0].age_propre_noct}</span>
  
    </div>



    </div>
    {/* fin col 2 */}

    {/* fin row */}
    </div>
    )

}
export default React.memo(Antecedent);