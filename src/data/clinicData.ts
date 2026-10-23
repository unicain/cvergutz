/**
 * Dados institucionais, palavras-chave do Google Meu Negócio e tratamentos
 * da Dra. Carolina Vergutz (CRO-RS 34390) - Santa Cruz do Sul, RS
 */

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  location: string;
}

export interface Treatment {
  id: string;
  title: string;
  category: 'estetica' | 'prevencao' | 'urgencia' | 'reabilitacao';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  tagline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'localizacao' | 'atendimento' | 'urgencias' | 'pagamento';
}

export const CLINIC_INFO = {
  name: 'Dra. Carolina Vergutz',
  fullName: 'Carolina Eduarda Vergutz',
  title: 'Cirurgiã-Dentista',
  cro: 'CRO-RS 34390',
  education: 'Graduada em Odontologia pela UFSC (Universidade Federal de Santa Catarina)',
  city: 'Santa Cruz do Sul',
  state: 'RS',
  neighborhood: 'Centro / Higienópolis',
  street: 'Rua Borges de Medeiros, 274',
  building: 'Edifício Leonardo da Vinci',
  complement: 'Sala 401 (4º Andar)',
  postalCode: '96810-034',
  phoneDisplay: '(51) 99645-3890',
  phoneClean: '5551996453890',
  instagram: 'carolinavergutz',
  instagramUrl: 'https://www.instagram.com/carolinavergutz',
  googleMyBusinessUrl: 'https://www.google.com/search?q=Dra.+Carolina+Vergutz+-+Dentista+em+Santa+Cruz+do+Sul',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Edificio+Leonardo+da+Vinci+Rua+Borges+de+Medeiros+274+Santa+Cruz+do+Sul+RS',
  wazeUrl: 'https://waze.com/ul?q=Edificio+Leonardo+da+Vinci+Rua+Borges+de+Medeiros+274+Santa+Cruz+do+Sul',
  hoursWeekday: 'Segunda a Sexta: 08:00 às 18:30',
  hoursSaturday: 'Sábados: 08:30 às 12:00 (com agendamento prévio)',
  urgencyAvailable: 'Plantão para Urgências Odontológicas sob agendamento imediato',
};

