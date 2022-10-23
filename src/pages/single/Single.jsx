import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/charts/Charts"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img src="https://7bitmusic.com/wp-content/uploads/2022/03/Chandler-Moore_www.7bitmusic.com_-1200x800.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">CHANDLER MOORE</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">chandmoore@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+239 812 381</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton, Maverick House</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">District:</span>
                  <span className="itemValue">University</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
          
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single 