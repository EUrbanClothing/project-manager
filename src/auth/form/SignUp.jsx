import { UrbanLogo } from "../../logo/UrbanLogo";
import { Button, Divider, Form, Input, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const { Item } = Form;
const { Title, Text } = Typography;

const SignUp = () => {
  const handleFinish = (values) => {
    const { email, password } = values;

    const proceedValues = {
      ...values,
      createdAt: Date.now(),
    };

    console.log({ proceedValues });
  };
  return (
    <div className="bg-[#f9fafb] h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white sm:rounded-xl shadow-md p-6 rounded-none">
        <div className="flex justify-center mb-6">
          <UrbanLogo />
        </div>

        <Title level={3} className="text-center mb-4">
          Register
        </Title>

        <Form onFinish={handleFinish} layout="vertical" className="w-full">
          <Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              className="rounded-lg px-4 py-2"
            />
          </Item>

          <Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              placeholder="********"
              className="rounded-lg px-4 py-2"
            />
          </Item>

          <Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="********"
              className="rounded-lg px-4 py-2"
            />
          </Item>

          {/* Forgot Password */}
          <div className="flex justify-end mb-4">
            <Text className="text-blue-500 cursor-pointer hover:underline">
              Forgot Password?
            </Text>
          </div>

          {/* Sign Up Button */}
          <Button
            type="primary"
            htmlType="submit"
            className="w-full rounded-lg p-4"
          >
            Sign Up
          </Button>

          {/* Divider */}
          <Divider>Or continue with</Divider>

          {/* Google Sign In */}
          <Button
            type="default"
            icon={<GoogleOutlined />}
            className="w-full flex justify-center items-center rounded-lg p-4"
          >
            Sign Up with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
