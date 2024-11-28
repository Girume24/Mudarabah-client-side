import "./home.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type = "customers"/>
            <Widget type = "financing"/>
            <Widget type = "profit"/>
          </div>
          <div className="charts"></div>
          </div>
    </div>
  )
}

export default Home