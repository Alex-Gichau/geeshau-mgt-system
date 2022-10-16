import { MoreVertOutlined } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "./featured.scss"
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlined fontSize="small"/> 
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={25} text={"25%"} strokeWidth={3}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions processing. Last payments may not included.</p>
        </div>
    </div>
  )
}

export default Featured