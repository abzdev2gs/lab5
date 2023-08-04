$(function(){

   const BOUNDARY = "div.boundary";
   const START = "#start";
   const END = "#end";
   const MAZE = "#maze";
   const CONTAINER= "div.container";
   const STATUS = "#status, #status2";

   var gameStarted = false;
   var isCreated = false;
   function lost()
   {
      $(BOUNDARY).css("background-color", "red");
         
      gameStarted = false;
      
      $(STATUS).text("You Lost");
   }

   $(MAZE).mouseleave(function(){
      if(gameStarted)
      {
         lost();
      }
   })

   $(BOUNDARY).mouseenter(function(){
    
      if(gameStarted)
      {
        
        lost();
      }
      
   });
   

   $(START).click(function(){
      gameStarted = true;
      
      $(BOUNDARY).css("background-color", "#eeeeee");
      console.log(isCreated); 
      if(!isCreated)
      {
         $('<p id="status2">' + " Game Started " + '</p>').appendTo("div.example");
         $(STATUS).text("Game started");
         isCreated = true;
      }
      else{
         $(STATUS).text("Game Started");
      }
      
      console.log("game started");
   })

   $(END).mouseenter(function(){
      if(gameStarted)
      {
        // alert("you won");
        
         $(BOUNDARY).css("background-color", "#88ff88");
         $(STATUS).text("You Won");
         gameStarted = false;
      }
      
   })

   $(CONTAINER).mouseenter(function(){
      if(gameStarted)
      {
         $(BOUNDARY).css("background-color", "red");
         $(STATUS).text("You Lost");
         gameStarted = false;
      }
   })
});


