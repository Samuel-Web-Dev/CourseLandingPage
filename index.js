
  // Function to handle link clicks
  function handleLinkClick(event) {
    event.preventDefault();
    checkPrev();
    if (window.innerWidth > 768) {
      event.target.classList.add("activeLink");
    } else {
      event.target.classList.add("active-mobileLink");
    }

    // Get the target section's id from the link's href attribute
    const targetId = this.getAttribute("href").substring(1);

    // Use the scrollTo() method to scroll to the target section
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }

  // THE NAVBAR MENU

  let navLink = document.querySelectorAll(".nav__menu a");

  navLink.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  // // CODE FOR MOBILE NAVBAR
  let navLinkMobile = document.querySelectorAll(".nav__menu--mobile a");

  navLinkMobile.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  function checkPrev() {
    let activeClass = document.querySelector(".activeLink");
    let activeMobileClass = document.querySelector(".active-mobileLink");
    if (activeClass) {
      activeClass.classList.remove("activeLink");
    } else if (activeMobileClass) {
      activeMobileClass.classList.remove("active-mobileLink");
    }
  }

  // SHOW THE NAV BY CLICKING THE HAMBURGER MENU

  let hamburgerMenu = document.querySelector(".nav__register span");
  let mobileNav = document.querySelector(".mobile__navbar");
  let overlay = document.querySelector(".overlay");

  hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
  });



  // HANDLE PAYMENT SELECTION

  function handlePaymentSelection(selectElement) {
    const paymentInfo = document.querySelector(".payment-info");
    const payNowBtn = document.querySelector(".pay-now-btn");

    if (selectElement.value === "yes") {
      paymentInfo.style.display = "block";
      payNowBtn.style.display = "none";
    } else if (selectElement.value === "no") {
      paymentInfo.style.display = "none";
      payNowBtn.style.display = "block";
    } else {
      payNowBtn.style.display = "none";
      paymentInfo.style.display = "none";
    }
  }

  function showPaymentForm() {
    const paymentInfo = document.querySelector(".payment-info");
    paymentInfo.style.display = "block";
  }

  // Trigger initial state when the page loads
  window.addEventListener("load", function () {
    const registrationPaymentSelect = document.getElementById(
      "registrationPayment"
    );
    handlePaymentSelection(registrationPaymentSelect);
  });



  // HANDLE THE SCROLL EFFECT

  let scrollSections = document.querySelectorAll(".scroll-section");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function handleScroll() {
    scrollSections.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);