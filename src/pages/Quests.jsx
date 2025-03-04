import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuest } from "../store/questSlice";
import { Button, Spin } from "antd";
import { addPoints } from "../store/userSlice";
import QuestCard from "../components/QuestCard";
import { Navigate } from "react-router-dom";
import styles from "../pages/Quests.module.css";

const Quests = () => {
    const dispatch = useDispatch();
    const { quest, status } = useSelector((state) => state.quest);
    const { isAuthenticated, points } = useSelector((state) => state.user);
    const [isCompleted, setIsCompleted] = useState(false);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    const startQuest = () => {
        dispatch(fetchQuest());
        setIsCompleted(false);
    };

    const completeQuest = () => {
        if (isCompleted) {
            dispatch(addPoints(10));
            dispatch(fetchQuest());
            setIsCompleted(false);
        }
    };

    return (
        <div >
            <h1>Ваше задание</h1>
            {status === "loading" && <Spin className={styles.loading}/>}
            {quest && (
                <QuestCard
                    quest={quest}
                    isCompleted={isCompleted}
                    onComplete={completeQuest}
                    onCheck={(checked) => setIsCompleted(checked)}
                />
            )}
            <Button type="primary" onClick={startQuest}>
                Новый квест
            </Button>
            <p>Ваши очки: {points}</p>
        </div>
    );
};

export default Quests;

