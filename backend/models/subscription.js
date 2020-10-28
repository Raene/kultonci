'use strict';

const Db = require('./dbModel');

const SubModel = function (obj, con, TableName) {
    Db.call(this, con, TableName);
    this.obj = Object.assign({}, obj);
}

SubModel.prototype = Object.create(Db.prototype);

Object.defineProperty(SubModel.prototype, 'constructor', {
    value: SubModel,
    enumerable: false,
    writable: true
});

SubModel.prototype.get = async function () {
    try {
        let sub = await this.getJoin();
        let arrCompare = []
        //loop through array, assign first name to a new object
        //second loop if name matches assign value to object
        //else create new object
        for (let i = 0; i < sub.length; i++) {
            if (arrCompare.length <= 0) {
                let obj = {
                    [sub[i].name]: sub.filter((l) => sub[i].name == l.name)
                }
                arrCompare.push(obj)
                continue
            }

            //keep on comparing the sub array values to what's in the arrCompare
            //if they're different push to the compare array
            if (Object.keys(arrCompare[arrCompare.length -1]) != sub[i].name) {
                console.log(arrCompare.length)
                let obj = {
                    [sub[i].name]: sub.filter((l) => sub[i].name == l.name)
                }
                arrCompare.push(obj)
            }

        }
        return arrCompare;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = SubModel;