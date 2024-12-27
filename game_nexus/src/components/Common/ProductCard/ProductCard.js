import React from 'react';
import './ProductCard.css';
//MaterialUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ProductCard = ({ product }) => {
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            // image="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=790b7611vld4qini1qcnk7wa7nin5iraq8atz8nxpp5od43t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            image={product.image} 
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              title: {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Add description here: {product.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              price: {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );};

export default ProductCard;