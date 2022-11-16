export interface User {
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string,
    gender: string,
    age:number,
    city: string,
    country: string,
    picture: string,
  }
  
export interface UserApi {
    id: {
        value: string
    },
    name: {
        first: string,
        last: string,
    },
    email: string,
    phone: string,
    gender: string,
    dob:{
        age: number,
    },
    location: {
        city: string,
        country:string
    },
    login: {
        username: string
    },
    picture: {
        large: string,
    }
  }
  