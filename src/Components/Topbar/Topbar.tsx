import "./Topbar.css";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div title="Notifications" className="topbarIconContainer">
            <NotificationsNoneSharpIcon  />
            <span className="topIconBadge">2</span>
          </div>
          <div title="Language" className="topbarIconContainer">
            <LanguageSharpIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div title="Settings" className="topbarIconContainer">
            <SettingsSharpIcon />
          </div>
          <img title="Profile" src="https://avatars.githubusercontent.com/u/86056842?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
