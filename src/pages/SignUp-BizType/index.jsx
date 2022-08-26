import React, { useState } from "react";
import { Button } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
export const BuisnessType = () => {
  const [manageTab, setManageTab] = useState(0);
  const user = useUser();

  console.log(user);
  const services = [
    {
      img: "security",
      title: "Encrytpted information",
      text: `We provide you with a secure space to share and manage all your informations`
    },
    {
      img: "affordable",
      title: "Affordable pricing",
      text: `Our pricing is basically unbeatable consering the features we’re providing`
    },
    {
      img: "data",
      title: "Management of big data",
      text: `Even with the ulk of information you enter, we provide you with ease of managemrnt`
    },
    {
      img: "support-service",
      title: "Suport Team",
      text: `Our support team are hands-on and we provide you with instant 24hrs support`
    }
  ];
  return (
    <main
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      <LandingHeader />
      <div className="center">
        <div style={{ maxWidth: 490 }}>
          <h1
            style={{
              color: "#19201D",

              fontSize: 24,

              fontFamily: "Circular Std",
              fontWeight: "700",
              maxWidth: 400,
              marginBottom: 40
            }}
          >
            Whats type of organization are you registering?
          </h1>
          <div>
            <ul>
              {[
                {
                  title: "Registered Organizations",
                  text: "Companies with Registered CAC",
                  link: "/sign-up-big-biz"
                },
                {
                  title: "Personal Businesses",
                  text: "Businesses not registered",
                  link: "/sign-up-small-biz"
                },
                {
                  title: "Government Institutions",
                  text: "Government Agencies and Ministries",
                  link: "/sign-up-govt-inst"
                }
              ].map((type, idx) => (
                <li
                  style={{
                    padding: "36px 28px 39px 28px",
                    border: "1px solid #D5D7E4",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    marginBottom: 24
                  }}
                  className="pointer hover"
                >
                  <Link to={type.link}>
                    <h3
                      style={{
                        marginBottom: 8,
                        color: "#19201D",
                        fontSize: 24
                      }}
                    >
                      {type.title}
                    </h3>
                    <p style={{ color: "#6F7975" }}>{type.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="center" style={{ marginTop: 48, paddingBottom: 100 }}>
            <p>Already have an account? Sign in</p>
          </div>
        </div>
      </div>
    </main>
  );
};