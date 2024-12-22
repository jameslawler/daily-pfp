export type Gender = "male" | "female" | "both" | "none";

export type GameData = {
  word: string;
  wordEnglish?: string;
  category: string;
  isPlural: boolean;
  gender: Gender;
};

export const data_old: GameData[] = [
  {
    word: "nariz",
    category: "pessoas",
    isPlural: false,
    gender: "male",
  },
  {
    word: "livro",
    category: "office",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mala",
    category: "furniture",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cantea",
    category: "furniture",
    isPlural: false,
    gender: "female",
  },
  {
    word: "papel",
    category: "office",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sala",
    category: "locations",
    isPlural: false,
    gender: "female",
  },
];

export const data: GameData[] = [
  {
    word: "abdómen",
    wordEnglish: "abdomen",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "tornozelo",
    wordEnglish: "ankle",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "braço",
    wordEnglish: "arm",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "costas",
    wordEnglish: "back",
    category: "Human Body",
    isPlural: true,
    gender: "female",
  },
  {
    word: "peito",
    wordEnglish: "chest",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cotovelo",
    wordEnglish: "elbow",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "pé",
    wordEnglish: "foot",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mão",
    wordEnglish: "hand",
    category: "Human Body",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cabeça",
    wordEnglish: "head",
    category: "Human Body",
    isPlural: false,
    gender: "female",
  },
  {
    word: "joelho",
    wordEnglish: "knee",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "perna",
    wordEnglish: "leg",
    category: "Human Body",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pescoço",
    wordEnglish: "neck",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "ombro",
    wordEnglish: "shoulder",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "coxa",
    wordEnglish: "thigh",
    category: "Human Body",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cintura",
    wordEnglish: "waist",
    category: "Human Body",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pulso",
    wordEnglish: "wrist",
    category: "Human Body",
    isPlural: false,
    gender: "male",
  },
  {
    word: "bochecha",
    wordEnglish: "cheek",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "queixo",
    wordEnglish: "chin",
    category: "Face",
    isPlural: false,
    gender: "male",
  },
  {
    word: "orelha",
    wordEnglish: "ear",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "olho",
    wordEnglish: "eye",
    category: "Face",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cara",
    wordEnglish: "face",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "testa",
    wordEnglish: "forehead",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cabelo",
    wordEnglish: "hair",
    category: "Face",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lábio",
    wordEnglish: "lip",
    category: "Face",
    isPlural: false,
    gender: "male",
  },
  {
    word: "boca",
    wordEnglish: "mouth",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "nariz",
    wordEnglish: "nose",
    category: "Face",
    isPlural: false,
    gender: "male",
  },
  {
    word: "pele",
    wordEnglish: "skin",
    category: "Face",
    isPlural: false,
    gender: "female",
  },
  {
    word: "apêndice",
    wordEnglish: "appendix",
    category: "Organs",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cérebro",
    wordEnglish: "brain",
    category: "Organs",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cardiovascular",
    wordEnglish: "cardiovascular",
    category: "Organs",
    isPlural: false,
    gender: "none",
  },
  {
    word: "estômago",
    wordEnglish: "stomach",
    category: "Organs",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cordas vocais",
    wordEnglish: "vocal cords",
    category: "Organs",
    isPlural: true,
    gender: "female",
  },
  {
    word: "adulto",
    wordEnglish: "adult",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "tia",
    wordEnglish: "aunt",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "bebé",
    wordEnglish: "baby",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "menino",
    wordEnglish: "boy",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "irmão",
    wordEnglish: "brother",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cunhado",
    wordEnglish: "brother in law",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "criança",
    wordEnglish: "child",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "filhos",
    wordEnglish: "children",
    category: "Family",
    isPlural: true,
    gender: "male",
  },
  {
    word: "família",
    wordEnglish: "family",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pai",
    wordEnglish: "father",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sogro",
    wordEnglish: "father in law",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "geração",
    wordEnglish: "generation",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "menina",
    wordEnglish: "girl",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "netos",
    wordEnglish: "grandchildren",
    category: "Family",
    isPlural: true,
    gender: "male",
  },
  {
    word: "neta",
    wordEnglish: "granddaughter",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "avô",
    wordEnglish: "grandfather",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "avó",
    wordEnglish: "grandmother",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "avós",
    wordEnglish: "grandparents",
    category: "Family",
    isPlural: true,
    gender: "male",
  },
  {
    word: "neto",
    wordEnglish: "grandson",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "marido",
    wordEnglish: "husband",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "homem",
    wordEnglish: "man",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mãe",
    wordEnglish: "mother",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sogra",
    wordEnglish: "mother in law",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sobrinho",
    wordEnglish: "nephew",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sobrinha",
    wordEnglish: "niece",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pais",
    wordEnglish: "parents",
    category: "Family",
    isPlural: true,
    gender: "male",
  },
  {
    word: "irmã",
    wordEnglish: "sister",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cunhada",
    wordEnglish: "sister in law",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "filho",
    wordEnglish: "son",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "genro",
    wordEnglish: "son in law",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "enteada",
    wordEnglish: "stepdaughter",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "padrasto",
    wordEnglish: "stepfather",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "madrasta",
    wordEnglish: "stepmother",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "enteado",
    wordEnglish: "stepson",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "adolescente",
    wordEnglish: "teenager",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "gêmeos",
    wordEnglish: "twins",
    category: "Family",
    isPlural: true,
    gender: "male",
  },
  {
    word: "tio",
    wordEnglish: "uncle",
    category: "Family",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mulher",
    wordEnglish: "woman",
    category: "Family",
    isPlural: false,
    gender: "female",
  },
  {
    word: "conhecido",
    wordEnglish: "acquaintance",
    category: "Relationships",
    isPlural: false,
    gender: "male",
  },
  {
    word: "colega",
    wordEnglish: "colleague",
    category: "Relationships",
    isPlural: false,
    gender: "male",
  },
  {
    word: "casal",
    wordEnglish: "couple",
    category: "Relationships",
    isPlural: false,
    gender: "male",
  },
  {
    word: "empregado",
    wordEnglish: "employee",
    category: "Relationships",
    isPlural: false,
    gender: "male",
  },
  {
    word: "empregadora",
    wordEnglish: "employer",
    category: "Relationships",
    isPlural: false,
    gender: "female",
  },
  {
    word: "noivos",
    wordEnglish: "engaged couple",
    category: "Relationships",
    isPlural: true,
    gender: "male",
  },
  {
    word: "amigo",
    wordEnglish: "friend",
    category: "Relationships",
    isPlural: false,
    gender: "male",
  },
  {
    word: "amiga",
    wordEnglish: "friend",
    category: "Relationships",
    isPlural: false,
    gender: "female",
  },
  {
    word: "vizinha",
    wordEnglish: "neighbour",
    category: "Relationships",
    isPlural: false,
    gender: "female",
  },
];
