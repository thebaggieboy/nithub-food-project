export default useData(url){
    const res = await fetch(url, {
        method: "GET",
        headers: {

            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    console.log("Food Data: ", data)
   

  
    if (res.status >= 200 & res.status <= 209) {
      
        console.log("fetch successful")
    }
}