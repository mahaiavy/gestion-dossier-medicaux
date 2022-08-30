import React,{useState} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import HeureTraitement from './ligneantecedent/HeureTraitement';
import LigneTraitement1 from './ligneantecedent/LigneTraitement1';
import InputTraitement from './ligneantecedent/InputTraitement';
import InputAutre from './ligneantecedent/InputAutre';

const Observation=({admission_id,ide,soin})=>{

    const { register,handleSubmit,formState:{errors,isValid,isSubmitted},} = useForm({mode:"all"});
   
    const [count, setCount] = useState([{'id':0}]);
    const [autre, setAutre] = useState([{'id':-1,'values':""}]);
    const [moins, setMoins] = useState(0);

    const ajouterElement=()=>{

        if(count.length==1){
            if (count.length!=autre.length) {
                let i=count[count.length-1].id+1;
               
                let counts=[...count];
                counts.push({'id':i});
                setCount(counts); 
            }
        }else{
            if (count.length!=autre.length) {
          
                let i=count[count.length-1].id+1;
              
                let counts=[...count];
                counts.push({'id':i});
                setCount(counts);           
            }
        }
       
}

function recherche(tab=[],id) {
    for (let index = 0; index < tab.length; index++) {
        if (tab[index]==id) {
            return true;
        }
        
    }
}

const handleBlur=(event)=>{

    const values=   event.currentTarget.value;
    
  
    if(values!=""){
      
        let i=autre[autre.length-1].id+1; 
        
        let autres=[...autre];
        const index=autres.findIndex(countes=>countes.id==event.currentTarget.name);
        if(index==-1){
            autres.push({'id':i,'values':values});
        setAutre(autres); 
        }else{
            let outres=  autres[index].values.split("\t");
            if (outres[1]) {
               
                autres[index].values=values+"\t"+ outres[1]+"\t"+outres[2];
            }else{
                autres[index].values=values+"\t 00 \t"+outres[2];
            }
           
           
            setAutre(autres); 
        }
        
        
    }
 
}

const handleBlur1=(event)=>{

    const values=   event.currentTarget.value;
    
  
    if(values!=""){
      
        let i=autre[autre.length-1].id+1; 
        
        let autres=[...autre];
        const index=autres.findIndex(countes=>countes.id==event.currentTarget.name);
        if(index==-1){
          
        }else{
          let outres=  autres[index].values.split("\t");
            if(outres[2]){
                autres[index].values=outres[0]+"\t"+values+"\t"+outres[2];
            }else{
                autres[index].values=outres[0]+"\t"+values+"\t min";
            }
         
           
            setAutre(autres); 
        }
        
        
    }
 
}

const suprimerElement=(id)=>{

    if(count.length==autre.length){

        let counts=[...count];
        const index=counts.findIndex(countes=>countes.id==id);
         counts.splice(index,1); 
         let indi=count[count.length-2].id;
         counts.splice(indi,1); 
      
        setCount(counts);
        let autres=[...autre];
        const indexe=autres.findIndex(auter=>auter.id==id);
         autres.splice(indexe,1);
        setAutre(autres);  

    }else{
        let counts=[...count];
        const index=counts.findIndex(countes=>countes.id==id);
         counts.splice(index,1); 
        setCount(counts);
        let autres=[...autre];
        const indexe=autres.findIndex(auter=>auter.id==id);
         autres.splice(indexe,1);
        setAutre(autres);
    }
   
      
   
}

const handleRaioChange=(event)=>{
    const values=   event.currentTarget.value;
    
  
    if(values=='min' || values=='h' || values=='j'){
     
        let i=autre[autre.length-1].id+1; 
        
        let autres=[...autre];
        const index=autres.findIndex(countes=>countes.id==event.currentTarget.name);
        if(index==-1){
          
        }else{
          let outres=  autres[index].values.split("\t");
          if(outres[1]){
            autres[index].values=outres[0]+"\t"+outres[1]+"\t"+values;
          }else{
            autres[index].values=outres[0]+"\t 00"+"\t"+values;
          }
          
           
            setAutre(autres); 
        }
               
    }
}

  let ligne=count.map(counte=>{
      if(count.length==1){
        return(
            <tr className="text-center " key={counte.id}>
            <InputAutre cle={null} onBlur={handleBlur} name={counte.id} register={register} label={"traitement"+counte.id} errors={errors} />
    
            <InputTraitement cle={null} onBlur={handleBlur1} name={counte.id} register={register} label={"traitement"+counte.id} errors={errors}  />
    <HeureTraitement name={counte.id} onChange={handleRaioChange}/>
            </tr>
        )
      }else{
        return(
            <tr className="text-center " key={counte.id}>
            <InputAutre cle={null} onBlur={handleBlur} name={counte.id} register={register} label={"traitement"+counte.id} errors={errors} />
    
            <InputTraitement cle={null} onBlur={handleBlur1} name={counte.id} register={register} label={"traitement"+counte.id} errors={errors}  />
            <HeureTraitement name={counte.id} onChange={handleRaioChange}/>
              <td className="text-center"> 
              <span className="p-1 fa fa-trash text-danger" onClick={()=>suprimerElement(counte.counte.id)} type="button"></span>
            </td >
            
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



    const onSubmit= async (data)=>{
        let autres=null;

        for (let index = 1; index < autreValue.length; index++) {
           autres = autres+autreValue[index];
            
        }
        data.autre_periodique=autres;

        if(data.autre_periodique){
            const res= await axios.post("http://"+adresseIP+":8000/pediatrie/consultation/add",data);
        }
     
        if(res.data=="success"){
            console.log("success");
        //  props.history.push("/chrr.vakinankaratra.com/pediatrie/patient");
        }
    
 }

    return(
        <div className={soin ? " tab-pane fade  show active" : "tab-pane fade"} id="nav-observation" role="tabpanel" aria-labelledby="nav-observation-tab">

                     {/* row information */}
                     <form onSubmit={handleSubmit(onSubmit)}>
                {/* row contenue */}
                <div className="p-2 d-flex justify-content-between">
               
                    {/* col 1 row contenue */}
                    <div className="col-md-8">
                        {/* row 1 dans col 1 contenue */}
                        <div className="row">
                                {/* card  */}
                            <div className=" card">
                                {/* card header */}
                                <div className="font-semibold text-center border-t-0 border-b-4 border-blue-800 rounded-sm card-header">
                                    <div>OBSERVATIONS</div>
                                    
                                </div>
                                {/* fin card header */}

                                {/* card body */}
                                <div className="card-body ">
                                        {/* row body */}
                                        <div className="rounded-lg ">
                                           
                                    <div className="p-1 text-sm font-bold text-gray-800 row"> 
                                 
                                        <div className="mb-6 col-md-12 ">
                                        <label htmlFor="histire_maladie" className=" form-label">Histoire de la maladie:</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('histoire_maladie', { required:"ce champ ne peut pas vide" })}/>                                 
                                       {errors.histoire_maladie && <span className="text-danger">{errors.histoire_maladie.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <label htmlFor="signe_general" className=" form-label">SIGNES GENERAUX:</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('signe_general', { required:"ce champ ne peut pas vide" })}/>                                 
                                       {errors.signe_general && <span className="text-danger">{errors.signe_general.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <label htmlFor="signe_fonctionel" className=" form-label">SIGNES FONCTIONNELS:</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('signe_fonctionel', { required:"ce champ ne peut pas vide" })}/>                                 
                                       {errors.signe_fonctionel && <span className="text-danger">{errors.signe_fonctionel.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <input type="text" defaultValue={ide} className={"hidden form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('soinped_id')}/>                                 
                                       {errors.soinped_id && <span className="text-danger">{errors.soinped_id.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <input type="text" defaultValue={admission_id} className={"hidden form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('admisoinped_id')}/>                                 
                                       {errors.admisoinped_id && <span className="text-danger">{errors.admisoinped_id.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <label htmlFor="signe_physique" className=" form-label">SIGNES PHYSIQUES:</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('signe_physique', { required:"ce champ ne peut pas vide" })}/>                                 
                                       {errors.signe_physique && <span className="text-danger">{errors.signe_physique.message}</span>}
                                        </div>

                                        <div className="mb-6 col-md-12 ">
                                        <label htmlFor="diagnostique" className=" form-label">HYPOTHESES DIAGNOSTIQUES:</label>
                                        <input type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('diagnostique', { required:"ce champ ne peut pas vide" })}/>                                 
                                       {errors.diagnostique && <span className="text-danger">{errors.diagnostique.message}</span>}
                                        </div>

                                        {/* <div className="mt-4 mb-6 col-md-12">

                                        <label htmlFor="examen" className=" form-label">EXAMENS A DEMANDER : </label>

                                        <table>
                                            <tbody> 
                                            <tr className="text-center">
                                                <td>Biologie</td><td>Imagerie</td><td>Explorations fonctionnels</td><td>Bacterologie</td><td>Autres</td>
                                            </tr>
                                            <tr>
                                                <td> 
                                                    <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('biologie')}>
                                                   
                                                    </textarea>                               
                                                    {errors.biologie && <span className="text-danger">{errors.biologie.message}</span>}
                                                
                                                </td>
                                                <td> 
                                                    <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('imagerie')}/>                                 
                                                    {errors.imagerie && <span className="text-danger">{errors.imagerie.message}</span>}
                                                
                                                </td>
                                                <td> 
                                                    <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('explo_fontion')}/>                                 
                                                    {errors.explo_fonction && <span className="text-danger">{errors.explo_fonction.message}</span>}
                                                
                                                </td>
                                                <td> 
                                                    <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('bacterologie')}/>                                 
                                                    {errors.bacterologie && <span className="text-danger">{errors.bacterologie.message}</span>}
                                                
                                                </td>
                                                <td> 
                                                    <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('autres')}/>                                 
                                                    {errors.autres && <span className="text-danger">{errors.autres.message}</span>}
                                                
                                                </td>

                                            </tr>
                                            </tbody>
                                           
                                        </table>

                                        </div> */}


                            <div className="mt-4 mb-6 col-md-12">
                            <div className="mb-2 text-center">
                            <label htmlFor="examen" className=" form-label">TRAITEMENTS :</label>
                            </div>
                                    <div className="mb-6">
                                        <label htmlFor="signe_physique" className=" form-label">LIQUIDE ET INJECTABLES :</label>
                                       <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('injectable')}/>                                 
                                        {errors.injectable && <span className="text-danger">{errors.injectable.message}</span>}
                                        </div>

                                        <div className="mb-6">
                                        <label htmlFor="signe_physique" className=" form-label">PER OS :</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold"} {...register('peros')}/>                                 
                                         {errors.peros && <span className="text-danger">{errors.peros.message}</span>}
                                         </div> 

                                        <div className="mb-6">
                                        <label htmlFor="signe_physique" className=" form-label">AUTRES :</label>
                                        <textarea type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold "} {...register('autres')}/>                                 
                                        {errors.autres && <span className="text-danger">{errors.autres.message}</span>}
                                        </div>                  
                                        <label htmlFor="signe_physique" className="mb-2 text-center form-label">TRAITEMENT PERIODIQUE :</label>
                            <table className="table table-bordered">

                                <tbody>
                                    <tr className="text-center">
                                        <td><span>Traitement</span></td>
                                        <td><span>période</span></td>
                                        <td><span>Unité</span></td>
                                    </tr>
                            {ligne}
                                </tbody>
                                <tfoot>
                                    <tr className="text-left ">
                                        <td>
                                        <span onClick={ajouterElement} type="button" className="p-1 ml-2 text-right text-white rounded-full fa fa-plus bg-success"></span>
                               
                                        </td>
                                    </tr>
                                   
                                </tfoot>
                                
                            </table>
                           
                           
                           
                            </div>


                                        <div className="mt-4 mb-6 col-md-12">

                                        <label htmlFor="examen" className=" form-label">TRAITEMENTS :</label>

                                        <textarea defaultValue={autreValue} type="text" className={" form-control border-gray-400 text-gray-800 text-sm font-bold "} />                                 
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
                                <div className="font-semibold text-center border-t-0 border-b-4 border-blue-800 rounded-sm card-header">
                                    <div>PARAMETRES VITAUX ET BIOMETRIES</div>
                                    
                                </div>
                                {/* fin card header */}

                                {/* card body */}
                                <div className="card-body ">

                                    <div className="rounded-lg ">
                                        <div className="p-2 text-sm font-bold text-gray-800 row">
                                                <div className="font-bold text-center underline col-md-12">BIOMETRIE :</div>
                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="poids" className="form-label">Poids(kg) :</span>
                                            <input type="text" className="form-control input" {...register('poids', { required:true })}  />
                                            {errors.poids && <span className="text-danger">{errors.poids.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="taille" className="form-label">Taille(cm) :</span>
                                            <input type="text" className="form-control input" {...register('taille', { required:true })}   placeholder="Ex:100"/>
                                            {errors.taille && <span className="text-danger">{errors.taille.message}</span>}
                                            </div>

                                            
                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="pa" className="form-label">PC :</span>
                                            <input type="text" className="form-control input" {...register('pa')}  placeholder="Ex:5/8"/>
                                            {errors.pa && <span className="text-danger">{errors.pa.message}</span>}
                                            </div>                                       

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="IMC" className="form-label">IMC :</span>
                                            <input type="text" className="form-control input" {...register('imc', { required:true })}  placeholder="IMC..."/>
                                            {errors.imc && <span className="text-danger">{errors.imc.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="p_sur_t" className="form-label">P/T :</span>
                                            <input type="text" className="form-control input" {...register('p_sur_t')}  placeholder="P/C ..."/>
                                            {errors.p_sur_t && <span className="text-danger">{errors.p_sur_t.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="p_sur_a" className="form-label">P/A :</span>
                                            <input type="text" className="form-control input" {...register('p_sur_a')}  placeholder="P/A..."/>
                                            {errors.p_sur_a && <span className="text-danger">{errors.p_sur_a.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="t_sur_a" className="form-label">T/A :</span>
                                            <input type="text" className="form-control input" {...register('t_sur_a')}  placeholder="T/A..."/>
                                            {errors.t_sur_a && <span className="text-danger">{errors.t_sur_a.message}</span>}
                                            </div>
                                           
                                            <div className="font-bold text-center underline col-md-12">PARAMETRES VITAUX :</div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="temperature" className="form-label">Température(°C) :</span>
                                            <input type="text" className="form-control input" {...register('temperature')}  placeholder="Ex:37"/>
                                            {errors.temperature && <span className="text-danger">{errors.temperature.message}</span>}
                                            </div>
                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="fc" className="form-label">FC :</span>
                                            <input type="text" className="form-control input" {...register('fc')}  placeholder="frequence cardiaque..."/>
                                            {errors.fc && <span className="text-danger">{errors.explo_fonction.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="fr" className="form-label">FR :</span>
                                            <input type="text" className="form-control input" {...register('fr')}  placeholder="frequence respiatoire..."/>
                                            {errors.fr && <span className="text-danger">{errors.fr.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="spo2" className="form-label">Sa O2 en AA :</span>
                                            <input type="text" className="form-control input" {...register('spo2')}  placeholder="Sa O2..."/>
                                            {errors.spo2 && <span className="text-danger">{errors.spo2.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="pa" className="form-label">PA :</span>
                                            <input type="text" className="form-control input" {...register('pa')}  placeholder="pression arterielle..."/>
                                            {errors.pa && <span className="text-danger">{errors.pa.message}</span>}
                                            </div>

                                            <div className="mb-6 col-md-12 d-flex align-items-end input-group">
                                            <span htmlFor="glycemie_capillaire"className="form-label">PA :</span>
                                            <input type="text" className="form-control input" {...register('glycemie_capillaire')}  placeholder="glycemie capillaire..."/>
                                            {errors.glycemie_capillaire && <span className="text-danger">{errors.glycemie_capillaire.message}</span>}
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
                                    <button className="btn btn-info" type="submit">
                                        ajouter
                                    </button>

                              

                                </div>                          

                        </div>

                        {/* fin row 2 dans col 2 contenue */}

                    </div>


                    {/* fin col 2 row contenue */}
                 

                </div>
                {/* fin row contenue  */}

                </form >

        </div>
    );
}
export default React.memo(Observation);