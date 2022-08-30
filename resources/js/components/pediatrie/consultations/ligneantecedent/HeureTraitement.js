import React,{useState,useEffect} from'react';


const HeureTraitement=({register,errors,onClick,label,onChange,cle,name})=>{


 

    return(      

        <td className="text-center col-md-2"> 
                <div className="d-flex ">
                        <div className=" form-check d-flex align-items-center">
                        <input className="text-blue-800 form-check-input" value="min" type="radio" name={name}  onChange={onChange} defaultChecked/>
                        <label className="form-check-label" htmlFor="allaitement">
                        min
                        </label>
                        </div>
                       
                        <div className="ml-4 mr-2 form-check d-flex align-items-center">
                        <input className="text-blue-800 form-check-input" name={name}   value="h" type="radio"  onChange={onChange} />
                        <label className="form-check-label" htmlFor="allaitement">
                            h
                        </label>
                        </div>

                        <div className="ml-4 mr-2 form-check d-flex align-items-center">
                        <input className="text-blue-800 form-check-input" name={name}   value="j" type="radio"  onChange={onChange} />
                        <label className="form-check-label" htmlFor="allaitement">
                            j
                        </label>
                        </div>
                </div>
        </td>

    );
}
export default React.memo(HeureTraitement);