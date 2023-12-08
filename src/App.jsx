{
  /*Esercizio 1:
Crea un componente CustomList che accetta i seguenti props: 
- type: "ul" o "ol", stringhe, che determinano quale lista deve venire creata;
- list: un array di stringhe che vengono usate per creare dei list item

Esercizio 2:
Crea un array di oggetti (allLists), in cui ciascun oggetto ha questa struttura:
{
   title: "Invitati"
   type: "ul",
   list: ["Tizio", "Caio]
}
Per ogni oggetto, renderizza un div che contiene un titolo con contenuto 'title' e 
un CustomList con type e list nei props.

Esercizio 3:
Sopra a ciascuna lista, aggiungi un div con un input text e un bottone "Aggiungi".
Al click di aggiungi, il contenuto dell'input viene aggiunto alla lista.
Mi raccomando, significa che l'array di oggetti dell'esercizio 2 (allLists) 
va rifattorizzato dentro ad uno state!

Esercizio 4:
Modifica i props che CustomList accetta. Aggiungi un props 'buttons' che vuole un
 array di stringhe. Per ogni stringa, crea un bottone su ciascun list item.
Esempio:
<CustomList 
   type="ul" 
   list={["Elemento 1", "Elemento 1"]}
   buttons={["click here", "click here as well"]}
/>

<ul>
   <li>
      <strong>Elemento 1<strong/>
      <button>click here</button>
      <button>click here as well</button>
   </li>
</ul>

Esercizio 5:
Modifica il tuo componente principale in modo che per ogni CustomList che viene creato, 
gli vengono passati due bottoni ciascuno: 'Elimina'e 'Modifica'. 
Al click di Elimina, rimuovi la stringa all'interno dell'array 'list' dell'oggetto 
corrispondente all'interno dell'array allLists. 
Al click di Modifica, cambia la stringa all'interno dell'array 'list' dell'oggetto 
corrispondente all'interno dell'array allLists, con il valore all'interno dell'input 
text creato ad Esercizio 3.

Bonus:
Crea una React APP in cui l'utente inserisce i dati di un form, attraverso 
un componente CustomFormElement, che in base al props 'mode' ("input", "select", 
"checkbox", "radio") ritorna il form element corrispondente (potete usare uno 
  switch, come visto oggi a lezione).
Oltre al props 'mode', CustomFormElement deve avere anche i seguenti props: 
- label: un testo che rappresenta il valore dell'input (es. Your Name)
- value: il valore del form element
- onChange: la funzione che viene eseguita all'onChange dell'element, deve venire 
eseguita passando solo il value non l'intero evento

*/
}

import { useState } from "react";
import "./App.css";
import CustomList from "./CustomList/CustomList";

const allLists = [
  {
    title: "Invitati",
    type: "ul",
    list: ["Tizio", "Caio"],
  },
  {
    title: "Partecipanti",
    type: "ol",
    list: ["Tizio", "Caio"],
  },
  {
    title: "Altri",
    type: "ol",
    list: ["Tizio", "Caio"],
  },
];

function App() {
  const [objectList, setObjectList] = useState(allLists);
  const [inputValues, setInputValues] = useState([]);
  // const [newItem, setNewItem] = useState(new Array(objectList.length).map(() => ""));

  const handleOnChange = (inputIndex, newValue) => {
    let newInputValues = [...inputValues];
    newInputValues[inputIndex] = newValue;
    setInputValues(newInputValues);
  };

  const handleAddClick = (sectionIndex) => {
    let newObjectList = [...objectList];
    newObjectList[sectionIndex].list.push(inputValues[sectionIndex]);
    setObjectList(newObjectList);
    handleOnChange(sectionIndex, "");
  };

  return (
    <>
      <h1>
        07/12 <br />
        exercise-long-weekend
      </h1>
      {/*
      <h2>Esercizio 1</h2>
      <CustomList type="ul" list={listaProva} />
      <CustomList type="ol" list={["ciao", "hey", "piero"]} />

      <h2>Esercizio 2</h2>

      {allLists.map((e, i) => (
        <section key={i}>
          <div>{e.title}</div>
          <CustomList type={e.type} list={e.list} />
        </section>
      ))}
      */}

      <h2>Esercizio 3 qwerty</h2>

      {objectList.map((e, i) => (
        <section key={i}>
          <div>{e.title}</div>
          <CustomList type={e.type} list={e.list} />

          <input
            type="text"
            value={inputValues[i] ?? ""}
            onChange={(e) => handleOnChange(i, e.target.value)}
          />
          <button onClick={() => handleAddClick(i)}>Aggiungi</button>
        </section>
      ))}
    </>
  );
}

export default App;
