import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeFillSvg,
  HomeLineSvg,
  ArticleLineSvg,
  FileCodeFillSvg,
  FileCodeLineSvg,
  FileInfoFillSvg,
  FileInfoLineSvg,
  FileSettingsFillSvg,
  FileSettingsLineSvg,
  ArticleFillSvg,
} from "../../assets";
import "./index.css";

const TabsPages = [
  {
    path: "/",
    title: "Home",
    activeIcon: HomeFillSvg,
    inActiveIcon: HomeLineSvg,
  },
  {
    path: "/blogs",
    title: "Blogs",
    activeIcon: ArticleFillSvg,
    inActiveIcon: ArticleLineSvg,
  },
  {
    path: "/projects",
    title: "Projects",
    activeIcon: FileCodeFillSvg,
    inActiveIcon: FileCodeLineSvg,
  },

  {
    path: "/skills",
    title: "Skills",
    activeIcon: FileSettingsFillSvg,
    inActiveIcon: FileSettingsLineSvg,
  },
  {
    path: "/about",
    title: "About",
    activeIcon: FileInfoFillSvg,
    inActiveIcon: FileInfoLineSvg,
  },
];

const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="tabBarRootContainer">
      <div className="tabBarContainer">
        {TabsPages.map(({ path, activeIcon, inActiveIcon, title }, index) => {
          const isActive = location.pathname === path;
          const Icon = isActive ? activeIcon : inActiveIcon;
          return (
            <div
              key={`bottom-tab-item-${index}-${path}`}
              className={`tabItem ${isActive ? "active" : ""}`}
              onClick={() => navigate(path)}
            >
              <Icon   fill={'var(--opposite-color)'}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar;
