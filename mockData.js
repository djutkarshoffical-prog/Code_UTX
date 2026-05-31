// Initial Mock Database Seed Data for Internship Tracker
const INITIAL_MOCK_DATA = {
  users: [
    {
      id: "admin-1",
      email: "admin@internship.com",
      password: "admin123",
      role: "admin",
      name: "Siddharth Mehta",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "mentor-1",
      email: "mentor1@internship.com",
      password: "mentor123",
      role: "mentor",
      name: "Vikram Sharma",
      title: "Tech Lead, Web Engineering",
      domain: "Web Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "mentor-2",
      email: "mentor2@internship.com",
      password: "mentor123",
      role: "mentor",
      name: "Priya Patel",
      title: "Senior Product Designer",
      domain: "UI/UX Design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "mentor-3",
      email: "mentor3@internship.com",
      password: "mentor123",
      role: "mentor",
      name: "Rajeev Verma",
      title: "Tech Lead, Python Full Stack",
      domain: "Python Full Stack",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: "student-1",
      email: "student1@internship.com",
      password: "student123",
      role: "student",
      name: "Rohan Das",
      domain: "Web Development",
      mentorEmail: "mentor1@internship.com",
      mentorStatus: "Active",
      progress: 68,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
      startDate: "2026-05-01"
    },
    {
      id: "student-2",
      email: "student2@internship.com",
      password: "student123",
      role: "student",
      name: "Sneha Reddy",
      domain: "UI/UX Design",
      mentorEmail: "mentor2@internship.com",
      mentorStatus: "Active",
      progress: 45,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      startDate: "2026-05-01"
    },
    {
      id: "student-3",
      email: "student3@internship.com",
      password: "student123",
      role: "student",
      name: "Kabir Malhotra",
      domain: "Web Development",
      mentorEmail: "mentor1@internship.com",
      mentorStatus: "Active",
      progress: 25,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
      startDate: "2026-05-10"
    }
  ],
  tasks: [
    // Tasks for Rohan Das (student-1)
    {
      id: "task-101",
      title: "Set up Project Boilerplate & Tailwind Configuration",
      description: "Initialize the React-Vite project, configure path aliases, install TailwindCSS, and set up the custom theme configuration aligned with our visual identity guidelines.",
      assignedTo: "student1@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-05-08",
      status: "Completed",
      submission: {
        text: "Project set up successfully. Created components layout and configured theme. Repository URL below.",
        links: ["https://github.com/rohan-das/intern-boilerplate"],
        submittedAt: "2026-05-07"
      },
      feedback: "Excellent setup. Folder organization is extremely neat. Approved!"
    },
    {
      id: "task-102",
      title: "Implement Authentication Views & Routing Guards",
      description: "Create standard Login, Registration, and Password Reset layouts. Set up routing guards to prevent unauthenticated access to the main dashboard screens.",
      assignedTo: "student1@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-05-15",
      status: "Completed",
      submission: {
        text: "Created all forms with client side validation. Integrated session verification logic.",
        links: ["https://github.com/rohan-das/intern-boilerplate/pull/2"],
        submittedAt: "2026-05-14"
      },
      feedback: "Forms validation looks robust. Micro-animations are responsive and feel smooth. Good job."
    },
    {
      id: "task-103",
      title: "Develop Interactive Kanban Board Core Logic",
      description: "Build a drag-and-drop task dashboard showing Column boards: Todo, In Progress, Review, Completed. Ensure persistent updates inside the database model.",
      assignedTo: "student1@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-05-28",
      status: "Pending Approval",
      submission: {
        text: "Finished build using HTML5 Drag and Drop API. Dragging items across lists updates their status successfully in LocalStorage. Added responsive mobile drawer lists.",
        links: ["https://github.com/rohan-das/intern-boilerplate/pull/3"],
        submittedAt: "2026-05-24"
      },
      feedback: ""
    },
    {
      id: "task-104",
      title: "Integrate Realtime Charting Widgets via Charts JS",
      description: "Design custom visual reporting graphs mapping weekly effort distribution, task completion stats, and total time logged using dynamic vector canvases.",
      assignedTo: "student1@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-06-05",
      status: "Todo",
      submission: null,
      feedback: ""
    },

    // Tasks for Sneha Reddy (student-2)
    {
      id: "task-201",
      title: "Competitor Benchmark Analysis & User Journeys",
      description: "Conduct primary user research and wireframe typical personas navigating an internship tracking portal. Output high-fidelity Figma user journeys mapping student activities.",
      assignedTo: "student2@internship.com",
      assignedBy: "mentor2@internship.com",
      dueDate: "2026-05-10",
      status: "Completed",
      submission: {
        text: "Completed user journey maps and wireframes. Attached my Figma prototype link containing full layouts.",
        links: ["https://figma.com/file/sneha-internship-project"],
        submittedAt: "2026-05-09"
      },
      feedback: "Persona definition is highly detailed. I love the visual polish. Excellent work, Sneha!"
    },
    {
      id: "task-202",
      title: "Create Glassmorphic Color Palette & Component System",
      description: "Define typographic scales, harmonious neon overlays, button styling, and layout containers to deliver a clean glassmorphism design system.",
      assignedTo: "student2@internship.com",
      assignedBy: "mentor2@internship.com",
      dueDate: "2026-05-20",
      status: "Pending Approval",
      submission: {
        text: "Finished building the complete Design System component library in Figma, matching the magenta glow requirements.",
        links: ["https://figma.com/file/sneha-design-tokens"],
        submittedAt: "2026-05-19"
      },
      feedback: ""
    },
    {
      id: "task-203",
      title: "Design Student Portal Interactive Mockups",
      description: "Flesh out UI designs for student dashboards, report templates, task lists, and messaging pages across Desktop and Mobile viewports.",
      assignedTo: "student2@internship.com",
      assignedBy: "mentor2@internship.com",
      dueDate: "2026-06-01",
      status: "In Progress",
      submission: null,
      feedback: ""
    },

    // Tasks for Kabir Malhotra (student-3)
    {
      id: "task-301",
      title: "Database Architecture Schema Design",
      description: "Design relational database schema mapping Users, Portals, Tasks, weekly logs, and Chats. Include foreign key indexing strategy and query optimizations.",
      assignedTo: "student3@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-05-18",
      status: "Completed",
      submission: {
        text: "Created SQL DDL script and DB diagram screenshot. Prepared database schema for PostgreSQL.",
        links: ["https://github.com/kabir-m/backend-tracker/blob/main/db.sql"],
        submittedAt: "2026-05-17"
      },
      feedback: "Solid ERD. Please make sure we index the studentId and assignedBy fields to optimize dashboard loads."
    },
    {
      id: "task-302",
      title: "Express Backend REST API & DB Boilerplate",
      description: "Create an Express server, connect to a database layer, structure route controllers, and write standard CRUD endpoints for tasks and users.",
      assignedTo: "student3@internship.com",
      assignedBy: "mentor1@internship.com",
      dueDate: "2026-05-30",
      status: "In Progress",
      submission: null,
      feedback: ""
    }
  ],
  weeklyLogs: [
    {
      id: "log-1",
      studentId: "student1@internship.com",
      weekNumber: 1,
      startDate: "2026-05-01",
      endDate: "2026-05-07",
      summary: "First week focused on onboarding, code standard reviews, and setting up the main repository template with build configs.",
      hoursLogged: 40,
      blockers: "Minor delays setting up global environment variables, resolved on Day 3 with mentor help.",
      submittedAt: "2026-05-07",
      status: "Approved",
      feedback: "Great start. Onboarding checklist is complete. Maintain this momentum."
    },
    {
      id: "log-2",
      studentId: "student1@internship.com",
      weekNumber: 2,
      startDate: "2026-05-08",
      endDate: "2026-05-14",
      summary: "Developed the authentication screen modules. Implemented layout components and routing guard logic to secure endpoints.",
      hoursLogged: 42,
      blockers: "None. Work went smoothly according to schedule.",
      submittedAt: "2026-05-14",
      status: "Approved",
      feedback: "Approved. Make sure login tokens persist in sessionStorage."
    },
    {
      id: "log-3",
      studentId: "student1@internship.com",
      weekNumber: 3,
      startDate: "2026-05-15",
      endDate: "2026-05-21",
      summary: "Building the Kanban board module, setting up custom drag listeners, and integrating workspace states.",
      hoursLogged: 38,
      blockers: "Encountered mobile scrolling issues while dragging. Need to refine touch handlers.",
      submittedAt: "2026-05-21",
      status: "Needs Revision",
      feedback: "Please fix the mobile touch scrolling issue before approving. Tasks should not prevent page scroll unless actively held."
    },
    {
      id: "log-4",
      studentId: "student2@internship.com",
      weekNumber: 1,
      startDate: "2026-05-01",
      endDate: "2026-05-07",
      summary: "Completed domain benchmark research, user personas, and initial design systems styling requirements.",
      hoursLogged: 35,
      blockers: "None.",
      submittedAt: "2026-05-07",
      status: "Approved",
      feedback: "Excellent documentation."
    }
  ],
  chats: [
    {
      id: "msg-1",
      from: "mentor1@internship.com",
      to: "student1@internship.com",
      message: "Hey Rohan, welcome aboard! How are you finding the project codebase?",
      timestamp: "2026-05-02T10:00:00Z"
    },
    {
      id: "msg-2",
      from: "student1@internship.com",
      to: "mentor1@internship.com",
      message: "Hello Vikram! The codebase structure makes perfect sense. I am currently setting up the dependencies and Tailwind configuration.",
      timestamp: "2026-05-02T10:15:00Z"
    },
    {
      id: "msg-3",
      from: "mentor1@internship.com",
      to: "student1@internship.com",
      message: "Perfect. Let me know if you run into any permission issues with our private packages.",
      timestamp: "2026-05-02T10:30:00Z"
    },
    {
      id: "msg-4",
      from: "student1@internship.com",
      to: "mentor1@internship.com",
      message: "Will do. I will submit the setup tasks by tomorrow EOD.",
      timestamp: "2026-05-02T10:35:00Z"
    },
    {
      id: "msg-5",
      from: "student1@internship.com",
      to: "mentor1@internship.com",
      message: "Hi Vikram, I have submitted the Kanban task for approval. Please let me know if you have any feedback on the mobile drawer layout.",
      timestamp: "2026-05-24T18:00:00Z"
    }
  ],
  pairingRequests: []
};
