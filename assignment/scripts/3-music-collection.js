console.log('***** Music Collection *****')

//okay catch up- Create a variable `collection` that starts as an empty array.

//- Add a function named `addToCollection`. This function should:
//  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//  - Create a new object having the above properties
//  - Add the new object to the end of the `collection` array
//  - Return the newly created object
let collection = [];
// empty array created //
function addtocollection (title, artist, yearPublished){
   const album = {
     title: title,
     artist: artist,
     yearPublished: yearPublished
   };
   collection.push(album);
   return album;
} // End addtocollection

// let numbers =[];
// function addition(x,y){
//   const numenter = {
//    firstnum: x,
//    secondnum: y
//  }
//  numbers.push(numenter);
// }
// addition(1,2);
// console.log(numbers);


//- Test the `addToCollection` function:
//  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  - Console.log each album as added using the returned value.
//  - After all are added, console.log the `collection` array.

addtocollection('Rock', 'Boomer', '1945');
addtocollection('Rap', 'Luke', '2005');
addtocollection('Country', 'Xman', '2017');
addtocollection('Smooth Jazz', 'Luke', '1987');
addtocollection('Boom Boom', 'Mary', '1999');
addtocollection('Noises', 'Madison', '2001');
console.log(collection);

//- Add a function named `showCollection`. This function should:
//  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//  - Console.log the number of items in the array.
//  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection (collection) {
  console.log('In showCollection');
  console.log(`There are ${collection.length} albums in this collection`);
  for (let eachAlbum of collection) {
    console.log(`${eachAlbum.title} by ${eachAlbum.artist}, published in ${eachAlbum.yearPublished}`);
  }
}
console.log(collection.length);
//- Test the `showCollection` function.
showCollection(collection);
//- Add a function named `findByArtist`. This function should:
//  - Take in `artist` (a string) parameter//
//  - Create an array to hold any results, empty to start
//  - Loop through the `collection` and add any objects with a matching artist to the array.
//  - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist){
  let artistmatch = [];
  console.log(`Looking through collection for ${artist}.`);
  for (i = 0; i<collection.length; i++) {
    if (collection[i].artist === artist){
      artistmatch.push(collection[i]);
}
}
return artistmatch;
}
findByArtist('Luke');
console.log(findByArtist('Luke'));
showCollection(findByArtist('Luke'));
// function findByArtist(artist){
//   let artistmatch = [];
//   console.log(`Looking through collection for ${artist}.`);
//   for (i = 0; i<collection.length; i++) {
//     if (collection[i].artist === artist){
//     console.log('You have a match!!!');
//     artistmatch.push(collection[i]);
//     // adds the artist to array of artist matches
//   } else {
//     console.log(`${artist} does not match ${collection[i].artist}`);
//   } // returns the search negative
//  }
//  return artistmatch;
// }
//- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

//> When testing your functions, write all tests in the JavaScript file!


//### Stretch goals

//- Create a function called `search`. This function should:
//  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//  ```
//  { artist: 'Ray Charles', year: 1957 }
//  ```
//  - The returned output from `search` should meet these requirements:
//    - Return a new array of all items in the `collection` matching *all* of the search criteria.
//    - If no results are found, return an empty array.
//    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

//- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//  - Update `search` to allow a `trackName` search criteria.
//  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//```
//    TITLE by ARTIST, published in YEAR:
//    1. NAME: DURATION
//    2. NAME: DURATION
//    3. NAME: DURATION
//    TITLE by ARTIST, published in YEAR:
//    1. NAME: DURATION
//    2. NAME: DURATION
//```

//> Make sure to test all your code!
