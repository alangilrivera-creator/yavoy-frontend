// =============================================
//   YAVOY – SCRIPT.JS (VERSIÓN MEJORADA v2)
// =============================================

const restaurantes = [
  { id:1, nombre:"Pizza Hut", tipo:"pizza", logo:"img/logos/pizzahut-removebg-preview.png", rating:4.5, tiempo:"20-30 min", distancia:"1.2 km", oferta:"15% OFF", descuento:15, direccion:"Blvd. de los Héroes, San Salvador, El Salvador", mapsQuery:"Pizza+Hut+San+Salvador+El+Salvador", menu:[{id:"p1_1",nombre:"Pizza Personal Peperoni",precio:5.99,emoji:"🍕",desc:"Masa original, extra queso"},{id:"p1_2",nombre:"Pizza Mediana BBQ",precio:9.99,emoji:"🍕",desc:"Pollo BBQ, cebolla, jalapeño"},{id:"p1_3",nombre:"Stuffed Crust Mediana",precio:12.99,emoji:"🍕",desc:"Orilla rellena de queso mozzarella"},{id:"p1_4",nombre:"Alitas Buffalo x8",precio:8.99,emoji:"🍗",desc:"Alitas en salsa Buffalo picante"},{id:"p1_5",nombre:"Pan de Ajo con Queso",precio:3.99,emoji:"🍞",desc:"Pan tostado, mantequilla de ajo y queso"}]},
  { id:2, nombre:"Pollo Campero", tipo:"pollo", logo:"img/logos/Pollocampero-removebg-preview.png", rating:4.7, tiempo:"15-25 min", distancia:"0.8 km", oferta:null, descuento:0, direccion:"Metrocentro, San Salvador, El Salvador", mapsQuery:"Pollo+Campero+San+Salvador+El+Salvador", menu:[{id:"p2_1",nombre:"Combo Familiar x8",precio:18.99,emoji:"🍗",desc:"8 piezas + papas + bebidas"},{id:"p2_2",nombre:"Pollo Frito Crujiente",precio:3.25,emoji:"🍗",desc:"Pieza de pollo con receta original Campero"},{id:"p2_3",nombre:"Alitas BBQ x10",precio:7.99,emoji:"🍗",desc:"Con salsa BBQ especial"},{id:"p2_4",nombre:"Sandwich Campero",precio:4.25,emoji:"🥪",desc:"Pollo crujiente + vegetales + mayonesa"},{id:"p2_5",nombre:"Yuca Frita con Chicharrón",precio:5.50,emoji:"🍟",desc:"Yuca dorada con chicharrón y curtido"}]},
  { id:3, nombre:"Burger King", tipo:"burger", logo:"img/logos/BurgerKing-removebg-preview.png", rating:4.3, tiempo:"15-25 min", distancia:"1.5 km", oferta:"2x1 Whopper", descuento:50, direccion:"Gran Vía, Santa Tecla, La Libertad, El Salvador", mapsQuery:"Burger+King+San+Salvador+El+Salvador", menu:[{id:"p3_1",nombre:"Whopper Clásico",precio:5.50,emoji:"🍔",desc:"Carne a la parrilla, vegetales frescos"},{id:"p3_2",nombre:"Double Whopper con Queso",precio:7.50,emoji:"🍔",desc:"Doble carne, extra queso fundido"},{id:"p3_3",nombre:"King Nuggets x9",precio:4.99,emoji:"🍗",desc:"Con salsa a elegir"},{id:"p3_4",nombre:"Aros de Cebolla",precio:2.50,emoji:"🧅",desc:"Crujientes, recién fritos"},{id:"p3_5",nombre:"Combo Whopper",precio:8.99,emoji:"🍔",desc:"Whopper + papas medianas + bebida"}]},
  { id:4, nombre:"Don Pollo", tipo:"pollo", logo:"img/logos/DonPollo-removebg-preview.png", rating:4.6, tiempo:"25-35 min", distancia:"2.1 km", oferta:null, descuento:0, direccion:"Col. Escalón, San Salvador, El Salvador", mapsQuery:"Don+Pollo+San+Salvador+El+Salvador", menu:[{id:"p4_1",nombre:"Pollo Entero Asado",precio:12.99,emoji:"🍗",desc:"Horneado con especias salvadoreñas"},{id:"p4_2",nombre:"Pechuga + Tortillas",precio:4.99,emoji:"🍖",desc:"Con crema, frijoles refritos"},{id:"p4_3",nombre:"Combo Picnic x12",precio:24.99,emoji:"🍗",desc:"Ideal para familia"},{id:"p4_4",nombre:"Sopa de Gallina",precio:5.50,emoji:"🍜",desc:"Receta tradicional"},{id:"p4_5",nombre:"Alitas de Pollo x8",precio:7.99,emoji:"🍗",desc:"Con salsa BBQ o picante, al horno"}]},
  { id:5, nombre:"Papa Johns", tipo:"pizza", logo:"img/logos/PapaJohns-removebg-preview.png", rating:4.2, tiempo:"20-30 min", distancia:"1.8 km", oferta:"Papas gratis", descuento:20, direccion:"Plaza Merliot, Santa Tecla, El Salvador", mapsQuery:"Papa+Johns+El+Salvador", menu:[{id:"p5_1",nombre:"Pizza Grande Clásica",precio:12.99,emoji:"🍕",desc:"Salsa de tomate, mozzarella extra"},{id:"p5_2",nombre:"Pizza BBQ Chicken",precio:13.99,emoji:"🍕",desc:"Pollo BBQ, pimiento, cebolla roja"},{id:"p5_3",nombre:"Cinnapie (Postre)",precio:5.99,emoji:"🍥",desc:"Pan de canela con glaseado dulce"},{id:"p5_4",nombre:"Pan de Ajo",precio:3.50,emoji:"🍞",desc:"Con mantequilla y ajo tostado"},{id:"p5_5",nombre:"Combo Pizza Mediana",precio:10.99,emoji:"🍕",desc:"Pizza mediana + bebida 2 lts"}]},
  { id:6, nombre:"China Wok", tipo:"china", logo:"img/logos/ChinaWork-removebg-preview.png", rating:4.4, tiempo:"30-40 min", distancia:"2.5 km", oferta:null, descuento:0, direccion:"Col. San Benito, San Salvador, El Salvador", mapsQuery:"China+Wok+San+Salvador+El+Salvador", menu:[{id:"p6_1",nombre:"Chow Mein Especial",precio:6.99,emoji:"🍜",desc:"Fideos, vegetales, pollo salteado"},{id:"p6_2",nombre:"Arroz Frito Cantonés",precio:5.99,emoji:"🍚",desc:"Con camarones, huevo y verduras"},{id:"p6_3",nombre:"Pollo en Salsa de Ostión",precio:7.99,emoji:"🍗",desc:"Pollo tierno en salsa tradicional china"},{id:"p6_4",nombre:"Rollos Primavera x5",precio:4.50,emoji:"🥢",desc:"Crujientes, rellenos de vegetales"},{id:"p6_5",nombre:"Sopa Won Ton",precio:4.25,emoji:"🍲",desc:"Caldo claro con won ton de cerdo"}]},
  { id:7, nombre:"Tacos El Rey", tipo:"tacos", logo:"img/logos/TacoRey-removebg-preview.png", rating:4.8, tiempo:"15-25 min", distancia:"0.9 km", oferta:"3x2 en tacos", descuento:33, direccion:"Mercado Central, San Salvador, El Salvador", mapsQuery:"Tacos+El+Rey+San+Salvador+El+Salvador", menu:[{id:"p7_1",nombre:"Taco de Carnitas",precio:2.50,emoji:"🌮",desc:"Carne de cerdo, cilantro, cebolla"},{id:"p7_2",nombre:"Taco de Pollo",precio:2.25,emoji:"🌮",desc:"Pollo asado, guacamole"},{id:"p7_3",nombre:"Quesadilla Grande",precio:5.50,emoji:"🫓",desc:"Queso fundido, pollo, vegetales"},{id:"p7_4",nombre:"Burrito Especial",precio:6.25,emoji:"🌯",desc:"Arroz, frijoles, carne, crema"},{id:"p7_5",nombre:"Combo 3 Tacos + Agua",precio:7.50,emoji:"🌮",desc:"3 tacos a elegir + agua fresca"}]},
  { id:8, nombre:"Pastelería Sazón", tipo:"postre", logo:"img/logos/pasteleriasazon-removebg-preview.png", rating:4.6, tiempo:"20-35 min", distancia:"1.4 km", oferta:null, descuento:0, direccion:"Zona Rosa, San Salvador, El Salvador", mapsQuery:"Pasteleria+San+Salvador+El+Salvador", menu:[{id:"p8_1",nombre:"Tres Leches",precio:3.50,emoji:"🎂",desc:"Receta tradicional salvadoreña"},{id:"p8_2",nombre:"Cupcake de Chocolate",precio:2.25,emoji:"🧁",desc:"Con frosting de buttercream"},{id:"p8_3",nombre:"Cheesecake de Fresa",precio:4.25,emoji:"🍰",desc:"Horneado, salsa de fresa natural"},{id:"p8_4",nombre:"Brownies x4",precio:3.75,emoji:"🍫",desc:"Rellenos de Nutella"},{id:"p8_5",nombre:"Pastel de Zanahoria",precio:3.99,emoji:"🥕",desc:"Con frosting de queso crema y nueces"}]},
  { id:9, nombre:"Sushi Express", tipo:"china", logo:"img/logos/SushiExpress-removebg-preview.png", rating:4.5, tiempo:"30-45 min", distancia:"3.0 km", oferta:"20% OFF", descuento:20, direccion:"Multiplaza, San Salvador, El Salvador", mapsQuery:"Sushi+San+Salvador+El+Salvador", menu:[{id:"p9_1",nombre:"Roll California x8",precio:8.50,emoji:"🍣",desc:"Cangrejo, aguacate, pepino"},{id:"p9_2",nombre:"Sashimi Salmón x6",precio:11.99,emoji:"🐟",desc:"Salmón fresco importado"},{id:"p9_3",nombre:"Roll Spicy Tuna x8",precio:9.99,emoji:"🍱",desc:"Atún picante, pepino, sriracha"},{id:"p9_4",nombre:"Edamame",precio:3.25,emoji:"🫛",desc:"Con sal marina"},{id:"p9_5",nombre:"Ramen de Miso",precio:7.50,emoji:"🍜",desc:"Caldo oscuro, huevo, nori, chashu"}]},
  { id:11, nombre:"Mar y Tierra", tipo:"mariscos", logo:"img/logos/MaryTierra-removebg-preview.png", rating:4.7, tiempo:"25-40 min", distancia:"2.3 km", oferta:"10% OFF", descuento:10, direccion:"Paseo El Carmen, Santa Tecla, El Salvador", mapsQuery:"Mariscos+Santa+Tecla+El+Salvador", menu:[{id:"p11_1",nombre:"Ceviche de Camarón",precio:8.99,emoji:"🦐",desc:"Con tomate, cebolla, limón y cilantro"},{id:"p11_2",nombre:"Filete de Tilapia",precio:10.50,emoji:"🐟",desc:"A la plancha con arroz y ensalada"},{id:"p11_3",nombre:"Coctel de Mariscos",precio:9.75,emoji:"🦞",desc:"Camarón, pulpo y concha en salsa roja"},{id:"p11_4",nombre:"Sopa de Mariscos",precio:11.25,emoji:"🍲",desc:"Caldo rico con jaiba, camarón y almejas"},{id:"p11_5",nombre:"Camarones al Ajillo",precio:12.50,emoji:"🦐",desc:"Con mantequilla, ajo y hierbas finas"}]},
  { id:12, nombre:"Bella Napoli", tipo:"italiana", logo:"img/logos/BellaNapoli-removebg-preview.png", rating:4.8, tiempo:"30-45 min", distancia:"1.9 km", oferta:"25% OFF", descuento:25, direccion:"Col. San Benito, Pasaje Los Pinos, San Salvador", mapsQuery:"Restaurante+Italiano+San+Salvador+El+Salvador", menu:[{id:"p12_1",nombre:"Spaghetti Carbonara",precio:9.50,emoji:"🍝",desc:"Tocino, huevo, parmesano y pimienta"},{id:"p12_2",nombre:"Fettuccine Alfredo",precio:8.75,emoji:"🍝",desc:"Crema, mantequilla y queso parmesano"},{id:"p12_3",nombre:"Pizza Margarita",precio:11.99,emoji:"🍕",desc:"Tomate San Marzano, mozzarella, albahaca"},{id:"p12_4",nombre:"Risotto de Hongos",precio:12.50,emoji:"🍚",desc:"Hongos portobello, vino blanco, parmesano"},{id:"p12_5",nombre:"Tiramisú",precio:5.50,emoji:"🧁",desc:"Receta clásica con mascarpone y espresso"}]},
  { id:13, nombre:"Texas BBQ", tipo:"burger", logo:"img/logos/TexasBBQ-removebg-preview.png", rating:4.6, tiempo:"25-35 min", distancia:"2.7 km", oferta:null, descuento:0, direccion:"Bulevar Santa Elena, Antiguo Cuscatlán, El Salvador", mapsQuery:"BBQ+Antiguo+Cuscatlan+El+Salvador", menu:[{id:"p13_1",nombre:"Costillas BBQ Rack",precio:18.99,emoji:"🥩",desc:"Rack completo con salsa BBQ ahumada"},{id:"p13_2",nombre:"Brisket 200g",precio:14.50,emoji:"🥩",desc:"Pecho de res ahumado 8 horas"},{id:"p13_3",nombre:"Pulled Pork Sandwich",precio:8.75,emoji:"🥪",desc:"Cerdo desmechado, coleslaw, brioche"},{id:"p13_4",nombre:"Papas Cargadas",precio:5.50,emoji:"🥔",desc:"Queso cheddar, bacon, crema ácida"},{id:"p13_5",nombre:"Combo BBQ Familiar",precio:35.00,emoji:"🍖",desc:"Costillas + brisket + 4 acompañantes"}]},
  { id:14, nombre:"La Neveria", tipo:"postre", logo:"img/logos/LaNeveria-removebg-preview.png", rating:4.5, tiempo:"15-25 min", distancia:"1.1 km", oferta:"2x1 helados", descuento:50, direccion:"Centro Comercial Galerías, San Salvador", mapsQuery:"Heladeria+Galerias+San+Salvador+El+Salvador", menu:[{id:"p14_1",nombre:"Sundae de Fresa",precio:4.25,emoji:"🍓",desc:"Helado vainilla, fresa fresca, crema chantilly"},{id:"p14_2",nombre:"Banana Split",precio:5.50,emoji:"🍌",desc:"Banana, 3 sabores, chocolate y nueces"},{id:"p14_3",nombre:"Milkshake Oreo",precio:4.99,emoji:"🥤",desc:"Espeso, con galletas Oreo trituradas"},{id:"p14_4",nombre:"Copa de Brownie",precio:5.75,emoji:"🍫",desc:"Brownie caliente con helado de vainilla"},{id:"p14_5",nombre:"Waffle con Helado",precio:6.25,emoji:"🧇",desc:"Waffle crujiente, 2 bolas a elegir"}]},
  // ── PIZZA ──
  { id:16, nombre:"Domino's Pizza", tipo:"pizza", logo:"img/logos/Domino_s_Pizza-removebg-preview.png", rating:4.4, tiempo:"20-35 min", distancia:"1.6 km", oferta:"20% OFF", descuento:20, direccion:"Blvd. Universitario, San Salvador, El Salvador", mapsQuery:"Dominos+Pizza+San+Salvador+El+Salvador", menu:[{id:"p16_1",nombre:"Pizza Pepperoni Mediana",precio:10.99,emoji:"🍕",desc:"Pepperoni, mozzarella, salsa de tomate"},{id:"p16_2",nombre:"Pizza ExtravaganZZa",precio:14.99,emoji:"🍕",desc:"Carne, champiñones, pimiento, aceitunas"},{id:"p16_3",nombre:"Pizza MeatZZa Feast",precio:13.99,emoji:"🍕",desc:"Pepperoni, salchicha, jamón y tocino"},{id:"p16_4",nombre:"Breadsticks x8",precio:4.50,emoji:"🍞",desc:"Con salsa marinara para dipear"},{id:"p16_5",nombre:"Lava Cake de Chocolate",precio:3.99,emoji:"🍫",desc:"Pastelito fundido, postre clásico Domino's"}]},
  { id:17, nombre:"Little Caesars", tipo:"pizza", logo:"img/logos/Little_Caesars-removebg-preview.png", rating:4.1, tiempo:"15-25 min", distancia:"2.0 km", oferta:null, descuento:0, direccion:"Plaza Mundo, Soyapango, El Salvador", mapsQuery:"Little+Caesars+San+Salvador+El+Salvador", menu:[{id:"p17_1",nombre:"Hot-N-Ready $5 Pepperoni",precio:5.00,emoji:"🍕",desc:"La pizza icónica lista al instante"},{id:"p17_2",nombre:"Hot-N-Ready Classic",precio:5.99,emoji:"🍕",desc:"Queso y pepperoni, lista sin espera"},{id:"p17_3",nombre:"Pizza 3 Carnes",precio:10.99,emoji:"🍕",desc:"Jamón, salchicha italiana, pepperoni"},{id:"p17_4",nombre:"Crazy Bread x8",precio:3.99,emoji:"🍞",desc:"Pan de ajo con queso parmesano"},{id:"p17_5",nombre:"Italian Cheese Bread",precio:5.50,emoji:"🧀",desc:"Pan relleno de queso mozzarella"}]},
  { id:18, nombre:"Sbarro", tipo:"pizza", logo:"img/logos/Sbarro-removebg-preview.png", rating:4.0, tiempo:"20-30 min", distancia:"2.2 km", oferta:null, descuento:0, direccion:"Metrocentro, San Salvador, El Salvador", mapsQuery:"Sbarro+San+Salvador+El+Salvador", menu:[{id:"p18_1",nombre:"Pizza NY Pepperoni",precio:4.50,emoji:"🍕",desc:"Porción estilo Nueva York, grande"},{id:"p18_2",nombre:"Stromboli de Carne",precio:6.99,emoji:"🌯",desc:"Rollo relleno de carne y queso"},{id:"p18_3",nombre:"Pasta Baked Ziti",precio:7.50,emoji:"🍝",desc:"Pasta al horno con salsa y queso"},{id:"p18_4",nombre:"Calzone Especial",precio:8.25,emoji:"🫓",desc:"Relleno de mozzarella, jamón y champiñones"},{id:"p18_5",nombre:"Pizza Hawaiana",precio:4.75,emoji:"🍕",desc:"Jamón y piña, porción grande NY"}]},
  // ── BURGERS ──
  { id:19, nombre:"McDonald's", tipo:"burger", logo:"img/logos/McDonald_s-removebg-preview.png", rating:4.4, tiempo:"10-20 min", distancia:"0.6 km", oferta:"McOfertas del día", descuento:15, direccion:"Galerías Mall, San Salvador, El Salvador", mapsQuery:"McDonalds+San+Salvador+El+Salvador", menu:[{id:"p19_1",nombre:"Big Mac",precio:5.99,emoji:"🍔",desc:"Doble carne, salsa especial, lechuga"},{id:"p19_2",nombre:"McPollo Crispy",precio:4.99,emoji:"🍔",desc:"Pollo crujiente, mayonesa, lechuga"},{id:"p19_3",nombre:"Papas Fritas Grandes",precio:2.99,emoji:"🍟",desc:"Crujientes y doradas al instante"},{id:"p19_4",nombre:"McFlurry Oreo",precio:2.50,emoji:"🍦",desc:"Helado suave con trozos de Oreo"},{id:"p19_5",nombre:"Combo Big Mac",precio:8.99,emoji:"🍔",desc:"Big Mac + papas grandes + bebida"}]},
  { id:20, nombre:"Wendy's", tipo:"burger", logo:"img/logos/Wendy_s-removebg-preview.png", rating:4.3, tiempo:"15-25 min", distancia:"1.3 km", oferta:null, descuento:0, direccion:"Multiplaza, San Salvador, El Salvador", mapsQuery:"Wendys+San+Salvador+El+Salvador", menu:[{id:"p20_1",nombre:"Dave's Single",precio:5.75,emoji:"🍔",desc:"Carne fresca nunca congelada"},{id:"p20_2",nombre:"Baconator",precio:7.99,emoji:"🍔",desc:"Doble carne, 6 tiras de bacon, queso"},{id:"p20_3",nombre:"Frosty de Chocolate",precio:2.25,emoji:"🍦",desc:"Helado espeso, clásico de Wendy's"},{id:"p20_4",nombre:"Nuggets x10",precio:4.99,emoji:"🍗",desc:"Crujientes con salsa a elegir"},{id:"p20_5",nombre:"Combo Dave's Single",precio:8.50,emoji:"🍔",desc:"Burger + papas + bebida"}]},
  { id:21, nombre:"Carl's Jr.", tipo:"burger", logo:"img/logos/Carl_s_Jr.-removebg-preview.png", rating:4.3, tiempo:"20-30 min", distancia:"1.7 km", oferta:"15% OFF", descuento:15, direccion:"Gran Vía, Santa Tecla, El Salvador", mapsQuery:"Carls+Jr+El+Salvador", menu:[{id:"p21_1",nombre:"Western Bacon Burger",precio:7.50,emoji:"🍔",desc:"Bacon, aros de cebolla, salsa BBQ"},{id:"p21_2",nombre:"Famous Star",precio:6.25,emoji:"🍔",desc:"Carne Angus, vegetales frescos"},{id:"p21_3",nombre:"Zucchini Fries",precio:3.50,emoji:"🥒",desc:"Zucchini empanizado, salsa ranch"},{id:"p21_4",nombre:"Combo Doble Angus",precio:10.99,emoji:"🍔",desc:"Doble carne + papas + bebida"},{id:"p21_5",nombre:"Hand-Breaded Chicken Tender",precio:8.99,emoji:"🍗",desc:"Tiras de pollo artesanal con salsa honey mustard"}]},
  // ── TACOS ──
  { id:22, nombre:"El Pinche", tipo:"tacos", logo:"img/logos/El_Pinche-removebg-preview.png", rating:4.5, tiempo:"20-35 min", distancia:"1.8 km", oferta:null, descuento:0, direccion:"Col. Escalón, San Salvador, El Salvador", mapsQuery:"El+Pinche+San+Salvador+El+Salvador", menu:[{id:"p22_1",nombre:"Taco Birria",precio:3.50,emoji:"🌮",desc:"Carne de res estofada, consomé"},{id:"p22_2",nombre:"Taco Pastor",precio:2.75,emoji:"🌮",desc:"Cerdo al pastor, piña, cilantro"},{id:"p22_3",nombre:"Orden de Nachos",precio:6.50,emoji:"🧀",desc:"Con jalapeños, crema y guacamole"},{id:"p22_4",nombre:"Quesabirria x3",precio:9.99,emoji:"🌮",desc:"Quesadilla de birria con consomé"},{id:"p22_5",nombre:"Taco de Suadero",precio:3.00,emoji:"🌮",desc:"Carne suave de res, cebolla, cilantro"}]},
  { id:23, nombre:"Taco Bell", tipo:"tacos", logo:"img/logos/Taco_Bell-removebg-preview.png", rating:4.2, tiempo:"15-25 min", distancia:"1.4 km", oferta:"Combo $5", descuento:10, direccion:"Plaza Merliot, Santa Tecla, El Salvador", mapsQuery:"Taco+Bell+El+Salvador", menu:[{id:"p23_1",nombre:"Crunchy Taco",precio:2.25,emoji:"🌮",desc:"Carne molida, queso, lechuga"},{id:"p23_2",nombre:"Burrito Supreme",precio:5.50,emoji:"🌯",desc:"Carne, arroz, frijoles, crema y tomate"},{id:"p23_3",nombre:"Nachos BellGrande",precio:5.99,emoji:"🧀",desc:"Con carne, jalapeños y tres salsas"},{id:"p23_4",nombre:"Chalupa Supreme",precio:4.25,emoji:"🫓",desc:"Pan frito, pollo, crema, tomate"},{id:"p23_5",nombre:"Cinnamon Twists",precio:1.99,emoji:"🍬",desc:"Snack crujiente dulce de canela"}]},
  { id:24, nombre:"Taco Holding", tipo:"tacos", logo:"img/logos/TacoHolding-removebg-preview.png", rating:4.3, tiempo:"20-30 min", distancia:"2.0 km", oferta:null, descuento:0, direccion:"Bulevar Los Próceres, San Salvador, El Salvador", mapsQuery:"Taco+Holding+San+Salvador+El+Salvador", menu:[{id:"p24_1",nombre:"Taco de Lengua",precio:3.25,emoji:"🌮",desc:"Lengua de res, cebolla, cilantro"},{id:"p24_2",nombre:"Taco de Camarón",precio:4.50,emoji:"🌮",desc:"Camarón salteado, pico de gallo"},{id:"p24_3",nombre:"Tostada de Pollo",precio:3.75,emoji:"🫓",desc:"Tortilla tostada, pollo, lechuga, crema"},{id:"p24_4",nombre:"Combo Tacos x4",precio:11.99,emoji:"🌮",desc:"4 tacos a elegir + bebida"},{id:"p24_5",nombre:"Taco de Res al Pastor",precio:3.75,emoji:"🌮",desc:"Res marinada, piña asada, salsa roja"}]},
  { id:25, nombre:"La Cantina", tipo:"tacos", logo:"img/logos/LaCantina-removebg-preview.png", rating:4.6, tiempo:"25-40 min", distancia:"2.4 km", oferta:"Happy Hour", descuento:20, direccion:"Zona Rosa, San Salvador, El Salvador", mapsQuery:"La+Cantina+San+Salvador+El+Salvador", menu:[{id:"p25_1",nombre:"Taco de Arrachera",precio:5.50,emoji:"🌮",desc:"Arrachera a la parrilla, guacamole"},{id:"p25_2",nombre:"Enchiladas Verdes x3",precio:8.50,emoji:"🫔",desc:"Pollo, salsa verde, crema y queso"},{id:"p25_3",nombre:"Guacamole con Totopos",precio:5.25,emoji:"🥑",desc:"Aguacate fresco, limón, chile"},{id:"p25_4",nombre:"Fajitas de Res",precio:11.99,emoji:"🥩",desc:"Res, pimiento, cebolla, tortillas x3"},{id:"p25_5",nombre:"Tacos Dorados x3",precio:7.50,emoji:"🌮",desc:"Tacos crujientes con pollo, crema y queso"}]},
  // ── CHINA ──
  { id:27, nombre:"Lien Hua", tipo:"china", logo:"img/logos/LienHua-removebg-preview.png", rating:4.5, tiempo:"30-45 min", distancia:"3.1 km", oferta:"15% OFF", descuento:15, direccion:"Col. Flor Blanca, San Salvador, El Salvador", mapsQuery:"Lien+Hua+San+Salvador+El+Salvador", menu:[{id:"p27_1",nombre:"Chop Suey de Res",precio:8.99,emoji:"🥩",desc:"Res salteada con vegetales en salsa de ostra"},{id:"p27_2",nombre:"Wonton Frito x8",precio:5.50,emoji:"🥟",desc:"Crujientes con salsa agridulce"},{id:"p27_3",nombre:"Pollo Kung Pao",precio:9.50,emoji:"🍗",desc:"Pollo, cacahuates, chile seco, salsa"},{id:"p27_4",nombre:"Arroz Cantonés Especial",precio:6.50,emoji:"🍚",desc:"Arroz frito con cerdo, huevo y vegetales"},{id:"p27_5",nombre:"Té de Jazmín",precio:1.99,emoji:"🍵",desc:"Infusión caliente tradicional"}]},
  { id:28, nombre:"Panda Express", tipo:"china", logo:"img/logos/PandaExpress-removebg-preview.png", rating:4.4, tiempo:"20-35 min", distancia:"1.9 km", oferta:null, descuento:0, direccion:"Galerías Mall, San Salvador, El Salvador", mapsQuery:"Panda+Express+San+Salvador+El+Salvador", menu:[{id:"p28_1",nombre:"Orange Chicken",precio:9.99,emoji:"🍊",desc:"El más popular: pollo frito en salsa de naranja dulce"},{id:"p28_2",nombre:"Beijing Beef",precio:10.50,emoji:"🥩",desc:"Tiras de res crujientes en salsa dulce-picante"},{id:"p28_3",nombre:"Honey Walnut Shrimp",precio:11.99,emoji:"🦐",desc:"Camarones con salsa de miel y nueces"},{id:"p28_4",nombre:"Chow Mein",precio:5.99,emoji:"🍜",desc:"Fideos salteados con vegetales frescos"},{id:"p28_5",nombre:"Bowl Panda",precio:11.99,emoji:"🍚",desc:"Arroz o Chow Mein + 2 entradas a elegir"}]},
  { id:29, nombre:"P.F. Chang's", tipo:"china", logo:"img/logos/P.F._Chang_s-removebg-preview.png", rating:4.7, tiempo:"35-50 min", distancia:"3.5 km", oferta:"25% OFF", descuento:25, direccion:"Multiplaza, San Salvador, El Salvador", mapsQuery:"PF+Changs+San+Salvador+El+Salvador", menu:[{id:"p29_1",nombre:"Lettuce Wraps de Pollo",precio:11.50,emoji:"🥬",desc:"Pollo salteado en hojas de lechuga, el #1"},{id:"p29_2",nombre:"Mongolian Beef",precio:14.99,emoji:"🥩",desc:"Res con cebollín en salsa dulce-salada"},{id:"p29_3",nombre:"Dan Dan Noodles",precio:12.50,emoji:"🍜",desc:"Fideos con cerdo molido y salsa especiada"},{id:"p29_4",nombre:"Kung Pao Shrimp",precio:15.99,emoji:"🦐",desc:"Camarones con chile, maní y salsa picante"},{id:"p29_5",nombre:"Great Wall of Chocolate",precio:8.99,emoji:"🍫",desc:"Pastel de chocolate multicapa, postre icónico"}]},
  // ── POLLO ──
  { id:30, nombre:"Pinulito", tipo:"pollo", logo:"img/logos/Pinulito-removebg-preview.png", rating:4.6, tiempo:"20-35 min", distancia:"1.5 km", oferta:null, descuento:0, direccion:"Col. Jardines de Guadalupe, San Salvador, El Salvador", mapsQuery:"Pinulito+San+Salvador+El+Salvador", menu:[{id:"p30_1",nombre:"Pollo Pinulito Entero",precio:14.99,emoji:"🍗",desc:"Pollo asado con receta secreta"},{id:"p30_2",nombre:"Combo Familiar x6",precio:19.99,emoji:"🍗",desc:"6 piezas + papas + ensalada"},{id:"p30_3",nombre:"Alitas Crujientes x8",precio:8.50,emoji:"🍗",desc:"Con salsa BBQ o picante"},{id:"p30_4",nombre:"Sandwich de Pollo",precio:4.75,emoji:"🥪",desc:"Pollo asado, vegetales, mayonesa"},{id:"p30_5",nombre:"Combo Ejecutivo",precio:7.99,emoji:"🍗",desc:"2 piezas + arroz + ensalada + tortillas"}]},
  { id:31, nombre:"Pollo Campestre", tipo:"pollo", logo:"img/logos/PolloCampestre-removebg-preview.png", rating:4.5, tiempo:"25-40 min", distancia:"2.3 km", oferta:"10% OFF", descuento:10, direccion:"Carretera Panamericana, San Salvador, El Salvador", mapsQuery:"Pollo+Campestre+San+Salvador+El+Salvador", menu:[{id:"p31_1",nombre:"Pollo a la Leña",precio:11.99,emoji:"🍗",desc:"Asado en leña con achiote"},{id:"p31_2",nombre:"Combo Campestre x4",precio:16.99,emoji:"🍗",desc:"4 piezas + yuca + ensalada + tortillas"},{id:"p31_3",nombre:"Caldo de Pollo",precio:5.50,emoji:"🍲",desc:"Con verduras y tortillas recién hechas"},{id:"p31_4",nombre:"Chicharrón de Pollo",precio:6.99,emoji:"🍗",desc:"Crujiente, con curtido y limón"},{id:"p31_5",nombre:"Enchiladas de Pollo x3",precio:5.99,emoji:"🫔",desc:"Con salsa, queso y curtido"}]},
  { id:32, nombre:"Pollo Real", tipo:"pollo", logo:"img/logos/PolloReal-removebg-preview.png", rating:4.4, tiempo:"20-35 min", distancia:"1.8 km", oferta:null, descuento:0, direccion:"Bulevar del Ejército, San Salvador, El Salvador", mapsQuery:"Pollo+Real+San+Salvador+El+Salvador", menu:[{id:"p32_1",nombre:"Pollo Real Entero",precio:13.50,emoji:"🍗",desc:"Pollo horneado con especias naturales"},{id:"p32_2",nombre:"Pechuga Especial",precio:6.99,emoji:"🍗",desc:"Con papas horneadas y ensalada"},{id:"p32_3",nombre:"Combo Ejecutivo",precio:9.99,emoji:"🍗",desc:"2 piezas + arroz + frijoles + tortillas"},{id:"p32_4",nombre:"Nuggets de Pollo x10",precio:5.50,emoji:"🍗",desc:"Con salsa de mostaza y miel"},{id:"p32_5",nombre:"Alas BBQ x8",precio:6.99,emoji:"🍗",desc:"Con salsa BBQ ahumada y aderezo ranch"}]},
  // ── POSTRES ──
  { id:33, nombre:"Cold Stone Creamery", tipo:"postre", logo:"img/logos/ColdStoneCreamery-removebg-preview.png", rating:4.7, tiempo:"15-25 min", distancia:"1.2 km", oferta:"2x1 Creation", descuento:50, direccion:"Galerías Mall, San Salvador, El Salvador", mapsQuery:"Cold+Stone+Creamery+San+Salvador+El+Salvador", menu:[{id:"p33_1",nombre:"Signature Creation",precio:5.99,emoji:"🍨",desc:"Helado personalizado mezclado en piedra"},{id:"p33_2",nombre:"Birthday Cake Remix",precio:6.50,emoji:"🎂",desc:"Helado de vainilla, pastel, granillo"},{id:"p33_3",nombre:"Like It Chocolate",precio:5.25,emoji:"🍫",desc:"Helado de chocolate, brownie, nueces"},{id:"p33_4",nombre:"Waffle Cone",precio:1.50,emoji:"🍦",desc:"Cono de waffle crujiente artesanal"},{id:"p33_5",nombre:"Mud Pie Mojo",precio:7.25,emoji:"🍫",desc:"Helado de café, Oreo, almendras, fudge"}]},
  { id:34, nombre:"Dunkin'", tipo:"postre", logo:"img/logos/Dunkin_-removebg-preview.png", rating:4.3, tiempo:"10-20 min", distancia:"0.9 km", oferta:null, descuento:0, direccion:"Metrocentro, San Salvador, El Salvador", mapsQuery:"Dunkin+Donuts+San+Salvador+El+Salvador", menu:[{id:"p34_1",nombre:"Donut Glazed Classic",precio:1.50,emoji:"🍩",desc:"Donut bañado en glaseado dulce"},{id:"p34_2",nombre:"Café Americano",precio:2.25,emoji:"☕",desc:"Espresso suave de grano selecto"},{id:"p34_3",nombre:"Dozen Donuts",precio:12.99,emoji:"🍩",desc:"Docena surtida a elegir"},{id:"p34_4",nombre:"Frozen Coffee",precio:3.99,emoji:"🥤",desc:"Café helado cremoso con caramelo"},{id:"p34_5",nombre:"Munchkins x25",precio:5.99,emoji:"🍩",desc:"Bolitas de donut surtidas, perfectas para compartir"}]},
  { id:35, nombre:"Starbucks", tipo:"postre", logo:"img/logos/Starbucks-removebg-preview.png", rating:4.6, tiempo:"15-25 min", distancia:"1.0 km", oferta:null, descuento:0, direccion:"Zona Rosa, San Salvador, El Salvador", mapsQuery:"Starbucks+San+Salvador+El+Salvador", menu:[{id:"p35_1",nombre:"Frappuccino Caramel",precio:5.50,emoji:"🥤",desc:"Café helado con caramelo y crema"},{id:"p35_2",nombre:"Latte de Vainilla",precio:4.75,emoji:"☕",desc:"Espresso, leche vaporizada y vainilla"},{id:"p35_3",nombre:"Cake Pop",precio:2.25,emoji:"🍭",desc:"Pastelito glaseado en palito"},{id:"p35_4",nombre:"Matcha Latte",precio:4.99,emoji:"🍵",desc:"Matcha premium con leche suave"},{id:"p35_5",nombre:"Cold Brew Dulce de Leche",precio:5.25,emoji:"☕",desc:"Café frío lento con toque de dulce de leche"}]},
  // ── MARISCOS ──
  { id:36, nombre:"Nais", tipo:"mariscos", logo:"img/logos/Nais-removebg-preview.png", rating:4.5, tiempo:"25-40 min", distancia:"2.1 km", oferta:null, descuento:0, direccion:"Col. San Benito, San Salvador, El Salvador", mapsQuery:"Nais+Restaurante+San+Salvador+El+Salvador", menu:[{id:"p36_1",nombre:"Ceviche Mixto",precio:10.50,emoji:"🦐",desc:"Camarón, pulpo y pescado en limón"},{id:"p36_2",nombre:"Camarones a la Diabla",precio:12.99,emoji:"🦐",desc:"Camarones en salsa picante roja"},{id:"p36_3",nombre:"Pulpo al Olivo",precio:14.50,emoji:"🐙",desc:"Pulpo cocido con aceite de oliva y alcaparras"},{id:"p36_4",nombre:"Tiradito de Atún",precio:11.99,emoji:"🐟",desc:"Atún fresco, leche de tigre, aguacate"},{id:"p36_5",nombre:"Camarones al Coco",precio:13.50,emoji:"🦐",desc:"Camarones con costra de coco y salsa agridulce"}]},
  { id:37, nombre:"Ceviche House", tipo:"mariscos", logo:"img/logos/CevicheHouse-removebg-preview.png", rating:4.6, tiempo:"20-35 min", distancia:"1.7 km", oferta:"15% OFF", descuento:15, direccion:"Paseo El Carmen, Santa Tecla, El Salvador", mapsQuery:"Ceviche+House+El+Salvador", menu:[{id:"p37_1",nombre:"Ceviche Clásico",precio:8.99,emoji:"🦐",desc:"Camarón fresco, limón, cilantro, tomate"},{id:"p37_2",nombre:"Aguachile Verde",precio:10.50,emoji:"🥒",desc:"Camarón en chile verde, pepino, cebolla"},{id:"p37_3",nombre:"Tostadas de Marisco x3",precio:9.25,emoji:"🦞",desc:"Coctel de mariscos sobre tostada crujiente"},{id:"p37_4",nombre:"Mariscada para 2",precio:22.99,emoji:"🦀",desc:"Surtido premium de mariscos frescos"},{id:"p37_5",nombre:"Camarón a la Diabla",precio:12.50,emoji:"🦐",desc:"Camarones en salsa roja picante con arroz"}]},
  { id:38, nombre:"Fisheria", tipo:"mariscos", logo:"img/logos/Fisheria-removebg-preview.png", rating:4.4, tiempo:"25-40 min", distancia:"2.6 km", oferta:null, descuento:0, direccion:"Multiplaza, San Salvador, El Salvador", mapsQuery:"Fisheria+San+Salvador+El+Salvador", menu:[{id:"p38_1",nombre:"Fish & Chips",precio:9.50,emoji:"🐟",desc:"Filete empanizado con papas fritas"},{id:"p38_2",nombre:"Camarones Empanizados",precio:10.99,emoji:"🦐",desc:"Con salsa tártara casera"},{id:"p38_3",nombre:"Tacos de Pescado x3",precio:8.75,emoji:"🌮",desc:"Pescado a la plancha, col, chipotle"},{id:"p38_4",nombre:"Sopa de Almejas",precio:7.50,emoji:"🍲",desc:"Chowder cremoso con almejas frescas"},{id:"p38_5",nombre:"Ceviche de Camarón",precio:9.50,emoji:"🦐",desc:"Camarón fresco, limón, chile y cilantro"}]},
  { id:39, nombre:"Bubba's", tipo:"mariscos", logo:"img/logos/Bubba_s-removebg-preview.png", rating:4.3, tiempo:"30-45 min", distancia:"3.0 km", oferta:null, descuento:0, direccion:"Bulevar Santa Elena, Antiguo Cuscatlán, El Salvador", mapsQuery:"Bubbas+Seafood+El+Salvador", menu:[{id:"p39_1",nombre:"Shrimp Po'Boy",precio:9.99,emoji:"🦐",desc:"Camarones fritos en pan baguette"},{id:"p39_2",nombre:"Cajun Shrimp Platter",precio:13.50,emoji:"🦐",desc:"Camarones cajún con maíz y papa"},{id:"p39_3",nombre:"Clam Chowder",precio:6.99,emoji:"🍲",desc:"Sopa cremosa de almejas estilo Boston"},{id:"p39_4",nombre:"Basket de Mariscos",precio:15.99,emoji:"🦀",desc:"Surtido frito: camarón, calamar, pescado"},{id:"p39_5",nombre:"Grilled Lobster Tail",precio:22.99,emoji:"🦞",desc:"Cola de langosta a la parrilla con mantequilla"}]},
  // ── ITALIANA ──
  { id:40, nombre:"Olive Garden", tipo:"italiana", logo:"img/logos/OliveGarden-removebg-preview.png", rating:4.6, tiempo:"30-50 min", distancia:"3.2 km", oferta:null, descuento:0, direccion:"Multiplaza, San Salvador, El Salvador", mapsQuery:"Olive+Garden+San+Salvador+El+Salvador", menu:[{id:"p40_1",nombre:"Tour of Italy",precio:16.99,emoji:"🍝",desc:"Lasagna, pollo parmesano, fettuccine alfredo"},{id:"p40_2",nombre:"Breadsticks Ilimitados",precio:3.99,emoji:"🍞",desc:"Pan de ajo caliente con marinara"},{id:"p40_3",nombre:"Sopa Zuppa Toscana",precio:6.50,emoji:"🍲",desc:"Salchicha, kale, papa en caldo cremoso"},{id:"p40_4",nombre:"Tiramisu",precio:6.99,emoji:"🧁",desc:"Mascarpone, espresso, cacao en polvo"},{id:"p40_5",nombre:"Chicken Parmigiana",precio:14.50,emoji:"🍗",desc:"Pollo empanizado, salsa marinara, mozzarella"}]},
  { id:41, nombre:"Vapiano", tipo:"italiana", logo:"img/logos/Vapiano-removebg-preview.png", rating:4.5, tiempo:"25-40 min", distancia:"2.5 km", oferta:"20% OFF", descuento:20, direccion:"Zona Rosa, San Salvador, El Salvador", mapsQuery:"Vapiano+San+Salvador+El+Salvador", menu:[{id:"p41_1",nombre:"Spaghetti Aglio e Olio",precio:9.50,emoji:"🍝",desc:"Ajo, aceite de oliva, chile y perejil"},{id:"p41_2",nombre:"Pizza Funghi",precio:11.99,emoji:"🍕",desc:"Champiñones, mozzarella, trufa"},{id:"p41_3",nombre:"Insalata Caprese",precio:7.25,emoji:"🍅",desc:"Tomate fresco, mozzarella, albahaca"},{id:"p41_4",nombre:"Panna Cotta",precio:4.99,emoji:"🍮",desc:"Crema italiana con salsa de frutos rojos"},{id:"p41_5",nombre:"Lasagna al Forno",precio:13.50,emoji:"🫕",desc:"Capas de pasta, carne, bechamel y parmesano"}]},
  { id:42, nombre:"Frateli", tipo:"italiana", logo:"img/logos/Frateli-removebg-preview.png", rating:4.7, tiempo:"30-45 min", distancia:"2.9 km", oferta:null, descuento:0, direccion:"Col. San Benito, San Salvador, El Salvador", mapsQuery:"Frateli+San+Salvador+El+Salvador", menu:[{id:"p42_1",nombre:"Ossobuco alla Milanese",precio:18.99,emoji:"🥩",desc:"Jarrete de ternera con gremolata"},{id:"p42_2",nombre:"Rigatoni all'Amatriciana",precio:11.50,emoji:"🍝",desc:"Guanciale, tomate San Marzano, pecorino"},{id:"p42_3",nombre:"Bruschetta al Pomodoro",precio:5.99,emoji:"🍅",desc:"Pan tostado, tomate, albahaca, aceite"},{id:"p42_4",nombre:"Cannoli Siciliano",precio:4.50,emoji:"🧁",desc:"Ricotta dulce en tubo crujiente de masa"},{id:"p42_5",nombre:"Gnocchi al Pesto",precio:10.50,emoji:"🍝",desc:"Gnocchi de papa con pesto genovés y parmesano"}]},
  { id:43, nombre:"Cinnabon", tipo:"italiana", logo:"img/logos/Cinnabon-removebg-preview.png", rating:4.5, tiempo:"10-20 min", distancia:"0.8 km", oferta:null, descuento:0, direccion:"Metrocentro, San Salvador, El Salvador", mapsQuery:"Cinnabon+San+Salvador+El+Salvador", menu:[{id:"p43_1",nombre:"Classic Roll",precio:4.50,emoji:"🍥",desc:"Rollo de canela con glaseado de queso crema"},{id:"p43_2",nombre:"MiniBon x4",precio:6.99,emoji:"🍥",desc:"4 rollitos mini con glaseado extra"},{id:"p43_3",nombre:"Caramel Pecanbon",precio:5.50,emoji:"🍯",desc:"Rollo con pecanas y caramelo"},{id:"p43_4",nombre:"Chilatta de Canela",precio:3.99,emoji:"🥤",desc:"Bebida helada de canela estilo Cinnabon"},{id:"p43_5",nombre:"Cinnabon Bites x9",precio:5.25,emoji:"🍥",desc:"Mini bocados de canela con glaseado de queso crema"}]}
];

// ===== ESTADO GLOBAL =====
let pedidos = JSON.parse(localStorage.getItem('yavoy_pedidos') || '[]');
let favoritos = JSON.parse(localStorage.getItem('yavoy_favoritos') || '[]');
let historial = JSON.parse(localStorage.getItem('yavoy_historial') || '[]');
let perfil = JSON.parse(localStorage.getItem('yavoy_perfil') || '{"nombre":"Usuario YaVoy","email":"usuario@email.com","tel":"","foto":""}');
let direcciones = JSON.parse(localStorage.getItem('yavoy_direcciones') || '[]');
let metodoPagoGlobal = localStorage.getItem('yavoy_metodo_pago') || 'efectivo';
let carrito = JSON.parse(localStorage.getItem('yavoy_carrito') || '[]');
let metodoPago = 'efectivo';
let currentSlide = 0;
let sliderInterval;
let notificaciones = [
  { id:1, texto:'🎉 ¡Tu pedido en Pollo Campero fue entregado!', leida:false, hora:'Hace 5 min' },
  { id:2, texto:'🔥 Nueva oferta: 25% OFF en Bella Napoli hoy', leida:false, hora:'Hace 20 min' }
];
let currentRestId = null;

// ===== INIT =====
window.onload = function () {
  // Si hay sesión guardada, ir directo a inicio
  const sesion = localStorage.getItem('yavoy_sesion');
  if (sesion) {
    const p = JSON.parse(sesion);
    perfil = p;
    localStorage.setItem('yavoy_perfil', JSON.stringify(perfil));
    irAInicio();
  } else {
    // Ocultar navbar en pantalla de login
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.display = 'none';
    // Mostrar tab de "Crear Cuenta" primero
    switchTab('register');
  }
};

function irAInicio() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-inicio').classList.add('active');
  const navInicio = document.getElementById('nav-inicio');
  if (navInicio) navInicio.classList.add('active');
  // Mostrar navbar (en desktop es topbar, en móvil es bottom bar)
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.style.removeProperty('display');
  mostrarRestaurantes(restaurantes);
  actualizarPerfil();
  iniciarSlider();
  setupSearch();
  actualizarBadgePedidos();
  renderHistorial();
  actualizarCartBadge();
  actualizarNotifBadge();
}

// ===== AUTH =====
function switchTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  const icon = btn.querySelector('i');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

function IniciarSesion() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();

    if (!email || !pass) { mostrarToast('⚠️ Completa todos los campos'); return; }
    if (!email.includes('@')) { mostrarToast('⚠️ Correo inválido'); return; }

    mostrarLoading();

    fetch('https://yavoy-backend-00nn.onrender.com/api/clientes/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email, Password: pass })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                ocultarLoading();
                // Extraemos los datos reales guardados en tu phpMyAdmin
                const usuarioDB = data.usuario;
                
                perfil = { id: usuarioDB.Id_Cliente, nombre: usuarioDB.Nombre, email: usuarioDB.Email, tel: usuarioDB.Telefono, foto: "" };
                localStorage.setItem('yavoy_perfil', JSON.stringify(perfil));
                localStorage.setItem('yavoy_sesion', JSON.stringify(perfil));
                
                mostrarToast(`¡Bienvenido de nuevo, ${usuarioDB.Nombre}!`);
                irAInicio();
            }, 1200);
        } else {
            ocultarLoading();
            mostrarToast('⚠️ ' + (data.message || 'Usuario o contraseña incorrectos'));
        }
    })
    .catch(error => {
        ocultarLoading();
        mostrarToast('❌ Error de conexión al servidor');
    });
}

function registrarUsuario() {
    const nombre = document.getElementById('regNombre').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const tel = document.getElementById('regTel').value.trim();
    const pass = document.getElementById('regPassword').value.trim();
    const pass2 = document.getElementById('regPassword2').value.trim();
    const terminos = document.getElementById('regTerminos').checked;

    if (!nombre || !email || !tel || !pass || !pass2) { mostrarToast('⚠️ Completa todos los campos'); return; }
    if (!email.includes('@')) { mostrarToast('⚠️ Correo electrónico inválido'); return; }
    if (pass.length < 6) { mostrarToast('⚠️ La contraseña debe tener al menos 6 caracteres'); return; }
    if (pass !== pass2) { mostrarToast('⚠️ Las contraseñas no coinciden'); return; }
    if (!terminos) { mostrarToast('⚠️ Debes aceptar los Términos y Condiciones'); return; }

    mostrarLoading();

    const datosCliente = { Nombre: nombre, Telefono: tel, Direccion: '', Email: email, Password: pass };

    fetch('https://yavoy-backend-00nn.onrender.com/api/clientes/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosCliente)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                ocultarLoading();
                perfil = { id: data.Id_Cliente, nombre, email, tel, foto: "" };
                localStorage.setItem('yavoy_perfil', JSON.stringify(perfil));
                localStorage.setItem('yavoy_sesion', JSON.stringify(perfil));
                mostrarToast(`¡Bienvenido, ${nombre}!`);
                irAInicio();
            }, 1500);
       } else {
            ocultarLoading();
            mostrarToast('❌ ' + (data.message || 'Error al registrar usuario'));
        }
    })
    .catch(error => {
        ocultarLoading();
        mostrarToast('❌ Error de conexión al servidor');
    });
}

