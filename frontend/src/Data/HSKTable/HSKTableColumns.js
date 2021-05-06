const HSKTableColumn = [
    // Chinese Characters	Pinyin	Definition	Type	Hsk Level
    {
        title: 'Chinese Characters',
        dataIndex: 'chinese_characters',
        sorter: (a, b) => a.chinese_characters.length - b.chinese_characters.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Pinyin',
        dataIndex: 'pinyin',
        sorter: (a, b) => a.pinyin.localeCompare(b.pinyin),
    },
    {
        title: 'Definition',
        dataIndex: 'definition',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        width: "25%",
        filters: [
            {
                text: "Adjective",
                value: 'adjective',
            },
            {
                text: "Adverb",
                value: 'adverb',
            },
            {
                text: "Auxiliary",
                value: 'auxiliary',
            },
            {
                text: "Conjunction",
                value: 'conjunction',
            },
            {
                text: "Measure Word",
                value: 'measure Word',
            },
            {
                text: "Noun",
                value: 'noun',
            },
            {
                text: "Numeral",
                value: 'numeral',
            },
            {
                text: "Preposition",
                value: 'preposition',
            },
            {
                text: "Pronoun",
                value: 'pronoun',
            },
            {
                text: "Verb",
                value: 'verb',
            }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.type.indexOf(value) === 0,
        sorter: (a, b) => a.type.localeCompare(b.type),
    }
]

export default HSKTableColumn
// Adjective,
// Adverb,
// Auxiliary,
// Conjunction,
// Measure Word,
// Noun,
// Numeral,
// Preposition,
// Pronoun,
// Verb,
// Verb & Noun