import HospitalList from "./Components/HospitalList"
import HospitalModal from "./Components/HospitalModal"

function App() {
  return (
    <div className="container mt-3">
      <h1 className="w-100 text-center">HospitalList.com</h1>
      <p className="w-100 text-center">It's a list of hospitals!</p>
      <HospitalList />
      <HospitalModal />
    </div>
  )
}

export default App
