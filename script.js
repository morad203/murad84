
async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


fetchData('https://api.example.com/data')
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error in fetchData:', error);
    });