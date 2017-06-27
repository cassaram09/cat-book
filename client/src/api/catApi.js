class CatApi {  
  static getAllCats() {
    return fetch('/api/v1/cats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CatApi;  