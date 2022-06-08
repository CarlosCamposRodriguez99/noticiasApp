import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material';

const Formulario = () => {
  return (
    <form>
      <FormControl>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="categoria"
        >

        </Select>
      </FormControl>
    </form>
  )
}

export default Formulario
