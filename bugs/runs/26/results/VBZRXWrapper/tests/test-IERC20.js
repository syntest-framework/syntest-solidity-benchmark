const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracteeAAsxq = await IERC20.new({from: accounts[2]});
		const _spenderDfC5K6D = accounts[4]
		const _ownera2F9AS9 = accounts[1]
		const _whohq2GTDG = accounts[0]
		const _valuengV1ITW = BigInt("1775")
		const _toeNsfzpg = accounts[4]
		const _whodbtiXD = accounts[4]
		const nullsNXeyQV = await contracteeAAsxq.allowance.call(_ownera2F9AS9, _spenderDfC5K6D, {from: accounts[0]});
		const nullFYF3Co6 = await contracteeAAsxq.balanceOf.call(_whohq2GTDG, {from: accounts[3]});
		const nullj4fVfm9 = await contracteeAAsxq.totalSupply.call({from: accounts[4]});
		const nullTD8q5pd = await contracteeAAsxq.transfer.call(_toeNsfzpg, _valuengV1ITW, {from: "0x0000000000000000000000000000000000000001"});
		const nullgaDCEs = await contracteeAAsxq.balanceOf.call(_whodbtiXD, {from: accounts[2]});
		const nullhwhLfS3 = await contracteeAAsxq.totalSupply.call({from: accounts[3]});
	});
})