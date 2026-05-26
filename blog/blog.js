
const books = [
	
    
    {
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	},
    {
		id: 4,
		title: "The Professional Peel",
		date: "Sep 24, 2009",
		description:
		"This is a story about a strapping young banana who learns how to rise to the occasion to become the great Banana of Business.",
		imgSrc:
		"book-the peel.png",
		imgAlt: "Book cover for The Professional Peel",
		ages: "16-999",
		genre: "Banana",
		stars: "⭐⭐⭐⭐⭐"
	},
    {
		id: 5,
		title: "Mind Over Wood",
		date: "May 8, 1672",
		description:
		"This is the very real, not made up, totaly honest, not kidding, story of The Beaver King, Josh.",
		imgSrc:
		"book-mind over wood.png",
		imgAlt: "Book cover for Mind Over Wood",
		ages: "18-99",
		genre: "Autobiography",
		stars: "⭐⭐⭐⭐⭐"
	},
];

const booklist = document.getElementById('book-list');

books.forEach(books =>{

    const article = document.createElement('article');
    article.className = 'book';

    let html = `
    <div class="details">
                    <p class="date">Date: ${books.date}</p>
                    <p>Ages: ${books.ages}</p>
                    <p>Genre: ${books.genre}</p>
                    <p class="stars">Rating: ${books.stars}</p>
                </div>
                <div class="content">
                    <h2>${books.title}</h2>
                    <img src=" ${books.imgSrc}" alt="${books.imgAlt}">
                    <p>Description: ${books.description}</p>
                </div>
    `
    article.innerHTML = html;
    booklist.appendChild(article);
}) 




//<h2>${books.title}</h2>
    //<div class="details">
     ////   <p>Relesed Date: ${books.date}</p>
//        <p>Ages: ${books.ages}</p>
 //       <p>Genre: ${books.genre}</p>
 //       <p>Rating: ${books.stars}</p>
 //   </div>
  //  <img src=" ${books.imgSrc}" alt="${books.imgAlt}">
  //  <p>Description: ${books.description}</p>