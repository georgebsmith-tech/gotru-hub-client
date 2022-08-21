import { Button } from "../../FormElements/Button";
import { ButtonLink } from "../../FormElements/ButtonLink";

export const Manage = ({ img, title, text = "", features = [], action }) => {
  return (
    <div
      style={{ padding: "0 7vw", marginTop: 57, columnGap: "4vw" }}
      className="flex justify-between"
    >
      <div style={{ marginBottom: 11 }}>
        <img src={`/images/${img}.svg`} />
      </div>
      <div>
        <h3 style={{ fontSize: 32 }}>{title}</h3>
        <p style={{ color: "#444A47", marginTop: 16 }}>{text}</p>
        <ul style={{ marginTop: 24, marginBottom: 34 }}>
          {features.map((feature, idx) => (
            <li style={{ marginBottom: 16 }} key={idx}>
              <p style={{ color: "#444A47" }}>{feature}</p>
            </li>
          ))}
        </ul>
        <ButtonLink
          link="/sign-up-biz-types"
          style={{
            backgroundColor: "#19201D",
            color: "#fff",
            padding: "16px 32px"
          }}
          title="Get Started"
        />
      </div>
    </div>
  );
};
