const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Clear existing content inside 'question' element
  question.innerHTML = "";

  // Set new text content
  question.textContent = "YIPEEE! 😘";

  // Set new src for the 'gif' element
  gif.src = "https://media.giphy.com/media/yMVmIu9UwqLfyhZoyZ/giphy.gif"; // Replace with your actual GIF URL

  // Creating a container div for the new content
  const container = document.createElement("div");

  // Creating a paragraph element
  const paragraphElement = document.createElement("p");

  // Creating an anchor (link) element
  const anchorElement = document.createElement("a");
  anchorElement.href = "2ndpage.html"; // Replace with the actual link URL
  anchorElement.textContent = "Click here";

  // Appending the anchor element to the paragraph
  paragraphElement.appendChild(anchorElement);

  // Appending the paragraph to the container
  container.appendChild(paragraphElement);

  // Appending the container to the 'question' element
  question.appendChild(container);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
