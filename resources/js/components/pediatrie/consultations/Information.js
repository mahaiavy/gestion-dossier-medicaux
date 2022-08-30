import React from'react';

const Information=({patient})=>{


    return(
           
    <div className="tab-pane fade " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
             {/* row information */}
             <div className="p-2 font-semibold text-center text-blue-900">Les Informations du patient</div>
              <div className="pl-4 row">

                  {/* col 1 dans row information */}

                  <div className="pt-8 font-bold col-md-3">
                    
                      <p className="pb-2">Nom et Prénom :</p>
                     
                      
                      <p className="pb-2">Genre :</p>
                      <p className="pb-2">Age :</p>
                      <p className="pb-2">Date de naissance :</p>
                      <p className="pb-2">Lieu de naissance :</p>
                      <p className="pb-2">Lot :</p>
                      <p className="pb-2">Fokontany :</p>
                      <p className="pb-2">Commune :</p>
                      <p className="pb-2">District :</p>
                      <p className="pb-2">Region :</p>
                      <p className="pb-2">Nom de la mère :</p>
                      <p className="pb-2">Nom du père :</p>
                      <p className="pb-2">Profession mère :</p>
                      <p className="pb-2">Profession père :</p>
                                                                 
                      <p className="pb-2">Situation matrimoniale de la mère :</p>
                      <p className="pb-2">Contact :</p>                  
                      <p className="pb-2">Religion :</p>
                  </div>

                  {/* fin col 1 dans row information */}

                  {/* col 2 dans row information */}
                  <div className="pt-8 col-md-8">
                     
                  <p className="pb-2"><span className="pr-1">{patient.nom ? patient.nom : '----------------'}</span><span>{patient.prenom ? patient.prenom : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.genre ? patient.genre : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.age ? patient.age : '----------------'}</span><span className="pl-1">mois</span></p>
                      <p className="pb-2"><span>{patient.date_naissance ? patient.date_naissance : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.lieu_naissance ? patient.lieu_naissance : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.lot ? patient.lot : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.fkt ? patient.fkt : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.commune ? patient.commune : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.distric ? patient.distric : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.region ? patient.region : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.nom_mere ? patient.nom_mere : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.nom_pere ? patient.nom_pere : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.profession_mere ? patient.profession_mere : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.profession_pere ? patient.profession_pere : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.situation_mere ? patient.situation_mere : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.tel ? patient.tel : '----------------'}</span></p>
                      <p className="pb-2"><span>{patient.religion ? patient.religion : '----------------'}</span></p>
                      
                  </div>
                   {/*fin col 2 dans row information */}

              </div>
              {/* fin row information */}
      </div>
   
    );
}
export default React.memo(Information);