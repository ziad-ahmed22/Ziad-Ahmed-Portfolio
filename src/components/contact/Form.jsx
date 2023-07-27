import { useState } from "react";
import "./form.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  API_PUPLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  emptyObj,
  formItems,
} from "./formData";

const Form = () => {
  const [data, setData] = useState(emptyObj);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const form_data = {
    from_name: data.name,
    form_email: data.email,
    form_phone: data.phone,
    form_message: data.msg,
  };

  async function sendEmail() {
    setLoading(true);
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, form_data, API_PUPLIC_KEY).then(
      (response) => {
        console.log(response.status);
        toast.success("Email Sent Succefully", {
          theme: "dark",
          position: "top-center",
        });
        setData(emptyObj);
      },
      (error) => {
        console.log(error.status);
        toast.error("Error! Email Not Send", {
          theme: "dark",
          position: "top-center",
        });
      }
    );
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, msg } = data;

    if (name !== "" && email !== "" && phone !== "" && msg !== "") {
      sendEmail();
    } else {
      toast.warn("Please Fill All Fields", {
        theme: "dark",
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer style={{ zIndex: "555555555555555" }} />
      <form className="r-5 mb-4 mb-lg-0" onSubmit={handleSubmit}>
        {formItems.map((item, i) => (
          <div key={i}>
            <label htmlFor={item.name}>{item.title}</label>
            <input
              id={item.name}
              dir="auto"
              type={item.type}
              value={data[item.name]}
              onChange={handleChange}
              placeholder={item.placeh}
            />
          </div>
        ))}

        <div>
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            dir="auto"
            value={data.msg}
            onChange={handleChange}
            placeholder="Write your Message"
          ></textarea>
        </div>

        <div>
          <button disabled={loading} className="r-5" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
