// class to manage server session creation / destruction

class SessionApi {
  static login(credentials){
    const request = new Request('/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default SessionApi;