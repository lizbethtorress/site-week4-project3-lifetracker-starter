import React from 'react'

const ActivityFeed = () => {
  return (
    <div>ActivityFeed</div>
  )
}

export default ActivityFeed


// import React from 'react';
// import SummaryStat from '../SummaryStat/SummaryStat';

// const ActivityFeed = ({ totalCaloriesPerDay, avgCaloriesPerCategory, ...otherProps }) => {
  
  
//     const renderTotalCaloriesPerDay = () => {
    
//     return (
//       <div className="per-day">
//         <h4>Total Calories Per Day</h4>
//         {totalCaloriesPerDay.map(item => (
//           <SummaryStat
//             key={item.date}
//             stat={Math.floor(item.calories)}
//             label={`${item.calories}`}
//             substat={formatDate(item.date)}
//           />
//         ))}
//       </div>
//     );
//   };

//   const renderAvgCaloriesPerCategory = () => {
//     return (
//       <div className="per-category">
//         <h4>Average Calories Per Category</h4>
//         {avgCaloriesPerCategory.slice(0, 6).map(item => (
//           <SummaryStat
//             key={item.category}
//             stat={Math.floor(item.calories)}
//             label={`${item.calories}`}
//             substat={item.category}
//           />
//         ))}
//       </div>
//     );
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div className="activity-feed" {...otherProps}>
//       {renderTotalCaloriesPerDay()}
//       {renderAvgCaloriesPerCategory()}
//     </div>
//   );
// };

// export default ActivityFeed;