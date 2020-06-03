let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(4);
mountain(4);
flat(4)
return result;
}

/*the result is undefined. If we run landscape(), we get: 
landscape();
"____/''''\____"

The breakdown is this:

In the parent function landscape, result is an empty string. In landscape, the first function to run is flat(), which generates 4 ____. Next montain is run
that generates 1 /, 4 '''' and 1 \ to form a mountain. Then flat is run again to finish off the _____. We return result to get the full picture. 
The reason it works is due to scope where result is redefined differently in each function. 
*/
