public class AccountsController {

    @AuraEnabled
    public static List<Account> findAll()
    {
        return [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,
                Phone,Fax From Account limit 15];
    }
    
    @AuraEnabled
    public static List<Account> getAccountsByName(String name)
    {
        String acntName = '%' + name + '%';
        return [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,Phone,Fax From Account
               where Name like :acntName limit 15];
    }
    
    @AuraEnabled
    public static Account findById(String accountId)
    {
        System.debug('accountId'+accountId);
        accountId = accountId.remove('"');
        accountId = accountId.remove(']');
        accountId = accountId.remove('[');
        System.debug('accountId'+accountId);
        Account acc = [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,Phone,Fax From Account
               where id =: accountId]; 
        System.debug('acc'+acc);
        return acc;
    }
    
    @Auraenabled
    public static List<Account> delteAccountById(String accid)
    {
        System.debug('In controller delteAccountById method..');
        Account delAccount=[Select Id from Account where id=:accid];
        delete delAccount;
        return [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,
                Phone,Fax From Account limit 15];
    }
    
    @Auraenabled
    public static List<Account> delSlctRec(List<String> slctRec)
    {
        System.debug('In controller delteAccountById method..');
        List<Account> delAccount=[Select Id from Account where id in:slctRec];
        delete delAccount;
        return [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,
                Phone,Fax From Account limit 15];
    }
    
    @Auraenabled
    public static List<Account> updateRecord(List<String> slctRec,String searchValue)
    {
        System.debug('In controller delteAccountById method..');
        System.debug('slctRec---->'+slctRec);
        System.debug('searchValue--->'+searchValue);
        List<Account> updateAccount=[Select Id from Account where id in:slctRec];
        for(Account acc: updateAccount)
        {
            //acc.AccountSource = 'Partner Reffreal';
            acc.AccountSource = searchValue;
        }
        update updateAccount;
        return [Select id,Name,AccountNumber,Owner.Name,OwnerId,AccountSource,ParentId,Parent.Name,AnnualRevenue,
               Type,CreatedById,CreatedBy.Name,LastModifiedById,LastModifiedBy.Name,Industry,Description,
                Phone,Fax From Account limit 15];
    }
    
     @Auraenabled
    public static void createRecord(Account accnt)
    {
        System.debug('accnt'+accnt);
        insert accnt;
    }
    
}