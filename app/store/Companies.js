Ext.define('HR.store.Companies',{
    extend: 'Ext.data.Store',
    model: 'HR.model.Company',
    data: [
        {id: 1, name: 'Farata Systems'},
        {id: 2, name: 'Sencha'}
    ]
});