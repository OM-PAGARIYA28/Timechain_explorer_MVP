export async function callByAddress(search: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/api/search/address/${search}`);
        const result = await response.json();

        // Return the result or a meaningful message
        return {
            status: 200,
            body: {
                message: 'Address data fetched successfully',
                data: result
            }
        };
    } catch (error) {
        console.error('Error fetching Address data:', error);

        return {
            status: 500,
            body: {
                message: 'Failed to fetch Address data'
            }
        };
    }
}