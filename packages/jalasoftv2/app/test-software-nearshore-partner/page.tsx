import DynamicComponent from '@/app/ui/components/Common/DynamicComponent'
import { PageProps } from '@/utils/schema'
import { PAGE } from '@/constants/pages'
import Contentful from '@/services/contentful'

export default async function Home() {
  const page: PageProps = await Contentful.getDataByIdAndParent(
    PAGE,
    'test-software-nearshore-partner'
  )
  return (
    <main>
      {page?.sections?.map((block, index) => DynamicComponent(block, index))}
    </main>
  )
}
