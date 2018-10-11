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
        action.setParams({
            accid:event.target.id
        });
        action.setCallback(this, function(response) {
        	component.set("v.accounts",response.getReturnValue());
        });
        $A.enqueueAction(action);
	},
})