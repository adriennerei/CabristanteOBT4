import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ErrorState.styles';

const ErrorState = ({ message, onRetry }) => {
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.errorTitle}>Something went wrong.</Text>
            <Text style={styles.errorMessage}>{message}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ErrorState;
