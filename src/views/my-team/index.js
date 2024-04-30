// material-ui
import { Typography,TextField, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Myteam = () => (
  <MainCard title="My team">
    <Typography variant="body2">
    <form>
        <TextField
          id="team-member-name"
          label="Team Member Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="team-member-email"
          label="Team Member Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
         
        <Button variant="contained" color="primary" type="submit">
          Add Team Member
        </Button>
      </form>
    </Typography>
  </MainCard>
);

export default Myteam;
