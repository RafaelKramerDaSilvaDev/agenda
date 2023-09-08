type TaskProps = {
  id: string;
  name: string;
  description: string;
  startTime: string;
  endTime?: string;
}[];

export const toDoList: TaskProps = [
  {
    id: "1",
    name: "Reunião de trabalho",
    description: "Reunião com a equipe de marketing",
    startTime: "8:30",
    endTime: "9:30",
  },
  {
    id: "2",
    name: "Ir ao ginásio",
    description: "Treino de cardio e musculação",
    startTime: "10:00",
    endTime: "11:30",
  },
  {
    id: "3",
    name: "Almoço de negócios",
    description: "Restaurante italiano no centro",
    startTime: "12:15",
    endTime: "13:45",
  },
  {
    id: "4",
    name: "Enviar relatórios",
    description: "Finalizar e enviar relatórios financeiros",
    startTime: "14:00",
    endTime: "15:00",
  },
  {
    id: "5",
    name: "Consulta médica",
    description: "Check-up anual",
    startTime: "16:00",
    endTime: "17:00",
  },
  {
    id: "6",
    name: "Jantar com amigos",
    description: "Restaurante japonês",
    startTime: "19:00",
    endTime: "21:00",
  },
  {
    id: "7",
    name: "Hora de leitura",
    description: "Ler um capítulo do novo livro",
    startTime: "21:30",
    endTime: "22:30",
  },
  {
    id: "8",
    name: "Assistir a um webinar",
    description: "Webinar sobre inovações tecnológicas",
    startTime: "23:00",
    endTime: "00:30",
  },
  {
    id: "9",
    name: "Passear com o cachorro",
    description: "Dar uma volta no parque",
    startTime: "7:00",
    endTime: "7:30",
  },
  {
    id: "10",
    name: "Fazer compras",
    description: "Comprar mantimentos para a semana",
    startTime: "14:30",
    endTime: "15:30",
  },
  {
    id: "11",
    name: "Planejar férias",
    description: "Pesquisar destinos e fazer reservas",
    startTime: "16:30",
    endTime: "17:30",
  },
  {
    id: "12",
    name: "Ligar para os pais",
    description: "Conversar e saber como eles estão",
    startTime: "20:30",
    endTime: "21:00",
  },
  {
    id: "13",
    name: "Meditar",
    description: "Praticar meditação para relaxar",
    startTime: "21:45",
    endTime: "22:15",
  },
];