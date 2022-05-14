import React, { FC, useContext } from "react";
import Button from "./Button";
import Card from "./Card";
import ProfileBox from "./ProfileBox";
import { Form, Formik } from "formik";
import { number, object, string } from "yup";
import { Profile } from "./models/Profile";
import AlertContext from "./AlertContext";
// import AlertContext from "./AlertContext";

type ProfileLayoutProps = { user: Profile };

const ProfileLayout: FC<ProfileLayoutProps> = ({ user }) => {
  const { showAlert } = useContext(AlertContext);
  console.log("showAlert", showAlert);
  const update = (data: any) => {
    console.log("data", data);
    showAlert("login successfully");
  };
  const validationSchema = object().shape({
    first_name: string().required().max(12),
    last_name: string().required().max(15),
    email: string().required().email(),
    institute: string(),
    year_of_pass_out: number().positive(),
    phone_no: number().required().positive(),
    date_of_birth: string().required(),
    institute_roll_no: number().required().positive().integer(),
    branch: string().required(),
  });

  const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    institute: user.institute.name,
    year_of_pass_out: user.year_of_pass_out,
    phone_no: user.phone_no,
    date_of_birth: user.date_of_birth,
    institute_roll_no: user.institute_roll_no,
    branch: user.branch,
  };

  return (
    <div>
      <Card>
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          Personal Details
        </h1>
        <Formik
          onSubmit={update}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form>
            <ProfileBox name="first_name">
              First Name<span className="text-red-500">*</span>
            </ProfileBox>

            <ProfileBox name="last_name">
              Last Name{" "}
              <span className="text-red-500">
                {" "}
                (Skip only if you don't have it in official documents)
              </span>
            </ProfileBox>

            <ProfileBox name="email">Email address</ProfileBox>
            <ProfileBox name="institute">
              Institute Name <span className="text-red-500">*</span>
            </ProfileBox>
            <ProfileBox name="year_of_pass_out" type="date">
              Year Of Passout
            </ProfileBox>
            <ProfileBox name="phone_no">
              Phone Number<span className="text-red-500">*</span>
            </ProfileBox>
            <ProfileBox name="date_of_birth" type="date">
              Date Of Birth<span className="text-red-500">*</span>
            </ProfileBox>
            <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
              <label htmlFor="device">
                Device you are using to do your assignments
                <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 text-gray-900  bg-gray-50  rounded-md"
                id="device"
              >
                <option value="mobile with keyboard">
                  mobile with keyboard
                </option>
                <option value="mobile without keyboard">
                  mobile without keyboard
                </option>
                <option value="Personal computer/laptop">
                  Personal computer/laptop
                </option>
                <option value="College computer/laptop">
                  College computer/laptop
                </option>
              </select>
            </div>
            <ProfileBox name="institute_roll_no">Institute roll no.</ProfileBox>
            <ProfileBox name="branch">Branch</ProfileBox>
            <div className="mt-5 border-t border-gray-200 items-center pt-4">
              <Button>Update</Button>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default ProfileLayout;
