import {auth,db} from "../service/firebase"
export function signup(email, password, admin) {
    return auth().createUserWithEmailAndPassword(email, password).then(regUser=>
    {db.ref("userCus").push({
        uid:regUser.user.uid,
        admin:admin,
        gameList:[]
    })
    return [regUser.user.uid,admin];});
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}
