({
	loadAccounts : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(response) {
            component.set("v.accounts",response.getReturnValue());
        });
        $A.enqueueAction(action);
	},
    deleteAccount : function(component, event) {
        console.log('in delete account helper method.');
        var action = component.get("c.delteAccountById");
        console.log('account id'+event.target.id);
        console.log('action'+action);
        action.setParams({
            accid:event.target.id
        });
        action.setCallback(this, function(response) {
        	component.set("v.accounts",response.getReturnValue());
        });
        $A.enqueueAction(action);
	},
    createAccount : function(component,event)
    {
        console.log('enetered in helper class');
        var newAcc = component.get("v.newAccount");
    	var action = component.get("c.saveAccount");
        action.setParams({ 
            "acc": newAcc
        });
        action.setCallback(this, function(a) {
               var state = a.getState();
                if (state === "SUCCESS") {
                    var name = a.getReturnValue();
                   alert("Account Created succesfully");
                }
            });
        $A.enqueueAction(action);
        location.reload();
    }
})