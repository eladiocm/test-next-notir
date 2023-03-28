import React, { useEffect, createRef } from 'react'
import TextField from '@mui/material/TextField'

const CharacterInputs = ({ setDisabled, inputs, setInputs }) => {
  const inputRefs = inputs.map(() => createRef())

  const handleChange = (e, index) => {
    const value = e.target.value

    if (value.length <= 1) {
      const updatedInputs = [
        ...inputs.slice(0, index),
        value,
        ...(index < inputs.length - 1 ? inputs.slice(index + 1) : [])
      ]

      setInputs(updatedInputs)

      if (value.length === 1 && index < inputs.length - 1) {
        inputRefs[index + 1].current.focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && inputs[index].length === 0) {
      // En caso de retroceder, cambiar el enfoque al input anterior automáticamente
      inputRefs[index - 1].current.focus()
    }
  }

  useEffect(() => {
    setDisabled(inputs.some(input => input.length === 0))
  }, [inputs])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        {inputs.map((input, i) => (
          <TextField
            key={i}
            value={input}
            color='info'
            required
            onChange={(e) => { handleChange(e, i) }}
            onKeyDown={(e) => { handleKeyDown(e, i) }}
            inputProps={{ maxLength: 1 }}
            inputRef={inputRefs[i]}
            autoFocus={i === 0}
            sx={{
              ml: i !== 0 ? 1 : 0,
              width: '56px',
              height: '56px'
            }}
            className='inputActivation'
          />
        ))}
      </div>
    </div>
  )
}

export default CharacterInputs
