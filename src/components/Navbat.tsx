"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
        >
          Home
        </Link>
        <div>
          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-700 mr-4"
              >
                Signout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
