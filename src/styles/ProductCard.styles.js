import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
    },
    productImage: {
        width: 110,
        height: 110,
        borderRadius: 12,
        backgroundColor: '#F8F9FA',
    },
    productInfo: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    productTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: 6,
        lineHeight: 22,
    },
    productCategory: {
        fontSize: 13,
        color: '#757575',
        textTransform: 'capitalize',
        marginBottom: 12,
        fontWeight: '500',
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    productPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E88E5',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9E6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFA000',
        marginRight: 4,
    },
    ratingCount: {
        fontSize: 12,
        color: '#757575',
        fontWeight: '500',
    },
});

export default styles;

