import "./navbar.scss"
import { SearchOutlined } from "@mui/icons-material"
import { LanguageOutlined } from "@mui/icons-material"
import { DarkModeOutlined } from "@mui/icons-material"
import { FullscreenExitOutlined } from "@mui/icons-material"
import { NotificationsNoneOutlined } from "@mui/icons-material"
import { ChatBubbleOutline } from "@mui/icons-material"
import { ListOutlined } from "@mui/icons-material"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/> English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
            <img src="https://mega.nz/file/Pq5k3ZRD#3Dkn5cgR6ozxvHxthFZ7NhQTng51uA4i3oWDFqBaI6E" alt="geeshau-logo" className="logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar