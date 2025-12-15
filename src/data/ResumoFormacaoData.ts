export interface FormacaoItem {
    id: number;
    titulo: string;
    instituicao: string;
    ano: string;
    tipo: 'ACADEMICO' | 'CERTIFICACAO';
    detalhes: string[]; // O que você estudou
    competencias: string[]; // Skills adquiridas
}

export const ResumoFormacaoData: FormacaoItem[] = [
    // --- FOCO FULL-STACK (DESTAQUE) ---
    {
        id: 1,
        titulo: "Desenvolvedor Full-Stack (MERN)",
        instituicao: "SENAI Barreiras (Plataforma EAD)",
        ano: "Em Andamento (Previsão: [MÊS/ANO])",
        tipo: 'ACADEMICO',
        detalhes: [
            "Construção de aplicações web Full-Stack com MongoDB, Express.js, React e Node.js.",
            "Desenvolvimento de APIs RESTful e lógica de Back-End robusta.",
            "Práticas de componentização com React e gerenciamento de estado."
        ],
        competencias: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Next.js"]
    },
    
    // --- FORMAÇÃO SUPERIOR ---
    {
        id: 2,
        titulo: "Ciência da Computação (Bacharelado)",
        instituicao: "Instituto Federal de Goiás (IFG)",
        ano: "Mar/2023 - Mar/2027 (Em Andamento)",
        tipo: 'ACADEMICO',
        detalhes: [
            "Sólida base em algoritmos, estrutura de dados e matemática computacional.",
            "Estudos sobre arquitetura de software e otimização de performance."
        ],
        competencias: ["Algoritmos", "Lógica de Programação", "Estrutura de Dados"]
    },
    {
        id: 3,
        titulo: "Bacharelado em Ciência e Tecnologia",
        instituicao: "Universidade Federal do Oeste da Bahia (UFOB)",
        ano: "2018 - 2022 (Não Concluído/Transferido)",
        tipo: 'ACADEMICO',
        detalhes: [
            "Estudo de fundamentos de hardware, redes de computadores e lógica.",
            "Desenvolvimento de competências em Resolução de Problemas e Comunicação em ambientes técnicos."
        ],
        competencias: ["Resolução de Problemas", "Rede de Computadores", "Comunicação"]
    },
    
    // --- CERTIFICAÇÕES RELEVANTES ---
    {
        id: 4,
        titulo: "Aprenda tudo sobre o Linux! Completo e atualizado v2024!",
        instituicao: "Udemy Alumni",
        ano: "Julho de 2024",
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Administração de Sistemas, Linha de Comando e Shell Scripting.",
            "Gerenciamento de programas, processos e pacotes.",
            "Base fundamental para Back-End e ambientes de produção com Node.js."
        ],
        competencias: ["Linux", "Shell Script", "Administração de Sistemas"]
    },
    {
        id: 5,
        titulo: "Cybersecurity Essentials",
        instituicao: "Cisco Networking Academy",
        ano: "Julho de 2024",
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Princípios de Confidencialidade, Integridade e Disponibilidade (CIA).",
            "Análise de táticas e técnicas usadas por criminosos virtuais.",
            "Uso de tecnologias e procedimentos para proteger a confidencialidade da rede."
        ],
        competencias: ["Segurança de Rede", "Análise de Dados", "Administração de Redes"]
    },
    // Inclua o restante dos seus cursos aqui seguindo o mesmo padrão...
];