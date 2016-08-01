// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"investment","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shareholders","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getShares","outputs":[{"name":"shares","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"createShares","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    binary: "60606040526000808055600160a060020a0333169034606082818181858883f15050505050610388806100326000396000f3606060405236156100565760e060020a600035046318160ddd811461005e57806345fbfbca14610067578063a9059cbb14610073578063ab377daa146100dc578063d73fe0aa14610122578063ebd0d0c71461014e575b610167610002565b61013c60005481565b61016960035460ff1681565b610167600435602435600160a060020a0382166000908152600260205260408120548114156101f5576001805480820180835590919082801582901161019a5781836000526020600020918201910161019a91905b808211156102a257600081556001016100c8565b61017d60043560018054829081101561000257506000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154600160a060020a031681565b33600160a060020a03166000908152600260205260409020545b60408051918252519081900360200190f35b610169600354600090819060ff16151561033957610002565b005b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b50505090508260016000508281548110156100025750600052507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68101805473ffffffffffffffffffffffffffffffffffffffff1916841790555b600160a060020a033316600090815260026020526040902054829010156102a657610002565b5050509050336001600050828154811015610002576000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805473ffffffffffffffffffffffffffffffffffffffff191690911790555b600160a060020a03331660009081526002602052604081208054349081019091558154019055600191505b5090565b600160a060020a03831660009081526002602052604090205480830110156102cd57610002565b600160a060020a03338116600081815260026020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050565b600160a060020a0333166000908152600260205260408120541415610277576001805480820180835590919082801582901161021b5781836000526020600020918201910161021b91906100c856",
    unlinked_binary: "60606040526000808055600160a060020a0333169034606082818181858883f15050505050610388806100326000396000f3606060405236156100565760e060020a600035046318160ddd811461005e57806345fbfbca14610067578063a9059cbb14610073578063ab377daa146100dc578063d73fe0aa14610122578063ebd0d0c71461014e575b610167610002565b61013c60005481565b61016960035460ff1681565b610167600435602435600160a060020a0382166000908152600260205260408120548114156101f5576001805480820180835590919082801582901161019a5781836000526020600020918201910161019a91905b808211156102a257600081556001016100c8565b61017d60043560018054829081101561000257506000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154600160a060020a031681565b33600160a060020a03166000908152600260205260409020545b60408051918252519081900360200190f35b610169600354600090819060ff16151561033957610002565b005b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b50505090508260016000508281548110156100025750600052507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68101805473ffffffffffffffffffffffffffffffffffffffff1916841790555b600160a060020a033316600090815260026020526040902054829010156102a657610002565b5050509050336001600050828154811015610002576000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805473ffffffffffffffffffffffffffffffffffffffff191690911790555b600160a060020a03331660009081526002602052604081208054349081019091558154019055600191505b5090565b600160a060020a03831660009081526002602052604090205480830110156102cd57610002565b600160a060020a03338116600081815260026020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050565b600160a060020a0333166000908152600260205260408120541415610277576001805480820180835590919082801582901161021b5781836000526020600020918201910161021b91906100c856",
    address: "0x645e4429eed08a080b35de6b5955c5c72765bfff",
    generated_with: "2.0.9",
    contract_name: "SharesManager"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("SharesManager error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("SharesManager error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("SharesManager error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("SharesManager error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.SharesManager = Contract;
  }

})();
