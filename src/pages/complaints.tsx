import { Link } from "react-router-dom";

export default function Complaints() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-green-600 px-4 py-4 text-white">
                <h1 className="text-2xl font-semibold">User Complaints</h1>
            </div>
            <div className="mx-auto mb-2 flex items-center justify-between rounded-md border border-gray-200 bg-white p-4 shadow-md">
                <div className="flex items-center justify-start">
                    <p className="text-m mr-4">Show</p>
                    <button
                        id="dropdownDividerButton"
                        data-dropdown-toggle="dropdownDivider"
                        className="inline-flex items-center rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700"
                        type="button"
                    >
                        <svg
                            className="ms-3 h-2.5 w-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mb-2 flex justify-end">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-md border px-3 py-2 outline-none"
                    />
                    <button className="ml-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-800">
                        Search
                    </button>
                </div>
            </div>
            <table className="w-full rounded-lg border border-gray-300">
                <thead>
                    <tr className="border border-gray-800 bg-green-600">
                        <th className="px-6 py-3 text-left font-medium text-white">
                            Number of Complaints
                        </th>
                        <th className="px-6 py-3 text-left font-medium text-white">
                            Complainant Name
                        </th>
                        <th className="px-6 py-3 text-left font-medium text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-800">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Complainant 1</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/complaints/1"}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </ul>
                        </td>
                    </tr>
                    <tr className="border border-gray-800">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Complainant 2</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/complaints/2"}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mx-auto p-4">
                <div className="relative">
                    <span className="bottom absolute left-0 mt-2 text-sm text-gray-700 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            1
                        </span>{" "}
                        to{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            10
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            100
                        </span>{" "}
                        Entries
                    </span>
                    <div className="absolute right-0 inline-flex">
                        <button className="flex h-8 items-center justify-center rounded-s bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg
                                className="me-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 5H1m0 0 4 4M1 5l4-4"
                                />
                            </svg>
                        </button>
                        <button className="flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
