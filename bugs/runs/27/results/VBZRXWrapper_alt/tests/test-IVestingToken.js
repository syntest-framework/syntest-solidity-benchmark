const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractAWg6wgc = await IVestingToken.new({from: accounts[4]});
		const _ownerz8pyswe = accounts[3]
		const _owneruldt7qN = accounts[4]
		const _ownerzGgIU7a = accounts[2]
		const nullKj0PA4m = await contractAWg6wgc.vestedBalanceOf.call(_ownerz8pyswe, {from: accounts[5]});
		const nulldSDiian = await contractAWg6wgc.vestedBalanceOf.call(_owneruldt7qN, {from: accounts[0]});
		const nullNeAKtkz = await contractAWg6wgc.claimedBalanceOf.call(_ownerzGgIU7a, {from: accounts[0]});
	});
})