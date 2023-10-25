const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractv5j2jU = await IERC721.new({from: accounts[2]});
		const tokenIdF9N6p5Q = BigInt("430")
		const toVgzDUZy = accounts[4]
		const fromS42OwUw = accounts[5]
		const ownerLVI7jPH = accounts[4]
		const tokenIdgH1Nush = BigInt("1814")
		const toobeSAjN = accounts[2]
		await contractv5j2jU.safeTransferFrom.call(fromS42OwUw, toVgzDUZy, tokenIdF9N6p5Q, {from: accounts[2]});
		const balanceLUupvuE = await contractv5j2jU.balanceOf.call(ownerLVI7jPH, {from: accounts[4]});
		await contractv5j2jU.approve.call(toobeSAjN, tokenIdgH1Nush, {from: accounts[0]});
	});
})