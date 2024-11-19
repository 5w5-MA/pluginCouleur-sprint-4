<?php

/**
 * Plugin Name: plugin couleur
 * Plugin URI: https://github.com/Alek-Crepeau
 * Description: plugin pour changer la couleur du site avec un bouton
 * Version: 1
 * Author: Alek
 * Author URI: https://github.com/Alek-Crepeau
 **/

function ajoutScript()
{
    // Enregistre et ajoute le script
    wp_enqueue_script(
        'plugin.js', // ID du script
        plugin_dir_url(__FILE__) . 'js/plugin.js', // Chemin du fichier JS
        array('jquery'), // Dépendances (facultatif, ici on charge jQuery si nécessaire)
        null, // Version du script (facultatif)
        true // Mettre le script dans le footer (true)
    );
}
add_action('wp_enqueue_scripts', 'ajoutScript');

// Fonction pour afficher le bouton
function ajoutBouton()
{
    return '<button id="boutonCouleur">change la couleur</button>';
}

// Enregistrer le shortcode
add_shortcode('bouton', 'ajoutBouton');
