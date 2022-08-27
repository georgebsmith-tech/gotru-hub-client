import React, { useState } from "react";
import { Button, ButtonLink, FlexRow, Input } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
export const ContactUs = () => {
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
        <div style={{ maxWidth: 664, width: "100%", paddingBottom: 90 }}>
          <h1
            style={{
              color: "#19201D",

              fontSize: 24,

              fontWeight: "700",

              marginBottom: 30,
              textAlign: "center"
            }}
          >
            Contact us
          </h1>
          <div className="flex flex-col align-center">
            <p style={{ maxWidth: 350, textAlign: "center" }}>
              Have a concern, please do send us a message we are always
              available to help out
            </p>
            <div
              style={{ maxWidth: 350, textAlign: "center", marginTop: 24 }}
              className="flex"
            >
              <img src="/images/phone.svg" />
              <p style={{ marginLeft: 9.5 }}>090999999999</p>
            </div>
            <div
              style={{ maxWidth: 350, textAlign: "center", marginTop: 16 }}
              className="flex"
            >
              <img src="/images/email.svg" />
              <p style={{ marginLeft: 9.5 }}>help@gotru.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 90, marginBottom: 80 }}
        className="flex-col align-center pb-[90px]"
      >
        <h2
          style={{
            color: "#19201D",
            textAlign: "center",
            fontSize: 48,
            padding: "0 10vw",
            fontFamily: "Circular Std",
            fontWeight: "700",
            maxWidth: 800
          }}
        >
          Sign up with Gotru hub to start managing your team
        </h2>
        <div className="center" style={{ marginTop: 24, marginBottom: 32 }}>
          <p style={{ textAlign: "center", maxWidth: 580, lineHeight: 1.6 }}>
            Create account instantly to start managing your team and resources
          </p>
        </div>
        <div>
          <ButtonLink
            link="/sign-up-biz-types"
            style={{
              padding: "16px 32px",
              backgroundColor: "#19201D",
              color: "#fff"
            }}
            title="Get Started with Gotru hub"
          />
        </div>
      </div>
      <footer
        style={{ padding: 60, backgroundColor: "#19201D" }}
        className="flex flex-col align-center"
      >
        <div>
          <img src="/images/logo-white.svg" />
        </div>
        <div style={{ marginTop: 50 }}>
          <ul className="flex">
            {[{ title: "Terms of service" }, { title: "Privacy policy" }].map(
              (page, idx) => (
                <li
                  style={{
                    padding: "0 24px",
                    borderRight:
                      idx == 0 ? "1px solid #444A47" : "1px solid transparent"
                  }}
                >
                  <Link to="#" style={{ color: "white" }}>
                    {page.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </footer>
    </main>
  );
};
