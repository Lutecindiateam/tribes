// import becomeVolunteerList from "@/data/becomeVolunteerList";
// import image from "@/images/resources/become-a-volunteer.jpg";
import React, { useEffect, useState } from "react";
// import {  Container } from "react-bootstrap";
import { Col, Container, Image, Row } from "react-bootstrap";
// import Link from 'next/link'
// import VolunteerForm from "./VolunteerForm";
import axios from "axios";
// import {Card,Typography } from "@material-tailwind/react";


const BeHealthy = () => {

    const [data, setData] = useState([])
    console.log(data);


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/event`)
            .then((response) => {
                setData(response.data); // Store the data in state
            })
            .catch((err) => {
                console.log("Error", err.response.data.message);
                // Handle errors if needed
            });
    }, []);

    return (
        <section >


            <Container>
            <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}  >
                        {data && data.map((post, index) => {
                            if (post.id === 394) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 128) {
                                    return (
                                        <>
                                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>

                </Row>
   
                <Row>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 132) {
                                    return (
                                        <>
                                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>
                    <Col xl={6} style={{ marginTop: "50px" }} >
                        {data && data.map((post, index) => {
                            if (post.id === 398) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}  >
                        {data && data.map((post, index) => {
                            if (post.id === 134) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 136) {
                                    return (
                                        <>
                                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>

                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 141) {
                                    return (
                                        <>
                                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>
                    <Col xl={6}  >
                        {data && data.map((post, index) => {
                            if (post.id === 139) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}  >
                        {data && data.map((post, index) => {
                            if (post.id === 144) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 178) {
                                    return (
                                        <>
                                            <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

                                            <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>

                </Row>
            </Container>






        </section>
    );
};

export default BeHealthy;
