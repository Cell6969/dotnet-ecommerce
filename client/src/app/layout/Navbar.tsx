import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../store/slice/uiSlice";
import { useGetCartQuery } from "../../api/cartApi";

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyle = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "#baecf9",
  },
};

export default function Navbar() {
  const { isLoading, darkMode } = useAppSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { data: cart } = useGetCartQuery();

  const itemCount =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{ color: "white" }}
          >
            E-COM
          </Typography>
          <IconButton onClick={() => dispatch(setDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "white" }} />}
          </IconButton>
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyle}>
              {title}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            sx={{ color: "inherit" }}
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ color: "inherit", typography: "h6" }}
              >
                {title}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="error" />
        </Box>
      )}
    </AppBar>
  );
}
