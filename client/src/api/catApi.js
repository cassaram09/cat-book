class CatApi {  
  static getAllCats() {
    return fetch('http://localhost:3001/cats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CatApi;  