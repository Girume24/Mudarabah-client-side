import "./Widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Widget() {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">UPLOADS</span>
            <span className="counter">3</span>
            <span className="link">See all uploads</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon /> 
                20 % 
            </div>
            <UploadFileIcon className="icon"/>
        </div>
    </div>
  )
}

export default Widget