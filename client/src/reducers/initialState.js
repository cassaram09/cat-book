// declare the initial state for our application
// this object will be user as the initial state in our cats and hobbies reducers 

export default {  
  cats: [],
  hobbies: [],
  session: !!sessionStorage.jwt
}