const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractrLad5vF = await IERC721.new({from: accounts[3]});
		const tokenIdr90kunY = BigInt("1152")
		const operatorpYU94jR = accounts[2]
		const ownerdPXZI1c = accounts[1]
		const tokenIdEcM4NSK = BigInt("442")
		const ton9JvLKp = accounts[2]
		const tokenIdANkL9ck = BigInt("885")
		const todkfZpy7 = accounts[4]
		const tokenIdYFr8eSG = BigInt("1706")
		const toCjcdNQ = accounts[1]
		const ownerGQ3dryU = await contractrLad5vF.ownerOf.call(tokenIdr90kunY, {from: accounts[4]});
		const nullIU9IBo = await contractrLad5vF.isApprovedForAll.call(ownerdPXZI1c, operatorpYU94jR, {from: "0x0000000000000000000000000000000000000001"});
		await contractrLad5vF.approve.call(ton9JvLKp, tokenIdEcM4NSK, {from: accounts[1]});
		await contractrLad5vF.approve.call(todkfZpy7, tokenIdANkL9ck, {from: accounts[2]});
		await contractrLad5vF.approve.call(toCjcdNQ, tokenIdYFr8eSG, {from: accounts[2]});
	});
})