import axios from 'axios';

// Function to retrieve user information based on username and password
const getUserInfo = async (username, password) => {
    try {
        // Make a POST request to your backend API endpoint for user authentication
        const response = await axios.post('/api/login', { username, password });
        
        // If authentication is successful, fetch user information
        if (response.data.success) {
            // Make a GET request to another endpoint to retrieve user information
            const userInfoResponse = await axios.get('/api/user-info', {
                params: { username: response.data.username }
            });
            
            // Return the user information
            return userInfoResponse.data;
        } else {
            // If authentication fails, return null or throw an error
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Error fetching user information:', error);
        return null;
    }
};

export default getUserInfo;
