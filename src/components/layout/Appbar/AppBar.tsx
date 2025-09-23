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
  Modal,
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
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { StorageKey } from "@/constants/react-query";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/config/react_query/queries/profile";
import { useState, useEffect, useRef } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { dashboardProfileData } from "@/api/fakeapi/dashboardProfileData";

const { Text } = Typography;

const AppBar = () => {
  const { goToLogin } = useAppNavigate();
  const { data } = useQuery(["profile"], getProfile, { enabled: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const timeoutRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const active = (document.activeElement as HTMLElement) ?? null;
      const isTyping =
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable);

      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isMobile]);

  const fetchItems = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const filteredItems = dashboardProfileData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5);
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
      <Menu.Item key="profile" icon={<UserSwitchOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
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

  const renderDesktopSearch = () => (
    <div className="relative" style={{ width: "100%" }}>
      <Input
        ref={searchInputRef as any}
        placeholder="Search dashboard or profile... ( / )"
        prefix={<SearchOutlined />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-lg border-gray-300 focus:border-blue-500"
        size="large"
      />
      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Spin size="small" />
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-g lg:p-5 p-3 -ml-1 ">
      {!isMobile ? (
        // 📌 دسکتاپ: حالت قبلی
        <Row justify="space-between" align="middle" gutter={[20, 8]}>
          <Col xs={24} sm={12} md={6}>
            {renderDesktopSearch()}
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
                  icon={<NotificationOutlined />}
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
                  <div className="flex items-center gap-3 px-5 cursor-pointer border border-gray-200 rounded-lg py-1 hover:bg-gray-50 transition-colors">
                    <Avatar
                      size="default"
                      icon={<UserOutlined />}
                      src={data?.avatar}
                      className="mr-2"
                    />
                    <Text className="text-sm font-medium text-gray-900">
                      {data?.name || "User"}
                    </Text>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        // 📌 موبایل: ایکن‌ها یک ردیف + پروفایل زیرش
        <div className="flex flex-col items-center  gap-3 mt-1">
          {/* آیکن‌ها */}
          <div className="flex justify-end gap-3  w-full">
            <Button
              icon={<SearchOutlined />}
              size="large"
              className="rounded-full"
              onClick={() => setIsSearchModalVisible(true)}
            />
            <Dropdown overlay={languageMenu} trigger={["click"]}>
              <Button
                icon={<GlobalOutlined />}
                size="large"
                className="rounded-full"
              />
            </Dropdown>
            <Button
              icon={<InfoCircleOutlined />}
              size="large"
              className="rounded-full"
            />
            <Button
              icon={<NotificationOutlined />}
              size="large"
              className="rounded-full"
            />
            <Button
              icon={<QuestionCircleOutlined />}
              size="large"
              className="rounded-full"
            />
          </div>

          {/* پروفایل زیر آیکن‌ها */}
          <div className="w-11/12">
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex items-center justify-center gap-2 px-4 py-2 cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Avatar
                  size="default"
                  icon={<UserOutlined />}
                  src={data?.avatar}
                />
                <Text className="text-sm font-medium text-gray-900">
                  {data?.name || "User"}
                </Text>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      )}

      {/* Mobile Search Modal */}
      <Modal
        title="Search"
        open={isSearchModalVisible}
        onCancel={() => setIsSearchModalVisible(false)}
        footer={null}
        width={520}
        destroyOnClose
      >
        <Input
          placeholder="Search dashboard or profile..."
          prefix={<SearchOutlined />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
          onPressEnter={() => fetchItems(searchQuery)}
          className="w-full mb-2"
        />
        {loading && (
          <div className="flex justify-center my-2">
            <Spin />
          </div>
        )}
        {!loading && searchResults.length > 0 && (
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
        )}
      </Modal>
    </div>
  );
};

export default AppBar;
