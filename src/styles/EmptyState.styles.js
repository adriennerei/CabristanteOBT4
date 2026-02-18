import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        padding: 24,
    },
    emptyIcon: {
        fontSize: 72,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 10,
    },
    emptyMessage: {
        fontSize: 15,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 28,
        paddingHorizontal: 24,
        lineHeight: 22,
    },
    retryButton: {
        backgroundColor: '#1E88E5',
        paddingHorizontal: 36,
        paddingVertical: 14,
        borderRadius: 12,
        shadowColor: '#1E88E5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    retryButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
    },
});

export default styles;
