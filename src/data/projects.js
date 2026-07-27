/**
 * @typedef {Object} Project
 * @property {string} title - Project title
 * @property {boolean} [featured] - Whether the project is featured
 * @property {string} type - Project category/type
 * @property {string} oneLiner - Catchy one-sentence description
 * @property {string} origin - Brief story behind the project
 * @property {string} techCallout - Key technical achievement or feature
 * @property {string} description - Detailed project description
 * @property {string[]} stack - List of technologies used
 * @property {string} live - Live demo URL
 * @property {string} github - GitHub repository URL
 * @property {string} screenshot - Path to screenshot asset
 * @property {string} bgColor - Background color for thumbnail container
 * @property {number} rotation - Initial card rotation angle
 */

/** @type {Project[]} */
export const projects = [
  {
    title: "Pixmart",
    featured: true,
    type: "FULL STACK PROJECT",
    oneLiner: "Digital Marketplace for Creators & Buyers.",
    origin: "Built to simplify buying and selling digital assets securely.",
    techCallout: "MERN + Payments",
    description:
      "A full-stack marketplace with JWT authentication, role-based access control, Cloudinary media storage, and Razorpay payment integration for secure digital asset transactions.",
    stack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Razorpay",
      "Tailwind CSS",
    ],
    live: "https://pixmart-client-side.vercel.app/",
    github: "https://github.com/rajak82001/pixmart-client",
    screenshot: "/assets/pixmart_screenshot.jpg",
    bgColor: "#0A0F1E",
    rotation: 1,
  },

  {
    title: "B2B Outreach Pipeline",
    featured: true,
    type: "BACKEND PROJECT",
    oneLiner: "Automated Lead Discovery & Outreach Pipeline.",
    origin: "Built to automate prospect research and cold email workflows.",
    techCallout: "Multi-API Automation",
    description:
      "Automates company discovery, lead enrichment, and personalized email outreach by integrating multiple APIs with retry logic, concurrency control, centralized logging, and structured data processing.",
    stack: [
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Axios",
      "Ocean.io",
      "Prospeo",
      "EazyReach",
      "Brevo",
    ],
    live: "",
    github: "https://github.com/rajak82001/intelligent-outreach-pipeline",
    screenshot: "/assets/B2B_outreach.jpg",
    bgColor: "#07111F",
    rotation: 2,
  },
    {
    title: "Dynamic Form Builder",
    featured: false,
    type: "FRONTEND PROJECT",
    oneLiner: "Build Dynamic Forms with JSON Schema.",
    origin: "Built to simplify configurable form creation and rendering.",
    techCallout: "Schema-Driven UI",
    description:
      "A dynamic form builder supporting 5+ field types with real-time preview, JSON Schema-based rendering, and LocalStorage persistence to preserve form configurations across sessions.",
    stack: [
      "React",
      "TypeScript",
      "JSON Schema",
      "Tailwind CSS",
      "LocalStorage",
    ],
    live: "https://dynamic-form-builder-wheat.vercel.app/",
    github: "https://github.com/rajak82001/-dynamic-form-builder",
    screenshot: "/assets/dynamic_form_builder.jpg",
    bgColor: "#1A1F36",
    rotation: 1,
  },
  {
    title: "Habit Tracker",
    featured: false,
    type: "FRONTEND PROJECT",
    oneLiner: "Build Better Habits, One Day at a Time.",
    origin: "Built to explore scalable state management with Zustand.",
    techCallout: "Type-Safe State",
    description:
      "A responsive habit tracking application featuring daily and weekly habit management, centralized Zustand state, reusable Material UI components, and a clean TypeScript architecture.",
    stack: ["React", "TypeScript", "Zustand", "Material UI", "Vite"],
    live: "https://habit-tracker.vercel.app/",
    github: "https://github.com/rajak82001/habit-tracker-zustand",
    screenshot: "/assets/habit_tracker.png",
    bgColor: "#182235",
    rotation: -2,
  },

];
