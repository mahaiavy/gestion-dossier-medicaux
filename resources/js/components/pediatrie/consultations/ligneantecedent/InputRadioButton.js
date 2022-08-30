import React,{useState,useEffect} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const InputRadioButton=({register,nom,label})=>{


 

    return(
    
        <div className="mb-6 text-sm font-bold input-group">
                        <span htmlFor="propre_ration" className="mr-4 form-label">{label} :</span>
                        <div className=" form-check">
                        <input className="text-blue-800 form-check-input" value="oui" type="radio" {...register(`${nom}`)} defaultChecked/>
                        <label className="form-check-label" htmlFor="propre_ration">
                        Oui
                        </label>
                        </div>
                        <div className="ml-4 form-check">
                        <input className="text-blue-800 form-check-input"  value="non" type="radio"{...register(`${nom}`)}   />
                        <label className="form-check-label" htmlFor="propre_ration">
                            Non
                        </label>
                        </div>
                        
                </div>
    );
}
export default React.memo(InputRadioButton);