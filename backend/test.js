
let sub = [
    {
        "id": 1,
        "name": "daily investment packages",
        "minprice": 2500,
        "maxprice": 4999,
        "percentageReturns": 1,
        "investmentPkg_id": 1,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "bronze",
        "PackageId": 1
    },
    {
        "id": 1,
        "name": "daily investment packages",
        "minprice": 5000,
        "maxprice": 9999,
        "percentageReturns": 2,
        "investmentPkg_id": 1,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "silver",
        "PackageId": 2
    },
    {
        "id": 1,
        "name": "daily investment packages",
        "minprice": 10000,
        "maxprice": 19999,
        "percentageReturns": 2,
        "investmentPkg_id": 1,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "gold",
        "PackageId": 3
    },
    {
        "id": 2,
        "name": "weekly investment packages",
        "minprice": 2000,
        "maxprice": 4999,
        "percentageReturns": 10,
        "investmentPkg_id": 2,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "bronze",
        "PackageId": 4
    },
    {
        "id": 2,
        "name": "weekly investment packages",
        "minprice": 5000,
        "maxprice": 19999,
        "percentageReturns": 15,
        "investmentPkg_id": 2,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "silver",
        "PackageId": 5
    },
    {
        "id": 2,
        "name": "weekly investment packages",
        "minprice": 20000,
        "maxprice": 29999,
        "percentageReturns": 20,
        "investmentPkg_id": 2,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "gold",
        "PackageId": 6
    },
    {
        "id": 2,
        "name": "weekly investment packages",
        "minprice": 30000,
        "maxprice": 350000,
        "percentageReturns": 25,
        "investmentPkg_id": 2,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "diamond",
        "PackageId": 7
    },
    {
        "id": 3,
        "name": "monthly compounding investment packages",
        "minprice": 2000,
        "maxprice": 3999,
        "percentageReturns": 11,
        "investmentPkg_id": 3,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "bronze",
        "PackageId": 8
    },
    {
        "id": 3,
        "name": "monthly compounding investment packages",
        "minprice": 4000,
        "maxprice": 7999,
        "percentageReturns": 13,
        "investmentPkg_id": 3,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "silver",
        "PackageId": 9
    },
    {
        "id": 3,
        "name": "monthly compounding investment packages",
        "minprice": 8000,
        "maxprice": 11999,
        "percentageReturns": 16,
        "investmentPkg_id": 3,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "gold",
        "PackageId": 10
    },
    {
        "id": 3,
        "name": "monthly compounding investment packages",
        "minprice": 12000,
        "maxprice": 15999,
        "percentageReturns": 19,
        "investmentPkg_id": 3,
        "created_at": "2020-10-28T11:35:13.000Z",
        "updated_at": null,
        "deleted_at": null,
        "PackageName": "diamond",
        "PackageId": 11
    }
]


//the function should group all objects of the same name into one object
/*expected output [
    {
        "daily investment package":[
        {
            "id": 1,
            "name": "daily investment packages",
            "minprice": 2500,
            "maxprice": 4999,
            "percentageReturns": 1,
            "investmentPkg_id": 1,
            "created_at": "2020-10-28T11:35:13.000Z",
            "updated_at": null,
            "deleted_at": null,
            "PackageName": "bronze",
            "PackageId": 1
    },    
    {
            "id": 1,
            "name": "daily investment packages",
            "minprice": 2500,
            "maxprice": 4999,
            "percentageReturns": 1,
            "investmentPkg_id": 1,
            "created_at": "2020-10-28T11:35:13.000Z",
            "updated_at": null,
            "deleted_at": null,
            "PackageName": "silver",
            "PackageId": 1
    },    
    {
            "id": 1,
            "name": "daily investment packages",
            "minprice": 2500,
            "maxprice": 4999,
            "percentageReturns": 1,
            "investmentPkg_id": 1,
            "created_at": "2020-10-28T11:35:13.000Z",
            "updated_at": null,
            "deleted_at": null,
            "PackageName": "gold",
            "PackageId": 1
    }
        ]

    },
    {
        "weekly investment package": same idea as seen above
    }
]
*/
function nestedObjectfromObject(sub) {
    let arrCompare = []
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
        if (Object.keys(arrCompare[arrCompare.length - 1]) != sub[i].name) {
            let obj = {
                [sub[i].name]: sub.filter((l) => sub[i].name == l.name)
            }
            arrCompare.push(obj)
        }

    }
    return arrCompare;
}

console.log(nestedObjectfromObject(sub))