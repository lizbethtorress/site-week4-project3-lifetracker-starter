// import React from 'react';
// import SummaryStat from '../SummaryStat/SummaryStat';

// const ActivityFeed = ({ totalCaloriesPerDay, avgCaloriesPerCategory, ...otherProps }) => {
//   return (
//     <div className="activity-feed">
//       <div className="per-category">
//         <h4>Average Calories Per Category</h4>
//         {avgCaloriesPerCategory.slice(0, 6).map((item, index) => (
//           <SummaryStat
//             key={index}
//             stat={Math.floor(item.calories)}
//             label={String(item.calories)}
//             substat={item.category}
//           />
//         ))}
//       </div>

//       <div className="per-day">
//         <h4>Total Calories Per Day</h4>
//         {totalCaloriesPerDay.map((item, index) => (
//           <SummaryStat
//             key={index}
//             stat={Math.floor(item.calories)}
//             label={String(item.calories)}
//             substat={formatDate(item.date)}
//           />
//         ))}
//       </div>

//       {/* Additional JSX components or content as needed */}
//     </div>
//   );
// };

// // Helper function to format the date as "dd/mm/yyyy"
// const formatDate = (date) => {
//   const formattedDate = new Date(date);
//   const day = String(formattedDate.getDate()).padStart(2, '0');
//   const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
//   const year = formattedDate.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// export default ActivityFeed;