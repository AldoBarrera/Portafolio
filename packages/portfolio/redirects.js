const redirectsList = [
  {
    source: '/jalasoft-bootcamps-latam',
    destination: '/bootcamps',
    permanent: true
  },
  {
    source: '/bootcamp_automation',
    destination: '/bootcamps/automation-testing',
    permanent: true
  },
  {
    source: '/qa-bootcamp-latam',
    destination: '/bootcamps/quality-assurance',
    permanent: true
  },
  {
    source: '/fundacion-fullstack-developer-intermedio',
    destination: '/bootcamps/fullstack-development',
    permanent: true
  },
  {
    source: '/devops-bootcamp-latam',
    destination: '/bootcamps/devops',
    permanent: true
  },
  {
    source: '/bootcampfullstackdevlatam2',
    destination: '/bootcamps/fullstack-development',
    permanent: true
  },
  {
    source: '/about',
    destination: '/about-us',
    permanent: true
  },
  {
    source: '/service/quality-assurance',
    destination: '/our-services/software-quality-assurance',
    permanent: true
  },
  {
    source: '/mobile-development-bootcamp-latam',
    destination: '/bootcamps/mobile-development',
    permanent: true
  },
  {
    source: '/social-impact',
    destination: '/about-us',
    permanent: true
  },
  {
    source: '/service/development-service',
    destination: '/our-services/software-development',
    permanent: true
  },
  {
    source: '/fundacion-fullstack-developer-intermedio2',
    destination: '/bootcamps/fullstack-development',
    permanent: true
  },
  {
    source: '/service/automation',
    destination: '/our-services',
    permanent: true
  },
  {
    source: '/bootcamp-salesforce-2',
    destination: '/bootcamps',
    permanent: true
  },
  {
    source: '/automation-testing-bootcamp2',
    destination: '/bootcamps/automation-testing',
    permanent: true
  },
  {
    source: '/salesforce-service',
    destination: '/our-services',
    permanent: true
  },
  {
    source: '/case_study/case-1',
    destination: '/projects',
    permanent: true
  },
  {
    source: '/nearshore-software-outsourcing-services',
    destination: '/our-services',
    permanent: true
  },
  {
    source: '/quality-assurance-services',
    destination: '/our-services/software-quality-assurance',
    permanent: true
  },
  {
    source: '/our_success/jane-doe-co-founder-of-webflow',
    destination: '/projects',
    permanent: true
  },
  {
    source: '/service/all-roles',
    destination: '/our-services',
    permanent: true
  },
  {
    source: '/it-staff-augmentation-services',
    destination: '/our-services',
    permanent: true
  },
  {
    source: '/case_study/case-2',
    destination: '/projects',
    permanent: true
  },
  {
    source: '/inscripcion-meetup',
    destination: '/bootcamps',
    permanent: true
  },
  {
    source: '/bootcamp-salesforce-3',
    destination: '/bootcamps',
    permanent: true
  },
  {
    source: '/mobile-development-bootcamp-latam-esp',
    destination: '/bootcamps/mobile-development',
    permanent: true
  },
  {
    source: '/mobile-development-bootcamp-latam-eng',
    destination: '/bootcamps/mobile-development',
    permanent: true
  },
  {
    source: '/qa-bootcamp-latam-eng',
    destination: '/bootcamps/quality-assurance',
    permanent: true
  },
  {
    source: '/bootcamp-salesforce-4',
    destination: '/bootcamps',
    permanent: true
  },
  {
    source: '/automation-testing-bootcamp-eng',
    destination: '/bootcamps/automation-testing',
    permanent: true
  },
  {
    source: '/our_success/auto-draft',
    destination: '/projects',
    permanent: true
  },
  {
    source: '/automation-testing-bootcamp-esp',
    destination: '/bootcamps/automation-testing',
    permanent: true
  },
  {
    source: '/bootcampfullstackdevlatam',
    destination: '/bootcamps/fullstack-development',
    permanent: true
  },
  {
    source: '/case-studies',
    destination: '/projects',
    permanent: true
  },
  {
    source: '/thank-you',
    destination: '/',
    permanent: true
  },
  {
    source: '/qa-bootcamp-latam-esp',
    destination: '/bootcamps/quality-assurance',
    permanent: true
  },
  {
    source: '/for-companies',
    destination: '/',
    permanent: true
  },
  {
    source: '/projects',
    destination: '/about-us/projects',
    permanent: true
  },
  {
    source: '/research-development',
    destination: '/about-us/research-development',
    permanent: true
  },
  {
    source: '/for-professionals',
    destination: '/careers',
    permanent: true
  },
  {
    source: '/work-culture',
    destination: '/careers',
    permanent: true
  },
  {
    source: '/careers/work-culture',
    destination: '/careers',
    permanent: true
  },
  {
    source: '/open-positions',
    destination: '/careers/open-positions',
    permanent: true
  },
  {
    source: '/bootcamps',
    destination: '/education/bootcamps',
    permanent: true
  },
  {
    source: '/bootcamps/fullstack-development',
    destination: '/education/bootcamps/fullstack-development',
    permanent: true
  },
  {
    source: '/bootcamps/devops',
    destination: '/education/bootcamps/devops',
    permanent: true
  },
  {
    source: '/bootcamps/automation-testing',
    destination: '/education/bootcamps/automation-testing',
    permanent: true
  },
  {
    source: '/bootcamps/quality-assurance',
    destination: '/education/bootcamps/quality-assurance',
    permanent: true
  },
  {
    source: '/bootcamps/mobile-development',
    destination: '/education/bootcamps/mobile-development',
    permanent: true
  },
  {
    source: '/bootcamps/fullstack-development/apply',
    destination: '/education/bootcamps/fullstack-development/apply',
    permanent: true
  },
  {
    source: '/bootcamps/devops/apply',
    destination: '/education/bootcamps/devops/apply',
    permanent: true
  },
  {
    source: '/bootcamps/automation-testing/apply',
    destination: '/education/bootcamps/automation-testing/apply',
    permanent: true
  },
  {
    source: '/bootcamps/quality-assurance/apply',
    destination: '/education/bootcamps/quality-assurance/apply',
    permanent: true
  },
  {
    source: '/bootcamps/mobile-development/apply',
    destination: '/education/bootcamps/mobile-development/apply',
    permanent: true
  },
  {
    source: '/education/bootcamps/fullstack-development',
    destination: 'https://jala.university/en/programs/bootcamps/fullstack-development-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/devops',
    destination: 'https://jala.university/en/programs/bootcamps/devops-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/automation-testing',
    destination: 'https://jala.university/en/programs/bootcamps/automation-testing-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/quality-assurance',
    destination: 'https://jala.university/en/programs/bootcamps/quality-assurance-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/mobile-development',
    destination: 'https://jala.university/en/programs/bootcamps/mobile-development-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/fullstack-development/apply',
    destination: 'https://jala.university/en/programs/bootcamps/fullstack-development-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/devops/apply',
    destination: 'https://jala.university/en/programs/bootcamps/devops-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/automation-testing/apply',
    destination: 'https://jala.university/en/programs/bootcamps/automation-testing-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/quality-assurance/apply',
    destination: 'https://jala.university/en/programs/bootcamps/quality-assurance-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/education/bootcamps/mobile-development/apply',
    destination: 'https://jala.university/en/programs/bootcamps/mobile-development-bootcamp/',
    basePath: false,
    permanent: false,
  },
  {
    source: '/projects/jalasoft-x-linq',
    destination: '/about-us/projects/jalasoft-x-linq',
    permanent: true
  },
  {
    source: '/about-us/projects',
    destination: '/about-us/case-studies',
    permanent: true
  },
  {
    source: '/about-us/projects/jalasoft-x-linq',
    destination: '/about-us/case-studies/jalasoft-x-linq',
    permanent: true
  },
  {
    source: '/about-us/projects/automation-for-reducing-backlog',
    destination: '/about-us/case-studies/automation-for-reducing-backlog',
    permanent: true
  },
  {
    source: '/about-us/projects/devops-resource-optimization',
    destination: '/about-us/case-studies/devops-resource-optimization',
    permanent: true
  },
  {
    source: '/about-us/projects/devops-and-automation',
    destination: '/about-us/case-studies/devops-and-automation',
    permanent: true
  },
  {
    source: '/about-us/projects/end-user-documentation',
    destination: '/about-us/case-studies/end-user-documentation',
    permanent: true
  },
  {
    source: '/about-us/projects/crm-enhance',
    destination: '/about-us/case-studies/crm-enhance',
    permanent: true
  },
  {
    source: '/about-us/projects/automation-framework',
    destination: '/about-us/case-studies/automation-framework',
    permanent: true
  }
];

async function redirects() {
  return redirectsList;
}

module.exports = {
  redirects
}
