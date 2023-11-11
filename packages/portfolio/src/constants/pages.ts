export const revalidateTime = parseInt(process.env.REVALIDATE_TIME) || 1
export const PAGE = 'page'
export const THANKYOU = 'thankYou'
export const GET_STATIC_PROPS = 'getStaticProps -'
export const GET_STATIC_PATHS = 'getStaticPaths -'
export const JALASOFT_LOGO = {
  src: '/img/Jala-University-Color.png',
  alt: 'Jalasoft logo'
}
export const PAGES = {
  BLOG: {
    name: 'Blog',
    data: 'blog',
    path: 'blog'
  },
  AUTHOR_ID: {
    name: 'Author ID',
    data: 'authors',
    path: 'author'
  },
  PAGE_NOT_FOUND: {
    path: 'page-not-found'
  },
  BLOG_ID: {
    name: 'Blog ID: ',
    data: 'blog',
    path: 'article'
  },
  SUBPAGE: {
    name: 'Subpage',
    data: 'subpage'
  },
  ID: {
    name: 'Id',
    data: 'All data Page'
  },
  HOME: {
    name: 'Home',
    data: 'home',
    path: 'home'
  }
}
