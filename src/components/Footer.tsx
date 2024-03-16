import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-10 pt-32">
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
