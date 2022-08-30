import React,{useState,useEffect} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const InputBasic=({register,errors,nom,label})=>{


 

    return(
    
        <div className="mb-6 text-sm font-bold input-group d-flex align-items-end">
                <span htmlFor="collatereau" className="form-label">{label} :</span>
                <input type="text" className="form-control input" {...register(`${nom}`, { required:true })}  />
                {errors.nom && <span className="text-danger">{errors.nom.message}</span>}
        </div>
    );
}
export default React.memo(InputBasic);