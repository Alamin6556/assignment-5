Question-1:   What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:  getElementById fetches the first element that matches the given id. If there are multiple id's it will fetch the one that comes first.But if there is no element that matches the id it will return 'null'. On the other hand getElementsByClassName fetches every element that has the same class name and returns them in an array like html collection.

querySelector uses css selector to find elements.It returns the first value that matches the given selector. On the contrary querySelectorAll looks for all the elements that matches the given selector(id or class) and returns them as a nodelist.

----------------------------------------------------------------------------------------------------------------------

Question-2:  How do you create and insert a new element into the DOM?

Answer:  The steps for creating and inserting a new element into the DOM are:
1) Create element using document.createElement(). For example, newDiv=document.createElement('div')
2) Add content(text or attributes) to the new element. For this we can use newDiv.innerText= "Hi there"
3) Insert the element into a DOM element using appendChild or other methods. For example, const parent=document.getElementById('container');
   parent.appendChild('newDiv')

----------------------------------------------------------------------------------------------------------------------
Question-3:  What is Event Bubbling and how does it work ?

Answer:  Event bubbling is the process where an event starts from the innermost element that triggered it and then moves upward through its parent elements. For example, if a button inside a div is clicked, the click event first runs on the button, then on the div, and continues up until it reaches the document.

----------------------------------------------------------------------------------------------------------------------

Question-4:  What is Event Delegation in JavaScript? Why is it useful?

Answer:  Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements. Instead of adding listeners to every child, the event bubbles up to the parent, and the parent checks which child triggered it.

benefit:  It improves performance by reducing the number of event listeners, makes the code cleaner, and works well for dynamically added elements.

----------------------------------------------------------------------------------------------------------------------

Question-5:  What is the difference between preventDefault() and stopPropagation() methods?

Answer: The preventDefault() method stops the default action of an element, such as preventing a form from submitting or a link from opening. The stopPropagation() method stops the event from moving up (bubbling) or down (capturing) the DOM tree. In short, preventDefault() prevents the browser’s default behavior, on the other hand  stopPropagation() prevents the event from being passed to parent elements.
