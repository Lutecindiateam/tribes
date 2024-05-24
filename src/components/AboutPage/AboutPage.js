
import React, { useEffect, useState } from "react";
// import {  Container } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";


const AboutPage = () => {

    const [data, setData] = useState([])

    // console.log(data);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/about`)
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
                <Row>
                    <Col xl={6} style={{ marginTop: "50px" }} >
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 219) {
                                    return (
                                        <>
                                            <p  dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                    </Col>
                    <Col xl={6} style={{ marginTop: "50px" }} >
                        {data && data.map((post, index) => {
                            if (post.id === 241) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange"}}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px"}} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col xl={6}  >
                        {data && data.map((post, index) => {
                            if (post.id === 242) {
                                return (
                                    <>
                                        <b className="font-bold" style={{ fontSize: "2.5rem", color: "orange"}}>{post.title.rendered}</b>

                                        <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                    </>
                                )
                            }
                        })}
                    </Col>
                    <Col xl={6}>
                        {data &&
                            data.map((post, index) => {
                                if (post.id === 243) {
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
          
             </Container>
       </section>
    );
};

export default AboutPage;
