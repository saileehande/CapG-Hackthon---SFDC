({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    handleSelectedAccount: function(component, event, helper) {
        /*component.set("v.isView",true);
        var selectedRecId = event.getSource().get("v.text"); 
        var selectedRecValue = event.getSource().get("v.checkContact"); 
        console.log('selectedRecId'+selectedRecId);
        console.log('selectedRecValue'+selectedRecValue);
        component.set("v.viewAccId",selectedRecId);      
        */
        var accountId = [];
        var checkvalue = component.find("checkContact");
        var action = component.get("c.findById");
        if(!Array.isArray(checkvalue)){
            
            if (checkvalue.get("v.value") == true) {
                accountId.push(checkvalue.get("v.text"));
            }
        }else{
            for (var i = 0; i < checkvalue.length; i++) {
                if (checkvalue[i].get("v.value") == true) {
                    accountId.push(checkvalue[i].get("v.text"));
                }
            }
        }
        console.log('accountId-' + accountId);
        action.setParams({
            accountId : JSON.stringify(accountId)
        });
        console.log('accountId-1' + accountId);
        action.setCallback(this, function(a) {
            component.set("v.acc", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})