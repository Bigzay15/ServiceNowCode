function listRecords (tableName, limit) {
    var list = [];
    var recGr = new GlideRecord('incident');
    if(limit && limit > 0){
        recGr.setLimit(limit);
    }
    recGr.query();

    while (recGr.next()) {
        list.push(recGr.getDisplayValue());
    }
    return list;
}
gs.info(listRecords('incident',25).sort().join('\n'));