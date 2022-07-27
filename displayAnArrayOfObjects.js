function listRecords (tableName, limit) {
    var list = [];
    var recGr = new GlideRecord('incident');
    if(limit && limit > 0){
        recGr.setLimit(limit);
    }
    recGr.query();

    while (recGr.next()) {
        var object = {};
        object.displayValue = recGr.getDisplayValue();
        object.sys_id = recGr.getValue('sys_id');
        list.push(object);
    }
    return list;
}
gs.info(JSON.stringify(listRecords('incident',25),null,4));