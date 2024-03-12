import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'

const App = () =>{
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    console.log('bookmark');
  }

  return (
    <div className="container mx-auto lg:px-24 p-4">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks className="" />
      </div>
    </div>
  );
}

export default App