// Palavras-chave reais analisadas a partir das métricas do Google Meu Negócio da Dra. Carolina
export const KEYWORD_METRICS = [
  { keyword: 'dentista santa cruz do sul', searches: '+100/mês', intent: 'Alta' },
  { keyword: 'cirurgia dentista santa cruz do sul', searches: 'Frequente', intent: 'Alta' },
  { keyword: 'dentista 24 horas santa cruz do sul', searches: 'Urgência', intent: 'Imediata' },
  { keyword: 'dentista em santa cruz do sul', searches: 'Local', intent: 'Alta' },
  { keyword: 'dentista higienópolis santa cruz do sul', searches: 'Bairro', intent: 'Específica' },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'clareamento',
    title: 'Clareamento Dental Moderno',
    category: 'estetica',
    tagline: 'Sorriso radiante com sensibilidade controlada',
    shortDesc: 'Técnicas combinadas (consultório a laser e moldeira caseira supervisionada) para clarear os dentes com segurança para o esmalte.',
    fullDesc: 'Protocolo personalizado que respeita a estrutura do seu esmalte e previne sensibilidade. A Dra. Carolina avalia a tonalidade ideal para harmonia com sua pele e traços faciais, entregando resultados visíveis e naturais.',
    benefits: ['Sem agredir o esmalte', 'Gel dessensibilizante moderno', 'Resultado natural e duradouro'],
    duration: '1 a 3 sessões ou protocolo combinado de 2 semanas',
  },
  {
    id: 'clinica-geral',
    title: 'Clínica Geral & Profilaxia (Limpeza)',
    category: 'prevencao',
    tagline: 'Prevenção ativa e diagnóstico com câmera intraoral',
    shortDesc: 'Remoção de tártaro, placa bacteriana, aplicação de flúor e check-up minucioso para manter dentes e gengivas 100% saudáveis.',
    fullDesc: 'Uma limpeza odontológica que vai muito além do básico: remoção delicada do cálculo gengival, polimento coronário e orientação prática de higiene bucal para evitar cáries, mau hálito e gengivite.',
    benefits: ['Eliminação de placa e manchas superficiais', 'Prevenção de sangramento gengival', 'Atendimento sem desconforto'],
    duration: 'Aprox. 45 a 60 minutos',
  },
  {
    id: 'restauracoes',
    title: 'Restaurações Estéticas em Resina',
    category: 'estetica',
    tagline: 'Adeus às restaurações escuras com resinas biomiméticas',
    shortDesc: 'Substituição de restaurações antigas e recuperação de dentes fraturados ou cariados com acabamento imperceptível.',
    fullDesc: 'Utilização de compósitos nano-híbridos de última geração que mimetizam a cor, translucidez e brilho dos dentes naturais, garantindo resistência mastigatória e perfeita estética ao sorrir.',
    benefits: ['Cor exata do seu dente', 'Preservação da estrutura dentária sadia', 'Acabamento polido e brilhante'],
    duration: 'Sessão única por dente',
  },
  {
    id: 'urgencias',
    title: 'Atendimento de Urgências Odontológicas',
    category: 'urgencia',
    tagline: 'Alívio rápido para dor de dente, trauma ou dente quebrado',
    shortDesc: 'Canal prioritário de atendimento para situações de emergência, dor aguda de dente, infecções e fraturas acidentais.',
    fullDesc: 'Sabemos como uma dor de dente é incapacitante. A Dra. Carolina oferece atendimento de urgência com acolhimento ágil para diagnosticar a origem da dor, medicar e realizar o procedimento anestésico e de alívio no mesmo dia.',
    benefits: ['Alívio imediato do sofrimento', 'Diagnóstico preciso da causa', 'Orientação medicamentosa pós-atendimento'],
    duration: 'Atendimento de emergência imediato sob contato',
  },
  {
    id: 'canal-endodontia',
    title: 'Tratamento de Canal (Endodontia)',
    category: 'urgencia',
    tagline: 'Salvar o dente com anestesia confortável',
    shortDesc: 'Eliminação da infecção na polpa dental com técnicas contemporâneas para preservar seu dente original sem dor.',
    fullDesc: 'O tratamento de canal moderno não é mais sinônimo de dor. Com anestésicos eficazes e instrumentos automatizados, removemos a inflamação ou infecção interna, selando o dente com total segurança.',
    benefits: ['Preservação do dente natural', 'Técnicas minimamente invasivas', 'Fim da dor e da infecção'],
    duration: 'Em média 1 a 2 sessões',
  },
  {
    id: 'cirurgias-sisos',
    title: 'Cirurgia Oral Menor & Extração de Sisos',
    category: 'urgencia',
    tagline: 'Procedimentos delicados com recuperação orientada',
    shortDesc: 'Remoção de terceiros molares (sisos) inclusos ou impactados e extrações necessárias com planejamento cirúrgico cuidadoso.',
    fullDesc: 'Abordagem cirúrgica humanizada e cuidadosa, priorizando o conforto durante o procedimento e fornecendo todo o protocolo de suporte, medicação e acompanhamento pós-operatório via WhatsApp.',
    benefits: ['Técnica anestésica sem sofrimento', 'Acompanhamento próximo pós-cirúrgico', 'Recuperação tranquila'],
    duration: 'Agendamento prévio com avaliação radiográfica',
  },
  {
    id: 'protese-reabilitacao',
    title: 'Próteses Dentárias & Reabilitação Oral',
    category: 'reabilitacao',
    tagline: 'Devolvendo a confiança para mastigar e sorrir',
    shortDesc: 'Confecção de próteses fixas, removíveis e coroas de porcelana personalizadas para devolver função mastigatória e autoestima.',
    fullDesc: 'Soluções personalizadas para quem perdeu um ou mais dentes. Planejamos a reabilitação funcional para que você volte a mastigar seus alimentos favoritos com segurança e tenha um sorriso harmônico.',
    benefits: ['Mastigação firme e confortável', 'Harmonia estética com o rosto', 'Materiais de alta durabilidade'],
    duration: 'Planejamento individualizado em etapas',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana Scherer',
    location: 'Santa Cruz do Sul (Bairro Higienópolis)',
    date: 'Setembro de 2026',
    rating: 5,
    treatment: 'Clareamento Dental & Restaurações',
    comment: 'Eu sempre tive muito receio de dentista por experiências passadas. A Dra. Carolina foi um anjo! Super atenciosa, explicou cada detalhe do clareamento e teve um cuidado enorme com a sensibilidade. Meu sorriso ficou maravilhoso!',
  },
  {
    id: 't2',
    name: 'Lucas Kist',
    location: 'Santa Cruz do Sul (Centro)',
    date: 'Agosto de 2026',
    rating: 5,
    treatment: 'Urgência Odontológica & Canal',
    comment: 'Tive uma dor de dente horrível numa sexta-feira à noite. Consegui contato com a Dra. Carolina pelo WhatsApp e no sábado cedo ela me atendeu no consultório da Borges de Medeiros. Aliviou a dor na hora, sem pressa. Recomendo de olhos fechados!',
  },
  {
    id: 't3',
    name: 'Patrícia Heinen',
    location: 'Santa Cruz do Sul (Universitário)',
    date: 'Outubro de 2026',
    rating: 5,
    treatment: 'Limpeza & Restauração Estética',
    comment: 'Adorei o atendimento! Nada daquela correria de franquias onde cada vez é um profissional diferente. A Dra. Carolina é pontual, o consultório é aconchegante, cheiroso e transmite muita paz. Já virou minha dentista de confiança.',
  },
  {
    id: 't4',
    name: 'Rodrigo Silveira',
    location: 'Santa Cruz do Sul (Santo Inácio)',
    date: 'Julho de 2026',
    rating: 5,
    treatment: 'Extração de Sisos',
    comment: 'Tirei os dois sisos inferiores com ela e não senti dor nenhuma durante a cirurgia! Ela me deu todas as instruções e mandou mensagem no dia seguinte para saber como eu estava. Profissionalismo 10/10.',
  },
  {
    id: 't5',
    name: 'Carmen Becker',
    location: 'Santa Cruz do Sul (Arroio Grande)',
    date: 'Setembro de 2026',
    rating: 5,
    treatment: 'Reabilitação & Prótese',
    comment: 'Dra. Carolina é uma jovem muito competente, educada e dedicada. Me senti acolhida do início ao fim. Hoje voltei a sorrir nas fotos de família com segurança!',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Onde fica localizado o consultório da Dra. Carolina Vergutz?',
    answer: 'O consultório está situado em localização central e de fácil acesso em Santa Cruz do Sul, na Rua Borges de Medeiros, 274 - Sala 401 (entre o Centro e o bairro Higienópolis). O edifício conta com elevador, acessibilidade completa e facilidade para estacionamento nas proximidades.',
    category: 'localizacao',
  },
  {
    question: 'A Dra. Carolina realiza atendimento para urgências e dor de dente?',
    answer: 'Sim! Para pacientes com dor aguda, fraturas dentárias ou traumas, mantemos um canal prioritário de triagem via WhatsApp. Se você está em Santa Cruz do Sul e precisa de atendimento urgente, envie uma mensagem informando seus sintomas para encaixe prioritário.',
    category: 'urgencias',
  },
  {
    question: 'Como faço para agendar uma consulta ou avaliação?',
    answer: 'O agendamento é feito de forma rápida e direta pelo WhatsApp pelo número (51) 99645-3890 ou através dos botões desta página. Você escolhe o melhor dia e período (manhã ou tarde) de acordo com sua disponibilidade.',
    category: 'atendimento',
  },
  {
    question: 'Qual a diferença entre o atendimento da Dra. Carolina e clínicas de franquia?',
    answer: 'No consultório da Dra. Carolina, todo o seu diagnóstico, planejamento e atendimento são realizados exclusivamente por ela (CRO-RS 34390), sem rotatividade de profissionais. As consultas têm horário reservado sem filas e tempo dedicado para ouvir suas necessidades sem pressa.',
    category: 'atendimento',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos pagamentos via PIX, cartões de crédito (com possibilidade de parcelamento de acordo com o plano de tratamento) e cartões de débito. Fornecemos recibos e notas para dedução no Imposto de Renda e reembolso em convênios (sistema de livre escolha).',
    category: 'pagamento',
  },
  {
    question: 'O clareamento dental causa dor ou sensibilidade?',
    answer: 'Hoje dispomos de protocolos modernos e agentes dessensibilizantes pré e pós-aplicação que minimizam ou anulam o desconforto. A Dra. Carolina personaliza a concentração do gel clareador respeitando a sensibilidade individual de cada paciente.',
    category: 'atendimento',
  },
];
