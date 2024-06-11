// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
contentButton.addEventListener("click", function() {myName.innerHTML = 'burgers'});


// -- RETURN TO LESSON --


//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {myHobby.innerHTML = "boolin" });








// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
contentButton.addEventListener("keydown", function() {myLocation.innerHTML = "your mom"});
