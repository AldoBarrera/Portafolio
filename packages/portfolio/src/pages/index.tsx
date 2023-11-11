import Error from 'pages/_error'
import DynamicLayout from 'layouts/DynamicLayout'
import utilsContenful from 'utils/contentful'
import { ERRORS } from 'constants/errors'
import { PAGES, PAGE, GET_STATIC_PROPS, revalidateTime } from 'constants/pages'
import ErrorManager from 'utils/error-manager'
import Head from 'components/Common/Head'

function DynamicPage({ errorCode, DynamicLayoutData }: any) {
  if (errorCode) {
    return <Error />
  }

  return (
    <>
      <Head page={DynamicLayoutData} />
      <DynamicLayout {...DynamicLayoutData} />
    </>
  )
}

export async function getStaticProps() {
  try {
    const page = await utilsContenful.getDataById(PAGE, PAGES.HOME.data)
    const currentError = await ErrorManager.getError(
      page,
      GET_STATIC_PROPS + ERRORS.CONTENTFUL_PAGE + PAGES.HOME.data
    )
    if (!currentError.status) {
      return {
        props: { errorCode: false, DynamicLayoutData: page },
        revalidate: revalidateTime
      }
    } else {
      ErrorManager.throwError(currentError)
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.ID.name)
    return {
      props: {
        errorCode: currentError.status,
        DynamicLayoutData: null
      },
      revalidate: 1
    }
  }
}

export default DynamicPage
