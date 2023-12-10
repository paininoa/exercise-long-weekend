// // THIRD TRIAL ALONE -----------------------------------------------------------------------

// import { useState } from "react";
// import "./CustomList.css";

// export default ({ type, list }) => {
//   const mapedList = list.map((e, i) => <li key={`listItem${i}`}>{e}</li>);

//   return type === "ul" ? <ul>{mapedList}</ul> : <ol>{mapedList}</ol>;
// };

//PARTE 4 DELL'ESERCIZIO (ALONE)-------------------------------------------
import { useState } from "react";
import "./CustomList.css";

export default ({ type, list, buttons }) => {
  const mapedList = list.map((e, i) => {
    return (
      <li key={`listItem${i}`}>
        {e}
        {/* {buttons.map((btnElem, btnIndex) => {
          <button key={`button${btnIndex}`}>{btnElem}</button>;
        })} */}
      </li>
    );
  });

  return type === "ul" ? <ul>{mapedList}</ul> : <ol>{mapedList}</ol>;
};

// // ----- SECOND TRIAL COMPLETED UP TO EX 3 WITH LAURA AND ALEX ------------------------------

// import { useState } from "react";
// import "./CustomList.css";

// export default ({ type, list }) => {
//   const mapedList = list.map((e, i) => <li key={i}>{e}</li>);

//   return type === "ol" ? <ol>{mapedList}</ol> : <ul>{mapedList}</ul>;

// ALTERNATIVE WITH IF ELSE -------------------------------------------------------------------
// if (type === "ol") {
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
// }
// };

// //ESERCIZIO FATTO IN CLASSE ---------------------------------------

// import { useState } from "react";
// import "./CustomList.css";

// export default function ({ type, list }) {
//   const lista = list.map((el, ix) => <li key={`item${ix}`}>{el}</li>);

//   return type === "ul" ? <ul>{lista}</ul> : <ol>{lista}</ol>;
// }
