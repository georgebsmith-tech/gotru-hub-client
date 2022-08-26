import React, { useState } from "react";
import { Button, FlexRow, Input } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
export const PersonalBiz = () => {
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

              fontFamily: "Circular Std",
              fontWeight: "700",

              marginBottom: 40,
              textAlign: "center"
            }}
          >
            Personal Businesses
          </h1>
          <div>
            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Name of Establishment"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Business Type"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
            </FlexRow>
            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Phone number"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Email address"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
            </FlexRow>

            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Year of Establishment"
              />
              <Input
                containerStyle={{ flex: 1 }}
                title="Name of proprietor"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
              />
            </FlexRow>

            <Input
              containerStyle={{ flex: 1 }}
              title="Personal address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
            />
            <Input
              containerStyle={{ flex: 1 }}
              title="Business Address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
            />

            <Button
              title="Proceed"
              style={{
                width: "100%",
                padding: 14,
                color: "#fff",
                backgroundColor: "#19201D",
                marginTop: 48
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
