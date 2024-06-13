import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';


function ArticleForm (){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found. Please log in.');
            return;
        }
        const reponse = await axios.post('http://127.0.0.1:8000/articles',{
            name,
            description,
            categorie,
            quantity
        }, {
            headers: {
              Authorization: `Bearer ${token}`
        }});
        navigate('/'); 
    }

    return (
        <Box component="div" sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
               <TextField
          fullWidth
          margin="normal"
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={4}  // Adjust the number of rows as needed
        />
            <TextField
              fullWidth
              margin="normal"
              label="Categorie"
              variant="outlined"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Quantité"
              type="number"
              variant="outlined"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <Box textAlign="center" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Envoyer
              </Button>
            </Box>
          </form>
        </Box>
      );
}

export default ArticleForm