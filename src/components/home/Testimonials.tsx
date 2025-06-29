import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const Testimonials = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 1,
          textDecoration: "underline",
        }}
      >
        Testionials
      </Typography>

      <Box sx={{display:'flex',justifyContent:'center',gap:2, flexWrap:'wrap'}}>
        <Grid >
          <Card sx={{ width: "20rem",height:'8rem'}}>
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Avatar sx={{marginTop:'2rem'}}>DM</Avatar>
                <Box sx={{paddingLeft:'1.5rem', }}>
                  <Typography variant="subtitle1">Daniel Morgan</Typography>
                  <Typography>"Zaph Tours exceeded every expectation. Daniel was our guide, and he made the entire safari feel effortless and magical."</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ width: "20rem" }}>
          <Card sx={{ width: "20rem",height:'8rem'}}>
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Avatar src="/images/WHAT.jpeg" sx={{marginTop:'2rem'}}>AW</Avatar>
                <Box sx={{paddingLeft:'1.5rem', }}>
                  <Typography variant="subtitle1">Alice Walker</Typography>
                  <Typography>"I was nervous about traveling solo, but Daniel made me feel like part of a family.</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ width: "20rem" }}>
          <Card sx={{ width: "20rem",height:'8rem'}}>
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Avatar src="/images/AM.jpeg" sx={{marginTop:'2rem'}}>AM</Avatar>
                <Box sx={{paddingLeft:'1.5rem', }}>
                  <Typography variant="subtitle1">Andrew Miller</Typography>
                  <Typography>"This was more than a vacation — it was an experience. From Maasai cultural visits to sunrise balloon rides, everything was thoughtfully planned."</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ width: "20rem" }}>
          <Card sx={{ width: "20rem",height:'8rem'}}>
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Avatar src="images/SC.jpeg" sx={{marginTop:'2rem'}}>SC</Avatar>
                <Box sx={{paddingLeft:'1.5rem', }}>
                  <Typography variant="subtitle1">Samuel Carter</Typography>
                  <Typography>"As first-time travelers to Africa, we had lots of concerns — but Zaph Tours handled everything"</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ width: "20rem" }}>
          <Card sx={{ width: "20rem",height:'8rem'}}>
            <CardContent>
              <Box sx={{ display: "flex" }}>
                <Avatar src="/images/LB.jpeg" sx={{marginTop:'2rem'}}>LB</Avatar>
                <Box sx={{paddingLeft:'1.5rem', }}>
                  <Typography variant="subtitle1">Lillian Brooks</Typography>
                  <Typography>"From the moment we landed to our final sunset drive, everything was seamless. The game drives were surreal."</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;
