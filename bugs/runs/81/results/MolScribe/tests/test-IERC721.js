const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractM3Uyl1s = await IERC721.new({from: accounts[1]});
		const _approvedogifgYT = false
		const operatorPFKvOxW = accounts[3]
		const operatorK043PdC = accounts[3]
		const ownercOCR509 = accounts[2]
		const tokenIdDsVu23d = BigInt("372")
		const tocgKY712 = accounts[5]
		const fromTQTQtSt = accounts[0]
		const tokenIdDQjcfZV = BigInt("588")
		const tozL3Fz5Z = accounts[4]
		const fromP9hLiUw = accounts[3]
		const tokenIdMX59ZWR = BigInt("1564")
		const togYin7rU = accounts[1]
		const from9PLW5z = accounts[0]
		await contractM3Uyl1s.setApprovalForAll.call(operatorPFKvOxW, _approvedogifgYT, {from: accounts[2]});
		const nullW9Id6xh = await contractM3Uyl1s.isApprovedForAll.call(ownercOCR509, operatorK043PdC, {from: "0x0000000000000000000000000000000000000001"});
		await contractM3Uyl1s.transferFrom.call(fromTQTQtSt, tocgKY712, tokenIdDsVu23d, {from: accounts[4]});
		await contractM3Uyl1s.safeTransferFrom.call(fromP9hLiUw, tozL3Fz5Z, tokenIdDQjcfZV, {from: "0x0000000000000000000000000000000000000001"});
		await contractM3Uyl1s.safeTransferFrom.call(from9PLW5z, togYin7rU, tokenIdMX59ZWR, {from: accounts[2]});
	});
})