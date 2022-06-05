import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../store/reducers/profileReducer";
import { getUserProfileSelector } from "../../store/reducers/profileReducer/selectors";
import { useParams } from "react-router";
import { getAuthUserId } from "../../store/reducers/authReducer/selectors";

let Profile: React.FC<{}> = (props) => {
    const userProfile = useSelector(getUserProfileSelector)
    const authUserId = useSelector(getAuthUserId)
    const { userId } = useParams<{ userId: string }>()

    const dispatch = useDispatch()

    useEffect(() => {
        if(authUserId !== userId){
            dispatch(getUserProfile(userId))
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.profileWrapper}>
                <span className={styles.profileImage}>
                    <Avatar shape="square" size={128} src="https://sun9-66.userapi.com/sun9-86/impf/rpXLmTBXm3N94AYAq_z9v0D-EhZrzdeuf6m_ng/tQw5vaDEWjc.jpg?size=604x604&quality=96&sign=c7a3cc990e65e22675e4173857b367eb&type=album" icon={<UserOutlined />} />
                </span>
                <span className={styles.profileStatus}>
                    <div>
                        {userProfile.firstname + " " + userProfile.lastname}
                    </div>
                </span>
                <span className={styles.profileInfo}>
                    <div>
                        Номер телефона: 8-917-777-11-11
                    </div>
                    <div>
                        Должность: Менеджер по продажам
                    </div>
                    <Button>
                        Редактировать профиль
                    </Button>
                </span>
            </div>
        </div >)
}

export default Profile;