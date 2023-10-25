const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractHNqIh6f = await IERC721.new({from: accounts[3]});
		const tokenIdhGwynjr = BigInt("1265")
		const tokenIdjIUQUR = BigInt("472")
		const toX0YYNbE = accounts[2]
		const fromvVJBP6h = accounts[2]
		const tokenIdkpa4U0C = BigInt("1926")
		const dataDT6cLs3 = "0x1809011311161811081c1f1314041412150f0a141f180a191c0114191d1a"
		const tokenIdWhgSfU3 = BigInt("63")
		const toddxNUjh = accounts[4]
		const fromxhILOcF = "0x0000000000000000000000000000000000000001"
		const tokenIdCt3DMIk = BigInt("134")
		const toEaM1GLK = accounts[3]
		const fromud0OBw8 = accounts[4]
		const ownerlqaqget = await contractHNqIh6f.ownerOf.call(tokenIdhGwynjr, {from: accounts[2]});
		await contractHNqIh6f.transferFrom.call(fromvVJBP6h, toX0YYNbE, tokenIdjIUQUR, {from: accounts[0]});
		const ownerzx37yFd = await contractHNqIh6f.ownerOf.call(tokenIdkpa4U0C, {from: accounts[3]});
		await contractHNqIh6f.safeTransferFrom.call(fromxhILOcF, toddxNUjh, tokenIdWhgSfU3, dataDT6cLs3, {from: accounts[0]});
		await contractHNqIh6f.transferFrom.call(fromud0OBw8, toEaM1GLK, tokenIdCt3DMIk, {from: accounts[2]});
	});
})