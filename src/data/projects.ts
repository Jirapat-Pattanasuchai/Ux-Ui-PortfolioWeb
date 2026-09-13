export type Project = {
  slug: string;
  title: string;
  kicker: string;
  overview: string;
  role: string;
  responsibilities: string[];
  problem: string;
  process: string;
  outcome: string;
  tone: string;
  image?: string;
};

export const projects: Project[] = [
  {
  slug: 'ux-ui-designer-intern',
  title: 'UX/UI Designer Intern',
  kicker: 'Carmen Software / Blueledgers Guidance Platform',

  overview:
    'Designed a dedicated web platform to help Blueledgers users understand and navigate complex system features through automated testing demonstrations.',

  role:
    'I was responsible for the overall UI/UX design and interface layouts across all platform modules and features.',

  responsibilities: [
    'Developed the overall UI/UX direction for the platform.',
    'Designed interfaces for different modules and features.',
    'Created and refined UI components.',
  ],

  problem:
    'I used the existing Blueledgers design system as the foundation for the new platform, preserving its color palette and typography to maintain familiarity for existing users. From there, I designed interfaces across various modules, focusing on clarity and ease of use. Throughout the process, I refined the designs based on company feedback to ensure the final interface aligned with both user needs and business goals.',

  process:
    'I started by understanding the existing Blueledgers interface and identifying how the new platform could fit naturally within the existing system. I then structured the information architecture and designed the main user flows and interfaces for each module. After creating the initial UI, I refined the layouts, components, and interactions based on feedback to improve clarity, consistency, and usability across the platform.',

  outcome:
    'The Guidance Platform design was successfully completed according to project goals, fully prepared for handoff to the internal development team for live implementation.',

  tone: 'blue',

  image: '/projects/ux-ui-designer-intern/carmen-logo.jpeg',
},

  {
    slug: 'qa-tester-intern',
    title: 'QA Tester Intern',
    kicker: 'Carmen Software / Blueledgers Automated Testing',
    overview:
      'The Blueledgers Automated Testing Project was an internship project at Carmen Software focused on developing an automated testing framework for the Blueledgers Purchasing & Inventory Management platform and laying the foundation for a future user guidance tool.',
    role:
      'I was responsible for end-to-end automated test creation and execution using Playwright as a QA Tester intern at Carmen Software.',
    responsibilities: [
      'Studying and mastering all modules and functions within the Blueledgers platform.',
      'Reviewing provided test scenarios for every module across the platform.',
      'Coding and executing automated test cases across all modules using Playwright.',
    ],
    problem:
      'The IT Support team faced a high volume of inquiries from users struggling with Blueledgers modules and features. The company needed an automated testing foundation to ensure software quality and support a future user guidance platform.',
    process:
      'The process focused on translating the company’s test scenarios into reliable automated scripts. I analyzed Blueledgers’ modules and workflows, planned the automation approach, and developed test cases for all modules using Playwright, with a focus on stability.',
    outcome:
      'The Automated Testing Suite was successfully developed and delivered to Carmen Software, featuring reliable Playwright test cases covering all platform modules. The suite runs consistently without errors and provides a foundation for future development of an Automated Guidance Platform.',
    tone: 'red',
    image: '/projects/qa-tester-intern/carmen-qa-logo.png'
  },

  {
    slug: 'calendar-website',
    title: 'Calendar Website',
    kicker: 'La-or Uthit School / Internship Project',
    overview:
      'The School Calendar Website was an internship project at La-or Uthit School, developed by a five-member team to create a dedicated platform for managing and accessing school activities. I was primarily responsible for the overall website design, including designing and developing the Login, Sign Up, and Manage Event features.',
    role:
      'I was responsible for the overall website design as part of a five-member development team.',
    responsibilities: [
      'Designing the overall website interface.',
      'Designing and developing the Login page.',
      'Designing and developing the Sign Up page.',
      'Designing and developing the Manage Event interface.',
      'Establishing the visual direction and color usage.',
      'Designing the interface based on the school’s requirements and user needs.',
    ],
    problem:
      'La-or Uthit School previously used Google Calendar, but it was difficult to use and did not fully meet the school’s needs. The school needed a dedicated calendar system to support its four branches and simplify viewing, managing, and sharing activities.',
    process:
      'The design process focused on creating a simple, user-friendly calendar based on the school’s needs, using colors to distinguish activities across four branches. It also supported event creation, viewing past activities, and adding or saving photos, with a friendly and approachable visual style suitable for a school environment.',
    outcome:
      'The School Calendar Website was successfully completed and delivered to La-or Uthit School for actual use, providing a dedicated calendar system that supports all four branches, branch-specific colors, past activities, and photo management.',
    tone: 'yellow',
    image: '/projects/calendar-website/calendar-logo.png',
  },

  {
    slug: 'aucc-2026-conference',
    title: 'AUCC 2026 Conference',
    kicker: 'NLP & Machine Learning / Text Comments Clustering',
    overview:
      'The Text Comments Clustering Project used NLP and Machine Learning methods, including TF-IDF, K-Means, and Agglomerative Clustering, to categorize YouTube® comments into meaningful feedback groups. As part of a two-member team, I handled the technical execution, including data preprocessing, model development, evaluation, and visualization.',
    role: 'My responsibilities included:',
    responsibilities: [
      'Processed and cleaned text data from YouTube® comments for clustering analysis.',
      'Applied TF-IDF vectorization to convert text into numerical vectors.',
      'Built K-Means and Agglomerative Clustering models to group comments by similarity.',
      'Evaluated performance using Silhouette Score and Elbow Method.',
      'Visualized clusters using TruncatedSVD and Matplotlib.',
    ],
    problem:
      'High volumes of unstructured YouTube comments make manual analysis and feedback extraction difficult. Without automated categorization, identifying recurring themes, summarizing reactions, and isolating noise is highly inefficient.',
    process:
      'The process involved cleaning and preprocessing comments, converting them into TF-IDF vectors, and applying K-Means and Agglomerative Clustering to form meaningful groups. Cluster quality was evaluated using the Elbow Method, Silhouette Score, and Dendrograms, with TruncatedSVD and Matplotlib used for visualization.',
    outcome:
      'The comment clustering pipeline was successfully completed and validated, demonstrating that TF-IDF with clustering algorithms can effectively categorize comments by similarity. K-Means enabled fast processing of large datasets, while Agglomerative Clustering provided detailed structural insights for automated text analysis.',
    tone: 'green',
    image: '/projects/aucc-2026-conference/aucc-logo.jfif',
  },

  {
    slug: 'online-karaoke-system',
    title: 'Online Karaoke System',
    kicker: 'Product Design & Machine Learning / Team Project',
    overview:
      'The Online Karaoke System with Content-Based Recommendation and User Data Clustering project aimed to develop an online karaoke platform supporting YouTube singing, voice recording, song queue management, and a Community Feed. Developed by a two-member team, I was primarily responsible for the overall website design, system architecture, and Machine Learning development for user clustering and song recommendations.',
    role:
      'I was responsible for the overall website design, system architecture, and machine learning development as part of a two-member team.',
    responsibilities: [
      'Designing the overall website interface and user experience.',
      'Creating system architecture diagrams, including Use Case, Sequence, Activity, Class, and ER diagrams.',
      'Developing user clustering models using TF-IDF, K-Means, and Agglomerative Clustering.',
    ],
    problem:
      'Existing online karaoke platforms often lack integrated voice recording, personalized song recommendations, and community features, making it difficult for users to record performances, discover songs that match their preferences, and interact with others. Therefore, this project focuses on addressing these issues by integrating these features into a single platform.',
    process:
      'The design process focused on creating an intuitive karaoke experience by integrating YouTube playback, voice recording, and song recommendations. User preferences were processed with TF-IDF, K-Means, and Agglomerative Clustering to provide personalized recommendations, while community feeds, ratings, and comments supported social interaction.',
    outcome:
      'The Online Karaoke System was successfully developed and functioned as intended. The final design provided a dedicated karaoke platform that supported singing via YouTube API, recording user voice, receiving personalized song recommendations based on user clustering, and engaging with other users through a community feed.',
    tone: 'purple',
    image: '/projects/online-karaoke-system/sdu-logo.png',
  },
];