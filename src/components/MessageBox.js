import React from 'react';

// Composant pour la boîte de message personnalisée
const MessageBox = ({ show, title, message, onClose }) => {
    if (!show) return null; // N'affiche rien si non visible

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-700 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default MessageBox;
