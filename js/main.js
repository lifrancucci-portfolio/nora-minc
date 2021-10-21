function contentLoaded() {

  // HEADER TOGGLE
  const navToggle = document.getElementById("nav-toggle");
  // Make nav always start closed
  navToggle.checked = false;

  // LOADING SCREEN
  // const loading = document.getElementById("loading");
  //
  // function loadPage() {
  //   loading.classList.add("fadeout");
  //   loading.addEventListener("transitionend", function(e) {
  //     loading.style.display="none";
  //   })
  // }
  // loading.addEventListener("click", loadPage);

  // NAV LINKS
  const navLinks = document.querySelectorAll(".nav-link");
  const linkStream = document.getElementById("link-stream");
  const linkConcept = document.getElementById("link-concept");
  const linkBios = document.getElementById("link-bios");
  const linkCMP = document.getElementById("link-cmp");

  // Close nav on link click
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => { navToggle.checked = false})
  });

  // NAV SECTIONS
  const sectionStream = document.getElementById("stream");
  const sectionConcept = document.getElementById("concept");
  const sectionBios = document.getElementById("bios");
  const sectionCMP = document.getElementById("cmp");

  const sections = document.querySelectorAll(".section");

  // Make links bold when hovering over corresponding section
  function makeBold(evt) {
    let currentSection = evt.target.id;
    switch(true) {
      case currentSection == "stream":
        linkStream.style.fontWeight="bold";
        break;
      case currentSection == "concept":
        linkConcept.style.fontWeight="bold";
        break;
      case currentSection == "bios":
        linkBios.style.fontWeight="bold";
        break;
      case currentSection == "cmp":
        linkCMP.style.fontWeight="bold";
        break;
    }
  }
  // Return links to light
  function makeLight(evt) {
    let currentSection = evt.target.id;
    switch(true) {
      case currentSection == "stream":
        linkStream.style.fontWeight="lighter";
        break;
      case currentSection == "concept":
        linkConcept.style.fontWeight="lighter";
        break;
      case currentSection == "bios":
        linkBios.style.fontWeight="lighter";
        break;
      case currentSection == "cmp":
        linkCMP.style.fontWeight="lighter";
        break;
    }
  }

  sections.forEach((section) => { section.addEventListener("mouseover", makeBold)
  });
  sections.forEach((section) => { section.addEventListener("mouseleave", makeLight)
  });


}
