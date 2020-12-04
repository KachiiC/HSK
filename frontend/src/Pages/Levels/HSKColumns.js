const columnsList = ['chinese_characters', 'pinyin', 'definition']

const displayColumns = columnsList.map((column) => {
  return {title: {column}, dataIndex: {column}}
})

const filterTypes = [
  "adjective",
  "adverb",
  "auxiliary",
  "conjunction",
  "measure",
  "word",
  "noun",
  "numeral",
  "preposition",
  "pronoun",
  "verb",
  "verb & noun"
];

const typesObject = filterTypes.map((type) => {
  return {
    text: {type},
    value: {type},
  }
})

const HSKColumns = [
    displayColumns
    ,
    {
      title: 'Type',
      dataIndex: 'type',
      filters: [
        typesObject
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.type.indexOf(value) === 0,
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

export default HSKColumns
