import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Skeleton, useTheme, useMediaQuery } from "@mui/material";
import { ChevronDown, MapPin } from "lucide-react";

interface PackageDetailProps { }

export const PackageDetail: React.FC<PackageDetailProps> = () => {
    const { packageId } = useParams<{ packageId: string }>();

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    const [loading, setLoading] = useState<boolean>(true);

    const loadPackageDetail = async () => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        loadPackageDetail();
    }, []);

    return (
        <Container
            sx={{
                py: { xs: 2.5, md: 5 },
            }}
            maxWidth="lg"
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 2.5, md: 5 },
                }}
            >
                {loading ? (
                    <Box>
                        <Skeleton
                            sx={{ borderRadius: 1.25 }}
                            variant="text"
                            height={45}
                            width={240}
                        />
                        <Skeleton
                            sx={{ borderRadius: 1.25 }}
                            variant="text"
                            height={30}
                            width={120}
                        />
                    </Box>
                ) : (
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.1rem", md: "1.5rem" },
                                fontWeight: 600,
                                color: "#1d1d1d",
                            }}
                            component="p"
                        >
                            Thunder Dragon Getaway
                        </Typography>

                        <Box
                            sx={{
                                mt: 0.5,
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            <MapPin size={isDesktop ? 16 : 14} color="#6b7280" />

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.8rem",
                                        sm: "0.85rem",
                                        md: "0.9rem",
                                    },
                                    fontWeight: 400,
                                    color: "#6b7280",
                                }}
                            >
                                Bhutan
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Box
                    sx={{
                        height: { xs: 250, md: 350 },
                        display: "flex",
                        gap: 0.5,
                    }}
                >
                    <Box
                        sx={{
                            flex: 2,
                            borderRadius: 5,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            overflow: "hidden",
                        }}
                    >
                        {loading ? (
                            <Skeleton
                                sx={{
                                    borderRadius: 5,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                }}
                                height="100%"
                                width="100%"
                                variant="rectangular"
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    backgroundColor: "#f0f0f0"
                                }}
                                src="https://storage.googleapis.com/awt-asia-south2-prod-5e15/packages/e5983303-29a9-496c-9944-454eaca9e862/images/3f8d2a1b-4c6e-4a7a-9d2b-5c7f1e2a3b4c.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=awt-prod%40project-4e5834a3-1bec-48be-876.iam.gserviceaccount.com%2F20260416%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260416T102057Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&X-Goog-Signature=1212c41a26e7f9c142082e7a0529a21c7297f2be872bbb09c734ba1c86c67932be625bf427e9e555e63880ab73d266ac89a6539895aac22466210ca02a7c2d1928232980277983ad3330f7b7fec3813b3d428ec5097ab689e54e4fe98cd5b9ad3a172c729cd04c7a16e372892cef6788f2335ac54c38eb68ad1dbb9ffbc1592f7a6ca08448709019a3b833b9be7a902a215dcdd67f33b01eb138f386d0d40f092aca319f6bb4272ebcf97ab9235d595a88252902d84293adbd41888131e95a5543a0d9afe3427634309e61beba0c1203d17ec6d89c4de17c7be051afb4a7514512a4c64af08f1b16e59997b82408e1eb8d723544f3825fb4e4ecfe37e026ba83"
                                component="img"
                            />
                        )}
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.5,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                borderRadius: 5,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                overflow: "hidden",
                            }}
                        >
                            {loading ? (
                                <Skeleton
                                    sx={{
                                        borderRadius: 5,
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                    }}
                                    height="100%"
                                    width="100%"
                                    variant="rectangular"
                                />
                            ) : (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        backgroundColor: "#f0f0f0"
                                    }}
                                    src="https://www.asiadirect.nl/wp-content/uploads/2025/05/bhutan-4.jpg"
                                    component="img"
                                />
                            )}
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                position: "relative",
                                borderRadius: 5,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                borderBottomLeftRadius: 0,
                                overflow: "hidden",
                            }}
                        >
                            {loading ? (
                                <Skeleton
                                    sx={{
                                        borderRadius: 5,
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }}
                                    height="100%"
                                    width="100%"
                                    variant="rectangular"
                                />
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            backgroundColor: "#f0f0f0"
                                        }}
                                        src="https://worldexpeditions.com/croppedImages/Indian-Sub-Continent/Bhutan/LachlanGardiner_WorldExpeditions_Bhutan_Punakha-Area_2025-1195225-8140187-950px.jpg"
                                        component="img"
                                    />
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            display: "flex",
                                            alignItems: "flex-end",
                                            justifyContent: "flex-end",
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                textDecoration: "underline",
                                                fontSize: {
                                                    xs: "0.8rem",
                                                    sm: "0.9rem",
                                                    md: "1rem",
                                                },
                                                fontWeight: 500,
                                                cursor: "pointer",
                                                color: "#ffffff",
                                            }}
                                        >
                                            View All
                                        </Typography>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>

                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.5, md: 1 },
                        }}
                    >
                        <Skeleton
                            variant="text"
                            width={260}
                            height={45}
                            sx={{ borderRadius: 1.25 }}
                        />

                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={100}
                            sx={{ borderRadius: 2.5 }}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.5, md: 1 },
                        }}
                    >
                        <Typography
                            sx={{
                                textDecoration: "underline",
                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                fontWeight: 600,
                                color: "#1d1d1d",
                            }}
                        >
                            About Package
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                color: "#1d1d1d",
                            }}
                        >
                            Discover the timeless charm of Bhutan, a Himalayan sanctuary where mist-cloaked mountains, cliffside monasteries, and vibrant prayer flags create an atmosphere of deep peace. Wander through lush valleys, meet warm local communities, and experience a culture rooted in happiness, spirituality, and nature's quiet beauty.
                        </Typography>
                    </Box>
                )}


                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.5, md: 1 },
                        }}
                    >
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={100}
                            sx={{ borderRadius: 2.5 }}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            border: "1px solid #d8d8d8",
                            borderRadius: 2.5,
                            px: { xs: 1.5, md: 2.5 },
                            py: { xs: 2.25, md: 3 },
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            alignItems: "center",
                            textAlign: "center",
                            gap: 2,
                            backgroundColor: "#fff"
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.7rem",
                                        sm: "0.8rem",
                                        md: "0.85rem",
                                    },
                                    color: "#6b7280",
                                }}
                            >
                                Pick Up
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.85rem",
                                        sm: "0.95rem",
                                        md: "1rem",
                                    },
                                    fontWeight: 500,
                                    color: "#1d1d1d",
                                }}
                            >
                                Phuentsholing
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.7rem",
                                        sm: "0.8rem",
                                        md: "0.85rem",
                                    },
                                    color: "#6b7280",
                                }}
                            >
                                Drop
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.85rem",
                                        sm: "0.95rem",
                                        md: "1rem",
                                    },
                                    fontWeight: 500,
                                    color: "#1d1d1d",
                                }}
                            >
                                Phuentsholing
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.7rem",
                                        sm: "0.8rem",
                                        md: "0.85rem",
                                    },
                                    color: "#6b7280",
                                }}
                            >
                                Mode Of Transport
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.85rem",
                                        sm: "0.95rem",
                                        md: "1rem",
                                    },
                                    fontWeight: 500,
                                    color: "#1d1d1d",
                                }}
                            >
                                Car
                            </Typography>
                        </Box>
                    </Box>
                )}

                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.5, md: 1 },
                        }}
                    >
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={175}
                            sx={{ borderRadius: 2.5 }}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1
                        }}
                    >
                        <Accordion
                            elevation={0}
                            disableGutters
                            sx={{
                                border: "1px solid #d8d8d8",
                                borderRadius: 2.5,
                                overflow: "hidden",
                                backgroundColor: "#ffffff",

                                "&:before": {
                                    display: "none"
                                },

                                "&.MuiAccordion-root": {
                                    borderRadius: 2.5,
                                },

                                "&.Mui-expanded": {
                                    margin: 0,
                                    borderRadius: 2.5,
                                },

                                "&:first-of-type": {
                                    borderRadius: 2.5,
                                },

                                "&:last-of-type": {
                                    borderRadius: 2.5,
                                }
                            }}
                        >
                            <AccordionSummary expandIcon={<ChevronDown size={isDesktop ? 25 : 20} color="#1d1d1d" />}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                        fontWeight: 600,
                                        color: "#1d1d1d"
                                    }}
                                >
                                    Highlights
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box
                                    component="ul"
                                    sx={{
                                        pl: 3,
                                        m: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.5,

                                        "& li": {
                                            lineHeight: 1.5
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Comfortable accommodation in well-rated hotels
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Daily breakfast and selected meals as per itinerary
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Airport pickup and drop-off assistance
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Private vehicle for sightseeing and transfers
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Experienced local tour guide during excursions
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            elevation={0}
                            disableGutters
                            sx={{
                                border: "1px solid #d8d8d8",
                                borderRadius: 2.5,
                                overflow: "hidden",
                                backgroundColor: "#ffffff",

                                "&:before": {
                                    display: "none"
                                },

                                "&.MuiAccordion-root": {
                                    borderRadius: 2.5,
                                },

                                "&.Mui-expanded": {
                                    margin: 0,
                                    borderRadius: 2.5,
                                },

                                "&:first-of-type": {
                                    borderRadius: 2.5,
                                },

                                "&:last-of-type": {
                                    borderRadius: 2.5,
                                }
                            }}
                        >
                            <AccordionSummary expandIcon={<ChevronDown size={isDesktop ? 25 : 20} color="#1d1d1d" />}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                        fontWeight: 600,
                                        color: "#1d1d1d"
                                    }}
                                >
                                    What's Included
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box
                                    component="ul"
                                    sx={{
                                        pl: 3,
                                        m: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.5,

                                        "& li": {
                                            lineHeight: 1.5
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Comfortable accommodation in well-rated hotels
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Daily breakfast and selected meals as per itinerary
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Airport pickup and drop-off assistance
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Private vehicle for sightseeing and transfers
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Experienced local tour guide during excursions
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            elevation={0}
                            disableGutters
                            sx={{
                                border: "1px solid #d8d8d8",
                                borderRadius: 2.5,
                                overflow: "hidden",
                                backgroundColor: "#ffffff",

                                "&:before": {
                                    display: "none"
                                },

                                "&.MuiAccordion-root": {
                                    borderRadius: 2.5,
                                },

                                "&.Mui-expanded": {
                                    margin: 0,
                                    borderRadius: 2.5,
                                },

                                "&:first-of-type": {
                                    borderRadius: 2.5,
                                },

                                "&:last-of-type": {
                                    borderRadius: 2.5,
                                }
                            }}
                        >
                            <AccordionSummary expandIcon={<ChevronDown size={isDesktop ? 25 : 20} color="#1d1d1d" />}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                        fontWeight: 600,
                                        color: "#1d1d1d"
                                    }}
                                >
                                    What's Excluded
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box
                                    component="ul"
                                    sx={{
                                        pl: 3,
                                        m: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.5,

                                        "& li": {
                                            lineHeight: 1.5
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Comfortable accommodation in well-rated hotels
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Daily breakfast and selected meals as per itinerary
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Airport pickup and drop-off assistance
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Private vehicle for sightseeing and transfers
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                            color: "#1d1d1d",
                                        }}
                                        component="li"
                                    >
                                        Experienced local tour guide during excursions
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                )}
            </Box>
        </Container>
    );
};
