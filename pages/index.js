import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getRecaptchaToken, loadScriptByURL } from "../helper/functions";

const Home = () => {
  const [tokenStr, setToken] = useState("");

  useEffect(() => {
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTA_KEY}`
    );
  });

  const handleSubmit = () => {
    getRecaptchaToken("submit", (err, token) => {
      if (err) {
        console.log(err);
      }
      if (token) {
        console.log(token);
        setToken(token);
        alert(token);
      }
    });
  };

  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <input name="name" placeholder="name" type="text" required /> <br />
        <br />
        <input name="name" placeholder="password" type="password" required />
        <br />
        <br />
        <button onClick={() => handleSubmit()}>Submit</button> <br />
        <br />
      </div>
    </>
  );
};
export default Home;
