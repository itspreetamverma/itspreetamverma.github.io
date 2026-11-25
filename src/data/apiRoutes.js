// Response bodies of the mock API. Field names are snake_case because they are API data.
export const apiRoutes = {
  '/api/developer': {
    full_name: 'Preetam Verma',
    job_title: 'Full Stack Developer',
    company_name: 'Dhariwal Buildtech Private Limited',
    started_on: '2026-01',
    location: 'Hisar, Haryana',
    languages_spoken: ['Hindi', 'English'],
  },
  '/api/skills': {
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    frontend: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    backend: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'Authentication'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Docker'],
  },
  '/api/projects': {
    projects: [
      { project_name: 'VoultBull', repo_url: 'https://github.com/itspreetamverma/VoultBull' },
      { project_name: 'Markets', repo_url: 'https://github.com/itspreetamverma/Markets-main' },
      { project_name: 'Food Delivery', repo_url: 'https://github.com/itspreetamverma/food_delhivery' },
    ],
  },
};
