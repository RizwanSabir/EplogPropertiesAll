import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import { orders } from "../../../common/data";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [StaticToggle, setStaticToggle] = useState(false)
const [RowSelected, setRowSelected] = useState()

  const tog_static = (row) => {
    console.log("Row is ")
    console.log(row)
    setRowSelected(row)
    setStaticToggle(!StaticToggle)
  }
  const blogs = [
    {
      id: 6,
      title: "Mastering CSS Grid",
      blogDescription: "A detailed tutorial on using CSS Grid to create responsive layouts effortlessly.",
      category: "Programming",
      author: "Alexandra Wright",
      dateCreated: "2024-01-27T10:00:00Z",
      tags: ["CSS", "Web Development", "Responsive Design"],
      readTime: "7 minutes"
    },
    {
      id: 7,
      title: "10 Tips for Decluttering Your Home",
      blogDescription: "Effective strategies for minimizing clutter and organizing your living space for a stress-free life.",
      category: "Lifestyle",
      author: "Jessica Brown",
      dateCreated: "2024-01-29T08:00:00Z",
      tags: ["Organization", "Minimalism", "Wellness"],
      readTime: "5 minutes"
    },
    {
      id: 8,
      title: "Exploring Quantum Computing",
      blogDescription: "An introduction to quantum computing and its potential to transform technology.",
      category: "Technology",
      author: "James Edwards",
      dateCreated: "2024-02-01T15:30:00Z",
      tags: ["Quantum Computing", "Innovation", "Technology"],
      readTime: "14 minutes"
    },
    {
      id: 9,
      title: "Yoga for Beginners",
      blogDescription: "A beginner-friendly guide to yoga, including poses, tips, and benefits.",
      category: "Health",
      author: "Priya Sharma",
      dateCreated: "2024-02-04T09:15:00Z",
      tags: ["Yoga", "Fitness", "Wellness"],
      readTime: "9 minutes"
    },
    {
      id: 10,
      title: "A Guide to Urban Gardening",
      blogDescription: "Learn how to grow your own vegetables and herbs in small urban spaces.",
      category: "Lifestyle",
      author: "Liam Campbell",
      dateCreated: "2024-02-06T14:00:00Z",
      tags: ["Gardening", "Sustainability", "DIY"],
      readTime: "10 minutes"
    },
    {
      id: 11,
      title: "The Basics of Cryptocurrency",
      blogDescription: "An easy-to-understand guide to cryptocurrency and blockchain technology.",
      category: "Finance",
      author: "Nina Carter",
      dateCreated: "2024-02-08T12:00:00Z",
      tags: ["Cryptocurrency", "Blockchain", "Finance"],
      readTime: "8 minutes"
    },
    {
      id: 12,
      title: "Healthy Meal Prep Ideas",
      blogDescription: "Simple and nutritious meal prep ideas to save time and eat healthy.",
      category: "Food",
      author: "Chris Johnson",
      dateCreated: "2024-02-10T08:45:00Z",
      tags: ["Meal Prep", "Health", "Cooking"],
      readTime: "6 minutes"
    },
    {
      id: 13,
      title: "Introduction to Node.js",
      blogDescription: "Learn the fundamentals of Node.js and how it powers modern web applications.",
      category: "Programming",
      author: "Ethan Lee",
      dateCreated: "2024-02-12T18:30:00Z",
      tags: ["Node.js", "JavaScript", "Backend Development"],
      readTime: "9 minutes"
    },
    {
      id: 14,
      title: "How to Build a Morning Routine",
      blogDescription: "Create a morning routine that sets the tone for a productive day.",
      category: "Self-Improvement",
      author: "Sophia Martinez",
      dateCreated: "2024-02-15T07:30:00Z",
      tags: ["Productivity", "Habits", "Lifestyle"],
      readTime: "5 minutes"
    },
    {
      id: 15,
      title: "The Evolution of Gaming",
      blogDescription: "An exploration of how video games have evolved over the decades.",
      category: "Technology",
      author: "Andrew Parker",
      dateCreated: "2024-02-18T10:15:00Z",
      tags: ["Gaming", "History", "Technology"],
      readTime: "13 minutes"
    },
    {
      id: 16,
      title: "DIY Home Renovation Projects",
      blogDescription: "Affordable and creative DIY projects to transform your living space.",
      category: "Lifestyle",
      author: "Emily Moore",
      dateCreated: "2024-02-20T11:00:00Z",
      tags: ["DIY", "Home Improvement", "Interior Design"],
      readTime: "8 minutes"
    },
    {
      id: 17,
      title: "Understanding Data Science",
      blogDescription: "A beginner’s guide to data science concepts and tools.",
      category: "Technology",
      author: "Victor Nguyen",
      dateCreated: "2024-02-22T13:45:00Z",
      tags: ["Data Science", "AI", "Analytics"],
      readTime: "11 minutes"
    },
    {
      id: 18,
      title: "Top 5 Destinations for 2024",
      blogDescription: "A curated list of must-visit travel destinations for the year.",
      category: "Travel",
      author: "Anna Wilson",
      dateCreated: "2024-02-24T09:30:00Z",
      tags: ["Travel", "Adventure", "Exploration"],
      readTime: "6 minutes"
    },
    {
      id: 19,
      title: "The Science Behind Sleep",
      blogDescription: "Explore the importance of sleep and tips for better rest.",
      category: "Health",
      author: "Oliver Hayes",
      dateCreated: "2024-02-26T22:00:00Z",
      tags: ["Sleep", "Wellness", "Mental Health"],
      readTime: "7 minutes"
    },
    {
      id: 20,
      title: "How to Start a Podcast",
      blogDescription: "Step-by-step guide to starting your own podcast and growing your audience.",
      category: "Media",
      author: "Charlotte Kim",
      dateCreated: "2024-02-28T16:20:00Z",
      tags: ["Podcasting", "Media", "Creativity"],
      readTime: "10 minutes"
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
        Header: "Category",
        accessor: "category",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Author",
        accessor: "author",
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
        Header: "Read Time",
        accessor: "readTime",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Action",
        accessor:null,
        Cell: ({row}) => {
          return (
            <React.Fragment>
              <Link to="/ViewBlog" className="mx-1"><i className="mdi mdi-eye-outline"></i></Link>
              <Link to="/editBlog" className="mx-1 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
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
    { title: "Blogs", link: "/" },
    { title: "All blogs", link: "#" },
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
              <TableContainer
                columns={columns || []}
                data={blogs || []}
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

export default AllBlogs;
