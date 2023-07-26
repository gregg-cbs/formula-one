# Formula 1

This was a fun project. I built it twice, the first using tailwind and the second using custom css, to make it realistic I did not reference or look at any code from the first attempt.

Time Spent (one): 3h:01m  
Time Spent (two): 2h:42m

If I had more time I would have: 
1. Added the table filtering dropdown
2. Added Ascending / Descending dropdown
3. Investigated table console errors
4. Kept scroll position when changing season year or team toggle
5. Added a message for when the API is down or data cannot be fetched
6. Added a better side scroller for the seasons tabs

## Tech
**React query** - i love react query, it makes api queries and state easy.  
**Tailwind** - makes styling quick and voids having abstacted css and tons of class names that are hard to keep track of.   

## Project One - Tailwind

Using tailwind makes it easy to apply styles but for a small project its not worth fully commiting to unless design doesnt have to be pixel perfect. A balance between a utility library such as tailwind and custom css would have been best. I used tailwind for this version because it is better for scale and has documentation any developer can read and understand.

## Project Two - SASS

I went for the fastest way to get this done - copy and paste css from figma. A small project might not need to worry about scale. SASS can be tough to manage as it scales - depending on contributing developers opinions and perspective. Also for other developers to jump in and understand things can be challenging.