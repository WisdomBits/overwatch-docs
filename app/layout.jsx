import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  metadataBase : new URL("https://docs.overwatchts.in/"),
  title: {
  default : "Overwatch Docs - developer-friendly state management library"},
  description: "Overwatch Ts is a lightweight, fast, and developer-friendly state management library for React and Next.js, designed to simplify complex state without boilerplate.",
  openGraph: {
  title: "Overwatch Docs",
  description: "Overwatch TS is a lightweight, fast, and developer-friendly state management library for React and Next.js, designed to simplify complex state without boilerplate.",
  type : "website",
  locale : "en_IN",
  url : "https://docs.overwatchts.in/", 
  siteName : "Overwatch Ts Docs"
  },
   icons: {
        icon: './favicon.ico',
      },
};
 
const banner = <Banner storageKey="some-key">What's New? Overwatch now supports SSR API's 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Overwatch.Docs</b>}
    logoLink={"https://github.com/WisdomBits/overwatch"}
    chatIcon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24" id="github-logo">
  <g clip-path="url(#clip0_5303_9025)">
    <path fill="gray" d="M12.0022 1.3008C3.55334 1.29278 -1.7359 10.434 2.48163 17.755C3.82519 20.0871 5.97878 21.8442 8.53303 22.6924C9.08086 22.7878 9.25449 22.4662 9.25449 22.1761C9.25449 21.9136 9.26025 21.1864 9.25449 20.2673C6.20049 20.9297 5.56967 18.8214 5.56967 18.8214C5.3683 18.1581 4.93632 17.5887 4.35186 17.2161C3.35549 16.5346 4.4263 16.5481 4.4263 16.5481C5.1313 16.6448 5.75194 17.0619 6.10795 17.678C6.73328 18.8175 8.16838 19.2276 9.3013 18.5905C9.35198 18.0356 9.59898 17.5171 9.99801 17.1283C7.56141 16.8496 4.99888 15.9086 4.99888 11.7017C4.98349 10.6111 5.38847 9.55637 6.12982 8.75641C5.79389 7.81018 5.83215 6.77124 6.23676 5.85228C6.64138 4.93332 7.15968 5.5573 9.25449 6.97845C11.0537 6.48472 12.9526 6.48472 14.7518 6.97845C16.8514 5.55829 17.7667 5.85228 17.7667 5.85228C18.1716 6.77115 18.2105 7.80982 17.8755 8.75641C18.6172 9.55691 19.0215 10.6125 19.0046 11.7036C19.0046 15.922 16.4382 16.8487 13.993 17.1187C14.5245 17.6527 14.7984 18.3907 14.7442 19.1421V22.1809C14.7442 22.4739 14.9217 22.7983 15.4791 22.6924C23.4975 20.0298 25.6266 9.68554 19.3115 4.0727C17.2978 2.28294 14.6963 1.29639 12.0022 1.3008Z"></path>
    <path fill="#B2B2B2" d="M6.03722 6.48874C6.08898 6.27225 6.15559 6.05955 6.23669 5.85224C6.50961 5.80733 6.7883 5.82641 7.05267 5.9076C10.1624 4.32272 13.8429 4.32272 16.9525 5.9076C17.2159 5.82641 17.4946 5.80643 17.7666 5.85125C17.8477 6.05838 17.9145 6.27117 17.9661 6.48784C20.5904 8.19109 22.3616 10.9347 22.8334 14.0274C24.1801 5.68662 15.9924 -0.984251 8.09567 2.02006C3.22922 3.87148 0.333278 8.88735 1.16312 14.0274C1.63714 10.934 3.41087 8.19064 6.03722 6.48874Z"></path>
    <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M12.0022 1.3008C3.55334 1.29278 -1.7359 10.434 2.48163 17.755C3.82519 20.0871 5.97878 21.8442 8.53303 22.6924C9.08086 22.7878 9.25449 22.4662 9.25449 22.1761C9.25449 21.9136 9.26025 21.1864 9.25449 20.2673C6.20049 20.9297 5.56967 18.8214 5.56967 18.8214C5.3683 18.1581 4.93632 17.5887 4.35186 17.2161C3.35549 16.5346 4.4263 16.5481 4.4263 16.5481C5.1313 16.6448 5.75194 17.0619 6.10795 17.678C6.73328 18.8175 8.16838 19.2276 9.3013 18.5905C9.35198 18.0356 9.59898 17.5171 9.99801 17.1283C7.56141 16.8496 4.99888 15.9086 4.99888 11.7017C4.98349 10.6111 5.38847 9.55637 6.12982 8.75641C5.79389 7.81018 5.83215 6.77124 6.23676 5.85228C6.64138 4.93332 7.15968 5.5573 9.25449 6.97845C11.0537 6.48472 12.9526 6.48472 14.7518 6.97845C16.8514 5.55829 17.7667 5.85228 17.7667 5.85228C18.1716 6.77115 18.2105 7.80982 17.8755 8.75641C18.6172 9.55691 19.0215 10.6125 19.0046 11.7036C19.0046 15.922 16.4382 16.8487 13.993 17.1187C14.5245 17.6527 14.7984 18.3907 14.7442 19.1421V22.1809C14.7442 22.4739 14.9217 22.7983 15.4791 22.6924C23.4975 20.0298 25.6266 9.68554 19.3115 4.0727C17.2978 2.28294 14.6963 1.29639 12.0022 1.3008Z"></path>
  </g>
  <defs>
    <clipPath id="clip0_5303_9025">
      <rect width="24" height="24" fill="#fff"></rect>
    </clipPath>
  </defs>
</svg>}
    chatLink={"https://github.com/WisdomBits/overwatch"}
  />
)
const footer = <Footer style={{display: "flex", alignItems: "center", gap: "0.5rem"}}> {new Date().getFullYear()} {`© Overwatch Ts`} <p style={{fontSize: "10px"}} >{`- Developed by a dev for Developers `}<a href='https://github.com/karandeepsingh7070' target="_blank">- Karandeep Singh</a></p></Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      {/* <Head>
      </Head> */}
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/WisdomBits/overwatch.git"
          footer={footer}
          editLink={null}
          feedback={{content: null}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}