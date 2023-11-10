import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/SEO"
import OurTeam from "../components/OurTeam"

const IndexPage: React.FC<PageProps> = () => {
  return (<Layout ><>
    {/* <!-- ====== Hero Section Start --> */}
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w text-center"
              data-wow-delay=".2s"
            >
              <h1
                className="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"
              >
                We help you do more by automating your business processes and building solutions on Azure and Microsoft&nbsp;365
              </h1>
              <p
                className="mx-auto mb-10 max-w text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
              >
                Our team of Microsoft certified specialists are commited to <b>INNOVATE</b> to find newer and better solutions, 
                to <b>ELEVATE</b> the customer by delivering high quality work and to <b>OPTIMIZE</b> the cost and resources.
                <br/>With more than a decade of experience, we have the expertise to handle any kind of software development project, 
                including developing AI workloads, custom cloud applications, Microsoft 365 solutions, and implementing newer technologies. View our services to learn more. 
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center">
                <li>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center rounded-lg bg-white py-4 px-6 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:text-primary hover:shadow-lg sm:px-10"
                  >
                    Our Services
                    <span className="pl-2">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path
                          d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >
              <div className="mt-16">
                <img
                  src="/assets/images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="absolute bottom-0 -left-9 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="absolute -top-6 -right-6 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ====== Hero Section End -->

    <!-- ====== Services Section Start --> */}
    <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]" id="services">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 max-w lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Services
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                Our Consulting Offerings
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
              We enable you to leverage Azure, Microsoft 365 and AI for your business needs. Choose from our range of consulting service offers or&nbsp;
              <Link 
              to="/#contact">contact us</Link>&nbsp;
              for a custom solution.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp group mb-12 bg-white" data-wow-delay=".1s">
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg                   
                  width="35"
                  height="35" 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
              SharePoint Online Solutions
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We enable you to maximize your SharePoint Online usage through Corporate Intranets, Employee Engagement, Knowledge Management portals and building tailored solutions using SPFx.
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
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none"                   width="35"
                  height="35"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
</svg>

              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
              Microsoft Teams Apps
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                Being one of the widely used communications and collaboration platform, it is really important to integrate your existing applications to Microsoft Teams. We can help you build new extensions or integrate your existing investments to Microsoft Teams.
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
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>

