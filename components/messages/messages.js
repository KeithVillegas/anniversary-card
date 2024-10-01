
// document.addEventListener("DOMContentLoaded", () => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view');
//                 return;
//             }
//             entry.target.classList.remove('in-view');  
//         });
//     });

//     const hiddenElements = document.querySelectorAll('.animate'); // Select all hidden elements
//     hiddenElements.forEach((el) => observer.observe(el)); // Observe each hidden element
// });

// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
console.log("messages.js loaded")
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        console.log("FLAG1")
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');

          console.log("UOWEBFONWEIN")
          return;
		}
		entry.target.classList.remove('in-view');
        console.log("FLAG2")
	  });
	});

	// Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));

}); 