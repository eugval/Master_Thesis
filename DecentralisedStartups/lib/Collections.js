/*TODO: Take our inscure
 * put all the necessary fields to the DAOs collection.
 * do another shcema for the transaction hashes so that I have the created date too
 * this would need to be updated using a meteor method
 */


DAOs =  new Mongo.Collection('daos');
//Proposals = new Mongo.Collection('proposals');

var Schemas = {};

Proposal =  new SimpleSchema({
    ID: {
        type:Number,
        label: "ID",
        optional:true,
        autoform:{
            omit: true
        }
    },
    title:{
        type:String,
        label:"Title",
        max:140,
        autoform:{
            label: "Job Title"
        }
    },
    description:{
        type: String,
        label: "Description",
        autoform:{
            rows: 4,
            label: "Proposal Description"
        }
    },
    reward:{
        type:Number,
        label: "Reward"
    },
    deposit:{
        type:Number,
        label:"Deposit"
    },
    contractor:{
        type:String,
        label:"Contractor",
        defaultValue:"0x000",
        autoform:{
            omit:true
        }
    },
    appointed:{
        type:Boolean,
        label:"Appointed",
        defaultValue:false,
        autoform:{
            omit:true
        }
    },
    completed:{
        type:Boolean,
        label:"Completed",
        defaultValue:false,
        autoform:{
            omit:true
        }
    },
    finalised:{
        type:Boolean,
        label:"Finalised",
        defaultValue:false,
        autoform:{
            omit:true
        }
    }
});



Schemas.DAO = new SimpleSchema({
    address:{
        type:String,
        label:"Address",
        defaultValue:"0x0000"
    },
    balance:{
        type: Number,
        defaultValue:0
    },
    owner:{
        type: String,
        label: "Owner",
        max:42,
        min:42
    },
    transactionHashes:{
        type: [String],
        defaultValue:[]
    },
    title:{
        type: String,
        label: "Title",
        max:140
    },
    description:{
        type: String,
        label: "Description"
    },
    percentDividends:{
        type: Number,
        defaultValue:0
    },
    totalShares:{
        type:Number,
        defaultValue:0
    },
    recruiting: {
        type: Boolean,
        label: "Recruiting",
        defaultValue: false
    },
    building:{
        type: Boolean,
        label:"Building",
        defaultValue: false
    },
    producing: {
        type: Boolean,
        label: "Producing",
        defaultValue: false
    },
    investment:{
        type: Boolean,
        label:"Investment",
        defaultValue: false
    },
    proposals:{
        type:[Proposal],
        optional:true
    }

});






DAOs.attachSchema(Schemas.DAO);

/*Proposals.attachSchema(Schemas.Proposal);*/