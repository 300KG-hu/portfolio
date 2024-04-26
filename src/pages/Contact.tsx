import ContactBox from "../components/ContactBox"

import { WaveImage, ContactImage } from "../assets"

const Contact = () => {
  return (
    <div id="contact">
      <img
        src={WaveImage}
        alt="WaveImage"
        className="rotate-180 w-full -mt-1"
      />
      <div className="flex flex-col justify-center items-center mt-4">
        <div>
          <img src={ContactImage} alt="ContactImage" className="w-64 my-8" />
        </div>
        <h1 className="text-2xl font-bold text-blue-500 my-8">
          Don't hesitate, Contact Me!
        </h1>
        <div className="bg-white w-full dark:bg-dark-three p-4">
          <div className="flex justify-center items-center flex-wrap">
            <ContactBox
              href="mailto:husamsultana@gmail.com"
              iconName="mail"
              name="husamsultana@gmail.com"
              time={1}
            />
            <ContactBox
              href="tel:0097466618220"
              iconName="call"
              name="+974-6661-8220"
              time={1.5}
            />
            <ContactBox
              href="/Husam-CV.pdf"
              iconName="download"
              name="Take a look at my résumé"
              time={2.5}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="dark:text-white text-blue-500 text-center">Thank you for reviewing my portfolio, I hope you like it.</h3>
            <h3 className="dark:text-white text-blue-500">Created with ❤️, 2024</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
