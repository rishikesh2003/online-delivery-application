import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user.user);

  const pages =
    user[0]?.role === "deliveryPartner"
      ? [
          { name: "📋Dashboard", link: "/dashboard" },
          { name: "📃Orders", link: "/dashboard/orders" },
        ]
      : user[0]?.role === "shop"
      ? [
          { name: "📋Dashboard", link: "/dashboard" },
          { name: "➕Add Product", link: "/dashboard/add-product" },
          { name: "📃Orders", link: "/dashboard/orders" },
        ]
      : [
          { name: "🏠Home", link: "/" },
          { name: "💯Daily Deals", link: "/daily-deals" },
        ];
  const settings = user[0]
    ? user[0].role === "customer"
      ? [
          { name: "📋Dashboard", link: "/dashboard" },
          { name: "🙍Your Profile", link: "/dashboard/profile" },
          { name: "📃Orders", link: "/dashboard/orders" },
          { name: "📤Logout", link: "/logout" },
        ]
      : [
          { name: "🙍Your Profile", link: "/dashboard/profile" },
          { name: "📤Logout", link: "/logout" },
        ]
    : [{ name: "⬇️ Login/Register", link: "/customer-auth" }];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="bg-green" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h6"
            noWrap
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoGrocer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.link);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            onClick={() => {
              navigate("/");
            }}
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GoGrocer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  navigate(page.link);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user[0]?.role === "customer" || user.length === 0 ? (
              <>
                <Tooltip>
                  <Badge badgeContent="0" color="primary">
                    <IconButton
                      onClick={() => {
                        navigate("/cart");
                      }}
                      style={{ backgroundColor: "white", padding: "5px" }}
                      sx={{ p: 0 }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Badge>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;
              </>
            ) : (
              <></>
            )}
            <Tooltip>
              <IconButton
                style={{ backgroundColor: "white", padding: "5px" }}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={() => {
                    navigate(setting.link);
                  }}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
