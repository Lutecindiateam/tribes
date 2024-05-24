// import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/lllllogo.png";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Bharat Online",
  copyrightYear: new Date().getFullYear(),
  about:
    "SVMM is tirelessly working in identification, categorization, treatment, rehabilitation of tribals affected by genetically transmitted Sickle Cell Anemia.",
  bottomLogo: footerImage.src,
  // footerBg: bg.src,
  // social: [
  //   {
  //     id: 1,
  //     href: "#",
  //     icon: "fa-twitter"
  //   },
  //   {
  //     id: 2,
  //     href: "#",
  //     icon: "fa-facebook-square"
  //   },
  //   {
  //     id: 3,
  //     href: "#",
  //     icon: "fa-dribbble"
  //   },
  //   {
  //     id: 4,
  //     href: "#",
  //     icon: "fa-instagram"
  //   }
  // ],
  exploreList: [
    {
      id: 1,
      href: "/health",
      title: "Health"
    },
    {
      id: 2,
      href: "/education",
      title: "Education"
    },
    {
      id: 3,
      href: "/social",
      title: "Social"
    },
    {
      id: 4,
      href: "/self",
      title: "Self Reliance"
    },
    {
      id: 5,
      href: "/culture",
      title: "Culture"
    },
    {
      id: 6,
      href: "#",
      title: ""
    },
    {
      id: 7,
      href: "/contact",
      title: "Contact"
    },
    {
      id: 8,
      href: "/contact",
      title: "Help"
    },
    {
      id: 9,
      href: "/contact",
      title: "Faqs"
    }
  ]
};

export default footerData;
