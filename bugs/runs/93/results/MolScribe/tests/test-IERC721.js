const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractAIeJ6cD = await IERC721.new({from: accounts[0]});
		const tokenIdkF27Tzp = BigInt("1427")
		const operatork49Ljz0 = accounts[3]
		const ownerIXIQKNf = accounts[0]
		const operatordJHWveL = "0x0000000000000000000000000000000000000001"
		const ownerGAqm5UQ = accounts[4]
		const tokenIdeXmu8ki = BigInt("97")
		const toV5Z2CG = accounts[4]
		const fromKB5DS0Z = accounts[3]
		const operatorBvtCa4g = await contractAIeJ6cD.getApproved.call(tokenIdkF27Tzp, {from: accounts[2]});
		const nullwu46IN9 = await contractAIeJ6cD.isApprovedForAll.call(ownerIXIQKNf, operatork49Ljz0, {from: accounts[3]});
		const nullpK5yTIz = await contractAIeJ6cD.isApprovedForAll.call(ownerGAqm5UQ, operatordJHWveL, {from: "0x0000000000000000000000000000000000000001"});
		await contractAIeJ6cD.transferFrom.call(fromKB5DS0Z, toV5Z2CG, tokenIdeXmu8ki, {from: accounts[2]});
	});
})