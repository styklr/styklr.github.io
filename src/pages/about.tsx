import * as React from 'react';
import Layout from '../components/layout';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/SEO';
import OurTeam from '../components/OurTeam';

const AboutPage:React.FC = () => {
    return (<Layout>
        
    {/* <!-- ====== Banner Section Start --> */}
    <div
      className="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0 z-[-1]">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              stroke-opacity="0.08"
              stroke-width="12"
            />
          </svg>
        </span>
        <span className="absolute top-0 right-0 z-[-1]">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              stroke-opacity="0.06"
              stroke-width="13"
            />
          </svg>
        </span>
      </div>
    </div>
    {/* <!-- ====== Banner Section End --> */}

    {/* <!-- ====== About Section Start --> */}
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="items-center justify-between overflow-hidden border lg:flex"
              >
                <div
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white"
                  >
                    About Us
                  </span>
                  <h2
                    className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                  >
                    Trusted IT partner in your digtal tranformation journey.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                  We are an IT consulting firm that helps organizations transform and add more value by 
                  leveraging and adopting latest technologies. Our team of experts, with extensive 
                  experience in cloud computing, productivity tools, and artificial intelligence are 
                  passionate about delivering innovative solutions that meet our customer's needs and expectations.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                  Our principles are based on trust, quality, and excellence. We value our relationships with our clients and partners, 
                  and we strive to earn their trust by being transparent, honest, and reliable. We uphold the highest standards of quality in our work, 
                  and we ensure that our solutions are secure, scalable, and sustainable.
                  </p>
                  <a
                    href="#principles"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Our Principles
                  </a>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="/assets/images/about/about-image.svg"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ====== About Section End --> */}

    <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]" id="principles">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 max-w">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                    Our Principles
                </span>
                <h2
                    className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
                >
                    Our Receipe for Success
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                We work with our customers to understand their goals, challenges, and opportunities, to design 
                and implement customized solutions that fit their budget, timeline, and requirements. Our principles 
                play an important role in acheiving this
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp group mb-12 bg-white" data-wow-delay=".1s">
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-innovate"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-innovate bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg                   
                  width="35"
                  height="35" 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Innovate
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We constantly explore new ideas and solutions to meet the changing needs and challenges of our clients. We use cutting-edge technologies and methodologies to deliver innovative outcomes.
              </p>
              {/* <a
                href="/services-sharepoint"
                className="text-base font-medium text-body-color hover:text-primary"
              >
                Learn More
              </a> */}
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="wow fadeInUp group mb-12 bg-white"
              data-wow-delay=".15s"
            >
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-elevate"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-elevate bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none"                   width="35"
                  height="35"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
</svg>

              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Elevate
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We aim to elevate the performance and potential of our clients by providing them with strategic guidance, best practices and industry insights. We help them achieve their goals and vision with excellence and efficiency.
              </p>
              {/* <a
                href="javascript:void(0)"
                className="text-base font-medium text-body-color hover:text-primary"
              >
                Learn More
              </a> */}
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp group mb-12 bg-white" data-wow-delay=".2s">
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-optimize"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-optimize bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>

<svg                   width="35"
                  height="35"
                  viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" className="text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Optimize
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We optimize the value and impact of our solutions by ensuring quality, scalability and sustainability. We monitor and measure the results and benefits of our interventions and provide continuous improvement and support.
              </p>
              {/* <a
                href="javascript:void(0)"
                className="text-base font-medium text-body-color hover:text-primary"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- ====== Team Section Start --> */}
    <OurTeam />
    {/* <!-- ====== Team Section End --> */}

    </Layout>)
}
export default AboutPage
export const Head:HeadFC = () => (<SEO 
    title='Stykle - Your trusted IT partner in your digital transformation journey'
/>)