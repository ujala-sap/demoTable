sap.ui.jsview("demotable.demoTable", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demotable.demoTable
	*/ 
	getControllerName : function() {
		return "demotable.demoTable";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demotable.demoTable
	*/ 
	createContent : function(oController) {
		
		// 
		// Create a table object 
		//
		var oTable=new sap.ui.table.Table({ 
			tableId: "mytable", 
			visibleRowCount: 10, 
			editable: false 
			}); 
			// 
			// Set column field 
			// 
			
		var oControl = new sap.ui.commons.TextView({
			text: "{AREA_OID}"}); 
			
		// 
		// Create column 
		// 
		
		oTable.addColumn(new sap.ui.table.Column({ 
			label: new sap.ui.commons.Label({text: "Area ID"}), 
			visible: true, 
			sortProperty: "firstname", 
			filterProperty: "firstname", 
			template: oControl 
			})); 
			
			//
			// Create new column field and column 
			// 
			
		var oControl = new sap.ui.commons.TextView({
			text: "{AREA_NAME}"}); 
			oTable.addColumn(new sap.ui.table.Column({ 
				label: new sap.ui.commons.Label({text: "Area Name"}), 
				visible: true, 
				template: oControl })); 
				

		oTable.bindRows("/results"); 
		
		// 
		// Place it in the html page 
		// 
		
		oTable.placeAt("content");
		
	}

});