import { Table } from "antd"
import { useSelector } from "react-redux"

const Leaderboard = () => {
    const { username, points } = useSelector(state => state.user)

    const fakeUsers = [
        { key: "1", username: "Player1", points: 120 },
        { key: "2", username: "Player2", points: 90 },
        { key: "3", username: "Player3", points: 80 },
        { key: "4", username: "Player4", points: 70 },
    ]

    const currentUser = username ? [{key: '5', username: username, points: points}] : []

    const data = [...fakeUsers, ...currentUser].sort((a, b) => b.points - a.points)

    return (
        <div>
            <h1>Лидерборд</h1>
            <Table
                dataSource={data}
                columns={[
                    { title: 'Игрок', dataIndex: "username", key: "username" },
                    { title: "Очки", dataIndex: "points", key: "points"}
                ]}
                pagination={false}
            />
        </div>
    )
}

export default Leaderboard