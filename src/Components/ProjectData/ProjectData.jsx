export const projects = [
  {
    title: "Subscription Billing System: Stripe + Supabase",
description: `A full subscription lifecycle (subscribe, renew, cancel, pause, resume) built with React (TSX), Supabase (Postgres, Auth, Edge Functions), and Stripe Billing. Webhooks keep the database in sync with Stripe, and a billing page lets users view and download invoices.

Scenarios
Subscribe and auto-renew: Stripe charges the first invoice and renews automatically each period. Webhooks record each payment and extend the user’s access.
Cancel: Cancellation takes effect at the end of the paid period, so the user keeps access until then and no renewal is created. Subscribing again creates a new row in subscriptions, which preserves history.
Pause: Pausing is blocked if the subscription is already canceled. The pause time is stored in pause_at, and Stripe’s pause_collection is set to void. At renewal, the invoice is created and voided, so the user isn’t charged. The subscription stays active, but access ends once the last paid period expires.
Resume: Resume is only allowed on a paused subscription.
Inside a paid period: the pause is removed and the same subscription continues.
After the paid period ended: a new billing cycle starts immediately (billing_cycle_anchor: "now"), and access is granted once the payment succeeds.
One subscription per user: A second subscription is rejected while one is still live, even if it’s scheduled to cancel.

Technical Highlights
Webhook-driven sync keeps subscriptions, payments, and Profile consistent with Stripe events.
manage-subscription Edge Function exposes cancel, pause, and resume, validates each against the current state, and returns clear error codes for the UI.
Access depends on confirmed payment, not on subscription status alone.
Tested with Stripe Test Clocks to simulate renewals, voided invoices, and resume after expiry.

`,
    image:
      "/signupStripe.png",
    tags: [
      "React.tsx",
      "Mui",
      "Tailwind",
      'supabase',
      'stripe',
    ],
    'demoUrl':  "https://www.loom.com/share/464fcd4114f1437c8bae4e5db11027ae",
    github: "https://github.com/ReemElhusseiny/payment-stripe",
    website: "https://payment-stripe-omega.vercel.app",
  },
  {
    title: "Interviewer website",
description: `This website allows interviewers to schedule and manage interviews, conduct live video and audio calls, and record interview sessions. It also enables candidates to solve coding questions in a VS Code–like environment while the interviewer watches in real time. All interview sessions and coding activities can be securely recorded and replayed for later review. The platform ensures a smooth and reliable interview experience for both interviewers and candidates.

Important Notice:
To test the platform properly, please open it in two separate browsers (for example, Chrome and Microsoft Edge), not just two tabs in the same browser. This is necessary because Clerk manages authentication sessions using cookies, and sharing the same browser session may cause conflicts between the interviewer and candidate accounts.

This allows you to:
- Log in as an interviewer in one browser.
- Log in as a candidate in another browser.
- Conduct and monitor the interview simultaneously.`,
    image:
      "/HomeInterviwer.png",
    tags: [
      "Next.js",
      "Tailwind",
      'Convex',
      'Clerk',
    ],
    github: "https://github.com/ReemElhusseiny/Interviewer-website.git",
    website: "https://interviewer-website-7yp7.vercel.app/",
  },
  {
    title: "Dashboard",
    description:
      'This freelance dashboard project features a fully responsive user interface designed to manage and visualize data effectively. Utilizing HTML, CSS, and Bootstrap, the dashboard implements a clean and modern UI that allows users to easily navigate through various functionalities. It includes tables that display essential data, filtering and search capabilities, ensuring that users can quickly find the information they need ',
    image:
      "/table.png",
    tags: [
      "Html",
      "Css",
      'Bootstap',
    ],
    github: "",
    website: "#",
  },
  {
    title: "Admin Dashboard & Merchant Dashboard",
    description:
     "Developed and maintained responsive Admin and Merchant Dashboards using React, providing a seamless experience across desktop, tablet, and mobile devices. Built reusable components and integrated RESTful APIs to deliver scalable and maintainable frontend solutions. Implemented single and bulk order creation, Excel (.xlsx) uploads, and shipping distance and cost calculations using Google Maps API. Integrated order tracking by Order ID, enabling users to retrieve order details and monitor delivery status, alongside captain location tracking using React Google Maps. Developed analytics dashboards featuring bar charts and tables to visualize order statuses, identify top- and low-performing areas, and analyze top- and low-performing captains and merchants. Improved large-table performance using Table Virtuoso and reduced unnecessary React re-renders through React DevTools Profiler. Implemented role-based access control (RBAC) to manage user permissions and access to dashboard features, along with PDF report generation and Excel export functionality for order and merchant transaction data.",
    image:
      "/dashboard.png",
    tags: [
      "Html",
      "Css",
      "Tailwind",
      "React.js",
      "Redux-toolkit",
      'jwt-decode',
      "Mui",
      'react-select',
      'Yup',
      "React-google maps",
      "React-pdf",
      "framer-motion",
    ],
    github: "",
    website: "",
  },
    // {
    //   title: "Portfolio",
    //   description:
    //     "This is my portfolio website to show my skills and highlight my projects and also provide you downloadable version of my resume on my portfolio website",
    //   image:
    //     "/portfolio.png",
    //   tags: [
    //     "Html",
    //     "Css",
    //     "Scss",
    //     "React.js",
    //     "Emailjs"  ,
    //   ],
    //   github: "https://github.com/ReemElhusseiny/Portfolio",
    //   website: "#",
    // },
    {
      title: "Paintings e-commerce",
      description:
      "Designed and developed a full-stack website that offers a comprehensive set of features to enhance user experience. The website allows users to create accounts and log in using JSON Web Tokens (JWT). Additionally, it incorporates email verification system to ensure account authenticity , users can easily find desired products or items by search and  add products to their cart and wishlist. users can make payments using either cash or Visa by stripe ,",
      image:
        "./paintings.png",
      tags: ["Html", "CSS" ,"React Js", "React-router-dom", "Axios", "React Hooks", "Django" , "PostgresSql","jwt", "Stripe payments"],
      category: "web app",
      github: "https://github.com/ReemElhusseiny/ITI-Graduation-Project",
      website: "https://www.linkedin.com/posts/reem-elhusseiny-aa81a4190_this-is-my-graduation-project-of-iti-i-activity-7112163991539384320-NElJ?utm_source=share&utm_medium=member_android",
    },
    // {
    //   title: "Furniture e-commerce",
    //   date: "Oct 2022 - Present",
    //   description:
    //     " The project allows customers to register and log in using a fake API for authentication. Once logged in, customers can add items to their cart, and the number of items in their cart is dynamically displayed using the useContext hook. I also implemented a dashboard to perform CRUD (Create, Read, Update, Delete) operations.",
    //   image:
    //     "/decor.gif",
    //   tags: [
    //     "Html", "CSS" , "Bootstrape", "React Js", "React-router-dom" , "Axios", "React Hooks", "Fake-api"
    //   ],
    //   github: "https://github.com/ReemElhusseiny/React.js",
    //   // website: "#",
    // },
    // {
    //   title: "Calculator",
    //   description:
    //     "Designed and developed simple JavaScript Calculator to perform mathematical operations like :- Addition, Subtraction, Multiplication, Division .",
    //   image:
    //     "/calculator.png",
    //   tags: ["Html", "CSS" , "JavaScript"],
    //   github: "https://github.com/ReemElhusseiny/Calculator-demo",
    //   website: "https://reemelhusseiny.github.io/Calculator-demo/(JSF-3)Calculator.html",
    // }
            
]