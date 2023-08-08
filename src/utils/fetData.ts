
const url = 'https://geosource-api.p.rapidapi.com/zipByCity.php?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9968a37f2cmshc78d2bddf6b1a13p135af1jsndb166f7734d3',
		'X-RapidAPI-Host': 'geosource-api.p.rapidapi.com'
	}
};

export const FetchGeoData = async(city:string)=>{
console.log(city,'city')
try{
    const response = await fetch(`${url}${city}`,options);
    return response;
}catch(error){
    console.log(error)
}

}

export const fetchSTDCode = async(cityName:string)=>{
    const options:any = {
        method: 'POST',
        url: 'https://std.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9968a37f2cmshc78d2bddf6b1a13p135af1jsndb166f7734d3',
          'X-RapidAPI-Host': 'std.p.rapidapi.com'
        },
        data: {search: cityName}
      };
      
      try {
        console.log(cityName)
          const response = await fetch(options)
          console.log(response,'city respoc')
          return response;

      } catch (error) {
          console.error(error);
      }

      
}
