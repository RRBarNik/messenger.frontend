import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { getAuthUserId } from "../../store/reducers/authReducer/selectors";

const Navbar: React.FC<{}> = () => {
    const AuthUserId = useSelector(getAuthUserId)

    return (
        <div>
            <Menu
                className={styles.nav}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
                <Menu.Item key="1" onClick={() => console.log('click')}>
                    <NavLink className={styles.item} to={`/profile/${AuthUserId}`}>
                        My Profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => console.log('click')}>
                    <NavLink className={styles.item} to='/users'>
                        Users
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => console.log('click')}>
                    <NavLink className={styles.item} to='/chats'>
                        Chats
                    </NavLink>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navbar;