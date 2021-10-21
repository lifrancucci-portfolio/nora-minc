function contentLoaded() {

  // LOADING SCREEN
  const loading = document.getElementById("loading");

  function loadPage() {
    // loading.style.display="none";
    loading.classList.add("fadeout");
    loading.addEventListener("transitionend", function(e) {
      loading.style.display="none";
    })
  }

  loading.addEventListener("click", loadPage);

  // Nav Links
  const linkStream = document.getElementById("link-stream");
  const linkConcept = document.getElementById("link-concept");
  const linkBios = document.getElementById("link-bios");
  const linkCMP = document.getElementById("link-cmp");

  // Nav Sections
  const sectionStream = document.getElementById("stream");
  const sectionConcept = document.getElementById("concept");
  const sectionBios = document.getElementById("bios");
  const sectionCMP = document.getElementById("cmp");

  const sections = document.querySelectorAll(".section");

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

  // EVENT LISTENERS
  // sectionStream.addEventListener("mouseover", makeBold);
  // sectionConcept.addEventListener("mouseover", makeBold);
  // sectionBios.addEventListener("mouseover", makeBold);
  // sectionCMP.addEventListener("mouseover", makeBold);
  sections.forEach((section) => { section.addEventListener("mouseover", makeBold)
  });
  sections.forEach((section) => { section.addEventListener("mouseleave", makeLight)
  });


}
