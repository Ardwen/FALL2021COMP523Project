
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
let serviceAccount = require("./permission.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fanzplay-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

//Games
app.post('/Games', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Games');
            let doc = await document.add(req.body);
            let docid = doc.id;
            return res.status(200).send({ id: docid, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Games', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Games').get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            debug.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Games/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Games').doc(req.params.id);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return res.status(200).send({ id: docid, ...data });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.put('/Games/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Games').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send({ id: req.params.id, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


//Questiions
app.post('/Questions', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Questions');
            let doc = await document.add(req.body);
            let docid = doc.id;
            return res.status(200).send({ id: docid, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Questions', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Questions').get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            debug.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Questions/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Questions').doc(req.params.id);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return res.status(200).send({ id: docid, ...data });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Questions/bygid/:id', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Questions').where("gid","==",req.params.id).get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.put('/Questions/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Questions').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send({ id: req.params.id, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


//Results
app.post('/Results', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Results');
            let doc = await document.add(req.body);
            let docid = doc.id;
            return res.status(200).send({ id: docid, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Results', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Results').get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            debug.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Results/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Results').doc(req.params.id);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return res.status(200).send({ id: docid, ...data });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Results/byuidgid/:uid/:gid', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Results').where("uid","==",req.params.uid).where("gid","==",req.params.gid).get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

app.get('/Results/bygidtid/:gid/:tid', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Results').where("tid","==",req.params.tid).where("gid","==",req.params.gid).get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

app.put('/Results/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Results').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send({ id: req.params.id, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//Teams
app.post('/Teams', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Teams');
            let doc = await document.add(req.body);
            let docid = doc.id;
            return res.status(200).send({ id: docid, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Teams', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Teams').get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            debug.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Teams/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Teams').doc(req.params.id);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return res.status(200).send({ id: docid, ...data });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.put('/Teams/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Teams').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send({ id: req.params.id, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//User
app.get('/Users', (req, res) => {
    (async () => {
        try {
            let response = [];
            return db.collection('Users').get().then(snapshot => {
                snapshot.forEach((doc) => {
                    let docid = doc.id;
                    let data = doc.data();
                    response.push({ id: docid, ...data });
                });
                console.log(response);
                return res.send(response);
            });
        } catch (error) {
            debug.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/Users/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Users').doc(req.params.id);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return res.status(200).send({ id: docid, ...data });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.put('/Users/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Users').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send({ id: req.params.id, ...req.body });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

exports.api = functions.https.onRequest(app);
