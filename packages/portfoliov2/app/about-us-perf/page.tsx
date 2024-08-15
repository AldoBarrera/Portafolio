import Hero, { mockHero } from "@/app/ui/components/Common/Hero"
import MultimediaContent, { mockMultimediaContent } from "@/app/ui/components/Common/MultimediaContent"
import MultimediaContent2, { mockMultimediaContent2 } from "@/app/ui/components/Common/MultimediaContent2"
import MultimediaContent3, { mockMultimediaContent3 } from "@/app/ui/components/Common/MultimediaContent3"
import Banner, { mockBanner } from "@/app/ui/components/Common/Banner"
import CallToAction, { mockCallToAction } from "@/app/ui/components/Common/CallToAction"
import CallToAction2, { mockCallToAction2 } from "@/app/ui/components/Common/CallToAction2"
import GridBlue, { mockGridBlue }  from "@/app/ui/components/Common/GridBlue";
import GridCards, { mockGridCards }  from "@/app/ui/components/Common/GridCards";

export default function Home() {
  return (
    <main>
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
