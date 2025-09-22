"use client";
import { Progress, Typography } from "antd";
const { Text } = Typography;

const PasswordStrength = ({ password }) => {
  const calculateStrength = (pass) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length >= 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    if (/[!@#$%^&*]/.test(pass)) score += 25;
    return Math.min(score, 100); // حداکثر 100
  };

  const strength = calculateStrength(password);
  let status = "exception";
  let text = "Very Weak";

  if (strength >= 25) {
    status = "active";
    text = "Weak";
  }
  if (strength >= 50) {
    status = "active";
    text = "Medium";
  }
  if (strength >= 75) {
    status = "success";
    text = "Strong";
  }

  return (
    <div className="mt-2">
      <Progress percent={strength} status={status} showInfo={false} />
      <Text style={{ color: status === "success" ? "#52c41a" : "##E55B5F" }}>
        {text} (Length: {password.length}, Score: {strength}%)
      </Text>
    </div>
  );
};

export default PasswordStrength;