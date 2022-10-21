import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './widgets.scss';

const Widgets = ({ type }) => {
    let data;

    //Mock data
    const amount = 100
    const diff = 25

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlined className="icon" style={{ color: 'red', backgroundColor:"yellow"}} />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: true,
                link: "View all orders",
                icon: <ShoppingCartOutlined className="icon" style={{ color: 'white', backgroundColor:"red"}} />,
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className="icon" style={{ color: 'white', backgroundColor:"gray"}} />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceOutlined className="icon" style={{ color: 'yellow', backgroundColor:"green"}} />,
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className="title">{data.title}</span>
                <span className="counter">
                    <span className="currency">{data.isMoney && "Ksh."}</span> {amount}
                </span>
                <span className="link">{data.link}</span>

            </div>
            <div className='right'>
                <div className="percentage positive">
                    <KeyboardArrowUp/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets