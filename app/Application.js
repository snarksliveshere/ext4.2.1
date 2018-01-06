Ext.define('HR.Application', {
    name: 'HR',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        'Companies'
    ],
    models: ['Company'],
    requires: ['Ext.window.*'],
    launch: function(){
        var farata = Ext.create('HR.model.Company',{
            name: 'Farata Systems',
            email: 'info@faratalalala.com'
        });
        var sencha = this.getCompanyModel().create({
            name: 'Sencha',
            email: 'info@thesencha.com'
        });
        Ext.Msg.alert('company: ' + sencha.get('name'));
        var companies = this.getCompaniesStore();
        companies.each(function(company){
            console.log('Company ' + company.get('name'));
        });

    }
});
