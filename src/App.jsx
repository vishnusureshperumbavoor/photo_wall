import { useState } from "react";
import AddPhoto from "./Components/AddPhoto";
import Main from "./Components/Main";
import './styles/stylesheet.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

function App() {
  const [posts, setPosts] = useState([{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }])
  
  function removePhoto(postRemoved){
    console.log(postRemoved.description)
    setPosts(posts.filter(post=>post!==postRemoved))
  }

  function addPhoto(photoAdded){
    console.log(posts);
    console.log(photoAdded);
    setPosts([...posts,photoAdded])
    console.log(posts);
  }
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Main posts={posts} removePhoto={removePhoto} />} />
    <Route path="/addphoto" element={<AddPhoto posts={posts} addPhoto={addPhoto}/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
