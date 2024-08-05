const locations = ['서울', '부산', '경기도', '대구'];

//For
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

//Foreach
locations.forEach(function (location, index, array) {
    console.log(`${index} : ${location}`);
    console.log(array);
});

//Map