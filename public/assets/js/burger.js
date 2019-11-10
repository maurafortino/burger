$(function () {
    $(".devour-it-btn").on("click", function () {
      var id = $(this).data("id");
      var notHungry = true;
  
      var burgerEaten = {
        devoured: notHungry
      }
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerEaten
      }).then(
        function () {
          console.log("changed devoured to", notHungry);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    var burgerArray = [
      "The Cauliflower's Cumin From Inside the House",
      "Gourdon-Hamsey",
      "The Silentil Night",
      "Poutine on the Ritz Burger",
      "Last of the Mo-jicama",
      "Cheeses Is Born",
      "Paranormal Pepper Jack-tivity",
      "Let's Give 'Em Something Shiitake 'Bout",
      "Onion Ring Around the Rosemary",
      "It's Fun to Eat at the rYeMCA",
      "A Good Manchego Is Hard to Find",
      " Parma Parma Parma Chameleon",
      "The Final Kraut Down",
      "Bohemian Radishy",
      "Blue Is the Warmest Cheese",
      "Cajun Gracefully",
      "If Looks Could Kale",
      "Chorizo Your Own Adventure",
      "Thank God It's Fried Egg",
      "A Leek of Their Own",
      "Santa Claus Is Cumin to Town",
      "The One Yam Band",
      "The Longest Chard",
      "Home for the Challah-Days",
      "I've Created a Muenster",
      " Olive and Let Die",
      "Pepper Don't Preach",
      "We're Here We're Gruyere, Get Used to It",
      "Sweet Chili O’Mine",
      "I Heartichoke You",
      "She's a Super Leek",
      "Eggers Can't Be Cheesers",
      "Poblano Picasso",
      "Beets of Burden",
      "The Human Polenta-pede",
      "Curd-fect Strangers",
      "Fig-eta Bout It"
    ];
  
    for (var i = 0; i < burgerArray.length; i++) {
      var li = $("<li>");
      li.text(burgerArray[i]);
      li.addClass("chosen-burger");
      li.attr("data-name", burgerArray[i]);
      li.attr("data-position", i);
      $("#burger-list").append(li);
    };
  
    $(document).on("click", ".chosen-burger", function () {
      var burgerName = $(this).attr("data-name");
      var position = $(this).attr("data-position");
  
      var addedBurger = {
        burger_name: burgerName,
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: addedBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
  
  
  
  
  