const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractcjcAKwb = await IERC721.new({from: accounts[2]});
		const ownerPtsBeia = accounts[1]
		const tokenIdY4VprSy = BigInt("936")
		const totrf4Jys = accounts[2]
		const balancepvmLAIA = await contractcjcAKwb.balanceOf.call(ownerPtsBeia, {from: accounts[5]});
		await contractcjcAKwb.approve.call(totrf4Jys, tokenIdY4VprSy, {from: accounts[3]});
	});
})