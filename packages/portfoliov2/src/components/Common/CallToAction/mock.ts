const withButtonMock = {
  button: {
    label: 'Ready to optimize your Salesforce software? Get in touch',
    url: '#contactSalesforceConsulting'
  }
}

const withTitleButtonMock = {
  title: 'Let’s accelerate your digital world.',
  button: {
    label: 'Contact us',
    url: '/contact'
  }
}

const withTitleDescriptionButtonMock = {
  title: 'Building a LatAm Tech Community?',
  description:
    'We never stop looking for the most expert talents all across Latin America. No matter where you live, we want to meet eager learners who want to make things happen. Walk the extra mile with us!',
  button: {
    label: 'Join Jalasoft',
    url: '/careers'
  }
}

const withTitleDescriptionNoButtonMock = {
  title: 'Building a LatAm Tech Community?',
  description:
    'We never stop looking for the most expert talents all across Latin America. No matter where you live, we want to meet eager learners who want to make things happen. Walk the extra mile with us!'
}

const caseStudyCTA = {
  title: 'Interested in working with our renowned experts?',
  button: {
    label: 'Contact us today!',
    url: '/contact'
  }
}

const withTwoColumsTitleDescriptionButtonMock = {
  title: 'Why Jalasoft?',
  description:
    'Jalasoft is always looking for new Latin American talent. We are passionate about our mission for training and generating opportunities for engineers to work with renowned companies.',
  button: {
    label: 'Apply Now!',
    url: '/'
  }
}

const careersCallToActionMock = {
  title: 'Didn’t find the job you were looking for?',
  description:
    'Don’t worry, we are always looking for new talent! Fill out your resumé and we will reach out if we find an opportunity that matches your profile.',
  button: {
    label: 'Talk to us',
    url: '/contact'
  }
}

const readToCreateCallToActionMock = {
  title: 'Ready to create your next software solution?',
  button: {
    label: "Let's talk",
    url: '/'
  }
}

export const callToActionDevOpsBootcampApplyMock = {
  id: 'devops',
  title: 'Join Our Devops Bootcamp',
  button: {
    label: 'Apply now',
    url: '/bootcamps/devops/apply'
  }
}

export const callToActionQABootcampApplyMock = {
  id: 'qa',
  title: 'Join Our QA Bootcamp',
  button: {
    label: 'Apply now',
    url: '/bootcamps/qa/apply'
  }
}

export const callToActionBootcampApplyMock = [
  callToActionDevOpsBootcampApplyMock,
  callToActionQABootcampApplyMock
]

export const callToActionWhyJalasoftDevOpsBootcampMock = {
  id: 'devops',
  title: 'Why Jalasoft?',
  description:
    'Jalasoft is always looking for new Latin American talent. We are passionate about our mission for training and generating opportunities for engineers to work with renowned companies.',
  button: {
    label: 'Apply now',
    url: '/bootcamps/devops/apply'
  }
}

export const callToActionWhyJalasoftQaBootcampMock = {
  id: 'qa',
  title: 'Why Jalasoft?',
  description:
    'Jalasoft is always looking for new Latin American talent. We are passionate about our mission for training and generating opportunities for engineers to work with renowned companies.',
  button: {
    label: 'Apply now',
    url: '/bootcamps/qa/apply'
  }
}

export const callToActionWhyJalasoftMock = [
  callToActionWhyJalasoftDevOpsBootcampMock,
  callToActionWhyJalasoftQaBootcampMock
]

const preHirePaidTrainingCallToActionMock = {
  title: 'Are you ready to boost your education?',
  button: {
    label: 'Apply now',
    url: '/'
  }
}

const openPositionCTAMock = {
  title: 'Do you want to boost your career?\nDiscover our training programs',
  description:
    'Our training programs will help you secure a job at Jalasoft. This is an opportunity for people with previous development experience, good English skills, and a great desire to learn.',
  button: {
    label: 'Discover more',
    url: '/bootcamps'
  }
}

export {
  withButtonMock,
  withTitleButtonMock,
  withTitleDescriptionButtonMock,
  withTitleDescriptionNoButtonMock,
  caseStudyCTA,
  withTwoColumsTitleDescriptionButtonMock,
  careersCallToActionMock,
  readToCreateCallToActionMock,
  preHirePaidTrainingCallToActionMock,
  openPositionCTAMock
}
