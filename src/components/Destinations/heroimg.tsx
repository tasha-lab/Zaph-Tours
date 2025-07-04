import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
  Paper,
  Slide,
} from "@mui/material";


const Heroimg = () => {
  return (
    <>
      <Box>
        <Slide direction="left" in timeout={1200}>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 1,
            textDecoration: "underline",
          }}
        >
          More Destinations
        </Typography>
        </Slide>
      </Box>
      <Grid
        container
        direction={"row"}
        spacing={3}
        sx={{
          width: "100%",
          p: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/mara.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Maasai Mara National Reserve</Typography>
              <Typography variant="body1">
                Witness the Great Migration across golden savannahs. A
                must-visit for Big Five safaris.
              </Typography>
              <Grid justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}>
                <Stack
                
                  sx={{
                    position: "relative",
                    fontSize: "1.5rem",
                    paddingTop: ".8rem",
                  }}
                >
                  <Button
                  
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary",width:'50%' }}
                    href="https://mufasatoursandtravels.com/destinations/masai-mara-national-reserve/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $430pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $390pp
                  </Typography>
                </Paper>
                </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/hero3.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Amboseli National Park</Typography>
              <Typography variant="body1">
                Marvel at elephants with Mount Kilimanjaro rising in the
                background. Amboseli offers close wildlife views and epic photo
                ops
              </Typography>
              <Grid 
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/amboseli-national-park/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $390pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $340pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/samburu.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Samburu National Reserve</Typography>
              <Typography variant="body1">
                Home to rare wildlife like Grevy’s zebra and reticulated
                giraffes. Raw and untamed beauty.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/samburu-national-reserve/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $370pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $320pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/pajeta.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Ol Pejeta Conservancy</Typography>
              <Typography variant="body1">
                Black rhinos, chimpanzees, and the last northern white rhinos
                await. A conservation hub.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/olpejeta-conservancy/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $490pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $440pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/gate.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Hell’s Gate National Park</Typography>
              <Typography variant="body1">
                Cycle past geothermal cliffs and walk gorges. Great for hikers
                and thrill-seekers.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/hells-gate-national-park/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $290pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $240pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/naivasha.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Lake Naivasha</Typography>
              <Typography variant="body1">
                Boat past hippos and birds on peaceful waters. Scenic beauty and
                calm exploration.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/lake-naivasha/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $220pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $190pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/Bogoria.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">
                Lake Bogoria National Reserve
              </Typography>
              <Typography variant="body1">
                Hot springs, geysers, and pink flamingos in a surreal landscape.
                A geothermal gem.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/lake-bogoria/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $240pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $200pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/meru.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Meru National Park</Typography>
              <Typography variant="body1">
                Untouched wilderness with lions, rhinos, and rivers. The ‘Born
                Free’ legacy lives here.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/meru-national-park/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $360pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $330pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/shimba.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">
                Shimba Hills National Reserve
              </Typography>
              <Typography variant="body1">
                Coastal rainforest with waterfalls and rare sable antelopes. A
                cool green escape.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/shimba-hills-national-reserve/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $390pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $340pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/nandi.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Nandi Hills</Typography>
              <Typography variant="body1">
                Rolling green hills and cultural stories. Perfect for hikes and
                scenic relaxation.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/amboseli-national-park/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $160pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $110pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/lamu.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Lamu Island</Typography>
              <Typography variant="body1">
                Wander coral stone alleys and sail on dhows. Lamu blends history
                and beach life
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/mombasa-malindi-diani/ "
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $300pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $270pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: "20rem", height: "28rem" }}>
          <CardMedia
            component={"img"}
            src="/images/hero2.jpg"
            sx={{ height: "13rem" }}
          />
          <CardContent>
            <Stack sx={{ height: "15rem" }}>
              <Typography variant="h4">Watamu & Kilifi Beaches</Typography>
              <Typography variant="body1">
                White sands and coral reefs await. Ideal for snorkeling,
                sunbathing, and dhow rides.
              </Typography>
              <Grid
                justifyContent={'space-between'} height={'7rem'} display={'flex'} flexDirection={"column"}
              >
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    fontSize: "1.5rem",
                    alignItems: "flex-end",
                    position: "relative",
                  }}
                >
                  <Button
                  variant="contained"
                    target="_blank"
                    sx={{ color: "text.primary" }}
                    href="https://mufasatoursandtravels.com/destinations/mombasa-malindi-diani/"
                  >
                    Learn More
                  </Button>
                </Stack>
                <Paper sx={{height:'4rem',display:'flex', flexDirection:'column',justifyContent:'center'}}>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Single: $350pp
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                    Group(5+): $310pp
                  </Typography>
                </Paper>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Heroimg;
