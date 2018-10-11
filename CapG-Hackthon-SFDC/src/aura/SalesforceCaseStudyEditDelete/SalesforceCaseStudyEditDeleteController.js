({
	doInit : function(component, event, helper) {
        helper.loadAccounts(component, event);
	},
    save : function(component, event, helper) {
        component.find("edit").get("e.recordSave").fire();
        /*try {
		component.find("edit").get("e.recordSave").fire();
        }catch (e) {
    		console.log(e);
  			}*/
        location.reload();
    },
    edit : function(component, event, helper) {
        console.log('Edit record ID..1');
        //component.set("v.isOpen",true);
        component.set("v.isView",false);
        component.set("v.isEdit",true);
        component.set("v.isCreate",false);
        console.log('Edit record ID..2'+event.target.id);
        component.set("v.editAccId",event.target.id);
       	component.set("v.viewAccId",event.target.id);
        
    },
    
    isOpen : function(component, event, helper) {
        console.log('Edit record ID..3'+event.target.id);
        component.set("v.isOpen",true);
        component.set("v.editAccId", event.target.id);
        setTimeout(function()
        { 
            var ec = component.find("editDiv");
            $A.util.removeClass(ec, 'slds-hide');
        }, 800);
    },
    
    delete : function(component, event, helper) {        
        if(confirm('Are you sure you want to delete?'))
    	helper.deleteAccount(component, event);        
    },
 	
 	createRecord : function (component, event, helper) {
       var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Account"
        });
        createRecordEvent.fire();
        
    },
        
    create : function (component, event, helper) {
        console.log('Create record');
        
    }
})