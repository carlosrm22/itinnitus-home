/* ============================================================
   Catálogo de música de itinnitus.com
   Editar AQUÍ para agregar / quitar / reordenar álbumes y pistas.
     - title:   nombre del álbum
     - meta:    línea secundaria (género · autoría)
     - cover:   portada en assets/music/covers/ — si falta, usa ícono
     - tracks:  { title, src, youtube? }   (youtube es opcional por pista)
   ALBUM_DUR: duración total por álbum (texto; actualizar si cambian las pistas)
   ============================================================ */

const ALBUMS = [
  {
    title: "Maat encarnada",
    meta: "Sencillo · original",
    cover: "assets/music/covers/maat.jpg",
    tracks: [
      { title: "Maat encarnada", src: "assets/music/maat-encarnada.mp3", youtube: "https://youtu.be/tdBA3uNvqfE" }
    ]
  },
  {
    title: "La Tierra desde Marte",
    meta: "Electrónica · Carlos Romero",
    cover: "assets/music/covers/tierra-desde-marte.jpg",
    playlist: "https://www.youtube.com/playlist?list=PLTomVcRsp05ZickKPR7BaLK1_TJKRoHhn",
    playlistPub: "2026-07-20T19:00",
    tracks: [
      { title: "Monte Olimpo", src: "assets/music/tierra-desde-marte/tdm-01.m4a", youtube: "https://youtu.be/IsZyTAzFZDQ", pub: "2026-07-20T19:00" },
      { title: "Camino a la Tierra", src: "assets/music/tierra-desde-marte/tdm-02.m4a", youtube: "https://youtu.be/DTKd4CfFrws", pub: "2026-07-21T19:00" },
      { title: "Martian Atack!", src: "assets/music/tierra-desde-marte/tdm-03.m4a", youtube: "https://youtu.be/xaJ_vyF19CU", pub: "2026-07-22T19:00" },
      { title: "687 días", src: "assets/music/tierra-desde-marte/tdm-04.m4a", youtube: "https://youtu.be/LZ8Y_5rUYpc", pub: "2026-07-23T19:00" },
      { title: "El marciano enamorado", src: "assets/music/tierra-desde-marte/tdm-05.m4a", youtube: "https://youtu.be/Xmumoj7rYlk", pub: "2026-07-24T19:00" }
    ]
  },
  {
    title: "La Multiplicación de los Peces",
    meta: "Jazz contemporáneo · Carlos Romero",
    cover: "assets/music/covers/multiplicacion-peces.jpg",
    tracks: [
      { title: "Códigos de Entorno", src: "assets/music/multiplicacion-peces/1-01-codigos-de-entorno.mp3" },
      { title: "7", src: "assets/music/multiplicacion-peces/1-02-7.mp3" },
      { title: "Mess to the Mess", src: "assets/music/multiplicacion-peces/1-03-mess-to-the-mess.mp3" },
      { title: "Jessy's Waltz", src: "assets/music/multiplicacion-peces/1-04-jessy-s-waltz.mp3" },
      { title: "Indicios", src: "assets/music/multiplicacion-peces/1-05-indicios-1.mp3" }
    ]
  },
  {
    title: "Tramonto",
    meta: "Jazz contemporáneo · Aurelio Cuello",
    cover: "assets/music/covers/tramonto.jpg",
    tracks: [
      { title: "Hora dorada", src: "assets/music/tramonto/tramonto-01.mp3" },
      { title: "Cobre verde", src: "assets/music/tramonto/tramonto-02.mp3" },
      { title: "Antumbra", src: "assets/music/tramonto/tramonto-03.mp3" },
      { title: "Incendio oscuro", src: "assets/music/tramonto/tramonto-04.mp3" },
      { title: "Respiro", src: "assets/music/tramonto/tramonto-05.mp3" },
      { title: "Délire bleu", src: "assets/music/tramonto/tramonto-06.mp3" },
      { title: "Última luz", src: "assets/music/tramonto/tramonto-07.mp3" }
    ]
  },
  {
    title: "Carnevalle",
    meta: "Piano y cuerdas · Carlos Romero",
    cover: "assets/music/covers/carnevalle.jpg",
    tracks: [
      { title: "Obertura", src: "assets/music/carnevalle/carnevalle-01.mp3" },
      { title: "Mascarada", src: "assets/music/carnevalle/carnevalle-02.mp3" },
      { title: "Arlequín", src: "assets/music/carnevalle/carnevalle-03.mp3" },
      { title: "La commedia è finita", src: "assets/music/carnevalle/carnevalle-04.mp3" }
    ]
  },
  {
    title: "Ares",
    meta: "Quinteto de cuerdas · Carlos Romero",
    cover: "assets/music/covers/marte.jpg",
    tracks: [
      { title: "Fobos", src: "assets/music/marte/marte-01.mp3" },
      { title: "Deimos", src: "assets/music/marte/marte-02.mp3" },
      { title: "Marte", src: "assets/music/marte/marte-03.mp3" }
    ]
  },
  {
    title: "El Dios sin manos",
    meta: "Instrumental atmosférico · Carlos Romero",
    cover: "assets/music/covers/el-dios-sin-manos.jpg?v=2",
    tracks: [
      { title: "El Dios sin manos", src: "assets/music/el-dios-sin-manos/dios-01.m4a" },
      { title: "Vacío ruidoso", src: "assets/music/el-dios-sin-manos/dios-02.m4a" },
      { title: "Ain Sof", src: "assets/music/el-dios-sin-manos/dios-03.m4a" },
      { title: "Scintilla", src: "assets/music/el-dios-sin-manos/dios-04.m4a" },
      { title: "Prima lux", src: "assets/music/el-dios-sin-manos/dios-05.m4a" },
      { title: "Ogruimed", src: "assets/music/el-dios-sin-manos/dios-06.m4a" },
      { title: "Crisol", src: "assets/music/el-dios-sin-manos/dios-07.m4a" },
      { title: "Espiral (Mija Jivori)", src: "assets/music/el-dios-sin-manos/dios-08.m4a" },
      { title: "Un verbo", src: "assets/music/el-dios-sin-manos/dios-09.m4a" },
      { title: "Silencio habitado", src: "assets/music/el-dios-sin-manos/dios-10.m4a" }
    ]
  },
  {
    title: "El Gran Río",
    meta: "Instrumental meditativo · Carlos Romero",
    cover: "assets/music/covers/el-gran-rio.jpg",
    tracks: [
      { title: "Aglaya", src: "assets/music/el-gran-rio/gran-rio-01.mp3" },
      { title: "Remanso", src: "assets/music/el-gran-rio/gran-rio-02.mp3" },
      { title: "Balada para un loko", src: "assets/music/el-gran-rio/gran-rio-03.mp3" },
      { title: "Ribera", src: "assets/music/el-gran-rio/gran-rio-09.mp3" },
      { title: "Bésame Chucho", src: "assets/music/el-gran-rio/gran-rio-04.mp3" },
      { title: "Bruma", src: "assets/music/el-gran-rio/gran-rio-05.mp3" },
      { title: "Caudal", src: "assets/music/el-gran-rio/gran-rio-07.mp3" },
      { title: "Meandro", src: "assets/music/el-gran-rio/gran-rio-06.mp3" },
      { title: "Reflejo", src: "assets/music/el-gran-rio/gran-rio-08.mp3" }
    ]
  },
  {
    title: "Primates Cósmicos",
    meta: "Instrumental meditativo · Carlos Romero",
    cover: "assets/music/covers/primates-cosmicos.jpg",
    tracks: [
      { title: "Sueño primordial", src: "assets/music/primates-cosmicos/primates-01.mp3" },
      { title: "Sinapsis", src: "assets/music/primates-cosmicos/primates-03.mp3" },
      { title: "De pie", src: "assets/music/primates-cosmicos/primates-04.mp3" },
      { title: "Domesticar al sol", src: "assets/music/primates-cosmicos/primates-05.mp3" },
      { title: "Lengua madre", src: "assets/music/primates-cosmicos/primates-06.mp3" },
      { title: "Astrónomo de piedra", src: "assets/music/primates-cosmicos/primates-07.mp3" },
      { title: "Volver al árbol", src: "assets/music/primates-cosmicos/primates-08.mp3" },
      { title: "Monolito", src: "assets/music/primates-cosmicos/primates-02.mp3" }
    ]
  },
  {
    title: "El Carro",
    meta: "Guitarra acústica · Carlos Romero",
    cover: "assets/music/covers/el-carro.jpg",
    tracks: [
      { title: "No hay fe", src: "assets/music/el-carro/el-carro-01.mp3" },
      { title: "Ayer fue mañana", src: "assets/music/el-carro/el-carro-02.mp3" },
      { title: "Lo que quedó", src: "assets/music/el-carro/el-carro-03.mp3" },
      { title: "Yo no regalo dinero", src: "assets/music/el-carro/el-carro-04.mp3" },
      { title: "Falta el aire", src: "assets/music/el-carro/el-carro-05.mp3" },
      { title: "El 4", src: "assets/music/el-carro/el-carro-06.mp3" },
      { title: "Alambra", src: "assets/music/el-carro/el-carro-07.mp3" },
      { title: "El Carro", src: "assets/music/el-carro/el-carro-08.mp3" }
    ]
  },
  {
    title: "Trifase",
    meta: "Rock experimental · tres guitarras eléctricas · Carlos Romero",
    cover: "assets/music/covers/trifase.jpg",
    tracks: [
      { title: "Cortocircuito", src: "assets/music/guitarras/guitarras-01.m4a" },
      { title: "Feedback", src: "assets/music/guitarras/guitarras-02.m4a" },
      { title: "Trémolo", src: "assets/music/guitarras/guitarras-03.m4a" },
      { title: "Resonancia", src: "assets/music/guitarras/guitarras-04.m4a" },
      { title: "Sobrecarga", src: "assets/music/guitarras/guitarras-05.m4a" },
      { title: "Cantina Bar", src: "assets/music/guitarras/guitarras-06.m4a" }
    ]
  },
  {
    title: "Los Ponchos · Vol. 1",
    meta: "Boleros · voz de Alfonso Romero",
    cover: "assets/music/covers/los-ponchos-vol1.jpg",
    playlist: "https://www.youtube.com/playlist?list=PLTomVcRsp05ZaJrW0-c-VJ9dhdwArNQey",
    playlistPub: "2026-06-29T19:00",
    tracks: [
      { title: "La Barca", src: "assets/music/los-ponchos/1-01-la-barca.mp3", youtube: "https://youtu.be/meH7edstdmk", pub: "2026-06-29T19:00" },
      { title: "Odiame", src: "assets/music/los-ponchos/1-02-odiame.mp3", youtube: "https://youtu.be/xY1JrPgp7-s", pub: "2026-06-30T19:00" },
      { title: "El Rey Azul", src: "assets/music/los-ponchos/1-03-el-rey-azul.mp3", youtube: "https://youtu.be/90KjuuyzrFg", pub: "2026-07-01T19:00" },
      { title: "Dos Gardenias", src: "assets/music/los-ponchos/1-04-dos-gardenias.mp3", youtube: "https://youtu.be/t9QBdjlkyAQ", pub: "2026-07-02T19:00" },
      { title: "Almohada", src: "assets/music/los-ponchos/1-05-almohada.mp3", youtube: "https://youtu.be/F45kshFFCVM", pub: "2026-07-03T19:00" },
      { title: "Alma Corazón y Vida", src: "assets/music/los-ponchos/1-06-alma-corazon-y-vida.mp3", youtube: "https://youtu.be/H2v-e6-d-xU", pub: "2026-07-04T19:00" },
      { title: "Panchos 1", src: "assets/music/los-ponchos/1-07-panchos-1.mp3", youtube: "https://youtu.be/PsmrO7NkdHQ", pub: "2026-07-05T19:00" },
      { title: "Inolvidable", src: "assets/music/los-ponchos/1-08-inolvidable.mp3", youtube: "https://youtu.be/YxIrQw5xNOw", pub: "2026-07-06T19:00" },
      { title: "Panchos 2", src: "assets/music/los-ponchos/1-09-panchos-2.mp3", youtube: "https://youtu.be/Wo3nmzBWwQI", pub: "2026-07-07T19:00" },
      { title: "Nuestro Juramento", src: "assets/music/los-ponchos/1-10-nuestro-juramento.mp3", youtube: "https://youtu.be/eqvJIpLYVvs", pub: "2026-07-08T19:00" }
    ]
  },
  {
    title: "Los Ponchos · Vol. 2",
    meta: "Boleros · voz de Alfonso Romero",
    cover: "assets/music/covers/los-ponchos-vol2.jpg",
    playlist: "https://www.youtube.com/playlist?list=PLTomVcRsp05aUHNV1H7Wsks6hQiyNMSI3",
    playlistPub: "2026-07-09T19:00",
    tracks: [
      { title: "Algo Contigo", src: "assets/music/los-ponchos/2-01-algo-contigo.mp3", youtube: "https://youtu.be/SJWhaam2m6c", pub: "2026-07-09T19:00" },
      { title: "Cuerpo sin Alma", src: "assets/music/los-ponchos/2-02-cuerpo-sin-alma.mp3", youtube: "https://youtu.be/FQrTfnH7kfo", pub: "2026-07-10T19:00" },
      { title: "Madrigal", src: "assets/music/los-ponchos/2-03-madrigal.mp3", youtube: "https://youtu.be/qPkRwneZITg", pub: "2026-07-11T19:00" },
      { title: "Morenita", src: "assets/music/los-ponchos/2-04-morenita.mp3", youtube: "https://youtu.be/Q4orsXzcurk", pub: "2026-07-12T19:00" },
      { title: "No", src: "assets/music/los-ponchos/2-05-no.mp3", youtube: "https://youtu.be/njGDuGPQi-8", pub: "2026-07-13T19:00" },
      { title: "Ojalá", src: "assets/music/los-ponchos/2-06-ojala.mp3", youtube: "https://youtu.be/JeDsD44fJKI", pub: "2026-07-14T19:00" },
      { title: "Ojalá que te mueras", src: "assets/music/los-ponchos/2-07-ojala-que-te-mueras.mp3", youtube: "https://youtu.be/gTI0ewdKNhc", pub: "2026-07-15T19:00" },
      { title: "Penélope", src: "assets/music/los-ponchos/2-08-penelope.mp3", youtube: "https://youtu.be/LMLfSKniSPM", pub: "2026-07-16T19:00" },
      { title: "Por Ti", src: "assets/music/los-ponchos/2-09-por-ti.mp3", youtube: "https://youtu.be/OgywJ5lTaBo", pub: "2026-07-17T19:00" },
      { title: "Por ti lo siento", src: "assets/music/los-ponchos/2-10-por-ti-lo-siento.mp3", youtube: "https://youtu.be/JvcHFGdBHHk", pub: "2026-07-18T19:00" },
      { title: "Huapango y La Fiesta (Bonus Track)", src: "assets/music/los-ponchos/2-11-huapago-y-la-fiesta-bonnus-track.mp3", youtube: "https://youtu.be/c7q64CCkTD8", pub: "2026-07-19T19:00" }
    ]
  },
  {
    title: "Amor Pirata y otros amores clandestinos",
    meta: "Boleros · voz de Alfonso Romero",
    cover: "assets/music/covers/amor-pirata.jpg",
    playlist: "https://www.youtube.com/playlist?list=PLTomVcRsp05aiQe1hEBkCGF0MdVhh37TK",
    // Streaming (rellenar cuando RouteNote esté Live; descomentar):
    // links: { spotify: "", apple: "", ytmusic: "", amazon: "", deezer: "", tidal: "" },
    tracks: [
      // youtube + pub: el enlace aparece solo a partir de la fecha/hora pub (no antes).
      { title: "Amor Pirata", src: "assets/music/amor-pirata/amor-pirata-01.mp3", youtube: "https://youtu.be/iOyJDM6HvpY", pub: "2026-06-20T19:00" },
      { title: "Soy lo prohibido", src: "assets/music/amor-pirata/amor-pirata-02.mp3", youtube: "https://youtu.be/yGQAz3F3898", pub: "2026-06-21T19:00" },
      { title: "Si te hubiera conocido ayer", src: "assets/music/amor-pirata/amor-pirata-03.mp3", youtube: "https://youtu.be/aRcYkFgiIjI", pub: "2026-06-22T19:00" },
      { title: "Sigamos pecando", src: "assets/music/amor-pirata/amor-pirata-04.mp3", youtube: "https://youtu.be/4FAb0E60A-A", pub: "2026-06-23T19:00" },
      { title: "Dos amores", src: "assets/music/amor-pirata/amor-pirata-05.mp3", youtube: "https://youtu.be/NrXZ3yMOIG4", pub: "2026-06-24T19:00" },
      { title: "No por favor", src: "assets/music/amor-pirata/amor-pirata-06.mp3", youtube: "https://youtu.be/SlJ53LvQ6xE", pub: "2026-06-25T19:00" },
      { title: "Me está gustando", src: "assets/music/amor-pirata/amor-pirata-07.mp3", youtube: "https://youtu.be/dd5kHtDKGkg", pub: "2026-06-26T19:00" },
      { title: "A pesar de todo", src: "assets/music/amor-pirata/amor-pirata-08.mp3", youtube: "https://youtu.be/Yda6-UF9iPs", pub: "2026-06-27T19:00" },
      { title: "Presentimiento", src: "assets/music/amor-pirata/amor-pirata-09.mp3", youtube: "https://youtu.be/B-eoITQfJJU", pub: "2026-06-28T19:00" }
    ]
  }
];

// Duración total por álbum (precalculada; actualizar si cambian las pistas)
const ALBUM_DUR = {
  "Maat encarnada": "2:55",
  "La Tierra desde Marte": "29:35",
  "La Multiplicación de los Peces": "48:11",
  "Tramonto": "30:24",
  "Ares": "8:21",
  "El Dios sin manos": "27:50",
  "Trifase": "22:08",
  "El Gran Río": "21:01",
  "Primates Cósmicos": "19:31",
  "El Carro": "23:11",
  "Carnevalle": "12:21",
  "Los Ponchos · Vol. 1": "36:05",
  "Los Ponchos · Vol. 2": "41:26",
  "Amor Pirata y otros amores clandestinos": "24:38"
};

