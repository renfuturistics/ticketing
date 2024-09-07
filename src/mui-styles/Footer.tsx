import { styled } from "@mui/system";
import Link from "next/link";
export const InputGroupText = styled("span")({
  backgroundColor: "#232f3e",
  color: " white",
  padding: " 8px 17px",
  marginLeft: "0px",
});
export const FooterWrapper = styled("div")({
  paddingTop: "5px",

  "&:not(:first-of-type)": { borderTop: "2px solid rgba(255, 255, 255, 0.1)" },

  backgroundColor: "#232f3e",
});

export const FooterLink = styled(Link)({
  color: "white",

  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.88
});
