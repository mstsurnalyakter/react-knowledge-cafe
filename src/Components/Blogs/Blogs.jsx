import { useEffect } from "react";
import { useState } from "react"

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const loadBlogs = async () =>{
            const res = await fetch("blogs.json");
            const data = await res.json()
            setBlogs(data);
        }
        loadBlogs();
    },[])
    console.log(blogs);
  return (
    <div>
        blogs
    </div>
  )
}

export default Blogs