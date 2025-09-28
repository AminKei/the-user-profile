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
import KPICard, { KPIData } from "@/components/layout/KPICard/KPICard";

const kpis: KPIData[] = [
  { id: "1", title: "Profile Views", value: 1280, change: 8.4 },
  { id: "2", title: "Sessions", value: 540, change: 5.2 },
  { id: "3", title: "Tasks Completed", value: 320, change: 12.1 },
  { id: "4", title: "New Messages", value: 75, change: 3.9 },
];

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
              title={"Software Engineer"}
              avatar={data?.avatar || "https://via.placeholder.com/128"}
              bio={
                "About Me Suspendisse laculis tortor tortor, ac convallis quam dictum mattis. Integer leo ex, cursus et elit..."
              }
            />
            <div className="w-full lg:flex justify-center gap-4 -mt-5 mb-4 ">
              <Col className="lg:w-1/2 ">
                <ContactInfo
                  address={""}
                  email={data?.email || "info@kevin.com"}
                  phone={"+1-202-555-0151"}
                />
              </Col>
              <Col xs={24} md={12} className="w-full lg:w-1/2">
                <UserDetails
                  fullName={data?.name || "Kevin Gilbert"}
                  profession={"UI/UX Lead Designer"}
                  team={"UI/UX Designer"}
                  dob={"25 Nov, 1983"}
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
            </Row>
            <div className="lg:flex grid w-full justify-between mt-4">
              <Col className="lg:w-2/3 w-full">
                <LatestActivity />
              </Col>
              <Col className="lg:w-1/3 w-full gap-3 lg:ml-4 ml-0  lg:mt-0 mt-4 justify-center grid ">
                <Row gutter={[20, 20]}>
                  {kpis.map((k) => (
                    <Col key={k.id} className="w-1/2 ">
                      <KPICard data={k} />
                    </Col>
                  ))}
                </Row>

                <Row gutter={[20, 20]}>
                  {kpis.slice(2, 4).map((k) => (
                    <Col key={k.id} className="w-1/2 ">
                      <KPICard data={k} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
