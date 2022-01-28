import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){


  let [getdata ,setdata] = useState([ ])

  useEffect(()=>{
   axios.get("https://fakestoreapi.com/products")
  .then((snap)=>{
    console.log(snap)
   var getdata =[]
    snap.data.forEach(element => {
    //   console.log(element. title)  
      var obj = {
        category: element.category, 
        title : element.title,
        price : element.price,
        image: element.image
      }   
      getdata.push(obj) 
    });
    console.log(getdata)
    setdata(getdata)
    
  
  })
  },[])  

  return(
    <div className='container'>

    <div className="row">
            {getdata.map((v,i)=>{
        return (
        <div  key={i} className="col-sm-6 col-md-4 col-xl-3 ">
    
            <div className="card mb-3" style={{width: '200px'}}>
                <img src={v.image} className="card-img-top" alt="apidataimage" />
                    <div className="card-body">
                        <p className="card-text">{v.title}</p>
                        <p className="card-text">{v.category}</p>
                        <p className="card-text bg-warning p-1 rounded-3 px-2 text-white"><strong>Price: </strong> {v.price}&#36;</p>
                    </div>
    
            </div>
            </div>
        )
        })}
    </div>
</div>
  )
}

export default App;