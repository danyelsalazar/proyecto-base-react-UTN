const users = [
  {
    id: 1,
    firstName: "Leanne",
    lastName: "Graham",
    address: { country: "USA" },
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
    lastMessage: "Después probamos el scroll del chat",
    lastTime: "09:13",
    messages: [
      { id: "msg-1-1", author: "Leanne", text: "Hola! Cómo estás?", time: "09:10" },
      { id: "msg-1-2", author: "me", text: "Todo bien, trabajando en la app de mensajería", time: "09:12" },
      { id: "msg-1-3", author: "Leanne", text: "Genial, después probamos el scroll del chat", time: "09:13" }
    ]
  },
  {
    id: 2,
    firstName: "Ervin",
    lastName: "Howell",
    address: { country: "Canada" },
    avatar: "https://i.pravatar.cc/150?img=2",
    online: false,
    lastMessage: "Perfecto, avisame cuando esté listo",
    lastTime: "10:04",
    messages: [
      { id: "msg-2-1", author: "Ervin", text: "Tenés el diseño del chat listo?", time: "10:01" },
      { id: "msg-2-2", author: "me", text: "Sí, estoy maquetando la parte de mensajes", time: "10:03" },
      { id: "msg-2-3", author: "Ervin", text: "Perfecto, avisame cuando esté listo", time: "10:04" }
    ]
  },
  {
    id: 3,
    firstName: "Clementine",
    lastName: "Bauch",
    address: { country: "Germany" },
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
    lastMessage: "Funciona bien la API",
    lastTime: "11:22",
    messages: [
      { id: "msg-3-1", author: "Clementine", text: "Probaste la API de mensajes?", time: "11:20" },
      { id: "msg-3-2", author: "me", text: "Sí, funciona bien y responde rápido", time: "11:22" }
    ]
  },
  {
    id: 4,
    firstName: "Patricia",
    lastName: "Lebsack",
    address: { country: "Spain" },
    avatar: "https://i.pravatar.cc/150?img=4",
    online: false,
    lastMessage: "Después seguimos con esto",
    lastTime: "12:01",
    messages: [
      { id: "msg-4-1", author: "Patricia", text: "Estoy en reunión ahora", time: "12:00" },
      { id: "msg-4-2", author: "me", text: "Dale, después seguimos con esto", time: "12:01" }
    ]
  },
  {
    id: 5,
    firstName: "Chelsey",
    lastName: "Dietrich",
    address: { country: "France" },
    avatar: "https://i.pravatar.cc/150?img=5",
    online: true,
    lastMessage: "Lo arreglo ahora",
    lastTime: "13:16",
    messages: [
      { id: "msg-5-1", author: "Chelsey", text: "Viste el bug en los mensajes?", time: "13:15" },
      { id: "msg-5-2", author: "me", text: "Sí, lo arreglo ahora", time: "13:16" }
    ]
  },
  {
    id: 6,
    firstName: "Dennis",
    lastName: "Schulist",
    address: { country: "Italy" },
    avatar: "https://i.pravatar.cc/150?img=6",
    online: false,
    lastMessage: "Recién lo subo al repo",
    lastTime: "14:41",
    messages: [
      { id: "msg-6-1", author: "Dennis", text: "Subiste el repositorio?", time: "14:40" },
      { id: "msg-6-2", author: "me", text: "Recién lo subo al repo", time: "14:41" }
    ]
  },
  {
    id: 7,
    firstName: "Kurtis",
    lastName: "Weissnat",
    address: { country: "Argentina" },
    avatar: "https://i.pravatar.cc/150?img=7",
    online: true,
    lastMessage: "Dale probemos mandar audios después",
    lastTime: "15:06",
    messages: [
      { id: "msg-7-1", author: "Kurtis", text: "Che probamos el chat en vivo?", time: "15:05" },
      { id: "msg-7-2", author: "me", text: "Dale probemos mandar audios después", time: "15:06" }
    ]
  },
  {
    id: 8,
    firstName: "Nicholas",
    lastName: "Runolfsdottir",
    address: { country: "Iceland" },
    avatar: "https://i.pravatar.cc/150?img=8",
    online: false,
    lastMessage: "Sí, con scrollIntoView anda perfecto",
    lastTime: "16:11",
    messages: [
      { id: "msg-8-1", author: "Nicholas", text: "Funciona el scroll automático?", time: "16:10" },
      { id: "msg-8-2", author: "me", text: "Sí, con scrollIntoView anda perfecto", time: "16:11" }
    ]
  },
  {
    id: 9,
    firstName: "Glenna",
    lastName: "Reichert",
    address: { country: "Brazil" },
    avatar: "https://i.pravatar.cc/150?img=9",
    online: true,
    lastMessage: "Sí, usando useState",
    lastTime: "17:23",
    messages: [
      { id: "msg-9-1", author: "Glenna", text: "Agregaste manejo de estados?", time: "17:22" },
      { id: "msg-9-2", author: "me", text: "Sí, usando useState", time: "17:23" }
    ]
  },
  {
    id: 10,
    firstName: "Clementina",
    lastName: "DuBuque",
    address: { country: "Mexico" },
    avatar: "https://i.pravatar.cc/150?img=10",
    online: false,
    lastMessage: "Mañana seguimos con la lógica",
    lastTime: "18:01",
    messages: [
      { id: "msg-10-1", author: "Clementina", text: "Lo vemos mañana con más tiempo", time: "18:00" },
      { id: "msg-10-2", author: "me", text: "Dale, mañana seguimos con la lógica", time: "18:01" }
    ]
  }
]

export { users }
