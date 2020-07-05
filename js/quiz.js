var score = 0; //a public variable to save the score

function selection() { //This would get the user choice of what quiz they like
  selected = removeCheck();
  if (selected == "history") { //if selected is history call history function
    document.getElementById("select").style.visibility = 'hidden'; //make this submit button hidden
    history();
  } else if (selected == "html") { //if selected is html call html function
    document.getElementById("select").style.visibility = 'hidden'; //make this submit button hidden
    html();
  } else if (selected == "css") { //if selected is css call css function
    document.getElementById("select").style.visibility = 'hidden'; //make this submit button hidden
    css();
  } else if (selected == "script") { // else call the script function
    document.getElementById("select").style.visibility = 'hidden'; //make this submit button hidden
    script();
  } else { //else if not selected is show warnig;
    checking();
  }
}

function removeCheck() { //removes what is selected and gets the value selected.
  var choice = document.getElementsByName("answer"); //This array holds all the elements names "answer"
  for (var i = 0; i < choice.length; i++) { //this is a for loop used to go through those elements named "answer"
    if (choice[i].checked) { //This is asking if the choice is checked
      var selected = choice[i].value; //If choice is checked then selected should hold the value of what was selected.
      choice[i].checked = false; //set its to false to clear check boxes
    }
  }
  return selected;
}

function checking() { //this function checks to see if radio inputs are checked if not it would display a warning
  var choice = document.getElementsByName("answer");
  var check = false; //set to false
  for (var i = 0; i < choice.length; i++) { //go throught check boxes
    if (choice[i].checked) { //checking if any is checked
      check = true; //if check set to true.
    }
  }
  if (check == false) { //checks if its false, they havent checked
    var warning = document.getElementById("warn");
    document.getElementById("quizField").contains(warning) ? document.getElementById("warn").remove() : warn(); //prevent it from occuring all the time
  }
}

function warn() {
  var para = document.createElement("p"); //create a new paragraph element
  para.setAttribute("id", "warn") //set id to warning
  var node = document.createTextNode("Please select an answer"); //This would create a text node be place inside the paragraph element
  para.appendChild(node); //This would add text into the element
  var element = document.getElementById("quizField"); //This would hold the div element
  element.appendChild(para); //places the paragraph element into he div tag
}

function history() {
  var questions = ["What is Memex?", "Who developed ARPARENT?", "What does WWW stand for?", "Why is it important to separate appearance and content?",
    "What does HTML stand for?"
  ]; //These are the questions for history
  var answers = {
    one: ["A theoretical-hype-text system", "A html language", "A computer system", "A CSS language", ],
    two: ["US Agency Research Project Academy", "The US Academy", "British Industrial Research", "US Advanced Research Project Agency", ],
    three: ["Wide Wide Web", "World Wide Web", "World Web Wide", "World World Wide", ],
    four: ["You can’t declare the style within the html", "Pretty to look at", "Maintenance", "It’s easier", ],
    five: ["Hot-text-mark-up-language", "Hide-text-maintain-language", "Hyper-text-main-language", "Hyper-text-mark-up-language", ],
  } //These are the answers for the questions
  var givenAnswers = ["", "", "", "", ""]; //varaiable to be used later to put users answers in

  document.getElementById("question").innerHTML = questions[0]; //Sets questions in the tag
  document.getElementById("answerOne").innerHTML = answers.one[0]; //gives the answer
  document.getElementById("answerTwo").innerHTML = answers.one[1]; //gives the answer
  document.getElementById("answerThree").innerHTML = answers.one[2]; //gives the answer
  document.getElementById("answerFour").innerHTML = answers.one[3]; //gives the answer

  givenAnswers[1] = quiz(document.getElementById('one'), document.getElementById('two'), questions[1], answers.two, "history"); //provides script answers
  document.getElementById('one').style.visibility = "visible"; //makes button visible
  givenAnswers[1] = quiz(document.getElementById('two'), document.getElementById('three'),  questions[2], answers.three, "history"); //provides script answers
  givenAnswers[2] = quiz(document.getElementById('three'), document.getElementById('four'), questions[3], answers.four, "html"); //provides script answers
  givenAnswers[2] = quiz(document.getElementById('four'), document.getElementById('five'), questions[4], answers.five, "css"); //provides script answers
  givenAnswers[2] = quiz(document.getElementById('five'), document.getElementById('finish'), questions[4], answers.five, "script"); //provides script answers

}

