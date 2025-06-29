import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FeaturedDest = () => {
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
        Featured destinations
      </Typography>
      <Grid
        container
        sx={{ marginBottom: "2rem", width: "75rem", marginLeft: "2rem" }}
      >
        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem 3rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/mt-kenya.avif"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Mt Kenya</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Embark on a breathtaking climb through lush forests and icy
                peaks. Kenya's highest mountain offers unforgettable alpine
                views and adventure.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $350pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/Mt.Ruwenzori.jpg"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Mt Ruwenzori</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Hike the mystical "Mountains of the Moon" on the Uganda-Congo
                border. Glacier-capped summits and rich biodiversity await true
                explorers.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $420pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem 3rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/Lake-Nakuru.jpg"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Lake Nakuru</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Witness thousands of flamingos painting the lake pink at
                sunrise. Enjoy safari drives with rhinos, buffaloes, and scenic
                waterfalls.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $220pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem 3rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/Nairobinationalpark.jpg"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Nairobi National park</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Experience wildlife just minutes from the city skyline. Lions,
                giraffes, and rhinos roam this urban wilderness.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $180pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/TsavoNationalPark.jpg"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Tsavo National Park</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Explore one of Kenya’s largest parks, home to red elephants and
                lava fields. Perfect for rugged safaris and dramatic landscapes.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $310pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1rem 3rem",
          }}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia
              component="img"
              image="/images/CoastalKenya.jpg"
              sx={{ height: "15rem", paddingTop: "0" }}
            />
            <CardContent sx={{ height: "10rem" }}>
              <Typography variant="h4">Coatal Kenya</Typography>
              <Typography variant="body1" sx={{ padding: ".5rem 0" }}>
                Relax on pristine beaches with turquoise waters and Swahili
                culture. Enjoy snorkeling, dhow rides, and historic towns like
                Lamu and Mombasa.
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem", textAlign: "end" }}
              >
                $450pp
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturedDest;
