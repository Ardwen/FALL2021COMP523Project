import {db} from "../services/firebase"
import firebase from "@firebase/app-compat";
/**
 * Game
 * This is for storing info on individual games
 * {gid: str <key>,
    date: date,
    location: str,
    name: str,
    qidlist: str[] <Questions id>,
    quizNum: int,
    tidlist: str[] <Teams id>,
    totalResult1: int,
    totalResult2: int,
    type: str
    }
 */
/**
 * get all games in database
 * @returns {<object>[]} [{game1},{game2},...]
 */
export function getGames(){
    let gamelist=[];
    db.collection('Games').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let date=doc.get('date').toDate();
            let location=doc.get('location');
            let name=doc.get("name");
            let qidlist=doc.get('qidlist');
            let quizNum=doc.get("quizNum")
            let tidlist=doc.get('tidlist');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
            let type=doc.get("type");
            gamelist.push({
                "gid":gid,
                "date":date,
                "location":location,
                "name":name,
                "qidlist":qidlist,
                "quizNum":quizNum,
                "tidlist":tidlist,
                "totalResult1":totalR1,
                "totalResult2":totalR2,
                "type":type
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };
 /**
  * get game by id
  * @param {string} gid game id
  * @returns {[<object>]} [{game1}]
  */
 export function getGameId(gid){
    let gamelist=[];
    db.collection('Games').doc(gid).get().then((doc)=>{
        let gid=doc.id;
        let date=doc.get('date').toDate();
        let location=doc.get('location');
        let name=doc.get("name");
        let qidlist=doc.get('qidlist');
        let quizNum=doc.get("quizNum")
        let tidlist=doc.get('tidlist');
        let totalR1=doc.get('totalResult1');
        let totalR2=doc.get('totalResult2');
        let type=doc.get("type");
        gamelist.push({
            "gid":gid,
            "date":date,
            "location":location,
            "name":name,
            "qidlist":qidlist,
            "quizNum":quizNum,
            "tidlist":tidlist,
            "totalResult1":totalR1,
            "totalResult2":totalR2,
            "type":type
        });
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };

 /**
  * 
  * @param {string} tid team id
  * @returns {<object>[]}
  */
 export function getGame1Tid(tid){
    let gamelist=[];
    db.collection('Games').where('tidlist','array-contains-any',[tid]).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let date=doc.get('date').toDate();
            let location=doc.get('location');
            let name=doc.get("name");
            let qidlist=doc.get('qidlist');
            let quizNum=doc.get("quizNum")
            let tidlist=doc.get('tidlist');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
            let type=doc.get("type");
            gamelist.push({
                "gid":gid,
                "date":date,
                "location":location,
                "name":name,
                "qidlist":qidlist,
                "quizNum":quizNum,
                "tidlist":tidlist,
                "totalResult1":totalR1,
                "totalResult2":totalR2,
                "type":type
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };

 //get game by both tid
 export function getGame2Tid(tid1,tid2){
    let gamelist=[];
    db.collection('Games').where('tidlist','array-contains-any',[tid1,tid2]).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let date=doc.get('date').toDate();
            let location=doc.get('location');
            let name=doc.get("name");
            let qidlist=doc.get('qidlist');
            let quizNum=doc.get("quizNum")
            let tidlist=doc.get('tidlist');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
            let type=doc.get("type");
            gamelist.push({
                "gid":gid,
                "date":date,
                "location":location,
                "name":name,
                "qidlist":qidlist,
                "quizNum":quizNum,
                "tidlist":tidlist,
                "totalResult1":totalR1,
                "totalResult2":totalR2,
                "type":type
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist; 
 };
 /**
  * add a new question to qidlist for a game
  * @param {string} gid game id
  * @param {string} qlist single quetion id
  * @returns id of game updated
  */
export function updateGameQList(gid,qlist){
    let resultlist=[];
    db.collection("Games").doc(gid).update({"qidlist":firebase.firestore.FieldValue.arrayUnion(qlist)}).then(()=>{
                    resultlist.push({
                        "gid":gid
                });
        }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
};

/**
 * update game total result
 * @param {string} gid game id
 * @param {int} tR1incr new score to totalResult2
 * @param {int} tR2incr new score to totalResult2
 * @returns 
 */
export function updateGameR(gid,tR1,tR2){
    let resultlist=[];
    db.collection("Games").doc(gid).update({"totalResult1":tR1,"totalResult2":tR2}).then(()=>{
                    resultlist.push({
                        "gid":gid
                });
        }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
};
/**
 * add new game to Games database, mainly for admin add game to database
 * @param {Date} datep date provided
 * @param {string} locationp location provided
 * @param {string} namep name of the game provided
 * @param {string[]} qidlistp array of question ids related to this game provided, default []
 * @param {int} quizNump number of questions
 * @param {string[]} tidlistp array of two teams id related to this game provided
 * @param {int} totalR1p total result score for team on tidlist[0] provided
 * @param {int} totalR2p total result score for team on tidlist[1] provided
 * @param {string} typep type of the game provided
 * @returns game id created
 */
export function addGame(datep,locationp,namep,qidlistp=[],quizNump,tidlistp,totalR1p,totalR2p,typep){
    let gamelist=[];
    db.collection("Games").add({
        date:datep,
        location:locationp,
        name:namep,
        qidlist:qidlistp,
        quizNum:quizNump,
        tidlist:tidlistp,
        totalResult1:totalR1p,
        totalResult2:totalR2p,
        type:typep
    }).then((doc)=>{
        let gid=doc.id;
            gamelist.push({
            "gid":gid
        });
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
};

