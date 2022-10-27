export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '544816569dmsh3d9ccaa4340c6aap16bdc3jsnf687f01f0a7c',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));