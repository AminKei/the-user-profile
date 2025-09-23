"use client";
import { Avatar, Row, Col, Typography } from "antd";
const { Text } = Typography;

const ProfileHeader = ({ name, title, avatar, bio }) => {
  return (
    <div
      style={{
        height: 250,
        position: "relative",
        backgroundColor: "white",
        marginBottom: "4vh",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          height: "45%",
          width: "100%",
          backgroundPosition: "cover",
          backgroundAttachment: "none",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1722855047139-457d7756f17a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        className="absolute left-0 top-0 right-0 rounded-tl-lg rounded-tr-lg"
      />

      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: 160 }}
          className="absolute left-0 right-0 top-1/4 mx-2"
        >
          <Avatar
            size={158}
            src={avatar || "https://via.placeholder.com/128"}
            style={{
              border: "5px solid #fff",
            }}
          />
        </div>

        <Row className="flex items-center justify-between w-full h-[100px]">
          <Col className="flex mt-36 ml-52">
            <Typography>
              <p
                style={{ margin: 0 }}
                className="first-letter:uppercase  lg:text-2xl text-sm font-bold  "
              >
                {name || "Kevin Gilbert"}
              </p>
              <Text style={{ display: "block" }}>
                {title || "Software Engineer"}
              </Text>
            </Typography>
          </Col>
          <div className="  items-center justify-center gap-10 mr-36 top-[70%] relative lg:flex none text-sm lg:text-3xl">
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "left" }}>
                <Text strong style={{ fontSize: 22 }}>
                  $95,400
                </Text>
                <Text type="secondary" style={{ display: "block" }}>
                  Total Balance
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "left" }}>
                <Text strong style={{ fontSize: 22 }}>
                  3,475
                </Text>
                <Text type="secondary" style={{ display: "block" }}>
                  Board Card
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "left" }}>
                <Text strong style={{ fontSize: 22 }}>
                  3,475
                </Text>
                <Text type="secondary" style={{ display: "block" }}>
                  Board Card
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "left" }}>
                <Text strong style={{ fontSize: 22 }}>
                  63,867
                </Text>
                <Text type="secondary" style={{ display: "block" }}>
                  Calendar Events
                </Text>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ProfileHeader;
