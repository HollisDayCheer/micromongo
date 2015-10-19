console.log("Sanity Check: JS is working!");

 var EntryList = function(){
    this.numbPosts = 0; 
    this.items = [],

    this.clear = function(){ //resets the entire list
        this.items = [];
        $("#list-storer").clear();
    },
    this.removeItem = function(index){  //removes an item based on position + resests position
      for(var i = index; i<this.items.length-1;i++){
         this.items[i]=this.items[i+1];
         this.items[i].position=i;
      }
      this.items.pop();
      this.numbPosts--;
      this.updateEntries();
   },
   this.addItem =function(listEntry){ //adds an item to the EntryList object
      listEntry.position = this.items.length;
      this.items.push(listEntry);
      $("#list-storer").append("<li class= 'list-group-item "+listEntry.position+"'>"+ listEntry.text + "<button class = '"+listEntry.position+"'>X</button></br></li>");
      $("#words").val(""); //clears the input
      entryString = "entry" + this.items.length;
      this.numbPosts++;
      this.updateCount();
  }
  this.updateCount = function(){
    $("h3").html("You have made " + this.numbPosts + " posts.");
  }
  this.updateEntries = function(){ //created this because was getting issues with html being off from the position of the actual html id
    //this entire thing ended up being unnecessary because I couldn't get my button clicks working :(
    $("#list-storer").empty();
    for(var i = 0; i<this.items.length;i++){
      $("#list-storer").append("<li class= 'list-group-item "+this.items[i].position+"'>"+ this.items[i].text + "<button class = '"+this.items[i].position+"'>X</button></li>");
    }$("li."+i).append("hahahaha");
  }

  this.updateHTML = function(){
    $("#list-storer").empty();
    for(var i = 0; i<this.items.length;i++){
      $("#list-storer").append(this.items[i].html);
    }
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
  $("form").on("submit", function(e){ //on submission, adds the text to an entry and adds the entry to an Entrylist
      e.preventDefault();
      if($("#words").val()){
        var words = $("#words").val();
        var newEntry = new entry(words); //numbPosts is outside variable that stores number of posts
        ourList.addItem(newEntry);
      }
  });

 
});