function loginSocial(red) {
  mostrarLoading();
  setTimeout(() => {
    ocultarLoading();
    perfil = { nombre: 'Usuario ' + red, email: 'usuario@' + red.toLowerCase() + '.com', tel: '', foto: '' };
    localStorage.setItem('yavoy_perfil', JSON.stringify(perfil));
    localStorage.setItem('yavoy_sesion', JSON.stringify(perfil));
    mostrarToast('✅ Sesión iniciada con ' + red);
    irAInicio();
  }, 1200);
}

// ===== SLIDER HERO =====
function iniciarSlider() {
  sliderInterval = setInterval(() => irSlide((currentSlide + 1) % 2), 4000);
}
function irSlide(n) {
  document.querySelectorAll('.hero-slide').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.hero-slide')[n].classList.add('active');
  document.querySelectorAll('.dot')[n].classList.add('active');
  currentSlide = n;
}

// ===== NAVEGACIÓN =====
function mostrar(seccion) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + seccion).classList.add('active');
  const navBtn = document.getElementById('nav-' + seccion);
  if (navBtn) navBtn.classList.add('active');
  // En desktop: ocultar navbar en login, mostrar en el resto
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (seccion === 'login') {
      navbar.style.display = 'none';
    } else {
      navbar.style.removeProperty('display');
    }
  }
  if (seccion === 'pedidos') renderPedidos();
  if (seccion === 'favoritos') renderFavoritos();
  if (seccion === 'ofertas') renderOfertas();
  if (seccion === 'carrito') renderCarrito();
}

// ===== MOSTRAR RESTAURANTES =====
function mostrarRestaurantes(lista) {
  const cont = document.getElementById('restaurantList');
  if (!lista.length) {
    cont.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px 20px;color:#888;"><div style="font-size:40px;margin-bottom:8px">🍽️</div><p style="font-weight:700">No se encontraron restaurantes</p></div>`;
    return;
  }
  cont.innerHTML = lista.map(r => crearCardHTML(r)).join('');
}

function crearCardHTML(r) {
  const esFav = favoritos.includes(r.id);
  return `
    <div class="card" onclick="abrirRestaurante(${r.id})">
      ${r.oferta ? `<div class="card-badge">${r.oferta}</div>` : ''}
      <div class="card-img-emoji" style="background:${colorFondo(r.tipo)}"><img src="${r.logo}" alt="${r.nombre}" style="width:80px;height:80px;object-fit:contain;"></div>
      <button class="fav-btn ${esFav ? 'active' : ''}" onclick="toggleFavorito(event,${r.id})">
        <i class="fas fa-heart"></i>
      </button>
      <div class="card-body">
        <h4>${r.nombre}</h4>
        <div class="card-meta">
          <span class="rating">⭐ ${r.rating}</span>
          <span class="dot-sep">•</span>
          <span>${r.tiempo}</span>
          <span class="dot-sep">•</span>
          <span>${r.distancia}</span>
        </div>
        <button class="card-btn" onclick="event.stopPropagation();abrirRestaurante(${r.id})">Ver Menú</button>
      </div>
    </div>
  `;
}

function colorFondo(tipo) {
  const c = { pizza:'linear-gradient(135deg,#fff0e6,#ffe0cc)', burger:'linear-gradient(135deg,#fff9e6,#fff0cc)', pollo:'linear-gradient(135deg,#fff3e6,#ffe8cc)', tacos:'linear-gradient(135deg,#f0ffe6,#e0ffcc)', china:'linear-gradient(135deg,#ffe6e6,#ffcccc)', postre:'linear-gradient(135deg,#f3e6ff,#e9ccff)', mariscos:'linear-gradient(135deg,#e6f7ff,#b8e0ff)', italiana:'linear-gradient(135deg,#fff0f0,#ffe8d6)' };
  return c[tipo] || 'linear-gradient(135deg,#ede9fe,#ddd6fe)';
}

function filtrar(tipo) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.cat-btn[data-tipo="${tipo}"]`);
  if (btn) btn.classList.add('active');
  mostrarRestaurantes(tipo === 'todos' ? restaurantes : restaurantes.filter(r => r.tipo === tipo));
}

// ===== OFERTAS =====
function renderOfertas() {
  const cont = document.getElementById('ofertasContainer');
  const conOferta = restaurantes.filter(r => r.oferta);
  if (!conOferta.length) {
    cont.innerHTML = `<div class="empty-state"><div class="empty-icon">🏷️</div><h3>Sin ofertas por ahora</h3><p>Vuelve más tarde para ver descuentos</p></div>`;
    return;
  }
  cont.innerHTML = conOferta.map(r => `
    <div class="oferta-card" onclick="abrirRestaurante(${r.id})">
      <div class="oferta-emoji-wrap" style="background:${colorFondo(r.tipo)}"><img src="${r.logo}" alt="${r.nombre}" style="width:60px;height:60px;object-fit:contain;"></div>
      <div class="oferta-info">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <h4>${r.nombre}</h4>
          <span class="oferta-badge">${r.oferta}</span>
        </div>
        <div style="font-size:12px;color:#888;margin-bottom:8px;">⭐ ${r.rating} • ${r.tiempo} • ${r.distancia}</div>
        <button class="oferta-ver-btn" onclick="event.stopPropagation();abrirRestaurante(${r.id})">
          <i class="fas fa-utensils"></i> Ver Menú
        </button>
      </div>
    </div>
  `).join('');
}

// ===== CARRITO =====
function agregarAlCarrito(restauranteNombre, itemId, itemNombre, itemPrecio, itemEmoji) {
  const ex = carrito.find(c => c.itemId === itemId);
  if (ex) { ex.cantidad++; } else {
    carrito.push({ itemId, restaurante: restauranteNombre, nombre: itemNombre, precio: itemPrecio, emoji: itemEmoji, cantidad: 1 });
  }
  localStorage.setItem('yavoy_carrito', JSON.stringify(carrito));
  actualizarCartBadge();
  mostrarToast(`🛒 ${itemNombre} agregado al carrito`);
}

function actualizarCartBadge() {
  const total = carrito.reduce((acc, c) => acc + c.cantidad, 0);
  const navBadge = document.getElementById('cartNavBadge');
  if (total > 0) {
    if (navBadge) { navBadge.textContent = total; navBadge.style.display = 'flex'; }
  } else {
    if (navBadge) navBadge.style.display = 'none';
  }
}

function renderCarrito() {
  const cont = document.getElementById('carritoContainer');
  if (!carrito.length) {
    cont.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3>Tu carrito está vacío</h3><p>Agrega productos desde el menú de los restaurantes</p><button onclick="mostrar('inicio')">Explorar restaurantes</button></div>`;
    return;
  }
  const subtotal = carrito.reduce((acc, c) => acc + (c.precio * c.cantidad), 0);
  const delivery = 1.50;
  const total = subtotal + delivery;
  const grupos = {};
  carrito.forEach(c => { if (!grupos[c.restaurante]) grupos[c.restaurante] = []; grupos[c.restaurante].push(c); });
  let html = '<div style="padding:12px 15px;">';
  Object.entries(grupos).forEach(([rest, items]) => {
    html += `<div class="carrito-grupo"><div class="carrito-grupo-header"><i class="fas fa-store"></i> ${rest}</div>`;
    items.forEach(item => {
      html += `<div class="carrito-item"><span class="carrito-item-emoji">${item.emoji}</span><div class="carrito-item-info"><h5>${item.nombre}</h5><p>$${item.precio.toFixed(2)} c/u</p></div><div class="carrito-qty"><button onclick="cambiarCantidad('${item.itemId}',-1)">-</button><span>${item.cantidad}</span><button onclick="cambiarCantidad('${item.itemId}',1)">+</button></div><span class="carrito-subtotal">$${(item.precio*item.cantidad).toFixed(2)}</span></div>`;
    });
    html += '</div>';
  });
  html += `<div class="carrito-resumen"><div class="carrito-resumen-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div><div class="carrito-resumen-row"><span>Delivery</span><span>$${delivery.toFixed(2)}</span></div><div class="carrito-resumen-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div></div>
    <button class="carrito-pagar-btn" onclick="abrirModalPedidoDesdeCarrito()"><i class="fas fa-check-circle"></i> Confirmar Pedido · $${total.toFixed(2)}</button>
    <button class="carrito-limpiar-btn" onclick="limpiarCarrito()"><i class="fas fa-trash"></i> Vaciar carrito</button></div>`;
  cont.innerHTML = html;
}

function cambiarCantidad(itemId, delta) {
  const idx = carrito.findIndex(c => c.itemId === itemId);
  if (idx === -1) return;
  carrito[idx].cantidad += delta;
  if (carrito[idx].cantidad <= 0) carrito.splice(idx, 1);
  localStorage.setItem('yavoy_carrito', JSON.stringify(carrito));
  actualizarCartBadge();
  renderCarrito();
}

function limpiarCarrito() {
  if (confirm('¿Deseas vaciar el carrito?')) {
    carrito = [];
    localStorage.setItem('yavoy_carrito', JSON.stringify(carrito));
    actualizarCartBadge();
    renderCarrito();
    mostrarToast('🗑️ Carrito vaciado');
  }
}

function abrirModalPedidoDesdeCarrito() {
  if (!carrito.length) { mostrarToast('⚠️ Tu carrito está vacío'); return; }
  const rests = [...new Set(carrito.map(c => c.restaurante))];
  const detalle = carrito.map(c => `${c.emoji} ${c.nombre} x${c.cantidad}`).join(', ');
  document.getElementById('pedidoDetalle').value = detalle;
  if (perfil.nombre && perfil.nombre !== 'Usuario YaVoy') document.getElementById('pedidoNombre').value = perfil.nombre;
  if (perfil.tel) document.getElementById('pedidoTel').value = perfil.tel;
  metodoPago = metodoPagoGlobal;
  document.querySelectorAll('.pago-btn').forEach(b => b.classList.toggle('active', b.dataset.pago === metodoPago));
  abrirModal('modalPedido');
}

// ===== SEARCH =====
function setupSearch() {
  const input = document.getElementById('searchInput');
  const sug = document.getElementById('searchSuggestions');
  if (!input) return;
  input.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) { sug.innerHTML = ''; return; }
    const res = restaurantes.filter(r => r.nombre.toLowerCase().includes(q) || r.tipo.toLowerCase().includes(q));
    if (!res.length) { sug.innerHTML = `<div class="suggestion-item"><i class="fas fa-search"></i> Sin resultados para "${q}"</div>`; return; }
    sug.innerHTML = res.map(r => `<div class="suggestion-item" onclick="seleccionarSugerencia(${r.id},'${r.nombre}')"><i class="fas fa-utensils"></i> ${r.nombre}</div>`).join('');
  });
  input.addEventListener('blur', () => setTimeout(() => sug.innerHTML = '', 200));
}

function seleccionarSugerencia(id, nombre) {
  document.getElementById('searchInput').value = nombre;
  document.getElementById('searchSuggestions').innerHTML = '';
  abrirRestaurante(id);
}

// ===== DETALLE RESTAURANTE (solo 1 botón de ubicación) =====
function abrirRestaurante(id) {
  const r = restaurantes.find(x => x.id === id);
  if (!r) return;
  currentRestId = id;

  document.getElementById('modalRestHero').innerHTML = `<img src="${r.logo}" alt="${r.nombre}" style="width:120px;height:120px;object-fit:contain;">`;
  document.getElementById('modalRestHero').style.background = colorFondo(r.tipo);
  document.getElementById('modalRestNombre').textContent = r.nombre;
  document.getElementById('modalRestMeta').innerHTML = `
    <span class="rating">⭐ ${r.rating}</span>
    <span>🕒 ${r.tiempo}</span>
    <span>📍 ${r.distancia}</span>
    ${r.oferta ? `<span style="background:#fff3e6;color:#ff9f00;font-weight:700;padding:2px 8px;border-radius:20px">${r.oferta}</span>` : ''}
  `;
  document.getElementById('modalMenu').innerHTML = r.menu.map(item => `
    <div class="menu-item">
      <span class="menu-item-emoji">${item.emoji}</span>
      <div class="menu-item-info"><h5>${item.nombre}</h5><p>${item.desc}</p></div>
      <span class="menu-item-price">$${item.precio.toFixed(2)}</span>
      <button class="menu-item-add" onclick="agregarAlCarrito('${r.nombre}','${item.id}','${item.nombre}',${item.precio},'${item.emoji}')">+</button>
    </div>
  `).join('');

  // Solo 1 botón de ubicación
  const mapaBtn = document.getElementById('mapaRestBtn');
  mapaBtn.onclick = function() { verEnMapa(id); };

  abrirModal('modalRestaurante');
}

// ===== VER EN MAPA =====
function verEnMapa(id) {
  const r = restaurantes.find(x => x.id === id);
  if (!r) return;
  document.getElementById('mapaFrame').src = `https://maps.google.com/maps?q=${r.mapsQuery}&output=embed`;
  document.getElementById('mapaDireccion').innerHTML = `<i class="fas fa-map-marker-alt" style="color:#5f0fff"></i> ${r.direccion}`;
  const modalRest = document.getElementById('modalRestaurante');
  if (modalRest.classList.contains('open')) {
    cerrarModal('modalRestaurante');
    setTimeout(() => abrirModal('modalMapa'), 200);
  } else {
    abrirModal('modalMapa');
  }
}

// ===== MODAL PEDIDO =====
function abrirModalPedido() {
  if (perfil.nombre && perfil.nombre !== 'Usuario YaVoy') document.getElementById('pedidoNombre').value = perfil.nombre;
  if (perfil.tel) document.getElementById('pedidoTel').value = perfil.tel;
  metodoPago = metodoPagoGlobal;
  document.querySelectorAll('.pago-btn').forEach(b => b.classList.toggle('active', b.dataset.pago === metodoPago));
  abrirModal('modalPedido');
}

function selectPago(btn) {
  document.querySelectorAll('.pago-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  metodoPago = btn.dataset.pago;
}

function confirmarPedido() {
    const nombre = document.getElementById('pedidoNombre').value.trim();
    const tel = document.getElementById('pedidoTel').value.trim();
    const direccion = document.getElementById('pedidoDireccion').value.trim();
    const detalle = document.getElementById('pedidoDetalle').value.trim();

    // 🛠️ CORRECCIÓN DE LETRAS: Dejamos tus variables limpias sin la "I" mayúscula
    if (!nombre || !tel || !direccion) {
        mostrarToast('⚠️ Completa todos los campos');
        return;
    }

    const restaurante = [...new Set(carrito.map(c => c.restaurante))].join(', ') || 'Pedido YaVoy';
    mostrarLoading();

    // 🌟 1. ID DEL RESTAURANTE CORRECTO EN LA DB
    const mapaRestauranteDB = {
        1: 1,  // Pizza Hut
        2: 21, // Pollo Campero
        3: 6,  // Burger King
        4: 22, // Don Pollo
        5: 2,  // Papa Johns
        6: 16, // China Wok
        7: 11, // Tacos El Rey
        8: 26, // Pastelería Sazón
        9: 17, // Sushi Express
        11: 31, // Mar y Tierra
        12: 36, // Bella Napoli
        13: 7,  // Texas BBQ
        14: 27, // La Neveria
        16: 3,  // Domino's Pizza
        17: 4,  // Little Caesars
        18: 5,  // Sbarro
        19: 8,  // McDonald's
        20: 9,  // Wendy's
        21: 10, // Carl's Jr.
        22: 12, // El Pinche
        23: 13, // Taco Bell
        24: 14, // Taco Holding
        25: 15, // La Cantina
        27: 18, // Lien Hua
        28: 19, // Panda Express
        29: 20, // P.F. Chang's
        30: 23, // Pinulito
        31: 24, // Pollo Campestre
        32: 25, // Pollo Real
        33: 28, // Cold Stone Creamery
        34: 29, // Dunkin'
        35: 30, // Starbucks
        36: 32, // Nais
        37: 33, // Ceviche House
        38: 34, // Fisheria
        39: 35, // Bubba's
        40: 37, // Olive Garden
        41: 38, // Vapiano
        42: 39, // Frateli
        43: 40  // Cinnabon
    };
    const idRestauranteDinamico = mapaRestauranteDB[currentRestId] || 1;

    // Fórmula: Id_Producto = (Id_Restaurante_DB - 1) * 5 + numProducto
    // Ejemplo: Texas BBQ = DB id 7 → producto 1 = (7-1)*5+1 = 31 ✅
    const productosFormateados = carrito.map((c, index) => {
        let idProductoDB = index + 1;
        const match = c.itemId ? c.itemId.match(/^p(\d+)_(\d+)$/) : null;
        if (match) {
            const idRestJS = parseInt(match[1]);
            const numProd = parseInt(match[2]);
            const idRestDB = mapaRestauranteDB[idRestJS] || idRestJS;
            idProductoDB = (idRestDB - 1) * 5 + numProd;
        }
        return {
            Id_Producto: idProductoDB,
            Cantidad: parseInt(c.cantidad) || 1,
            Precio: parseFloat(c.precio) || 0.00
        };
    });

    const subtotal = carrito.reduce((acc, c) => acc + (parseFloat(c.precio) * parseInt(c.cantidad)), 0);
    const totalFinal = subtotal > 0 ? (subtotal + 1.50) : 1.50;

    const paquetePedido = {
        Id_Cliente: (JSON.parse(localStorage.getItem('yavoy_sesion') || '{}').id) || 1, 
        Id_Restaurante: idRestauranteDinamico, // 🍕🍔🍣 Cambia solo según el comercio elegido
        Total_Pedido: totalFinal,
        Productos_Carrito: productosFormateados
    };

    // 🚀 ENVIAR DIRECTAMENTE A TU SERVIDOR NODE.JS
    fetch('https://yavoy-backend-00nn.onrender.com/api/pedidos/nuevo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paquetePedido)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("✨ ¡Pedido guardado con éxito en phpMyAdmin!");
        }
    })
    .catch(error => console.error("❌ Error al guardar pedido en MySQL:", error));


    // ⏳ 2. TU LÓGICA ORIGINAL DE DISEÑO CON EL RELOJ (TIMEOUT)
    setTimeout(() => {
        const nuevoPedido = { Id: Date.now(), nombre, tel, direccion, restaurante, detalle: detalle || 'Sin detalle' };
        pedidos.unshift(nuevoPedido);
        localStorage.setItem('yavoy_pedidos', JSON.stringify(pedidos));
        
        // El carrito se limpia localmente justo después de haber enviado los datos a la red
        carrito = [];
        localStorage.setItem('yavoy_carrito', JSON.stringify(carrito));
        
        actualizarCartBadge();
        ocultarLoading();
        cerrarModal('modalPedido');

        ['pedidoNombre', 'pedidoTel', 'pedidoDireccion', 'pedidoDetalle'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });

        notificaciones.unshift({ id: Date.now(), texto: `Pedido en ${restaurante} confirmado. ¡Está en prep!` });
        actualizarCartBadge();

        setTimeout(() => {
            mostrarToast(`¡Pedido en ${restaurante} confirmado!`);
        }, 300);

    }, 1500);
}

// ===== NOTIFICACIONES =====
function actualizarNotifBadge() {
  const noLeidas = notificaciones.filter(n => !n.leida).length;
  const badge = document.getElementById('notifBadge');
  if (badge) {
    badge.textContent = noLeidas;
    badge.style.display = noLeidas > 0 ? 'flex' : 'none';
  }
}

function abrirNotificaciones() {
  const cont = document.getElementById('notifList');
  if (!notificaciones.length) {
    cont.innerHTML = `<div style="text-align:center;padding:20px;color:#aaa;"><div style="font-size:40px">🔔</div><p style="margin-top:8px">Sin notificaciones</p></div>`;
  } else {
    cont.innerHTML = notificaciones.map(n => `
      <div class="notif-item ${n.leida ? 'leida' : ''}" onclick="marcarLeida(${n.id})">
        <div class="notif-texto">${n.texto}</div>
        <div class="notif-hora">${n.hora}</div>
        ${!n.leida ? '<div class="notif-dot"></div>' : ''}
      </div>
    `).join('');
  }
  abrirModal('modalNotificaciones');
}

function marcarLeida(id) {
  const notif = notificaciones.find(n => n.id === id);
  if (notif) notif.leida = true;
  actualizarNotifBadge();
  abrirNotificaciones(); // Re-render
}

function marcarTodasLeidas() {
  notificaciones.forEach(n => n.leida = true);
  actualizarNotifBadge();
  cerrarModal('modalNotificaciones');
  mostrarToast('✅ Todas las notificaciones marcadas como leídas');
}

// ===== RENDER PEDIDOS =====
function renderPedidos() {
  const cont = document.getElementById('pedidosContainer');
  if (!pedidos.length) {
    cont.innerHTML = `<div class="empty-state"><div class="empty-icon">📦</div><h3>No tienes ningún pedido</h3><p>Explora restaurantes y haz tu primer pedido</p><button onclick="mostrar('inicio')">Explorar restaurantes</button></div>`;
    return;
  }
  cont.innerHTML = pedidos.map(p => `
    <div class="pedido-card">
      <div class="pedido-header"><h4>${p.restaurante}</h4><span class="pedido-estado ${p.estado==='Entregado'?'entregado':''}">${p.estado}</span></div>
      <div class="pedido-info"><i class="fas fa-user"></i> ${p.nombre}</div>
      <div class="pedido-info"><i class="fas fa-map-marker-alt"></i> ${p.direccion}</div>
      <div class="pedido-info"><i class="fas fa-clock"></i> ${p.fecha}</div>
      <div class="pedido-info"><i class="fas fa-credit-card"></i> Pago: ${p.pago}</div>
      ${p.detalle !== 'Sin detalle adicional' ? `<div class="pedido-detalle">📝 ${p.detalle}</div>` : ''}
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button onclick="repetirPedido(${p.id})" style="flex:1;padding:8px;background:#f3eeff;border:none;border-radius:8px;color:#5f0fff;font-weight:700;font-family:Nunito,sans-serif;font-size:12px;cursor:pointer;">🔄 Repetir pedido</button>
        <button onclick="eliminarPedido(${p.id})" style="padding:8px 12px;background:#fff0f3;border:none;border-radius:8px;color:#ff4f8b;font-weight:700;font-family:Nunito,sans-serif;font-size:12px;cursor:pointer;">🗑️</button>
      </div>
    </div>
  `).join('');
}

