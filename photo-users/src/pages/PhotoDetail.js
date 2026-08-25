import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhoto } from '../services/api';

const PhotoDetail = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        getPhoto(id).then(setPhoto);
    }, [id]);

    if (!photo) return <p style={{ padding: '20px', textAlign: 'center' }}>Cargando detalle de la foto...</p>;

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '15px' }}>{photo.title}</h2>
            
            <img 
                src={`https://picsum.photos/id/${photo.id % 1000}/600/400`} 
                alt={photo.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }} 
            />

            <div style={{ marginTop: '20px', textAlign: 'left', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                <p><strong>ID de Foto:</strong> {photo.id}</p>
                <p><strong>Álbum ID:</strong> {photo.albumId}</p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Link to="/photos" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                    ← Volver a Fotos
                </Link>
            </div>
        </div>
    );
};

export default PhotoDetail;