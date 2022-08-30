import React,{useState,useEffect} from'react';
import InputTraitement from './InputTraitement';
import InputAutre from './InputAutre';

const LigneTraitement=({register,errors,onClick,label,onBlur,cle,name})=>{


 

    return(
    
        <tr className="text-center ">
        <td className="text-center "> 
                 
            <input type="text" className="border-gray-400 form-control" name={name}   onBlur={onBlur} />
            {errors.label && <span className="text-danger">{errors.label.message}</span>}
        
        </td>

        <td className="text-center "> 
                
        <input type="text" className="border-gray-400 form-control" name={name}   onBlur={onBlur} />
        {errors.label && <span className="text-danger">{errors.label.message}</span>}
    
        </td>

          <td className="text-center"> 
          {cle &&<span className="p-1 fa fa-trash text-danger" onClick={onClick} type="button"></span>}
        </td >
       
       
        
        </tr>
    );
}
export default React.memo(LigneTraitement);