import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        // Mettre à jour l'état avec les données de la réponse
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des catégories :', error);
      }
    };

    // Appeler la fonction pour charger les données une fois que le composant est monté
    fetchCategories();
  }, []);

  return (
    <div>
    
      <h1>Liste des catégories</h1>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            <h2>{category.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
