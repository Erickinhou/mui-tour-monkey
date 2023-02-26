import {
  Container,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "../components/BasicModal";
import CustomizedAccordions from "../components/CustomizedAccordions";
import ImageCollage from "../components/ImageCollage";
import Loading from "../components/Loading";
import cities from "../data.json";
import getRandomImageSrc from "../utils/getRandomImageSrc";

const getTourFromData = (id) => {
  let currentTour = {};
  cities.forEach((city) => {
    const searchedTour = city.tours.find((tour) => tour.id === id);
    currentTour = searchedTour ?? currentTour;
  });
  console.log("currentTour ->", currentTour);
  return currentTour;
};

const Tour = () => {
  const [tour, setTour] = useState(undefined);
  const params = useParams();
  const id = parseInt(params.id);

  useEffect(() => {
    setTour(getTourFromData(id));
  }, []);

  if (!tour) return <Loading />;

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" components="h1">
        {tour.name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src={getRandomImageSrc()}
          alt={tour.name}
          height={325}
          style={{ flexGrow: 1 }}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paraghaph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          placeat repellendus distinctio ipsa eum voluptates laboriosam harum
          illum provident, ea esse sunt a temporibus corporis exercitationem!
          Nihil praesentium magni repellat?
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
