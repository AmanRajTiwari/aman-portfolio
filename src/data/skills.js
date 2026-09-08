/**
 * skills.js — Skills section data
 *
 * Organised into five categories. Edit here; Skills.jsx reads this file.
 * No expertise percentages. No fake years of experience.
 */

/** Primary tech categories */
export const categories = [
  {
    index: '01',
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive, interactive interfaces with modern JavaScript.',
    skills: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'Framer Motion',
    ],
  },
  {
    index: '02',
    id: 'backend',
    title: 'Backend',
    description: 'Designing and building server-side logic, APIs and authentication systems.',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'API Integration',
    ],
  },
  {
    index: '03',
    id: 'database',
    title: 'Database',
    description: 'Data modelling, schema design and working with relational and document databases.',
    skills: [
      'MongoDB',
      'MySQL',
      'Database Design',
    ],
  },
  {
    index: '04',
    id: 'cloud-tools',
    title: 'Cloud & Tools',
    description: 'Deploying applications, managing version control and working in professional dev environments.',
    skills: [
      'AWS',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
    ],
  },
  {
    index: '05',
    id: 'ai-dev',
    title: 'AI & Development',
    description: 'Building faster with AI.',
    isAI: true,   // flags the AI category for its distinct editorial treatment
    aiCopy:
      'I use AI-assisted development and vibe-coding workflows to prototype, debug, iterate and ship software faster — while keeping engineering decisions and code quality under control.',
    skills: [
      'AI-Assisted Development',
      'Vibe Coding',
      'AI Coding Tools',
      'Prompt Engineering',
      'Rapid Prototyping',
    ],
  },
]

/** MERN stack — shown as a connected sequence */
export const mernStack = [
  { letter: 'M', label: 'MongoDB',    role: 'Database' },
  { letter: 'E', label: 'Express.js', role: 'Server'   },
  { letter: 'R', label: 'React.js',   role: 'Frontend' },
  { letter: 'N', label: 'Node.js',    role: 'Runtime'  },
]
