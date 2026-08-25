import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
    return (
        <div className="user-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>{user.name}</h3>
            <p>@{user.username}</p>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`}>Ver Perfil Completo</Link>
        </div>
    );
}

export default UserCard;