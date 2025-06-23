import './App.css'
import Card from './components/Card/Card'

function App() {

  return (
    <>
      <h1 className='bg-blue-500 text-white p-2 rounded-lg'>TailWind CSS</h1>
      <Card
        title="Card Title"
        description="This is a description for the card."
        imageUrl="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?semt=ais_hybrid&w=740"
      />
      <Card />
    </>
  )
}

export default App
