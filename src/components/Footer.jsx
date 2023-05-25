import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/context/UserContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { socialMediaLinks } from "../constants";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      data-testid="footer"
      className="bg-black flex items-center justify-center mt-auto"
    >
      <h1 className="text-white my-5 flex items-center gap-3">
        <div>
          <CopyrightIcon className="mr-2" />
          This Page is developed by {user.name}-{user.email}
        </div>
        <div className="flex gap-4">
          <a target="_blank" href={socialMediaLinks?.linkedIn}>
            <LinkedInIcon />
          </a>
          <a target="_blank" href={socialMediaLinks.github}>
            <GitHubIcon />
          </a>
          <a target="_blank" href={socialMediaLinks?.instagram}>
            <InstagramIcon />
          </a>
          <a target="_blank" href={socialMediaLinks?.twitter}>
            <TwitterIcon />
          </a>
          <a target="_blank" href={socialMediaLinks.facebook}>
            <FacebookIcon />
          </a>
          <a target="_blank" href={socialMediaLinks.youtube}>
            <YouTubeIcon />
          </a>
        </div>
      </h1>
    </div>
  );
};

export default Footer;
