"use client";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/config/react_query/queries/profile";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import AppBar from "@/components/layout/Appbar/AppBar";
import Statistics from "@/components/layout/Statistics/Statistics";
import LatestActivity from "@/components/layout/LatestActivity/LatestActivity";
import ProfileHeader from "@/components/layout/ProfileHeader/ProfileHeader";
import ContactInfo from "@/components/layout/ContactInfo/ContactInfo";
import UserDetails from "@/components/layout/UserDetails/UserDetails";
import UserEngagementChart from "@/components/layout/UserEngagementChart/UserEngagementChart";
import RecentTasks from "@/components/layout/RecentTasks/RecentTasks";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { Spin, Row, Col } from "antd";

const Profile = () => {
  useAuthGuard();
  const { data, isLoading, isError, error } = useQuery(["profile"], getProfile);

  if (isLoading)
    return (
      <div className="flex justify-center mt-10">
        <Spin size="large" />
      </div>
    );
  if (isError)
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error as string}
      </div>
    );

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AppBar />
        <div className="p-4 overflow-auto bg-gray-100">
          <div className="w-full  mx-auto">
            <ProfileHeader
              name={data?.name || "Kevin Gilbert"}
              title={data?.title || "Software Engineer"}
              avatar={data?.avatar || "https://via.placeholder.com/128"}
              bio={
                data?.bio ||
                "About Me Suspendisse laculis tortor tortor, ac convallis quam dictum mattis. Integer leo ex, cursus et elit..."
              }
            />
            <div className="w-full lg:flex justify-center gap-4 -mt-5 mb-4 ">
              <Col className="lg:w-1/2 ">
                <ContactInfo
                  address={""}
                  email={data?.email || "info@kevin.com"}
                  phone={data?.phone || "+1-202-555-0151"}
                />
              </Col>
              <Col xs={24} md={12} className="w-full lg:w-1/2">
                <UserDetails
                  fullName={data?.name || "Kevin Gilbert"}
                  profession={data?.profession || "UI/UX Lead Designer"}
                  team={data?.team || "UI/UX Designer"}
                  dob={data?.dob || "25 Nov, 1983"}
                />
              </Col>
            </div>
            <Row className="mb-4 w-full">
              <Col xs={24}>
                <Statistics />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={12}>
                <UserEngagementChart />
              </Col>
              <Col xs={24} lg={12}>
                <RecentTasks />
              </Col>

              <Col xs={24}>
                <LatestActivity />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
