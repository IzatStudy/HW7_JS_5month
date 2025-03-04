import React, { useState, useEffect } from "react";
import { Card, Button, Checkbox } from "antd";
import styles from "../components/QuestCard.module.css";

const QuestCard = ({ quest, onComplete, onCheck }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(false);
    }, [quest]);

    const handleCheck = (e) => {
        setChecked(e.target.checked);
        onCheck(e.target.checked);
    };

    const handleComplete = () => {
        onComplete();
        setChecked(false);
    };

    return (
        <Card className={styles.questCard}>
            <p>{quest.activity}</p>
            <Checkbox checked={checked} onChange={handleCheck}>
                Выполнено
            </Checkbox>
            <Button type="primary" onClick={handleComplete} disabled={!checked}>
                Выполнил, получить 10 очков
            </Button>
        </Card>
    );
};

export default QuestCard;

