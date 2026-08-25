import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            const data = await getUsers();
            setUsers(data);
            setLoading(false);
        };
        loadUsers();
    }, []);

    if (loading) return <p style={{ padding: '20px' }}>Cargando usuarios...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Usuarios</h1>
            <div className="cards-grid">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users;