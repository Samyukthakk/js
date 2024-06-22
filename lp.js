input = {
    "p.data1": "value p-1",
    "p.data2": "value p-2",
    "s.data1": "value s-1",
    "contact": "contact data",
    "name": "dem name"
};

 groupabs=[];
 newList = [];
function getValue(value) {
    const keylist = Object.keys(value)
    keylist.forEach(elemett => {
        if (elemett.includes(".")) {
            debugger;
            const isExist = this.groupabs.find(m => m== elemett.charAt(0));
            if(isExist == undefined) {
                this.groupabs.push(elemett.charAt(0))
            }
        }
    })
    this.groupabs.forEach(elemett=> {
        const startKeysElement = keylist.filter(m=> m.startsWith(elemett));
        const obj = {
            groupkey: elemett,
            subItem: []
         };

         startKeysElement.forEach((elemett)=> {
            const keyName = elemett.slice(2);
            const subItem = {
                [keyName]: this.input[elemett]
            }
            obj.subItem.push(subItem);

         })
         this.newList.push(obj);
    })
}

console.log(getValue(input));
