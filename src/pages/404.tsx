import * as React from "react"
import Layout from "../components/layout"
import { type PageProps, type HeadFC, Link } from "gatsby"
import { SEO } from "../components/SEO"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
    {/* <!-- ====== 404 Section Start --> */}
    <section className="bg-white py-14 lg:py-20 pt-[20px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]"
              data-wow-delay=".2s"
            >
              <h2
                className="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]"
              >
                404 - We couldn't find that page.
              </h2>
              <h3 className="mb-8 text-xl font-normal text-dark-700 md:text-2xl">
                Maybe you can find what you need here?
              </h3>
              <ul className="flex flex-wrap justify-center">
                <li>
                  <Link
                    to="/"
                    className="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#services"
                    className="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ====== 404 Section End --> */}

    </Layout>
  )
}

export default NotFoundPage
export const Head:HeadFC = () => ( <SEO /> )
