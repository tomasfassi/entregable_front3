import React, { useState } from 'react'

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [animal, setAnimal] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
    
    if (nombre.trim() === '' || animal.trim() === '') {
        setError(true);
        setShow(false);
    } else {
        setError(false);
        setShow(true);
    }
};

    return (
        <div className="container">
        <h1>Elige un animal</h1>
        <form onSubmit={handleSubmit}>
            <label style={{ marginBottom: '0.5em', fontSize: '2em', fontWeight: 'bold', color: '#0071bc', textTransform: 'uppercase', letterSpacing: '1px' }}>Nombre:</label>
            <br/>
                <input
                type="text"
                disabled={show}
                placeholder='Ingresa tu nombre'
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                />
            <br/>
            <br/>

        <label style={{ marginBottom: '0.5em', fontSize: '2em', fontWeight: 'bold', color: '#0071bc', textTransform: 'uppercase', letterSpacing: '1px' }}>Animal Favorito:</label>
        <br/>
            <input
            type="text"
            disabled={show}
            placeholder='Ingresa tu animal favorito'
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            />
        <br/>
        <br/>

        <button style={{ marginTop: '1em', backgroundColor: 'springgreen', color: 'black', padding: '0.5em 1em', fontSize: '1em', borderRadius: '4px', border: 'none' }}>Enviar</button>
        <br/>
        <br/>

        {error && <span>Por favor, verifica que la información sea correcta.</span>}
        {show && (
            <>
            <h3 style={{ fontSize: '1em' }}>¡Muchas gracias, {nombre}!</h3>
            <h3 style={{ fontSize: '1em' }}>Tu animal favorito es un: {animal}.</h3>
            </>
        )}
        </form>
        </div>
    );
}


export default Form;