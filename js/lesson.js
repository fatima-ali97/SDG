let quizDone = false;

function openSection(sectionId) {
  const title = document.getElementById("title");
  const video = document.getElementById("video");
  const desc = document.getElementById("desc");
  const text = document.getElementById("text");

  title.innerHTML = "";
  video.innerHTML = "";
  desc.innerHTML = "";
  text.innerHTML = "";

  switch (sectionId) {
    case "intro":
      title.innerHTML = "Welcome to Web Development!";
      desc.innerHTML = `
        <div class="box">
          <h3>Introduction</h3>
          <p>This course will teach you the foundations of modern web development. 
          You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. 
          Let's get started with HTML!</p>
        </div>`;
      break;
case "l1":
      title.innerHTML = "Lesson 1: Introduction to Web Development";
      video.innerHTML =
       '<iframe width="560" height="315" src="https://www.youtube.com/embed/ysEN5RaKOlA?si=uCxKl4EY8B7l1ezH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      desc.innerHTML =
        `<div class="box"><h3>Description</h3>
          Web development, or website development, is everything that goes into developing, making, and maintaining a website.</div>`;
      text.innerHTML =
        `<div class="box"><h3>Lesson</h3>
          <p>You'll learn the foundational concepts of web development, and the essential technologies and tools required to build websites from scratch.</p></div>`;
      break;


    case "l2":
      title.innerHTML = "Lesson 2: Introduction to HTML";
      video.innerHTML =
       '<iframe width="560" height="315" src="https://www.youtube.com/embed/FQdaUv95mR8?si=mHbkEPXQXEMRHbhv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      desc.innerHTML =
        `<div class="box"><h3>Description</h3>
          <p>HTML is the structure of the web. It defines elements like paragraphs, headings, links, and images using tags.</p></div>`;
      text.innerHTML =
        `<div class="box"><h3>Lesson</h3>
          <p>You'll learn the basics of HTML, from how to structure an HTML document to how to use some of the most common HTML elements. Like headers, paragraphs, links, images and more.</div>`;
      break;

    case "l3":
      
	  title.innerHTML = "Lesson 3: CSS styling";
	  video.innerHTML =
	  '<iframe width="560" height="315" src="https://www.youtube.com/embed/1PnVor36_40?si=TStzgC9Db2bHxwCF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      desc.innerHTML =
        `<div class="box"><h3>Description</h3>
          <p>CSS is a language used to style HTML elements on web pages. It defines how elements are displayed, including layout, colors, fonts, and other properties.</p></div>`;
      text.innerHTML =
        `<div class="box"><h3>Lesson</h3>
          <p> You'll be introduced to various CSS properties and techniques, such as styling text, adjusting layouts, and applying colors.</p></div>`;
      break;

    case "l4":
	if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML = "Lesson 4: Javascript basics";
      video.innerHTML =
	  '<iframe width="560" height="315" src="https://www.youtube.com/embed/xwKbtUP87Dk?si=dpS3Viyys6XIjCsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
	  desc.innerHTML =
        `<div class="box"><h3>Description</h3>
          <p>JavaScript is a scripting or programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more on web pages.</p></div>`;
      text.innerHTML =
        `<div class="box"><h3>Lesson</h3>
          <p>learn essential JavaScript concepts such as variables, data types, operators, and functions. </p></div>`;
      break;

    
      case "q1":
  title.innerHTML = "Quiz 1!";
  desc.innerHTML = `
    <div class="box">
      <h3>Question:</h3>
      <p>What tag is used to create a hyperlink in HTML?</p>
      <div class="quiz-option" onclick="checkAnswer(this, false)">&lt;p&gt;</div>
      <div class="quiz-option" onclick="checkAnswer(this, false)">&lt;div&gt;</div>
      <div class="quiz-option" onclick="checkAnswer(this, true)">&lt;a&gt;</div>
      <div class="quiz-option" onclick="checkAnswer(this, false)">&lt;img&gt;</div>
    </div>`;
  break;

     

    

    case "l5":
      if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML = "Lesson 5: Make a simple website using HTML, CSS and Javascript";
      desc.innerHTML =
        `<div class="box"><h3>Description</h3>
          <p>Combining HTML, CSS, and JavaScript code into one file helps improve webpage loading speed and performance, as well as better code management and maintenance.</p></div>`;
      text.innerHTML =
        `<div class="box"><h3>Lesson</h3>
          <p>create a simple website from scratch, starting with HTML, then applying CSS, and finally adding interactivity with JavaScript.</p></div>`;
      video.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/beJ8fDbX9vs?si=FswkQLui3b4X-uY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      break;

    case "f1":
      if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML = "Final Review";
      desc.innerHTML =
        `<div class="box"><h3>Review Time!</h3>
          <p>You've reached the final review. Go over all the lessons and prepare for your final challenge!</p></div>`;
      break;

    default:
      break;
  }
}
function checkAnswer(option, isCorrect) {
  
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => {
    opt.classList.remove('correct', 'incorrect');
    opt.style.pointerEvents = ""; 
  });

  if (isCorrect) {
    option.classList.add('correct');
    quizDone = true;
    
    options.forEach(opt => opt.style.pointerEvents = "none");
    alert(" Correct! You can now access the next lessons.");
  } else {
    option.classList.add('incorrect');
    
    setTimeout(() => {
      option.classList.remove('incorrect');
    }, 1000);
    alert(" Incorrect. Try again!");
  }
}



function handleQuizSubmit() {
  const selected = document.querySelector('input[name="q1"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  if (selected.value === "a") {
    alert("Correct! You can now access the next lessons.");
    quizDone = true;
  } else {
    alert("Incorrect. Try again!");
  }
}
