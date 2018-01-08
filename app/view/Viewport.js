Ext.define('HR.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.resizer.Splitter',
        'Ext.layout.container.VBox',
        'HR.view.company.List'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
    {
        xtype: 'companylist',
        title: 'Company list',
        flex: 1
    }, {
        xtype: 'splitter'
    }, {
        xtype: 'panel',
        title: 'Associate list',
        flex: 1
    }]
});
