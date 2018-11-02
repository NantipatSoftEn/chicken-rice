sequelize.sync()
    .then(() => model.symptom.create({
        id: '',
        name : 'headage',
        price: 'sdfdsfs',
        image:'dfsf',
        des:'sdsd',
        type:'test',
        createdAt: '',
        updatedAt: ''
    }))