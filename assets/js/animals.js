const picsumAnimals = [
  {
    id: 237,
    title: 'Gup Gup',
    description:'Picture of a pupper',
    width: 300,
    height: 300,
    pathURL: 'assets/images/sm/237.jpg',
    linkURL: "https://picsum.photos/id/237/300/300",
    photocredit: 'Bob the builder',
    ceditURL: 'https://bobthebuilder.com'
  },
  {
    id: 433,
    title: 'Winney the pooh',
    description:'big ol bear nose',
    width: 300,
    height: 300,
    pathURL: 'assets/images/sm/433.jpg',
    linkURL: "https://picsum.photos/id/433/300/300",
    photocredit: 'bear r us',
    ceditURL: 'https://bearsrus.com'
  },
  {
    id: 577,
    title: 'Elks ruining my plans',
    description:'Elk standing beside a bush',
    width: 300,
    height: 300,
    pathURL: 'assets/images/sm/577.jpg',
    linkURL: "https://picsum.photos/id/577/300/300",
    photocredit: 'elk the beholder',
    ceditURL: 'https://elkthebeholder.com'
  },
  {
    id: 582,
    title: 'Coyote loves you',
    description:'coyote little trickster stalking prey',
    width: 300,
    height: 300,
    pathURL: 'assets/images/sm/582.jpg',
    linkURL: "https://picsum.photos/id/582/300/300",
    photocredit: 'All about Coyote',
    ceditURL: 'https://allaboutcoyote.com'
  },
  {
    id: 593,
    title: 'Sad tiger no zoo',
    description:'tiger behind a chain link fence',
    width: 300,
    height: 300,
    pathURL: 'assets/images/sm/593.jpg',
    linkURL: "https://picsum.photos/id/593/300/300",
    photocredit: 'Free the tigers',
    ceditURL: 'https://freethetigers.com'
  },
  
];
const images = document.querySelector('.gallery');
let pictures = '';
// 1. Create a function `handleItem()` that accepts the array `item` (the Picsum image id) as a parameter
picsumAnimals.forEach(function(item){
   pictures = pictures + `<figure><a href="${item.linkURL}"><img src="assets/images/sm/${item.id}.jpg" alt="${item.description}"></a><figcaption>${item.title}</figcaption></figure>`;
}) 
images.innerHTML = pictures
// 2. In this new function, take the Picsum image id and create a valid img element that's 300px x 300px
// <img src="https://picsum.photos/id/[imageId]/300/300" alt="Lorem Picsum Image">

// 3. Using a method of your choice, output the image to `index.html` so that a gallery of all images is displayed on the page

// 4. Using Array.forEach(): loop through each Picsum image id, invoking handleItem() for each item.