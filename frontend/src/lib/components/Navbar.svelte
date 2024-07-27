<nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl mx-auto p-4">
    <!-- Container for Logo and Title -->
    <div class="flex flex-col items-center md:flex-row md:items-center md:justify-between">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse md:mb-0">
        <img src="https://tsoc.dev/TSoC_Favicon.svg" class="h-8" alt="TSoC Logo" />
        <span class="text-2xl font-semibold whitespace-nowrap text-gray-800">
          MVP of Timechain Explorer
        </span>
      </a>

      <!-- Search Bar for Desktop -->
      <div class="hidden md:flex md:items-center md:w-auto">
        <form class="flex items-center" id="search-form" action="?/apiCall" method="post">
          <label for="search" class="sr-only">Search</label>
          <div class="relative w-80">
            <input
              type="text"
              id="search"
              name="search"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-transparent rounded-full bg-gradient-to-r from-blue-50 to-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Search Block/Transaction/Address"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.706 14.706a8 8 0 111.414-1.414l4.95 4.95-1.414 1.414-4.95-4.95z"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            class="ml-3 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Search Bar for Mobile -->
  <div class="md:hidden bg-white border-t border-gray-200 p-4">
    <form class="flex items-center" id="mobile-search-form" action="?/apiCall" method="post">
      <label for="mobile-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input
          type="text"
          id="mobile-search"
          name="search"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-transparent rounded-full bg-gradient-to-r from-blue-50 to-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          placeholder="Search Block/Transaction/Address"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.706 14.706a8 8 0 111.414-1.414l4.95 4.95-1.414 1.414-4.95-4.95z"
            />
          </svg>
        </div>
      </div>
      <button
        type="submit"
        class="ml-3 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      >
        Search
      </button>
    </form>
  </div>
</nav>
