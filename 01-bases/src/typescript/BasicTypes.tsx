

const BasicTypes = () => {

 const name: string = 'Carlos Erick';
 const age : number = 38;
 const isActive: boolean = true;

 const powers:  string[] = ['React', 'ReactNative', 'Astro'];        

  return (
    <>
      <h3>Basic Types</h3>
      { name } - { age } - { isActive ? 'Activo' : 'Inactivo' }
      <p>{ powers.join(', ')}</p>
    </>
    
  )
}

export default BasicTypes
