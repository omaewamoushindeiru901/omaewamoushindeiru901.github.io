const reg_url = "http://127.0.0.1:5000/user";
const event_post_url = " http://127.0.0.1:5000/event"
function sendRequest(method, request_url,body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, request_url);
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-type", "application/json");
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