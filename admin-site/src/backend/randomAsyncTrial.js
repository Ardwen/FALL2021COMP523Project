// May delete later

import React, {useState} from "react";
import axios from "axios";
import {resultsURL} from "./restURL";
import {db} from "./firebase";
import {getResultHelper} from "./resultfunc";

const LeaderBoard = ({game}) =>{
    const [resultList, setResultList] = React.useState(Array.from([]));
      React.useEffect(() => {
        axios.get(resultsURL).then((response) => {
          setResultList(response.data.documents.map(item => item.fields))
        });
      }, []);


    return(
        <>
            <div>
                {console.log(resultList)}
                {resultList.map((result) =>(
                    console.log(result.score)
                ))}
            </div>
        </>
    )
}

// v2 this one is not working
const LeaderBoardV2 = ({game}) =>{
    let [resultList, setResultList] = useState([]);
    React.useEffect(() =>{
        db.collection('Results').get().then((snapshot)=>{
        setResultList(getResultHelper(snapshot, resultList));
        console.log(resultList)
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    }, [])

    return(
        <>
            <div>
                {console.log(resultList)}
            </div>
        </>
    )
}