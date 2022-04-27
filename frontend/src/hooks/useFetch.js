import React,{useEffect, useState} from 'react'


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(response => {
          if(!response.ok) {
            throw Error("Bloga tinklapio nuoroda")
          }
          return response.json()
        })
        .then(data => { 
          setData(data)
          setLoading(false)
          setError(false)
        })
        .catch(err => {
          if(err.name === "AbortError") {
            console.log("fetch aborted")
          } else {
            setLoading(false)
            setError(err.message)
          }
         
        })
        return () => abortCont.abort()

      }, [data])
        return {data, loading, error}
    }
export default useFetch