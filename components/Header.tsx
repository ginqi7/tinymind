"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getUserLogin } from "@/lib/githubApi";

export default function Header({
  username,
  iconUrl,
}: {
  username?: string;
  iconUrl?: string;
}) {
  const { data: session } = useSession();

  const [userLogin, setUserLogin] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>("/icon.jpg");

  useEffect(() => {
    if (username) {
      setAvatarUrl(`https://github.com/${username}.png`);
    } else if (session?.accessToken) {
      getUserLogin(session.accessToken).then((login) => {
        setUserLogin(login);
        setAvatarUrl(`https://github.com/${login}.png`);
      });
    }
  }, [session, username]);

  const isOwnProfile = userLogin === username;

  // Use iconUrl if provided (for cases where we have a custom icon)
  useEffect(() => {
    if (iconUrl && iconUrl !== "/icon.jpg") {
      setAvatarUrl(iconUrl);
    }
  }, [iconUrl]);


  return (
    <header className="fixed top-0 left-0 right-0 py-4 bg-card shadow z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href={isOwnProfile ? "/" : username ? `/${username}` : "/"}
            className=""
          >
            <Image
              src={avatarUrl}
              alt="Home"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
          
          <Link
            href="https://github.com/ginqi7/tinymind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
