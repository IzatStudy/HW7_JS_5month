import React from "react";
import { Link } from "react-router-dom";
import {Button} from "antd";

const Home = () => {
    return (
        <div>
            <h1>Добро пожаловать в Questify!</h1>
            <p>Получай случайные задания и выполняй их!</p>
            <Button type={"primary"}>
                <Link to='/quests'>Начать квест</Link>
            </Button>
        </div>
    );
};

export default Home;

