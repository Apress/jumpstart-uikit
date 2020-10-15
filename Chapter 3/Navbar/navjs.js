//media query event handler
// Sets Media query criteria to max-width of 600px and adds a listener for keeping track of browser window size change.
// On line 7 this function has been called for setting media query action based on the current browser width
if(matchMedia){
    const mq = window.matchMedia( "(max-width:600px)" );
    mq.addListener(WidthChange); 
    WidthChange(mq) 
}
// This function will be triggered everytime the browser is resized
function WidthChange(mq){
    if(mq.matches){
         //if window width is less than or equal to 600px execute these lines of code
        $("#nav_toggle").removeClass("nav-none");  //makes toggler (burger icon) visible
        $("#nav_collapse").addClass("nav-none");//makes the normal expanded menu not visible
        //so you can only see the menu items when you click the toggler
        // Event handler added to the burger icon so that menu can be expanded and collapsed
    
        $("#nav_toggle").on('click', function(e){
            $("#nav_collapse").slideToggle(); // Slide the menu to full height containing the entire navigation if its hidden or vice versa
            $("#nav_collapse").css({"display": "block"}); // Set the visibility of the menu  to be visible
        })
    }else{
         //if window width is greater than 600px the else condition will be triggered
        $("#nav_toggle").addClass('nav-none'); // Hide the burger menu icon
        $("#nav_collapse").removeClass('nav-none'); //Show normal expanded navigation menu 
    }
}
