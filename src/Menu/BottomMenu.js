// import React from "react";
// import "./BottomMenu.css";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Box from "@material-ui/core/Box";
// import HomeIcon from "@material-ui/icons/Home";
// import PersonIcon from "@material-ui/icons/Person";
// import chest from "./chest.svg";
// import house from "./house.svg";
// import layout from "./layout_dashboard.svg";
// import piggy from "./piggy.svg";
// import user from "./user.svg";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
// });

// export default function BottomMenu() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState("recents");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     // <BottomNavigation
//     //   value={value}
//     //   onChange={handleChange}
//     //   className={classes.root}
//     //   style={{
//     //     width: "100%",
//     //     position: "fixed",
//     //     bottom: "0",
//     //     backgroundColor: "#fff",
//     //   }}
//     // >
//     //   <BottomNavigationAction label="Home" value="home" icon={HomeIcon} />
//     //   {/* <BottomNavigationAction label="Layout" value="layout" icon={layout} /> */}
//     //   <BottomNavigationAction
//     //     label="Profile"
//     //     value="profile"
//     //     icon={PersonIcon}
//     //   />
//     //   <BottomNavigationAction label="Piggy Bank" value="bank" icon={piggy} />
//     //   <BottomNavigationAction label="Chest" value="chest" icon={chest} />
//     // </BottomNavigation>
//     // // <div className="nav-icons">
//     // //   <img src={house} alt="Home" className="nav-icon" />
//     // //   <img src={layout} alt="Layout" className="nav-icon" />
//     // //   <img src={user} alt="Profile" className="nav-icon" />
//     // //   <img src={piggy} alt="Piggy Bank" className="nav-icon" />
//     // //   <img src={chest} alt="Treasure Chest" className="nav-icon" />
// //     // // </div>
// //   );
// // }
