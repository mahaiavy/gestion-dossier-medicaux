import React,{useState,useEffect} from'react';
import {Route,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const LigneAntecedentChirugi=({register,errors,onClick})=>{




    return(
    
        <tr className="text-center ">
        <td className="text-center "> 
        
          
            <input type="text" className="border-gray-400 form-control" {...register('medicaux')}  />
            {errors.chirugicaux && <span className="text-danger">{errors.chirugicaux.message}</span>}
        
        </td>
        <td className="text-center"> 
            <input type="date" className="border-gray-400 form-control" {...register('medicaux')}  />
            {errors.chirugicaux && <span className="text-danger">{errors.chirugicaux.message}</span>}
        </td >
        <td className="text-center"> 
            <span className="p-1 fa fa-trash text-danger" onClick={onClick} type="button"></span>
        </td >
        </tr>
    );
}
export default React.memo(LigneAntecedentChirugi);