({
    getAccountList : function(component) {
        var action = component.get("c.findAll");
        var self = this;
        action.setCallback(this, function(actionResult){
            component.set("v.account",actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    deleteSelected : function(component,event,selctedRec){
        var action = component.get("c.delSlctRec");
        action.setParams({
            "slctRec": selctedRec
        });
        action.setCallback(this, function(response){
            var state =  response.getState();
            if(state == "SUCCESS")
            {
                component.set("v.account",response.getReturnValue());
                console.log("Successfully Deleted..");
            }
            else if (state=="ERROR") {
                console.log(action.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
    },
    
    updateSelected : function(component,searchValue,selctedRec){
        console.log('searchValue in helper-----'+searchValue)
        console.log('selctedRec helper'+selctedRec);
        console.log('entered here');
        var action = component.get("c.updateRecord");
        action.setParams({
            "slctRec": selctedRec,
            "searchValue":searchValue
        });
        action.setCallback(this, function(response){
            var state =  response.getState();
            if(state == "SUCCESS")
            {
                component.set("v.account",response.getReturnValue());
                console.log("Successfully updated..");
            }
            else if (state=="ERROR") {
                console.log(action.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
        location.reload();
	}
})