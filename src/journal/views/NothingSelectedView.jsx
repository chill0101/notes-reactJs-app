import { Grid, Typography } from '@mui/material';
import { EditNoteOutlined } from '@mui/icons-material';



export const NothingSelectedView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid item xs={ 12 }>
            <EditNoteOutlined sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid item xs={ 12 } sx={{padding: 4} }>
            <Typography color="white" variant='h5'>Selecciona una nota o presiona + para crearla</Typography>
        </Grid>
    </Grid>
  )
}