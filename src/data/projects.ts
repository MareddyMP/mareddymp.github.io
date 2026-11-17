export interface Project {
  id: string;
  title: string;
  status: 'Live' | 'In progress' | 'Planned';
  summary: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
}

// Only list claims you can explain in an interview.
export const projects: Project[] = [
  {
    id: 'workflow-intake-hub',
    title: 'Workflow Intake Hub',
    status: 'Planned',
    summary:
      'An enterprise-style request intake and review system with accessible forms, a review queue, and an audit trail.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Python', 'FastAPI'],
    highlights: [
      'Typed API contracts shared between frontend and backend',
      'Keyboard and screen-reader friendly intake forms',
      'Audit history for every status change',
    ],
    repoUrl: 'https://github.com/MareddyMP/workflow-intake-hub',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    status: 'Live',
    summary:
      'An accessible, typed React portfolio built with Vite. Every project card is rendered from one data file.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: [
      'Skip link, visible focus states, and reduced-motion support',
      'Single typed data source for projects',
    ],
    repoUrl: 'https://github.com/MareddyMP/mareddymp.github.io',
    liveUrl: 'https://mareddymp.github.io',
  },
  {
    id: 'datasql',
    title: 'Datasql',
    status: 'In progress',
    summary: 'TODO: describe what Datasql does and what you built.',
    stack: ['TODO'],
    highlights: ['TODO'],
    repoUrl: 'https://github.com/MareddyMP/Datasql',
  },
];
