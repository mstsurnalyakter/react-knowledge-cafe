import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <Blogs/>
        <Bookmarks className=""/>
      </div>
    </>
  );
}

export default App
