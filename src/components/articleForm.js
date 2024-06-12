import React, { useState } from 'react';
import axios from 'axios';


function ArticleForm (){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [quantity, setQuantity] = useState(1);

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
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label  >Name</label>  <br/>
                <input type="text" id="name" value={name}  onChange={(e) => setName(e.target.value)} required></input>
                <label >Description</label><br/>
                <input type="text" id="description" value={description}  onChange={(e) => setDescription(e.target.value)} required></input>
                <label >Categorie</label><br/>
                <input type="text" id="categorie" value={categorie}  onChange={(e) => setCategorie(e.target.value)} required></input>
                <label >Quantité</label><br/>
                <input type="number" id="quantity" value={quantity}  onChange={(e) => setQuantity(e.target.value)} required></input>
                <input type="submit" value="Envoyer"/>
            </form>
        </div> 
    );
    
}

export default ArticleForm