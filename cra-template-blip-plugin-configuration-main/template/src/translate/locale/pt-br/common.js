const translations = {
    generalConfig: {
        title: 'Informações Gerais',
        subtitle:
            'Preencha as informações que vão aparecer na saudação e finalização do chat.',
        greetingSubtitle: 'Apresentação na primeira saudação do chat',
        otherChannelSubtitle:
            'Outros canais apresentados na finalização do chat',
        fields: {
            Company_name: {
                placeholder: 'Digite o nome do chatbot aqui',
                label: 'Nome do Chatbot'
            },
            Company_site: {
                placeholder: 'Digite o site da sua empresa aqui',
                label: 'Endereço de site'
            },
            Company_app: {
                placeholder: 'App da empresa',
                helper: 'Nome do App da empresa (se houver). Ex: Take BLiP App'
            },
            PesquisaDiasNps: {
                placeholder: 'Intervalo da Pesquisa NPS',
                helper: 'Intervalo da Pesquisa NPS. Ex: 90'
            },
            Days_nps_survey: {
                text: 'Fazer pesquisa de satisfação a cada',
                days: 'dias'
            },
            Company_email: {
                placeholder: 'Digite o e-mail sua empresa aqui',
                label: 'Endereço de e-mail',
                error: 'E-mail inválido'
            },
            Company_phone: {
                placeholder: '(XX) XXXX-XXXX',
                label: 'Telefone',
                error: 'Telefone inválido'
            },
            Company_instagram: {
                placeholder: 'Digite o link do instagram da sua empresa aqui',
                label: 'Instagram'
            },
            Company_facebook: {
                placeholder: 'Digite o link do facebook da sua empresa aqui',
                label: 'Facebook'
            }
        }
    },
    tittle: 'Informações Gerais',
    title: {
        homePage: 'Configuração de Template',
        infoParagraph:
            'Preencha os campos abaixo para configurar as informações do seu Contato Inteligente.'
    },
    button: {
        next: 'Próximo',
        previous: 'Voltar',
        save: 'Salvar',
        facebook: 'Conectar ao facebook',
        exit: 'Sair'
    },
    facebook: {
        title: 'Conecte-se ao Facebook Business',
        infoParagraph:
            'Clique no botão ao lado para acessar sua conta do facebook business'
    },
    yes_no: ['Sim', 'Não'],
    fields: {
        Company_name: {
            placeholder: 'Nome da Empresa',
            helper: 'É o nome que aparecerá no fluxo conversacional. Ex: Take BLiP'
        },
        Company_site: {
            placeholder: 'Site da empresa',
            helper: 'É o site que ficará disponivel no fluxo conversacional. Ex: https://www.take.net/'
        },
        Company_app: {
            placeholder: 'App da empresa',
            helper: 'Nome do App da empresa (se houver). Ex: Take BLiP App'
        },
        PesquisaDiasNps: {
            placeholder: 'Intervalo da Pesquisa NPS',
            helper: 'Intervalo da Pesquisa NPS. Ex: 90'
        },
        Days_nps_survey: {
            placeholder: 'Intervalo da Pesquisa NPS',
            helper: 'Intervalo da Pesquisa NPS. Ex: 90'
        },
        Company_email: {
            placeholder: 'E-mail da empresa',
            helper: 'Endereço de email da empresa (se houver). Ex: take@blip.net'
        },
        Company_phone: {
            placeholder: 'Telefone da empresa',
            helper: 'Telefone da empresa Ex: +55 (31) 3349-6201'
        },
        Company_instagram: {
            placeholder: 'Instagram da empresa',
            helper: 'É o instagram que aparecerá no fluxo conversacional (se houver). Ex: TakeBLiP'
        },
        Company_facebook: {
            placeholder: 'Facebook da empresa',
            helper: 'É o facebook que aparecerá no fluxo conversacional (se houver). Ex: Take BLiP'
        },
        Holidays: {
            placeholder: 'Datas dos feriados',
            helper: 'Datas no formato “21/02” separadas por “,”. '
        },
        Work_days: {
            text: 'Selecione os dias de atendimento'
        },
        Holiday_attendance: {
            text: 'Atendimento no feriado'
        },
        Working_day_opening_hour: {
            text: 'Horário de atendimento na semana'
        },
        Saturday_opening_hour: {
            text: 'Horário de atendimento aos sábados'
        },
        Sunday_opening_hour: {
            text: 'Horário de atendimento aos domingos'
        },
        Holiday_opening_hour: {
            text: 'Horário de atendimento nos feriados'
        },
        DaysOfWeek: {
            sunday: {
                abbreviation: 'D',
                extensive: 'Domingo',
                value: 'Domingo'
            },
            monday: {
                abbreviation: 'S',
                extensive: 'Segunda',
                value: 'Segunda'
            },
            tuesday: {
                abbreviation: 'T',
                extensive: 'Terça',
                value: 'Terça'
            },
            wednesday: {
                abbreviation: 'Q',
                extensive: 'Quarta',
                value: 'Quarta'
            },
            thursday: {
                abbreviation: 'Q',
                extensive: 'Quinta',
                value: 'Quinta'
            },
            friday: { abbreviation: 'S', extensive: 'Sexta', value: 'Sexta' },
            saturday: {
                abbreviation: 'S',
                extensive: 'Sábado',
                value: 'Sábado'
            }
        },
        time_zone_attendance_label: 'Fuso horário',
        time_zone_attendance: [
            { value: -12, label: '(GMT -12:00) Enewetak, Kwajalein' },
            { value: -11, label: '(GMT -11:00) Ilhas Midway, Samoa' },
            { value: -10, label: '(GMT -10:00) Havaí' },
            { value: -9, label: '(GMT -9:00) Alasca' },
            {
                value: -8,
                label: '(GMT -8:00) Horário do Pacífico (EUA Canadá)'
            },
            {
                value: -7,
                label: '(GMT -7:00) Hora das montanhas (EUA Canadá)'
            },
            { value: -6, label: '(GMT -6:00) Cidade do México' },
            { value: -5, label: '(GMT -5:00) Bogota, Lima' },
            { value: -4, label: '(GMT -4:00) Caracas, La Paz' },
            {
                value: -3,
                label: '(GMT -3:00) Brasília, Buenos Aires, Georgetown'
            },
            { value: -2, label: '(GMT -2:00) Atlántico medio' },
            { value: -1, label: '(GMT -1:00) Açores, Ilhas de Cabo Verde' },
            { value: 0, label: '(GMT 00:00) Londres, Lisboa' },
            {
                value: +1,
                label: '(GMT +1:00) Bruxelas, Copenhague, Madrid, Paris'
            },
            { value: +2, label: '(GMT +2:00) Kaliningrado, África do Sul' },
            {
                value: +3,
                label: '(GMT +3:00) Bagdá, Riade, Moscou, São Petersburgo'
            },
            {
                value: +4,
                label: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi'
            },
            {
                value: +5,
                label: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent'
            },
            { value: +6, label: '(GMT +6:00) Almaty, Dhaka, Colombo' },
            { value: +7, label: '(GMT +7:00) Bangkok, Hanói, Jacarta' },
            {
                value: +8,
                label: '(GMT +8:00) Pequim, Perth, Cingapura, Hong Kong'
            },
            {
                value: +9,
                label: '(GMT +9:00) Tóquio, Seul, Osaka, Sapporo, Yakutsk'
            },
            {
                value: +10,
                label: '(GMT +10:00) Austrália Oriental, Guam, Vladivostok'
            },
            {
                value: +11,
                label: '(GMT +11:00) Magadan, Ilhas Salomão, Nova Caledônia'
            },
            {
                value: +12,
                label: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka'
            },
            { value: +13, label: "(GMT +13:00) Apia, Nuku'alofa" },
            { value: +14, label: '(GMT +14:00) Ilhas Line, Tokelau' }
        ]
    },
    stepper: {
        step_one: 'Informações Gerais',
        step_two: 'Menu',
        step_three: 'Dias e horários de atendimento'
    }
};

export default translations;
