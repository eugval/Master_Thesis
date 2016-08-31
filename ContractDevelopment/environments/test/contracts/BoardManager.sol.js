// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"Description","type":"string"},{"name":"_ID","type":"uint256"}],"name":"addResolution","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"Board","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"members","type":"address[]"}],"name":"appointBoard","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_candidate","type":"address"}],"name":"addBoardChange","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"resolutions","outputs":[{"name":"executed","type":"bool"},{"name":"_ID","type":"uint256"},{"name":"description","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"appointed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"resID","type":"uint256"},{"name":"_inSupport","type":"bool"},{"name":"_justification","type":"string"}],"name":"voteResolution","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040526002805460ff19169055600060015561083e806100216000396000f3606060405236156100615760e060020a60003504630cbf58c78114610063578063178407ca146100ba5780632d3fb47e146100d257806382bdca6214610162578063a4b7f5ce14610191578063c4874499146101bf578063eeb05412146101cb575b005b6040805160206004803580820135601f810184900484028501840190955284845261006194919360249390929184019190819084018382808284375094965050933593505050506000600082101561030057610002565b61024060043560006020819052908152604090205481565b604080516004803580820135602081810280860182019096528185526100619593946024949093850192918291908501908490808284375094965050505050505060005b81518110156103de5760016000600050600084848151811015610002576020908102909101810151600160a060020a031690915281905260409020819055805481019055600101610116565b610061600435600160a060020a033316600090815260208190526040812054819081908114156103ef57610002565b61025260043560046020819052600091825260409091206001810154600282015460ff919091169290910183565b6102ec60025460ff1681565b604080516020600460443581810135601f8101849004840285018401909552848452610061948235946024803595606494929391909201918190840183828082843750949650505050505050600160a060020a0333166000908152602081905260408120548190819081141561062357610002565b60408051918252519081900360200190f35b60408051841515815260208101849052606091810182815283546002600182161561010002600019019091160492820183905290916080830190849080156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b505094505050505060405180910390f35b604080519115158252519081900360200190f35b6000828152600460205260408120600201541461031c57610002565b50600081815260046020818152604083206001818101805460ff1916905560028281018790558751948301805481885296859020939690959281161561010002600019011604601f9081018490048301939192918801908390106103a357805160ff19168380011785555b506103d39291505b808211156103da576000815560010161038f565b82800160010185558215610387579182015b828111156103875782518260005055916020019190600101906103b5565b5050505050565b5090565b6002805460ff191660011790555050565b600160a060020a0384166000908152602081905260408120541461041257600092505b600160a060020a038416600090815260208190526040812054141561043657600192505b600380546001810180835590919082801582901161046d5760050281600502836000526020600020918201910161046d9190610559565b50506003805492945091849150811015610002575060005250600581027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8101805473ffffffffffffffffffffffffffffffffffffffff19169094179093557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d8301919091557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85f8201805461ff00191690557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c90910155565b505060048101805461ffff191690556005015b808211156103da57805473ffffffffffffffffffffffffffffffffffffffff1916815560006001820181905560028281018290556003830180548382559083526020832061054692919091028101906105b3565b50506002015b808211156103da57805474ffffffffffffffffffffffffffffffffffffffffff1916815560018181018054600080835592600290821615610100026000190190911604601f81901061060557506105ad565b601f0160209004906000526020600020908101906105ad919061038f565b600086101561063157610002565b600086815260046020526040812060020154141561064e57610002565b6000868152600460209081526040808320600160a060020a0333168452918290529091205490935060ff161561068357610002565b600160a060020a0333166000908152602084905260409020805460ff191660019081179091556003840180549182018082558280158290116106de576002028160020283600052602060002091820191016106de9190610794565b505050915082600301600050828154811015610002579060005260206000209060020201600050805461010033810260ff1992909216881774ffffffffffffffffffffffffffffffffffffffff00191691909117825585516001838101805460008281526020908190209697509195600293821615909502600019011691909104601f9081018290048401939189019083901061080457805160ff19168380011785555b5061083492915061038f565b50506002015b808211156103da57805474ffffffffffffffffffffffffffffffffffffffffff1916815560018181018054600080835592600290821615610100026000190190911604601f8190106107e6575061078e565b601f01602090049060005260206000209081019061078e919061038f565b82800160010185558215610782579182015b82811115610782578251826000505591602001919060010190610816565b505050505050505056",
    unlinked_binary: "60606040526002805460ff19169055600060015561083e806100216000396000f3606060405236156100615760e060020a60003504630cbf58c78114610063578063178407ca146100ba5780632d3fb47e146100d257806382bdca6214610162578063a4b7f5ce14610191578063c4874499146101bf578063eeb05412146101cb575b005b6040805160206004803580820135601f810184900484028501840190955284845261006194919360249390929184019190819084018382808284375094965050933593505050506000600082101561030057610002565b61024060043560006020819052908152604090205481565b604080516004803580820135602081810280860182019096528185526100619593946024949093850192918291908501908490808284375094965050505050505060005b81518110156103de5760016000600050600084848151811015610002576020908102909101810151600160a060020a031690915281905260409020819055805481019055600101610116565b610061600435600160a060020a033316600090815260208190526040812054819081908114156103ef57610002565b61025260043560046020819052600091825260409091206001810154600282015460ff919091169290910183565b6102ec60025460ff1681565b604080516020600460443581810135601f8101849004840285018401909552848452610061948235946024803595606494929391909201918190840183828082843750949650505050505050600160a060020a0333166000908152602081905260408120548190819081141561062357610002565b60408051918252519081900360200190f35b60408051841515815260208101849052606091810182815283546002600182161561010002600019019091160492820183905290916080830190849080156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b505094505050505060405180910390f35b604080519115158252519081900360200190f35b6000828152600460205260408120600201541461031c57610002565b50600081815260046020818152604083206001818101805460ff1916905560028281018790558751948301805481885296859020939690959281161561010002600019011604601f9081018490048301939192918801908390106103a357805160ff19168380011785555b506103d39291505b808211156103da576000815560010161038f565b82800160010185558215610387579182015b828111156103875782518260005055916020019190600101906103b5565b5050505050565b5090565b6002805460ff191660011790555050565b600160a060020a0384166000908152602081905260408120541461041257600092505b600160a060020a038416600090815260208190526040812054141561043657600192505b600380546001810180835590919082801582901161046d5760050281600502836000526020600020918201910161046d9190610559565b50506003805492945091849150811015610002575060005250600581027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8101805473ffffffffffffffffffffffffffffffffffffffff19169094179093557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d8301919091557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85f8201805461ff00191690557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c90910155565b505060048101805461ffff191690556005015b808211156103da57805473ffffffffffffffffffffffffffffffffffffffff1916815560006001820181905560028281018290556003830180548382559083526020832061054692919091028101906105b3565b50506002015b808211156103da57805474ffffffffffffffffffffffffffffffffffffffffff1916815560018181018054600080835592600290821615610100026000190190911604601f81901061060557506105ad565b601f0160209004906000526020600020908101906105ad919061038f565b600086101561063157610002565b600086815260046020526040812060020154141561064e57610002565b6000868152600460209081526040808320600160a060020a0333168452918290529091205490935060ff161561068357610002565b600160a060020a0333166000908152602084905260409020805460ff191660019081179091556003840180549182018082558280158290116106de576002028160020283600052602060002091820191016106de9190610794565b505050915082600301600050828154811015610002579060005260206000209060020201600050805461010033810260ff1992909216881774ffffffffffffffffffffffffffffffffffffffff00191691909117825585516001838101805460008281526020908190209697509195600293821615909502600019011691909104601f9081018290048401939189019083901061080457805160ff19168380011785555b5061083492915061038f565b50506002015b808211156103da57805474ffffffffffffffffffffffffffffffffffffffffff1916815560018181018054600080835592600290821615610100026000190190911604601f8190106107e6575061078e565b601f01602090049060005260206000209081019061078e919061038f565b82800160010185558215610782579182015b82811115610782578251826000505591602001919060010190610816565b505050505050505056",
    address: "",
    generated_with: "2.0.9",
    contract_name: "BoardManager"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("BoardManager error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("BoardManager error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("BoardManager error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("BoardManager error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.BoardManager = Contract;
  }

})();
