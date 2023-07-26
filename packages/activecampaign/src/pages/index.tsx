import Error from 'pages/_error'
import ACLayoutPipelines from 'layouts/ACLayout/ACLayoutPipelines'
import { getPipelines } from 'utils/activeCampaign/resources'
import { PAGES } from 'constants/pages'
import ErrorManager from 'utils/error-manager'

function AC({ errorCode, pipelines }: any) {
  if (errorCode) {
    return <Error />
  }

  return (
    <>
      <div>fix bug</div>
      <ACLayoutPipelines pipelines={pipelines} />
    </>
  )
}

export async function getStaticProps() {
  try {
    const pipelines = await getPipelines()
    return {
      props: { errorCode: false, pipelines },
      revalidate: 1
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.ID.name)
    return {
      props: {
        errorCode: currentError.status,
        OpenPositionsLayoutData: null,
        page: null
      },
      revalidate: 1
    }
  }
}

export default AC
