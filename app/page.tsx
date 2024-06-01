'use client'
import { defaultFlow, defaultStep } from '@/strings';
import { Container, Stack, TextField, Typography, Divider, Link, Paper, Grid, Box } from '@mui/material'
import { Button } from '@/styled';
import { Code } from '@/model';
import React from 'react';
import { HomeProps } from '@/types';


class Home extends React.Component<{}, HomeProps> {
  _context: Code

  constructor(props: {}) {
    super(props)
    this._context = new Code(defaultFlow, defaultStep)
    this.state = {
      'view': this._context.currentView,
      'code': this._context.text['flow']
    }
  }

  toggleButton = (view: 'flow' | 'step') => {
    this._context.currentView = view
    this.setState((prevState) => ({
      ...prevState,
      'view': view,
      'code': this._context.text[view]
    }))
  }

  updateCode = (code: string) => {
    this._context.text = code
    this.setState((prevState) => ({
      ...prevState,
      'code': code
    }))
  }

  render() {

    const { view, code } = this.state

    return (
      <Container maxWidth='lg'>
        <Stack direction='column' spacing={2}>

          <Typography variant='h5'>Online Link Editor</Typography>

          <Link href="https://github.com/kyutekrap/Link">See Github</Link>

          <Divider />

          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                <Stack direction='column' spacing={2}>
                  <Stack direction='row' spacing={2} height={30}>
                    <Button variant='outlined' active={view === 'flow'} onClick={() => this.toggleButton('flow')}>Flow</Button>
                    <Button variant='outlined' active={view === 'step'} onClick={() => this.toggleButton('step')}>Step</Button>
                    <Button variant='contained'>Run</Button>
                  </Stack>
                  <TextField
                  multiline
                  rows={20}
                  onChange={(event) => this.updateCode(event.target.value)}
                  value={code} />
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Stack direction='column' spacing={2}>
                  <Stack direction='row' spacing={2} height={30}>
                    <Typography variant='h6'>Output:</Typography>
                  </Stack>
                  <TextField multiline rows={20} disabled />
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Paper style={{padding: 20, backgroundColor: "#eeeeee"}}>
            <Typography variant='body1'>Available modules: </Typography>
            <Typography variant='subtitle2'>import datetime, import math, import random, import json, import re, import hashlib</Typography>
          </Paper>

        </Stack>

      </Container>
    );
  }
}

export default Home
