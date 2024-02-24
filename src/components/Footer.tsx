import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative isolate pb-10 pt-32">
      <div
        className="pointer-events-none absolute inset-0 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative h-full w-full bg-gradient-to-r from-red-500 to-purple-500 opacity-50"
          style={{
            clipPath:
              "polygon(4.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container flex flex-col items-center">
        <p className="text-lg">
          Copyright © 2024 Code Repo. All rights reserved.
        </p>
        <p className="text-md">
          Made by{" "}
          <Link href="https://openvoid.dev" target="_blank">
            Open Void.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
