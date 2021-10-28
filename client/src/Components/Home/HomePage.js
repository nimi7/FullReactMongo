import React, { useState } from 'react';
import '../Home/home.css'



import GetUsers from '../GetUsers'

export default function HomePage(props) {
    const [see , setsee] = useState(true);

    // useEffect(() => {
    //     Axios.get('/password')
    //         .then(res => {

    //             setGetPassword(res.data)

    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // // })
    // GetUsers.then(data => {
    //     console.log('data', data)
    //     setGetPassword(data)
    // }).catch(err => {
    //     console.log(err)
    // })
    console.log('process.env.PORT ',process.env.PORT )



    function ClickMe(){
        setsee(val => !val)
    }
    console.log('(process.env.URI',process.env.PORT)
    return (
        <div>

            <h1> WellCome To HomePage</h1>
            
           <button onClick = {ClickMe}>Click To Hide</button>
            {see && <h1>Shut The Fuck up sss</h1>}
            <GetUsers/>
           
        </div>
    )
}