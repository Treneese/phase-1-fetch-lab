// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then(json=> renderBooks(json))
//   }
//  ////.then(()renderBooks(reading 'then'));
// //.then((data) => renderBooks(name))
// // .then(response => response.json())
// // .then(result => alert(JSON.stringify(name)))
// // .then((resp)=> resp.json())
// //.then((data)=>renderBookTitles((name)))
// function renderBooks(){
//   const main= document.querySelector('main');
//   books. forEach(book => {
//     const h2 =document.createElement(('h2'));
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//  });
//     //return render.json(name);
//   // .then(function (response) 
//   //bookName()
//   //}npm test

//   //renderBooks()
//     //  return response.json();
//    // })
//    // .then(function (data) {
//       // Use the data from the response to do DOM manipulation
//    // });////
//   //.then(function (data) {
//     // Use the data from the response to do DOM manipulation
 
// //fetchBooks()
//     //      renders book titles into the DOM by passing a JSON object to renderBooks():
//     //  TypeError: Cannot read properties of undefined (reading 'then')
// //"Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//    // },
//    // redirect: "follow", // manual, *follow, error
//    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//    // body: JSON.stringify(data), // body data type must match "Content-Type" header
//   //});
//   //return response.json(); // parses JSON response into native JavaScript objects
// ////}

// //postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   //console.log(data)
// //)}

// // function renderBooks(books) {
// //   const main = document.querySelector('main');
// //   books.forEach(book => {
// //     const h2 = document.createElement('h2');
// //     h2.innerHTML = book.name;
// //     main.appendChild(h2);

// //   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });
// renderBooks();
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})