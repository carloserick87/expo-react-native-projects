
interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
        
    }

interface Address{
   country: string;
   houseNo: string;
   street?: string;
}


const ObjectLiterals = () => {

    const person: Person = {
        age: 38,
        firstName:'Carlos',
        lastName:'Mandujano',
        address:{
            country:'Ireland',
            houseNo: '19'
        },
    };


  return (
    <div>
      <h3>Objetos Literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>

    </div>
  )
}

export default ObjectLiterals
