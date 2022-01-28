import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Api3() {

    const url = "https://jsonplaceholder.typicode.com/comments";
    console.log(url);
   let [getapi,setapi] = useState([ ]);

   useEffect(()=>{
    axios.get(url)
    .then((snap)=>{
        console.log(snap);
        var getdata =[]
        snap.data.forEach(element =>{
            console.log(element. title); 
            var obj = {
                id : element . id ,
                name : element . name ,
                email : element . email,
                body : element . body 

            }
            getdata.push(obj)
        })
        console.log(getdata);
        setapi(getdata);
    })
   },['ok'])
  return(
      <>
        <div className='container'>
            <div className='row'>
                {getapi.map((v,i) => {
                    return(
                        <div className='col sm-3'  key={i}> 
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{v.id}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"><b>Name </b>{v.name}</h6>
                                    <p className="card-text"><b>Email </b>{v.email}</p>
                                    <p className="card-text my-1"><b>Description </b>{v.body}</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </>
  )
}

export default Api3;
