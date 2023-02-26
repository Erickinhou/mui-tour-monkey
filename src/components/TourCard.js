import { AccessTime } from "@mui/icons-material";
import {
  createTheme,
  Grid,
  Paper,
  Typography,
  Box,
  Rating,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import getRandomImageSrc from "../utils/getRandomImageSrc";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  const imageUrl = getRandomImageSrc();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={3}
        component={Link}
        to={`/tour/${tour.id}`}
        style={{ textDecoration: "none" }}
      >
        <Paper elevation={3}>
          <img src={imageUrl} loading="lazy" alt={tour.name} className="img" />
          <Box paddingX={1}>
            <Typography variant="h6" component={"h2"}>
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              marginTop={3}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews}) reviews
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From ({tour.price})
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default TourCard;
