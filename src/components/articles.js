import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Articles() {
    const [articles, setData] = useState([]);

    useEffect(() => {
        const chargerDonnees = async () => {
            try {
                const reponse = await api.get('/articles');
                setData(reponse.data);
                console.log(reponse.data);
            } catch (erreur) {
                console.error('Erreur lors du chargement des données :', erreur);
            }
        };

        chargerDonnees();
    }, []);

    return (
        <div>
           
            <h1>Liste des articles</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ mx: 2 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={article.image || "https://avatar.iran.liara.run/public"}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {article.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        {article.categorie_id}
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.quantity}
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Articles;
