import {db} from "../services/firebase"
/*
Result 
This is for store idividual score for a particular user for a particular game
Structure:
{rid: str <key>, 
tid: str <Teams key>, 
gid: str <Games key>, 
score: int, 
uid: str <User key}
*/

/**
 * get all the results
 * @returns {<object>[]} [{result1},{result2},...]
 */
export function getResults(){
    let resultlist=[];
    db.collection('Results').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let rid=doc.id;
            let tid=doc.get('tid');
            let gid=doc.get('gid');
            let score=doc.get("score");
            let uid=doc.get("uid")
            resultlist.push({
                "rid":rid,
                "tid":tid,
                "gid":gid,
                "score":score,
                "uid":uid
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
 };


/**
 * get a particular result by id
 * @param {string} rid result id 
 * @returns {<object>[]} [{result1}]
 */
 export function getResultId(rid){
    let resultlist=[];
    db.collection('Results').doc(rid).get().then((doc)=>{
        let rid=doc.id;
            let tid=doc.get('tid');
            let gid=doc.get('gid');
            let score=doc.get("score");
            let uid=doc.get("uid");
            resultlist.push({
                "rid":rid,
                "tid":tid,
                "gid":gid,
                "score":score,
                "uid":uid
            });
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
 };

 /**
  * get all the results for a particular team for a particular game in order, mainly for leader board
  * @param {string} gid game id
  * @param {string} tid team id
  * @return {<object>[]} descending ordered by score [{result1},{result2},...]
  */
 export function getResultsGidTid(gid,tid){
    let resultlist=[];
    db.collection('Results').where("gid","==",gid).where("tid","==",tid).orderBy("score","desc").get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let rid=doc.id;
            let tid=doc.get('tid');
            let gid=doc.get('gid');
            let score=doc.get("score");
            let uid=doc.get("uid")
            resultlist.push({
                "rid":rid,
                "tid":tid,
                "gid":gid,
                "score":score,
                "uid":uid
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
 };
/**
* get the result for a particular user for a particular game, mainly for user result history 
* @param {string} uid user id
* @param {string} gid game id
* @return {<object>[]} [{result1}]
*/
 export function getResultUidGid(uid,gid){
    let resultlist=[];
    db.collection('Results').where("uid","==",uid).where("gid","==",gid).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let rid=doc.id;
            let tid=doc.get('tid');
            let gid=doc.get('gid');
            let score=doc.get("score");
            let uid=doc.get("uid")
            resultlist.push({
                "rid":rid,
                "tid":tid,
                "gid":gid,
                "score":score,
                "uid":uid
            });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
 };
/**
* get the result for a particular user for a particular game, mainly for user result history 
* @param {string} uid user id
* @param {string} gid game id
* @return {string[]} rid result id
*/
 export function setResultUidGid(uid,gid,score){
    let resultlist=[];
    db.collection('Results').where("uid","==",uid).where("gid","==",gid).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            db.collection("Results").doc(doc.id).update({"score":score}).then(()=>{
                let rid=doc.id;
                resultlist.push({
                    "rid":rid
                });
            }).catch((error)=>{console.log("Unexpected error: "+error)});
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
}
/**
 * add new result for a user for a game of a team
 * @param {string} tidp team id provided
 * @param {string} gidp game id provided
 * @param {int} scorep score provided
 * @param {string} uidp user id provided
 * @returns {string[]} rid result id
 */
export function addResult(tidp,gidp,scorep=0,uidp){
    let resultlist=[];
    db.collection("Results").add({
        gid:gidp,
        tid:tidp,
        score:scorep,
        uid: uidp
    }).then((doc)=>{
        let rid=doc.id;
        resultlist.push({
            "rid":rid
        });
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return resultlist;
} 
