

const socialMediaLinks = document.querySelectorAll(".social-media-icons li a");

socialMediaLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
});
