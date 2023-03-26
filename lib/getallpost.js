

const getallpost =async () => {
      fetch('http://localhost:3000/api/posts').then(()=>{res=>res.json().then(data=>{
        return data;
      })})
    

    
}

export default getallpost