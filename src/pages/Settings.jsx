import { Box, Card, CardContent, Typography, styled, Button, Switch, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Lock, Notifications, Palette, Shield } from "@mui/icons-material";
import { useState } from "react";

const SettingCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  marginBottom: "20px",
  transition: "all 0.4s ease",
}));

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    privateProfile: false,
    darkMode: true,
    soundEffects: true,
    twoFactor: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const settingGroups = [
    {
      title: "Privacy & Security",
      icon: Lock,
      items: [
        { key: "privateProfile", label: "Make Profile Private", desc: "Control who can see your profile" },
        { key: "twoFactor", label: "Two-Factor Authentication", desc: "Add extra security to your account" },
      ],
    },
    {
      title: "Notifications",
      icon: Notifications,
      items: [
        { key: "notifications", label: "Push Notifications", desc: "Receive alerts about activities" },
        { key: "emailUpdates", label: "Email Updates", desc: "Get updates via email" },
      ],
    },
    {
      title: "Preferences",
      icon: Palette,
      items: [
        { key: "darkMode", label: "Dark Mode", desc: "Use dark theme for better experience" },
        { key: "soundEffects", label: "Sound Effects", desc: "Enable audio feedback" },
      ],
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
        ⚙️ Settings
      </Typography>

      {settingGroups.map((group) => {
        const IconComponent = group.icon;
        return (
          <SettingCard key={group.title}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <IconComponent sx={{ fontSize: 28, color: "#00ffff" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {group.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2, background: "rgba(0, 217, 255, 0.2)" }} />
              <List disablePadding>
                {group.items.map((item, idx) => (
                  <ListItem key={item.key} sx={{ display: "flex", justifyContent: "space-between", px: 0, py: 1.5 }}>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" sx={{ opacity: 0.7, mt: 0.5 }}>
                          {item.desc}
                        </Typography>
                      }
                    />
                    <Switch
                      checked={settings[item.key]}
                      onChange={() => handleToggle(item.key)}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#00ffff",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: "rgba(0, 217, 255, 0.3)",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </SettingCard>
        );
      })}

      <SettingCard>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#ff6b6b",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Shield sx={{ fontSize: 24 }} />
            Danger Zone
          </Typography>
          <Divider sx={{ mb: 2, background: "rgba(255, 107, 107, 0.2)" }} />
          <Button
            fullWidth
            variant="outlined"
            sx={{
              color: "#ff6b6b",
              borderColor: "#ff6b6b",
              fontWeight: 700,
              transition: "all 0.3s ease",
              mb: 1,
              "&:hover": {
                background: "rgba(255, 107, 107, 0.1)",
                borderColor: "#ff6b6b",
              },
            }}
          >
            Reset Password
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              color: "#ff6b6b",
              borderColor: "#ff6b6b",
              fontWeight: 700,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(255, 107, 107, 0.1)",
                borderColor: "#ff6b6b",
              },
            }}
          >
            Delete Account
          </Button>
        </CardContent>
      </SettingCard>
    </Box>
  );
}

export default Settings;
