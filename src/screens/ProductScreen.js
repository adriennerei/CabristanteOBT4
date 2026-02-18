import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useProducts } from '../context/ProductContext';
import { getAllProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import styles from '../styles/ProductScreen.styles';

const ProductScreen = () => {
    const { products, loading, error, setProducts, setLoading, setError } = useProducts();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllProducts();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderProductItem = ({ item }) => <ProductCard product={item} />;

    if (loading && products.length === 0) {
        return <LoadingState />;
    }

    if (error && products.length === 0) {
        return <ErrorState message={error} onRetry={fetchProducts} />;
    }

    if (products.length === 0) {
        return <EmptyState onRefresh={fetchProducts} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🍌 BananaPedia</Text>
                <Text style={styles.headerSubtitle}>📦 {products.length} Products Available</Text>
            </View>

            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductScreen;
