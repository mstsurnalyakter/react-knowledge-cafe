import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'

const App = () =>{
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    setBookmarks([...bookmarks,blog])
  }
  const handleReadingTime = time =>{
    setReadingTime(readingTime + time)

  }

  return (
    <div className="container mx-auto lg:px-24 p-4">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App
