"use client";

import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { AbstractIntlMessages } from "next-intl";

export default function CreateButton({
  messages,
}: {
  messages: AbstractIntlMessages;
}) {

  const createLink = "/editor?type=thought";

  return (
    <Link
      href={createLink}
      className="fixed bottom-9 right-9 p-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg z-20 flex items-center justify-center"
    >
      <FiPlus className="w-6 h-6" />
      <span className="sr-only">
        {(messages.createNewThought as string)}
      </span>
    </Link>
  );
}
