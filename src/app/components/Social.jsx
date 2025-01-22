import Link from "next/link";
import { FaInstagram, FaSpotify } from "react-icons/fa";

export default function Social() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_battle_of_the_voices_",
      logo: FaInstagram,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/playlist/4RSDHlJhSHBWkxcUDyYnTR?si=bb89891a154d43bc&pt=85bdfa5be97df60b89efd6181be20314",
      logo: FaSpotify,
    },
  ];

  return (
    <div className="flex space-x-3">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 shadow-md hover:scale-110 transform transition-all duration-300 hover:shadow-neon"
        >
          <social.logo className="w-5 h-5 text-white" />
          <span className="hidden absolute top-12 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
