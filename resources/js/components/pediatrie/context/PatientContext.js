import React from 'react';

export default React.createContext({
    ReactNotification:React.Component,
    socket:null,
    patients:[],
    consultations:[],
    surveillances:[],
    createPatient:([])=>{},
    createConsultation:([])=>{},
    createSurveillance:([])=>{},
    createAdmission:([])=>{},
    createSoin:([])=>{},
    createActe:([])=>{},
    createAntecedent:([])=>{},
    createNotification:()=>{},
    

})