import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { Route, Routes, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { Contacts } from './components/pages/contacts/Contacts'
import { Error } from './components/pages/error/Error';
// import { Projects } from './components/pages/projects/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/portifolio'>
    <Routes>
      <Route path='/*' element={<Error />} />
      <Route path='/' element={<App />}/>
      <Route path="/contacts/" element={<Contacts />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
