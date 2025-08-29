Question-1:   What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:  getElementById fetches the first element that matches the given id. If there are multiple id's it will fetch the one that comes first.But if there is no element that matches the id it will return 'null'. On the other hand getElementsByClassName fetches every element that has the same class name and returns them in an array like html collection.
querySelector uses css selector to find elements.It returns the first value that matches the given selector. On the contrary querySelectorAll looks for all the elements that matches the given selector(id or class) and returns them as a nodelist.