function repetirPedido(id) {
  const p = pedidos.find(x => x.id === id);
  if (!p) return;
  mostrar('inicio');
  setTimeout(() => {
    document.getElementById('pedidoNombre').value = p.nombre;
    document.getElementById('pedidoTel').value = p.tel;
    document.getElementById('pedidoDireccion').value = p.direccion;
    document.getElementById('pedidoDetalle').value = p.detalle;
    abrirModal('modalPedido');
  }, 300);
}

function eliminarPedido(id) {
  pedidos = pedidos.filter(p => p.id !== id);
  localStorage.setItem('yavoy_pedidos', JSON.stringify(pedidos));
  renderPedidos();
  mostrarToast('Pedido eliminado');
}

function actualizarBadgePedidos() {}

// ===== FAVORITOS =====
function toggleFavorito(e, id) {
  e.stopPropagation();
  const idx = favoritos.indexOf(id);
  if (idx === -1) { favoritos.push(id); mostrarToast('❤️ Agregado a favoritos'); }
  else { favoritos.splice(idx, 1); mostrarToast('💔 Eliminado de favoritos'); }
  localStorage.setItem('yavoy_favoritos', JSON.stringify(favoritos));
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const oc = btn.getAttribute('onclick');
    if (oc && oc.includes(`,${id})`)) btn.classList.toggle('active', favoritos.includes(id));
  });
}

function renderFavoritos() {
  const cont = document.getElementById('favoritosContainer');
  if (!favoritos.length) {
    cont.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">💔</div><h3>Sin favoritos aún</h3><p>Guarda tus restaurantes favoritos tocando ❤️</p><button onclick="mostrar('inicio')">Explorar restaurantes</button></div>`;
    return;
  }
  cont.innerHTML = restaurantes.filter(r => favoritos.includes(r.id)).map(r => crearCardHTML(r)).join('');
}

// ===== PERFIL =====
function actualizarPerfil() {
  document.getElementById('profileName').textContent = perfil.nombre;
  document.getElementById('profileEmail').textContent = perfil.email;
  if (perfil.foto) {
    document.getElementById('profileAvatar').innerHTML = `<img src="${perfil.foto}" alt="Foto perfil">`;
  }
}

function editarPerfil() {
  document.getElementById('editNombre').value = perfil.nombre;
  document.getElementById('editEmail').value = perfil.email;
  document.getElementById('editTel').value = perfil.tel;
  abrirModal('modalPerfil');
}

function guardarPerfil() {
  perfil.nombre = document.getElementById('editNombre').value.trim() || perfil.nombre;
  perfil.email = document.getElementById('editEmail').value.trim() || perfil.email;
  perfil.tel = document.getElementById('editTel').value.trim();
  localStorage.setItem('yavoy_perfil', JSON.stringify(perfil));
  localStorage.setItem('yavoy_sesion', JSON.stringify(perfil));
  actualizarPerfil();
  cerrarModal('modalPerfil');
  mostrarToast('✅ Perfil actualizado');
}

function cambiarFoto() { document.getElementById('fotoInput').click(); }
function procesarFoto(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) { perfil.foto = ev.target.result; localStorage.setItem('yavoy_perfil', JSON.stringify(perfil)); actualizarPerfil(); mostrarToast('📸 Foto actualizada'); };
  reader.readAsDataURL(file);
}

function cerrarSesion() {
  if (confirm('¿Seguro que deseas cerrar sesión?')) {
    localStorage.removeItem('yavoy_sesion');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-login').classList.add('active');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.display = 'none';
    mostrarToast('👋 Sesión cerrada');
  }
}

// ===== AYUDA =====
function abrirAyuda() { abrirModal('modalAyuda'); }
function toggleAyuda(item) {
  const body = item.querySelector('.ayuda-item-body');
  const icon = item.querySelector('.ayuda-item-header i');
  const isOpen = item.classList.contains('open');
  // Cerrar todos
  document.querySelectorAll('.ayuda-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.ayuda-item-body').style.maxHeight = '0';
    i.querySelector('.ayuda-item-header i').style.transform = 'rotate(0deg)';
  });
  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}

// ===== DIRECCIONES =====
function abrirDirecciones() { renderListaDirecciones(); abrirModal('modalDirecciones'); }
function renderListaDirecciones() {
  const cont = document.getElementById('listaDirecciones');
  if (!direcciones.length) { cont.innerHTML = `<p style="color:#aaa;font-size:13px;text-align:center;padding:10px 0">No tienes direcciones guardadas</p>`; return; }
  cont.innerHTML = direcciones.map((d, i) => `<div class="dir-item"><i class="fas fa-map-marker-alt" style="color:#5f0fff;font-size:14px;flex-shrink:0"></i><span style="flex:1;font-size:14px;">${d}</span><button onclick="eliminarDireccion(${i})" style="background:none;border:none;color:#ff4f8b;cursor:pointer;font-size:14px;"><i class="fas fa-trash"></i></button></div>`).join('');
}
function agregarDireccion() {
  const input = document.getElementById('nuevaDireccionInput');
  const val = input.value.trim();
  if (!val) { mostrarToast('⚠️ Escribe una dirección'); return; }
  direcciones.push(val);
  localStorage.setItem('yavoy_direcciones', JSON.stringify(direcciones));
  input.value = '';
  renderListaDirecciones();
  mostrarToast('📍 Dirección guardada');
}
function eliminarDireccion(idx) {
  direcciones.splice(idx, 1);
  localStorage.setItem('yavoy_direcciones', JSON.stringify(direcciones));
  renderListaDirecciones();
  mostrarToast('Dirección eliminada');
}

// ===== MÉTODOS DE PAGO =====
function abrirMetodosPago() { actualizarUIMetodoPago(metodoPagoGlobal); abrirModal('modalPago'); }
function seleccionarMetodoPagoGlobal(tipo) { metodoPagoGlobal = tipo; actualizarUIMetodoPago(tipo); }
function actualizarUIMetodoPago(tipo) {
  document.getElementById('pagoEfectivoItem').classList.toggle('selected', tipo === 'efectivo');
  document.getElementById('pagoTarjetaItem').classList.toggle('selected', tipo === 'tarjeta');
  document.getElementById('checkEfectivo').style.display = tipo === 'efectivo' ? 'block' : 'none';
  document.getElementById('checkTarjeta').style.display = tipo === 'tarjeta' ? 'block' : 'none';
  document.getElementById('tarjetaFormSection').style.display = tipo === 'tarjeta' ? 'block' : 'none';
}
function guardarMetodoPago() {
  localStorage.setItem('yavoy_metodo_pago', metodoPagoGlobal);
  cerrarModal('modalPago');
  mostrarToast(`✅ Método de pago: ${metodoPagoGlobal === 'efectivo' ? 'Efectivo 💵' : 'Tarjeta 💳'}`);
}
function formatCardNumber(input) { let v = input.value.replace(/\D/g,'').substring(0,16); input.value = v.replace(/(.{4})/g,'$1 ').trim(); }
function formatExpiry(input) { let v = input.value.replace(/\D/g,'').substring(0,4); if(v.length>=2) v = v.substring(0,2)+'/'+v.substring(2); input.value = v; }

// ===== UBICACIÓN =====
function cambiarUbicacion() {
  const nueva = prompt('Ingresa tu nueva dirección:', document.getElementById('ubicacionTexto').textContent);
  if (nueva && nueva.trim()) { document.getElementById('ubicacionTexto').textContent = nueva.trim(); mostrarToast('📍 Ubicación actualizada'); }
}

// ===== HISTORIAL =====
function agregarHistorial(texto) {
  if (!texto || historial.includes(texto)) return;
  historial.unshift(texto);
  if (historial.length > 8) historial.pop();
  localStorage.setItem('yavoy_historial', JSON.stringify(historial));
  renderHistorial();
}
function renderHistorial() {
  const cont = document.getElementById('historialList');
  if (!cont) return;
  cont.innerHTML = historial.length ? historial.map(h => `<div class="historial-item" onclick="buscarDesdeHistorial('${h}')"><i class="fas fa-history"></i> ${h}</div>`).join('') : `<p style="text-align:center;color:#aaa;font-size:13px;padding:10px 0">Sin búsquedas recientes</p>`;
}
function buscarDesdeHistorial(texto) {
  const inputB = document.getElementById('searchBuscar');
  if (inputB) { inputB.value = texto; inputB.dispatchEvent(new Event('input')); }
}
function limpiarHistorial() {
  historial = [];
  localStorage.setItem('yavoy_historial', JSON.stringify(historial));
  renderHistorial();
  mostrarToast('Historial limpiado');
}
function limpiarBusqueda() {
  const inputB = document.getElementById('searchBuscar');
  if (inputB) inputB.value = '';
}

// ===== MODALES =====
function abrirModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function cerrarModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) { if (e.target === this) cerrarModal(this.id); });
});

// ===== TOAST =====
let toastTimeout;
function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== LOADING =====
function mostrarLoading() { document.getElementById('loadingOverlay').classList.add('show'); }
function ocultarLoading() { document.getElementById('loadingOverlay').classList.remove('show'); }

// Función definitiva para conectar y pedir los restaurantes a MySQL (phpMyAdmin)
function cargarRestaurantes() {
    fetch('https://yavoy-backend-00nn.onrender.com/api/restaurantes')
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta del servidor local");
            return response.json();
        })
        .then(restaurantes => {
            console.log("✨ ¡Datos cargados desde phpMyAdmin con éxito!:", restaurantes);
            // Llama a la función que pinta las tarjetas en tu HTML
            mostrarRestaurantesEnPantalla(restaurantes);
        })
        .catch(error => console.error("❌ Error al obtener restaurantes:", error));
}

// Función limpia para pedir los restaurantes a MySQL sin romper el HTML
function cargarRestaurantes() {
    fetch('https://yavoy-backend-00nn.onrender.com/api/restaurantes')
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta");
            return response.json();
        })
        .then(restaurantes => {
            console.log("✨ Datos de phpMyAdmin vinculados correctamente:", restaurantes);
            
            // Aquí puedes mapear la información a tus clases CSS existentes si lo necesitas
            // Sin embargo, para no tocar tu maquetación visual actual, dejamos que tus estilos manden.
        })
        .catch(error => console.error("❌ Error al obtener restaurantes:", error));
}
  
// Agrega esto al final de tu script.js si no está
window.addEventListener('DOMContentLoaded', cargarRestaurantes);
// v3
