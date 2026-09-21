export const NAV_LINKS = [
  { to: '/historia', label: 'História' },
  { to: '/terra', label: 'Terra' },
  { to: '/rebanho', label: 'Rebanho' },
  { to: '/granja', label: 'Granja' },
  { to: '/producao', label: 'Produção' },
  { to: '/origem', label: 'Origem' },
] as const

const U = 'https://images.unsplash.com'
export const photo = (id: string, width = 1600) =>
  `${U}/${id}?auto=format&fit=crop&w=${width}&q=70`

export const media = {
  home: {
    src: photo('photo-1500595046743-cd271d694d30', 2200),
    alt: 'Pastagem ao entardecer — placeholder visual',
  },
  terra: {
    src: photo('photo-1500382017468-9049fed747ef', 1800),
    alt: 'Horizonte de campo — placeholder',
  },
  rebanho: {
    src: photo('photo-1516467508483-a7212febe31a', 1800),
    alt: 'Gado em campo aberto — placeholder',
  },
  granja: {
    src: photo('photo-1548550023-2bdb3c5beed7', 1800),
    alt: 'Aves em granja — placeholder',
  },
  producao: {
    src: photo('photo-1625246333195-78d9c38ad449', 1800),
    alt: 'Lavoura ao entardecer — placeholder',
  },
}

export type Lesson = {
  index: string
  title: string
  body: string
}

export type Chapter = {
  path: string
  kicker: string
  title: string
  lead: string
  image?: { src: string; alt: string }
  lessons: Lesson[]
  aside: string
  next?: { to: string; label: string }
}

