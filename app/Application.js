Ext.define('HR.Application', {
    extend: 'Ext.app.Application',
    requires: 'Ext.window.*',

    name: 'HR',

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        'Companies'
    ],

    models: [
        'Company'
    ],

    launch: function () {
        var farata = Ext.create('HR.model.Company', {
            name: 'Farata Systems',
            email: 'info@faratasystems.com'
        });

        var sencha = this.getCompanyModel().create({
            name: 'Sencha',
            email: 'info@sencha.com'
        });

        Ext.Msg.alert('Company: ' + farata.get('name'));
        console.log('Company: ' + sencha.get('name'));

        var companies = this.getCompaniesStore();
        companies.each(function (company) {
            console.log('Company: ' + company.get('name'));
        });
    }

});
