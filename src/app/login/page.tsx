"use client";
import { Form, Input, Button, Checkbox, Alert, Spin } from "antd";
import { useEffect, useState } from "react";
import { LoginUser } from "../../models/user";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useLogin } from "@/hooks/useAuth/useLogin";

const Login = () => {
  const { goToHome, goToRegister } = useAppNavigate();
  const { Login, isPending, isError, isSuccess, data } = useLogin();

  const [form] = Form.useForm();
  const [formData, setFormData] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (values.email && values.password) {
        Login(values);
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        goToHome();
      }, 1500); // 2 ثانیه نمایش موفقیت قبل از ریدایرکت
    }
    if (isError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000); // 2 ثانیه نمایش خطا
    }
  }, [isSuccess, isError, goToHome]);

  console.log(data);

  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 m-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(_, values) => setFormData(values)}
          onFinish={handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            label="Email address"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Check me out</Checkbox>
          </Form.Item>

          {showSuccess && (
            <Alert
              message="Login successful!"
              type="success"
              showIcon
              closable
              onClose={() => setShowSuccess(false)}
              className="mb-4"
            />
          )}
          {showError && (
            <Alert
              message="Login failed. Please try again."
              type="error"
              showIcon
              closable
              onClose={() => setShowError(false)}
              className="mb-4"
            />
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              block
              size="large"
            >
              Submit
            </Button>
          </Form.Item>

          <p className="text-center mt-4">
            Don't have account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={goToRegister}
            >
              Register now
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
