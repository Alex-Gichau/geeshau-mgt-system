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
                icon: <PersonOutlined className="icon" style={{ color: 'red', backgroundColor:"lightblue"}} />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlined className="icon" />,
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: false,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className="icon" />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See details",
                icon: <AccountBalanceOutlined className="icon" />,
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
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>

            </div>
            <div className='right'>
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets