var nums = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172"]; 
 
var titulos = [ " Llega Mirmo, el muglox del amor",  " De Rirumu con amor",  " El ataque del ninja Yashichi",  " La dieta mágica de Kaede",  " La gran aventura de la pequeña Kaede",  " ¿Amor robado?",  " Yo arreglaré el amor",  " Mirmo contra Murumo",  " Kaoru, el joven hijo de una familia riquísima",  " Batalla de amor a cuatro bandas",  " Viene padre, corre a casa",  " Rirumu, Mogu y...",  " Día de problemas",  " Mirmo... ¿suspenso?",  " La pandilla Warumo",  " Kaede visita la casa de Mirmo",  " Un regalo de la tribu Gaia",  " Es verano, es el mar, soy Kaoru",  " Fuegos artificiales, magia y el abuelo",  " Mirmo atascado",  " Atrapados en la mansión fantasma",  " El primer amor de Yashichi",  " Rirumu echa las cartas muglox",  " Las caries de Murumo",  " Más maldades de la banda Warumo",  " Salvar el reino de Mirmo",  " Vamos al Colegio Muglox",  " Haz lo que puedas en el día doble del deporte",  " El día más importante de Rirumu",  " ¿Qué? ¿Mirmo entra en la banda Warumo?",  " Hola, soy Kinta",  " Papii, la rival de Murumo, lo desafía",  " Adiós Azumi",  " La caza del demonio de Murmutaro",  " Setsu, ¿estrella de cine?",  " Capturar a Mirmo",  " Mirmo contra Mirmo Mecánico",  " Déjalo en nuestras manos",  " No sé lo que es",  " El caso de la montaña de nieve",  " El muglonopoli",  " La mandarina y el brasero",  " Otra vez ¡Es Kinta!",  " ¡Ánimo Hadas!",  " Pánico amoroso con el chocolate de Otome",  " Tres chicas nuevas",  " ¿De verdad?",  " El cuaderno de notas de los Muglox",  " La emocionante lucha emocional de Kaoru",  " Derrotar al Mirmo de antes",  " El mundo de los Muglox congelado en el tiempo",  " ¡Adelante pueblo de Mirmo!",  " ¿Has roto las maracas?",  " Saori, la misteriosa estudiante nueva",  " ¿El hermano de Azumi?",  " Una historia acaramelada",  " Una flor llamada Rirumu",  " El barco de los hermanos Mirmo y Murumo",  " ¿La banda Warumo al fin desbandada?",  " Murumo es mío",  " Un concierto peligroso",  " Kinta y Ponta",  " Señora, está mohoso",  " Sea como sea, es una magia especial (1ª Parte)",  " Sea como sea, es una magia especial (2ª Parte)",  " ¿Quién es quien es quién?",  " Un muglox debilucho",  " Momo, princesa por excelencia",  " Amigos valiosos",  " Animales por todas partes",  " Discúlpame",  " La visita de Yamane",  " Sinceramente, ¿Tu qué opinas?",  " Búsqueda Bouchana. El misterio de la espada Pera-pera",  " Proteger la base secreta",  " Vamos a la televisión",  " «La hora de la llegada de Daaku",  " ¿Mirmo dorado?",  " Soy Mirmo, encantado de conocerte",  " Yo pegaré las pegatinas",  " Cómo hacerse amigo de un muglox",  " Concierto Muglox",  " ¡Corred como locos! La gran carrera salvaje",  " Un grito primitivo",  " Mirmo, ¿el muglox obediente?",  " La tragedia de la familia Kokanemochi",  " Ataca, recibe",  " El reloj de los Muglox (1ª Parte)",  " El reloj de los Muglox (2ª Parte)",  " La historia de Kaedicienta",  " Educando a los niños Warumo",  " Los 30 minutos de cocina de Rirumu y Akumi",  " Un muglox enamorado",  " ¡Peligro! Tienda de Mimomo",  " El compromiso repentino del gran muglox M",  " Los manantiales de aguas termales de los muglox",  " La cita de Saori",  " Una amistad rota",  " Hay algo raro en el festival mundial de la música",  " Me llamo Daaku",  " La melodía que salva el mundo",  " Adiós Mirmo...",  " Todo empezó con un pulpo",  " Tiene que haber rizos",  " Me encantan los pimientos",  " Nuestro tesoro",  " La roca no se rompe",  " Muglox ninja, la guerra de las gárgaras",  " Pues sí, la banda Warumo son idiotas",  " Anna enamorada, eso es amor",  " La misión de los cristales de Takosu",  " Las Muglolimpiadas",  " Correr, saltar, emplearse a fondo y nadar",  " Lágrimas en la meta",  " ¿Eso es un calamar?",  " Etsumi 14-0",  " ¡Prueba: Buscad a los niños Warumo!",  " ¿Baramo está aquí?",  " Akumi y Saori",  " La leyenda de Lorelei",  " ¡No digas que no molo!",  " La sandía y la piscina",  " Chucherías agridulces",  " Adiós Setsu",  " El combate final: Este guardaespaldas contra ese guardaespaldas",  " Vale, la banda Yoimo",  " Tengo miedo a los conejos",  " La ciudad natal de Takosu",  " Kaede es muy popular",  " ¿Está bien que Álgebro sea delegado de clase?",  " Quiero crecer",  " Afro, Satoru y Piman",  " La banda Warumo es muy fuerte",  " Kinta, ¿el héroe de la tribu Gurumi?",  " El temible ladrón Papán",  " Ha nacido el rey Mirmo",  " ¿De verdad ha nacido el rey Mirmo?",  " Saiyuki",  " El secreto de Takosu",  " Ha llegado el ninja diablo",  " Murumo y el bebé volador",  " ¡Soy un recolector de almas!",  " El C.F.M contra el C.F.C.",  " La Banda Warumo ha caído presa del amor",  " Busquemos el último cristal",  " ¡Vaya! Siete pruebas",  " El pasado de Takosu",  " Grandes problemas en el país de Cristal",  " Apuntad a la nariz",  " Choconubes para siempre",  " Holas y adioses: el nuevo semestre",  " Papii, la guerrera del amor»",  " Yo te enseñaré el juego del amor",  " Soy un fantasma",  " Golpe sucio",  " Amor color lavanda",  " Amor color lavanda: Versión Muglox",  " Haruka y Setsu",  " La compañera de Panta",  " El señorito Kaoru ataca de nuevo",  " Jaleo, guerra de pollitos",  " ¡Fantasmas! La Banda Warumo",  " Cómo hacer un manga interesante",  " Festival de verano: ponte guapa con tu yukata",  " Setsu contra Koichi: la última oportunidad de amor",  " Estalla la tormenta del amor",  " El amor oscila: Koichi y yo",  " Yo, Kaede Minami, haré todo lo que pueda",  " Salvar a Panta",  " Muchas resoluciones",  " El deseo de Kaede, los sentimientos de Mirmo",  " Todos juntos: ¡Mirumo Zibang!"]; 

var descs = [ " Minami Kaede es una niña común y corriente en segundo grado de secundaria, que esta enamorada de Setsu. Un día, compra una taza misteriosa en una tienda, con la promesa de que en esa taza existe un muglox que cumpliría su deseo de amor. Sin embargo, en la taza conoce a Mirmo el principe de los muglox, el cual es terco y no tiene inteción de ayudar a Kaede. Por lo menos no sin tener una recompensa acaramelada. ", 
" Rirumu, la prometida de Mirmo, llega al mundo humano para estar cerca de Mirmo. Pero primero debe elegir un compañero para quedarse en el mundo de los humanos. Ante esta situación Rirumu elige a Setsu como su compañero para que Kaede puede acercarse más a Setsu. Al enterarse de esta situación, Mirmo entra en pánico porque teme a sufrir la furia descontrolada que posee Rirumu cuando se enoja. ", 
" Tras enterarse de que Mirmo está en el mundo de los humanos entrenando. Yashichi, un ninja muglox que es el rival de Mirmo, sigue a Mirmo hasta el mundo de los humanos para poder continuar su sueño de vencerlo. Una vez que Yashichi se encuentra en el mundo de los humanos elige a Azumi como su compañera y le promete, a cambio de quedarse en su casa, ayudarla a obtener el corazón de Setsu. ", 
" Kaede piensa que la mejor manera de gustarle a Setsu es siendo más bonita. Por eso, Kaede y Rirumu comienzan a hacer ejercicio para bajar de peso Azumi al descubrir los planes de Kaede y Rirumu, les envía diaramiente pasteles deliciosos para evitar que consigan su objetivo. ", 
" Mirmo compra de la tienda de Mimomo el polvo Chibikko que permite hacer más pequeñas las cosas. Con este polvo, Mirmo encoge el cuerpo de Kaede al tamaño de un muglox. ", 
" Azumi y Yashichi buscan una herramienta para romper la relación entre Kaede y Setsu. En la tienda de Mimomo obtienen un producto que extrae el amor de una persona. ", 
" Mirmo y Rirumu intentan reparar el amor de Kaede sin exito, pero justo cuando pierden las esperanzas, el hermano menor de Mirmo, Murumo llega al mundo de los humanos con una manera de restaurar el amor de Kaede, que aprendió en una clase del Colegio Muglox ", 
" Murumo se ha escapado del castillo del reino de Mirmo y rehúsa a irse de la casa de Kaede. Esto molesta a Mirmo, porque si él come algún dulce recibirá una descarga eléctrica. Mirmo se ve obligado a enfrentarse a Murumo para que se vaya. ", 
" Mirmo utiliza a su mascota muglox para buscarle a Murumo un compañero humano. ", 
" Azumi descubre los sentimientos de Kaoru hacia Kaede y comienza a idear un plan para que Kaede y Setsu peleen. ", 
" El padre de Mirmo (el rey Marumo) tuvo una disputa con la reina Saria y decide escapar al reino humano para divertirse. ", 
" Rirumu al no poseer una mascota muglox se siente triste, para remediar esto Setsu le regala un muñeco de peluche al cual Rirumu decide darle vida con su magia, lo cual traera muchos problemas. ", 
" Peta el amigo de toda la vida de Mirmo decido visitarlo en el mundo de los humanos. Pero, antes de aparecer su taza se rompe. Mirmo, Kaede y Rirumu buscan la forma de arreglar la taza para poder ver a Peta. ", 
" El profesor Enma decide evaluar el entrenamiento de Mirmo en el mundo de los humanos y para ello mide la felicidad de su compañera humana Kaede, que por haber tenido un resfriado al descuidarse una noche anterior, obtiene una mala calificación. Enma le da entonces una última oportunidad a Mirmo de hacerla feliz hasta la media noche. ", 
" Aparecen en el mundo humano los jefes de Yashichi, la Pandilla Warumo. Los cuales tienen el objetivo de derrotar a Mirmo. ", 
" Mirmo y Kaede viajan al mundo Muglox a buscar un micrófono mágico legendario para podervencer a la Pandilla Warumo. ", 
" Mirmo y Kaede encuentran a los dioses de la tribu Gaia. Y, deben resolver un acertijo para poder obtener el micrófono mágico. ", 
" Kaoru invita a su isla privada a Kaede, Setsu y Azumi. Allí, Yashichi aprovecha para derrotar a Mirmo, pero comete un fallo con un objeto mágico, lo que provoca que la casa se cierre y que nadie pueda acceder. ", 
" Kaede, Setsu y Etsumi ayudan a Gonzo (un pirotécnico legendario y abuelo de Etsumi) a realizar una pirotenia difícil. Yashichi se entera de esto y buscará complicar las cosas. ", 
" Kaede intenta que Mirmo se quite el gorro, pero lo unico que logra es que la cabeza de mirmo se quede atrapada dentro de una botella. o. Kaede y amigos tendrán que buscar la manera de quitarle la botella de la cabeza de Mirmo, teniendo encima a la pandilla Warumo que secuestra a Mirmo aprovechándose de su impotencia. ", 
" Murumo se pierde en una vieja mansión. Entonces Mirmo, Kaede, Rima, Setsu, Kaoru y Azumi van en busca de él. Mientras, Yashichi intenta asustar a Kaede por órdenes de Azumi. Pero, mientras están dentro de la mansión, se dan cuenta de que está encantada y tiene fantasmas. ", 
" Después de peleear con Azumi, Yashichi sale a pasear por la ciudad. De pronto, ve a una muglox llamada Otome y se enamora de ella a primera vista. Como Yashichi no puede se atreve a hablar con Otome, Rirumu, Kaede y Mirmo tratarán de ayudarlo. ", 
" Rima intenta probar echar las cartas muglox. Como no se le da nada bien intenta echar un conjuro para poder acertar más, pero termina dejando en blanco las cartas. ", 
" A Murumo le salen caries por comer esponjas y no lavarse los dientes. Cuando Mirmo lo descubre llama al dentista del mundo muglox. Murumo, asustado, huye por la ciudad, causándole problemas a sus compañeros. ", 
" La pandilla Warumo le roba las maracas a Mirmo y luego lo encarcelan. Ante esta situación sus amigos van a rescatarlos pero terminan encarcelados al igual que Mirmo. ", 
" Kaede se entera de que Mirmo y sus amigos estan encarcelados y busca una forma de viajar al mundo muglox para ayudarlos a escapar. ", 
" Al poseer una taza muglox Kaede debe asistir al colegio muglox todos los sábados junto con Mirmo. ", 
" El día del deporte del mundo muglox y del mundo humano son el mismo día, esto le trae dificultades a Kaede ya que debe asistir a ambos día del deporte. ", 
" Es el aniversario del compromiso de Rirumu y Mirmo, pero Mirmo lo olvida por completo. ", 
" La pandilla Warumo encuentra un secreto que podría causar la destrucción del mundo muglox. Utilizan este secreto para que mirmo se una a la pandilla Warumo. ", 
" En la excursión del colegio muglox al monte Mirmo y sus amigos se pierden y encuentran la aldea de la tribu Gurumi. ", 
" Papii va de visita al mundo de los humanos debido a la preocupación que siente por Murumo. ", 
" Yashichi, cansado de los maltratos y castigos de Azumi, decide irse de la casa y buscar un nuevo compañero humano. ", 
" En este episodio se muestra el cuento de hadas de Momotarō. En donde Momotaro, es llamado Murmutaro y es interpretado por Murumo y el demonio que atesora las riquezas es interpretado por Mirmo. ", 
" Setsu es elegido como sustituto de un famoso actor para intepretar una pelicula. ", 
" La padilla Warumo  engaña a un inventor muglox para que haga un robot idéntico a Mirmo. El robot se sale de control y comienza a crear caos por todo el reino de Mirmo. Esto hace que todos los muglox piensen que el verdadero Mirmo fue el culpable, por lo que el Rey y sus soldados intentan capturar al auténtico Mirmo. ", 
" Mirmo y Kaede van al mundo muglox para atrapar al robot de Mirmo. ", 
" Yashichi intenta derrotar a Mirmo pero termina mal herido. Ante esta situación Sasuke y Hanzo intentan derrotar a Mirmo para ayudar a Yashichi. ", 
" En el mundo humano aparecen las criaturas del mundo muglox llamadas 'No sé lo que es'. Mirmo y Kaede buscan la explicación de este inusual fenómeno ", 
" Kaoru invita a sus amigos a ir a su villa en la montaña. Pero de pronto, cuando se quedan solos, comienzan a suceder cosas extrañas. ", 
" Kaede, Azumi, Kaoru y Setsu ganan dos entradas para un parque de atracciones. Como no podian decidir quien iría, Mirmo llamó a un amigo suyo el cual propuso jugar un juego de mesa muglox para decidir quien se quedará con las entradas. ", 
" La nave espacial Matsutake vuelve con una piedra de un planeta. Junto con ellos llegan dos extraterrestres que tienen el objetivo de recuperar la piedra. ", 
" Kinta va al mundo humano y desafia Mirmo para obtener la mano de Rirumu. ", 
" La pandilla Warumo intenta crear su nueva base sobre el campo de béisbol del equipo de las Hadas. Su capitana Diamante, acepta un reto de la pandilla Warumo para decidir quien se quedará con el campo. ", 
" Es el día de San Valentin por lo tanto Kaede y Azumi intentan regalarle chocolates a Setsu. ", 
" Las tres chicas del periódico muglox van al mundo de los humanos para hacer un reportaje sobre el príncipe Mirmo. Pero Murumo y Yashichi llenos de envidia, buscan ensuciar la imagen de Mirmo en las entrevistas. Esto provoca un grave malentendido. ", 
" Mirmo invita a sus amigos para jugar en la nieve, pero Gabin se enferma y permanece en la casas de Kaede para recuperarse. ", 
" Yashichi compra el cuaderno mágico de los muglox con el objetivo de atrapar a Mirmo. Pero, desafortunadamente Yashichi termina atrapado en el cuaderno y deben buscar una forma de escapar. ", 
" Kaoru está frustrado y piensa que es hora de que Hirai lo deje estar solo, sin embargo Kaoru es aun un niño mimado y miedoso que se espanta con solo las apariencias. ", 
" La Banda Warumo recibe un regalo de una misteriosa muglox. Con este regalo idean un plan para intentar derrotar a Mirmo. ", 
" Mirmo, Yashichi, Murumo y Rirumu junto con sus compañeros humanos (Kaede, Setsu, Kaoru y Azumi ) viajan al mundo muglox en busca de la perla del tiempo. ", 
" En este episodio, se muestra como los muglox obtuvieron los poderes mágicos. ", 
" Mirmo, Rirumu, Murumo y Yashichi buscan la forma de arreglar sus instrumentos rotos. ", 
" Llega una nueva estudiante. Hay un cierto misterio con ella ya que puede ver, escuchar y hablar con los muglox sin tener un compañero muglox. ", 
" Mizuki (el hermano de Azumi) comienza a seguir a Azumi porque sospecha que está poseída por espíritus. ", 
" Mirmo y sus compañeros de clases van de excursión a la fabrica de caramelos de Kaoru. ", 
" Akumi trasforma a Rirumu en una flor. Setsu y Kaede buscan una forma de volverla a la normalidad. ", 
" Kaede le explica a Mirmo que es el día de la madre, así que Mirmo y Murumo deciden regalarle algo a la Reina Saria. Pero cuando la están ayudando, Saria comienza a perder el color por culpa de una enfermedad de hipo continuo. La planta que deben encontrar se encuentra en el fondo del mar en el mundo de los humanos, así que deciden ir con un submarino a buscarla. ", 
" La pandilla Warumo comienzan a discutir sobre quien era el jefe de la banda. Esto provoca que los miembros tomen la decisión de volver a sus antiguas vidas y sueños. ", 
" Papii decide visitar a Murumo para declararle su amor, pero las cosas no salen como ella deseaba. ", 
" Saori va a dar un concierto en vivo de flauta y sus amigos estarán presentes para ir a verla. ", 
" En el mundo muglox aparecieron agujeros que conducen al mundo de los humanos. Ponta, un muglox muy tímido de la tribu Gurumi, cae en uno de ellos y Kinta al ver que desaparece va a pedir ayuda a Rirumu y a Mirmo. ", 
" Akumi con su magia crea una criatura a partir del moho que causa pánico en la ciudad. ", 
" Mirmo, Murumo, Rirumu y  Yashichi son observados por la tribu Gaia para evaluar su dominio sobre sus nuevos instrumentos. ", 
" Akumi y la pandilla Warumo atacan a Mirmo y a los demas muglox con unos insectos que absorben sus poderes. Mirmo y los demás deben buscar la forma de derrotar a estos insectos. ", 
" La pandilla Warumo compran unas galletas que cuando dos personas distintas se la comen cambian de cuerpo y las utilizan para intentar derrotar a Mirmo. ", 
" Al mundo de los humanos llega un extraño muglox llamado Miren, quien está enamorado de Akumi. Miren les cuenta a Mirmo y los demás la historia de Akumi antes de volverse malvada, ya que era su novia antes de que ella se enamorara de Daaku. Para reconquistarla, piensa que es necesario que Akumi lo vea vencer a Mirmo para no parecer debilucho. ", 
" Kaoru invita a sus amigos a otra villa playera de la familia Matsutake, pero antes de partir aparece una niña de 12 años que se llama Momo que quiere acompañarlos. Kaoru se opone porque piensa crear situaciones románticas con Kaede. ", 
" Kaede, Setsu y Azumi buscan a la compañera huana de una muglox llamada Sofuto. ", 
" Kaoru invita a Kaede, Setsu y Azumi a pasar un viaje en el nuevo zoológico de la familia matsutake. Este zoológico resulta ser todo un safari enorme. ", 
" Mimomo se toma unas vacaciones de la tienda y deja a cargo a Kumumo, la muglox de los dulces, la cual es muy despistada. ", 
" En este episodio llega de visita al mundo de los humanos Yamane, la prima de Yashichi. ", 
" El rey Marumo visita el mundo de los humano donde Akumi lo reta. Por accidente el rey toma chili rojo y se enferma de 'sinceramente', que es una enfermedad la cual hace que el muglox enfermo diga sinceramente antes de cada oración y se cura recordando el mejor recuerdo que ha tenido el muglox. ", 
" Vemos a todos los personajes principales entrar a un videojuego del tipo rol donde cada uno adopta el papel de un personaje del juego. ", 
" Vuelve el hermano de Azumi con su club amante de los ovnis. ", 
" Saori, es invitada a un programa musical para salir en televisión. La cadena telivisiva pertenece a la familia Matsutake, por este motivo todos van a presenciar el show de Saori. ", 
" La tribu Gaia llama a los Mirmo, Murumo, Rirumu y Yashichi para hacer frente a Daaku. ", 
" En este capítulo Mirmo obtine un poder sorprendente gracias a los poderes de la sesión mágica de 3 cambiando aun color dorado. ", 
" Se trata de un recuento desde el primer episodio hasta que mirmo se vuelve dorado.  ", 
" Haruna el muglox de las pegatinas visita al mundo humano en busca de pegatinas raras. La pandilla Warumo intenta obtener la colección de pegatinas de Haruna para provocar el caos. ", 
" Yamane pide ayuda a Mirmo y los demás para encontrar un compañero humano perfecto. ", 
" Saori sigue atemorizada por Daaku, y pretende dejar de tocar la flauta. ", 
" En el colegio muglox se celebra un evento en el mundo de los humanos. El evento consiste en una carrera en bicicletas en la cual Mirmo, Murumo, Rirumu y Yashichi participarán. ", 
" Kaede, Setsu, Azumi, Kaoru y Saori tienen una excursión de campo con el colegio. En esta excursión Akumi, Rato y la pandilla Warumo intentarán atacar a Kaede. ", 
" Rato y Akumi rocían un spray en Mirmo. Esto hace que la personalidad de Mirmo cambie completamente. Ahora Mirmo es todo lo contrario a lo que solía ser. Kaede y los demás piden ayuda a Kumumo para poder revertir el efecto del spray. ", 
" Kaede, Setsu, Azumi, Kaoru y Saori ayudan a un famoso escritor a terminar su obra. ", 
" Kaede, Azumi y Saori se unen accidentalmente al club de voley de Etsumi. Setsu se encarga de entrenarlas para que puedan participar en el torneo. ", 
" Alguien roba el reloj del mundo Muglox y empieza a ocasionar que en el mundo de los humanos se repitan las mismas horas una y otra vez, provocando que la nevada no termine. Mirmo y los demás son enviados ante la tribu Gaia para informarles lo sucedido y así poder regresar el reloj a donde pertenece antes que sea demasiado tarde. ", 
" El reloj del mundo Muglox se rompío y deben buscar una forma de repararlo. ", 
" Mirmo, y los demás interpretan un episodio donde se mezclan muchos cuentos de hadas, como cenicienta y la caperucita roja. ", 
" Luego de fracasar atacando a Mirumo la banda Warumo busca obtener nuevos subordinados para poder apoderse del mundo Muglox. ", 
" Rirumu decide tomar la clase de concina de dulces de Kumumo para poder hacerle los dulces más ricos a Mirmo. Akumi también toma la clase para poder hacer el dulce que le pidio Daaku. ", 
" Sasuke se enamora de una muglox e intenta acercarse para lograr obtener una cita con ella. ", 
" Al mundo humano llega la tienda de Kamomo y le roba todos los clientes a la tienda de Mimomo. Esto despierta la preocupación de Kumomo la cual le pide ayuda a Mirmo y a los demás para poder obtener más clientes. ", 
" El rey y la reina del mundo Muglox le arreglan un compromiso a Murumo con una muglox llamada Aroma. Esto pone muy trite a Papii, la cuál pide ayuda a Kaede y Rirumu para poder expresar sus sentimientos a Murumo antes de que sea muy tarde. ", 
" Los muglox tienen una excursión a las aguas termales. Mientras que los muglox se divierten, sus dueños los extrañan. ", 
" Kaoru invita a Kaede, Azumi, Saori, Setsu y el profesor Kiryu a su parque de diversiones. En el parque Kaede intenta que Saori tenga una cita con el profesor. ", 
" El profesor Kiryu le dice a Keade que esta enamorada de ella y los rumores en el colegio se expanden rapidamente. Kaede quiere solucionar este mal entendido. ", 
" El festival mundial de la música tiene un proposito oculto: La resurección de Daaku. ", 
" La maldad liberada en el concierto hizo posible la resurección de Daaku. ", 
" Durante la pelea contra Daaku Mirmo, Yashichi, Murumo y Rirumu hacen una sesión mágica de cuatro (la cual jamás se había visto), este hechizo cae sobre la flauta de Saori, quien toca una melodía que afecta directamente a Daaku. ", 
" Luego de la pelea contra Daaku la tribu Gaia tuvo que cortar el enlace que había entre el mundo muglox y el humano. Esto provocó que os humanos olvidaron todo recuerdo referente a los muglox. Mirmo y los demás buscarán una solución para poder abrir el enlace que une los humanos y los muglox. ", 
" En este episodio al despertar Kaede se encuentra con un robot con forma de pulpo llamado Takosu durmiendo en la cama de Mirmo, Takosu les dice que ha llegado al mundo de los humanos en busca de 7 cristales que son capaces de conceder cualquier deseo. Al final Kaede y Mirmo aceptan ayudar a buscar los cristales.  ", 
" Rirumu pierde los rizos de su cabello y se pone muy triste. Ante esta situación Mirmo trae a un especialista para poder ayudar a Rirumu. ", 
" Setsu detesta los pimietos y Kaede se propone hacer todo para que a Setsu le gusten. ", 
" Murumo intenta varias veces que Kaoru juegue con el pero él se distrae Murumo hace que vuele el tesoro de Kaoru. ", 
" En la casa de Kaouru encuentran el primer cristal. Pero esta dentro de una roca, y no pueden extraerlo. ", 
" Yashichi se enoja con Sasuke y Hanzo porque no pueden realizar la tecnica que les enseño. ", 
" La pandilla Warumo piensa en un plan para derrotar a mirmo, pero terminan secuestrando a Takosu. ", 
" Anna se da cuenta de que cada vez que hablaba con Bike se irritaba. Esto se debía a que se ponía nerviosa porque estaba enamorada de él. Por este motivo le pide ayuda a Mirmo y sus amigos. ", 
" Takosu empieza a creer que Kaede y Mirmo no estan tan interesados en buscar los cristales. Por eso se va de la casa y empieza a buscar otra persona para buscar los cristales. Le da teléfonos para buscar los cristales a Setsu, Azumi y Kaoru. ", 
" Mirmo y los demás se encuentran entrenando para las muglolimpiadas que se realizan en el mundo de los muglox. En esta ocasión el ganador se llevara una dotación de caramelos por un mes. ", 
" Mirmo reemplaza al muglox Atene, el cual esta lastimado, para que gane una medalla de oro y poner orgullosa a su compañera humana. ", 
" Mirmo resulta herido participando en las muglolimpiadas, por lo que Atene quiere participar él mismo en la última competencia no importando su condición para así poder animar a su compañera. ", 
" Aparece un robot parecido a takosu pero en forma de calamar llamado ikasu. ", 
" Kaede nota como Etsumi se la pasa peleando con un compañero de clase por lo que llega a la conclusión que a Etsumi le gusta e intenta ayudarla. ", 
" Es el día en el que el dentista va a a enseñar a los niños a lavarse los dientes. Pero la pandilla wuarumo llega y les dice que lavarse los dientes es aburrido. Y se los llevan al mundo de los humanos. ", 
" La abuela de Mirmo, Baramo, viene al mundo de los humanos a llevarse a Mirmo y Murumo ya que cree que los seres humanos no son buenos, entonces Mirmo y los demás tratan de que Baramo cambie de opinión y los deje seguir entrenando en el mundo de los humanos. ", 
" En este capítulo Mirmo y los demás van a Alemania a visitar a Saori y también a ver uno de sus conciertos. ", 
" Akumi y Saori se encuentran con la compañera muglox de Lorelei y ella les cuenta como fue que se creó su leyenda. Además, ayuda a que Akumi y Saori vuelvan a ser amigas. ", 
" Mabo se da cuenta de que al no ser nada increible avergüenza a su hermana mayor. Así que trata de hacer todo lo posible para que su hermana no sienta vergüenza de él. ", 
" Kaede y los demás están pensando dónde ir las vacaciones Setsu propone ir a un viaje al espacio , ya en el espacio ven dos naves una en forma de piscina y otra en forma de sandía. ", 
" Kameri, la mejor amiga de Papii le pide ayuda para poder hacer sabrosas sus chucherias agridulces. Para eso Papii y Murumo tienen que tener una cita romántica. ", 
" Azumi les miente a todos de que se va a cambiar de colegio para poder tener una cita con Setsu. ", 
" Momo arregla una cita entre Hirai y Hosino, pero al final no todo sale como ella esperaba. ", 
" La pandilla warumo decide cambiarse al bien creando una nueva banda llamada 'La banda Yoimo' con el fin de hacer algún cambio pero en sus intentos mal interpretan lo que es ser bueno y todo resulta mal. ", 
" Aparecen unos conejos los cuales intentan robar los cristales recolectados por Kaoru, Asumi y Setsu. ", 
" Kaede esta preocupada porque Takosu no ha regresado después de irse tras los conejos. Setsu encuentra a Takosu destrozado. Entonces, Mirmo, Rirumu y Murumo buscan ayuda para repararlo. ", 
" Azumi se molesta porque Kaede esta todo el tiempo muy cerca de Setsu. Entonces, se le ocurre hacer a Kaede popular con los chicos para que no se pueda acercar a Setsu. ", 
" El salón de clases del colegio Muglox tiene mucho desorden por lo que Algebro decide ponerse estricto con las reglas ocasionando que sus compañeros se molesten con él y deciden poner a Mirmo como delegado de clase. ", 
" Momo compra en la tienda de Mimomo un producto para hacerla crecer y así poder gustarle, pero las cosas no salen como ella tenia planeado. ", 
" En este capítulo Mirmo, Yashichi, Rirumu, Murumo, Hanzo y Sasuke no puden decidir que serie ver. Por eso, usan magia para unir sus tres series favoritas en un solo video. ", 
" Es el día en el que los muglox dan un día de descanso a los instrumentos pero la pandilla Warumo decide no dar sus instrumentos y ser los únicos muglox con instrumentos. ", 
" Sera , Seri 'los mellizos miedosos' van al mundo de los humanos a buscar la lágrima del angel para salvar al bosque Gurumi. ", 
" Papán un famoso ladron del mundo Muglox decide robar la corona de la familia de Rirumu. ", 
" El rey Marumo decide ponerle una tutora a Mirmo para que aprenda modales. ", 
" Mirmo debe suplantar al rey Marumo en el desfile Muglox que se realiza cada año. ", 
" Mirumo y sus amigos realizan una parodia sobre la leyenda del viaje hacia el oeste protagonizada por el rey mono Sun Wukong. ", 
" Takosu esta muy raro ultimamente y por eso Mirmo y los demás intentan saber que es lo que esta planeando. ", 
" Sasuke planea secuestrar a Yamane para que Yashichi la salve y demostrarle a Nezumi que no es un ninja inútil. ", 
" Murumo se encarga de cuidar un bebe pero todo se sale de control rápidamente. ", 
" Mirmo esta en busqueda de un nuevo chocolate pero al no encontrarlo ofrece su alma a un Muglox a cambio de un nuevo chocolate. ", 
" El club de misterios del hermano de Azumi intenta demostrar la existencia de la relación que tiene su hermana con los espíritus. ", 
" Primero de la banda Warumo se enamora y piensa en abondanar la banda para empezar una nueva vida con su prometida. ", 
" Kaede y Mirumo van en busca del último cristal, pero Takosu tiene un plan para evitar que encuentren el útimo cristal. ", 
" Al encontrar todos los cristales se presentaron 7 pruebas que deben pasar para poder obtener los poderes de los cristales. ", 
" Al completar las 7 pruebas los cristales se fusionaron y una persona misteriosa aparece. Takosu intenta robar el cristal para poder cumplir su deseo. ", 
" Mirmo es capturado y obligado a usar el cristal para destruir el reino de Cristal. ", 
" Kaede y los demas buscan un plan para poder liberar a Mirmo del control de la reina y poder salvar el reino de Cristal. ", 
" Se acaba el semestre y planean hacer una fiesta por el último día. Mirumo obliga a Kaede a buscar choconuebes por todos lados. ", 
" Al empezar un nuevo semestre Kaede ya no comparte la misma clase con Setsu lo que hace que Kaede se sienta triste. ", 
" Papii le pide ayuda a Kaede para encontrar un compañero humano y asi poder estar cerca de Murumo. ", 
" Murumo y Papii realizan una apuesta y el que pierda deberá regresar al mundo Muglox. ", 
" Panta es un Muglox fantasma con el cual Mirmo deberá jugar hasta que sea feliz y pueda ir a descansar al cielo de los Muglox. ", 
" Azumi idea un plan para que Koichi y Kaede se enamoren y así ella pueda quedarse con Setsu. ", 
" Rirumu Mirumo y Murumo intentan animar a Keade la cual se encuentra triste y para eso deciden que Kaede y Setsu se encuentren para poder hablar. ", 
" Es la semana del amor y la leyenda dice que los Muglox que se besan durante esa semana estarán juntos toda la vida así que Rirumu y Papii deciden conquistar a Mirumo y Murumo. ", 
" Setsu se reecuentra con su amiga de la infancia y su primer amor, esto preocupa a Kaede. ", 
" Panta se aburre de estar en el cielo y decide buscar un compañero para poder vivir en el mundo humano. ", 
" Kaoru intenta varios planes para hacer que Kaede se enamore de el y se olvide de Setsu. ", 
" Los planes de Kaoru se descontrolan y Mirumo debe buscar una solución a estos problemas. ", 
" La Banda Warumo descubren que a Mirumo le aterrorizan los fantasmas así que deciden convertirse en fantasmas para derrotarlo de una vez por todas. ", 
" Haruka quiere dibujar un manga para mandarlo a una revista y pide la opinión de Kaede y Setsu. ", 
" Kaede y Azumi descubren que a Haruka tambien le gusta Setsu y deciden competir para ver quién de las 3 sale con Setsu. ", 
" Kaede amenazada por Papii decide salir con Koichi si el gana la competencia de natación. ", 
" Kaoru invita a Kaede, Koichi, Azumi y Setsu a su isla privada. Setsu se pierde y deciden ir a buscarlo. ", 
" Koichi intenta hacer todo lo posible para animar a Kaede. ", 
" Setsu y Haruka comenzaron a salir y Kaede evita que Azumi se interponga en su relación. ", 
" Panta se dirige a una puerta misteriosa para pedir un deseo y devolverle la felicidad a Haruka. ", 
" Setsu reflexiona sobre sus sentimientos mientras que Kaede y Azumi realizan una última competencia para decidir quien debe salir con Setsu. ", 
" Kaede cumple el deseo que le pidio a Mirumo y debido a esto Mirumo debe volver al mundo Muglox ya que su entreamiento en le mundo de los humanos concluyó. ", 
" Kaede busca recuperar a Mirumo que se encuentra desaparecido para eso busca ayuda de la tribu Gaia. " ];

var fechas = [ " 6 de abril de 2002 ",  " 13 de abril de 2002 ",  " 20 de abril de 2002 ",  " 27 de abril de 2002 ",  " 4 de mayo de 2002 ",  " 11 de mayo de 2002 ",  " 18 de mayo de 2002 ",  " 25 de mayo de 2002 ",  " 1 de junio de 2002 ",  " 8 de junio de 2002 ",  " 15 de junio de 2002 ",  " 22 de junio de 2002 ",  " 29 de junio de 2002 ",  " 6 de julio de 2002 ",  " 13 de julio de 2002 ",  " 20 de julio de 2002 ",  " 27 de julio de 2002 ",  " 3 de agosto de 2002 ",  " 10 de agosto de 2002 ",  " 17 de agosto de 2002 ",  " 24 de agosto de 2002 ",  " 31 de agosto de 2002 ",  " 7 de septiembre de 2002 ",  " 14 de septiembre de 2002 ",  " 21 de septiembre de 2002 ",  " 28 de septiembre de 2002 ",  " 5 de octubre de 2002 ",  " 12 de octubre de 2002 ",  " 19 de octubre de 2002 ",  " 26 de octubre de 2002 ",  " 2 de noviembre de 2002 ",  " 9 de noviembre de 2002 ",  " 16 de noviembre de 2002 ",  " 23 de noviembre de 2002 ",  " 30 de noviembre de 2002 ",  " 7 de diciembre de 2002 ",  " 14 de diciembre de 2002 ",  " 21 de diciembre de 2002 ",  " 28 de diciembre de 2002 ",  " 4 de enero de 2003 ",  " 11 de enero de 2003 ",  " 18 de enero de 2003 ",  " 25 de enero de 2003 ",  " 1 de febrero de 2003 ",  " 8 de febrero de 2003 ",  " 15 de febrero de 2003 ",  " 22 de febrero de 2003 ",  " 1 de marzo de 2003 ",  " 8 de marzo de 2003 ",  " 15 de marzo de 2003 ",  " 22 de marzo de 2003 ",  " 29 de marzo de 2003 ",  " 5 de abril de 2003 ",  " 12 de abril de 2003 ",  " 19 de abril de 2003 ",  " 26 de abril de 2003 ",  " 3 de mayo de 2003 ",  " 10 de mayo de 2003 ",  " 17 de mayo de 2003 ",  " 24 de mayo de 2003 ",  " 31 de mayo de 2003 ",  " 7 de junio de 2003 ",  " 14 de junio de 2003 ",  " 21 de junio de 2003 ",  " 28 de junio de 2003 ",  " 5 de julio de 2003 ",  " 12 de julio de 2003 ",  " 19 de julio de 2003 ",  " 26 de julio de 2003 ",  " 2 de agosto de 2003 ",  " 9 de agosto de 2003 ",  " 16 de agosto de 2003 ",  " 23 de agosto de 2003 ",  " 30 de agosto de 2003 ",  " 6 de septiembre de 2003 ",  " 13 de septiembre de 2003 ",  " 20 de septiembre de 2003 ",  " 27 de septiembre de 2003 ",  " 4 de octubre de 2003 ",  " 11 de octubre de 2003 ",  " 18 de octubre de 2003 ",  " 25 de octubre de 2003 ",  " 1 de noviembre de 2003 ",  " 8 de noviembre de 2003 ",  " 15 de noviembre de 2003 ",  " 22 de noviembre de 2003 ",  " 29 de noviembre de 2003 ",  " 6 de diciembre de 2003 ",  " 13 de diciembre de 2003 ",  " 20 de diciembre de 2003 ",  " 27 de diciembre de 2003 ",  " 3 de enero de 2004 ",  " 10 de enero de 2004 ",  " 17 de enero de 2004 ",  " 24 de enero de 2004 ",  " 31 de enero de 2004 ",  " 7 de febrero de 2004 ",  " 14 de febrero de 2004 ",  " 21 de febrero de 2004 ",  " 28 de febrero de 2004 ",  " 6 de marzo de 2004 ",  " 13 de marzo de 2004 ",  " 20 de marzo de 2004 ",  " 27 de marzo de 2004 ",  " 3 de abril de 2004 ",  " 10 de abril de 2004 ",  " 17 de abril de 2004 ",  " 24 de abril de 2004 ",  " 1 de mayo de 2004 ",  " 8 de mayo de 2004 ",  " 15 de mayo de 2004 ",  " 22 de mayo de 2004 ",  " 29 de mayo de 2004 ",  " 5 de junio de 2004 ",  " 12 de junio de 2004 ",  " 19 de junio de 2004 ",  " 26 de junio de 2004 ",  " 3 de julio de 2004 ",  " 10 de julio de 2004 ",  " 17 de julio de 2004 ",  " 24 de julio de 2004 ",  " 31 de julio de 2004 ",  " 7 de agosto de 2004 ",  " 14 de agosto de 2004 ",  " 21 de agosto de 2004 ",  " 28 de agosto de 2004 ",  " 4 de septiembre de 2004 ",  " 11 de septiembre de 2004 ",  " 18 de septiembre de 2004 ",  " 25 de septiembre de 2004 ",  " 2 de octubre de 2004 ",  " 9 de octubre de 2004 ",  " 16 de octubre de 2004 ",  " 23 de octubre de 2004 ",  " 30 de octubre de 2004 ",  " 6 de noviembre de 2004 ",  " 13 de noviembre de 2004 ",  " 20 de noviembre de 2004 ",  " 27 de noviembre de 2004 ",  " 4 de diciembre de 2004 ",  " 11 de diciembre de 2004 ",  " 18 de diciembre de 2004 ",  " 25 de diciembre de 2004 ",  " 1 de enero de 2005 ",  " 8 de enero de 2005 ",  " 15 de enero de 2005 ",  " 22 de enero de 2005 ",  " 29 de enero de 2005 ",  " 5 de febrero de 2005 ",  " 12 de febrero de 2005 ",  " 19 de febrero de 2005 ",  " 26 de febrero de 2005 ",  " 5 de marzo de 2005 ",  " 12 de marzo de 2005 ",  " 19 de marzo de 2005 ",  " 26 de marzo de 2005 ",  " 2 de abril de 2005 ",  " 9 de abril de 2005 ",  " 16 de abril de 2005 ",  " 23 de abril de 2005 ",  " 30 de abril de 2005 ",  " 7 de mayo de 2005 ",  " 14 de mayo de 2005 ",  " 21 de mayo de 2005 ",  " 28 de mayo de 2005 ",  " 4 de junio de 2005 ",  " 11 de junio de 2005 ",  " 18 de junio de 2005 ",  " 25 de junio de 2005 ",  " 2 de julio de 2005 ",  " 9 de julio de 2005 ",  " 16 de julio de 2005 "];  

var titulosTemps = ["Mirmo Zibang!", "Mirmo Zibang! Dorado","Mirmo Zibang! Maravilloso", "Mirmo Zibang! Encantador"];

var descsTemps = ["Kaede Minami es una estudiante de octavo grado, es alegre y llena de energía, pero tiene problemas para acercarse al chico que le gusta. Pero, un día conoce a Mirmo el muglox del amor y su días cambian para siempre, porque Mirmo es capaz de utilizar la magia para hacer cualquier deseo realidad, ante esta oportunidad Kaede buscará que Mirmo le cumpla el deseo de estar con su amado. Sin embargo, esta va a ser una misión difícil ya que Mirmo no le gusta complacer los deseos de los humanos sin que hagan ningún esfuerzo.",
"El mundo humano y el mundo de los muglox han sellado con éxito a Daaku, cerrando todos los agujeros y recuperando la paz. Pero los Muglox están nuevamente atrapados en varios eventos extraños. ¡Además, Daaku, que había sido sellado, se escabulle en un lugar y se esconde ...",
"Un día, un misterioso 'pulpo robot' aparece frente a Kaede y Mirumo. El robot, denominado 'Takosu', llegó al mundo humano en busca de los 'Siete Cristales Legendarios' que podrían cumplir cualquier deseo. Empujados por el entusiasmo de Takosu, ¡Kaede y Mirmo deciden encontrar los cristales juntos!",
"Kaede, que avanzó al tercer grado, desea seguir estando en la misma clase que Yuuki. Pero esto no resultó así y lo extraña. De repente, Kaede recibe una presentación de un chico llamado Koichi Sumita que está en su clase..."];

var urlImgsTemps = ["https://1.bp.blogspot.com/-1vj2y-AUaQk/Xl2NdF5c7VI/AAAAAAAAATg/ohCVyDyG_FgyJuWd6hm5gakfIdw7z_ElwCNcBGAsYHQ/s1600/1.png",
"https://1.bp.blogspot.com/-GGKk156ai7o/Xl2NdZkHZKI/AAAAAAAAATo/IAhrvEfFOhEDx84kInrO-WFJLGYuQH8GwCNcBGAsYHQ/s1600/2.png",
"https://1.bp.blogspot.com/-A-NnimyDqOM/Xl2NdP1tf7I/AAAAAAAAATk/lQQYXHuX1ZoSD5DQ_yMDnKPCr4unxBOuwCNcBGAsYHQ/s1600/3.png",
"https://1.bp.blogspot.com/-6vXxP_gFONs/Xl2NeU5K1XI/AAAAAAAAATs/If1-H3_xTlAGFYXA2KsfcdYfQhFxfnM0wCNcBGAsYHQ/s1600/4.png"];

//Tmp one and two
var vl = [["yyr50he661ge7p4","QXdkTCtOUFg1TEdKZkoza0JGWStFQT09"], //1
["ppnxkcm55yzy4pd","R1NNQXVKalg0TVUyWHhTR0ZDb0RGdz09"], 
["q1nx2aekk3r3mdm","MU9adm5xWWNvTjVhc0FleFdFVGtHUT09"], 
["6-njwi0xxw6lr50","dlhYakN4SmlHYzFnYThNLzNMbDVJZz09"], 
["l76x0tnzzqwkrq4","VTE4OWxTdFI3M3V0dU44V0s1aXJLQT09"],
["ee4nwi-q2gyz06n","dzlycXR1NTRERFNJNUZCU2hqSE1BZz09"],
["3-1j8imllxwe23k", "NHdQbG5pQ1RYVENiZVgvWXp6V3J3UT09"],
["yyr50he663wzr8p", "VENvUFo1ekF5YUpyRG95dlZtMis0UT09"],
["wln57in70kqr420", "V0NCTStDSW5KV2Y5cVZiQTdEZGlPZz09"],
["zxp5rcj2x3e41rn", "Mm02ckZjSUxGdmZCNko4RXRQY2RGQT09"], //10
["4-nj8izww2l5qxg","Y2QzNXU3eEF3d3QxQm1DdklIcUY1dz09"],
["6-njwi08nqj24wl","TUJFNWRlWkJuMTdPM092UURETS9Odz09"],
["yyr50he663m1rk2", "cE9Ra3RsYkpQTWpYbnA3aEJHT3dzZz09"],
["mdznrh5nn-3ldz7", "eWc2bC9UTFFQaHEydDgvdmR6TjJGQT09"],
["mdznrh53y-wym4x","a2FvSDlRalRHWkt0QWVYWTN6T3lwZz09"],
["j43x7idq4wdjwk3","ZkNMRkRsYnlXWWNvSEV3L2dNTFp2Zz09"],
["xex5di53eyk1572","aVVEMGJiNzVsOGpsY0RwZzRKdFg3UT09"],
["4-nj8izyk670k-n", "R0MxdHFzM3VVTFRMcDNGNFJJUW5zQT09"],
["5-nj8idnm-04m8x", "citWNjhMUHV4cEFrWUJTWXVDcDIxdz09"],
["k64-di3zzg41kr8","dFF3RTkyU0NoaFpNQkJkUFpYLzBidz09"], //20
["wln57inzl-q6e54", "QmZNODFYaUxVcHhBUXEwYUpZakFsZz09"],
["dl3w-ixe-jxgzdl", "bU1DSFJxeER4QnBGWVFHTlZVaUN2UT09"],
["-y6jehpkr1g32--", "YkZLcFM5QllyVWJId2FNL1hESkM3QT09"],
["yyr50he7g--d143", "QzR0WWxSRm9KbHRVQk1yUlJSL2RSdz09"],
["5-nj8idzmwmkym4", "cU1ubWRlcjlpYlBtQXF6aTFxWlNYQT09"],
["n02xpc2102l313z", "dzZ5RUUxb3p1ZGl4TW5nd3ZuTk9aQT09"],
["mdznrh5mjjdr6d-", "K05FVjNSeWlBUXNmaFpWdEVlRllLUT09"],
["zxp5rcjdzz0gkmy", "V0JlS09kM3RhMzF3eENGeEg1aDFRdz09"],
["rknxmsezq5w3k44", "YjMrTVhiRjd1Wnc0M3JVVGFGSXFyQT09"],
["zxp5rcjdz0j7yj4", "VVRmQnVXaXNXdXJhTU95MHYrU09Sdz09"], //30
["n02xpc2r0yy7xmd", "UmRrSUtnbDNzTEkxQzZ0QTBMVWdsUT09"],
["0-6j8ilq6gl74rd", "ZlZpQXF1QXh1VU9mREZxTWNDcXdtQT09"],
["yyr50he3r24g6wq", "UVFERUNhWGx4bTBkZjY2OEEraWJPdz09"],
["1-rjeij2y8q-nnn", "Zy9yUGhmbGFzUUN0NUtjM0l3U0xJdz09"],
["1-rjeij2yx1w222", "NEtiT1UrZWdXV3FYN0pQQ2QyK2R2UT09"],
["zxp5rcjd0-50ml6", "Tkd6SnFLNElRWDJtQmZiZy9hK0g5dz09"],
["2-2jei21zyrg4r7", "KzArTHhuZU9kUXJ0d1NRS1JaQzFhdz09"],
["zxp5rcjgm31d37p", "ckI0UDhsOFVYYkpzTHdQRW53dE1iUT09"],
["xex5di58zrny5xk", "V3ZzUCsvZ01NelMwdmp5dm1mUEk0QT09"],
["n02xpc2jl7l18mr", "U28wK1pSNy9ZZyt5a2pqM1BZVXM1dz09"], //40
["rknxmseg1k5zq2l", "am5Yc2pBcXVJay9SWTE3ZXR2Qkd2QT09"],
["7-wj8igljge8lgm", "TFRUM01jdkt6Mi9kMFZjaThFVXFyUT09"],
["dl3w-ixrm-1e7ky", "NTczaXVPN0QweW1LZkErTTM5clBvQT09"],
["k64-di3gymp6zgp","Y0haOGFjUDc3Y0RZTk55UjZkeC9Cdz09"],
["3-1j8img5xwx4p2", "cTFESmZJY2JwT1JRa2ZLaU81QlNZZz09"],
["5-nj8idz17wd4p0", "Nys0NGtJTFpISEMySVV6RlFIemIvUT09"],
["-y6jehpgn0yqrlk", "Y3J0akdUTVlrMHlNdVdGaEJ6V3FXQT09"], 
["7-wj8ig308z0l1z", "ZCtCNG5zeXVQKy9MLzJDZUl3NCtVZz09"], 
["q1nx2aejrl72r-3", "WU9rb2hWQXl4RmhwT0FyRUoyQ3ltUT09"],
["n02xpc2pd073636", "K0s3aWlVV0tSWW5tVTc2QmxwNXFJQT09"], //50
["mdznrh56yjlnn2j", "NFJGRW9ndkZkdEpPNzlici9FSWJaUT09"], 
["k64-di35n6kee8k", "bkxkMkc0b2tCb3pJZ1NKb1dzVm5vQT09"], 
["gx1n3c-ej84kl-2", "aGh1bGgvdWRSMDUycElZSGtqaURXdz09"],
["rknxmse82n-l4k7", "dzFWeWVCN0p3T2k1cThZV0xsYThVQT09"],
["1-rjeijk61e6253", "dC9zbnNpS0phK2NjWG9HVlM1cDBqQT09"], 
["rknxmse8w3ykx72", "V3kzazdzNm43SGZ1MTFna1dXOVArdz09"], 
["k64-di35zm0k1je", "UUJpSHpyVHNWL1lEdExkblBRMHc3Zz09"], 
["5-nj8ideqkm2kl3", "bWJHMkxRc2RjSlFwNHlBdDB5TXhXZz09"], 
["l76x0tne23-1lge", "YkZHM1dPcXBIVWs1NTRWbVdTQzhGZz09"],
["l76x0tne2348qj4", "cTM5WUNMa3pLZS8rT09Nd2J0dFJjZz09"], //60
["1-rjeijkn607xl1", "f"], 
["l76x0tnezykxjyq", "f"],
["rknxmse8m41m7m6", "f"],
["2-2jei23pjkmrl-", "f"], 
["l76x0tnedpe02dy", "f"],
["wln57ind-lzp0z7", "f"],
["6-njwi03erz3xqn", "f"], 
["ee4nwi-x135ylgk", "f"], 
["zxp5rcj1jez0kdj ", "f"],
["mdznrh56522460w", "f"], //70 
["-y6jehpypw-1063", "f"], ["ee4nwi-x8ymen85", "f"], ["rknxmse8y17mpnl", "f"], ["5-nj8ide48-kgd7", "f"],
["wln57ind20j-xdr", "f"], ["q1nx2ae8nqzln34", "f"], ["6-njwi038pp-w17", "f"], ["3-1j8im3gw23m13","f"], 
["dl3w-ix7el26wjm","f"], ["q1nx2ae8jjp1dd2","f"], ["3-1j8im3gg4g2p-","f"],["0-6j8il7--875ez","f"],["wln57indzzjnynp","f"],
["j43x7id233lenym","f"],["wln57indzd8674y","f"],["zxp5rcj1d1668wj","f"],["7-wj8igz31n368q","f"],["yyr50hennwr-186","f"],
["-y6jehpyyw57rlg","f"],["ee4nwi-xxpgk-q1","f"],["4-nj8iznn188wkm","f"], ["xex5di5kk6lzzl0","f"],["k64-di355085e43","f"],
["5-nj8ide38my3nl","f"],["l76x0tnem23dm1w","f"],["yyr50henyz712rk","f"],["gx1n3c-e7wp60yk","f"],["-y6jehpy36jrwjz","f"],
["q1nx2ae8ln7lkm7","f"],["8-l38i8yd0g-lyl","f"],["6-njwi0378pzg-z","f"],["zxp5rcj1zdny620","f"] 
];

//Objeto servidor
function Servidor(nombre, host)
{
  this.nombre = nombre;
  this.host = host;
}

//Objeto video
function Video(url,servidor,idioma)
{
  this.url = url;
  this.servidor = servidor;
  this.idioma = idioma;
  
  this.getUrlCompleta = function()
  {
    return this.servidor.host + this.url;
  }
}

// Objeto episodio
function Episodio(nro, titulo, fecha, descripcion, temporada) 
{
    this.temporada = temporada;
    this.nro = nro;
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.videos = [];
    
    this.addVideo = function(video) 
    {
      this.videos.push(video);
    }

    this.getUrlThumbnail = function() 
    {
      var URLHost = "https://gitlab.com";
      var URLRoot = "/a94jfmcl3V3js4na5lvslfuj38I/mv4/-/raw/master";
      var URLCarpeta = "/Anime/0" + temporada + "/";
      var URLArchivo =  getFormatoCapitulo(this.nro) + ".png" ;
      var URLThumbnail = URLHost + URLRoot + URLCarpeta + URLArchivo;
      return URLThumbnail;
    }

    function getFormatoCapitulo(nro) 
    {
      if (nro > 0 && nro < 10)
        return "00" + nro;
      else if (nro > 9 && nro < 100)
        return "0" + nro;
      else
        return nro;
    }
    
}

function getUrlQueryParams() {
  var queryParams = {}, param;
  var params = window.location.search.substring(1).split("&");
  for(var i = 0; i < params.length; i++)
  {
      param = params[i].split('=');
      queryParams[param[0]]=param[1];
  }
  return params;
}   
  