import './styles/stylesheet.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
    <Routes>
    <Route path="/" element={<Main/>} />
    {/* <Route path="/addphoto" element={<AddPhoto posts={posts} addPhoto={addPhoto}/>} /> */}
    </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;
