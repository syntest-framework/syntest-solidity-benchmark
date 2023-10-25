const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractT17p9sI = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuetKfEuUx = BigInt("654")
		const toeGUNEuB = accounts[1]
		const fromAVD8XWZ = accounts[2]
		const valueOxoOUfG = BigInt("704")
		const spenderDRRQplY = accounts[4]
		const spendercMK6Z5T = accounts[0]
		const ownerspd1IqY = accounts[0]
		const nullSh5xnPw = await contractT17p9sI.transferFrom.call(fromAVD8XWZ, toeGUNEuB, valuetKfEuUx, {from: accounts[4]});
		const nullPiyl9T9 = await contractT17p9sI.approve.call(spenderDRRQplY, valueOxoOUfG, {from: accounts[3]});
		const nullvEFfT6M = await contractT17p9sI.allowance.call(ownerspd1IqY, spendercMK6Z5T, {from: accounts[1]});
	});
})