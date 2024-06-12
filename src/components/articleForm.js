import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ArticleForm (){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [quantity, setQuantity] = useState(1);
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY0ODhjYjExOTE1OWM0MWJjN2NkZjdkIiwiZW1haWwiOiI3Nzg4OTk4NjUifQ.PW6k9OFWMvoZAWXnDp6UBQJQeT-1B10-tLFLuUPMkJE"
    const  handleSubmit = async (event) => {
        event.preventDefault();
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