({
    accountList : function(component, event, helper) {
        helper.getAccountList(component);
    },
    selectAll: function(component,event, helper){
        var slctCheck = event.getSource().get("v.value");
        var getCheckAllId = component.find("cboxRow");
         
        if (slctCheck == true) {
            for (var i = 0; i < getCheckAllId.length; i++) {
                component.find("cboxRow")[i].set("v.value", true);             
            }
        } else {
            for (var i = 0; i < getCheckAllId.length; i++) {
                component.find("cboxRow")[i].set("v.value", false);
            }
        }
    },
    changeSelectAll:function(component,event, helper){
        var slctCheckRow = event.getSource().get("v.value");
        var getCheckAllId = component.find("cbox");
        if(slctCheckRow == false) {
            component.find("cbox").set("v.value", false);
        }
    },
    deleteSlctd : function(component,event,helper) {
        var getCheckAllId = component.find("cboxRow");
        var selctedRec = [];
        for (var i = 0; i < getCheckAllId.length; i++) {
             
            if(getCheckAllId[i].get("v.value") == true )
            {
                selctedRec.push(getCheckAllId[i].get("v.text")); 
            }
        }
        helper.deleteSelected(component,event,selctedRec);
    },
    
    updateSlctd : function(component,event,helper) {
        component.set("v.isOpen",true);
        /*var myEle = component.find("accSource");
        console.log('myEle---->'+myEle);
        var getCheckAllId = component.find("cboxRow");
        var selctedRec = [];
        for (var i = 0; i < getCheckAllId.length; i++) {
             
            if(getCheckAllId[i].get("v.value") == true )
            {
                selctedRec.push(getCheckAllId[i].get("v.text")); 
            }
        }
        console.log('selctedRec'+selctedRec);
        helper.updateSelected(component,event,selctedRec);*/

    },
    
    updateSlctd1 : function(component,event,helper) {
        var searchInput = component.find("accSource");
        console.log('searchInput----'+searchInput);
    	var searchValue = searchInput.get("v.value");
    	console.log('searchValue----'+searchValue);
        var getCheckAllId = component.find("cboxRow");
        var selctedRec = [];
        for (var i = 0; i < getCheckAllId.length; i++) {
             
            if(getCheckAllId[i].get("v.value") == true )
            {
                selctedRec.push(getCheckAllId[i].get("v.text")); 
            }
        }
        console.log('selctedRec'+selctedRec);
        helper.updateSelected(component,searchValue,selctedRec);
        /*console.log('myEle12312---->');
        var myEle = component.find("accSource");
        console.log('myEle  12312---->'+myEle);
        var myAttri = component.find("accSource").get("v.value");
        console.log('myAttri  12312---->'+myAttri);
        console.log('myAttri  12312---->'+event.getSource().get("v.accSource"))*/
        /*var getCheckAllId = component.find("cboxRow");
        var selctedRec = [];
        for (var i = 0; i < getCheckAllId.length; i++) {
             
            if(getCheckAllId[i].get("v.value") == true )
            {
                selctedRec.push(getCheckAllId[i].get("v.text")); 
            }
        }
        console.log('selctedRec'+selctedRec);
        helper.updateSelected(component,event,selctedRec);*/

    },
    
    handleCancel: function(component,event,helper) {
        location.reload();

    }
})