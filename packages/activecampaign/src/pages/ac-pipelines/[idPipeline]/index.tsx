import Error from 'pages/_error'
import ACLayoutDeals from 'layouts/ACLayout/ACLayoutDeals'
import { getPipelineById } from 'utils/activeCampaign/resources'
import { PAGES } from 'constants/pages'
import ErrorManager from 'utils/error-manager'
import { getPipelines } from 'utils/activeCampaign/resources'

function AC({ errorCode, dealStages }: any) {
  if (errorCode) {
    return <Error />
  }

  return (
    <>
      <ACLayoutDeals dealStages={dealStages} />
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const pipeline = await getPipelineById(params.idPipeline)
    return {
      props: { errorCode: false, dealStages: pipeline.dealStages },
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

export async function getStaticPaths() {
  try {
    const { dealGroups } = await getPipelines()
    const paths = dealGroups.map((item) => {
      return {
        params: { idPipeline: item.id }
      }
    })
    return {
      paths,
      fallback: true
    }
  } catch (error) {
    const currentError = await ErrorManager.getError(error, '')
    ErrorManager.addError(currentError, PAGES.BOOTCAMPS_BOOTCAMP.name)
    return {
      paths: [],
      fallback: true
    }
  }
}

export default AC
