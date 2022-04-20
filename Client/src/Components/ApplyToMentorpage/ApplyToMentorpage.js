import React, { useState } from 'react';
import Navigationbar from './../../Components/Navigationbar/Navigationbar';
import Footer from './../../Components/Footerpage/Footer';
import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';

const ApplyToMentorpage = () => {
  return (
    <>
      <Navigationbar />
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>

      <Footer />
    </>
  );
};

export default ApplyToMentorpage;
