import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function FormInput({ name, label, required }) {
  const { control } = useFormContext()

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            value={field.value || ''}
            label={label}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  )
}

export default FormInput
