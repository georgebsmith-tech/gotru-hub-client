import React, { useRef, useState } from "react";
import { Button, FlexRow, Input } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
export const SignUpBigBiz = () => {
  const [cacImage, setCacImage] = useState(null);
  const [opLicenceImage, setOpLicenceImage] = useState(null);
  const [cacPreview, setcacPreview] = useState(null);
  const [opLicencePreview, setOpLicenecePreview] = useState(null);
  const previews = [cacPreview, opLicencePreview];
  console.log(previews);

  const cacImageRef = useRef();
  const opLicenceImageRef = useRef();

  const uploadCac = () => {
    cacImageRef?.current?.click();
  };
  const uploadOpLicence = () => {
    opLicenceImageRef?.current?.click();
  };
  const handleImageChange = (image, kind) => {
    if (image[0]) {
      if (kind == "cac") {
        setCacImage(image[0]);
        const path = URL.createObjectURL(image[0]);
        console.log(path);
        setcacPreview(path);
      } else {
        setOpLicenceImage(image[0]);

        const path = URL.createObjectURL(image[0]);
        setOpLicenecePreview(path);
        console.log(path);
      }
    }
  };

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
            Register Organization- Big Business
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
            <Input
              containerStyle={{ flex: 1 }}
              title="Address"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #D5D7E4"
              }}
              labelStyle={{ fontSize: 12, color: "#19201D" }}
            />
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

            <ul className="flex" style={{ columnGap: "2vw" }}>
              {[
                {
                  title: "Certificate of Incorporation with CAC Number",

                  action: uploadCac
                },
                {
                  title: "Operational License",

                  action: uploadOpLicence
                }
              ].map((type, idx) => (
                <li
                  key={idx}
                  onClick={type.action}
                  style={{
                    padding: previews[idx] ? 4 : 31,
                    border: "1px dashed #D5D7E4",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    marginBottom: 24,
                    flex: 1,
                    maxHeight: 150
                  }}
                  className="pointer hover"
                >
                  {previews[idx] ? (
                    <img
                      src={previews[idx]}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                  ) : (
                    <div className="center">
                      <h3
                        style={{
                          marginBottom: 8,
                          color: "#19201D",
                          textAlign: "center",
                          width: 170
                        }}
                        className="f12"
                      >
                        {type.title}
                      </h3>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {/* refs */}
            <input
              accept=".png,.jpg"
              type="file"
              ref={cacImageRef}
              onChange={(e) => handleImageChange(e.target.files, "cac")}
              style={{ display: "none" }}
            />
            <input
              accept=".png,.jpg"
              type="file"
              ref={opLicenceImageRef}
              onChange={(e) => handleImageChange(e.target.files, "opLic")}
              style={{ display: "none" }}
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
