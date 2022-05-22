import React from 'react'
import { styled } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const CustomTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.6)',
    '&.Mui-focused': {
      color: '#484747',
    },
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#484747',
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: '#484747',
  },
  '& .MuiFilledInput-underline:hover:before': {
    borderBottomColor: '#484747',
  },
  '& .MuiFilledInput-underline:hover:after': {
    borderBottomColor: '#484747',
  },
  '& .MuiFilledInput-root': {
    borderRadius: 0,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.6)',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  },
})

export const CustomButton = styled(Button)({
  '& .MuiAccordionActions-root': {
    color: 'rgba(255,255,255,0.6)',
    '&.Mui-focused': {
      color: 'rgba(255,255,255,0.6)',
    },
  },
  '& .MuiAccordionActions-underline:after': {
    borderBottomColor: 'rgba(255,255,255,0.6)',
  },
  '& .MuiAccordionActions-underline:before': {
    borderBottomColor: 'rgba(255,255,255,0.6)',
  },
  '& .MuiAccordionActions-underline:hover:before': {
    borderBottomColor: 'rgba(255,255,255,0.6)',
  },
  '& .MuiAccordionActions-underline:hover:after': {
    borderBottomColor: 'rgba(255,255,255,0.6)',
  },
  '& .MuiFilledInput-root': {
    borderRadius: 0,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.6)',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  },
})
