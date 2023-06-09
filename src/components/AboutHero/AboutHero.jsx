import React, { useEffect } from "react";
import img from "../../../public/5494.jpg";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Header from "../Header/Header";

export default function AboutHero() {
  return (
    <section className="text-gray-600 aboutHero body-font">
      <div className="bg-hero-img">
        <Header />
        <div className="flex justify-center max-w-screen-lg m-auto align-baseline about-center">
          <div className="m-auto text-center gap">
            <Button className="btn" colorScheme="red" borderRadius={"3xl"}>
              Welcome to Heartfulness International Sports Center (HISC)
            </Button>

            <Heading>EMPOWERING YOUTH THROUGH SPORTS EXCELLENCE</Heading>

            <Text p={"40px"}>
              At the Heartfulness Institute, we are committed to fostering
              holistic well-being and empowering individuals to tap into the
              infinite potential of their hearts. Through the Heartfulness
              International Sports Center (HISC), we impact thousands of
              children and youth, helping them connect with their hearts'
              potential through sports.
            </Text>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="flex justify-center m-auto cont-wrapp hover-card-cont">
          <div className="container flex justify-center gap-3 align-top">
            <div className="card card-div">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <i className="fa fa-user-circle" aria-hidden="true">
                      OUR VISION
                    </i>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <p>
                    HISC was established in 2020 with guidance from renowned
                    sports icons like Pullela Gopichand and P. V. Sindhu. We
                    have partnered with esteemed organizations including the
                    Ministry of Sports (Government of India), Khelo India, FIT
                    India, and the Pullela Gopichand Badminton Academy.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <i className="fa fa-user-circle" aria-hidden="true">
                      OUR ORIGINS
                    </i>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>Hello there!</h3>

                  <p>Trust yourself and keep going.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-orange-600 pt-52 abt py-28">
        <Heading color={"white"} fontSize={"5xl"}>
          BEGIN YOUR TRANSFORMATION TODAY
        </Heading>
        <Box maxW={"80%"} fontSize={"lg"} m={"auto"} color="white">
          “Whether you are in sports or any other field, excellence is what you
          must always strive for. Heartfulness teaches you that in how they
          transformed this place which was as barren as it can get,” - Daaji
        </Box>
      </div>
    </section>
  );
}
