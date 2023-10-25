const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractqocojIc = await IERC20.new({from: accounts[4]});
		const amountZvID5Ov = BigInt("594")
		const spenderPuC8NE1 = accounts[0]
		const amountbhFe8H0 = BigInt("1991")
		const spenderjW2QQ2I = accounts[0]
		const amountUz3D6ll = BigInt("1147")
		const recipienti5tmpn = accounts[0]
		const amountgu96WTo = BigInt("493")
		const spenderYbMiHpx = accounts[4]
		const spenderI903Y4m = accounts[0]
		const ownerPyl6h3a = accounts[0]
		const nullCCSwCkB = await contractqocojIc.approve.call(spenderPuC8NE1, amountZvID5Ov, {from: accounts[4]});
		const nullFPO3Bly = await contractqocojIc.approve.call(spenderjW2QQ2I, amountbhFe8H0, {from: accounts[1]});
		const nullgEZdUGs = await contractqocojIc.transfer.call(recipienti5tmpn, amountUz3D6ll, {from: accounts[3]});
		const nullrMAra9s = await contractqocojIc.approve.call(spenderYbMiHpx, amountgu96WTo, {from: accounts[3]});
		const nullntvWq3s = await contractqocojIc.allowance.call(ownerPyl6h3a, spenderI903Y4m, {from: accounts[0]});
	});
})