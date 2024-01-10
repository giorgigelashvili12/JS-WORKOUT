// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web Browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation
// Javascript can access the DOM to dynamically
// change the content, structure and style of a web page

// 
// document
//      |
//      |--(root element) <html>
//                      |
//                      |--- (element) <head>
//                      |           |
//                      |           |------ (element) title
//                      |                           |
//                      |--- (element) <body>       |
//                                  |           (text) "My title"
//                                  |
//                                  |
//                                  |-------- (element) <h1>
//                                  |              |
//                                  |          text) A heading
//                                  |        
//                                  |--------- (element) <a> ----- (attribute) href      
//                                                    |                                           
//                                              (text) "Link text"

document.title = "My website";
// chnages html title to this
document.body.style.backgroundColor = "black";
// black bg

console.dir(document);