import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/ProductCard.styles';

const ProductCard = ({ product }) => {
    return (
        <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="contain"
            />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={2}>
                    {product.title}
                </Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>⭐ {product.rating?.rate || 'N/A'}</Text>
                        <Text style={styles.ratingCount}>({product.rating?.count || 0})</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;
