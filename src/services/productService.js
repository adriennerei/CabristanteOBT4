import api from './api';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAllProducts = async () => {
    try {
        await delay(2000);
        
        // empty simulation
        // return [];
        
        // error simulation
        // throw new Error();
        
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw new Error(error.message || 'Failed to fetch products');
    }
};
