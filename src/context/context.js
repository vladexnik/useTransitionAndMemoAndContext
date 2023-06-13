import {createContext} from 'react';


// obj with provider, consumer ...
const dataContext=createContext({
    mail: 'helleva1@gmail.com',
    text: '11111 text'
});

export default dataContext;