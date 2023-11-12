
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './components/Post';
import Pagination from './components/Pagination';

function App() {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPost();
  }, []);

  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (number) => {
    
    setCurrentPage(number);
  }
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>Sample Pagination</h1>
      <Post posts={currentPost} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
