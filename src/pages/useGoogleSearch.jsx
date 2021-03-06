import React, {useState,useEffect} from "react";
import API_KEY from "./key";

const CONTEXT_KEY = "def00adb83a231e3d";

const useGoogleSearch = (term) => {
    const [data,setdata] =useState(null);
       useEffect(()=>{
        const fetchdata =async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setdata(result);
            } )
        }
        fetchdata();

    },[term])

    return {data}
}

export default useGoogleSearch;