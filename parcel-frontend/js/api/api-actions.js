function getRequest(location, callback) {
  fetch(location)
    .then(response => response.json())
    .then(jsonData => callback(jsonData))
    .catch(err => console.log(err));
}

function postRequest(location, requestBody, callback){
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(jsonData => callback(jsonData))
    .catch(err => console.log(err));
}

export default {
  getRequest,
  postRequest
};
