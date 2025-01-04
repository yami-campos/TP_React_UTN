import React from 'react'
import '../contacto/contacto.css'


const contacto = () => {
    return (
        <>
            <div className='contacto-container'>
                <section className="contacto" id="contacto">
                    <div className="contenedor">
                        <div className="contacto-textos">
                            <h2>¡Escribinos!</h2>
                            <p>Reclamos y sugerencias...</p>
                        </div>

                        <form action="" className="formulario" method="POST">
                            <input type="text" placeholder="Nombre" id="nombre" name="nombre" required value="" />
                            <input type="email" placeholder="Correo" id="correo" name="correo" required value="" className="email" />
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>

                            <div className="derecha">
                                <input className="boton derecha" type="submit" value="Contactar" name="submmit" />
                            </div>

                        </form>
                    </div>
                </section>
            </div>

        </>

    )
}



export default contacto

