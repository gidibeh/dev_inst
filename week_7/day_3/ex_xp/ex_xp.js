const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}


const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


/*  person is an object with a nested location object. 
The output is a console log that displays the person's name, city, country, and coordinate. the last details are all taken from the nested object. 
This is possible due to destructuring the nested object in line 12 const {name, location: {country, city, coordinates: [lat, lng]}} = person;*/