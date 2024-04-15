import Hero from "components/Common/Hero"

export default function Home() {
  return (
    <main>
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
