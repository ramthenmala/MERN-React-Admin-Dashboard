import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
import FlexBetween from "../FlexBetween";
import ProfileImage from "../../assets/profile.jpg";
import {
  AppBar,
  useTheme,
  Toolbar,
  InputBase,
  IconButton,
} from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{ background: "none", position: "static", boxShadow: "none" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* LEFT Side */}
        <FlexBetween>
          <IconButton onClick={() => console.log("Menu open and close")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            p="0.1rem 1.5rem"
            gap="3rem"
          >
            <InputBase placeholder="search here..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
