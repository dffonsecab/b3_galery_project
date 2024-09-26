
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lighthouse01 from './components/lighthouse01'
import Lighthouse02 from './components/lighthouse02'
import Lighthouse03 from './components/lighthouse03'
import Lighthouse04 from './components/lighthouse04'
import Navigation from './components/Navigation'


function App() {

  return (
    <>
    <div>
      <h1 className='text-center my-3'>Gallery Project</h1>
    </div>
      <BrowserRouter>
       <div className='container d-flex justify-content-center'> 
        <Routes>
            <Route path='/lighthouse01' element={<Lighthouse01 className='main-img-container'/>}/>
            <Route path='/lighthouse02' element={<Lighthouse02 className='main-img-container'/>}/>
            <Route path='/lighthouse03' element={<Lighthouse03 className='main-img-container'/>}/>
            <Route path='/lighthouse04' element={<Lighthouse04 className='main-img-container'/>}/>
        </Routes></div>
        <div className='container'>
          <Navigation/>
        </div>
       </BrowserRouter>
    


    </>
  )
}

export default App
