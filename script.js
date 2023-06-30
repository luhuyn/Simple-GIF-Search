const apiKey = 'xzHVZEFWaFKmOsdlzlTCzPZYD6mjn2Uh';
const keywordInput = document.getElementById('keywordInput');
const searchButton = document.getElementById('searchButton');
const gifContainer = document.getElementById('gifContainer');

function fetchGIFs() {
    const keyword = keywordInput.value;
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const gifs = data.data;
            gifContainer.innerHTML = '';

            gifs.forEach(gif => {
                const imageUrl = gif.images.fixed_height.url;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                gifContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.log(error));
}

searchButton.addEventListener('click', fetchGIFs);

keywordInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        fetchGIFs();
    }
});