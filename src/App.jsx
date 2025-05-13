import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'

function App() {

  return (
    <div className="container">
      <div className='sidebar'><Sidebar/></div>
      <div className='feed'><Feed/></div>
      <div className='sug'><Suggestion/></div>
    </div>
  )
}

export default App

//  npx json-server   --watch data/db.json --port 3000