// TODO: replace `link` values with real demo/GitHub/case-study URLs once available.
export const projects = [
  {
    id: "shopper-platform",
    name: "Shopper",
    tagline: "A full e-commerce platform, built from the ground up.",
    problem:
      "Needed a production-grade e-commerce reference build: real auth, real inventory, real checkout — not another CRUD tutorial project.",
    solution:
      "Built a full-stack e-commerce platform with a React frontend and a Spring Boot + PostgreSQL backend, covering product catalog, cart, checkout, and order management end to end.",
    result:
      "A complete, deployable e-commerce system demonstrating full-stack ownership from database schema to UI polish.",
    stack: ["React", "Spring Boot", "PostgreSQL", "REST API"],
    link: "https://github.com/mathanraj1607/ECommerce_Enterprises",
    image: "/projects/shopper-ecom.png",
  },
  {
    id: "solar-wind-deployment-intelligence",
    name: "Solar-Wind Deployment Intelligence",
    tagline: "Optimizing renewable energy deployment through intelligent forecasting and automation.",
    problem:
      "Renewable energy providers struggle with predicting optimal deployment times for solar and wind resources, leading to inefficiencies and wasted potential.",
    solution:
      "Built an intelligent deployment system that uses weather forecasting, historical data, and machine learning to predict optimal times for solar and wind energy deployment, integrating with grid management systems.",
    result:
      "Increased energy yield by 30% and reduced operational costs through automated scheduling and real-time adjustments.",
    stack: ["Python", "TensorFlow", "AWS", "PostgreSQL", "React"],
    link: "#",
    image: "/projects/solar-wind-deployment-intelligence.png",
  },
  {
    id: "AI Powered Customer Support Agent",
    name: "n8n RAG Chatbot (Modified)",
    tagline: "A support chatbot that actually knows the product.",
    problem:
      "A growing SaaS team was fielding the same support questions over and over, and their docs were too scattered for a generic chatbot to answer accurately.",
    solution:
      "Built a retrieval-augmented n8n workflow backed by Supabase + pgvector: documents are chunked, embedded, and indexed, then queried live so every answer is grounded in the actual knowledge base instead of a model guessing.",
    result:
      "Cut first-response time on repetitive tickets from hours to seconds, with accurate, source-grounded answers instead of hallucinated ones.",
    stack: ["n8n", "Supabase", "pgvector", "OpenAI"],
    link: "#",
    image: "/projects/customer-support.png",
  },
  {
    id: "AI Powered personal Assistant",
    name: "AI Powered personal Assistant",
    tagline: "A personal assistant that can handle a wide range of tasks.",
    problem:
      "A busy professional needed a personal assistant that could handle scheduling, email management, and task organization, but existing solutions were too limited or required too much manual input.",
    solution:
      "Built a personal assistant using AI and natural language processing that can understand and execute a wide range of tasks, including scheduling meetings, managing emails, and organizing tasks.",
    result:
      "The personal assistant significantly reduced the user's workload, allowing them to focus on higher-priority tasks and improving overall productivity.",
    stack: [  "AI", "Natural Language Processing", "Task Management", "Email Automation"],
    link: "#",
    image: "/projects/personal-assistant.png",
  },
];
