import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Testimony = () => {
  return (
    <>
      <section className="text-zinc-100 testimony body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap p-10 -m-4 bg-zinc-950 rounded-2xl">
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="https://dummyimage.com/302x302"> */}
                <FaEnvelopeOpenText
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading fontSize={"2xl"} as="h5">
                  Email Us
                </Heading>
                <p className="m-3 text-sm leading-relaxed">
                  Email us for general quries including marketing and
                  partnership oppertunity.
                </p>
                <Button
                  className="testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  HISC@heartfullness.org
                </Button>
              </div>
            </div>
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="https://dummyimage.com/300x300"> */}
                <FaPhoneAlt
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading fontSize={"2xl"} as="h5">
                  Call Us
                </Heading>
                <p className="m-3 text-sm leading-relaxed">
                  Call us to speak to member of our team. We are always happy to
                  help.
                </p>
                <Button
                  className=" testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  +91-9760657327
                </Button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                {/* <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 rounded-full border-gra y-200" src="https://dummyimage.com/305x305"> */}
                <FaMapMarkerAlt
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading as="h5" fontSize={"2xl"}>
                  Location
                </Heading>
                <p className="m-3 text-sm leading-relaxed">
                  13-110 Kanha Village Nardegame Mandal Ranga Reddy District,
                  Telangana india Pin -566753
                </p>
                <Button
                  className="testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  +91-9760657327
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
