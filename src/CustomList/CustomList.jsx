{
  /*Esercizio 1:
Crea un componente CustomList che accetta i seguenti props: 
- type: "ul" o "ol", stringhe, che determinano quale lista deve venire creata;
- list: un array di stringhe che vengono usate per creare dei list item
*/
}

import { useState } from "react";
import "./CustomList.css";

export default ({ type, list }) => {
  const mapedList = list.map((e, i) => <li key={i}>{e}</li>);

  return type === "ol" ? <ol>{mapedList}</ol> : <ul>{mapedList}</ul>;

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
};

//ESERCIZIO FATTO IN CLASSE

// export default function ({ type, list }) {
//   const lista = list.map((el, ix) => <li key={`item${ix}`}>{el}</li>);

//   return type === "ul" ? <ul>{lista}</ul> : <ol>{lista}</ol>;
// }