<svg                   width="35"
                  height="35"
                  viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" className="text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Process Automation
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
              From automating simple repetitive tasks to transforming your workflows into solutions, we build custom business applications to automate your processes that suite your specific needs.
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
            <div
              className="wow fadeInUp group mb-12 bg-white"
              data-wow-delay=".25s"
            >
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                 stroke-width="1.5" stroke="currentColor" className="text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Leveraging & Adopting AI
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We help you in integrating Generative AI capabilities to your existing applications or new solutions. Preparing your tenant for Microsoft 365 Copilot and building custom Copilots, and chat assistants using Azure OpenAI Services that work on your organization's data securely.
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
            <div
              className="wow fadeInUp group mb-12 bg-white"
              data-wow-delay=".25s"
            >
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="1.5" stroke="currentColor" className="text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>
              
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Integration Services
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                Build and manage integrations for your Microsoft 365 eco system, which can create unique solutions for your organization, and use your data from external systems within Microsoft 365 apps and vice versa.
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
            <div
              className="wow fadeInUp group mb-12 bg-white"
              data-wow-delay=".25s"
            >
              <div
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg 
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="1.5" stroke="currentColor" className="text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>

              </div>
              <h4 className="mb-3 text-xl font-bold text-dark">
                Custom Development
              </h4>
              <p className="mb-8 text-body-color lg:mb-11">
                We build custom applications on Azure Cloud, AI assistants powered by OpenAI and any custom solutions as per your business needs. We follow industry standard best practices to ensure quality, security and scalability of the custom solutions.
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
    {/* <!-- ====== Services Section End -->

    <!-- ====== About Section Start --> */}
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
                    Your trusted IT partner in you digtal tranformation journey.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                  We are an IT consulting firm that helps organizations transform and add more value by 
                  tranforming and adopting to latest technologies. Our team of experts, with extensive 
                  experience in cloud computing, productivity tools, and artificial intelligence are 
                  passionate about delivering innovative solutions that meet our customer's needs and expectations.
                  </p>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Learn More
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
    {/* <!-- ====== About Section End -->

    <!-- ====== Pricing Section Start --> */}
    {/* <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
              >
                Our Pricing Plan
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div
              className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".15s
              "
            >
              <span
                className="mb-2 block text-base font-medium uppercase text-dark"
              >
                STARTING FROM
              </span>
              <h2 className="mb-9 text-[28px] font-semibold text-primary">
                $ 19.99/mo
              </h2>

              <div className="mb-10">
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  1 User
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  All UI components
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Lifetime access
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Free updates
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Use on 1 (one) project
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  3 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
                >
                  Purchase Now
                </a>
              </div>
              <span
                className="absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary"
              >
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div
              className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-gradient-to-b from-primary to-[#179BEE] py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".1s
              "
            >
              <span
                className="mb-5 inline-block rounded-full border border-white bg-white py-2 px-6 text-base font-semibold uppercase text-primary"
              >
                POPULAR
              </span>
              <span
                className="mb-2 block text-base font-medium uppercase text-white"
              >
                STARTING FROM
              </span>
              <h2 className="mb-9 text-[28px] font-semibold text-white">
                $ 19.99/mo
              </h2>

              <div className="mb-10">
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  5 User
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  All UI components
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Lifetime access
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Free updates
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Use on 1 (one) project
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  4 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-white bg-white py-4 px-11 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:border-dark hover:bg-dark hover:text-white"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div
              className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".15s
              "
            >
              <span
                className="mb-2 block text-base font-medium uppercase text-dark"
              >
                STARTING FROM
              </span>
              <h2 className="mb-9 text-[28px] font-semibold text-primary">
                $ 70.99/mo
              </h2>

              <div className="mb-10">
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  1 User
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  All UI components
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Lifetime access
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Free updates
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  Use on unlimited project
                </p>
                <p
                  className="mb-1 text-base font-medium leading-loose text-body-color"
                >
                  4 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
                >
                  Purchase Now
                </a>
              </div>

              <span
                className="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"
              >
              </span>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- ====== Pricing Section End -->

    <!-- ====== Faq Section Start --> */}
    {/* <section
      className="relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                Any Questions? Answered
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to use TailGrids?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to download icons from LineIcons?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    Is GrayGrids part of UIdeck?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    Can I use this template for commercial project?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    Do you have plan to releasing Play Pro?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    Where and how to host this template?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section> */}
    {/* <!-- ====== Faq Section End -->

    <!-- ====== Testimonials Start ====== --> */}
    <section id="testimonials" className="pt-20 md:pt-[120px]">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Testimonials
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                What our Client Say
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                We don't just deliver projects, we add value and uphold our commitments. And this reflects in what our customers say.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".1s
              "
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  "Ram is an outstanding development partner. One of the best I've worked with in my 15+ years designing and development web-based software and websites. He communication style is clear and to the point. Never had any issues understanding his message. His timeline estimates are always accurate and he never caused any delays."
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div
                  className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full"
                >
                  <img
                    src="/assets/images/testimonials/author-01.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Benjamin</h4>
                  {/* <p className="text-xs text-[#969696]">Founder @ Rolex</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".15s
              "
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  "Ram is the best to work with. He understands exactly what I was looking for and delivered very timely. great experience, will continue to work with"
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div
                  className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full"
                >
                  <img
                    src="/assets/images/testimonials/author-02.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Thomas</h4>
                  {/* <p className="text-xs text-[#969696]">Founder @ UI Hunter</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".2s
              "
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  "Working with Ram was an excellent experience. Ram provided a high-quality product with superb customer service. Ram is an easy person to work with that has an exceptional Sharepoint and Office 365 knowledge base."
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div
                  className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full"
                >
                  <img
                    src="/assets/images/testimonials/author-03.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4 className="text-sm font-semibold">Jake</h4>
                  {/* <p className="text-xs text-[#969696]">Founder @ Trorex</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-title mb-8">
                <h6
                  className="relative inline-flex items-center text-xs font-normal text-body-color"
                >
                  Some Of Our Clients
                  <span className="ml-4 inline-block h-[1px] w-8 bg-[#afb2b5]">
                  </span>
                </h6>
              </div>
              <div className="ud-brands-logo flex flex-wrap items-center">
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://tailgrids.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/assets/images/brands/tailgrids.svg"
                      alt="tailgrids"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://ayroui.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/assets/images/brands/ayroui.svg"
                      alt="ayroui"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://uideck.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/assets/images/brands/uideck.svg"
                      alt="uideck"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://graygrids.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/assets/images/brands/graygrids.svg"
                      alt="graygrids"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://lineicons.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/assets/images/brands/lineicons.svg"
                      alt="lineicons"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    {/* <!-- ====== Testimonials End ====== -->

    <!-- ====== Team Section Start --> */}
    <OurTeam />
    {/* <!-- ====== Team Section End -->

    <!-- ====== Contact Start ====== --> */}
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div
        className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2"
      ></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-5 text-base font-semibold text-dark">
                  CONTACT US
                </span>
                <h2 className="text-[35px] font-semibold">
                  Love to hear from you!
                </h2>
                <p>Whether you need help with Microsoft 365, Cloud App Development, Generative AI & AI Assistants, or just finding a button or setting in your tenant, we're here to listen.<br /></p>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      className="fill-current"
                    >
                      <path
                        d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"
                      />
                      <path
                        d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">Our Location</h5>
                    <p className="text-base text-body-color">
                      29-6-1, Rajahmundry, Andhra Pradesh - 533014
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path
                        d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">How Can We Help?</h5>
                    <p className="text-base text-body-color">
                      contact@styklr.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              {/* <iframe src="https://www.google.com" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ====== Contact End ====== --> */}

    </>
  </Layout>
  )
}

export default IndexPage
export const Head:HeadFC = () => ( <SEO
    title="Styklr - Consulting | IT Services | Digital Transformation"
  /> )
