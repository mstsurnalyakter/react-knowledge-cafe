import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";

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
    <div className="lg:col-span-2">
      <h2 className="text-4xl"> blogs: {blogs.length}</h2>
      {
        blogs.map(blog=><Blog key={blog.id} blog={blog}/>)
      }
    </div>
  );
}

export default Blogs