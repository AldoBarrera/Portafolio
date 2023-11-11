import Error from 'pages/_error'
import DynamicLayout from 'layouts/DynamicLayout'
import utilsContenful from 'utils/contentful'
import { ERRORS } from 'constants/errors'
import Head from 'components/Common/Head'
import {
  PAGES,
  PAGE,
  GET_STATIC_PROPS,
  GET_STATIC_PATHS
} from 'constants/pages'
import ErrorManager from 'utils/error-manager'

function DynamicPage({ errorCode, DynamicLayoutData }: any) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (
    <>
      <Head page={DynamicLayoutData} />
      <DynamicLayout {...DynamicLayoutData} />
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const page = await utilsContenful.getDataById(PAGE, params.id)
    const currentError = await ErrorManager.getError(
      page,
      GET_STATIC_PROPS + ERRORS.CONTENTFUL_PAGE + params.id
    )
    if (!currentError.status) {
      return {
        props: { errorCode: false, DynamicLayoutData: page },
        revalidate: 1
      }
    } else {
      ErrorManager.throwError(currentError)
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.ID.name)
    if (currentError.status === 404) {
      return {
        notFound: true,
        revalidate: 1
      }
    }
    return {
      props: {
        errorCode: currentError.status,
        DynamicLayoutData: null
      },
      revalidate: 1
    }
  }
}

export async function getStaticPaths() {
  try {
    const data = await utilsContenful.getRootPages(PAGE)
    const currentError = await ErrorManager.getError(
      data,
      GET_STATIC_PATHS + ERRORS.CONTENTFUL_DATA + PAGES.ID.data
    )
    if (!currentError.status) {
      const paths = data.map((item) => {
        return {
          params: { id: item.slug }
        }
      })
      return {
        paths,
        fallback: 'blocking'
      }
    } else {
      ErrorManager.throwError(currentError)
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.ID.name)
    return {
      paths: [],
      fallback: true
    }
  }
}

export default DynamicPage
