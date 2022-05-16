import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import { Menu, MenuProps, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons'

const Header: React.FC<{}> = (props) => {
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };

    return (
        <header className={styles.header} >
            <div className={styles.headerLogo}>Messenger</div>
            <Dropdown.Button
                className={styles.headerMenu}
                overlay={
                    <Menu
                        className={styles.headerMenuInner}
                        onClick={onClick}
                    >
                        <Menu.Item key="1">
                            <NavLink to='/login'>
                                Log out
                            </NavLink>
                        </Menu.Item>
                    </Menu>}
                placement="bottom"
                icon={<UserOutlined />}
            >
                Nickname
            </Dropdown.Button>
        </header >)
}

export default Header;