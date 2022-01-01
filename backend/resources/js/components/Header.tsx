import React from "react";

export const Header = () => {
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
                            <a
                                href="index.html"
                                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                            >
                                Home
                            </a>
                            <a
                                href="table.html"
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
                                テーブル
                            </a>
                            <a
                                href="form.html"
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
                                フォーム
                            </a>
                            <a
                                href="item_index.html"
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
                                商品一覧
                            </a>
                            <a
                                href="item_detail.html"
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
                                商品詳細
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
