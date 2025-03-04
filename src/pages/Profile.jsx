import React from "react";
import { useSelector } from "react-redux";
import styles from "../pages/Profile.module.css";

const Profile = () => {
    const { username, points } = useSelector((state) => state.user);

    return (
        <div className={styles.profile}>
            <h1>Профиль</h1>
            {username ? (
                <div>
                    <p>Имя: {username}</p>
                    <p>Очки: {points}</p>
                </div>
            ) : (
                <p>Вы не вошли в профиль.</p>
            )}
        </div>
    );
};

export default Profile;
