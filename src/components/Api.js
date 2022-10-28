export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '544816569dmsh3d9ccaa4340c6aap16bdc3jsnf687f01f0a7c',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY="237fb7f987a10cfb44293bd3c23e309f";

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));