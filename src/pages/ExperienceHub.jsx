import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getExperienceConfig } from "../data/experienceConfig";

function ExperienceHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const { actionId = "default" } = useParams();

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const titleOverride = query.get("title");
  const context = query.get("context");
  const config = getExperienceConfig(actionId);

  const displayTitle = titleOverride || config.title;

  return (
    <Box
      flex="3"
      sx={{
        px: { xs: 1.5, md: 4 },
        py: 3,
      }}
    >
      <Card
        sx={{
          mb: 3,
          borderRadius: "24px",
          border: "1.5px solid rgba(0, 217, 255, 0.22)",
          background:
            "linear-gradient(135deg, rgba(17, 24, 52, 0.82) 0%, rgba(20, 30, 60, 0.6) 50%, rgba(255, 0, 110, 0.18) 100%)",
          backdropFilter: "blur(24px) saturate(180%)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35), 0 0 80px rgba(0, 217, 255, 0.15)",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 20% 20%, rgba(0, 217, 255, 0.22), transparent 45%), radial-gradient(circle at 85% 70%, rgba(255, 0, 110, 0.18), transparent 40%)",
          },
        }}
      >
        <CardContent sx={{ position: "relative", zIndex: 1, p: { xs: 2, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 1,
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {displayTitle}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.86, maxWidth: "760px", mb: 2 }}>
            {config.subtitle}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 2 }}>
            <Chip
              label={`Action: ${actionId}`}
              sx={{
                background: "rgba(0, 217, 255, 0.12)",
                color: "#00ffff",
                border: "1px solid rgba(0, 217, 255, 0.35)",
                fontWeight: 700,
              }}
            />
            {context && (
              <Chip
                label={`Context: ${context}`}
                sx={{
                  background: "rgba(255, 0, 110, 0.12)",
                  color: "#ff5ba2",
                  border: "1px solid rgba(255, 0, 110, 0.35)",
                  fontWeight: 700,
                }}
              />
            )}
          </Stack>

          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/")}
              sx={{
                background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                color: "#0a0e27",
                fontWeight: 800,
              }}
            >
              Back To Feed
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                borderColor: "rgba(0, 217, 255, 0.4)",
                color: "#00ffff",
                fontWeight: 700,
              }}
            >
              Go Back
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "20px",
          border: "1.5px solid rgba(0, 217, 255, 0.18)",
          background:
            "linear-gradient(135deg, rgba(17, 24, 52, 0.62) 0%, rgba(20, 30, 60, 0.45) 100%)",
          backdropFilter: "blur(20px) saturate(170%)",
          boxShadow: "0 12px 42px rgba(0, 0, 0, 0.28)",
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Producer Handoff Checklist
          </Typography>
          <Stack spacing={1.2}>
            {config.checklist.map((item) => (
              <Box
                key={item}
                sx={{
                  p: 1.2,
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 217, 255, 0.16)",
                  background: "rgba(0, 217, 255, 0.05)",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              color: "#0a0e27",
              fontWeight: 800,
            }}
          >
            {config.cta}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ExperienceHub;
