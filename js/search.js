var loggedResults = []; //used for later
var numSearch = 0; //used for counting number of searches

function searching() {
  document.getElementById('resultsBorder').style.visibility = "visible"; //make visable if function called
  if (numSearch > 0) {
    hide(); //if more than 1 go to hide
  }
  numSearch++; //incremenet by one

  var tags = document.getElementsByClassName("pSearch")  //get all p tags with tag name psearch
  var tagText = {}; //this would hold the tag as key as long with the text it holds
  for (i = 0; i < tags.length; i++) { //loops through each
    tagText[i] = tags[i].textContent.split(" "); //get the tag along with their context and turn the text to an array
  }

  var keys = Object.keys(tagText);
  var i = 0;
  /*this for loop is going through each key, then within each key is going through the array. The array stores the paragraphs
  content as arrays. The for loop provides a check to see if what was searched corresponds to the element in the array. if so the
  key is passed to the results. To provide what chapter the keyword is found in
  */
  for (var key in keys) { //goes through each key in our object
    for (i = 0; i < tagText[key].length; i++) { //then going through each array within the object
      if (document.getElementById("searchGo").value == tagText[key][i]) { //check if the input value is equal to any value in paragraph
        results(key, document.getElementById("searchGo").value); // passes the word searched along with key
      } else { //else false.
        false;
      }
    }
  }

}

function hide() {
  loggedResults = []; //makes loggedResults empty
  aTags = document.getElementsByTagName('a'); //get all documents
  for (i = 0; i < aTags.length; i++) { //for a in tags
    el = document.getElementsByTagName('a')[i] //hold an element a
    if (el.parentNode.getAttribute('class') == 'linkResults') { //check parnet node.
      el.style.display = "none"; //remove it from display
    }
  }
}

function results(key, word) { //this value takes of the key and word
  if (key in loggedResults) {
    return false; //do nothing
  } else { //else
    loggedResults.push(key); //add value to the key
    hreff = chooseHref(key); //find what the href should be
    var link = document.createElement('a'); //creates a new element a
    link.style.display = ""; //allow element to be displayed
    var linkText = document.createTextNode(word + " Found in " + hreff); //shows where the element was found
    link.appendChild(linkText); //add the link text as a child to the href
    link.setAttribute('href', hreff); //set the attribute of hreff
    var divv = document.createElement('div'); //create a new element called divv
    divv.setAttribute("class", "linkResults"); //set attribute class to linkResults
    divv.appendChild(link); //set the link to the child off the fiv
    document.getElementById('results').appendChild(divv); //append child
  }
}


function chooseHref(key) { //This find the href the key corresponds to.
  var href = "";
  if (key == 0) {
    href = "#ChapterI";
  } else if (key == 1) {
    href = "#ChapterII";
  } else if (key == 2) {
    href = "#ChapterIII";
  } else if (key == 3) {
    href = "#ChapterIV";
  } else {
    href = "#ChapterV";
  }

  return href; //returns herf
}

document.getElementById('cancel').addEventListener('click', function(event) { //when the button is clicked it hides the visable of
  document.getElementById('resultsBorder').style.visibility = "hidden"; //results border
});
