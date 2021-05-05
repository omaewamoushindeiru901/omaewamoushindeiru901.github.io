const event_url = "http://127.0.0.1:8000/event";

function sendRequest(method, request_url, body = null, header) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, request_url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");
    if (localStorage.getItem("token")) {
      xhr.setRequestHeader(
        "Authorization",
        "Token " + localStorage.getItem("token")
      );
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.response);
    xhr.send(JSON.stringify(body));
  });
}
sendRequest("GET", event_url)
  .then((data) =>
    data.map()
  .catch((err) => console.log(err)));


