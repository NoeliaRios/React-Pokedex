function eraseArrow() {
  const aboutText = document.querySelector(".about-text").innerHTML;

  // document.body.innerHTML = document.body.innerHTML.replace(/\u00AD/g, "");
  console.log(aboutText);
  aboutText.replace(/\u00AD/g, " ");
}

export default eraseArrow;
