import React from 'react';

// Composant pour afficher l'URL de téléchargement et le bouton de copie
const UploadResultDisplay = ({ uploadUrl, copyToClipboard }) => {
    if (!uploadUrl) return null; // N'affiche rien si pas d'URL

    return (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between shadow-sm">
            <p className="text-green-800 text-sm break-all mr-4">
                URL : <a href={uploadUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-medium">{uploadUrl}</a>
            </p>
            <button
                onClick={copyToClipboard}
                className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-200 flex-shrink-0"
                title="Copier l'URL"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
            </button>
        </div>
    );
};

export default UploadResultDisplay;
