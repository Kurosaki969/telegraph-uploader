import React from 'react';

// Composant pour la sélection de fichier et le bouton de téléchargement
const FileUploadForm = ({ selectedFile, handleFileChange, handleUpload, isLoading }) => {
    return (
        <div className="mb-6">
            <label htmlFor="file-upload" className="block text-gray-700 text-sm font-semibold mb-2">
                Sélectionner un fichier :
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {selectedFile && (
                <p className="mt-2 text-sm text-gray-600">Fichier sélectionné : <span className="font-medium">{selectedFile.name}</span></p>
            )}

            <button
                onClick={handleUpload}
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-6"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Téléchargement...
                    </>
                ) : (
                    'Télécharger'
                )}
            </button>
        </div>
    );
};

export default FileUploadForm;
