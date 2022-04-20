import React, { useState } from 'react';
import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';

const ApplyToMentorpage = () => {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
};

export default ApplyToMentorpage;
