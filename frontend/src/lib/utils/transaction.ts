export async function callByTransaction(search: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/api/search/transaction/${search}`);
        const result = await response.json();

        // Return the result or a meaningful message
        return {
            status: 200,
            body: {
                message: 'Transaction fetched successfully',
                data: result
            }
        };
    } catch (error) {
        console.error('Error fetching Transaction data:', error);

        return {
            status: 500,
            body: {
                message: 'Failed to fetch Transaction data'
            }
        };
    }
}