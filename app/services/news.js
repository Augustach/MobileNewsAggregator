
const URL  = 'http://localhost:1337';
const GET_NEWS_URL = URL + '/news/getNews';
const GET_CURRENT_NEWS_URL = URL + '/news/getNewsText';
const POST = 'POST';


function status(response){
  if(response.status >=200 && response.status <300){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response){
  return response.json();
}

function error(err){
  //Error :c
}

function postRequest(body){
  return {
    method: POST,
    body: JSON.stringify(body)
  }
}

export function getNewsService(from, limit){
  return fetch(GET_NEWS_URL,{
      method: POST,
      body: JSON.stringify({from, limit})
    }).then(status)
      .then(json)
      .catch(error)
}

export function getCurrentNewsService(id){
  return fetch(GET_CURRENT_NEWS_URL, postRequest({id}))
          .then(status)
          .then(json)
          .catch(error)
}
