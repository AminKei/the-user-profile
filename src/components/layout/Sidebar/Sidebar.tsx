"use client";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
  FileOutlined,
  LockOutlined,
  ProfileOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
  FileTextOutlined,
  TableOutlined,
  FormOutlined,
  BookOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const { goToHome } = useAppNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    { key: "1", icon: <HomeOutlined />, label: "Dashboard", onClick: goToHome },
    { key: "2", icon: <CalendarOutlined />, label: "Calendar" },
    { key: "3", icon: <FileOutlined />, label: "Kanban Board" },
    { key: "4", icon: <FileOutlined />, label: "File Manager" },
    { key: "5", icon: <LockOutlined />, label: "Authentication" },
    { key: "6", icon: <ProfileOutlined />, label: "Profile" },
    { key: "7", icon: <SettingOutlined />, label: "Setting" },
    { key: "8", icon: <DollarOutlined />, label: "Billing" },
    { key: "9", icon: <DollarOutlined />, label: "Pricing Plans" },
    { key: "10", icon: <QuestionCircleOutlined />, label: "FAQs" },
    { key: "11", icon: <FileTextOutlined />, label: "Blank Page" },
    { key: "12", icon: <TableOutlined />, label: "Card" },
    { key: "13", icon: <TableOutlined />, label: "Table" },
    { key: "14", icon: <FormOutlined />, label: "Form Elements" },
    { key: "16", icon: <BookOutlined />, label: "Documentation" },
  ];

  // تشخیص دستگاه موبایل/تبلت
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* دکمه منو همیشه نمایش داده بشه */}
      <div className="fixed top-4 left-4 z-50">
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="p-2 bg-white rounded-md border-gray-200 border text-gray-600 hover:text-gray-800"
          >
            <MenuOutlined style={{ fontSize: "20px" }} />
          </button>
        )}
      </div>

      {/* منو که با کلیک باز می‌شه */}
      {isMobile && isOpen && (
        <div
          className="fixed top-0 left-0 w-60 h-full bg-white shadow-md transition-all duration-300 z-[10000]"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          <div className="p-4 text-center flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="p-2 bg-white rounded-md  text-gray-600 hover:text-gray-800"
            >
              <MenuOutlined style={{ fontSize: "20px" }} />
            </button>
            <h2 className="text-xl font-bold">Logo Name</h2>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["6"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={({ key }) => {
              const item = items.find((i) => i.key === key);
              item?.onClick?.();
              setIsOpen(false); // بستن منو بعد از کلیک
            }}
          />
        </div>
      )}

      {/* منو دسکتاپ */}
      {!isMobile && (
        <div className="h-[90vh] bg-white shadow-md w-60 m-0">
          <div className="p-4 text-center flex items-center gap-5 ml-1">
            <img
              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/substreamer.png"
              alt=""
              width={30}
            />
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["6"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={({ key }) => {
              const item = items.find((i) => i.key === key);
              item?.onClick?.();
            }}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
