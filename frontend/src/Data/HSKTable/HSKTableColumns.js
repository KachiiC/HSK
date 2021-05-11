const HSKTableColumnData = [
    {
        dataIndex: 'chinese_characters',
        sorter: (a, b) => a.chinese_characters.length - b.chinese_characters.length,
    },
    {
        dataIndex: 'pinyin',
        sorter: (a, b) => a.pinyin.localeCompare(b.pinyin),
    },
    {
        dataIndex: 'definition',
    },
    {
        dataIndex: 'type',
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
    },
    {
        dataIndex: 'revision',
    }
]

const HSKTableColumns = HSKTableColumnData.map((column) => {
    column.title = column.dataIndex.split("_").join(" ").toUpperCase()
    column.align = "center"
    column.width = "20%"
    return column
})

export default HSKTableColumns
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