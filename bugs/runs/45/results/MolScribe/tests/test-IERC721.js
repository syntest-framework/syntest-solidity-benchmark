const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractaoUUDI = await IERC721.new({from: accounts[1]});
		const tokenId2NZAeP = BigInt("794")
		const toJZ9I7VM = accounts[4]
		const fromGaSDWME = accounts[4]
		const tokenIdpYQ9G8b = BigInt("586")
		const dataYflLcnY = "0x0b081601"
		const tokenIdw6oVj7C = BigInt("1327")
		const toytoDfYU = accounts[4]
		const fromFEIN26U = accounts[3]
		const tokenIdtxDw2ke = BigInt("1357")
		await contractaoUUDI.transferFrom.call(fromGaSDWME, toJZ9I7VM, tokenId2NZAeP, {from: accounts[3]});
		const operatorsbfrhDt = await contractaoUUDI.getApproved.call(tokenIdpYQ9G8b, {from: accounts[0]});
		await contractaoUUDI.safeTransferFrom.call(fromFEIN26U, toytoDfYU, tokenIdw6oVj7C, dataYflLcnY, {from: accounts[0]});
		const operatoroS9eNSo = await contractaoUUDI.getApproved.call(tokenIdtxDw2ke, {from: accounts[0]});
	});
})