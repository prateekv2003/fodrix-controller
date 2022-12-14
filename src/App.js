import React from 'react'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import AddPhotographer from './component/photographer/AddPhotographer'
import AddCity from './component/city/AddCity'
import UpdateCity from './component/city/UpdateCity';
import ShowCity from './component/city/ShowCity';
import UpdatePhotographer from './component/photographer/UpdatePhotographer';
import ShowPhotographer from './component/photographer/ShowPhotographer';
import Comments from './component/comments/Comments'
import CommentView from './component/comments/CommentView';
import PReq from './component/photographer_req/PReq'
import PReqView from './component/photographer_req/PReqView'
import Navbar from './component/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddImage from './component/portfolio/AddImage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<AddPhotographer />} />
            <Route path="/city-add" element={<AddCity />} />
            <Route path="/city-show" element={<ShowCity />} />
            <Route path="/city-update" element={<UpdateCity />} />
            <Route path="/photographer-add" element={<AddPhotographer />} />
            <Route path="/photographer-show" element={<ShowPhotographer />} />
            <Route path="/photographer-update" element={<UpdatePhotographer />} />
            <Route path="/add-image" element={<AddImage />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/comment-view" element={<CommentView />} />
            <Route path="/preq" element={<PReq />} />
            <Route path="/preq-view" element={<PReqView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
