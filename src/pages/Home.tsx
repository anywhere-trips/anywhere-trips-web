import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";
import { useUserContext } from "../providers/UserProvider";

interface Package {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

export const Home: React.FC = () => {
  const { user } = useUserContext();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPackages([
        {
          id: 1,
          title: "Paro & Thimphu Tour",
          description: "Explore the cultural heart of Bhutan.",
          image:
            "https://www.authenticindiatours.com/app/uploads/2022/04/Rinpung-Dzong-Paro-Bhutan-1400x550-c-default.jpg",
          price: "₹95,000",
          duration: "4 Nights 5 Days",
        },
        {
          id: 2,
          title: "Tiger's Nest Hike",
          description: "A thrilling hike to the iconic Tiger's Nest Monastery.",
          image:
            "https://assets.cntraveller.in/photos/60be1e1a97b0a0effa438ce6/16:9/w_1024%2Cc_limit/Bhutan-1366x768.jpg",
          price: "₹72,000",
          duration: "3 Nights 4 Days",
        },
        {
          id: 3,
          title: "Punakha & Gangtey",
          description: "Experience Bhutan’s beautiful valleys and rivers.",
          image:
            "https://www.rstravels.co.in/images/page/architectural-marvel-of-punakha-dzongs.jpg",
          price: "₹88,000",
          duration: "4 Nights 5 Days",
        },
        {
          id: 4,
          title: "Eastern Bhutan Tour",
          description: "Discover the hidden gems of Eastern Bhutan.",
          image:
            "https://indochinatravel.com/country/bhutan/images/trashigang-valley-view-860.jpg",
          price: "₹1,02,000",
          duration: "5 Nights 6 Days",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 260 },
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="https://media.licdn.com/dms/image/v2/C561BAQHASMAfasFwkA/company-background_10000/company-background_10000/0/1585398383791/sons_of_norway_cover?e=2147483647&v=beta&t=jRcpwR2LbQ5cudoHU85L4hqlyIVriPu2fScsoaXHeD8"
            alt="Hero"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "1.5rem", md: "2.1em" },
                fontWeight: 600,
              }}
            >
              {user?.username ? "Hello " + user?.username : "Hello. Where to next?"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: 600,
              mb: 3,
            }}
          >
            Bhutan Packages
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {(loading ? Array.from({ length: 4 }) : packages).map(
              (pkg: any, idx) => (
                <Box key={pkg?.id || idx}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      height={220}
                      sx={{ borderRadius: 5 }}
                    />
                  ) : (
                    <Card
                      sx={{
                        borderRadius: 5,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      elevation={0}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={pkg.image}
                        alt={pkg.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{ fontWeight: 600, fontSize: "1rem", mb: 0.5 }}
                        >
                          {pkg.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            color: "text.secondary",
                            mb: 1,
                          }}
                        >
                          {pkg.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            color: "#1cb690",
                            fontSize: "0.95rem",
                          }}
                        >
                          {pkg.price} • {pkg.duration}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </Box>
              ),
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
