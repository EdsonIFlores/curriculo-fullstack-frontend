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
        ano: "Em Andamento (Previsão: dez/2026)",
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
        ano: "Mar/2023 - (transferido em Jul/2024)",
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
    {
        id: 6,
        titulo: "Bootcamp Mikrotik - Configuração e Gerenciamento de Redes em pratica",
        instituicao: "Hackone ",
        ano: "Junho de 2024 ", 
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Fundamentos essenciais do Mikrotik RouterOS para configurar e administrar redes de forma eficaz.",
            "Explorando topicos como configuração de roteadores e firewall, VPNs, e gerenciamento de largura de banda.",
            "Preparando-se para otimizar e proteger redes utilizando as ferramentas avançadas do Mikrotik.",
        ],
        competencias: ["Mikrotik", "Redes", "Configuração de Roteadores"]
    },
    {
        id: 7,
        titulo: "Introdução ao Desenvolvimento Web",
        instituicao: "freeCodeCamp",
        ano: "Dezembro de 2023",  
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Fundamentos de HTML, CSS e JavaScript para construção de websites responsivos.",   
            "Práticas de design web e usabilidade.",
            "Introdução ao desenvolvimento Front-End com foco na experiência do usuário."
        ],
        competencias: ["HTML", "CSS", "JavaScript", "Design Responsivo"]
    },
    {
        id: 8,
        titulo: "Fundamentos de Redes de Computadores", 
        instituicao: "Cisco Networking Academy",
        ano: "Novembro de 2023",  
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Conceitos básicos de redes, incluindo modelos OSI e TCP/IP.",
            "Configuração e gerenciamento de dispositivos de rede.",
            "Fundamentos de segurança de rede e resolução de problemas."    
        ],
        competencias: ["Redes de Computadores", "Configuração de Dispositivos", "Segurança de Rede"]
    },
    {
        id: 9,
        titulo: "JavaScript Essentials",            
        instituicao: "Cisco Networking Academy",
        ano: "Outubro de 2023",  
        tipo: 'CERTIFICACAO',   
        detalhes: [
            "Fundamentos de JavaScript, incluindo sintaxe, tipos de dados e estruturas de controle.",
            "Manipulação do DOM e eventos.",
            "Introdução à programação assíncrona com Promises e async/await."
        ],
        competencias: ["JavaScript", "DOM", "Programação Assíncrona"]
    },
    {
        id: 10,
        titulo: "Introdução ao Desenvolvimento de Aplicações Web com Node.js",
        instituicao: "Cisco Networking Academy",
        ano: "Setembro de 2023",  
        tipo: 'CERTIFICACAO',
        detalhes: [
            "Fundamentos do Node.js e seu ecossistema.",
            "Criação de servidores web simples e manipulação de requisições HTTP.", 
            "Introdução ao uso de frameworks como Express.js para desenvolvimento Back-End."
        ],
        competencias: ["Node.js", "Express.js", "Desenvolvimento Back-End"]
    },   
    
    // Inclua o restante dos seus cursos aqui seguindo o mesmo padrão...
];