import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Api2() {

    const url = "https://jsonplaceholder.typicode.com/albums/1/photos"
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
                title : element . title ,
                bigcolorbox : element . url ,
                smallcolorbox : element . thumbnailUrl 
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
                                <div className="card col-4" style={{width: '18rem'}}>
                                    <img src={v.smallcolorbox} className="card-img-top" />
                                    <div className="card-body ">
                                        <p className="card-text">{v.id}</p>
                                        <p className="card-text">{v.title}</p>
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

export default Api2;
