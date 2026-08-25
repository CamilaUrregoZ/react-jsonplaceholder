import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="pagination-container">
            <button 
                className="btn-secondary"
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                ← Anterior
            </button>
            <span className="page-indicator">Página {currentPage}</span>
            <button 
                className="btn-secondary"
                onClick={() => onPageChange(currentPage + 1)}
            >
                Siguiente →
            </button>
        </div>
    );
};

export default Pagination;