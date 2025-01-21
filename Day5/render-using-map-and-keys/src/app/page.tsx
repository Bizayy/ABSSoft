import Image from "next/image";
import { people } from "./data";
export default function Home() {
    {/* Separating Chemists and others using filter and mapping them. Using the keys too.*/ }

    const chemists = people.filter(person => person.profession === 'chemist');
    console.log(chemists);


    const others = people.filter(person => person.profession !== 'chemist');
    console.log(others);

    const chemistList = chemists.map(chemist => (
        <div key={chemist.id}>
            <h1>{chemist.name}</h1>
            <h2>{chemist.profession}</h2>
            <p>Accomplishement: {chemist.accomplishment}</p>
        </div>
    ))


    const othersList = others.map(other => (
        <div key={other.id}>
            <h1>{other.name}</h1>
            <h2>{other.profession}</h2>
            <p>Accomplishement: {other.accomplishment}</p>
        </div>
    ))

    return (
        <div>
            <h1>Chemists:</h1>
            {chemistList}
            <h1>Others: </h1>
            {othersList}
        </div>
    );
}
