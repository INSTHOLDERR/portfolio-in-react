import React ,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
const App = React.lazy(()=>import("./App.jsx"))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className='preloader'></div>}>
    <App />
    </Suspense>
 
  </React.StrictMode>,
)
