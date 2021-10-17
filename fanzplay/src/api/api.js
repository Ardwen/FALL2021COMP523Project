export const resultsURL = "https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Results?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export const questionURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Questions/q2?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export const teamsURL="https://us-central1-fanzplay.cloudfunctions.net/api/Teams";
// export const gamesURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export function gameURL(gid){
  return "https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games/"+gid+"?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
}
export const gamesURL = "https://us-central1-fanzplay.cloudfunctions.net/api/Games"