import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import Example from '../Components/Example/Example';


function Router() {
    return (
        <div className='parent'>
            <Routes>
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/example' element={<Example/>}/>
        </Routes>
        </div>
    )
}

export default Router;