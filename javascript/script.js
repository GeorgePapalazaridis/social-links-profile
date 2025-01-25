function createSocialButton(href, label) {
  const li = document.createElement("li");
  li.classList.add("button");

  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = label;

  li.appendChild(a);
  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = [
    { href: "https://github.com/GeorgePapalazaridis", label: "GitHub" },
    {
      href: "https://www.frontendmentor.io/profile/GeorgePapalazaridis",
      label: "Frontend Mentor",
    },
    {
      href: "https://www.linkedin.com/in/george-papalazaridis-865689120/",
      label: "LinkedIn",
    },
    { href: "https://x.com/GPapalazaridis", label: "Twitter" },
    {
      href: "https://www.instagram.com/i_ve_got_the_blues/",
      label: "Instagram",
    },
  ];

  const buttonList = document.querySelector(".social-card-btns");
  if (buttonList) {
    socialLinks.forEach((link) => {
      const button = createSocialButton(link.href, link.label);
      buttonList.appendChild(button);
    });
  } else {
    console.error("Social card buttons container not found.");
    document.body.innerHTML +=
      "<p>Sorry, the social card buttons cannot be displayed right now.</p>";
  }
});
