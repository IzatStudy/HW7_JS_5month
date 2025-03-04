import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logout } from "../store/userSlice";
import styles from "../components/Header.module.css";

const Header = () => {
    const { isAuthenticated, username } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <header className={styles.header} >
            <h2>Questify &#10063;</h2>
            <nav className={styles.links}>
                <Link to="/">Главная</Link>
                <Link to="/quests">Квесты</Link>
                <Link to="/leaderboard">Лидерборд</Link>
            </nav>
            {isAuthenticated ? (
                <div className={styles.login}>
                    <span>{username}</span>
                    <Button type="primary" onClick={() => dispatch(logout())}>Выйти</Button>
                </div>
            ) : (
                <Link to="/login">
                    <Button type="primary">Войти</Button>
                </Link>
            )}
        </header>
    )
}

export default Header;