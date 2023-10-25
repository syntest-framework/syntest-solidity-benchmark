const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract76Cw5C = await IERC721.new({from: accounts[3]});
		const tokenIdmou0VD2 = BigInt("55")
		const toG1fD3eV = accounts[4]
		const fromTs4DJMh = accounts[5]
		const owner7VgN8P = accounts[4]
		const tokenIdDWAXMtt = BigInt("21")
		await contract76Cw5C.safeTransferFrom.call(fromTs4DJMh, toG1fD3eV, tokenIdmou0VD2, {from: accounts[3]});
		const balancenGL1vbO = await contract76Cw5C.balanceOf.call(owner7VgN8P, {from: accounts[0]});
		const ownerbRQsZDF = await contract76Cw5C.ownerOf.call(tokenIdDWAXMtt, {from: accounts[1]});
	});
})