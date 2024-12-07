import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import { orders } from "../../../common/data";
import { Link } from "react-router-dom";
import TableContainerPodcast from "../../components/Common/TableContainerPodcast";

const AllPodcast = () => {
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
      title: "Blog Post 1",
      Description: "This is a description for blog post 1.",
      dateCreated: "2024-11-01T12:00:00Z",
    },
    {
      id: 2,
      title: "Blog Post 2",
      Description: "This is a description for blog post 2.",
      dateCreated: "2024-11-02T13:00:00Z",
    },
    {
      id: 3,
      title: "Blog Post 3",
      Description: "This is a description for blog post 3.",
      dateCreated: "2024-11-03T14:00:00Z",
    },
    {
      id: 4,
      title: "Blog Post 4",
      Description: "This is a description for blog post 4.",
      dateCreated: "2024-11-04T15:00:00Z",
    },
    {
      id: 5,
      title: "Blog Post 5",
      Description: "This is a description for blog post 5.",
      dateCreated: "2024-11-05T16:00:00Z",
    },
    {
      id: 6,
      title: "Blog Post 6",
      Description: "This is a description for blog post 6.",
      dateCreated: "2024-11-06T17:00:00Z",
    },
    {
      id: 7,
      title: "Blog Post 7",
      Description: "This is a description for blog post 7.",
      dateCreated: "2024-11-07T18:00:00Z",
    },
    {
      id: 8,
      title: "Blog Post 8",
      Description: "This is a description for blog post 8.",
      dateCreated: "2024-11-08T19:00:00Z",
    },
    {
      id: 9,
      title: "Blog Post 9",
      Description: "This is a description for blog post 9.",
      dateCreated: "2024-11-09T20:00:00Z",
    },
    {
      id: 10,
      title: "Blog Post 10",
      Description: "This is a description for blog post 10.",
      dateCreated: "2024-11-10T21:00:00Z",
    },
    {
      id: 11,
      title: "Blog Post 11",
      Description: "This is a description for blog post 11.",
      dateCreated: "2024-11-11T22:00:00Z",
    },
    {
      id: 12,
      title: "Blog Post 12",
      Description: "This is a description for blog post 12.",
      dateCreated: "2024-11-12T23:00:00Z",
    },
    {
      id: 13,
      title: "Blog Post 13",
      Description: "This is a description for blog post 13.",
      dateCreated: "2024-11-13T00:00:00Z",
    },
    {
      id: 14,
      title: "Blog Post 14",
      Description: "This is a description for blog post 14.",
      dateCreated: "2024-11-14T01:00:00Z",
    },
    {
      id: 15,
      title: "Blog Post 15",
      Description: "This is a description for blog post 15.",
      dateCreated: "2024-11-15T02:00:00Z",
    },
    {
      id: 16,
      title: "Blog Post 16",
      Description: "This is a description for blog post 16.",
      dateCreated: "2024-11-16T03:00:00Z",
    },
    {
      id: 17,
      title: "Blog Post 17",
      Description: "This is a description for blog post 17.",
      dateCreated: "2024-11-17T04:00:00Z",
    },
    {
      id: 18,
      title: "Blog Post 18",
      Description: "This is a description for blog post 18.",
      dateCreated: "2024-11-18T05:00:00Z",
    },
    {
      id: 19,
      title: "Blog Post 19",
      Description: "This is a description for blog post 19.",
      dateCreated: "2024-11-19T06:00:00Z",
    },
    {
      id: 20,
      title: "Blog Post 20",
      Description: "This is a description for blog post 20.",
      dateCreated: "2024-11-20T07:00:00Z",
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
        Header: "Title",
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
        Header: "Date Created",
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
        accessor:null,
        Cell: ({row}) => {
          return (
            <React.Fragment>
              <Link to="/ViewPodcast" className="mx-1"><i className="mdi mdi-eye-outline"></i></Link>
              <Link to="/editPodcast" className="mx-1 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
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
             Delete Blog
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
            title="Blogs"
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

export default AllPodcast;
