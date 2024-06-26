export default function AccountManagement() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-primary px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Account Management</h1>
            </div>

            <div className="flex justify-between items-center shadow-md mx-auto mt-2 mb-2 p-4 border rounded-md">
                <div className="flex justify-start items-center">
                    <p className="mr-4 font-semibold text-lg">Show</p>
                    <button
                        id="dropdownDividerButton"
                        data-dropdown-toggle="dropdownDivider"
                        className="inline-flex items-center bg-primary hover:bg-primary-pale dark:hover:bg-primary px-5 py-2.5 rounded-lg font-medium text-center text-sm text-white"
                        type="button"
                    >
                        <svg
                            className="w-2.5 h-2.5 ms-3"
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
                <div className="flex justify-end mb-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-2 border rounded-md outline-none"
                    />
                    <button className="bg-primary hover:bg-primary-pale ml-2 px-4 py-2 rounded-md font-semibold text-white">
                        Search
                    </button>
                </div>
            </div>

            <div className="bg-white shadow-md mx-auto mt-2 p-4 pb-8 border rounded-md overflow-x-auto">
                <h2 className="mb-2 font-semibold text-lg">Service Vendors</h2>
                <table className="border-gray border rounded-lg w-full">
                    <thead>
                        <tr className="bg-primary border">
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Name
                            </th>
                            <th className="px-4 py-3 font-medium text-left text-white">
                                View Profile
                            </th>

                            <th className="px-4 py-3 font-medium text-left text-white">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="px-4 py-2">John Doe</td>
                            <td className="px-4 py-2">
                                <ul>
                                    <button className="text-blue hover:underline">
                                        View Profile
                                    </button>
                                </ul>
                            </td>

                            <td className="px-4 py-2 rounded-md font-semibold text-primary">
                                Active
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="px-4 py-2">Jane Smith</td>
                            <td className="px-4 py-2">
                                <ul>
                                    <button className="text-blue hover:underline">
                                        View Profile
                                    </button>
                                </ul>
                            </td>

                            <td className="px-4 py-2 rounded-md font-semibold text-gray">
                                Not Active
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mx-auto p-4">
                    <div className="relative">
                        <span className="bottom left-0 absolute mt-2 text-sm">
                            Showing{" "}
                            <span className="font-semibold text-gray-darkgray dark:text-white">
                                1
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-gray-darkgray dark:text-white">
                                10
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-gray-darkgray dark:text-white">
                                100
                            </span>{" "}
                            Entries
                        </span>
                        <div className="inline-flex right-0 absolute">
                            <button className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-s h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray">
                                <svg
                                    className="w-3.5 h-3.5 me-2 rtl:rotate-180"
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
                            <button className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-e h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray">
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        </div>
    );
}
