/*TODO: Make the apply button do a popup for confirmation
 * Implement proper security for not allowing people to apply twice*/

Template.proposalMonitoring.helpers({
    jobProposal:function(){
        var ID= this.toString();
        Meteor.subscribe('singleProposal',ID);
        return Proposals.findOne();
    },
    contractor:function(){
        if(this.appointed){
            return this.contractor;
        }else{
            return "Not appointed";
        }
    },
    allowedToApply:function(){
        console.log("The contestants are:");
        console.log(this.contestants);

        var currentUserId = Meteor.userId();
        //var inContestants = $.grep(this.contestants, function(e){ return e.userID == currentUserId; });
       // console.log("the matched contestants are:");
       // console.log(inContestants);
        if(currentUserId /*&& inContestants.length ==0*/){
            return true;
        }else{
            return false;
        }
    }


});

Template.proposalMonitoring.events({
    "click #back-to-proposalDisplay":function(event,template){
        Template.instance().get('monitorTemplate').set('templateName','proposalDisplay');
    },
    "click #apply-to-proposal":function(event,template){
        event.preventDefault();
        console.log("WHAT IS THE CONTEXT");
        console.log(this);
        console.log("checking the user");
        console.log(Meteor.user());
        console.log(this);
        console.log("adding to contestants...");
        var Contestant= {
            address:Meteor.user().address,
            userID:Meteor.userId(),
            userName:Meteor.user().username,
            rating:Meteor.user().rating
        };
        console.log("THIS IS THE FUCKING CONTESTANT");
        console.log(Contestant);
       /* Proposals.update({_id:this._id},{$push:{contestants:Contestant}});*/
        Proposals.update({_id:this._id},{$set:{contestants:[Contestant]}});
        console.log(this);
    }
});