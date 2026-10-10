export const ATLAS_LINKS = [
  { to: '/historia', label: 'História', index: '01', menu: false },
  { to: '/terra', label: 'Terra', index: '02', menu: true },
  { to: '/rebanho', label: 'Rebanho', index: '03', menu: true },
  { to: '/granja', label: 'Granja', index: '04', menu: true },
  { to: '/producao', label: 'Produção', index: '05', menu: true },
  { to: '/metodo', label: 'Método', index: '06', menu: false },
  { to: '/agua', label: 'Água', index: '07', menu: false },
  { to: '/marca', label: 'Marca', index: '08', menu: false },
  { to: '/origem', label: 'Origem', index: '09', menu: false },
  { to: '/contato', label: 'Contato', index: '10', menu: false },
] as const

export const NAV_LINKS = ATLAS_LINKS.filter((link) => link.menu)
export const ARCHIVE_LINKS = ATLAS_LINKS.filter((link) => !link.menu)

const U = 'https://images.unsplash.com'
export const photo = (id: string, width = 1600) =>
  `${U}/${id}?auto=format&fit=crop&w=${width}&q=80`

export const media = {
  home: {
    src: photo('photo-1697539015177-af6c55516481', 2400),
    alt: 'Plantação de milho',
  },
  terra: {
    src: photo('photo-1500382017468-9049fed747ef', 2000),
    alt: 'Campo aberto e horizonte da propriedade',
  },
  rebanho: {
    src: photo('photo-1516467508483-a7212febe31a', 2000),
    alt: 'Gado em campo aberto',
  },
  granja: {
    src: photo('photo-1548550023-2bdb3c5beed7', 2000),
    alt: 'Aves da granja',
  },
  producao: {
    src: photo('photo-1625246333195-78d9c38ad449', 2000),
    alt: 'Lavoura ao fim do dia',
  },
  agua: {
    src: photo('photo-1432405972618-c60b0225b8f9', 1800),
    alt: 'Água e vegetação no campo',
  },
  closing: {
    src: photo('photo-1418065460487-3e41a6c84dc5', 2200),
    alt: 'Pôr do sol sobre a terra',
  },
}

export type Lesson = { index: string; title: string; body: string }
export type Essay = { title: string; body: string }
export type GlossaryItem = { term: string; def: string }

export type Chapter = {
  path: string
  kicker: string
  title: string
  lead: string
  image?: { src: string; alt: string }
  lessons: Lesson[]
  essays: Essay[]
  glossary: GlossaryItem[]
  aside: string
  next?: { to: string; label: string }
}

