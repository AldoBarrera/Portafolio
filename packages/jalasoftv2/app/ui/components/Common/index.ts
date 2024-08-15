import dynamic from 'next/dynamic'
const HeroV2 = dynamic(() => import('@/app/ui/components/Common/HeroV2'), {
  ssr: true
})
const HeroImage = dynamic(
  () => import('@/app/ui/components/Common/HeroImage'),
  {
    ssr: true
  }
)
const HeroButton = dynamic(
  () => import('@/app/ui/components/Common/HeroButton'),
  {
    ssr: true
  }
)
const FactsAndFiguresV2 = dynamic(
  () => import('@/app/ui/components/Common/FactsAndFiguresV2'),
  {
    ssr: true
  }
)
const ListItemsV2 = dynamic(
  () => import('@/app/ui/components/Common/ListItemsV2'),
  {
    ssr: true
  }
)
const MosaicAndText = dynamic(
  () => import('@/app/ui/components/Common/MosaicAndText'),
  {
    ssr: true
  }
)

const componentRegistry = {
  HeroV2,
  HeroImage,
  HeroButton,
  FactsAndFiguresV2,
  ListItemsV2,
  MosaicAndText
}

export default componentRegistry
