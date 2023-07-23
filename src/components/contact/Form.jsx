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

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const form_data = {
    from_name: data.name,
    form_email: data.email,
    form_phone: data.phone,
    form_message: data.msg,
  };

  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form_data, API_PUPLIC_KEY).then(
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
  };

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
          <button className="r-5" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

// ==============================

// import { useState } from "react";
// import "./form.css";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const SERVICE_ID = "ziad22ahmed22";
//   const TEMPLATE_ID = "template_1j2gaei";
//   const API_PUPLIC_KEY = "USS-83SitkM91QZe2";

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [msg, setMsg] = useState("");

//   const form_data = {
//     from_name: name,
//     form_email: email,
//     form_phone: phone,
//     form_message: msg,
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (name !== "" && email !== "" && phone !== "" && msg !== "") {
//       emailjs.send(SERVICE_ID, TEMPLATE_ID, form_data, API_PUPLIC_KEY).then(
//         (response) => {
//           console.log(response.status);
//           toast.success("Email Sent Succefully", {
//             theme: "dark",
//           });
//         },
//         (error) => {
//           console.log(error.status);
//           toast.error("Error! Email Not Send", {
//             theme: "dark",
//           });
//         }
//       );
//     } else {
//       toast.warn("Please Fill Al Fields", {
//         theme: "dark",
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer style={{ zIndex: "555555555555555" }} />
//       <form className="r-5 mb-4 mb-lg-0" onSubmit={sendEmail}>
//         <div>
//           <label htmlFor="name">Full Name</label>
//           <input
//             id="name"
//             dir="auto"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Write your full name"
//           />
//         </div>

//         <div>
//           <label htmlFor="email">E-Mail</label>
//           <input
//             id="email"
//             dir="auto"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Write your E-Mail"
//           />
//         </div>

//         <div>
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             id="phone"
//             dir="auto"
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Write your Phone Number"
//           />
//         </div>

//         <div>
//           <label htmlFor="msg">Message</label>
//           <textarea
//             id="msg"
//             dir="auto"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Write your Message"
//           ></textarea>
//         </div>

//         <div>
//           <button className="r-5" type="submit">
//             Send
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Form;
