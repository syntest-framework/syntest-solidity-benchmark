const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracthhZtQQo = await IERC721.new({from: accounts[0]});
		const tokenIdmfyjoyG = BigInt("216")
		const tonkk59S = "0x0000000000000000000000000000000000000001"
		const from6fId58 = accounts[4]
		const tokenIdAwOtGGE = BigInt("578")
		const tonIKsgrz = accounts[5]
		const tokenIdR4CVCTU = BigInt("1143")
		const tokenIdbC3lwVU = BigInt("343")
		const toKQCJq9y = accounts[3]
		const tokenIdHedJw0a = BigInt("1705")
		await contracthhZtQQo.safeTransferFrom.call(from6fId58, tonkk59S, tokenIdmfyjoyG, {from: accounts[1]});
		await contracthhZtQQo.approve.call(tonIKsgrz, tokenIdAwOtGGE, {from: accounts[4]});
		const operatorrdOUocc = await contracthhZtQQo.getApproved.call(tokenIdR4CVCTU, {from: accounts[0]});
		await contracthhZtQQo.approve.call(toKQCJq9y, tokenIdbC3lwVU, {from: accounts[1]});
		const ownerDdaJd0Z = await contracthhZtQQo.ownerOf.call(tokenIdHedJw0a, {from: "0x0000000000000000000000000000000000000001"});
	});
})