 const HSK1Columns = [
    {
      title: 'Word',
      dataIndex: 'word',
    },
    {
      title: 'Pingyin',
      dataIndex: 'pingyin',
    },
    {
        title: 'Definition',
        dataIndex: 'definition',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      filters: [
        {
            text: 'Personal',
            value: 'Personal Pron.',
        },
        {
            text: 'Demonstrative Pron.',
            value: 'Demonstrative Pron.',
        },
        {
            text: 'Interrogative Pron.',
            value: 'Interrogative Pron.',
        },
        {
            text: 'Numberal',
            value: 'Numberal',
        },
        {
            text: 'Quantifier',
            value: 'Quantifier',
        },
        {
            text: 'Adverb',
            value: 'Adverb',
        },
        {
            text: 'Conjunction',
            value: 'Conjunction',
        },
        {
            text: 'Preposition',
            value: 'Preposition',
        },
        {
            text: 'Conjunction',
            value: 'Conjunction',
        },
        {
            text: 'Auxiliary',
            value: 'Auxiliary',
        },
        {
            text: 'Interjection',
            value: 'Interjection',
        },
        {
            text: 'Noun',
            value: 'Noun',
        },
        {
            text: 'Verb',
            value: 'Verb',
        },
        {
            text: 'Adjective',
            value: 'Adjective',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.type.indexOf(value) === 0,
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

export default HSK1Columns