import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        backgroundColor: '#FFD60A',
        paddingTop: 24,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1A1A1A',
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2C2C2C',
        backgroundColor: '#FFF9C4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: 'flex-start',
        overflow: 'hidden',
    },
    listContainer: {
        padding: 18,
        paddingTop: 20,
    },
});

export default styles;
