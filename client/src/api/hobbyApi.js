class HobbyApi {
  static getHobbies(){
    return fetch('/api/v1/hobbies').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default HobbyApi;