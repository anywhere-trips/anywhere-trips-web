import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 5 },
        color: "#ffffff",
        backgroundColor: "#0b493a",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Anywhere Trips
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                lineHeight: 1.6,
                color: "#ffffff",
              }}
            >
              Explore. Dream. Discover.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                color: "#ffffff",
              }}
            >
              Quick Links
            </Typography>
            <Link
              href="/"
              underline="hover"
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                color: "#ffffff",
              }}
            >
              Home
            </Link>
          </Stack>

          <Stack spacing={1}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                color: "#ffffff",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                color: "#ffffff",
              }}
            >
              +91 93621 24857
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                color: "#ffffff",
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://www.facebook.com/anywhere.tripss"
                sx={{
                  color: "#ffffff",
                  p: { xs: 0.5, md: 1 },
                }}
                aria-label="Facebook"
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/anywhere.trips"
                sx={{
                  color: "#ffffff",
                  p: { xs: 0.5, md: 1 },
                }}
                aria-label="Instagram"
              >
                <Instagram fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ textAlign: "center", mt: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
              color: "#ffffff",
            }}
          >
            &copy; {new Date().getFullYear()} Anywhere Trips. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
