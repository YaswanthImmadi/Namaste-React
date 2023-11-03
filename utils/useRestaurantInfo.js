import { useEffect, useState } from "react";
import { INFO_URL } from "./constants";

const useRestaurantInfo=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async()=>{
        const data=await fetch(INFO_URL+resId)
        const json=await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantInfo;