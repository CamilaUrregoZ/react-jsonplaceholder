import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhotos } from '../services/api';
import Pagination from '../components/Pagination';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPhotos(page, 15).then((data) => {
            setPhotos(data);
            setLoading(false);
        });
    }, [page]);

    return (
        <div className="main-container">
            <h2 className="page-title">Galería de Fotos</h2>
            
            {loading ? (
                <p>Cargando fotos...</p>
            ) : (
                <>
                    <div className="cards-grid">
                        {photos.map((photo) => (
                            <div key={photo.id} className="card">
                                <img 
                                    src={`https://picsum.photos/id/${photo.id % 1000}/250/180`} 
                                    alt={photo.title} 
                                    style={{ 
                                        width: '100%', 
                                        height: '140px', 
                                        objectFit: 'cover', 
                                        borderRadius: '8px',
                                        marginBottom: '0.8rem'
                                    }} 
                                />
                                <p className="card-subtitle" style={{ height: '38px', overflow: 'hidden' }}>
                                    {photo.title.substring(0, 30)}...
                                </p>
                                <Link to={`/photos/${photo.id}`} className="btn-primary">
                                    Ver detalle
                                </Link>
                            </div>
                        ))}
                    </div>
                    
                    <Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
                </>
            )}
        </div>
    );
};

export default Photos;