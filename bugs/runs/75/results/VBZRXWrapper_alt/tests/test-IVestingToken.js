const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractfWXRket = await IVestingToken.new({from: accounts[2]});
		const _ownergxstPay = accounts[1]
		const _ownerjvwFDgo = accounts[0]
		const _ownerk1qcADO = accounts[1]
		const nullmtZjyR4 = await contractfWXRket.vestedBalanceOf.call(_ownergxstPay, {from: accounts[3]});
		const nullFmSqH2R = await contractfWXRket.claimedBalanceOf.call(_ownerjvwFDgo, {from: accounts[1]});
		await contractfWXRket.claim.call({from: accounts[0]});
		const nullK5ayWoC = await contractfWXRket.vestedBalanceOf.call(_ownerk1qcADO, {from: accounts[0]});
	});
})