function contentLoaded() {

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
  // const linkStream = document.getElementById("link-stream");
  const linkInfo = document.getElementById("link-info");
  const linkPersonas = document.getElementById("link-personas");
  const linkBitacora = document.getElementById("link-bitacora");

  // Close nav on link click
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => { navToggle.checked = false})
  });

  // NAV SECTIONS
  // const sectionStream = document.getElementById("stream");
  const sectionConcept = document.getElementById("info");
  const sectionBios = document.getElementById("personas");
  const sectionCMP = document.getElementById("bitacora");

  const sections = document.querySelectorAll(".section");

  // Make links bold when hovering over corresponding section
  function makeBold(evt) {
    let currentSection = evt.target.id;
    switch(true) {
      // case currentSection == "stream":
      //   linkStream.style.fontWeight="bold";
      //   break;
      case currentSection == "info":
        linkInfo.style.fontWeight="bold";
        break;
      case currentSection == "personas":
        linkPersonas.style.fontWeight="bold";
        break;
      case currentSection == "bitacora":
        linkBitacora.style.fontWeight="bold";
        break;
    }
  }
  // Return links to light
  function makeLight(evt) {
    let currentSection = evt.target.id;
    switch(true) {
      // case currentSection == "stream":
      //   linkStream.style.fontWeight="lighter";
      //   break;
      case currentSection == "info":
        linkInfo.style.fontWeight="lighter";
        break;
      case currentSection == "personas":
        linkPersonas.style.fontWeight="lighter";
        break;
      case currentSection == "bitacora":
        linkBitacora.style.fontWeight="lighter";
        break;
    }
  }

  sections.forEach((section) => { section.addEventListener("mouseover", makeBold)
  });
  sections.forEach((section) => { section.addEventListener("mouseleave", makeLight)
  });


}
