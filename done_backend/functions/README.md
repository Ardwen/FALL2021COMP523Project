# API Guide #
All the interaction functions for interacting with backend are deployed on Firebase Cloud Functions.
## Games ##
This collection stores all the game events.

|Actions|Purpose|Links|Request Body|Returned Format|
|-------|-------|-----|------------|---------------|
|**GET**|Get all games|/Games|None|[{<br>id: id,<br>date: Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist:string\[],<br> quizNum:int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>},<br>{<br>id: id,<br>date: Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist:string\[],<br> quizNum:int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>},<br> ...]|
|**GET**|Get game by id|/Games/\<id\>|None|{<br>id: id,<br>date: Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist:string\[],<br> quizNum:int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>}|
|**POST**|Add new game|/Games|{<br>date:Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist: string\[],<br>quizNum: int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>}|{<br>id: id,<br>date: Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist:string\[],<br> quizNum:int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>}|
|**PUT**|Update game by id|/Games/\<id\>|{<br>date:Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist: string\[],<br>quizNum: int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>} <br>(Could choose to input only partial fields.)|{<br>id: id,<br>date: Date,<br>gid: string,<br>location: string,<br>logos: string\[],<br>name: string,<br>qidlist:string\[],<br> quizNum:int,<br>team1: string,<br>team2: string,<br>totalResult1: int,<br>totalResult2: int,<br>type: string<br>}<br>(Will only return fields id and updated fields.)|


## Results ##
This collection stores the individual result link to a particular user for a particular game.

|Actions|Purpose|Links|Request Body|Returned Format|
|-------|-------|-----|------------|---------------|
|**GET**|Get all results|/Results|None|\[{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>},<br>{<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>},<br>...<br>]
|**GET**|Get result by id|/Results/\<id\>|None|{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}|
|**GET**|Get results by uid and gid|/Results/byuidgid/\<uid\>/\<gid\>|None|[{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}]|
|**GET**|Get results by gid and tid|/Results/bygidtid/\<gid\>/\<tid\>|None|[{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score<br>}<br>{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}<br>...<br>}]|
|**POST**|Add new result|/Results|{<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}|{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}|
|**PUT**|Update result by id|/Results/\<id\>|{<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}<br>(Could choose to input only partial fields.)|{<br>id: id,<br>gid: string,<br>uid: string,<br>tid: string,<br> score: int<br>}<br>(Will only return fields id and updated fields.)|

## Teams ##
This collection stores all the teams.

|Actions|Purpose|Links|Request Body|Returned Format|
|-------|-------|-----|------------|---------------|
|**GET**|Get all teams|/Teams|None|[{<br>id: id,<br>logo: string,<br>name: string<br>},<br>{<br>id: id,<br>log: string,<br>name: string<br>},<br> ...]|
|**GET**|Get team by id|/Teams/\<id\>|None|{<br>id: id,<br>logo: string,<br>name: string<br>}|
|**POST**|Add new team|/Teams|{<br>logo: string,<br>name: string<br>}|{<br>id: id,<br>logo: string,<br>name: string<br>}|
|**PUT**|Update team by id|/Teams/\<id\>|{<br>logo: string,<br>name: string<br>} <br>(Could choose to input only partial fields.)|{<br>id: id,<br>logo: string,<br>name: string<br>}<br>(Will only return fields id and updated fields.)|

## Questions ##
This collection stores the questions link to a particular team.

|Actions|Purpose|Links|Request Body|Returned Format|
|-------|-------|-----|------------|---------------|
|**GET**|Get all questions|/Questions|None|[{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>},<br>{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>},<br> ...]|
|**GET**|Get question by id|/Questions/\<id\>|None|{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>}|
|**GET**|Get questions by gid|/Questions/bygid/\<gid\>|None|[{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>},<br>{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>},<br> ...]|
|**POST**|Add new question|/Questions|{<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>}|{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>}|
|**PUT**|Update question by id|/Questions/\<id\>|{<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>} <br>(Could choose to input only partial fields.)|{<br>id: id,<br>answers: string\[\],<br>correctIdx: int<br>question: string<br>score: int<br>tid: string<br>time: int<br>}<br>(Will only return fields id and updated fields.)|

## Users ##
This collection stores the role of the user and the games that this user has participated.

|Actions|Purpose|Links|Request Body|Returned Format|
|-------|-------|-----|------------|---------------|
|**GET**|Get all users|/Users|None|[{<br>id: id,<br>admin: boolean,<br>gidlist: string\[\]<br>},<br>{<br>id: id,<br>admin: boolean,<br>gidlist: string\[\]<br>},<br> ...]|
|**GET**|Get user by id|/Users/\<id\>|None|{<br>id: id,<br>admin: boolean,<br>gidlist: string\[\]<br>}|
|**PUT**|Update user by id|/Users/\<id\>|{<br>gidlist: string\[\]<br>} <br>(Could choose to input only partial fields.)|{<br>id: id,<br>gidlist: string\[\]<br>}<br>(Will only return fields id and updated fields.)|
