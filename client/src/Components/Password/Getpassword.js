import React, {useEffect ,useState } from 'react';
import Axios from 'axios';



export default function GetPassword(){ 
    const [getPassword , setGetPassword] = useState([]);
    useEffect(() => {
        Axios.get('/api/password')
            .then(res => {

                setGetPassword(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    })
 

        console.log('getusers',getPassword);
        

    return(
        <div>
            
            <a href='/CreatPassword'>Creact Password</a>
            <h2>{getPassword}</h2>
 


        </div>
    )
}