"use client";
import {
  Avatar,
  Button,
  Row,
  Col,
  Typography,
  Input,
  List,
  Spin,
  Dropdown,
  Menu,
  Divider,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
  EllipsisOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { StorageKey } from "@/constants/react-query";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/config/react_query/queries/profile";
import { useState, useEffect, useRef } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { dashboardProfileData } from "@/api/fakeapi/dashboardProfileData";

const { Text } = Typography;

// Fake dashboard and profile-related data

const AppBar = () => {
  const { goToLogin } = useAppNavigate();
  const { data } = useQuery(["profile"], getProfile, { enabled: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const timeoutRef = useRef(null);

  const fetchItems = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    // Simulate delay with fake data
    setTimeout(() => {
      const filteredItems = dashboardProfileData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 results
      setSearchResults(filteredItems);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchItems(searchQuery), 500);
    return () => clearTimeout(timeoutRef.current);
  }, [searchQuery]);

  const handleLogout = () => {
    localStorage.removeItem(StorageKey.User_Token);
    goToLogin();
  };

  const languageMenu = (
    <Menu onClick={(e) => setLanguage(e.key)} style={{ minWidth: 120 }}>
      <Menu.Item key="en" icon={<span className="mr-2">🇬🇧</span>}>
        English
      </Menu.Item>
      <Menu.Item key="fa" icon={<span className="mr-2">🇮🇷</span>}>
        فارسی
      </Menu.Item>
      <Menu.Item key="es" icon={<span className="mr-2">🇪🇸</span>}>
        Español
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
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

  return (
    <div className="bg-white p-4 -ml-1 ">
      <Row justify="space-between" align="middle" gutter={[16, 8]}>
        <Col xs={24} sm={12} md={6}>
          <div className="relative">
            <Input
              placeholder="Search dashboard or profile..."
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] lg:w-full   lg:ml-0 ml-12  rounded-lg border-gray-300 focus:border-blue-500"
              size="large"
            />
            {loading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Spin size="small" />
              </div>
            )}
            {!loading && searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-1 rounded-lg shadow-lg bg-white border border-gray-100 max-h-[300px] overflow-y-auto">
                <List
                  dataSource={searchResults}
                  renderItem={(item) => (
                    <List.Item className="p-2 hover:bg-gray-50">
                      <Row gutter={12} align="middle">
                        <Col>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 object-cover rounded"
                          />
                        </Col>
                        <Col flex="auto">
                          <Text className="text-sm font-medium text-gray-900 truncate">
                            {item.title}
                          </Text>
                          <Text className="text-xs text-gray-500">
                            {item.description}
                          </Text>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                  size="small"
                />
              </div>
            )}
          </div>
        </Col>
        <Col>
          <Row align="middle" gutter={12}>
            <Col>
              <Dropdown overlay={languageMenu} trigger={["click"]}>
                <Button
                  icon={<GlobalOutlined />}
                  size="large"
                  className="rounded-full hover:bg-gray-100"
                />
              </Dropdown>
            </Col>
            <Col>
              <Button
                icon={<InfoCircleOutlined />}
                size="large"
                className="rounded-full hover:bg-gray-100"
              />
            </Col>
            <Col>
              <Button
                icon={<QuestionCircleOutlined />}
                size="large"
                className="rounded-full hover:bg-gray-100"
              />
            </Col>
            <Col>
              <Dropdown overlay={userMenu} trigger={["click"]}>
                <div className="flex items-center cursor-pointer border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors">
                  <Avatar
                    size="default"
                    icon={<UserOutlined />}
                    src={data?.avatar}
                    className="mr-2"
                  />
                  <Text className="text-sm font-medium text-gray-900">
                    {data?.name || "User"}
                  </Text>
                </div>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AppBar;
