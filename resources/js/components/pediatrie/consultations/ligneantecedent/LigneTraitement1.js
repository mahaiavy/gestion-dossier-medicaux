import React,{useState,useEffect} from'react';


const LigneTraitement1=({register,errors,onClick,label,onBlur})=>{


 

    return(
    
        <tr className="text-center ">
        <td className="text-center "> 
        
          
            <input type="text" className="border-gray-400 form-control"   onBlur={onBlur} />
            {errors.label && <span className="text-danger">{errors.label.message}</span>}
        
        </td>
       
       
        
        </tr>
    );
}
export default React.memo(LigneTraitement1);