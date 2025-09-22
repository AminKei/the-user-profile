import { Divider, Menu } from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
  EllipsisOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { StorageKey } from "@/constants/react-query";
const { goToLogin } = useAppNavigate();

const handleLogout = () => {
  localStorage.removeItem(StorageKey.User_Token);
  goToLogin();
};

export const userMenu = (
  <Menu style={{ minWidth: 200, borderRadius: 8, padding: 8 }}>
    <Menu.Item
      key="profile"
      icon={<UserSwitchOutlined />}
      // onClick={() => navigate("/profile")}
    >
      Profile
    </Menu.Item>
    <Menu.Item
      key="dashboard"
      icon={<DashboardOutlined />}
      // onClick={() => navigate("/dashboard")}
    >
      Dashboard
    </Menu.Item>
    <Menu.Item
      key="setting"
      icon={<SettingOutlined />}
      // onClick={() => navigate("/settings")}
    >
      Settings
    </Menu.Item>
    <Divider style={{ margin: "8px 0" }} />
    <Menu.Item
      key="logout"
      icon={<LogoutOutlined />}
      onClick={handleLogout}
      style={{ color: "#ff4d4f" }}
    >
      Logout
    </Menu.Item>
    <Menu.Item
      key="more"
      icon={<EllipsisOutlined />}
      disabled
      style={{ color: "#bfbfbf" }}
    >
      More...
    </Menu.Item>
  </Menu>
);
