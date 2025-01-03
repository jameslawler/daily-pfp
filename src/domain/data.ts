export type Gender = "male" | "female" | "both" | "none";

export type GameData = {
  word: string;
  wordEnglish?: string;
  category: string;
  isPlural: boolean;
  gender: Gender;
};

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
    gender: "both",
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
    gender: "both",
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
    gender: "both",
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
  {
    word: "estudante",
    wordEnglish: "student",
    category: "Relationships",
    isPlural: false,
    gender: "both",
  },
  {
    word: "natal",
    wordEnglish: "christmas",
    category: "Life Events",
    isPlural: false,
    gender: "male",
  },
  {
    word: "aniversário",
    wordEnglish: "birthday",
    category: "Life Events",
    isPlural: false,
    gender: "male",
  },
  {
    word: "carnaval",
    wordEnglish: "carnival",
    category: "Life Events",
    isPlural: false,
    gender: "male",
  },
  {
    word: "celebrações",
    wordEnglish: "celebrations",
    category: "Life Events",
    isPlural: true,
    gender: "female",
  },
  {
    word: "páscoa",
    wordEnglish: "easter",
    category: "Life Events",
    isPlural: false,
    gender: "female",
  },
  {
    word: "lua-de-mel",
    wordEnglish: "honeymoon",
    category: "Life Events",
    isPlural: false,
    gender: "female",
  },
  {
    word: "prenda",
    wordEnglish: "present",
    category: "Life Events",
    isPlural: false,
    gender: "female",
  },
  {
    word: "casamento",
    wordEnglish: "wedding",
    category: "Life Events",
    isPlural: false,
    gender: "male",
  },
  {
    word: "mochila",
    wordEnglish: "backpack",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "babete",
    wordEnglish: "bib",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "vestido",
    wordEnglish: "dress",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "roupão",
    wordEnglish: "dressing gown",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sandálias",
    wordEnglish: "sandles",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "cachecol",
    wordEnglish: "scarf",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "calções",
    wordEnglish: "shorts",
    category: "Clothing",
    isPlural: true,
    gender: "male",
  },
  {
    word: "saia",
    wordEnglish: "skirt",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pantufas",
    wordEnglish: "slippers",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "chapéu",
    wordEnglish: "hat",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "fralda",
    wordEnglish: "nappy",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "galochas",
    wordEnglish: "wellington boots",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "cinto",
    wordEnglish: "belt",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cuecas",
    wordEnglish: "underwear",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "casaco",
    wordEnglish: "coat",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "camisa",
    wordEnglish: "shirt",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "meias",
    wordEnglish: "socks",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "gravata",
    wordEnglish: "tie",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "blusa",
    wordEnglish: "blouse",
    category: "Clothing",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sapatos",
    wordEnglish: "shoes",
    category: "Clothing",
    isPlural: true,
    gender: "male",
  },
  {
    word: "luvas",
    wordEnglish: "gloves",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "joias",
    wordEnglish: "jewellery",
    category: "Clothing",
    isPlural: true,
    gender: "female",
  },
  {
    word: "anel",
    wordEnglish: "ring",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "relógio",
    wordEnglish: "watch",
    category: "Clothing",
    isPlural: false,
    gender: "male",
  },
  {
    word: "careca",
    wordEnglish: "bald",
    category: "Hair",
    isPlural: false,
    gender: "both",
  },
  {
    word: "escova",
    wordEnglish: "brush",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pente",
    wordEnglish: "comb",
    category: "Hair",
    isPlural: false,
    gender: "male",
  },
  {
    word: "caspa",
    wordEnglish: "dandruff",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "tesoura",
    wordEnglish: "scissors",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "alergia",
    wordEnglish: "allergy",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "consulta",
    wordEnglish: "appointment",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "tosse",
    wordEnglish: "cough",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "gripe",
    wordEnglish: "flu",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "febre",
    wordEnglish: "fever",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "vacina",
    wordEnglish: "vaccine",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "receita",
    wordEnglish: "prescription",
    category: "Hair",
    isPlural: false,
    gender: "female",
  },
  {
    word: "acidente",
    wordEnglish: "accident",
    category: "Injury",
    isPlural: false,
    gender: "male",
  },
  {
    word: "ligadura",
    wordEnglish: "bandage",
    category: "Injury",
    isPlural: false,
    gender: "female",
  },
  {
    word: "bolha",
    wordEnglish: "blister",
    category: "Injury",
    isPlural: false,
    gender: "female",
  },
  {
    word: "corte",
    wordEnglish: "cut",
    category: "Injury",
    isPlural: false,
    gender: "male",
  },
  {
    word: "fratura",
    wordEnglish: "fracture",
    category: "Injury",
    isPlural: false,
    gender: "female",
  },
  {
    word: "clinica",
    wordEnglish: "clinic",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "especialista",
    wordEnglish: "consultant",
    category: "Hospital",
    isPlural: false,
    gender: "both",
  },
  {
    word: "hospital",
    wordEnglish: "hospital",
    category: "Hospital",
    isPlural: false,
    gender: "male",
  },
  {
    word: "operação",
    wordEnglish: "operation",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "fisioterapia",
    wordEnglish: "physiotherapy",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "radiologia",
    wordEnglish: "radiology",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "encaminhamento",
    wordEnglish: "referral",
    category: "Hospital",
    isPlural: false,
    gender: "male",
  },
  {
    word: "resultado",
    wordEnglish: "result",
    category: "Hospital",
    isPlural: false,
    gender: "male",
  },
  {
    word: "ecografia",
    wordEnglish: "scan",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "enfermaria",
    wordEnglish: "ward",
    category: "Hospital",
    isPlural: false,
    gender: "female",
  },
  {
    word: "catarata",
    wordEnglish: "cataract",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cárie",
    wordEnglish: "decay",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "dentista",
    wordEnglish: "dentist",
    category: "Dentist",
    isPlural: false,
    gender: "both",
  },
  {
    word: "esmalte",
    wordEnglish: "enamel",
    category: "Dentist",
    isPlural: false,
    gender: "male",
  },
  {
    word: "extração",
    wordEnglish: "extraction",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "obturação",
    wordEnglish: "filling",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "gengiva",
    wordEnglish: "gum",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "molar",
    wordEnglish: "molar",
    category: "Dentist",
    isPlural: false,
    gender: "male",
  },
  {
    word: "nervo",
    wordEnglish: "nerve",
    category: "Dentist",
    isPlural: false,
    gender: "male",
  },
  {
    word: "raiz",
    wordEnglish: "root",
    category: "Dentist",
    isPlural: false,
    gender: "female",
  },
  {
    word: "dente",
    wordEnglish: "tooth",
    category: "Dentist",
    isPlural: false,
    gender: "male",
  },
  {
    word: "dentes",
    wordEnglish: "teeth",
    category: "Dentist",
    isPlural: true,
    gender: "male",
  },
  {
    word: "nascimento",
    wordEnglish: "birth",
    category: "Pregnancy",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cesariana",
    wordEnglish: "caesarean",
    category: "Pregnancy",
    isPlural: false,
    gender: "female",
  },
  {
    word: "parto",
    wordEnglish: "childbirth",
    category: "Pregnancy",
    isPlural: false,
    gender: "male",
  },
  {
    word: "grávida",
    wordEnglish: "pregnant",
    category: "Pregnancy",
    isPlural: false,
    gender: "female",
  },
  {
    word: "trimestre",
    wordEnglish: "trimester",
    category: "Pregnancy",
    isPlural: false,
    gender: "male",
  },
  {
    word: "ultra-som",
    wordEnglish: "ultrasound",
    category: "Pregnancy",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cordão umbilical",
    wordEnglish: "umbilical cord",
    category: "Pregnancy",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sótão",
    wordEnglish: "attic",
    category: "House",
    isPlural: false,
    gender: "male",
  },
  {
    word: "varanda",
    wordEnglish: "balcony",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cave",
    wordEnglish: "basement",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "chaminé",
    wordEnglish: "chimney",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "corrente",
    wordEnglish: "door chain",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "entrada",
    wordEnglish: "entrance",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "garagem",
    wordEnglish: "garage",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "vestibulo",
    wordEnglish: "hallway",
    category: "House",
    isPlural: false,
    gender: "male",
  },
  {
    word: "casa",
    wordEnglish: "house",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "chave",
    wordEnglish: "key",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "elevador",
    wordEnglish: "elevator",
    category: "House",
    isPlural: false,
    gender: "male",
  },
  {
    word: "teto",
    wordEnglish: "ceiling",
    category: "House",
    isPlural: false,
    gender: "male",
  },
  {
    word: "escadas",
    wordEnglish: "stairs",
    category: "House",
    isPlural: true,
    gender: "female",
  },
  {
    word: "estante",
    wordEnglish: "bookshelf",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "lareira",
    wordEnglish: "fireplace",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sala de estar",
    wordEnglish: "living room",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sofá",
    wordEnglish: "sofa",
    category: "House",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cadeira",
    wordEnglish: "chair",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "mesa",
    wordEnglish: "table",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "janela",
    wordEnglish: "window",
    category: "House",
    isPlural: false,
    gender: "female",
  },
  {
    word: "caldeira",
    wordEnglish: "boiler",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "electricidade",
    wordEnglish: "electricity",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "ventoinha",
    wordEnglish: "fan",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "fusivel",
    wordEnglish: "fuse",
    category: "House Internals",
    isPlural: false,
    gender: "male",
  },
  {
    word: "aquecedor",
    wordEnglish: "heater",
    category: "House Internals",
    isPlural: false,
    gender: "male",
  },
  {
    word: "isolamento",
    wordEnglish: "insulation",
    category: "House Internals",
    isPlural: false,
    gender: "male",
  },
  {
    word: "tampa",
    wordEnglish: "lid",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "ficha",
    wordEnglish: "plug",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "radiador",
    wordEnglish: "radiator",
    category: "House Internals",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lava-loiça",
    wordEnglish: "sink",
    category: "House Internals",
    isPlural: false,
    gender: "male",
  },
  {
    word: "tomada",
    wordEnglish: "socket",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "torneira",
    wordEnglish: "tap",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sanita",
    wordEnglish: "toilet",
    category: "House Internals",
    isPlural: false,
    gender: "female",
  },
  {
    word: "talheres",
    wordEnglish: "cutlery",
    category: "Dining",
    isPlural: true,
    gender: "male",
  },
  {
    word: "garfo",
    wordEnglish: "fork",
    category: "Dining",
    isPlural: false,
    gender: "male",
  },
  {
    word: "prato",
    wordEnglish: "plate",
    category: "Dining",
    isPlural: false,
    gender: "male",
  },
  {
    word: "faca",
    wordEnglish: "knife",
    category: "Dining",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pimenta",
    wordEnglish: "pepper",
    category: "Dining",
    isPlural: false,
    gender: "female",
  },
  {
    word: "dose",
    wordEnglish: "portion",
    category: "Dining",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sal",
    wordEnglish: "salt",
    category: "Dining",
    isPlural: false,
    gender: "male",
  },
  {
    word: "assento",
    wordEnglish: "seat",
    category: "Dining",
    isPlural: false,
    gender: "male",
  },
  {
    word: "colher",
    wordEnglish: "spoon",
    category: "Dining",
    isPlural: false,
    gender: "female",
  },
  {
    word: "copo",
    wordEnglish: "cup",
    category: "Dining",
    isPlural: false,
    gender: "male",
  },
  {
    word: "liquidificador",
    wordEnglish: "blender",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "armário",
    wordEnglish: "cabinet",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "escorredor",
    wordEnglish: "draining board",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "gaveta",
    wordEnglish: "drawer",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "congelador",
    wordEnglish: "freezer",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "fogão",
    wordEnglish: "hob",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "chaleira",
    wordEnglish: "kettle",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cozinha",
    wordEnglish: "kitchen",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "microondas",
    wordEnglish: "microwave",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "forno",
    wordEnglish: "oven",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "frigorifico",
    wordEnglish: "refrigerator",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "caixote do lixo",
    wordEnglish: "rubbish bin",
    category: "Kitchen",
    isPlural: false,
    gender: "male",
  },
  {
    word: "prateleiras",
    wordEnglish: "shelves",
    category: "Kitchen",
    isPlural: true,
    gender: "female",
  },
  {
    word: "torradeira",
    wordEnglish: "toaster",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "bancada",
    wordEnglish: "bench",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "frigideira",
    wordEnglish: "frying pan",
    category: "Kitchen",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cama",
    wordEnglish: "bed",
    category: "Bedroom",
    isPlural: false,
    gender: "female",
  },
  {
    word: "quarto",
    wordEnglish: "bedroom",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cobertor",
    wordEnglish: "blanket",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "cabide",
    wordEnglish: "coat hanger",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "chão",
    wordEnglish: "floor",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "colchão",
    wordEnglish: "mattress",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "espelho",
    wordEnglish: "mirror",
    category: "Bedroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "almofada",
    wordEnglish: "pillow",
    category: "Bedroom",
    isPlural: false,
    gender: "female",
  },
  {
    word: "banheira",
    wordEnglish: "bath",
    category: "Bathroom",
    isPlural: false,
    gender: "female",
  },
  {
    word: "duche",
    wordEnglish: "shower",
    category: "Bathroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "sabonete",
    wordEnglish: "soap",
    category: "Bathroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "esponja",
    wordEnglish: "sponge",
    category: "Bathroom",
    isPlural: false,
    gender: "female",
  },
  {
    word: "ralo",
    wordEnglish: "drain",
    category: "Bathroom",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lixivia",
    wordEnglish: "bleach",
    category: "House Items",
    isPlural: false,
    gender: "female",
  },
  {
    word: "vassoura",
    wordEnglish: "broom",
    category: "House Items",
    isPlural: false,
    gender: "female",
  },
  {
    word: "balde",
    wordEnglish: "bucket",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "detergente",
    wordEnglish: "detergent",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "apanhador",
    wordEnglish: "dust pan",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "ferro",
    wordEnglish: "iron",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "esfregona",
    wordEnglish: "mop",
    category: "House Items",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cera",
    wordEnglish: "polish",
    category: "House Items",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pó",
    wordEnglish: "powder",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lavanderia",
    wordEnglish: "laundry room",
    category: "House Items",
    isPlural: false,
    gender: "female",
  },
  {
    word: "aspirador",
    wordEnglish: "vacuum cleaner",
    category: "House Items",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lâmina",
    wordEnglish: "blade",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cabo",
    wordEnglish: "cable",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "serra circular",
    wordEnglish: "circular saw",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "prensa",
    wordEnglish: "clamp",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "broca",
    wordEnglish: "drill bit",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "metal",
    wordEnglish: "metal",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "lixadeira",
    wordEnglish: "sander",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "solda",
    wordEnglish: "solder",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "verniz",
    wordEnglish: "varnish",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "arame",
    wordEnglish: "wire",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "madeira",
    wordEnglish: "wood",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "martelo",
    wordEnglish: "hammer",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "serrote",
    wordEnglish: "handsaw",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "prego",
    wordEnglish: "nail",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "porca",
    wordEnglish: "nut",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "parafuso",
    wordEnglish: "screw",
    category: "Tools",
    isPlural: false,
    gender: "male",
  },
  {
    word: "anilha",
    wordEnglish: "washer",
    category: "Tools",
    isPlural: false,
    gender: "female",
  },
  {
    word: "jardim",
    wordEnglish: "garden",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "vedação",
    wordEnglish: "fence",
    category: "Garden",
    isPlural: false,
    gender: "female",
  },
  {
    word: "fonte",
    wordEnglish: "fountain",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "portão",
    wordEnglish: "gate",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "estufa",
    wordEnglish: "greenhouse",
    category: "Garden",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sebe",
    wordEnglish: "hedge",
    category: "Garden",
    isPlural: false,
    gender: "female",
  },
  {
    word: "relvado",
    wordEnglish: "lawn",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "solo",
    wordEnglish: "soil",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "feto",
    wordEnglish: "fern",
    category: "Garden",
    isPlural: false,
    gender: "male",
  },
  {
    word: "relva",
    wordEnglish: "grass",
    category: "Garden",
    isPlural: false,
    gender: "female",
  },
  {
    word: "árvore",
    wordEnglish: "tree",
    category: "Garden",
    isPlural: false,
    gender: "female",
  },
  {
    word: "ambulância",
    wordEnglish: "ambulance",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "incêndio",
    wordEnglish: "fire",
    category: "Emergency",
    isPlural: false,
    gender: "male",
  },
  {
    word: "bombeiros",
    wordEnglish: "firefighters",
    category: "Emergency",
    isPlural: true,
    gender: "male",
  },
  {
    word: "algemas",
    wordEnglish: "handcuffs",
    category: "Emergency",
    isPlural: true,
    gender: "female",
  },
  {
    word: "capacete",
    wordEnglish: "helmet",
    category: "Emergency",
    isPlural: false,
    gender: "male",
  },
  {
    word: "investigação",
    wordEnglish: "investigation",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "escada",
    wordEnglish: "ladder",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "luzes",
    wordEnglish: "lights",
    category: "Emergency",
    isPlural: true,
    gender: "female",
  },
  {
    word: "polícia",
    wordEnglish: "police",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "sirene",
    wordEnglish: "siren",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "fumo",
    wordEnglish: "smoke",
    category: "Emergency",
    isPlural: false,
    gender: "male",
  },
  {
    word: "detetor de fumo",
    wordEnglish: "smoke alarm",
    category: "Emergency",
    isPlural: false,
    gender: "male",
  },
  {
    word: "maca",
    wordEnglish: "stretcher",
    category: "Emergency",
    isPlural: false,
    gender: "female",
  },
  {
    word: "suspeito",
    wordEnglish: "suspect",
    category: "Emergency",
    isPlural: false,
    gender: "male",
  },
  {
    word: "contabilista",
    wordEnglish: "accountant",
    category: "Money",
    isPlural: false,
    gender: "both",
  },
  {
    word: "quantia",
    wordEnglish: "amount",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "caixa automática",
    wordEnglish: "ATM",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
  {
    word: "banco",
    wordEnglish: "bank",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
  {
    word: "moeda",
    wordEnglish: "coin",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "cliente",
    wordEnglish: "customer",
    category: "Money",
    isPlural: false,
    gender: "both",
  },
  {
    word: "dividendos",
    wordEnglish: "dividends",
    category: "Money",
    isPlural: true,
    gender: "male",
  },
  {
    word: "taxa de câmbio",
    wordEnglish: "exchange rate",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "taxa de juro",
    wordEnglish: "interest rate",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "investimento",
    wordEnglish: "investment",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
  {
    word: "dinheiro",
    wordEnglish: "money",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
  {
    word: "hipoteca",
    wordEnglish: "mortgage",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "nota",
    wordEnglish: "note",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "pagamento",
    wordEnglish: "payment",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
  {
    word: "poupanças",
    wordEnglish: "savings",
    category: "Money",
    isPlural: true,
    gender: "female",
  },
  {
    word: "ações",
    wordEnglish: "shares",
    category: "Money",
    isPlural: true,
    gender: "female",
  },
  {
    word: "assinatura",
    wordEnglish: "signature",
    category: "Money",
    isPlural: false,
    gender: "female",
  },
  {
    word: "imposto",
    wordEnglish: "tax",
    category: "Money",
    isPlural: false,
    gender: "male",
  },
];
