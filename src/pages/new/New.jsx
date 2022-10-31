import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
          <div className="bottom">
            <div className="left">
              <img src="" alt="camera-grey"/>
            </div>
            <div className="right">
              <form action="">
                <div className="forminput">
                  <label>Username</label>
                  <input type="text" className="text" placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>First name and Surname</label>
                  <input type="text"  placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>Email</label>
                  <input type="text"  placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>Phone</label>
                  <input type="text" placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>Password</label>
                  <input type="text" placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>Address</label>
                  <input type="text" placeholder="john"/>
                </div>
                <div className="forminput">
                  <label>Country</label>
                  <input type="text" placeholder="john"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New