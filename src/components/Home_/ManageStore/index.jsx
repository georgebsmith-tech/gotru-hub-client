import { Button } from "../../FormElements/Button";
import { Manage } from "../Manage_";

export const ManageStore = () => {
  return (
    <Manage
      img="store_"
      title="Manage your mega store efficiently"
      text="We provide you with our system that helps keep track of the puntiuality of your store activites as well as payments and stocks and services in your company"
      features={[
        `Receive and manage payment`,
        `Manage your stock inventory`,
        `Manage monies received and sent out of your business`,
        `Get notified on payments made`,
        `Request payment from customers and get them to approve`
      ]}
    />
  );
};
