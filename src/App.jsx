
import './App.css'

// import Ticket from './Ticket';
import Lottery from './Lottery'
function App() {
  

  return (
    <>
    <div className='container'>
 <Lottery n={3} winningSum={15}/>

    </div>
    </>
  )
}

export default App
