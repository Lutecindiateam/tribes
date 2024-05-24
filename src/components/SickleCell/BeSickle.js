
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import axios from "axios";


const BeSickle = () => {

    const [data, setData] = useState([])
    console.log(data);


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/sickle`)
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
                    <Col xl={12} className="mx-auto text-center" >
                        {data && data.map((post, index) => {
                            if (post.id === 400) {
                                return (
                                    <>
                                        {/* <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b> */}

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                  
                </Row>
   
                <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 403) {
                                    return (
                                        <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

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
                            if (post.id === 404) {
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
                            if (post.id === 407) {
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
                                if (post.id === 406) {
                                    return (
                                        <>
                                                                                <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

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
                    <Col xl={12} className="mx-auto text-center" >
                        {data && data.map((post, index) => {
                            if (post.id === 408) {
                                return (
                                    <>
                                        {/* <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b> */}

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                  
                </Row>
                <Row >
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 410) {
                                    return (
                                        <>
                                                                                <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange", fontFamily: "serif" }}>{post.title.rendered}</b>

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
                            if (post.id === 411) {
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
                    <Col xl={10} className="mx-auto text-center"   >
                        {data && data.map((post, index) => {
                            if (post.id === 414) {
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
            </Container>






        </section>
    );
};

export default BeSickle;
