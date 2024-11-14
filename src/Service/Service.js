const url = "http://192.168.179.229:8000";

export function createNote(obj, hash, referral_code) {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: "follow",
    };

    fetch(url + "/api/notes", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getNotes(obj, hash, referral_code) {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url + "/api/notes", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteNotes(id, hash, referral_code) {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url + "/api/notes/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateNotes(id, obj, referral_code) {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url + "/api/notes/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
