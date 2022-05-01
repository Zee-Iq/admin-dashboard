import "./Sidebar.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PointOfSaleSharpIcon from "@mui/icons-material/PointOfSaleSharp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CommentIcon from "@mui/icons-material/Comment";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SummarizeIcon from "@mui/icons-material/Summarize";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeSharpIcon className="sidebarIcon " />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <PointOfSaleSharpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PersonIcon className="sidebarIcon " />
              Users
            </li>
            <li className="sidebarListItem">
              <ShoppingCartOutlinedIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <EuroOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineIcon className="sidebarIcon " />
              Mail
            </li>
            <li className="sidebarListItem">
              <CommentIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ForumOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineIcon className="sidebarIcon " />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
