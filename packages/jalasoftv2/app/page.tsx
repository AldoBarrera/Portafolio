import DynamicComponent from '@/app/ui/components/Common/DynamicComponent'
import { PageProps } from '@/utils/schema'
import { PAGE } from '@/constants/pages'
import Contentful from '@/services/contentful'

export default async function Home({
  params
}: {
  params: { slug: string; id: string }
}) {
  const { id } = params
  const page: PageProps = await Contentful.getDataByIdAndParent(PAGE, id)
  return (
    <main>
      {page?.sections?.map((block, index) => DynamicComponent(block, index))}
    </main>
  )
}
