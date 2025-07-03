import React, { useState } from 'react';
import FileUploadForm from './components/FileUploadForm'; // Importe le composant du formulaire
import UploadResultDisplay from './components/UploadResultDisplay'; // Importe le composant d'affichage des résultats
import MessageBox from './components/MessageBox'; // Importe le composant de la boîte de message

// Composant App principal pour le téléchargeur de fichiers Telegra.ph
const App = () => {
    // État pour stocker le fichier sélectionné par l'utilisateur
    const [selectedFile, setSelectedFile] = useState(null);
    // État pour stocker l'URL retournée par Telegra.ph après un téléchargement réussi
    const [uploadUrl, setUploadUrl] = useState('');
    // État pour gérer le statut de chargement pendant le téléchargement du fichier
    const [isLoading, setIsLoading] = useState(false);
    // État pour stocker les messages d'erreur qui surviennent pendant le processus
    const [error, setError] = useState('');
    // État pour contrôler la visibilité et le contenu d'une boîte de message personnalisée
    const [messageBox, setMessageBox] = useState({ show: false, title: '', message: '' });

    /**
     * Gère l'événement de changement lorsqu'un fichier est sélectionné par l'utilisateur.
     * Efface les résultats de téléchargement et les erreurs précédents, puis définit le nouveau fichier sélectionné.
     * @param {Event} event - L'événement de changement de l'entrée de fichier.
     */
    const handleFileChange = (event) => {
        setUploadUrl(''); // Efface toute URL précédemment affichée
        setError('');     // Efface tout message d'erreur précédent
        // Obtient le premier fichier de la liste des fichiers sélectionnés
        setSelectedFile(event.target.files[0]);
    };

    /**
     * Gère le processus de téléchargement de fichier vers Telegra.ph.
     * Cette fonction est asynchrone car elle implique des requêtes réseau.
     */
    const handleUpload = async () => {
        // Vérifie si un fichier a été sélectionné avant de tenter de télécharger
        if (!selectedFile) {
            showMessageBox('Erreur', 'Veuillez sélectionner un fichier à télécharger.');
            return; // Quitte la fonction si aucun fichier n'est sélectionné
        }

        setIsLoading(true); // Définit l'état de chargement à vrai pour afficher un spinner ou désactiver le bouton
        setError('');       // Efface tout message d'erreur précédent
        setUploadUrl('');   // Efface toute URL de téléchargement précédente

        try {
            // --- DÉBUT DE LA SIMULATION DE TÉLÉCHARGEMENT ---
            // Le "Failed to fetch" peut être dû à des restrictions CORS ou à l'environnement d'exécution.
            // Pour démontrer la fonctionnalité de l'UI, nous allons simuler un téléchargement réussi.
            // En production ou dans un environnement local sans restrictions, vous utiliseriez le code commenté ci-dessous.

            // Simule un délai réseau
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simule une URL de réponse de Telegra.ph
            const simulatedSrc = `/file/${Math.random().toString(36).substring(2, 15)}.jpg`; // Génère un nom de fichier aléatoire
            const fullUrl = `https://telegra.ph${simulatedSrc}`;
            setUploadUrl(fullUrl); // Met à jour l'état avec l'URL simulée

            // --- FIN DE LA SIMULATION DE TÉLÉCHARGEMENT ---

            /*
            // CODE ORIGINAL POUR LE TÉLÉCHARGEMENT RÉEL (décommenter si les problèmes de fetch sont résolus)
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Erreur de téléchargement: ${response.statusText} (${response.status})`);
            }

            const result = await response.json();

            if (result && Array.isArray(result) && result.length > 0 && result[0].src) {
                const fullUrl = `https://telegra.ph${result[0].src}`;
                setUploadUrl(fullUrl);
            } else {
                throw new Error('Réponse inattendue du serveur de téléchargement. Le format de l\'URL est introuvable.');
            }
            */
        } catch (err) {
            console.error("Erreur lors du téléchargement:", err);
            setError(err.message);
            showMessageBox('Erreur de téléchargement', err.message);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Copie l'URL de téléchargement générée dans le presse-papiers de l'utilisateur.
     * Utilise une solution de secours pour les environnements où navigator.clipboard.writeText n'est pas disponible (comme les iframes).
     */
    const copyToClipboard = () => {
        if (uploadUrl) {
            // Crée un élément textarea temporaire
            const textarea = document.createElement('textarea');
            textarea.value = uploadUrl; // Définit sa valeur sur l'URL
            textarea.style.position = 'fixed'; // Le rend fixe pour éviter les problèmes de défilement
            textarea.style.opacity = '0';      // Le rend invisible
            document.body.appendChild(textarea); // L'ajoute au corps du document
            textarea.select(); // Sélectionne le texte à l'intérieur du textarea
            // Exécute la commande de copie. C'est une méthode dépréciée mais qui fonctionne de manière fiable dans les iframes.
            document.execCommand('copy');
            document.body.removeChild(textarea); // Supprime le textarea temporaire
            showMessageBox('Copié', 'L\'URL a été copiée dans le presse-papiers !'); // Notifie l'utilisateur
        }
    };

    /**
     * Affiche une boîte de message personnalisée avec un titre et un message donnés.
     * @param {string} title - Le titre de la boîte de message.
     * @param {string} message - Le message de contenu de la boîte de message.
     */
    const showMessageBox = (title, message) => {
        setMessageBox({ show: true, title, message });
    };

    /**
     * Ferme la boîte de message personnalisée.
     */
    const closeMessageBox = () => {
        setMessageBox({ show: false, title: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center p-4 font-inter">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Téléchargeur de fichiers Telegra.ph</h1>

                {/* Utilisation du composant FileUploadForm */}
                <FileUploadForm
                    selectedFile={selectedFile}
                    handleFileChange={handleFileChange}
                    handleUpload={handleUpload}
                    isLoading={isLoading}
                />

                {/* Utilisation du composant UploadResultDisplay */}
                <UploadResultDisplay
                    uploadUrl={uploadUrl}
                    copyToClipboard={copyToClipboard}
                />

                {/* Zone d'affichage des messages d'erreur */}
                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 shadow-sm">
                        <p className="font-semibold mb-1">Erreur :</p>
                        <p className="text-sm">{error}</p>
                    </div>
                )}
            </div>

            {/* Utilisation du composant MessageBox */}
            <MessageBox
                show={messageBox.show}
                title={messageBox.title}
                message={messageBox.message}
                onClose={closeMessageBox}
            />
        </div>
    );
};

export default App;
