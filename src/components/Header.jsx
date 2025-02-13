// const Header = () => {
//   return (
//     <div className="">
//       <div className="navbar fixed top-0  w-full bg-slate-950  text-white z-50  ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Introduction</a>
//               </li>
//               <li>
//                 <a>Our work</a>
//               </li>
//               <li>
//                 <a>contact us </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="navbar-center">
//           <a className="btn btn-ghost text-3xl cursor-pointer ">The Town</a>
//         </div>
//         <div className="navbar-end">
//           <button className="btn btn-ghost btn-circle">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//             f
//           </button>
//           <button className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                 />
//               </svg>
//               <span className="badge badge-xs badge-primary indicator-item"></span>
//             </div>
//           </button>
//         </div>
//       </div>
//       <div>
//         <img
//           src="/public/img/the-town-bg-01.jpg"
//           alt=""
//           className="relative object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center  flex-col gap-2">
//           <h1 className="text-5xl font-bold text-white">The Town</h1>
//           <p className="text-3xl font-bold text-white">By Ahmed</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar fixed top-0 w-full bg-slate-950 text-white z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Introduction</a>
              </li>
              <li>
                <a>Our work</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-3xl md:text-4xl cursor-pointer">
            The Town
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
        <img
          src="/public/img/the-town-bg-01.jpg"
          alt="The Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-opacity-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            The Town
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-white">
            By Ahmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
