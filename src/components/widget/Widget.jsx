import "./Widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import MoneyIcon from '@mui/icons-material/Money';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Widget({type}) {
  let data;

  //temporary
  const amount = 110000;
  const diff = 20;

    switch(type){
      case "customers":
        data={
          title: "CUSTOMERS",
          isMoney: false,
          link: "see all customers",
          icon: <PersonIcon className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, .0, 0, 0.2)",
          }}
          />
        };
        break;
        case "financing":
        data={
          title: "FINANCING",
          isMoney: true,
          link: "view net Mudarabah financing",
          icon: <MoneyIcon className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}
          />
        };
        break;
        case "profit":
        data={
          title: "PROFIT",
          isMoney: true,
          link: "see details",
          icon: <MonetizationOnIcon className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}/>
        };
        break;
        default:
          break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="latest">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon /> 
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget