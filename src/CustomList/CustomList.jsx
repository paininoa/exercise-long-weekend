import { useState } from "react";
import "./CustomList.css";

// THIRD TRIAL ALONE ------------

export default ({ type, list }) => {
  const mapedList = list.map((e, i) => <li key={`listItem${i}`}>{e}</li>);

  return type === "ul" ? <ul>{mapedList}</ul> : <ol>{mapedList}</ol>;
};

// ----- SECOND TRIAL COMPLETED UP TO EX 3 WITH LAURA AND ALEX ----------

// export default ({ type, list }) => {
//   const mapedList = list.map((e, i) => <li key={i}>{e}</li>);

//   return type === "ol" ? <ol>{mapedList}</ol> : <ul>{mapedList}</ul>;

// if (type === "ol") {                         // ALTERNATIVE WITH IF ELSE
//   return (
//     <ol>
//       {list.map((e, i) => (
//         <li key={i}>{e}</li>
//       ))}
//     </ol>
//   );
// } else if (type === "ul") {
//   return (
//     <ul>
//       {list.map((e, i) => (
//         <li key={i}>{e}</li>
//       ))}
//     </ul>
//   );
// };

//ESERCIZIO FATTO IN CLASSE

// export default function ({ type, list }) {
//   const lista = list.map((el, ix) => <li key={`item${ix}`}>{el}</li>);

//   return type === "ul" ? <ul>{lista}</ul> : <ol>{lista}</ol>;
// }
