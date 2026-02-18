import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/EmptyState.styles';

const EmptyState = ({ onRefresh }) => {
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.emptyIcon}>📦</Text>
            <Text style={styles.emptyTitle}>No products available</Text>
            <Text style={styles.emptyMessage}>
                There are no products to display at the moment.
            </Text>
            <TouchableOpacity style={styles.retryButton} onPress={onRefresh}>
                <Text style={styles.retryButtonText}>Refresh</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EmptyState;