export const chapters = {
  historia: {
    path: '/historia',
    kicker: 'A propriedade',
    title: 'Uma fazenda se constrói no chão, todos os dias.',
    lead: 'A Fazenda Ferrier está em Minas Gerais. É terra de gado, granja e lavoura, conduzida com o mesmo critério: cuidado, ritmo e continuidade. Não há romance de vitrine. Há ofício.',
    lessons: [
      {
        index: '01',
        title: 'Três vocações, um nome',
        body: 'Pecuária, granja e plantação pedem calendários diferentes e o mesmo respeito ao chão. Na Ferrier, as três convivem porque a terra comporta, e porque o manejo não mistura o que precisa ficar separado, como o fluxo da granja e o do pasto.',
      },
      {
        index: '02',
        title: 'Legado é o que se faz de manhã',
        body: 'Ler o capim, ver o lote, acompanhar a ave, esperar a janela da safra. Tradição, aqui, não é discurso antigo: é repetir o certo. O nome na porteira vale se o manejo vale.',
      },
      {
        index: '03',
        title: 'A marca JF',
        body: 'JF é a assinatura da casa. No campo, marca é responsabilidade, pelo animal, pela ave, pela lavoura e pela água. Não anuncia volume. Identifica o trabalho.',
      },
      {
        index: '04',
        title: 'Minas, no presente',
        body: 'A Ferrier não finge um século que não viveu. Vive o agora: terra mineira, gente no serviço, ciclo que recomeça. O que vier de geração em geração começa neste cuidado.',
      },
    ],
    essays: [
      {
        title: 'O agro que a gente reconhece',
        body: 'Pasto, granja e lavoura não são paisagem. São trabalho tropical: chuva, seca, sanidade, janela de plantio. A Ferrier se coloca nesse Brasil real, sem copiar fazenda de banco de imagens e sem vender tecnologia como espetáculo.',
      },
    ],
    glossary: [
      { term: 'Vocação', def: 'O que o solo e o clima sustentam com qualidade, ano após ano.' },
      { term: 'Manejo', def: 'As decisões do dia: animal, planta, água e gente.' },
      { term: 'Legado', def: 'Deixar a terra funcionando, não só o nome.' },
    ],
    aside: 'Fazenda Ferrier · Minas Gerais · JF',
    next: { to: '/terra', label: 'A terra' },
  },
  terra: {
    path: '/terra',
    kicker: 'A terra',
    title: 'O chão decide o que a fazenda pode ser.',
    lead: 'Antes da cerca e da máquina, existe o solo. Pastagem, lavoura, sombra e água têm lugar. Forçar o uso errado custa, e esgota. Na Ferrier, o primeiro ofício é ler o terreno.',
    image: media.terra,
    lessons: [
      {
        index: '01',
        title: 'Cada gleba tem um papel',
        body: 'Há área para o gado, área para plantar, área que guarda água e vegetação. O desenho da propriedade é o desenho do trabalho: estrada de terra, curral, galpão, pasto. Nada disso é cenário.',
      },
      {
        index: '02',
        title: 'Água no centro',
        body: 'Sem água estável não há rebanho, granja nem safra. Curso, bebedouro, recarga e mata na beira d’água são infraestrutura. Conservar não é moda: é a fazenda continuar.',
      },
      {
        index: '03',
        title: 'Olho no chão',
        body: 'Compactação, erosão, capim passado do ponto. Quem anda a propriedade vê o que planilha atrasada não mostra. Registro ajuda. Presença resolve.',
      },
      {
        index: '04',
        title: 'Minas no corpo da terra',
        body: 'Relevo, estação, serra ao longe. A Ferrier é essa geografia: campo que pede paciência e gera alimento quando o manejo acompanha o ano, não a pressa.',
      },
    ],
    essays: [
      {
        title: 'Paisagem com função',
        body: 'Cerca, sombra e estrada organizam o gado e a gente. Uma propriedade bem conduzida trata o chão como planta baixa: cada metro tem fluxo. A beleza vem depois, de terra cuidada, não de filtro.',
      },
    ],
    glossary: [
      { term: 'Gleba', def: 'Porção de terra com uso definido.' },
      { term: 'Mata ciliar', def: 'Vegetação que protege a água e a margem.' },
      { term: 'Compactação', def: 'Solo adensado, ruim para raiz e chuva. Pedido de correção.' },
    ],
    aside: 'A terra da Ferrier é o primeiro patrimônio.',
    next: { to: '/rebanho', label: 'O rebanho' },
  },
  rebanho: {
    path: '/rebanho',
    kicker: 'O rebanho',
    title: 'Gado no pasto, no tempo certo.',
    lead: 'Na Fazenda Ferrier o rebanho vive no campo. Cria, recria e engorda pedem capim, sombra, água e olho no lote. Pecuária de verdade é ritmo, não retrato.',
    image: media.rebanho,
    lessons: [
      {
        index: '01',
        title: 'O ciclo não se apressa',
        body: 'Cada fase do animal pede manejo diferente. Pular etapa aparece depois, na sanidade e no resultado. O pasto bom é o primeiro alimento.',
      },
      {
        index: '02',
        title: 'Capim é cultura',
        body: 'Lotação, descanso, reforma. Campo degradado não é “natural”: é falha de cuidado. O bovino converte pasto em proteína, por isso o chão pesa tanto quanto o curral.',
      },
      {
        index: '03',
        title: 'Condução com respeito',
        body: 'Gado bem conduzido estressa menos. Curral, espera e movimento pedem gente que sabe. Força, no campo, é controle. Nunca grito à toa.',
      },
      {
        index: '04',
        title: 'Saber quem é o animal',
        body: 'Identificar, acompanhar, lembrar. Rastreio é memória do rebanho. Na Ferrier, o cuidado começa antes de qualquer número de marketing.',
      },
    ],
    essays: [
      {
        title: 'Pecuária brasileira, na prática',
        body: 'O gado mineiro vive chuva, seca e pastagem. Excelência não é volume cego: é animal em condição, água limpa e pasto que se recupera. É isso que a Ferrier persegue no dia a dia.',
      },
    ],
    glossary: [
      { term: 'Lotação', def: 'Quantos animais o pasto aguenta sem se acabar.' },
      { term: 'Lote', def: 'Grupo visto e conduzido junto.' },
      { term: 'Sanidade', def: 'Prevenir doença. Cuidar antes de corrigir tarde.' },
    ],
    aside: 'Pecuária é o tempo do campo feito rebanho.',
    next: { to: '/granja', label: 'A granja' },
  },
  granja: {
    path: '/granja',
    kicker: 'A granja',
    title: 'Ave, rotina e silêncio que funciona.',
    lead: 'A granja da Ferrier é o ofício mais técnico da casa: ambiente, higiene, ração e água. Quando está certa, quase não se nota. O método está no detalhe.',
    image: media.granja,
    lessons: [
      {
        index: '01',
        title: 'O galpão é um clima',
        body: 'Temperatura, ventilação, densidade e luz. Errar o ambiente é errar o lote. Diferente do pasto, aqui o controle é diário e miúdo.',
      },
      {
        index: '02',
        title: 'Porta fechada com motivo',
        body: 'Quem entra, o que entra, como se limpa. Biossegurança evita o prejuízo que começa num descuido. Prevenir vale mais do que remediar.',
      },
      {
        index: '03',
        title: 'A manhã decide o lote',
        body: 'Água, ração, olhar. A granja não espera inspiração. Espera protocolo. Cuidado, aqui, é repetir o certo.',
      },
      {
        index: '04',
        title: 'Dois tempos na mesma terra',
        body: 'O gado é lento. A ave é curta. A fazenda que tem os dois não mistura fluxo. Granja e pasto se respeitam, e a mesma equipe precisa dos dois relógios.',
      },
    ],
    essays: [
      {
        title: 'Precisão sem palco',
        body: 'Alarme, registro, higiene da linha de água. O que importa na granja funciona de madrugada, sem parecer ficção. Na Ferrier, a granja é vocação, tão casa quanto o curral.',
      },
    ],
    glossary: [
      { term: 'Biossegurança', def: 'Barreira contra doença. Ordem de quem entra e como se limpa.' },
      { term: 'Densidade', def: 'Quantas aves o espaço comporta com conforto.' },
      { term: 'Lote', def: 'Grupo criado sob o mesmo cuidado.' },
    ],
    aside: 'A granja é o pulso curto da Fazenda Ferrier.',
    next: { to: '/producao', label: 'A lavoura' },
  },
  producao: {
    path: '/producao',
    kicker: 'A lavoura',
    title: 'Plantar é conversar com o ano.',
    lead: 'Na Ferrier a lavoura divide a terra com o gado. Solo, semente e chuva mandam mais do que vontade. Máquina ajuda. A janela certa decide.',
    image: media.producao,
    lessons: [
      {
        index: '01',
        title: 'O estoque está debaixo dos pés',
        body: 'Matéria orgânica, cobertura, estrutura. Adubar e ignorar o solo é gastar o capital da fazenda. Safra boa começa no chão, não no discurso.',
      },
      {
        index: '02',
        title: 'Esperar a janela',
        body: 'Plantio e colheita obedecem ao clima. Ler o ano, chuva, seca e geada, é o ofício. Quem planta contra a estação paga duas vezes.',
      },
      {
        index: '03',
        title: 'Lavoura e gado no mesmo hectare',
        body: 'Quando o solo aguenta, a lavoura alimenta o rebanho e o rebanho devolve matéria ao chão. Integração não é moda: é conta e vocação. Quando não aguenta, se separa. Método é saber a hora.',
      },
      {
        index: '04',
        title: 'Ferramenta depois da pergunta',
        body: 'Mapa, máquina, taxa. Servem se a pergunta foi certa. A Ferrier usa o que o talhão pede, sem transformar a lavoura em vitrine de equipamento.',
      },
    ],
    essays: [
      {
        title: 'Um calendário só',
        body: 'Dia de pasto, dia de lote, dia de colheita. Quem cria e planta na mesma propriedade precisa de um ano só na cabeça. Isso é a Ferrier: três ofícios, um ritmo.',
      },
    ],
    glossary: [
      { term: 'Talhão', def: 'Pedação de lavoura com um manejo.' },
      { term: 'Janela', def: 'O período em que o clima deixa plantar ou colher.' },
      { term: 'Integração', def: 'Pasto e lavoura se ajudando, quando o chão deixa.' },
    ],
    aside: 'Da terra, a produção que se renova.',
    next: { to: '/metodo', label: 'O método' },
  },
  metodo: {
    path: '/metodo',
    kicker: 'O método',
    title: 'Ver, anotar, decidir, repetir.',
    lead: 'Na Fazenda Ferrier o método é presença. Andar, olhar, registrar. Depois, se couber, o dado. Tecnologia entra para servir o ofício, nunca para encenar o campo.',
    lessons: [
      {
        index: '01',
        title: 'Primeiro o olho',
        body: 'Pasto, lote, galpão, talhão. Quem mede sem ver acelera o erro. O primeiro instrumento é estar lá.',
      },
      {
        index: '02',
        title: 'Papel ou tela, desde que constante',
        body: 'Caderno de campo, planilha, sistema. O formato importa menos do que não esquecer o ciclo. Sem registro, a fazenda recomeça do zero a cada estação.',
      },
      {
        index: '03',
        title: 'Ordem no curral e na granja',
        body: 'Protocolo não é burocracia de cidade. É o que impede improviso no animal e na ave. Quase sempre o barato sai caro.',
      },
      {
        index: '04',
        title: 'Juntar só o que a terra aguenta',
        body: 'Integrar lavoura e gado é decisão. Separar a granja é outra. Método é o critério, não a palavra da vez.',
      },
    ],
    essays: [
      {
        title: 'Um critério só',
        body: 'Na fazenda, mapear é cuidar: ciclo, manejo, calendário. Tecnologia entra se o ofício pede. O chão manda.',
      },
    ],
    glossary: [
      { term: 'Protocolo', def: 'A ordem do cuidado. O contrário do “depois a gente vê”.' },
      { term: 'Caderno', def: 'O que foi visto, feito e decidido.' },
      { term: 'Critério', def: 'Saber quando juntar ofícios e quando separar.' },
    ],
    aside: 'Método é o que resta quando a visita vai embora.',
    next: { to: '/agua', label: 'A água' },
  },
  agua: {
    path: '/agua',
    kicker: 'A água',
    title: 'Sem água, a fazenda para.',
    lead: 'Nascente, bebedouro, linha da granja, chuva na lavoura. Na Ferrier a água atravessa os três ofícios. Tratar como detalhe é o erro mais caro.',
    image: media.agua,
    lessons: [
      {
        index: '01',
        title: 'Infraestrutura que não se troca fácil',
        body: 'Cerca se conserta. Máquina se troca. Água ruim ou falta derruba gado, lote e safra juntos. Qualidade e recarga são operação.',
      },
      {
        index: '02',
        title: 'O rebanho bebe o manejo',
        body: 'Distância, sombra, limpeza do bebedouro. Animal que caminha demais por água ruim perde condição. Pasto e água se desenham juntos.',
      },
      {
        index: '03',
        title: 'Na granja, água é alimento',
        body: 'Volume, temperatura, higiene da linha. Falha vira problema de lote. Protocolo de água é biossegurança.',
      },
      {
        index: '04',
        title: 'A lavoura espera a chuva certa',
        body: 'Excesso e falta decidem a safra. Irrigar só faz sentido com vocação e conta. Nunca por vaidade de pivô.',
      },
    ],
    essays: [
      {
        title: 'Beira d’água é ativo',
        body: 'Mata na margem segura o curso, a sombra e a vida da água. Propriedade que se respeita não trata a nascente como enfeite. Na Ferrier, a água é o fio que costura gado, granja e plantação.',
      },
    ],
    glossary: [
      { term: 'Recarga', def: 'O chão e a mata devolvendo água ao sistema.' },
      { term: 'Mata ciliar', def: 'A faixa que segura a margem.' },
      { term: 'Linha de água', def: 'O que o lote da granja bebe. Limpeza é desempenho.' },
    ],
    aside: 'Água é o que segura os três ofícios.',
    next: { to: '/marca', label: 'A marca' },
  },
  marca: {
    path: '/marca',
    kicker: 'A marca',
    title: 'JF. O nome do trabalho.',
    lead: 'No campo, marca é ferro, porteira e quem responde. O monograma JF é a identidade da Fazenda Ferrier: duas letras, um círculo, o ofício no meio.',
    lessons: [
      {
        index: '01',
        title: 'O círculo',
        body: 'Limite claro, interior cuidado. Como a cerca: o que está dentro se trata. O que está fora, se respeita.',
      },
      {
        index: '02',
        title: 'J e F',
        body: 'Não anunciam safra. Assinam o gado, a granja e a lavoura. Identidade de casa, não de campanha.',
      },
      {
        index: '03',
        title: 'De longe e de perto',
        body: 'Marca rural boa se reconhece na porteira e se respeita no curral. JF não compete com o horizonte. Acompanha.',
      },
      {
        index: '04',
        title: 'Onde aparece',
        body: 'Onde o trabalho pede assinatura. O restante é a terra, sempre o protagonista.',
      },
    ],
    essays: [
      {
        title: 'Ferro e casa',
        body: 'Marcar o animal sempre foi lembrar de quem cuida. O JF digital herda isso: identificar, não enfeitar. A terra continua na frente da logomarca.',
      },
    ],
    glossary: [
      { term: 'Monograma', def: 'JF, as letras da Ferrier numa só forma.' },
      { term: 'Ferro', def: 'A marca do rebanho. Responsabilidade visível.' },
      { term: 'Porteira', def: 'Onde o nome da casa se lê primeiro.' },
    ],
    aside: 'JF · Fazenda Ferrier · Minas Gerais',
    next: { to: '/origem', label: 'A origem' },
  },
  origem: {
    path: '/origem',
    kicker: 'A origem',
    title: 'Minas. Três ofícios. Um nome na porteira.',
    lead: 'A Fazenda Ferrier está em Minas Gerais. Gado, granja e lavoura no mesmo chão. A origem da casa é essa vocação, não um retrato de quem conduz.',
    lessons: [
      {
        index: '01',
        title: 'A fazenda',
        body: 'Pecuária, granja e plantação. O critério é o chão: animal, ave e safra pedem o mesmo respeito e calendários diferentes.',
      },
      {
        index: '02',
        title: 'O que permanece',
        body: 'Ver o ciclo, anotar o manejo, não improvisar o que a terra já mostrou. Origem, aqui, é o ofício que se repete.',
      },
      {
        index: '03',
        title: 'Este site é a terra',
        body: 'A casa rural. Rotina, rastreio, calendário. Sem estética de vitrine no capim.',
      },
      {
        index: '04',
        title: 'A assinatura',
        body: 'JF marca o trabalho da Ferrier. Identifica a propriedade. Não compete com o horizonte.',
      },
    ],
    essays: [
      {
        title: 'Continuidade',
        body: 'O agro pede conta e estação, pasto e janela de plantio. Continuidade é o nome do ofício deste lado da porteira.',
      },
    ],
    glossary: [
      { term: 'Ferrier', def: 'A terra, o gado, a granja, a lavoura.' },
      { term: 'JF', def: 'A marca da casa.' },
      { term: 'MG', def: 'Minas Gerais. O chão desta assinatura.' },
    ],
    aside: 'Fazenda Ferrier · Minas Gerais',
    next: { to: '/contato', label: 'Contato' },
  },
  contato: {
    path: '/contato',
    kicker: 'Contato',
    title: 'Fale com a fazenda.',
    lead: 'A Fazenda Ferrier fica em Minas Gerais. Para conversa institucional, parceria ou imprensa, o caminho é o e-mail da casa.',
    lessons: [
      {
        index: '01',
        title: 'Onde estamos',
        body: 'Minas Gerais · Brasil. A fazenda é rural: pecuária, granja e lavoura. Visita e local combinam-se pela conversa, não por anúncio genérico.',
      },
      {
        index: '02',
        title: 'Como escrever',
        body: 'contato@fazendaferrier.com.br. Assuntos da propriedade neste endereço.',
      },
      {
        index: '03',
        title: 'O que é esta conversa',
        body: 'Terra, manejo, marca. Não é pacote de turismo rural nem stand de feira. É a casa.',
      },
      {
        index: '04',
        title: 'Uso da marca',
        body: 'JF e Fazenda Ferrier são identidade da propriedade. Uso institucional pede combinado.',
      },
    ],
    essays: [
      {
        title: 'A porteira',
        body: 'Quem chega encontra o campo. Terra, manejo, marca. Trabalho que permanece.',
      },
    ],
    glossary: [
      { term: 'Institucional', def: 'Fala da fazenda, da marca e do ofício.' },
      { term: 'Casa', def: 'A propriedade. Não é pacote de visita.' },
      { term: 'E-mail', def: 'contato@fazendaferrier.com.br' },
    ],
    aside: 'contato@fazendaferrier.com.br · Minas Gerais · Brasil',
    next: { to: '/', label: 'Início' },
  },
}

export const homeSystems = [
  {
    to: '/rebanho',
    image: media.rebanho,
    title: 'Pecuária',
    text: 'Gado no pasto. Tempo, capim e lote.',
  },
  {
    to: '/granja',
    image: media.granja,
    title: 'Granja',
    text: 'Ave, rotina e cuidado de todo dia.',
  },
  {
    to: '/producao',
    image: media.producao,
    title: 'Lavoura',
    text: 'Solo, janela e colheita no ano certo.',
  },
]
