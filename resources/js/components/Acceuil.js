import React from 'react';



const Acceuil=()=>{
   
return(

<div>
 
 
        {/* contenue */}
         <div className="row">




           {/* nav lateral */}

           <div className="ml-2 col-md-1">

           <div className="w-48 h-screen bg-green-600 shadow ">
   
                    <div className="bg-blue-800 list-group">

                                <div className="w-48 p-1 bg-gray-200">
                                    <img src="images/logo.PNG" alt="logo" />
                                </div>  
                                {/* <div className="w-48 h-16 p-1 mb-20 bg-blue-800">
                                    
                                </div>  */}

                        <button type="button" className="text-gray-900 list-group-item list-group-item-action active ">Dossiers Patients</button>
                        <button type="button" className="text-gray-900 list-group-item list-group-item-action ">Hospitalisation</button>
                        
                        {/* accordion rapport */}

                        <div className="list-group-item list-group-item-action accordion " id="accordionExample">
                        
                           
                                <button className="text-gray-900 collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Rapport <span className=""><i className=" fa fa-angle-down"></i></span>
                                </button>
                            
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                                    <div className="list-group">
                                        <a href="#" className="py-2 text-blue-900 bg-blue-300 hover:bg-gray-200 ">Rapport Mensual</a>
                                        <a href="#" className="py-2 text-blue-900 bg-blue-300 hover:bg-gray-200">Rapport Annuel</a>
                                    </div>
                            
                            </div>
                        </div>

                        {/* fin accordion rapport */}

                        <button type="button" className="text-gray-900 list-group-item list-group-item-action"><i className="fa fa-bar-chart"></i>Statistique</button>
                    
                    </div>

                    </div>

           </div>
          
        {/* fin nav lateral */}
          
       

   </div>
  {/* fin contenue */}
 
         
</div>
);
}

export default React.memo(Acceuil);