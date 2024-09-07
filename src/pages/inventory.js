import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const Inventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produit 1', quantity: 10, price: 100 },
    { id: 2, name: 'Produit 2', quantity: 5, price: 200 },
  ]);

  const [newProduct, setNewProduct] = useState({ id: '', name: '', quantity: '', price: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (editMode) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === currentProductId ? { ...newProduct, id: currentProductId } : product
        )
      );
      setEditMode(false);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...newProduct, id: prevProducts.length + 1 },
      ]);
    }
    setNewProduct({ id: '', name: '', quantity: '', price: '' });
  };

  const handleEditProduct = (product) => {
    setEditMode(true);
    setNewProduct(product);
    setCurrentProductId(product.id);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <Paper>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>ID</TableCell>
               <TableCell>Nom</TableCell>
               <TableCell>Quantité</TableCell>
               <TableCell>Prix</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {products.map((product) => (
               <TableRow key={product.id}>
                 <TableCell>{product.id}</TableCell>
                 <TableCell>{product.name}</TableCell>
                 <TableCell>{product.quantity}</TableCell>
                 <TableCell>{product.price}</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </Paper>
  );
};

export default Inventory;
