import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://cg.optimizely.com/content/v2?auth=kOjOaaRy0DT330ykvD20ypoCqFgDcPSjSpBNxk2NPeaXekEz",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query MyQuery {
          LandingPagesTemplatePage {
            total
            items {
              _deleted
              _modified
              _score
              _id
              Country
              LandingPageType
              Scheduling
              SEOHTMLTitle
              SEOHTMLDescription
              DesktopBannerButtonHorizontalPosition
              MobileBannerButtonHorizontalPosition
              DesktopBannerButtonVerticalPosition
              DesktopBannerButtonText
              MobileBannerButtonText
              TextUnderBannerCTAButton
              ChooseBannerButtonTextColor
              Step1Title
              Step2Title
              Step3Title
              Step1Content
              Step2Content
              Step3Content
              FooterWithPaymentMethods
              LandingPageTermsandConditionsVisiblity
            }
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
