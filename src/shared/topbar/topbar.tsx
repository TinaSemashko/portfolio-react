import { useCallback, useContext, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItems } from "../../constants/menuItems";

import * as S from "./topbar.styled";

const menuItemsArray = Object.values(MenuItems);

const drawerWidth = "100%";

const TopBar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item: string): boolean => pathname.includes(item);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        // background:
        //   "linear-gradient(180deg, rgba(172,168,168,1) 10%, rgba(169,11,11,1) 100%)",
        height: "100%",
      }}
    >
      <S.CloseIconStyle>
        <Typography variant="h5" color="secondary.main" className="close">
          {t("menu.close")}
        </Typography>
        <CloseIcon sx={{ fontSize: "2rem" }} />
      </S.CloseIconStyle>

      <img src={logo} width="40vw" onClick={() => navigate(Routes.home)} />
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {menuItemsArray.map((item) => (
          <ListItem key={item} disablePadding>
            <S.StyledListItemButton selected={isSelected(item)}>
              <ListItemText
                primary={item}
                onClick={() => navigate(Routes[item as keyof typeof Routes])}
                primaryTypographyProps={{
                  fontSize: "12vw",
                  textTransform: "capitalize",
                }}
              />
            </S.StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "transparent",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        position="absolute"
        sx={{
          backgroundColor: "#ffe4c43f",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <S.FlexBox>
            <img
              src={logo}
              width="40vw"
              onClick={() => navigate(Routes.home)}
            />

            <S.ListBox>
              <List
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {menuItemsArray.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <S.StyledListItemButton
                      selected={isSelected(item)}
                      onClick={() =>
                        navigate(Routes[item as keyof typeof Routes])
                      }
                    >
                      <Typography variant="h4" fontWeight="900">
                        {t(`menu.${item}`)}
                      </Typography>
                    </S.StyledListItemButton>
                  </ListItem>
                ))}
              </List>
            </S.ListBox>
          </S.FlexBox>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopBar;
