// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"recruiting","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"ID","type":"uint256"},{"name":"description","type":"string"},{"name":"reward","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"completed","type":"bool"},{"name":"appointed","type":"bool"},{"name":"contractor","type":"address"},{"name":"finalised","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"production","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_reward","type":"uint256"},{"name":"_deposit","type":"uint256"},{"name":"_desc","type":"string"},{"name":"_ID","type":"uint256"}],"name":"addProposal","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"fuel","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"investment","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"removeProposal","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"completeWork","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_contractor","type":"address"},{"name":"_ID","type":"uint256"}],"name":"hireContractor","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"finalise","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"layoffContractor","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"percent","type":"uint256"}],"name":"changeRate","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"toggleSharesIssue","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"toggleProduction","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shareholders","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getShares","outputs":[{"name":"shares","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"toggleRecruiting","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"receivePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"building","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"createShares","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"toggleBuilding","outputs":[],"type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_desc","type":"string"}],"type":"constructor"}],
    binary: "6060604052604051610fd1380380610fd183398101604052805160805190910160008054600160a060020a0319163317905560006001819055600160a060020a0333169034610fd1380360600182818181858883f1505050505081600160a060020a031660001415156100bc5781600060006101000a815481600160a060020a03021916908302179055506100cf565b50506004805460ff191690556006805462ffffff1916905560006007555050610e678061016a6000396000f35b60008054600160a060020a031916331790555b8060086000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013657805160ff19168380011785555b5061008f9291505b808211156101665760008155600101610122565b8280016001018555821561011a579182015b8281111561011a578251826000505591602001919060010190610148565b509056606060405236156101325760e060020a600035046301387617811461013a578063013cf08b1461014657806305e88b691461019d57806318160ddd146101af57806323e6fd30146101b8578063279bad161461022357806345fbfbca146102425780634ce4e6c71461024e5780634e533b781461027157806352f19d79146102925780636b75dbde146102b85780637284e416146102dd578063730c70a71461033b57806374e7493b1461035e57806378626b19146103805780637b0a47ee1461039f5780637bc0595e146103a85780638da5cb5b146103c7578063a9059cbb146103d9578063ab377daa14610433578063d73fe0aa14610467578063de06b4e114610493578063e2eab483146104b1578063e7dc3336146104dc578063ebd0d0c7146104ee578063ec8b572f14610509575b610527610002565b61054160065460ff1681565b6105556004356005602052600090815260409020600481015481546002830154600384015491936001019290919060ff818116916101008104821691620100008204600160a060020a03169160b060020a90041688565b61054160065462010000900460ff1681565b61048160015481565b604080516020604435600481810135601f8101849004840285018401909552848452610527948135946024803595939460649492939101918190840183828082843750949650509335935050505060008054600160a060020a0390811633909116146106aa57610002565b610527600054600160a060020a03908116339091161461053f57610002565b61054160045460ff1681565b61052760043560008054600160a060020a0390811633909116146107c857610002565b61052760043560008181526005602052604081205481141561081457610002565b61052760043560243560008054600160a060020a0390811633909116146108a457610002565b610527600435600080548190600160a060020a03908116339091161461096c57610002565b6040805160088054602060026001831615610100026000190190921691909104601f810182900482028401820190945283835261061f9390830182828015610a765780601f10610a4b57610100808354040283529160200191610a76565b61052760043560008054600160a060020a039081163390911614610a7e57610002565b610527600435600054600160a060020a039081163390911614610b0257610002565b610527600054600160a060020a03908116339091161461052957610002565b61048160075481565b610527600054600160a060020a039081163390911614610b3257610002565b61068d600054600160a060020a031681565b610527600435602435600160a060020a038216600090815260036020526040812054811415610bb1576002805460018101808355909190828015829011610b6757818360005260206000209182019101610b679190610777565b61068d6004356002805482908110156100025750600052600080516020610e478339815191520154600160a060020a031681565b600160a060020a0333166000908152600360205260409020545b60408051918252519081900360200190f35b61052760005433600160a060020a03908116911614610c3157610002565b61052760043560006000600060006000600660029054906101000a900460ff161515610c5a57610002565b61054160065460ff6101009091041681565b6105416004546000908190819060ff161515610d4257610002565b61052760005433600160a060020a03908116911614610e1657610002565b005b60045460ff1615610b23576004805460ff191690555b565b604080519115158252519081900360200190f35b6040805189815290810187905260608101869052841515608082015283151560a0820152600160a060020a03831660c082015281151560e08201526101006020820181815289546002600182161584026000190190911604918301829052906101208301908a9080156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b5050995050505050505050505060405180910390f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561067f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60008210156106b857610002565b60065460ff1615806106d7575060008281526005602052604081205414155b156106e157610002565b506000818152600560209081526040822083815560028181018890556003820187905560048201805476ffffffffffffffffffffffffffffffffffffffffffffff1916905585516001838101805481885296869020949690959181161561010002600019011692909204601f908101839004840193919288019083901061078b57805160ff19168380011785555b506107bb9291505b808211156107c45760008155600101610777565b8280016001018555821561076f579182015b8281111561076f57825182600050559160200191906001019061079d565b50505050505050565b5090565b60008281526005602052604081205414156107e257610002565b5060008181526005602052604090206004810154610100900460ff1615156001141561080d57610002565b6000905550565b5060008181526005602052604081206004810154909161010090910460ff16151514806108515750600481015460b060020a900460ff1615156001145b806108655750600481015460ff1615156001145b1561086f57610002565b6004810154620100009004600160a060020a03908116339091161461089357610002565b600401805460ff1916600117905550565b60065460ff1615156108b557610002565b60008281526005602052604081205414156108cf57610002565b5060008181526005602052604090206004810154610100900460ff161515600114156108fa57610002565b60048101805475ffffffffffffffffffffffffffffffffffffffff00001961ff00199190911661010017166201000085021790556040516003820154600160a060020a03851691600091670de0b6b3a7640000029082818181858883f19350505050151561096757610002565b505050565b600083815260056020526040812054141561098657610002565b60008381526005602052604081206004810154909350610100900460ff16151514806109bb5750600482015460ff1615156000145b806109d65750600482015460b060020a900460ff1615156001145b156109e057610002565b50600281015460048201805476ff00000000000000000000000000000000000000000000191660b060020a179081905560405162010000909104600160a060020a031690600090670de0b6b3a764000084029082818181858883f19350505050151561096757610002565b820191906000526020600020905b815481529060010190602001808311610a5957829003601f168201915b505050505081565b6000828152600560205260408120541415610a9857610002565b5060008181526005602052604081206004810154909161010090910460ff1615151480610ad55750600481015460b060020a900460ff1615156001145b15610adf57610002565b600401805475ffffffffffffffffffffffffffffffffffffffffffff1916905550565b6064811115610b1057610002565b6000811015610b1e57610002565b600755565b6004805460ff19166001179055565b60065462010000900460ff1615610b54576006805462ff00001916905561053f565b6006805462ff0000191662010000179055565b505050905082600260005082815481101561000257600091909152600080516020610e4783398151915201805473ffffffffffffffffffffffffffffffffffffffff191690911790555b33600160a060020a031660009081526003602052604090205482901015610bd757610002565b600160a060020a0383166000908152600360205260409020548083011015610bfe57610002565b33600160a060020a0390811660009081526003602052604080822080548690039055918516815220805483019055505050565b60065460ff1615610c4b576006805460ff1916905561053f565b6006805460ff19166001179055565b6000868152600560205260408120541415610c7457610002565b6000868152600560205260408120600481015490965060b060020a900460ff1615151415610ca157610002565b600154600014610d2e576002549350600092505b83831015610d2e5760028054849081101561000257600080516020610e478339815191520154600160a060020a0316600081815260036020526001546040808320546007549151949750955086945091926064349390930292909204908504029082818181858883f193505050501515610d3657610002565b505050505050565b60019290920191610cb5565b33600160a060020a03166000908152600360205260408120541415610ddc576002805460018101808355909190828015829011610d9257818360005260206000209182019101610d929190610777565b505050915033600260005083815481101561000257600091909152600080516020610e4783398151915201805473ffffffffffffffffffffffffffffffffffffffff191690911790555b505050600160a060020a03331660009081526003602052604090208054670de0b6b3a7640000340490810190915560018054909101815590565b600654610100900460ff1615610e36576006805461ff001916905561053f565b6006805461ff00191661010017905556405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace",
    unlinked_binary: "6060604052604051610fd1380380610fd183398101604052805160805190910160008054600160a060020a0319163317905560006001819055600160a060020a0333169034610fd1380360600182818181858883f1505050505081600160a060020a031660001415156100bc5781600060006101000a815481600160a060020a03021916908302179055506100cf565b50506004805460ff191690556006805462ffffff1916905560006007555050610e678061016a6000396000f35b60008054600160a060020a031916331790555b8060086000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013657805160ff19168380011785555b5061008f9291505b808211156101665760008155600101610122565b8280016001018555821561011a579182015b8281111561011a578251826000505591602001919060010190610148565b509056606060405236156101325760e060020a600035046301387617811461013a578063013cf08b1461014657806305e88b691461019d57806318160ddd146101af57806323e6fd30146101b8578063279bad161461022357806345fbfbca146102425780634ce4e6c71461024e5780634e533b781461027157806352f19d79146102925780636b75dbde146102b85780637284e416146102dd578063730c70a71461033b57806374e7493b1461035e57806378626b19146103805780637b0a47ee1461039f5780637bc0595e146103a85780638da5cb5b146103c7578063a9059cbb146103d9578063ab377daa14610433578063d73fe0aa14610467578063de06b4e114610493578063e2eab483146104b1578063e7dc3336146104dc578063ebd0d0c7146104ee578063ec8b572f14610509575b610527610002565b61054160065460ff1681565b6105556004356005602052600090815260409020600481015481546002830154600384015491936001019290919060ff818116916101008104821691620100008204600160a060020a03169160b060020a90041688565b61054160065462010000900460ff1681565b61048160015481565b604080516020604435600481810135601f8101849004840285018401909552848452610527948135946024803595939460649492939101918190840183828082843750949650509335935050505060008054600160a060020a0390811633909116146106aa57610002565b610527600054600160a060020a03908116339091161461053f57610002565b61054160045460ff1681565b61052760043560008054600160a060020a0390811633909116146107c857610002565b61052760043560008181526005602052604081205481141561081457610002565b61052760043560243560008054600160a060020a0390811633909116146108a457610002565b610527600435600080548190600160a060020a03908116339091161461096c57610002565b6040805160088054602060026001831615610100026000190190921691909104601f810182900482028401820190945283835261061f9390830182828015610a765780601f10610a4b57610100808354040283529160200191610a76565b61052760043560008054600160a060020a039081163390911614610a7e57610002565b610527600435600054600160a060020a039081163390911614610b0257610002565b610527600054600160a060020a03908116339091161461052957610002565b61048160075481565b610527600054600160a060020a039081163390911614610b3257610002565b61068d600054600160a060020a031681565b610527600435602435600160a060020a038216600090815260036020526040812054811415610bb1576002805460018101808355909190828015829011610b6757818360005260206000209182019101610b679190610777565b61068d6004356002805482908110156100025750600052600080516020610e478339815191520154600160a060020a031681565b600160a060020a0333166000908152600360205260409020545b60408051918252519081900360200190f35b61052760005433600160a060020a03908116911614610c3157610002565b61052760043560006000600060006000600660029054906101000a900460ff161515610c5a57610002565b61054160065460ff6101009091041681565b6105416004546000908190819060ff161515610d4257610002565b61052760005433600160a060020a03908116911614610e1657610002565b005b60045460ff1615610b23576004805460ff191690555b565b604080519115158252519081900360200190f35b6040805189815290810187905260608101869052841515608082015283151560a0820152600160a060020a03831660c082015281151560e08201526101006020820181815289546002600182161584026000190190911604918301829052906101208301908a9080156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b5050995050505050505050505060405180910390f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561067f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60008210156106b857610002565b60065460ff1615806106d7575060008281526005602052604081205414155b156106e157610002565b506000818152600560209081526040822083815560028181018890556003820187905560048201805476ffffffffffffffffffffffffffffffffffffffffffffff1916905585516001838101805481885296869020949690959181161561010002600019011692909204601f908101839004840193919288019083901061078b57805160ff19168380011785555b506107bb9291505b808211156107c45760008155600101610777565b8280016001018555821561076f579182015b8281111561076f57825182600050559160200191906001019061079d565b50505050505050565b5090565b60008281526005602052604081205414156107e257610002565b5060008181526005602052604090206004810154610100900460ff1615156001141561080d57610002565b6000905550565b5060008181526005602052604081206004810154909161010090910460ff16151514806108515750600481015460b060020a900460ff1615156001145b806108655750600481015460ff1615156001145b1561086f57610002565b6004810154620100009004600160a060020a03908116339091161461089357610002565b600401805460ff1916600117905550565b60065460ff1615156108b557610002565b60008281526005602052604081205414156108cf57610002565b5060008181526005602052604090206004810154610100900460ff161515600114156108fa57610002565b60048101805475ffffffffffffffffffffffffffffffffffffffff00001961ff00199190911661010017166201000085021790556040516003820154600160a060020a03851691600091670de0b6b3a7640000029082818181858883f19350505050151561096757610002565b505050565b600083815260056020526040812054141561098657610002565b60008381526005602052604081206004810154909350610100900460ff16151514806109bb5750600482015460ff1615156000145b806109d65750600482015460b060020a900460ff1615156001145b156109e057610002565b50600281015460048201805476ff00000000000000000000000000000000000000000000191660b060020a179081905560405162010000909104600160a060020a031690600090670de0b6b3a764000084029082818181858883f19350505050151561096757610002565b820191906000526020600020905b815481529060010190602001808311610a5957829003601f168201915b505050505081565b6000828152600560205260408120541415610a9857610002565b5060008181526005602052604081206004810154909161010090910460ff1615151480610ad55750600481015460b060020a900460ff1615156001145b15610adf57610002565b600401805475ffffffffffffffffffffffffffffffffffffffffffff1916905550565b6064811115610b1057610002565b6000811015610b1e57610002565b600755565b6004805460ff19166001179055565b60065462010000900460ff1615610b54576006805462ff00001916905561053f565b6006805462ff0000191662010000179055565b505050905082600260005082815481101561000257600091909152600080516020610e4783398151915201805473ffffffffffffffffffffffffffffffffffffffff191690911790555b33600160a060020a031660009081526003602052604090205482901015610bd757610002565b600160a060020a0383166000908152600360205260409020548083011015610bfe57610002565b33600160a060020a0390811660009081526003602052604080822080548690039055918516815220805483019055505050565b60065460ff1615610c4b576006805460ff1916905561053f565b6006805460ff19166001179055565b6000868152600560205260408120541415610c7457610002565b6000868152600560205260408120600481015490965060b060020a900460ff1615151415610ca157610002565b600154600014610d2e576002549350600092505b83831015610d2e5760028054849081101561000257600080516020610e478339815191520154600160a060020a0316600081815260036020526001546040808320546007549151949750955086945091926064349390930292909204908504029082818181858883f193505050501515610d3657610002565b505050505050565b60019290920191610cb5565b33600160a060020a03166000908152600360205260408120541415610ddc576002805460018101808355909190828015829011610d9257818360005260206000209182019101610d929190610777565b505050915033600260005083815481101561000257600091909152600080516020610e4783398151915201805473ffffffffffffffffffffffffffffffffffffffff191690911790555b505050600160a060020a03331660009081526003602052604090208054670de0b6b3a7640000340490810190915560018054909101815590565b600654610100900460ff1615610e36576006805461ff001916905561053f565b6006805461ff00191661010017905556405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace",
    address: "0x537bf7d8e75ffe690103d5e0ae6a59b92eeacd49",
    generated_with: "2.0.9",
    contract_name: "Private"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Private error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Private error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Private error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Private error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Private = Contract;
  }

})();
