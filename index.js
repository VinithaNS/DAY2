//1. List 5 difference between Browser JS(console) v Nodejs
// Difference between Browser JS(console) v Nodejs:
// Node js :
//(i).Node doesn’t have a predefined “window” object cause it doesn’t have a window to draw anything.
// (ii).“location” object is related to a particular url; that means it is for page specific. So, node doesn’t require that.
// (iii).Ofcourse Node doesn’t have “document” object also, cause it never have to render anything in a page.
// (iv).Node has “global”, which is a predefined global object. It contains several functions that are not available in browsers, cause they are needed for server side works only.
// (v).“require” object is predefined in Node which is used to include modules in the app.



// Browser JS(console):
// (i).“window” is a predefined global object which has functions and attributes, that have to deal with window that has been drawn.
// (ii).“location” is another predefined object in browsers, that has all the information about the url we have loaded.
// (iii).“document”, which is also another predefined global variable in browsers, has the html which is rendered.
// (iv).Browsers may have an object named “global”, but it will be the exact one as “window”.
// (v).Browsers don’t have “require” predefined. You may include it in your app for asynchronous file loading.


// 2.Watch and summary 5 points:
// 1.PARSING HTML =
// (i).html is a forgiving by nature.
// (ii).parsing isn't straight forward.
//  (iii).can be halted.
// 2.Speculative parsing:
// (i).will look ahead.
// (ii).external images,scripts.
// 3.Reentrant
// (i).means  the parsing process can be intruptted
// 4.<script/>:at the bottom
// (i).parse uninterrupted
// (ii).faster to render.
// (iii).trade off
// 5.DOM node to render object
// (i).visual output
// (ii).can layout and paint.
//4. Execute the below code and write your description in txt file
// (a)typeof(1)-Number
// (b)typeof(1.1)-Number
// (c)typeof('1.1')-String
//(d) typeof(true)-Boolean
//(e) typeof(null)-Object
// (f)typeof(undefined)-Undefined
//(g) typeof([])-Object
// (h)typeof({})-Object
// (i)typeof(NaN)-Number
//5. Read what is prototype
//(i). Prototypes are the mechanism by which JavaScript objects inherit features from one another.