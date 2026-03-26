
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <section id="homepage" className='w-11/12 md:w-[80%] mx-auto mt-10 md:mt-16'>
        <Banner />
      </section>
    </>
  )
}

export default App
