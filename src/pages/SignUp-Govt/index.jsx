import React, { useState } from "react";
import { Button, FlexRow, Input, Select } from "../../components";
import { ManageAttendance, ManageStore } from "../../components/Home_";
import { useHttpServices, useUser } from "../../hooks";
import { Link } from "react-router-dom";
import { LandingHeader } from "../../components/Landing";
import { Alert, Box, Snackbar } from "@mui/material";
export const SignUpGovtInst = () => {
  const [level, setLevel] = useState("");
  const [ministry, setMinistry] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [LGA, setLGA] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const body = {
    level,
    phone,
    email,
    address,
    website,
    ministry,
    organizationType: "govt"
  };
  const { postData, isLoading } = useHttpServices();

  const register = async () => {
    const data = await postData("/organizations/registeration/govt", body);
    console.log(data);
    if (data.error) {
      console.log(data.error);
      setErrorMessage(data?.error?.message);
      return;
    }
    setIsSuccessful(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
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
      <Snackbar open={!(errorMessage == "")}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Box className="center " sx={{ p: "0px 8vw" }}>
        <Box style={{ maxWidth: 664, width: "100%", paddingBottom: 90 }}>
          <h1
            style={{
              color: "#19201D",

              fontSize: 24,

              fontWeight: "700",

              marginBottom: 40,
              textAlign: "center"
            }}
          >
            Government Institutions
          </h1>
          <Box>
            <FlexRow>
              <Select
                title="Government level"
                placeholder="Select level"
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                options={[
                  { label: "Federal", value: "federal" },
                  { label: "State", value: "state" },
                  { label: "Local Govt", value: "local government" }
                ]}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
              {(level === "" || level === "federal") && (
                <Input
                  containerStyle={{ flex: 1 }}
                  title="Ministry/Agency"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  value={ministry}
                  onChange={(e) => setMinistry(e.target.value)}
                />
              )}

              {(level === "state" || level === "local government") && (
                <Select
                  containerStyle={{ flex: 1 }}
                  title="State"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              )}
            </FlexRow>
            {level === "local government" && (
              <FlexRow>
                <Input
                  containerStyle={{ flex: 1 }}
                  title="LGA"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  value={LGA}
                  onChange={(e) => setLGA(e.target.value)}
                />
                <Input
                  containerStyle={{ flex: 1 }}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  title="Ministry/Agency"
                  value={ministry}
                  onChange={(e) => setMinistry(e.target.value)}
                />
              </FlexRow>
            )}

            {level === "state" && (
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Contact Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            )}
            <FlexRow>
              {level !== "state" && (
                <Input
                  containerStyle={{ flex: 1 }}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  title="Contact Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              )}

              {level === "state" && (
                <Input
                  containerStyle={{ flex: 1 }}
                  title="Ministry/Agency"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D5D7E4"
                  }}
                  labelStyle={{ fontSize: 12, color: "#19201D" }}
                  value={ministry}
                  onChange={(e) => setMinistry(e.target.value)}
                />
              )}
              <Input
                containerStyle={{ flex: 1 }}
                title="Website"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </FlexRow>
            <FlexRow>
              <Input
                containerStyle={{ flex: 1 }}
                title="Email address"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                containerStyle={{ flex: 1 }}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D5D7E4"
                }}
                labelStyle={{ fontSize: 12, color: "#19201D" }}
                title="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FlexRow>

            <Button
              onClick={register}
              title="Proceed"
              style={{
                width: "100%",
                padding: 14,
                color: "#fff",
                backgroundColor: "#19201D",
                marginTop: 48
              }}
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
};
