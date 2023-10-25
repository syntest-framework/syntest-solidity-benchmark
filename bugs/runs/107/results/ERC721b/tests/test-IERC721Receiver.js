const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractM4wZcOo = await IERC721Receiver.new({from: accounts[4]});
		const dataXem9aMv = "0x1e0e1c0312041b150b1c180c1d"
		const tokenIdR0aUjxy = BigInt("65")
		const fromu5BxNQW = accounts[4]
		const operatorCzQl6JT = accounts[1]
		const dataCdogvI = "0x1f050a130812111d1917"
		const tokenIdvo0EdBK = BigInt("0")
		const fromVHZwCGT = accounts[3]
		const operatornsYFnnj = accounts[1]
		const dataplrad9 = "0x1e18020b1505111d0e14120e161c1c1c"
		const tokenIdML352FT = BigInt("1916")
		const fromT6Gsp8a = accounts[0]
		const operatoruqumLBn = accounts[5]
		const datag56GB32 = "0x170a130904120619"
		const tokenIdRZkf39N = BigInt("1082")
		const fromekuJtiG = accounts[4]
		const operatorEjAlMFK = accounts[2]
		const dataCNDll4U = "0x0d031d1a041d14180f061808"
		const tokenIdvO9XpqS = BigInt("2035")
		const fromd6qQWsG = accounts[4]
		const operatorwTmajG = accounts[5]
		const nullWRuFovK = await contractM4wZcOo.onERC721Received.call(operatorCzQl6JT, fromu5BxNQW, tokenIdR0aUjxy, dataXem9aMv, {from: accounts[2]});
		const nullCdnudMr = await contractM4wZcOo.onERC721Received.call(operatornsYFnnj, fromVHZwCGT, tokenIdvo0EdBK, dataCdogvI, {from: accounts[5]});
		const nullX4DUXDv = await contractM4wZcOo.onERC721Received.call(operatoruqumLBn, fromT6Gsp8a, tokenIdML352FT, dataplrad9, {from: accounts[3]});
		const nullvBKHO5Q = await contractM4wZcOo.onERC721Received.call(operatorEjAlMFK, fromekuJtiG, tokenIdRZkf39N, datag56GB32, {from: accounts[3]});
		const nullEHqfrpL = await contractM4wZcOo.onERC721Received.call(operatorwTmajG, fromd6qQWsG, tokenIdvO9XpqS, dataCNDll4U, {from: accounts[3]});
	});
})