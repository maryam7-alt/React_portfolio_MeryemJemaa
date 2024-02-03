import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "About Me",
    
  },
  {
    id: "clients",
    title: "Professional Experience",
  },
  {
    id: "product",
    title: "Education",
  },
  {
    id: "features",
    title: "Data Projects",
  },
  
];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Model the Solution",
    content:
      "Formulate a detailed hypothesis about how particular variables aff ect the outcome.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Analyze the data",
    content:
      "Run a statistical model, assess its appropriateness for the data, and repeat the process until a good fi t is found."
  },
  {
    id: "feature-3",
    icon: send,
    title: "Present and act on the results",
    content:
      "Use the data to tell a story to decision makers and stakeholders so that they will take action",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
    "Used Python to automate the different manual processes for forecasting demand and supply while managing ETL pipelines. Used Quicksight Dashboard to visualize results for evaluation.",
    name: "Business Data Analyst",
    title: "Amazon Luxembourg",
    date:"2022-2023",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "My First Experience in Customer Advisory as a data scientist worked on API's with GraphQL and the automation of text extraction for an insurance company using SAS Text Analytics tools",
    name: "Data Scientist intern",
    title: "SAS France",
    date:"2022",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Working in a Startup environment is such a great experience, Utik is a fintech startup in Tunisia and I hepled building a document data extraction tool with OpenCV and OCR algorithms to support its financial analysis.",
    
    name: "Data Analyst",
    title: "Utik",
    date:"2021",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Experience in Python",
    value: "+2",
  },
  {
    id: "stats-2",
    title: "Experience in Machine Learning Algorithms",
    value: "+2",
  },
  {
    id: "stats-3",
    title: "Experience in Customer Advisory",
    value: "+1",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];