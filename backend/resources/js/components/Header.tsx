import React from "react";
import { BrowserRouter, Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    return (
        <>
            <header>
                <nav className="bg-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <a
                                href="index.html"
                                className="font-bold text-xl text-indigo-600"
                            >
                                目標管理プロジェクト
                            </a>
                            <button
                                id="navbar-toggle"
                                className="
                md:hidden
                border border-solid border-gray-600
                px-3
                py-1
                rounded
                text-gray-600
                opacity-50
                hover:opacity-75
              "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div
                            id="navbar-collapse"
                            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                        >
                            <Link
                                to="/"
                                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounde"
                            >
                                Home
                            </Link>
                            <Link
                                to="/target"
                                className="
                p-2
                lg:px-4
                md:mx-2
                text-gray-600
                rounded
                hover:bg-gray-200
                hover:text-gray-700
                transition-colors
                duration-300
              "
                            >
                                目標一覧
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
