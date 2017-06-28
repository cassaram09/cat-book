//helper module for making calls to Cat API on server

class CatApi {  

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllCats() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:5000/api/v1/cats', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateCat(cat) {
    const headers = this.requestHeaders();
    const request = new Request(`/api/v1/cats/${cat.id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({cat: cat})
    });
    return fetch(request).then(response => {
      console.log('RESPONSE:', response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(cat){
    const headers = this.requestHeaders();
    const request = new Request(`/api/v1/cats`, {
      method: 'POST',
      headers: headers,
       body: JSON.stringify({cat: cat})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }

  static deleteCat(cat){
    const headers = this.requestHeaders();
    const request = new Request(`/api/v1/cats/${cat.id}`, {
      method: 'DELETE',
      headers: headers
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default CatApi;  