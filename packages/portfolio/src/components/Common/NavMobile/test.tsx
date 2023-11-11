import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import NavMobile from '.'
import { NavType } from 'components/Common/Nav'
const primaryLinks: Array<NavType> = [
  {
    label: 'For companies',
    url: '/for-companies'
  },
  {
    label: 'For professionals',
    url: '/for-professionals'
  },
  {
    label: 'Open positions',
    url: '/open-positions'
  }
]

const secondaryLinks: Array<NavType> = [
  {
    label: 'ABOUT US',
    url: '/about-us'
  },
  {
    label: 'OUR SERVICES',
    url: '/our-services',
    navItems: [
      {
        label: 'Development',
        url: '/our-services/software-development'
      },
      {
        label: 'Software QA',
        url: '/our-services/software-quality-assurance'
      },
      {
        label: 'Devops',
        url: '/our-services/devops'
      },
      {
        label: 'Other On-demand Services',
        url: '/our-services/on-demand-software-outsourcing'
      }
    ]
  },
  {
    label: 'PROJECTS',
    url: '/projects'
  },
  {
    label: 'WORK CULTURE',
    url: '/work-culture'
  },
  {
    label: 'R&D',
    url: '/research-development'
  },
  {
    label: 'JOIN OUR TEAM',
    navItems: [
      {
        label: 'Bootcamps',
        url: '/bootcamps'
      },
      {
        label: 'Careers',
        url: '/careers'
      }
    ]
  },
  {
    label: 'BLOG',
    url: '/blog'
  },
  {
    label: 'CONTACT',
    url: '/contact'
  }
]

describe('<NavMobile />', () => {
  it('should render NavMobile with the links correctly', () => {
    renderWithTheme(
      <NavMobile primaryLinks={primaryLinks} secondaryLinks={secondaryLinks} />
    )
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
  })
})
