const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractOYlt11 = await IERC721.new({from: accounts[1]});
		const dataYrH34oE = "0x09081c151a"
		const tokenIdkycoHO7 = BigInt("865")
		const toCWDOYvJ = "0x0000000000000000000000000000000000000001"
		const fromrtrcGYK = accounts[2]
		const tokenIdeWNrmOR = BigInt("1346")
		const toJHh3APU = accounts[0]
		const fromq7ZkIPS = accounts[2]
		const tokenId7oXasS = BigInt("558")
		const togryj3fi = accounts[4]
		const fromJ6H27YZ = accounts[4]
		await contractOYlt11.safeTransferFrom.call(fromrtrcGYK, toCWDOYvJ, tokenIdkycoHO7, dataYrH34oE, {from: accounts[2]});
		await contractOYlt11.transferFrom.call(fromq7ZkIPS, toJHh3APU, tokenIdeWNrmOR, {from: accounts[3]});
		await contractOYlt11.safeTransferFrom.call(fromJ6H27YZ, togryj3fi, tokenId7oXasS, {from: accounts[4]});
	});
})