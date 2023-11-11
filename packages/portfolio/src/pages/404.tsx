import Error from 'pages/_error'
import utilsContenful from 'utils/contentful'
import { PAGES, PAGE, GET_STATIC_PROPS } from '../constants/pages'
import { ERRORS } from 'constants/errors'
import ErrorManager from 'utils/error-manager'

const MyCustom404Page = ({ errorCode }) => {
  if (errorCode) {
    return <Error />
  }
  return <></>
}
export async function getStaticProps() {
  try {
    const page = await utilsContenful.getDataById(
      PAGE,
      PAGES.PAGE_NOT_FOUND.path
    )
    const currentError = await ErrorManager.getError(
      page,
      GET_STATIC_PROPS + ERRORS.CONTENTFUL_PAGE + PAGES.PAGE_NOT_FOUND.path
    )
    if (!currentError.status) {
      return {
        props: { errorCode: false, DynamicLayoutData: page }
      }
    } else {
      ErrorManager.throwError(currentError)
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.PAGE_NOT_FOUND.path)
    return {
      props: { errorCode: 404, DynamicLayoutData: null }
    }
  }
}

export default MyCustom404Page
