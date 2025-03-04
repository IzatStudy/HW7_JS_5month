import { Button, Card, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/userSlice";
import styles from "../pages/Login.module.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username.trim() || !password.trim()) return;
        dispatch(register({ username, password }));
        navigate("/login");
    };

    return (
        <div className={styles.loginForm}>
            <Card className={styles.loginCard}>
                <h2>Аудентификация</h2>
                <Input placeholder="Имя" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input.Password placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type="primary" onClick={handleLogin} disabled={!username.trim() || !password.trim()}>
                    Зарегистрироваться
                </Button>
            </Card>
        </div>
    );
};

export default Login;
