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
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2F%40whatifsanimated%2Fcommunity&psig=AOvVaw10Kmg-eWNU8dI8YJwMXCRj&ust=1693780566197000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJi_1bf-jIEDFQAAAAAdAAAAABAS" alt="geeshau-logo" className="logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar