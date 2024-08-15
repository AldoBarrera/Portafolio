import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/app/ui/components/Common/Hero'), {
  ssr: true
})

const componentRegistry = {
  Hero,
}

export default componentRegistry