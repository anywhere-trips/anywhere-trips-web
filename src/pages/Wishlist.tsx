import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Skeleton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useUserContext } from "../providers/UserProvider";
import { getWishlist, removeFromWishlist } from "../api/api";

import WishlistIcon from "../assets/icons/wishlist.svg";

export const Wishlist: React.FC = () => {
  const { token } = useUserContext();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [wishlistPackages, setWishlistPackages] = useState<any[]>([]);
  const [wishlistLoading, setWishlistLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, [token]);

  const fetchWishlist = async () => {
    if (!token) return;

    try {
      setWishlistLoading(true);
      const res = await getWishlist(token);

      if (res?.status === "success" && Array.isArray(res?.data)) {
        setWishlistPackages(
          res.data.map((pkg: any) => ({
            _id: pkg._id,
            packageName: pkg.package_name,
            image: pkg.image,
          })),
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setWishlistLoading(false);
    }
  };

  const handleRemove = async (id: string) => {
    if (!token) return;

    const prev = wishlistPackages;
    setWishlistPackages((list) => list.filter((item) => item._id !== id));

    try {
      await removeFromWishlist(token, id);
    } catch (err) {
      console.error(err);
      setWishlistPackages(prev);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: { xs: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {wishlistLoading
            ? Array.from({ length: isMobile ? 4 : 8 }).map((_, idx) => (
                <Box key={idx}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: "100%",
                      height: { xs: 135, sm: 155, md: 175 },
                      borderRadius: 3,
                    }}
                  />
                </Box>
              ))
            : wishlistPackages.map((pkg: any) => (
                <Box
                  key={pkg._id}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    src={pkg.image}
                    alt={pkg.packageName}
                    sx={{
                      width: "100%",
                      height: { xs: 120, sm: 140, md: 160 },
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ p: 1 }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.85rem",
                          md: "0.9rem",
                        },
                        fontWeight: 500,
                        color: "#1d1d1d",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {pkg.packageName}
                    </Typography>

                    <Button
                      onClick={() => handleRemove(pkg._id)}
                      size="small"
                      disableRipple
                      sx={{
                        mt: 1,
                        px: 1,
                        py: 0.5,
                        minWidth: "auto",
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.75rem",
                          md: "0.8rem",
                        },
                        textTransform: "none",
                        color: "#fff",
                        backgroundColor: "#d32f2f",
                        borderRadius: 1.5,

                        "&:hover": {
                          backgroundColor: "#d32f2f",
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              ))}
        </Box>

        {!wishlistLoading && wishlistPackages.length === 0 && (
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src={WishlistIcon}
              alt="Empty wishlist"
              sx={{
                width: { xs: 70, sm: 100, md: 120 },
              }}
            />

            <Typography
              sx={{ fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.5rem" } }}
              fontWeight={600}
            >
              Nothing saved yet
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                color: "#555",
                maxWidth: 400,
              }}
            >
              Explore destinations and save your favorite travel packages here.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};
