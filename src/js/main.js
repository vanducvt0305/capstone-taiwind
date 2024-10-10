function getElement(selector) {
  return document.querySelector(selector);
}

let searchElement = getElement("#searchElement");
let xTicker = getElement("#xTicker");
let inputBox = getElement("#input-box");
let menuTicker = getElement("#menuTicker");
let overlay = getElement("#overlay");
let mobileMenu = getElement("#mobileMenu");
let offTicker = getElement("#offTicker");
let HomeExpandClose = getElement("#HomeExpandClose");
let homeExpand = getElement("#homeExpand");
let serviceExpandClose = getElement("#serviceExpandClose");
let serviceExpand = getElement("#serviceExpand");
let blogExpandClose = getElement("#blogExpandClose");
let blogExpand = getElement("#blogExpand");
let pageExpandClose = getElement("#pageExpandClose");
let pageExpand = getElement("#pageExpand");
searchElement.onclick = () => {
  inputBox.classList.remove("invisible");
  inputBox.classList.remove("opacity-0");
  inputBox.classList.add("opacity-100");
  inputBox.classList.add("visible");
};

xTicker.onclick = () => {
  inputBox.classList.remove("visible");
  inputBox.classList.add("invisible");
  inputBox.classList.remove("opacity-100");
  inputBox.classList.add("opacity-0");
};

menuTicker.onclick = () => {
  overlay.classList.toggle("hidden");
  mobileMenu.classList.remove("-right-full");
  mobileMenu.classList.add("right-0");
};
offTicker.onclick = () => {
  overlay.classList.toggle("hidden");
  mobileMenu.classList.remove("right-0");
  mobileMenu.classList.toggle("-right-full");
};

HomeExpandClose.onclick = () => {
  if (homeExpand.classList.contains("hidden")) {
    homeExpand.classList.remove("hidden");
    setTimeout(() => {
      homeExpand.classList.remove("opacity-0");
      homeExpand.classList.add("opacity-100");
    }, 10);
  } else {
    homeExpand.classList.remove("opacity-100");
    homeExpand.classList.add("opacity-0");
    setTimeout(() => {
      homeExpand.classList.add("hidden");
    }, 1000);
  }
};

serviceExpandClose.onclick = () => {
  if (serviceExpand.classList.contains("hidden")) {
    serviceExpand.classList.remove("hidden");
    setTimeout(() => {
      serviceExpand.classList.remove("opacity-0");
      serviceExpand.classList.add("opacity-100");
    }, 10);
  } else {
    serviceExpand.classList.remove("opacity-100");
    serviceExpand.classList.add("opacity-0");
    setTimeout(() => {
      serviceExpand.classList.add("hidden");
    }, 1000);
  }
};

blogExpandClose.onclick = () => {
  if (blogExpand.classList.contains("hidden")) {
    blogExpand.classList.remove("hidden");
    setTimeout(() => {
      blogExpand.classList.remove("opacity-0");
      blogExpand.classList.add("opacity-100");
    }, 10);
  } else {
    blogExpand.classList.remove("opacity-100");
    blogExpand.classList.add("opacity-0");
    setTimeout(() => {
      blogExpand.classList.add("hidden");
    }, 1000);
  }
};

pageExpandClose.onclick = () => {
  if (pageExpand.classList.contains("hidden")) {
    pageExpand.classList.remove("hidden");
    setTimeout(() => {
      pageExpand.classList.remove("opacity-0");
      pageExpand.classList.add("opacity-100");
    }, 10);
  } else {
    pageExpand.classList.remove("opacity-100");
    pageExpand.classList.add("opacity-0");
    setTimeout(() => {
      pageExpand.classList.add("hidden");
    }, 1000);
  }
};
