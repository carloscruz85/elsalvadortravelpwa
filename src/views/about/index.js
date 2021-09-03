import React from 'react'
import { useStore } from 'store/store'
// import Typography from '@material-ui/core/Typography';

const About = () => {
    const { lang } = useStore()
    return (
        <>
            {
                lang === 'es' ?
                    <div className="basic-text">

					<h3 >Requisitos de entrada</h3>
						<p >Pasaporte dependiendo del lugar de origen, en algunos casos la visa puede costar US$12 usualmente dura 90 días.</p>
						<p >Las aerolíneas que deseen ingresar a El Salvador, deben exigir a sus pasajeros (a excepción de tripulación, diplomáticos o niños menores de 2 años), una prueba PCR negativa, emitida por el laboratorio, 72 horas antes de abordar el vuelo.</p>
						<p >Si la prueba es enviada por el laboratorio a traves de cualquier medio electrónico (E-mail, whatsapp, mensaje de texto, etc.) el pasajero tendrá que imprimir el certificado, para presentarlo en el counter de la aerolínea en el país de embarque.</p>
						<p >El certificado de la prueba, a presentar en la aerolínea, no requiere la firma y sello del laboratorio ni de la persona responsable de haber realizado el examen.</p>
						<p >Es importante que todos los visitantes verifiquen los requerimientos migratorios necesarios para ingresar a El Salvador antes de iniciar su viaje para evitar contratiempos o episodios no deseados. Como regla ya conocida por todos, es importante que el pasaporte de cada uno tenga una validez mínima de 6 meses.</p>
					<h3 >Impuestos en aeropuerto</h3>
						<p>EE.UU. $ 32.00</p>
                        
						<h3 >Requisitos de VISA</h3>
						<p >Los ciudadanos de algunos países&nbsp;no requieren visa&nbsp;para ingresar en El Salvador por una visita que no exceda a un periodo de 90 días o de viaje en tránsito:&nbsp;<a href="https://elsalvador.travel/corsatur/surfcity/torneos/countries-that-do-not-require-a-visa-to-enter-el-salvador/">Ver detalles</a></p>
						<p ><a href="https://elsalvador.travel/surfcity/visa-exempt-nationalities-that-may-require-a-tourist-card/">Algunas nacionalidades exentas de visa</a>&nbsp;pueden requerir una tarjeta de turista, la cual se puede obtener en los puntos fronterizos de ingreso al país, y tiene un costo de US $ 12,00.</p>
						<p>Si su país no está enlistado entonces necesitará aplicar a una&nbsp;Visa Consular&nbsp;en una de las Representación Diplomática de El Salvador en el exterior o una&nbsp;Visa Consultada&nbsp;a obtenerse a través del Ministerio de Relaciones Exteriores de El Salvador. Por lo anterior es altamente recomendado que revise en la&nbsp;página web de la Dirección General de Migración y Extranjería.&nbsp;<a href="http://www.migracion.gob.sv/visas-prorrogas-y-permisos/">Página Webb De La Dirección General De Migración y Extranjería</a></p>
						<p><b>Adicionalmente, todos los migrantes deben tomar en consideración lo siguiente:</b></p>
						<ol>
						<li >El tiempo máximo de estadía que puede otorgarse en calidad de turista es de 90 días. Si se requiere prórroga, podrá solicitarse una en el año.</li>
						<li >Todos los países de Suramérica y África, así como Panamá requieren para el ingreso, que el visitante se haya&nbsp;vacunado contra la fiebre amarilla&nbsp;15 día previos a su viaje a El Salvador y deberá portar el certificado o cartilla de dicha vacuna ya que pudiese ser solicitada por las autoridades de salud de El Salvador en el punto de ingreso al territorio.</li>
						</ol>
						<h3>Información</h3>
                        <ul>
                            <li>
                            Moneda:
US Dollar (US $)
                            </li>
                            <li>
                            Idioma Oficial:
Español
                            </li>
                            <li>
                            Hora mundial:
GMT -06:00
                            </li>
                            <li>
                            Clima:
En general el clima de El Salvador es cálido o tropical
durante la mayor parte del año. El promedio anual de la
temperatura es de 28° C, oscilando entre 25° C y 28° C.
                            </li>
                            <li>
                            Horario De Bancos: 
9:00 am – 4:00 pm. Algunas excepciones laboran
hasta las 5:00, 6:00 y 7:00 pm.
                            </li>
                            <li>
                            Cheques De Viajero:
Se pueden cambiar en Bancos y Hoteles con su
Pasaporte
                            </li>
                            <li>
                            Internet:
Cobertura en casi el 100% del país por Wifi y paquetes de Datos
                            </li>
                            <li>
                            Electricidad:
110 Voltios AC, 60 Hz, 220 Voltios
                            </li>
                            <li>
                            Propina:
10% del costo total de su consumo es lo usual
                            </li>
                            <li>
                            ransporte: 
Mostramos listado de disponibilidad de transporte en El Salvador.
<a  href="https://elsalvador.travel/surfcity/transportation-options/">Click Aquí</a>
                            </li>
                        </ul>
                    </div>
                    : null
            }

            {
                lang === 'en' ?
                    <div className="basic-text">
                        <h3>Entry Requirements</h3>
                        <p >Passport, depending on the country of origin. Sometimes a tourist visa or tourist card at a cost of $ 12 is needed and are usually valid for 90 days.</p>
                        <p >Airlines that wish to enter El Salvador must require their passengers (except for crew, diplomats or children under 2 years of age), a negative PCR test, issued by the laboratory, 72 hours before boarding the flight.</p>
                        <p >If the test is sent by the laboratory through any electronic means (E-mail, whatsapp, text message, etc.) the passenger will have to print the certificate, to present it at the airline counter in the country of shipment.</p>
                        <p >The test certificate, to be presented at the airline, does not require the signature and seal of the laboratory or of the person responsible for having performed the examination.</p>
                        <p >All visitors must verify the immigration requirements needed to enter El Salvador before starting their journey to avoid unwanted setbacks or episodes. Passports should expire in no less than 6 months.</p>
                        <h3 >Airport Tax</h3>
                        <p>EE.UU. $ 32.00</p>
                        <h3 >VISA Requeriments</h3>
                        <p >Nationals of the&nbsp;following countries&nbsp;do not require a visa&nbsp;to visit El Salvador for tourism or family visit for a period not exceeding 90 days or for transit.</p>
                        <p ><a href="https://elsalvador.travel/surfcity/visa-exempt-nationalities-that-may-require-a-tourist-card/">This visa-exempt&nbsp;countries</a>&nbsp;may require a&nbsp;tourist card, which can be obtained at the border points of entrance to the country, and has a cost of US$12.00.</p>
                        <p>If your country is not listed above, you will need to apply for a&nbsp;Consular Visa&nbsp;at the Salvadoran Embassies abroad or a&nbsp;Consulted Visa through the Ministry of Foreign Affairs. It is highly recommended to review these requirements in the following web page:&nbsp;<a href="http://www.migracion.gob.sv/visas-prorrogas-y-permisos/">http://www.migracion.gob.sv/visas-prorrogas-y-permisos/</a></p>
                        <p><b>Additionally, for any of the visa categories please consider the following:</b></p>
                        <ol>
                            <li >The maximum length of stay that can be given to a tourist is 90 days. If an extension is required, one can be requested per year.</li>
                            <li >People arriving from Panama, South America or Africa must have received&nbsp;the yellow fever vaccine&nbsp;at least 15 days before their trip to El Salvador.</li>
                        </ol>
                        <h3>Info</h3>
                        <ul>
                            <li>Currency:  US Dollar (US $)</li>
                            <li>
                                Official Language:Spanish
                            </li>
                            <li>World Time : GMT-6
                            </li>
                            <li>
                                Climate:
                                Generally, the climate of El Salvador is warm or tropical
                                during the greater part of the year. The annual average
                                temperature is 28°C, ranging between 25°C and 28°C.
                            </li>
                            <li>
                                Bank hour service: 08:00 – 16:00. Some exceptions working up to 17:00 or 19:00 hours.


                            </li>
                            <li>
                                Travelers Checks: They can be exchanged at banks and hotels, upon presentation of a passport.
                            </li>
                            <li>
                                Internet: Easy access to the Internet via WiFi hotspots in business centers, hotels, cafes and restaurants.


                            </li>
                            <li>
                                Electricity: 110 volts AC, 60 Hz, 220 Volt

                            </li>
                            <li>
                                Tipping: 10% is appropriate in most restaurants and bars. Some already include the tip in the bill.


                            </li>
                            <li>
                                Transport: Here is the list of recommended transportation El Salvador
                                <a href="https://elsalvador.travel/surfcity/transportation-options/">Clic Here</a>
                            </li>
                        </ul>
                    </div>
                    : null
            }
        </>
    )
}

export default About
