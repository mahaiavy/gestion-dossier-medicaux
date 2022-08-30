import React,{useState,useEffect} from'react';


const InputActe=({register,errors,onClick,label,onBlur,cle,name})=>{


 

    return(
    
      
        <td className="text-center col-md-2"> 
                 
            <textarea required type="text" className="border-gray-400 form-control" name={name}   onBlur={onBlur} />
            {errors.label && <span className="text-danger">{errors.label.message}</span>}
        
        </td>

    );
}
export default React.memo(InputActe);