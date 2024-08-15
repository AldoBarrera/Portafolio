import Hero, { mockHero } from "@/app/ui/components/Common/Hero"
import MultimediaContent, { mockMultimediaContent } from "@/app/ui/components/Common/MultimediaContent"
import MultimediaContent2, { mockMultimediaContent2 } from "@/app/ui/components/Common/MultimediaContent2"
import MultimediaContent3, { mockMultimediaContent3 } from "@/app/ui/components/Common/MultimediaContent3"
import Banner, { mockBanner } from "@/app/ui/components/Common/Banner"
import CallToAction, { mockCallToAction } from "@/app/ui/components/Common/CallToAction"
import CallToAction2, { mockCallToAction2 } from "@/app/ui/components/Common/CallToAction2"
import GridBlue, { mockGridBlue }  from "@/app/ui/components/Common/GridBlue";
import GridCards, { mockGridCards }  from "@/app/ui/components/Common/GridCards";
import DynamicComponent from "@/app/ui/components/Common/DynamicComponent"
import {
  PAGES,
  PAGE,
  GET_STATIC_PROPS,
  GET_STATIC_PATHS,
  revalidateTime
} from '@/constants/pages'
import Contentful from "@/services/contentful";

export default async function Home({ params }) {
  const { id } = params;
  const page = await Contentful.getDataByIdAndParent(PAGE, id)
  return (
    <main>
      {page?.sections?.map((block, index) =>
        DynamicComponent(block, index)
      )}
      <div>this is a test {page.sections[0].content.title}</div>
      <Hero {...mockHero}/>
      <MultimediaContent {...mockMultimediaContent}/>
      <Banner {...mockBanner}/>
      <GridBlue {...mockGridBlue } />
      <MultimediaContent2 {...mockMultimediaContent2}/>
      <CallToAction {...mockCallToAction}/>
      <GridCards {...mockGridCards } />
      <CallToAction2 {...mockCallToAction2}/>
      <MultimediaContent3 {...mockMultimediaContent3}/>
    </main>
  );
}
