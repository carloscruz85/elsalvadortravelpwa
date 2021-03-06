import React from 'react'
import { useStore } from 'store/store'


const Biosecurity = () => {
    const { lang } = useStore()
    return (
        <>
            {
                lang === 'en' ?
                    <div className="basic-text">
                        <h3>PROYECT</h3>
                        <h2>EL SALVADOR
                        </h2>
                        <p>The Government of El Salvador, together with the Ministry of Tourism, have implemented a plan so that your visit to our country is safe. Please, read the instructions carefully and contact your tourist provider or call us at (503) 2241 3200 to answer your questions.
                        </p>
                        <h3>
                            Biosecurity Requirements to enter El Salvador

                        </h3>
                        <p>Biosecurity Requirements to enter El Salvador
                            Not vaccinated against COVID-19: They should present a negative COVID-19 result given 72 hours before the arrival to El Salvador (PCR, NAAT or LAMP as well). Vaccinated agains COVID-19: They should present the vaccination certificate with all doses suministrated, depending on the type of vaccine. If they have only been given a dose of two: They should present a negative COVID-19 result given 72 hours before the arrival to El Salvador (PCR, NAAT or LAMP).
                        </p>

                        <h3>
                            ADITIONAL IMPORTANT NOTES:

                        </h3>

                        <ul>
                            <li>Restrictions has been lifted for people who is from united Kingdom ans South Africa.</li>
                            <li>El Salvador accepts PCR  COVID 19, NAAT, ans LAMP as well.</li>
                            <li>Antigen test is not accepted.</li>
                        </ul>

                        <h2>food</h2>
                        <p>Find out about the entry and biosecurity conditions of the place you visit, so that you can comply with them. Biosecurity is everyone's business.
                        </p>
                        <p>
                            Try to maintain a physical distance of 2 meters between clients.

                        </p>
                        <p>
                            Disinfect your hands with a 70% alcoholic solution after having contact with surfaces such as tables, doors, menu, cash and others.

                        </p>
                        <p>
                            As a client, the use of the mask is essential when you are in closed spaces and when you are in open spaces that do not have physical distance of at least 2 meters

                        </p>

                        <h2>Lodging</h2>
                        <p>Keep your physical distance of at least 2 meters.
                        </p>

                        <p>If you are in common areas, always wear a mask.
                        </p>

                        <p>Sanitize your hands with alcohol gel after every interaction with other people.
                        </p>

                        <p>Check- Find out about the establishment's biosecurity regulations so that you can comply with them for your protection and that of others.
                        </p>

                        <h2>Tourist transportation</h2>

                        <p>If you travel in a group, remember to maintain biosecurity conditions: keep your physical distance and wear a mask
                        </p>

                        <p>Find out and respect the maximum capacity of a transport or establishment. This is how we all take care of ourselves
                        </p>
                        <p>
                            Wash your hands before and after boarding the transport. If you can't, use 70% alcohol gel

                        </p>
                        <p>Use the trash can inside the transport unit. If it does not have it, request that they place one. Let's keep our tourist destinations clean
                        </p>


                        <h2>Information</h2>

                        <p>In any interaction, minimize the risk by properly using high-efficiency masks and personal visual protection equipment (glasses or face shield).
                        </p>

                        <p>
                            Wash your hands every hour and apply a 70% alcoholic solution for antisepsis, after every social interaction

                        </p>

                        <p>Let's keep our tourist destinations clean. Remember to deposit the masks only in the appropriate containers, thus avoiding cross contamination and risks of infection.
                        </p>

                        <p>To protect yourself, in the different establishments and places you visit during your trip, keep the biosecurity measures.
                        </p>

                        <h2>Recreation</h2>

                        <p>Remember to wash your hands with soap and water frequently during your visit, and to disinfect your hands with alcohol gel before and after touching surfaces.
                        </p>

                        <p>Allows temperature measurement. This measure helps to identify possible infection risks.
                        </p>

                        <p>If a park staff or tour guide is not using personal protective equipment or following protocols, report back.
                        </p>

                        <p>Maintain physical detachment in all your activities. Use the mask properly.
                        </p>

                    </div>
                    : null
            }

            {
                lang === 'es' ?
                    <div className="basic-text">
                        <h2>PROYECTO</h2>
                        <h1>El Salvador</h1>
                        <p>El Gobierno de El Salvador junto al Ministerio de Turismo, han ejecutado un plan, para que tu visita a nuestro pa??s sea segura. Por favor, lee detenidamente las indicaciones y cont??ctate con tu proveedor tur??stico o ll??manos al (503) 2241 3200 para resolver tus dudas
                        </p>

                        <h3>Requisitos de bioseguridad para ingresar a El Salvador

                        </h3>
                        <p>Las personas no vacunadas contra COVID-19: Deben presentar resultado negativo de COVID-19 dado 72 horas antes de la llegada a El Salvador (PCR, NAAT o LAMP tambi??n). Los vacunados contra COVID-19: Deber??n presentar el certificado de vacunaci??n con todas las dosis suministradas, seg??n el tipo de vacuna. Si solo se les ha administrado una dosis de dos: Deben presentar un resultado COVID-19 negativo dado 72 horas antes de la llegada a El Salvador (PCR, NAAT o LAMP).
                        </p>

                        <h3>
                            NOTAS ADICIONALES IMPORTANTES:

                        </h3>

                        <ul>
                            <li>Se han levantado las restricciones para las personas que son del Reino Unido y Sud??frica.</li>
                            <li>El Salvador tambi??n acepta PCR COVID 19, NAAT y LAMP.</li>
                            <li>No se acepta la prueba de ant??geno.</li>
                        </ul>

                        <h3>
                            Alimentaci??n
                        </h3>
                        <p>Inf??rmate de las condiciones de ingreso y de bioseguridad del lugar que visitas, para que puedas cumplirlas. La bioseguridad es cosa de todos.
                        </p>

                        <p>Procura mantener la distancia f??sica de 2 metros entre clientes.
                        </p>

                        <p>Desinfecta tus manos con una soluci??n alcoh??lica al 70% luego de tener contacto con superficies como mesas, puertas, men??, dinero en efectivo y otros.
                        </p>

                        <p>Como cliente, el uso de la mascarilla es indispensable cuando est??s en espacios cerrados y cuando est??s en espacios abiertos que no tienen distanciamiento f??sico de al menos 2 metros.
                        </p>


                        <h3>
                            Alojamiento
                        </h3>

                        <p>Mant??n el distanciamiento f??sico de al menos 2 metros.
                        </p>

                        <p>Si est??s en las ??reas comunes, utiliza mascarilla siempre.
                        </p>

                        <p>Desinfecta tus manos con alcohol gel luego de cada interacci??n con otras personas.
                        </p>

                        <p>Revisa- Inf??rmate sobre las normativas de bioseguridad del establecimiento para que puedas cumplirlas para tu protecci??n y la de los dem??s.
                        </p>

                        <h3>
                            Transporte
                        </h3>

                        <p>
                            Si viajas en grupo recuerda mantener las condiciones de bioseguridad: guarda la distancia f??sica y usa mascarilla.

                        </p>

                        <p>Inf??rmate y respeta la capacidad m??xima de un transporte o establecimiento. As?? nos cuidamos todos
                        </p>

                        <p>
                            L??vate las manos antes y despu??s de abordar el transporte. Si no puedes hacerlo, utiliza alcohol gel al 70%

                        </p>

                        <p>
                            Utiliza el basurero dentro de la unidad de transporte. Si ??sta no lo tiene, solicita que coloquen uno. Mantengamos limpios nuestros destinos tur??sticos

                        </p>

                        <h3>
                            Informaci??n
                        </h3>

                        <p>En cualquier interacci??n minimiza el riesgo usando adecuadamente mascarillas de alta eficiencia y equipos de protecci??n personal visual (lentes o careta).
                        </p>

                        <p>L??vate las manos cada hora y aplicar una soluci??n alcoh??lica al 70% para la antisepsia, despu??s de cada interacci??n social.
                        </p>

                        <p>Mantengamos limpios nuestros destinos tur??sticos. Recuerda depositar las mascarillas ??nicamente en los contenedores adecuados, as?? evitas contaminaci??n cruzada y riesgos de infecci??n.
                        </p>

                        <p>
                            Para protegerte, en los distintos establecimientos y lugares que visites durante tu viaje guarda las medidas de bioseguridad.

                        </p>

                        <h3>Recreaci??n</h3>

                        <p>Recuerda lavarte las manos con agua y jab??n frecuentemente durante tu visita, y desinfectar tus manos con alcohol gel antes y despu??s de tocar superficies.
                        </p>

                        <p>Permite la toma de temperatura. Esta medida ayuda a identificar posibles riesgos de contagio.
                        </p>

                        <p>Si el personal del parque o el gu??a tur??stico no est?? utilizando equipo de protecci??n personal o cumpliendo los protocolos, informa.
                        </p>

                        <p>Mant??n el distanciamiento f??sico en todas tus actividades. Usa adecuadamente la mascarilla.
                        </p>
                    </div>
                    : null
            }

        </>
    )
}

export default Biosecurity
