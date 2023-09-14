import './sidebar.scss';
import {AccountCircleRounded, CreditCard, Dashboard, InsertChartOutlined, LocalShippingOutlined, LogoutRounded, NotificationsNoneSharp, PersonOutline, PsychologyAltOutlined, Settings,SettingsSystemDaydream, StoreMallDirectoryOutlined } from '@mui/icons-material';


const Sidebar = () => {

//  https://sheetdb.io/api/v1/iwggwlq423ayl

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Geeshau Art</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutline className='icon'/>
                        <span>Clients</span>
                    </li>
                    <li>
                        <StoreMallDirectoryOutlined className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCard className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlined className='icon'/>
                        <span routepath="/invoices">Invoices</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartOutlined className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneSharp className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydream className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltOutlined className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleRounded className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRounded className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption'></div>
                <div className='colorOption'></div>
                
            </div>
        </div>
    );
};

export default Sidebar;
