import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import { orders } from "../../../common/data";
import { Link } from "react-router-dom";
import TableContainerPodcast from "../../components/Common/TableContainerPodcast";

const AllUser = () => {
  const [StaticToggle, setStaticToggle] = useState(false)
  const [RowSelected, setRowSelected] = useState()

  const tog_static = (row) => {
    console.log("Row is ")
    console.log(row)
    setRowSelected(row)
    setStaticToggle(!StaticToggle)
  }


  const data = [
    {
      id: 1,
      title: "Alice Brown",
      Description: "Alice is a skilled software engineer specializing in AI.",
      dateCreated: "2024-12-01T08:00:00Z",
    },
    {
      id: 2,
      title: "Bob Carter",
      Description: "Bob is a project manager with expertise in agile methodologies.",
      dateCreated: "2024-12-01T09:00:00Z",
    },
    {
      id: 3,
      title: "Cindy Dawson",
      Description: "Cindy is a graphic designer with a passion for branding.",
      dateCreated: "2024-12-01T10:00:00Z",
    },
    {
      id: 4,
      title: "David Evans",
      Description: "David is a financial analyst focusing on investment strategies.",
      dateCreated: "2024-12-01T11:00:00Z",
    },
    {
      id: 5,
      title: "Emily Foster",
      Description: "Emily is a marketing expert known for her creativity.",
      dateCreated: "2024-12-01T12:00:00Z",
    },
    {
      id: 6,
      title: "Frank Green",
      Description: "Frank is an entrepreneur with several successful startups.",
      dateCreated: "2024-12-01T13:00:00Z",
    },
    {
      id: 7,
      title: "Grace Hill",
      Description: "Grace is a data scientist with a love for big data analytics.",
      dateCreated: "2024-12-01T14:00:00Z",
    },
    {
      id: 8,
      title: "Henry Irwin",
      Description: "Henry is a skilled mechanical engineer.",
      dateCreated: "2024-12-01T15:00:00Z",
    },
    {
      id: 9,
      title: "Isla Johnson",
      Description: "Isla is a renowned architect with sustainable design expertise.",
      dateCreated: "2024-12-01T16:00:00Z",
    },
    {
      id: 10,
      title: "Jack Kelly",
      Description: "Jack is an author of several science fiction novels.",
      dateCreated: "2024-12-01T17:00:00Z",
    },
    {
      id: 11,
      title: "Katie Lee",
      Description: "Katie is a software developer specializing in mobile apps.",
      dateCreated: "2024-12-01T18:00:00Z",
    },
    {
      id: 12,
      title: "Liam Morgan",
      Description: "Liam is a cybersecurity expert with global recognition.",
      dateCreated: "2024-12-01T19:00:00Z",
    },
    {
      id: 13,
      title: "Mia Nelson",
      Description: "Mia is an interior designer known for modern aesthetics.",
      dateCreated: "2024-12-01T20:00:00Z",
    },
    {
      id: 14,
      title: "Noah Owens",
      Description: "Noah is a journalist covering international affairs.",
      dateCreated: "2024-12-01T21:00:00Z",
    },
    {
      id: 15,
      title: "Olivia Parker",
      Description: "Olivia is a teacher dedicated to STEM education.",
      dateCreated: "2024-12-01T22:00:00Z",
    },
    {
      id: 16,
      title: "Paul Quinn",
      Description: "Paul is a renowned chef specializing in fusion cuisine.",
      dateCreated: "2024-12-01T23:00:00Z",
    },
    {
      id: 17,
      title: "Quincy Reed",
      Description: "Quincy is a photographer with a love for landscapes.",
      dateCreated: "2024-12-02T00:00:00Z",
    },
    {
      id: 18,
      title: "Rachel Scott",
      Description: "Rachel is a human rights lawyer working for global NGOs.",
      dateCreated: "2024-12-02T01:00:00Z",
    },
    {
      id: 19,
      title: "Samuel Taylor",
      Description: "Samuel is an IT consultant helping businesses modernize.",
      dateCreated: "2024-12-02T02:00:00Z",
    },
    {
      id: 20,
      title: "Tina Underwood",
      Description: "Tina is a social worker dedicated to community development.",
      dateCreated: "2024-12-02T03:00:00Z",
    }
  ];




  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Name",
        accessor: "title",
        disableFilters: false,
        filterable: false,
      },
      {
        Header: "Description",
        accessor: "Description",
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Date Joined",
        accessor: "dateCreated",
        disableFilters: true,
        filterable: false,
        Cell: ({ value }) => {
          const formattedDate = new Date(value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return formattedDate;
        },
      },
      {
        Header: "Action",
        accessor: null,
        Cell: ({ row }) => {
          return (
            <React.Fragment>
              <Link to="/ViewUser" className="mx-1"><i className="mdi mdi-eye-outline"></i></Link>
              <Link to="/editUser" className="mx-1 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
              <span to="#" onClick={() => { tog_static(row.original) }} className="text-danger "><i className="mdi mdi-trash-can font-size-18"></i></span>
            </React.Fragment>
          )
        },
        disableFilters: true,
        filterable: false,
      },
    ],
    []
  );

  const breadcrumbItems = [
    { title: "Podcasts", link: "/" },
    { title: "All Podcasts", link: "#" },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Col sm={6} md={4} xl={3} className="mt-4">

          <Modal
            isOpen={StaticToggle}
            toggle={tog_static}
            backdrop="static"
          >
            <ModalHeader toggle={() => setStaticToggle(!StaticToggle)}>
              Delete User
            </ModalHeader>
            <ModalBody>
              <p>
                {RowSelected?.title} </p>
              <ModalFooter>
                <Button type="button" color="light" onClick={() => setStaticToggle(!StaticToggle)}>Close</Button>
                <Button type="button" color="danger">Delete</Button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </Col>

        <Container fluid>
          <Breadcrumbs
            title="All User"
            breadcrumbItems={breadcrumbItems}
          />
          <Card>
            <CardBody>
              <TableContainerPodcast
                columns={columns || []}
                data={data || []}
                isPagination={false}
                isGlobalFilter={true}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
              />
            </CardBody>
          </Card>


        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllUser;
