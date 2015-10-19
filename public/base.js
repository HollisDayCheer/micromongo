console.log("Sanity Check: JS is working!");

 var EntryList = function(){
    this.numbPosts = 0; 
    this.items = [],

    this.clear = function(){ //resets the entire list
        this.items = [];
        $("#list-storer").clear();
    },
    this.removeItem = function(index){  //removes an item based on position + resests position
      $.ajax({
        url: "/api/posts/" +index ,
        type: "DELETE",
        success: console.log("success!")
      })
      this.items.pop();
      this.numbPosts--;
   },
   this.addItem =function(words){ //adds an item to the EntryList object
    console.log(words);
      $.ajax({
        url: "/api/posts",
        type: "POST",
        data: "{content: words}",
        success: function(data){
          console.log("addItem connects to server")
                }
      });
      //$("#list-storer").append("<li class= 'list-group-item "+listEntry.position+"'>"+ listEntry.text + "<button class = '"+listEntry.position+"'>X</button></br></li>");
     // $("#words").val(""); //clears the input
      this.numbPosts++;
  }
}



  var entry = function(words){ //entry object, once held html and position, but that was moved to EntryList. 
    this.text = words
  }
  var ourList = new EntryList();

  $(document).on("click", "button", function(e){
    console.log("click works on button");
    var myClass = $(this).attr('class');
    var classString = "." + myClass;
    $(classString).remove();
    console.log(myClass);
    ourList.removeItem(myClass);
  });


$(document).ready(function(){
  // code in here
  $("form").on("submit", function(e){
      console.log("form submit works")
       //on submission, adds the text to an entry and adds the entry to an Entrylist
      e.preventDefault();
      if($("#words").val()){
        var words = $("#words").val();
        ourList.addItem(words);
        $("#words").val("");
      }
  });

 
});


