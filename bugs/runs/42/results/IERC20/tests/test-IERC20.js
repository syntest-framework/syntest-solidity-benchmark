const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractVEHfqjy = await IERC20.new({from: accounts[3]});
		const whokOImehW = accounts[0]
		const whodxMKiXX = accounts[0]
		const spenderMV9HgJC = accounts[2]
		const ownerH2UfQy4 = "0x0000000000000000000000000000000000000001"
		const valuevvWjRaX = BigInt("6")
		const torXAYUPX = accounts[4]
		const nullOV9LAwg = await contractVEHfqjy.balanceOf.call(whokOImehW, {from: accounts[4]});
		const nullEuqIio3 = await contractVEHfqjy.balanceOf.call(whodxMKiXX, {from: accounts[2]});
		const nullZ1tF1uU = await contractVEHfqjy.allowance.call(ownerH2UfQy4, spenderMV9HgJC, {from: accounts[4]});
		const nullRaj8FS6 = await contractVEHfqjy.transfer.call(torXAYUPX, valuevvWjRaX, {from: accounts[4]});
	});
})