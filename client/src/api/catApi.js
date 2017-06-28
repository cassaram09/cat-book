//helper module for making calls to Cat API on server

class CatApi {  
  static getAllCats() {
    return fetch('/api/v1/cats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateCat(cat) {
    const request = new Request(`/api/v1/cats/${cat.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });
    return fetch(request).then(response => {
      console.log('RESPONSE:', response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CatApi;  