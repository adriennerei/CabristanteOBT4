import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles/LoadingState.styles';

const LoadingState = () => {
    return (
        <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Loading products...</Text>
        </View>
    );
};

export default LoadingState;
