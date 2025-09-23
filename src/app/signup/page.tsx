"use client";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useRegister } from "@/hooks/useAuth/useRegister";
import { UserBody } from "@/models/user";
import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Alert, Typography } from "antd";

const { Text } = Typography;

const SignUp = () => {
  const { goToLogin } = useAppNavigate();
  const { Register, isPending, data, isError, isSuccess } = useRegister();
  const [form] = Form.useForm();

  const [formData, setFormData] = useState<UserBody>({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (values.name && values.email && values.password && values.avatar) {
        Register(values);
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      goToLogin();
    }
  }, [isSuccess, goToLogin, form]);

  console.log(data);

  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md m-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Register</h3>
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(_, values) => setFormData(values)}
          className="space-y-4"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter Your Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter email" size="large" />
          </Form.Item>

          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[{ required: true, message: "Please enter an avatar URL" }]}
          >
            <Input placeholder="Avatar URL" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Check me out</Checkbox>
          </Form.Item>

          {isPending && (
            <Alert message="Please wait..." type="info" showIcon className="" />
          )}
          {isError && (
            <Alert
              message="Registration failed. Please try again later."
              type="error"
              showIcon
              className="-mt-10"
            />
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              onClick={handleSubmit}
              block
              size="large"
            >
              Register
            </Button>
          </Form.Item>

          <Text className="text-center block">
            Have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={goToLogin}
            >
              Login now
            </span>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
