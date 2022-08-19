import { Button } from "../../FormElements/Button";
import { Manage } from "../Manage_";

export const ManageAttendance = () => {
  return (
    <Manage
      img="attendance_"
      title="Attendance management"
      text="We provide you with our system that helps keep track of the puntiuality of your staffs as well as members"
      features={[
        `Manage the early and late time of your staffs`,
        `Receive alert on the place of attendance registration`,
        `Assign your staffs to their manager`,
        `View the spread sheet on time management`
      ]}
    />
  );
};
