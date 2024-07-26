<nav class="bg-white border-gray-200">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://tsoc.dev/TSoC_Favicon.svg"
        class="h-8"
        alt="TSoC Logo"
      />
      <span class="self-center text-2xl font-semibold whitespace-nowrap"
        >MVP of Timechain Explorer</span
      >
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div class="hidden w-full md:flex md:items-center md:w-auto" id="navbar-default">
      <form class="flex items-center ml-auto">
        <label for="search" class="sr-only">Search</label>
        <div class="relative w-80">
          <input
            type="text"
            id="search"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-transparent rounded-full bg-gradient-to-r from-blue-50 to-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Search..."
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
      </form>
    </div>
  </div>
</nav>