export const chapters = {
  historia: {
    path: '/historia',
    kicker: 'Capítulo I',
    title: 'O que faz uma terra se tornar legado.',
    lead: 'Antes de ser uma marca, uma fazenda é um modo de permanecer. Esta página explica o ofício de construir continuidade no campo — e onde a Fazenda Ferrier entra nessa história, ainda em formação.',
    lessons: [
      {
        index: '01',
        title: 'Propriedade não é só imóvel',
        body: 'No agronegócio, terra é ativo produtivo e memória ao mesmo tempo. Quem cuida de uma fazenda administra clima, ciclo biológico, gente e tempo. O valor não está só no hectare: está na vocação — o que aquele chão sabe fazer bem.',
      },
      {
        index: '02',
        title: 'Legado é método, não nostalgia',
        body: 'Famílias rurais que atravessam gerações repetem gestos simples: observar o pasto, registrar o rebanho, respeitar a safra, não gastar o solo. Tradição, aqui, é disciplina. O nome na porteira só se sustenta se o manejo se sustenta.',
      },
      {
        index: '03',
        title: 'A Ferrier começa agora',
        body: 'A Fazenda Ferrier não inventa um passado para parecer antiga. Ela declara um ponto de partida: pecuária, granja e plantação sob a mesma assinatura JF. Os capítulos reais da propriedade serão preenchidos com o tempo — sem datas fabricadas.',
      },
    ],
    aside: 'Uma marca rural nasce quando o trabalho ganha nome. JF é esse nome.',
    next: { to: '/terra', label: 'A terra' },
  },
  terra: {
    path: '/terra',
    kicker: 'Capítulo II',
    title: 'A terra ensina antes de produzir.',
    lead: 'Solo, água, relevo e clima decidem o que uma propriedade pode ser. Entender o ramo começa por ler o chão — não por decorar máquinas.',
    image: media.terra,
    lessons: [
      {
        index: '01',
        title: 'Vocação do solo',
        body: 'Cada gleba tem uma vocação: pastagem, lavoura, reserva, água. Forçar o uso errado custa caro e esgota o recurso. O manejo inteligente pergunta primeiro: o que esta terra aguenta, ano após ano?',
      },
      {
        index: '02',
        title: 'Água é infraestrutura',
        body: 'Nascente, curso, bebedouro e chuva organizam a fazenda inteira. Sem água estável não há rebanho, granja nem lavoura. Conservar mata ciliar e recarga não é discurso: é continuidade operacional.',
      },
      {
        index: '03',
        title: 'Paisagem com função',
        body: 'Campo aberto, sombra, cerca e estrada de terra não são cenário. São o desenho do trabalho. Uma propriedade de alto padrão trata a paisagem como arquitetura: cada área tem um papel.',
      },
    ],
    aside: 'Na Ferrier, o mapa da terra ainda será preenchido com os pontos reais da propriedade.',
    next: { to: '/rebanho', label: 'O rebanho' },
  },
  rebanho: {
    path: '/rebanho',
    kicker: 'Capítulo III',
    title: 'Pecuária é tempo feito carne e pasto.',
    lead: 'A criação de gado não é um retrato de animais no campo. É um sistema: genética, pastagem, manejo e respeito ao ciclo. Aqui, o ramo — não um catálogo técnico da fazenda.',
    image: media.rebanho,
    lessons: [
      {
        index: '01',
        title: 'O ciclo não se apressa',
        body: 'Bezerro, recria, engorda: cada fase pede pasto, sombra, água e leitura do lote. Quem tenta pular etapa paga em sanidade e resultado. Pecuária de qualidade é paciência com método.',
      },
      {
        index: '02',
        title: 'Pasto é cultura',
        body: 'O gado converte capim em proteína. Por isso o manejo da pastagem — lotação, descanso, reforma — é tão importante quanto o animal. Campo degradado não é “natural”: é falha de cuidado.',
      },
      {
        index: '03',
        title: 'Manejo é linguagem',
        body: 'Curral, condução, rastreio e bem-estar não são detalhe. Um rebanho bem conduzido estressa menos, rende mais e honra o ofício. Força, no campo, é controle — nunca pressa.',
      },
    ],
    aside: 'A Ferrier reserva este capítulo para o rebanho. Dados de genética e escala entram quando forem reais.',
    next: { to: '/granja', label: 'A granja' },
  },
  granja: {
    path: '/granja',
    kicker: 'Capítulo IV',
    title: 'Granja é precisão em escala viva.',
    lead: 'Avicultura é um dos sistemas mais técnicos do campo: ambiente, biossegurança, alimentação e rotina. Uma granja bem feita parece silenciosa — porque o método está no detalhe.',
    image: media.granja,
    lessons: [
      {
        index: '01',
        title: 'Ambiente controla o resultado',
        body: 'Temperatura, ventilação, densidade e higiene definem saúde do lote. Diferente do pasto aberto, a granja é um microclima. Errar o ambiente é errar o ciclo inteiro.',
      },
      {
        index: '02',
        title: 'Biossegurança não é luxo',
        body: 'Fluxo de pessoas, desinfecção, isolamento de núcleos e rastreio de insumos existem para impedir que uma falha vire perda. No ramo, prevenção vale mais do que correção.',
      },
      {
        index: '03',
        title: 'Rotina é o produto',
        body: 'Água, ração, luz e observação diária. A granja ensina que excelência rural também pode ser industrial no melhor sentido: repetível, limpa, responsável. Cuidado, aqui, é protocolo.',
      },
    ],
    aside: 'A granja da Ferrier será descrita com o manejo real. Até lá, o que importa é entender o ofício.',
    next: { to: '/producao', label: 'A produção' },
  },
  producao: {
    path: '/producao',
    kicker: 'Capítulo V',
    title: 'Plantar é conversar com o ano.',
    lead: 'Agricultura organiza o tempo em safra: solo, semente, clima, colheita. Uma fazenda que também planta aprende a integrar lavoura e criação — em vez de tratar cada coisa como ilha.',
    image: media.producao,
    lessons: [
      {
        index: '01',
        title: 'O solo é o primeiro estoque',
        body: 'Matéria orgânica, estrutura e cobertura decidem a próxima safra. Adubar sem cuidar do solo é gastar o capital da terra. Produção duradoura começa debaixo dos pés.',
      },
      {
        index: '02',
        title: 'Safra é calendário vivo',
        body: 'Plantio e colheita não obedecem a vontade: obedecem a janela. Ler o ano — chuva, seca, geada — é o ofício. Máquina ajuda; decisão certa acontece antes dela ligar.',
      },
      {
        index: '03',
        title: 'Integração rende mais que especialização cega',
        body: 'Lavoura pode alimentar o rebanho; o rebanho devolve matéria ao solo. Sistemas integrados (lavoura-pecuária) são uma das ideias mais inteligentes do agro brasileiro: o mesmo hectare, vários ciclos.',
      },
    ],
    aside: 'Culturas e safras da Ferrier entram neste capítulo quando o arquivo agrícola estiver completo.',
    next: { to: '/origem', label: 'A origem' },
  },
  origem: {
    path: '/origem',
    kicker: 'Capítulo VI',
    title: 'Quem lê sistemas também lê a terra.',
    lead: 'Jhenni Nascimento transita entre engenharia de alta escala e o ofício rural. Não é contraste: é a mesma disciplina de mapear, persistir e deixar método.',
    lessons: [
      {
        index: '01',
        title: 'Dois territórios, uma assinatura',
        body: 'Engenheira de software, sócia-fundadora da AIIDO e mente por trás da primeira IA de cobrança via Pix Automático do Brasil. Na Fazenda Ferrier, a mesma precisão se volta ao que não se substitui: gado, granja e plantação.',
      },
      {
        index: '02',
        title: 'Mapear para cuidar',
        body: '“Se pode ser mapeado, pode ser automatizado. Se gera dados, pode ser inteligente.” No campo, mapear é outra coisa: observar ciclo, registrar manejo, não improvisar o que a terra já ensinou.',
      },
      {
        index: '03',
        title: 'O outro território',
        body: 'O trabalho de sistemas, IA e empresas vive em jhenni.com.br. Este site é o território da terra. Os dois se falam — sem transformar a fazenda em vitrine de tecnologia.',
      },
    ],
    aside: 'Minas Gerais · Brasil. Sem endereço inventado.',
    next: { to: '/', label: 'Início' },
  },
}
