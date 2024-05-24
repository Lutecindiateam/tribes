import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

  MDBRadio
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// import { PageTitle, Footer } from "@/widgets/layout";



function TeamOne() {
  return (
    <>
    
 

      <div className='mt-40 '>
        <MDBContainer fluid>

          <MDBRow className='justify-content-center align-items-center m-5 mt-40'>

            <MDBCard>
              <MDBCardBody className='px-4'>

                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form3' type='text' />
                  </MDBCol>

                  <MDBCol md='6' className='mb-4'>
                    <h6 className="fw-bold">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' />
                  </MDBCol>

                </MDBRow>
                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='How Many Days Would You want to Volunteer' size='lg' id='form4' type='volunteer' />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Area of Interest' size='lg' id='form5' type='interest' />
                  </MDBCol>

                </MDBRow>

                {/* <MDBSelect
              label='Choose option'
              className='mb-4'
              size='lg'
              data={[
                { text: 'Choose option', value: 1, disabled: true },
                { text: 'Subject 1', value: 2 },
                { text: 'Subject 2', value: 3 },
                { text: 'Subject 3', value: 4 }
              ]}
              /> */}
                <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

              </MDBCardBody>
            </MDBCard>

          </MDBRow>
        </MDBContainer>
      </div>
      <br />
      
    </>
  );
}

export default TeamOne;