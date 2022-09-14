import { Button } from "../../FormElements/Button";
import { Manage } from "../Manage_";

export const ManageAttendance = () => {
  return (
    <Manage
      img="attendance_"
      title="Attendance management"
      text="We provide you with our system that helps keep track of the puntiuality of your staff as well as members"
      features={[
        `Manage the early and late time of your staff`,
        `Receive alert on the place of attendance registration`,
        `Assign your staff to their manager`,
        `View the spread sheet on time management`
      ]}
    />
  );
};
