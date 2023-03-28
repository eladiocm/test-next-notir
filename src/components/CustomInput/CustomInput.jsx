import React from 'react'
import { Box, Typography, TextField, IconButton, InputAdornment } from '@mui/material'

const CustomInput = ({
  label,
  variantLabe = 'body1',
  name,
  type = 'text',
  value,
  color = 'secondary',
  size,
  placeholder,
  onChange,
  inputProps,
  adornmentStart,
  adornmentEnd,
  showPassword,
  togglePasswordVisibility
}) => {
  return (
    <Box display='flex' flexDirection='column' gap='4px' sx={{ width: '100%' }}>
      <Typography variant={variantLabe}>{label}</Typography>
      <TextField
        color={color}
        size={size}
        type={type}
        fullWidth
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        inputProps={inputProps}
        InputProps={{
          startAdornment: adornmentStart && (
            <InputAdornment position='start'>
              <IconButton sx={{ padding: '0px' }}>{adornmentStart()}</IconButton>
              {type === 'tel' && <span style={{ color: 'rgba(0, 0, 0, 0.38)', marginLeft: '8px' }}>+1</span>}
            </InputAdornment>
          ),
          endAdornment: adornmentEnd && (
            <InputAdornment position='end'>
              <IconButton onClick={togglePasswordVisibility} edge='end' sx={{ right: '8px' }}>
                {showPassword ? adornmentEnd().visibleIcon : adornmentEnd().hiddenIcon}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default CustomInput
