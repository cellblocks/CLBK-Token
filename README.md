# CLBK-Token
# CellBlocks Token 

## ERC20 token built on the Ethereum Network with the following specifications:

Name: CellBlocks

Symbol: CLBK
  
totalSupply: 250,000,000

This token is designed to burn 0.5% of all transacted tokens.

## The following functions are added to the standard ERC20 functions:
### halfPercent(uint _value): 

-checks to make sure _value is not 0

-returns the amount that is 0.5% of _value

### burn(address burner, uint _value): 

-burns _value amount of tokens owned by burner

-does not burn until 6/20/2018 12:01 am MST

-does not burn if totalSupply <= 83,000,000

## The following event has been added to the standard ERC20 events:
event Burn(address indexed burner, uint256 value);

## The following modifications have been made to the standard ERC20 functions:

Transfer() and transferFrom() have added logic that calls halfPercent() and sends the 

amount given by halfPercent as well as the address of msg.sender to burn().


## Main Net Contract Address:

0x86FD7abFC9f80A1FFC1A2BE01Dc3859017801ae1

## Contract abi:

[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"burner","type":"address"},{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

## Contract bytecode: 

6060604052341561000f57600080fd5b60018054600160a060020a03191633600160a060020a03169081179091556000908152600260205260408082206acecb8f27f4200f3a000000908190559091558051908101604052600a81527f43656c6c426c6f636b7300000000000000000000000000000000000000000000602082015260049080516100949291602001906100ef565b506005805460ff1916601217905560408051908101604052600481527f434c424b00000000000000000000000000000000000000000000000000000000602082015260069080516100e99291602001906100ef565b5061018a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013057805160ff191683800117855561015d565b8280016001018555821561015d579182015b8281111561015d578251825591602001919060010190610142565b5061016992915061016d565b5090565b61018791905b808211156101695760008155600101610173565b90565b610a8f806101996000396000f3006060604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100d4578063095ea7b31461015e57806318160ddd1461019457806323b872dd146101b957806327e235e3146101e1578063313ce567146102005780635c6581651461022957806370a082311461024e5780638da5cb5b1461026d57806395d89b411461029c5780639dc29fac146102af578063a9059cbb146102d3578063dd62ed3e146102f5578063f2fde38b1461031a575b600080fd5b34156100df57600080fd5b6100e7610339565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561012357808201518382015260200161010b565b50505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016957600080fd5b610180600160a060020a03600435166024356103d7565b604051901515815260200160405180910390f35b341561019f57600080fd5b6101a7610443565b60405190815260200160405180910390f35b34156101c457600080fd5b610180600160a060020a0360043581169060243516604435610449565b34156101ec57600080fd5b6101a7600160a060020a0360043516610602565b341561020b57600080fd5b610213610614565b60405160ff909116815260200160405180910390f35b341561023457600080fd5b6101a7600160a060020a036004358116906024351661061d565b341561025957600080fd5b6101a7600160a060020a036004351661063a565b341561027857600080fd5b610280610655565b604051600160a060020a03909116815260200160405180910390f35b34156102a757600080fd5b6100e7610664565b34156102ba57600080fd5b6102d1600160a060020a03600435166024356106cf565b005b34156102de57600080fd5b610180600160a060020a03600435166024356107cb565b341561030057600080fd5b6101a7600160a060020a03600435811690602435166108f0565b341561032557600080fd5b6102d1600160a060020a036004351661091b565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b505050505081565b600160a060020a03338116600081815260036020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005481565b600160a060020a038084166000818152600360209081526040808320339095168352938152838220549282526002905291822054829084901080159061048f5750838210155b151561049a57600080fd5b6a44a7ef040c710b330000006000541180156104ba5750635b29ed9c4210155b156104e1576104c8846109b6565b90506104d486826106cf565b6104de84826109f9565b93505b600160a060020a0385166000908152600260205260409020546105049085610a0b565b600160a060020a03808716600090815260026020526040808220939093559088168152205461053390856109f9565b600160a060020a0387166000908152600260205260409020556000198210156105af57600160a060020a038087166000908152600360209081526040808320339094168352929052205461058790856109f9565b600160a060020a03808816600090815260036020908152604080832033909416835292905220555b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8660405190815260200160405180910390a350600195945050505050565b60026020526000908152604090205481565b60055460ff1681565b600360209081526000928352604080842090915290825290205481565b600160a060020a031660009081526002602052604090205490565b600154600160a060020a031681565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103cf5780601f106103a4576101008083540402835291602001916103cf565b600160a060020a0382166000908152600260205260409020548111156106f457600080fd5b60008111156107c757600160a060020a03821660009081526002602052604090205461072090826109f9565b600160a060020a0383166000908152600260205260408120919091555461074790826109f9565b600055600160a060020a0382167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405190815260200160405180910390a26000600160a060020a0383167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35b5050565b600160a060020a0333166000908152600260205260408120548190839010156107f357600080fd5b6a44a7ef040c710b330000006000541180156108135750635b29ed9c4210155b1561083a57610821836109b6565b905061082d33826106cf565b61083783826109f9565b92505b600160a060020a03331660009081526002602052604090205461085d90846109f9565b600160a060020a03338116600090815260026020526040808220939093559086168152205461088c9084610a0b565b600160a060020a0380861660008181526002602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9086905190815260200160405180910390a3600191505b5092915050565b600160a060020a03918216600090815260036020908152604080832093909416825291909152205490565b60015433600160a060020a0390811691161461093657600080fd5b600160a060020a038116151561094b57600080fd5b600154600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60008060008311156109ee576109cd836005610a21565b90506109db816103e8610a4c565b91508115156109e957600191505b6109f3565b600091505b50919050565b600082821115610a0557fe5b50900390565b600082820183811015610a1a57fe5b9392505050565b600080831515610a3457600091506108e9565b50828202828482811515610a4457fe5b0414610a1a57fe5b6000808284811515610a5a57fe5b049493505050505600a165627a7a72305820d4724e3d7dcbf8cfd1407ead4984e34adc773e0f6d810c45dc961c7dc1e834990029

  
