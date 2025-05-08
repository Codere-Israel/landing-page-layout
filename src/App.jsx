import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import myStore from "./mobX/myStore";

const App = observer(() => {
  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://cg.optimizely.com/content/v2?auth=kOjOaaRy0DT330ykvD20ypoCqFgDcPSjSpBNxk2NPeaXekEz",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query MyQuery {
            BlankExperience {
              items {
                composition {
                  nodes {
                    ... on CompositionComponentNode {
                      component {
                        ... on LandingPageContentBlock {
                          BannerButtonText
                          ChooseBannerUnderButtonTextColor
                          DesktopBannerImageURL {
                            default
                          }
                          DesktopButtonHorizontalPosition
                          LandingPageType
                          SEOHTMLDescription
                          SEOHTMLTitle
                          SchedulingEndDate
                          SchedulingStartDate
                          TextUnderBannerCTAButton
                        }
                        ... on LandingPageDefaultContentBlock {
                          BannerButtonText
                          ChooseBannerUnderButtonTextColor
                          DesktopButtonHorizontalPosition
                          DesktopBannerImageURL {
                            default
                          }
                          LandingPageTermsandConditionsContent {
                            html
                            json
                          }
                          LandingPageType
                          MobileBannerImageURL {
                            default
                          }
                          SEOHTMLDescription
                          SEOHTMLTitle
                          TextUnderBannerCTAButton
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        const res = result?.data?.BlankExperience?.items[1]?.composition?.nodes;

        console.log("All Blocks >>");
        console.log(res);

        const temp = res
          .filter(
            (node) =>
              node.component["__typename"] !== "LandingPageDefaultContentBlock"
          )
          .filter(
            (node) =>
              new Date() >= new Date(node?.component.SchedulingStartDate) &&
              new Date() <= new Date(node?.component.SchedulingEndDate)
          );

        if (!temp.length) {
          myStore.updateComponent(
            res.filter(
              (node) =>
                node.component["__typename"] !==
                "LandingPageDefaultContentBlock"
            )[0]?.component
          );
        } else myStore.updateComponent(temp[0]?.component);
      });
  }, []);

  useEffect(() => {
    console.log("Chosen node >");
    console.log(toJS(myStore.component));
  }, [myStore.component]);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
});

export default App;
