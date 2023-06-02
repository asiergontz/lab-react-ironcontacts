import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
function App() {
  const contactsStart = contacts.slice(0, 5);
  const contactsRest = contacts.slice(5, contacts.lenght);

  const [contactsArray, setContactsArray] = useState(contactsStart);

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contactsRest.length);

    const contactsCopy = [...contactsArray];
    const randomActor = contacts[randomIndex];

    contactsCopy.push(randomActor);
    setContactsArray(contactsCopy);
  };

  return (
    <div className="App">
      <button onClick={addRandom}>Add random celebrity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>
                  <img className="actor" src={elm.pictureUrl} alt={elm.name} />
                </td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>{elm.wonOscar ? "🏆" : " "}</td>
                <td>{elm.wonEmmy ? "🏆" : " "} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
