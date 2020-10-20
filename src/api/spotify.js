export const authEndPoint = "https://accounts.spotify.com/authorize";
//change this before deploy
const redirectUri = "http://localhost:3000/";

const clientId = "ef26283782d348bd8153d44367e99d66";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]
//http://localhost:3000/#access_token=BQCq2HuuMVi6qSFS0U0nCWevN3K6SDhBTwPuFj1IFL1sTMC_AbdhovN4C1opUxzS43UTg2vUkV5s3-FA5YsLZUF9gGcDG-dGcl23-8jITIL_BdHaKSK3cyNG2H41d121adqyVjBwJWLvkjeS5l3qNpO90YNqfjHcMcM7oyUuDvowMWwW_qJe&token_type=Bearer&expires_in=3600

export function getToken(){
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial;
    },{})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;