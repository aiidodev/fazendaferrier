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
    kicker: 'Sistema 01 · História',
    title: 'O que faz uma terra se tornar legado.',
    lead: 'Uma fazenda não começa no cartório. Começa quando alguém decide que o chão terá nome, método e continuidade. Esta página explica o ofício de construir patrimônio rural — e o ponto de partida da Fazenda Ferrier.',
    lessons: [
      {
        index: '01',
        title: 'Propriedade não é só imóvel',
        body: 'No agronegócio, terra é ativo produtivo e memória. Quem conduz uma fazenda administra clima, ciclo biológico, gente, cerca, água e tempo. O hectare importa. A vocação importa mais: o que aquele chão sabe fazer bem, ano após ano, sem se esgotar.',
      },
      {
        index: '02',
        title: 'Legado é método, não nostalgia',
        body: 'Famílias que atravessam gerações no campo repetem gestos simples e rigorosos: ler o pasto, registrar o rebanho, respeitar a janela de plantio, não gastar o solo. Tradição, no sentido certo, é disciplina. O nome na porteira só permanece se o manejo permanece.',
      },
      {
        index: '03',
        title: 'Marca é responsabilidade',
        body: 'JF não é enfeite. É a assinatura de quem responde pelo animal, pela ave, pela lavoura e pela água. Uma marca rural de alto padrão não grita. Ela organiza: o que entra, o que sai, o que se conserva.',
      },
      {
        index: '04',
        title: 'A Ferrier começa sem ficção',
        body: 'A Fazenda Ferrier não inventa um passado para parecer antiga. Declara um ponto de partida em Minas Gerais: pecuária, granja e plantação sob a mesma identidade. Os capítulos operacionais serão preenchidos com o real — nunca com datas ou feitos fabricados.',
      },
    ],
    essays: [
      {
        title: 'Por que o agro brasileiro é sistema, não paisagem',
        body: 'O Brasil é potência agrícola porque aprendeu a operar em escala tropical: clima, bioma, logística e ciclo biológico ao mesmo tempo. Entender o ramo é entender que pasto, granja e lavoura são engenharias vivas. A Ferrier se posiciona nesse ofício com clareza — três vocações, uma terra, uma marca.',
      },
      {
        title: 'Patrimônio visual',
        body: 'No campo, identidade se vê de longe: porteira, ferro, monograma. O círculo JF é o patrimônio visual da propriedade. Cada geração deixa marca. Aqui, ela começa com essas duas letras.',
      },
    ],
    glossary: [
      { term: 'Vocação', def: 'O uso que o solo e o clima sustentam com qualidade, sem degradação.' },
      { term: 'Manejo', def: 'Conjunto de decisões diárias sobre animal, planta, água e gente.' },
      { term: 'Legado', def: 'Continuidade com método — o que se deixa funcionando, não só o que se herda.' },
    ],
    aside: 'Uma marca rural nasce quando o trabalho ganha nome. JF é esse nome.',
    next: { to: '/terra', label: 'A terra' },
  },
  terra: {
    path: '/terra',
    kicker: 'Sistema 02 · Terra',
    title: 'A terra ensina antes de produzir.',
    lead: 'Solo, água, relevo e clima decidem o que uma propriedade pode ser. Tecnologia no campo começa por leitura — não por gadget. Quem não lê o chão compra máquina para repetir o erro mais rápido.',
    image: media.terra,
    lessons: [
      {
        index: '01',
        title: 'Vocação do solo',
        body: 'Cada gleba tem um papel: pastagem, lavoura, reserva, recarga de água, sombra. Forçar o uso errado custa caro e esgota o recurso. O manejo inteligente pergunta primeiro: o que esta terra aguenta, de forma repetível?',
      },
      {
        index: '02',
        title: 'Água é infraestrutura',
        body: 'Nascente, curso, bebedouro, irrigação e chuva organizam a fazenda inteira. Sem água estável não há rebanho, granja nem safra. Conservar mata ciliar e recarga não é discurso ambiental de vitrine: é continuidade operacional.',
      },
      {
        index: '03',
        title: 'Paisagem com função',
        body: 'Campo aberto, cerca, estrada de terra, curral e galpão não são cenário. São arquitetura do trabalho. Propriedade de alto padrão trata o desenho do chão como planta baixa: cada área tem um fluxo.',
      },
      {
        index: '04',
        title: 'Dado começa no olho',
        body: 'Sensor, mapa e planilha só valem se alguém ainda sabe ver compactação, erosão, capim passado do ponto, bezerro atrasado. Agro tech de verdade é caderno de campo com rigor — digital quando ajuda, analógico quando o chão pede.',
      },
    ],
    essays: [
      {
        title: 'O mapa invisível',
        body: 'Antes de existir um mapa interativo da Ferrier, existe a lógica de qualquer fazenda bem pensada: zonas de produção, zonas de descanso, zonas de água, zonas de gente. Quando o arquivo real da propriedade existir, ele entra neste capítulo — ponto a ponto, sem inventar nascente nem hectare.',
      },
    ],
    glossary: [
      { term: 'Gleba', def: 'Porção de terra com uso definido dentro da propriedade.' },
      { term: 'Mata ciliar', def: 'Vegetação que protege cursos d’água e recarga o sistema hídrico.' },
      { term: 'Compactação', def: 'Solo adensado que impede raiz, água e vida. Sinal de manejo a corrigir.' },
    ],
    aside: 'O mapa da Ferrier será preenchido com os pontos reais da propriedade. Até lá, o ofício é ler a terra.',
    next: { to: '/rebanho', label: 'O rebanho' },
  },
  rebanho: {
    path: '/rebanho',
    kicker: 'Sistema 03 · Pecuária',
    title: 'Pecuária é tempo feito carne, pasto e método.',
    lead: 'Criar gado não é um retrato de animais no campo. É um sistema: genética, pastagem, sanidade, bem-estar e leitura de lote. Aqui está o ramo — a Ferrier entra como quem assume o ofício, sem números inventados.',
    image: media.rebanho,
    lessons: [
      {
        index: '01',
        title: 'O ciclo não se apressa',
        body: 'Cria, recria, engorda: cada fase pede pasto, sombra, água e olho no lote. Quem pula etapa paga em sanidade e resultado. Pecuária de qualidade é paciência com protocolo.',
      },
      {
        index: '02',
        title: 'Pasto é cultura',
        body: 'O bovino converte capim em proteína. Por isso lotação, descanso e reforma de pastagem pesam tanto quanto o animal. Campo degradado não é “natural”: é falha de cuidado e de leitura.',
      },
      {
        index: '03',
        title: 'Manejo é linguagem',
        body: 'Curral, condução, rastreio e bem-estar não são detalhe. Rebanho bem conduzido estressa menos e rende com ética. Força, no campo, é controle. Nunca pressa no cimento nem no grito.',
      },
      {
        index: '04',
        title: 'Rastrear é honrar',
        body: 'Saber de onde veio, o que comeu, quando nasceu. Rastreabilidade é a camada tech mais honesta da pecuária: memória do animal. Quando a Ferrier publicar seus dados de rebanho, eles entram aqui com nome e método — não com marketing.',
      },
    ],
    essays: [
      {
        title: 'O Brasil e o gado',
        body: 'A pecuária brasileira opera em biomas distintos e em escalas que o mundo observa. O debate sério une produtividade e responsabilidade: pasto bem manejado, água protegida, animal respeitado. Excelência não é volume cego. É ciclo fechado com dignidade.',
      },
    ],
    glossary: [
      { term: 'Lotação', def: 'Quantos animais o pasto sustenta sem se degradar.' },
      { term: 'Rastreio', def: 'Identidade e histórico do animal ao longo da vida.' },
      { term: 'Sanidade', def: 'Prevenção e cuidado de saúde do rebanho, antes da correção tardia.' },
    ],
    aside: 'Dados de genética, escala e raça da Ferrier entram quando forem reais.',
    next: { to: '/granja', label: 'A granja' },
  },
  granja: {
    path: '/granja',
    kicker: 'Sistema 04 · Avicultura',
    title: 'Granja é precisão em escala viva.',
    lead: 'Avicultura é um dos sistemas mais técnicos do campo: ambiente, biossegurança, nutrição e rotina. Uma granja bem feita parece silenciosa — porque o método está no detalhe, não no espetáculo.',
    image: media.granja,
    lessons: [
      {
        index: '01',
        title: 'Ambiente controla o resultado',
        body: 'Temperatura, ventilação, densidade, luz e higiene definem o lote. Diferente do pasto aberto, a granja é um microclima. Errar o ambiente é errar o ciclo inteiro.',
      },
      {
        index: '02',
        title: 'Biossegurança não é luxo',
        body: 'Fluxo de pessoas, desinfecção, isolamento de núcleos e rastreio de ração existem para impedir que uma falha vire perda. No ramo, prevenção vale mais do que correção.',
      },
      {
        index: '03',
        title: 'Rotina é o produto',
        body: 'Água, ração, observação diária. A granja ensina que excelência rural também pode ser industrial no melhor sentido: repetível, limpa, responsável. Cuidado, aqui, é protocolo.',
      },
      {
        index: '04',
        title: 'Tecnologia invisível',
        body: 'Controladores de clima, alarmes, registros. O que é “tech” na granja não precisa parecer futurista. Precisa funcionar às três da manhã. A Ferrier trata a granja como vocação de precisão — e publicará o manejo real quando ele estiver documentado.',
      },
    ],
    essays: [
      {
        title: 'Por que granja e pecuária convivem',
        body: 'Uma propriedade com gado e granja opera dois tempos: o lento do pasto e o curto da ave. Isso exige gente, higiene e calendário distintos. A inteligência está em não misturar fluxos — e em usar a mesma terra com respeito às regras de cada sistema.',
      },
    ],
    glossary: [
      { term: 'Biossegurança', def: 'Barreiras para impedir entrada e disseminação de doença.' },
      { term: 'Densidade', def: 'Quantas aves o espaço comporta com conforto e desempenho.' },
      { term: 'Lote', def: 'Grupo criado e acompanhado sob o mesmo protocolo.' },
    ],
    aside: 'A granja da Ferrier será descrita com o manejo real. Até lá, o ofício.',
    next: { to: '/producao', label: 'A produção' },
  },
  producao: {
    path: '/producao',
    kicker: 'Sistema 05 · Agricultura',
    title: 'Plantar é conversar com o ano.',
    lead: 'Agricultura organiza o tempo em safra: solo, semente, clima, colheita. Uma fazenda que também planta aprende a integrar lavoura e criação — o mesmo hectare, vários ciclos, se o método for honesto.',
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
        body: 'Plantio e colheita não obedecem a vontade: obedecem a janela. Ler o ano — chuva, seca, geada — é o ofício. Máquina ajuda; a decisão certa acontece antes de ela ligar.',
      },
      {
        index: '03',
        title: 'Integração lavoura-pecuária',
        body: 'A lavoura pode alimentar o rebanho; o rebanho devolve matéria ao solo. Sistemas integrados são uma das ideias mais inteligentes do agro brasileiro: produtividade com lógica de ciclo, não de extração.',
      },
      {
        index: '04',
        title: 'Agricultura de precisão, sem teatro',
        body: 'Mapa de talhão, taxa variável, satélite: ferramentas existem. Elas só fazem sentido depois da pergunta certa. A Ferrier não vende “tecnologia”. Usa método. Culturas e safras reais entram neste capítulo quando o arquivo agrícola existir.',
      },
    ],
    essays: [
      {
        title: 'O que a lavoura ensina à granja e ao gado',
        body: 'Quem planta aprende janela. Quem cria aprende ritmo. Quem faz os dois na mesma propriedade precisa de calendário único: o dia do pasto, o dia do lote, o dia da colheita. Isso é operação — e é cultura.',
      },
    ],
    glossary: [
      { term: 'Talhão', def: 'Unidade de área com manejo agrícola próprio.' },
      { term: 'ILP', def: 'Integração lavoura-pecuária: o mesmo espaço, usos complementares.' },
      { term: 'Janela', def: 'Período em que o clima permite plantar ou colher com menor risco.' },
    ],
    aside: 'Culturas e safras da Ferrier entram quando o arquivo agrícola estiver completo.',
    next: { to: '/metodo', label: 'O método' },
  },
  metodo: {
    path: '/metodo',
    kicker: 'Arquivo · Método',
    title: 'O campo como sistema, não como palco.',
    lead: 'Agro tech, aqui, não é painel colorido. É a sequência certa: observar, registrar, decidir, repetir. Esta página descreve o método — aplicável a qualquer fazenda séria, e o que a Ferrier assume como disciplina.',
    lessons: [
      {
        index: '01',
        title: 'Ler antes de medir',
        body: 'Sensor, satélite e planilha só fazem sentido depois do olho no pasto, no lote e no talhão. Quem mede sem ler acelera o erro. O primeiro instrumento é a presença.',
      },
      {
        index: '02',
        title: 'Registrar para não esquecer',
        body: 'Ciclo de gado, rotina de granja e janela de safra cabem em caderno ou em sistema. O formato importa menos do que a constância. Sem registro, a fazenda recomeça do zero a cada estação.',
      },
      {
        index: '03',
        title: 'Protocolo impede improviso',
        body: 'Curral, biossegurança, plantio: cada um tem ordem. Protocolo não engessa — protege o animal, a ave, o solo e a gente que trabalha. Improviso no campo quase sempre custa caro.',
      },
      {
        index: '04',
        title: 'Integração é decisão, não moda',
        body: 'Juntar lavoura e criação no mesmo hectare só vale se o solo e a água aguentam. Método é saber quando integrar — e quando separar fluxos, como na granja.',
      },
    ],
    essays: [
      {
        title: 'Tecnologia invisível',
        body: 'O que funciona às três da manhã não precisa parecer ficção. Alarme de clima, rastreio de lote, calendário de safra: ferramentas a serviço do ofício. A Ferrier não vende software. Usa rigor. O outro território — engenharia de sistemas — vive em jhenni.com.br e na AIIDO.',
      },
    ],
    glossary: [
      { term: 'Protocolo', def: 'Ordem repetível de cuidado. O contrário do “depois a gente vê”.' },
      { term: 'Caderno de campo', def: 'Memória operacional: o que foi visto, feito e decidido.' },
      { term: 'Integração', def: 'Usos complementares do mesmo espaço, quando o chão permite.' },
    ],
    aside: 'Método é o que permanece quando a foto sai do ar.',
    next: { to: '/agua', label: 'A água' },
  },
  agua: {
    path: '/agua',
    kicker: 'Arquivo · Água',
    title: 'Sem água, não há ofício.',
    lead: 'Nascente, bebedouro, higiene da granja, chuva na lavoura. A água atravessa os três sistemas da fazenda. Tratar água como detalhe é o erro mais caro do ramo.',
    image: media.terra,
    lessons: [
      {
        index: '01',
        title: 'Infraestrutura viva',
        body: 'Cerca se conserta. Máquina se troca. Água contaminada ou escassa derruba rebanho, lote e safra juntos. Conservar curso, recarga e qualidade é operação, não acessório.',
      },
      {
        index: '02',
        title: 'Gado bebe o manejo',
        body: 'Distância até o bebedouro, sombra, limpeza. O animal que caminha demais por água ruim perde condição. Pecuária de qualidade desenha o acesso à água com o mesmo cuidado do pasto.',
      },
      {
        index: '03',
        title: 'Granja é água controlada',
        body: 'Na avicultura, água é alimento líquido: volume, temperatura, higiene da linha. Falha aqui vira problema de lote inteiro. Protocolo de água é biossegurança.',
      },
      {
        index: '04',
        title: 'Lavoura espera a janela',
        body: 'Excesso e falta decidem a safra. Ler o ano — e não apostar contra o ciclo — é agricultura. Irrigação só faz sentido com vocação e conta certa, nunca por vaidade de equipamento.',
      },
    ],
    essays: [
      {
        title: 'Mata ciliar não é enfeite',
        body: 'A vegetação que protege o curso d’água protege o negócio. Propriedade de alto padrão trata a beira d’água como ativo. Quando o mapa real da Ferrier existir, as nascentes entram neste arquivo — sem ponto inventado no horizonte.',
      },
    ],
    glossary: [
      { term: 'Recarga', def: 'Capacidade do solo e da vegetação de devolver água ao sistema.' },
      { term: 'Mata ciliar', def: 'Faixa de vegetação que segura margem, sombra e vida na água.' },
      { term: 'Linha de água', def: 'Na granja, o circuito que o lote bebe. Higiene é desempenho.' },
    ],
    aside: 'Água é o fio que costura gado, granja e plantação.',
    next: { to: '/marca', label: 'A marca' },
  },
  marca: {
    path: '/marca',
    kicker: 'Arquivo · Marca',
    title: 'Uma marca. Uma identidade.',
    lead: 'JF é o monograma da Fazenda Ferrier. No campo, marca não é logotipo de campanha: é ferro, porteira e responsabilidade. Cada geração deixa a sua. Aqui, ela começa com essas duas letras.',
    lessons: [
      {
        index: '01',
        title: 'O círculo',
        body: 'Forma fechada, metal, silêncio. O círculo contém o monograma como a cerca contém o ofício: limite claro, interior cuidado.',
      },
      {
        index: '02',
        title: 'J e F',
        body: 'Duas letras, um nome de trabalho. Não anunciam volume. Assinam o que se faz com o animal, a ave e a terra.',
      },
      {
        index: '03',
        title: 'Patrimônio visual',
        body: 'Identidade rural de alto padrão se reconhece de longe e se respeita de perto. JF não compete com o horizonte. Acompanha.',
      },
      {
        index: '04',
        title: 'Uso com rigor',
        body: 'A marca não se espalha em excesso. Aparece onde o trabalho pede assinatura. O restante é a terra — protagonista.',
      },
    ],
    essays: [
      {
        title: 'Marca do gado, marca da casa',
        body: 'Historicamente, o ferro no animal é continuidade e responsabilidade. O monograma digital da Ferrier herda essa lógica: identificar, não ornamentar. Quando o ferro real estiver documentado, este capítulo recebe a peça — sem inventar heráldica.',
      },
    ],
    glossary: [
      { term: 'Monograma', def: 'Letras fundidas numa só forma. JF é a da Ferrier.' },
      { term: 'Ferro', def: 'Marca tradicional de identificação do rebanho.' },
      { term: 'Assinatura', def: 'O nome que responde pelo manejo.' },
    ],
    aside: 'JF · Fazenda Ferrier · Tradição · Terra · Legado',
    next: { to: '/origem', label: 'A origem' },
  },
  origem: {
    path: '/origem',
    kicker: 'Sistema 06 · Origem',
    title: 'Quem lê sistemas também lê a terra.',
    lead: 'Jhenni Nascimento transita entre engenharia de alta escala e o ofício rural. Não é contraste. É a mesma disciplina: mapear, persistir, deixar método — em código e em chão.',
    lessons: [
      {
        index: '01',
        title: 'Dois territórios, uma assinatura',
        body: 'Engenheira de software, sócia-fundadora da AIIDO e mente por trás da primeira IA de cobrança via Pix Automático do Brasil. Na Fazenda Ferrier, a mesma precisão se volta ao que não se substitui: gado, granja e plantação.',
      },
      {
        index: '02',
        title: 'Mapear para cuidar',
        body: '“Se pode ser mapeado, pode ser automatizado. Se gera dados, pode ser inteligente.” No campo, mapear é observar ciclo, registrar manejo, não improvisar o que a terra já ensinou. Automação sem leitura é pressa. Leitura sem registro é esquecimento.',
      },
      {
        index: '03',
        title: 'Agro + engenharia, sem vitrine',
        body: 'Este site não é um portfólio de IA. É o território da terra. A inteligência entra como rigor — protocolo, rastreio, calendário — nunca como estética de startup no pasto.',
      },
      {
        index: '04',
        title: 'O outro território',
        body: 'Sistemas, empresas e engenharia de IA vivem em jhenni.com.br. A Ferrier vive aqui. Os dois se falam porque a mesma pessoa responde pelos dois. Minas Gerais · Brasil. Sem endereço inventado.',
      },
    ],
    essays: [
      {
        title: 'Por que uma engenheira no campo',
        body: 'O agro contemporâneo pede quem entenda DRE e chuva, servidor e bezerro, protocolo e gente. Jhenni constrói ativos digitais de alta escala e, na mesma medida, conduz uma propriedade com três vocações. Continuidade é o nome do ofício nos dois lados da porteira.',
      },
    ],
    glossary: [
      { term: 'AIIDO', def: 'Engenharia de IA e sistemas inteligentes — o outro território de Jhenni.' },
      { term: 'Protocolo', def: 'Sequência repetível de cuidado. No campo e no software, é o que impede o improviso.' },
      { term: 'Assinatura', def: 'JF na terra. O nome próprio no trabalho que permanece.' },
    ],
    aside: 'Minas Gerais · Brasil. Contato: o ofício continua.',
    next: { to: '/contato', label: 'Contato' },
  },
  contato: {
    path: '/contato',
    kicker: 'Arquivo · Contato',
    title: 'A conversa começa pelo ofício.',
    lead: 'A Fazenda Ferrier está em Minas Gerais. Não publicamos endereço inventado. Para fala institucional, parceria ou imprensa, o canal é direto — e o outro território de engenharia permanece em jhenni.com.br.',
    lessons: [
      {
        index: '01',
        title: 'Onde',
        body: 'Minas Gerais · Brasil. A localização exata entra neste arquivo quando for o momento de publicá-la. Até lá, o que importa é o ofício: pecuária, granja e lavoura.',
      },
      {
        index: '02',
        title: 'Como falar',
        body: 'Escreva para contato@fazendaferrier.com.br. Assuntos da propriedade ficam neste domínio. Engenharia, IA e sistemas: jhenni.com.br e aiido.com.br.',
      },
      {
        index: '03',
        title: 'O que não prometemos',
        body: 'Não vendemos visita de vitrine nem pacote de “experiência rural” genérico. A conversa é sobre terra, manejo e continuidade.',
      },
      {
        index: '04',
        title: 'Marca e uso',
        body: 'JF e o nome Fazenda Ferrier são identidade da propriedade. Uso institucional pede conversa prévia.',
      },
    ],
    essays: [
      {
        title: 'Dois territórios, um critério',
        body: 'Quem chega pela fazenda encontra o campo. Quem chega pela engenharia encontra a AIIDO. Os dois se reconhecem na mesma disciplina: mapear, persistir, deixar método.',
      },
    ],
    glossary: [
      { term: 'Institucional', def: 'Fala da propriedade, da marca e do ofício rural.' },
      { term: 'AIIDO', def: 'O território de engenharia de IA — outro endereço, mesma origem.' },
      { term: 'MG', def: 'Minas Gerais. O chão desta assinatura.' },
    ],
    aside: 'contato@fazendaferrier.com.br · Minas Gerais · Brasil',
    next: { to: '/', label: 'Início' },
  },
}

export const homeSystems = [
  {
    code: 'PEC',
    title: 'Pecuária',
    text: 'Tempo, pasto, lote e rastreio. O gado como sistema — não como cartão-postal.',
  },
  {
    code: 'AVI',
    title: 'Avicultura',
    text: 'Microclima, biossegurança e rotina. Precisão que não precisa parecer ficção.',
  },
  {
    code: 'AGR',
    title: 'Agricultura',
    text: 'Solo, janela, safra e integração. O hectare que produz mais de um ciclo.',
  },
]
