import { useEffect } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import myStore from "./mobX/myStore";
import { CodereHelmet } from "./js/helper";
import { useLocation, useNavigate } from "react-router-dom";
import MyCookies from "./components/MyCookies";

const App = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://cg.optimizely.com/content/v2?auth=kOjOaaRy0DT330ykvD20ypoCqFgDcPSjSpBNxk2NPeaXekEz",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query MyQuery {
            BlankExperience(
              where: {
                _metadata: {
                  url: { default: { eq: "${location.pathname}/" } }
                }
              }
            ) {
              items {
                composition {
                  nodes {
                    ... on CompositionComponentNode {
                      component {
                        ... on LandingPageContentBlock {
                          heroDesktop {
                            default
                          }
                          ctaText
                          heroMobile {
                            default
                          }
                          ctaOrientation
                          type
                          tyc {
                            html
                          }

                          steps {
                            ... on StepsBlock {
                              title

                              description
                            }
                          }

                          disclaimer {
                            color

                            text
                          }
                          meta {
                            description

                            title
                          }
                          schedule {
                            startDate
                            endDate
                          }
                        }
                        ... on LandingPageDefaultContentBlock {
                          heroDesktop {
                            default
                          }
                          ctaText
                          heroMobile {
                            default
                          }
                          ctaOrientation
                          type
                          tyc {
                            html
                          }
                          steps {
                            ... on StepsBlock {
                              title
                              description
                            }
                          }
                          disclaimer {
                            color
                            text
                          }
                          meta {
                            description
                            title
                          }
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
        const res = result?.data?.BlankExperience?.items[0]?.composition?.nodes;

        console.log("All Blocks >>");
        console.log(res);

        if (!res) {
          navigate("/page-not-found");
          return;
        }
        // yuval
        // console.log(res);

        const temp = res
          .filter(
            (node) =>
              node.component["__typename"] !== "LandingPageDefaultContentBlock"
          )
          .filter(
            (node) =>
              new Date() >= new Date(node?.component?.schedule?.startDate) &&
              new Date() <= new Date(node?.component?.schedule?.endDate)
          );

        if (!temp.length) {
          myStore.updateComponent(
            res.filter(
              (node) =>
                node.component["__typename"] ===
                "LandingPageDefaultContentBlock"
            )[0]?.component
          );
        } else myStore.updateComponent(temp[0]?.component);
      });
  }, []);

  useEffect(() => {
    if (myStore.component) {
      console.log("Chosen node >");
      console.log(toJS(myStore.component));
    }

    let title = toJS(myStore.component)?.meta?.title;
    let description = toJS(myStore.component)?.meta?.description;
    let type = toJS(myStore.component)?.type.toLowerCase();

    CodereHelmet(title, description, type);
  }, [myStore.component]);

  return (
    <>
      <Header />

      <div className="min-h-screen">{myStore.component && <Body />}</div>
      {/* <MyCookies /> */}
      <Footer />
    </>
  );
});

export default App;
