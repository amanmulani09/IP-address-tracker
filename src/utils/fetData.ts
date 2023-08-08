
const url = 'https://geosource-api.p.rapidapi.com/zipByCity.php?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9968a37f2cmshc78d2bddf6b1a13p135af1jsndb166f7734d3',
		'X-RapidAPI-Host': 'geosource-api.p.rapidapi.com'
	}
};

export const FetchData = async(city:string)=>{
// const url = ``;

try{
    const response = await fetch(`${url}${city}`,options);
    const data = await response.json();
    return data;

}catch(error){
    console.log(error)
}

}
