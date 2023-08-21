const textElement = document.getElementById('typing-text');
const texts = [
  'I am full-stack developer  ',
 
];

let textIndex = 0;
let charIndex = 0;

function type() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }
}
// تفعيل تأثيرات AOS عند التمرير
AOS.init({
  once: true, // تأكيد عرض التأثير مرة واحدة فقط
  delay: 100, // تأخير في عرض التأثير بعد ظهور العنصر
});


function erase() {
  if (charIndex >= 0) {
    const currentText = texts[textIndex];
    textElement.textContent = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0; // Loop back to the first sentence
    }
    setTimeout(type, 500); // Delay before starting to type the next sentence
  }
}

// Start the typing effect
type();


function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    // Move to the next sentence
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0; // Restart from the beginning
    }
    charIndex = 0;
    setTimeout(type, 500); // Add a delay before typing the next sentence
  }
}

type();
const linkedinIcon = document.getElementById("linkedin-icon");
const facebookIcon = document.getElementById("facebook-icon");






document.getElementById("submitBtn").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    if (message) {
      const mailtoLink = "mailto:mohmadkordeya2@gmail.com?subject=New Message&body=" + encodeURIComponent(message);
      window.location.href = mailtoLink;
    } else {
      alert("الرجاء إدخال رسالتك قبل الإرسال.");
    }
  });
const toTopButton = document.getElementById('toTopButton');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
};

toTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function showDescription(skill) {
  const description = document.getElementById('description');
  description.textContent = `Learn more about ${skill}`;
}

// Add smooth scrolling behavior for internal links
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
});
