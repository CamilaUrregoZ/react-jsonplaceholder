import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../services/api";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const data = await getUser(id);
            setUser(data);
        };
        loadUser();
    }, [id]);

    if (!user) return <p className="main-container">Cargando información del usuario...</p>;

    return (
        <div className="main-container">
            <div className="detail-card">
                <h1 className="page-title" style={{ marginBottom: '0.5rem' }}>{user.name}</h1>
                <p className="card-subtitle">@{user.username}</p>
                
                <div className="detail-info">
                    <div className="detail-item"><strong>Correo:</strong> {user.email}</div>
                    <div className="detail-item"><strong>Teléfono:</strong> {user.phone}</div>
                    <div className="detail-item"><strong>Sitio Web:</strong> {user.website}</div>
                    <div className="detail-item"><strong>Empresa:</strong> {user.company?.name}</div>
                    <div className="detail-item"><strong>Ciudad:</strong> {user.address?.city}</div>
                </div>

                <Link to="/users" className="btn-secondary">
                    ← Volver a Usuarios
                </Link>
            </div>
        </div>
    );
}

export default UserDetail;