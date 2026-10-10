// TODO: replace `link` values with real demo/GitHub/case-study URLs once available.
export const projects = [
  {
    id: "AI Powered Customer Support Agent",
    name: "n8n RAG Chatbot",
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
    id: "whatsapp-inventory-agent",
    name: "WhatsApp Inventory Agent",
    tagline: "Stock checks and reorders, right from WhatsApp.",
    problem:
      "A small retail operation was tracking inventory across spreadsheets and phone calls, leading to stockouts and slow reorder decisions.",
    solution:
      "Shipped a WhatsApp-based AI agent that lets staff check stock levels, log sales, and trigger reorder alerts through natural-language messages — no separate app to learn.",
    result:
      "Reorder decisions moved from days to minutes, and stockouts on top-selling items dropped noticeably within the first month.",
    stack: ["n8n", "WhatsApp Business API", "PostgreSQL", "LLM Agent"],
    link: "#",
    image: "/projects/inventory-agent.png",
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
];
