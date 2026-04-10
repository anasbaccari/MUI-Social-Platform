import { Box, Card, CardContent, CardMedia, Typography, styled, Button, Grid, Rating, Chip } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const ProductCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)"
      : "0 30px 80px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 217, 255, 0.2)",
    borderColor: "#00d9ff",
  },
}));

function Marketplace() {
  const products = [
    {
      id: 1,
      name: "Premium UI Kit",
      price: "$79",
      seller: "DesignStudio",
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Code Templates Bundle",
      price: "$49",
      seller: "DevTools Pro",
      rating: 4.9,
      reviews: 521,
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Figma Design System",
      price: "$99",
      seller: "CreativeHub",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "WebDev Course",
      price: "$199",
      seller: "Learning Academy",
      rating: 4.9,
      reviews: 1230,
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Brand Identity Pack",
      price: "$149",
      seller: "BrandStudio",
      rating: 4.8,
      reviews: 340,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Marketing Toolkit",
      price: "$129",
      seller: "MarketingPro",
      rating: 4.6,
      reviews: 287,
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Box flex="3" sx={{ padding: { xs: "20px 10px", md: "20px 40px" } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 4,
          background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🛍️ Marketplace
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    mb: 1,
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7, display: "block", mb: 1 }}>
                  by {product.seller}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <Rating value={product.rating} readOnly size="small" />
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    ({product.reviews})
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Chip label="Free Shipping" size="small" sx={{ background: "rgba(16, 185, 129, 0.2)", color: "#10b981" }} />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCart />}
                  sx={{
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    color: "#0a0e27",
                    fontWeight: 700,
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Marketplace;
