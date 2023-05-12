const enahncedFetch = ( method,url,option  )=>{
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                return reject()
            }
            resolve(res.json())
            
        })
        .catch(reject)
    })
}
export default enahncedFetch