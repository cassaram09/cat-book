//helper module for making calls to Hobby API on server

class HobbyApi {
  
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getHobbies(){
    const headers = this.requestHeaders();
    const request = new Request('/api/v1/hobbies', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default HobbyApi;