import React from 'react';

const fort =[
{title :'Shivneri',
imageUrl:"https://e1.pxfuel.com/desktop-wallpaper/342/837/desktop-wallpaper-shivneri-fort-the-birthplace-of-chhatrapati-shivaji-maharaj-shivneri.jpg",
link:'https://en.wikipedia.org/wiki/Shivneri_Fort'},
{title :'Raigad', 
imageUrl:"https://e1.pxfuel.com/desktop-wallpaper/952/756/desktop-wallpaper-raigad-fort.jpg",
link:'https://en.wikipedia.org/wiki/Raigad_Fort'},
{title :'Pratapgad',
imageUrl:"https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/Pratapgad-featured.jpg&w=500&h=400",
link:'https://en.wikipedia.org/wiki/Pratapgad'},
{title :'Murud Janjira', 
imageUrl:"https://www.holidify.com/images/cmsuploads/compressed/4073_20190430154959.jpg",
link:'https://en.wikipedia.org/wiki/Murud-Janjira'},
{title :'Vijaydurg',
 imageUrl:"https://i.pinimg.com/736x/bf/6b/53/bf6b5394ae0670f96dbd0772b2ac21c1.jpg",
link:'https://en.wikipedia.org/wiki/Vijaydurg_Fort'}
];

  const App= () => (
    <div>
      <h1 align="center">My Favorite Collection</h1>
      <div className="fort-list">
           {fort.map((fort, index) => (
          <div key={index} className="fort" >
            <img src={fort.imageUrl} alt='images' height="400px" width="400px"/>
            <h3>{fort.title}</h3>
            <a href={fort.link} target="blank" rel=""><span>Read More</span></a>
            </div>
            ))}
            </div>
            </div>
  );
  


  export default App;