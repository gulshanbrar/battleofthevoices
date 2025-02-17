import Link from "next/link";
import { FaInstagram, FaSpotify } from "react-icons/fa";

export default function Social() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_battle_of_the_voices_?igsh=MWo0d3c2aWh4bHU0aQ%3D%3D&utm_source=qr",
      logo: FaInstagram,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/playlist/4RSDHlJhSHBWkxcUDyYnTR?si=VO9X6d7LT42WOc4odrpWMw&pt=9a3ca43fe28f4587077e6d9f5f45b507",
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