function html() {
  var questions = ["What does DTD stand for?", "Why are standards important?", "What does XML stand for?", "What is XML?",
    "What is the main difference between HTML and XHTML"
  ]; //These are the questions for html
  var answers = {
    one: ["Definition type Document", "Document type Definition", "Definition types Documents", "Defection type Document", ],
    two: ["Because they just are", "Making it easier to introduce new methods", "Long-term viability", "You cannot create the website without standards", ],
    three: ["Extension mark-up languages", "Xcode mark-up language", "Xenoblast mark-up language", "Extensible Mark-up Language", ],
    four: ["A programming language", "A set of rules that defines encoding of documents", "An integrated development environment", "A type of text-editor", ],
    five: ["Less code", "A style sheet", "A Stricter syntax", "You can define script in xhtml", ],
  } //These are the answers for the questions
  var givenAnswers = ["", "", "", "", ""]; //varaiable to be used later to put users answers in

  document.getElementById("question").innerHTML = questions[0]; //Sets questions in the tag
  document.getElementById("answerOne").innerHTML = answers.one[0]; //sets an answer corresponding to question
  document.getElementById("answerTwo").innerHTML = answers.one[1]; //sets an answer corresponding to question
  document.getElementById("answerThree").innerHTML = answers.one[2]; //sets an answer corresponding to question
  document.getElementById("answerFour").innerHTML = answers.one[3]; //sets an answer corresponding to question

  givenAnswers[1] = quiz(document.getElementById('one'), document.getElementById('two'), questions[1], answers.two, "html"); //provides script answers
  document.getElementById('one').style.visibility = "visible"; //make button visiable
  givenAnswers[1] = quiz(document.getElementById('two'), document.getElementById('three'),  questions[2], answers.three, "css"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('three'), document.getElementById('four'), questions[3], answers.four, "script"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('four'), document.getElementById('five'), questions[4], answers.five, "html"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('five'), document.getElementById('finish'), questions[4], answers.five, "css"); //provides answer user gaves

}

function css() {
  var questions = ["What does CSS stand for?", "What is CSS most defining elements?", "Select an example of an absolute measurement unit", "Select an example of an relative measurement unit ",
    "Why is the box model Important?"
  ]; //These are the questions for css
  var answers = {
    one: ["Creative Style Sheets", "Cascading style sheet", "Computer Style Sheets", "Computing sheets styled", ],
    two: ["Tags and attributes", "Forms and form controls", "Paragraphs", "Selectors and properties", ],
    three: ["Ems (em)", "Percentages (%)", "Millimetres (mm)", "Exes (ex)", ],
    four: ["Ems (em)", "Pixels (px)", "Points (pt)", "Millimetres (mm)", ],
    five: ["To specify the tags", "FOR layout structure", "To allow the browser to render the elements", "To allow the content to be seen", ],
  } //These are the answers for the questions
  var givenAnswers = ["", "", "", "", ""]; //varaiable to be used later to put users answers in

  document.getElementById("question").innerHTML = questions[0]; //Sets questions in the tag
  document.getElementById("answerOne").innerHTML = answers.one[0]; //gives the answer
  document.getElementById("answerTwo").innerHTML = answers.one[1]; //gives the answer
  document.getElementById("answerThree").innerHTML = answers.one[2]; //gives the answer
  document.getElementById("answerFour").innerHTML = answers.one[3]; //gives the answer

  givenAnswers[1] = quiz(document.getElementById('one'), document.getElementById('two'), questions[1], answers.two, "html"); //provides answer user gave
  document.getElementById('one').style.visibility = "visible"; //makes button visiable
  givenAnswers[1] = quiz(document.getElementById('two'), document.getElementById('three'),  questions[2], answers.three, "script"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('three'), document.getElementById('four'), questions[3], answers.four, "html");//provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('four'), document.getElementById('five'), questions[4], answers.five, "history");//provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('five'), document.getElementById('finish'), questions[4], answers.five, "html");//provides answer user gave

}

