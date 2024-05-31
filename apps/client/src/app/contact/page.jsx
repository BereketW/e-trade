import React from "react";
import { LuPhoneCall } from "react-icons/lu";
const contact = () => {
  return (
    <div className="">
      <div className="bg-slate-200 md:flex md:gap-[500px] p-10 md:mb-12 justify-center">
        <div className="">
          <div className="flex justify-start">
            <p>Home |</p>
            <p>Contact</p>
          </div>
          <div>
            <h1 className="py-6 md:text-5xl text-3xl font-semibold">
              Contact With Us
            </h1>
          </div>
        </div>
        <div>
          <LuPhoneCall
            style={{ height: "70px", width: "70px" }}
            className="flex justify-center md:mt-8"
          />
        </div>
      </div>

      <section className="md:flex justify-center  gap-10 ms-6">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl mx-5">We would love to hear from you.</h2>
            <p className="text">
              If you’ve got great products your making or looking to work with
              us then drop us a line.
            </p>
          </div>
          <form action="#">
            <div className="md:flex justify-center gap-16 mb-10">
              <div>
                <fieldset>
                  <legend>
                    Name{" "}
                    <small style={{ color: "red", fontSize: "20px" }}>*</small>
                  </legend>
                  <input
                    className="p-3 border-2 sm:w-full"
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="name"
                  />
                  <br />
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend>
                    Phone{" "}
                    <small style={{ color: "red", fontSize: "20px" }}>*</small>
                  </legend>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="phone"
                    className="p-3 border-2 sm:w-full"
                  />
                  <br />
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend>
                    E-mail{" "}
                    <small style={{ color: "red", fontSize: "20px" }}>*</small>
                  </legend>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="email"
                    className="p-3 border-2 sm:w-full"
                  />
                  <br />
                </fieldset>
              </div>
            </div>

            <div>
              <fieldset>
                <legend>
                  Your Message{" "}
                  <small style={{ color: "red", fontSize: "20px" }}>*</small>
                </legend>
                <textarea
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="massage"
                  className=" pl-10 md:w-full  w-80 border-2 pt-5 pb-20"
                />
                <br />
              </fieldset>
            </div>

            <div>
              <button
                type="submit"
                className="px-10 py-5 my-8 text-white border-10 border-8 hover:scale-110  bg-blue-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div>
          <div>
            <h2 className="mb-10 text-3xl ms:flex justify-center">Our Store</h2>
            <small>
              <p className="text-[16px]">
                8212 E. Glen Creek Street Orchard Park,{" "}
              </p>
              <p className="mb-5 text-[16px]">
                NY 14127, United States of America
              </p>
            </small>
            <small>
              <p className="text-[15px]">Phone: +123 456 7890</p>
              <p className="text-[15px]">Email: Hello@etrade.com</p>
            </small>
          </div>

          <div>
            <h2 className="mt-8 mb-8 text-3xl">Careers</h2>
            <p className="text-[15px]">
              Instead of buying six things, one that you really like.
            </p>
          </div>
          <div>
            <h2 className="my-10 text-2xl">Opening Hours:</h2>
            <small>
              <p className="text-[15px]">Monday to Saturday: 9am - 10pm</p>
              <p className="text-[15px]">Sundays: 10am - 6pm</p>
            </small>
          </div>
        </div>
      </section>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.284989049498!2d39.292298403952046!3d8.56857195485245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sam!2set!4v1716708380497!5m2!1sam!2set"
          // width="1000"
          height="500"
          className="md:mx-28 my-20 flex justify-center mx-6  md:w-5/6"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default contact;
