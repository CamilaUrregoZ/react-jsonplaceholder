import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="main-container">
            <div className="detail-card" style={{ textAlign: 'center', maxWidth: '700px' }}>
                <h1 className="page-title">Bienvenido a PhotoUsers</h1>
                <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Directorio de usuarios y galería de fotos conectada con la API de JSONPlaceholder.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/users" className="btn-primary">
                        Ver Usuarios
                    </Link>
                    <Link to="/photos" className="btn-primary" style={{ backgroundColor: '#0d9488' }}>
                        Ver Galería de Fotos
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;