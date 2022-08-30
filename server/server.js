
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*" }
});

server.listen(5000, () => {
    console.log('serveur lancé...');
});

// const io=require('socket.io')(5000,{
//     cors:{
//         origin:"*",
//     },
// });

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}


const axios = require('axios');

let patients = [];
let Consultations = [];
let surveillances = [];


let users = [];

const addUser = ({ userId, socketId }) => {
    const existingUser = users.find((user) => user.userId === userId);
    const existingSocket = users.find((user) => user.socketId === socketId);

    if (!existingUser && !existingSocket) {
        console.log(existingUser);
        const user = { userId, socketId };

        users.push(user);
        return true;
    }

};

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
}

const removeUser = (socketId) => {

    const index = users.findIndex(user => user.socketId == socketId);
    if (index != -1) {
        users.splice(index, 1);
        return 1;
    } else {
        return -1;
    }
    // users=users.filter((user)=>user.socketId!==socketId);
    // return users;
};

let adresseIP = "";


io.on('connection', (socket) => {

    // add user
    socket.on("addUser", (configSocket) => {

        const userid = configSocket[0];
        adresseIP = configSocket[1];
        console.log(configSocket);
        if (addUser({ userid, socketId: socket.id })) {
            io.emit("getUsers", users);
            console.log("a user connected");
        }

    });
    //liste Patients
    const listePatients = () => {

        if (adresseIP != "") {
            axios.get(`http://${adresseIP}:8000/api/pediatrie/patient`).then((response) => {

                patients = response.data;
                io.emit("getAllPatient", patients);

            });
        }

    }

    //liste Consultations 
    const listeConsultations = () => {

        if (adresseIP != "") {
            axios.get(`http://${adresseIP}:8000/api/pediatrie/consultation`).then((response) => {

                Consultations = response.data;

                io.emit("getAllConsultation", Consultations);
            });
        }



    }

    //liste Surveillance
    const listeSurveillances = () => {

        if (adresseIP != "") {
            axios.get(`http://${adresseIP}:8000/api/pediatrie/surveillance/liste`).then((response) => {

                surveillances = response.data;
                io.emit("getAllSurveillance", surveillances);

            });

        }


    }


    //getAllPatients

    socket.on("demandePatient", (userId) => {
        listePatients();

    });

    //getAllConsultationns
    socket.on("demandeConsultation", (userId) => {
        listeConsultations();

    });

    //getAllSurveillance
    socket.on("demandeSurveillance", (userId) => {
        listeSurveillances();

    });

    //newAdmission
    socket.on("newAdmission", async (data) => {

        if (adresseIP != "") {
            const res = await axios.post(`http://${adresseIP}:8000/api/pediatrie/add`, data);

            if (res.data == "success") {
                listePatients();

                io.emit("ajoutsuccess", "un patient ajouté!");

            } else if (res.data == "existe") {
                io.emit("ajoutsuccess", "ce patient déjà existe,allez à l'onglet consultation pour faire nouveau consultation!");
            } else {
                console.log(res);
            }
        }



    });

    //newSoin
    socket.on("newSoin", async (data) => {

        if (adresseIP != "") {
            const res = await axios.post(`http://${adresseIP}:8000/api/pediatrie/consultation/add`, data);

            console.log(res);
            if (res.data == "success") {
                listeConsultations();

                io.emit("ajoutsuccess", res.data);

            } else if (res.data == "existe") {
                console.log("efa misy");
            }

        }

    });

    //newAntecedent
    socket.on("newAntecedent", async (data) => {

        if (adresseIP != "") {
            const res = await axios.post(`http://${adresseIP}:8000/api/pediatrie/antecedent/add`, data);


            if (res.data == "success") {
                listeConsultations();

                io.emit("ajoutsuccess", res.data);

            } else if (res.data == "existe") {
                console.log("efa misy");
            }
        }



    });

    //newSurveillance
    socket.on("newSurveillance", async (data) => {

        if (adresseIP != "") {
            const res = await axios.post(`http://${adresseIP}:8000/api/pediatrie/surveillance/acte/add`, data);


            if (res.data == "success") {
                listeSurveillances();
                io.emit("ajoutsuccess", res.data);
            } else {
                console.log(res.data);
            }
        }



    });








    //    send and get Message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);

        io.emit("getMessage", {
            senderId, text,
        })
        //    io.to(user.socketId).emit("getMessage",{
        //        senderId,text,
        //    })
    })

    // disconnect
    socket.on("disconnect", () => {
        const repo = removeUser(socket.id);

        if (repo == 1) {
            console.log("a user disconnected!");
            io.emit("getUsers", users);
            console.log(users);

        }

    });

});


