import './sideMenu.css';
import TwitterLogo from './images/twitter.png';
import {
  HOME_SVG,
  EXPLORE_SVG,
  NOTIFICATION_SVG,
  MESSAGES_SVG,
  BOOKMARKS_SVG,
} from './images/indeximage';
import MenuItem from './MenuItem';

export default function SideMenu() {
  const menu = [
    { icon: HOME_SVG, name: 'Home' },
    { icon: EXPLORE_SVG, name: 'Explore' },
    { icon: NOTIFICATION_SVG, name: 'Notifications' },
    { icon: MESSAGES_SVG, name: 'Messages' },
    { icon: BOOKMARKS_SVG, name: 'Bookmarks' },
  ];

  return (
    <div className="w-25 mt-3 mx-5 side-menu">
      <img src={TwitterLogo} className="logo-twitter mb-2" />
      {menu.map(
        (item, index) => (
          <MenuItem item={item}  key={index}/>
        )

        // <div className="d-flex ">
        //   <div className="svg-container" style={{ width: 40, height: 40 }}>
        //     {item.icon}
        //   </div>
        //   <p  className='mx-3'  style={{ fontSize: 18, marginLeft: 15 }}>{item.name}</p>
        // </div>
      )}
    </div>
  );
}
