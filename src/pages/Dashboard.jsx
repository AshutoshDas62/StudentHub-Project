// import { useEffect, useState } from "react";

// const API = "https://studenthub-backend-0xiq.onrender.com";

// export default function Dashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (!storedUser) return;

//     fetch(`${API}/user/${storedUser.id}`)
//       .then(res => res.json())
//       .then(data => {
//         setUser(data);
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">

//       <div className="max-w-5xl mx-auto">

//         <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//           🎓 Dashboard
//         </h1>

//         {user ? (
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

//             <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//               Welcome, {user.name} 👋
//             </h2>

//             <p className="text-gray-500 dark:text-gray-400 mt-2">
//               Email: {user.email}
//             </p>

//             <div className="mt-6 grid grid-cols-2 gap-4">

//               <div className="p-4 bg-blue-500 text-white rounded-lg">
//                 Tasks: 0
//               </div>

//               <div className="p-4 bg-green-500 text-white rounded-lg">
//                 Progress: 0%
//               </div>

//             </div>

//           </div>
//         ) : (
//           <p className="text-gray-500">Loading...</p>
//         )}

//       </div>
//     </div>
//   );
// }