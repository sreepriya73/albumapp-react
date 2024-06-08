import logo from './logo.svg';
import './App.css';
import AddAlbum from './component/AddAlbum';
import SearchAlbum from './component/SearchAlbum';
import DeleteAlbum from './component/DeleteAlbum';
import ViewAlbum from './component/ViewAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAlbum/>}/>
        <Route path='/search' element={<SearchAlbum/>}/>
        <Route path='/delete' element={<DeleteAlbum/>}/>
        <Route path='/view' element={<ViewAlbum/>}/>

        </Routes>  
      
    </BrowserRouter>
  )
}


export default App;
