Ext.define('HR.view.company.List',{
	extend:'Ext.grid.Panel',

xtype: 'companylist',
store: 'Companies',
columns: [
	{
		xtype: 'gridcolumn',
		dataIndex: 'id',
		text: 'ID',
		flex: 1
	},
	{
		xtype: 'gridcolumn',
		dataIndex: 'name',
		text: 'company Name',
		flex: 1
	}	
],

tbar: [
	{text: 'Fill', action: 'fill'},
	{text: 'commit', action: 'commit', disabled: true}
]
});