function script() {
  var questions = ["What is the main purpose of web forms?", "What does the get method do?", "What does the post method do?", "Select the client-side scripting language ",
    "What key word do you use to initialize a variable?"
  ]; //These are the questions for history
  var answers = {
    one: ["To make page look pretty", "To structure the content", "To collects the user’s information", "To provide inputs", ],
    two: ["Appends the data to the end of the URL query in a query string", "Appends the data to the body of the request", "Inserts the data into the form", "Submits to the CSS", ],
    three: ["Appends the data to the end of the URL query in a query string", "Submits to the CSS", "Specifies the data to be carried within the body of the request", "Inserts the data into the form", ],
    four: ["Java", "Python", "Java script", "Php", ],
    five: ["The data type of the variable", "Variable", "Bar", "Var", ],
  } //These are the answers for the questions
  var givenAnswers = ["", "", "", "", ""]; //varaiable to be used later to put users answers in

  document.getElementById("question").innerHTML = questions[0]; //Sets questions in the tag
  document.getElementById("answerOne").innerHTML = answers.one[0]; //gives the answer
  document.getElementById("answerTwo").innerHTML = answers.one[1]; //gives the answer
  document.getElementById("answerThree").innerHTML = answers.one[2]; //gives the answer
  document.getElementById("answerFour").innerHTML = answers.one[3]; //gives the answer

  givenAnswers[1] = quiz(document.getElementById('one'), document.getElementById('two'), questions[1], answers.two, "css"); //provides answer user gave
  document.getElementById('one').style.visibility = "visible"; //makes button visiable
  givenAnswers[1] = quiz(document.getElementById('two'), document.getElementById('three'),  questions[2], answers.three, "history"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('three'), document.getElementById('four'), questions[3], answers.four, "css"); //provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('four'), document.getElementById('five'), questions[4], answers.five, "css");//provides answer user gave
  givenAnswers[2] = quiz(document.getElementById('five'), document.getElementById('finish'), questions[4], answers.five, "script");//provides answer user gave

}

function quiz(button, nextbutton, question, answers, correct) {
  button.addEventListener('click', function(event) { //adds an event lister to button when clicked.
    var choice = document.getElementsByName("answer"); //This array holds all the elements names "answer"
    document.getElementById("question").innerHTML = question; //Sets questions in the tag
    document.getElementById("answerOne").innerHTML = answers[0]; //gives the answer
    document.getElementById("answerTwo").innerHTML = answers[1]; //gives the answer
    document.getElementById("answerThree").innerHTML = answers[2]; //gives the answer
    document.getElementById("answerFour").innerHTML = answers[3]; //gives the answer
    select = removeCheck(); //gets the answer the user provided
    if (select == correct) { //if answer is correct
      score++;  //it add a 1 to score
    }
    button.style.visibility = "hidden"; //makes button hidden
    nextbutton.style.visibility = "visible"; //then provides next button to be visible,
    if (document.getElementById("five").style.visibility=="hidden") {
      result(); //display results when five is hidden
    }
    return select; //return selected answer back
  });
}

function result() {
  var para = document.createElement("p"); //create a new paragraph element
  para.setAttribute("id", "result") //set id to warning
  var node = document.createTextNode("Your score is " + score); //This would create a text node be place inside the paragraph element
  para.appendChild(node); //This would add text into the element
  var element = document.getElementById("quizField"); //This would hold the div element
  element.appendChild(para); //places the paragraph element into he div tag
}
