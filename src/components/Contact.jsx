import emailjs from "@emailjs/browser";
import { useRef } from "react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5vwty13",
        "template_h7bsai1",
        form.current,
        "sHnmIEvyQ8qjHvQgb"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact Me
      </h1>
      <p className="text-center text-[#001b5e] py-4">
        I am passionate about taking on ambitious projects that challenge my
        skills and knowledge. If you have a large-scale project in mind and need
        an experienced developer to bring it to divfe.
        <br />
        I would love to hear from you.
        <br />
        Of course, I am also open to other requests or questions. Please feel
        free to contact me using the form below.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="John Smith"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" placeholder="07123456789" type="text" name="phone" required/>
          </div>
        </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="example@example.com"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="Job Opportunity"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          <input type="submit" className="flat-button" value="Send Message" />
        </div>  
      </form>
    </div>
  );
};

export default Contact;
