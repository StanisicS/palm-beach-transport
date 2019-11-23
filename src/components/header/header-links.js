/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "../gatsby-link";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";

// core components
import CustomDropdown from "../dropdown";
import Button from "../button";
import { headerLinksStyle } from "./styles";

const RegisterButton = props => (
  <ListItem className={props.classes.listItem}>
    <Link to="/login-page">
      <Button
        href=""
        color="transparent"
        target="_blank"
        style={{ color: "white" }}
        className={props.classes.navLink}
      >
        Register
      </Button>
    </Link>
  </ListItem>
);

// the logout component emits a logout signal to redux
const Logout = props => (
  <ListItem className={props.classes.listItem}>
    <Button
      href=""
      color="transparent"
      target="_blank"
      style={{ color: "white" }}
      onClick={() => {}}
      className={props.classes.navLink}
    >
      Logout
    </Button>
  </ListItem>
);

const dropDown = ({ items, style }) =>
  items.map(item => (
    <Link href={item.link} className={style}>
      {item.text}
    </Link>
  ));

function HeaderLinks({ links, ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {links.map(item => {
        if (item.dropdown) {
          return (
            <ListItem className={classes.listItem} key={item.text}>
              <CustomDropdown
                noLiPadding
                buttonText={item.dropdown.title}
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={item.dropdown.icon}
                dropdownList={dropDown({
                  items: item.dropdown.links,
                  style: classes.dropdownLink
                })}
              />
            </ListItem>
          );
        } else {
          return (
            <ListItem className={classes.listItem} key={item.text}>
              <Link href={item.link} className={classes.navLink}>
                {item.text}
              </Link>
            </ListItem>
          );
        }
      })}{" "}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
