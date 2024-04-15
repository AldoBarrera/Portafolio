import Hero from "components/Common/Hero"
import { manrope } from 'app/ui/fonts';
export default function Home() {
  return (
    <main className={`${manrope.className} antialiased`}>
      <Hero
        title = {{text: "This is a test"}}
        hasSmallBorderOnTop
        description = {{text: "This is a desc"}}
        image = "/vercel.svg"
        button = {{label: 'test', url:'/'}}
        hideBreadCrumbs
      />
    </main>
  );
}
