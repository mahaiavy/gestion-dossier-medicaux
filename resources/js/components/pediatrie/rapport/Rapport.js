import React,{useState,useEffect,useContext,useRef} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import LigneDiagnostic from './LigneDiagnostic';




const Rapport=()=>{
    const[nb,setNb]=useState([1,2,3,4,5,7,8,9,10,11]);

let ligneTable=nb.map(nombre=>{
    return(
       <LigneDiagnostic key={nombre} diag="Grossesse extra-utérine" c0={nombre} d0={nombre} c29={nombre} d29={nombre} c1={nombre} d1={nombre} c5={nombre} d5={nombre}/>
    )
});
return(

    

    <main role="main" className="pt-3 home_content col-lg-11">

         {/* row 2 contenue nav droite */}
         <div className="row">

                {/* dix dernier consultation */}


                <div className=" col-md-12">
                        <h4 className="mb-2 font-bold text-center">SYNTHESE DES ACTIIVITES D'HOSPITALISATION</h4>
                   {/* table */}
                   <table className="table border-gray-500 table-sm table-bordered table-light table-responsive">
                        <thead className="font-bold text-white border-t-4 border-gray-500 rounded-lg bg-bleu">
                        <tr className="text-sm text-center small">
                        <td>Nb de lits disponibles</td>
                        <td>Nb d'hospitalisé fin du mois précédent</td>
                        <td>Nb total d'admission du mois</td>
                        <td>Nb sortants normales</td>
                        <td>Nb sortants évadés</td>
                        <td>Nb référés</td>
                        <td>Nb décédés</td>
                        <td className="font-bold">Total sortants</td>
                        <td>Nb transférés inter-services</td>
                     
                        </tr>
                        </thead>
                        <tbody className="text-sm ">

                        <tr className="text-center ">
                        <td>45</td>
                        <td>24</td>
                        <td>58</td>
                        <td>86</td>
                        <td>43</td>
                        <td>49</td>
                        <td>18</td>
                        <td className="font-bold">89</td>
                        <td>95</td>
                     
                        </tr>

                        </tbody>
                        </table>

                        {/* SG/DEP/SIG */}

                        <h4 className="mt-10 mb-2 font-bold text-center">SG/DEP/SIG</h4>
                   {/* table */}
                   <table className="table border-gray-500 table-sm table-bordered table-light table-responsive">
                        <thead className="font-bold text-white border-t-4 border-gray-500 rounded-lg bg-bleu">
                        <tr className="text-sm text-center small">
                        <td rowSpan="2" className="mt-10 ">Diagnostics</td>
                        <td colSpan="2">0-28j</td>
                        <td colSpan="2">29j-11m</td>
                        <td colSpan="2">1-4ans</td>
                        <td colSpan="2">5-14ans</td>
                        </tr>
                        <tr className="text-sm text-center small">
                        <td className="font-bold">Cas</td>
                        <td className="font-bold">Décès</td>
                        <td className="font-bold">Cas</td>
                        <td className="font-bold">Décès</td>
                        <td className="font-bold">Cas</td>
                        <td className="font-bold">Décès</td>
                        <td className="font-bold">Cas</td>
                        <td className="font-bold">Décès</td>
                        </tr>
                        </thead>
                        <tbody className="text-sm ">

                      {ligneTable}

                        </tbody>
                        </table>


                        {/* fin SIG */}

                </div>


                {/* fin dix dernier consultation */}

                </div>
                {/* fin row 2 contenue nav droite */}
     
    </main>
 

);
}
export default React.memo(Rapport);