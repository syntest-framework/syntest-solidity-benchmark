const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractcLiBiMa = await IERC721.new({from: accounts[3]});
		const tokenIdamZY42e = BigInt("1710")
		const toEIBcNsN = accounts[0]
		const from28VEKe = accounts[2]
		const tokenIdDRljQDx = BigInt("1395")
		const _approvedjbuocE9 = false
		const operatorVFKOBOP = accounts[1]
		const _approvedeJjntX0 = true
		const operatorN27Q4fl = "0x0000000000000000000000000000000000000001"
		await contractcLiBiMa.transferFrom.call(from28VEKe, toEIBcNsN, tokenIdamZY42e, {from: accounts[2]});
		const operatorAfsvnhu = await contractcLiBiMa.getApproved.call(tokenIdDRljQDx, {from: accounts[5]});
		await contractcLiBiMa.setApprovalForAll.call(operatorVFKOBOP, _approvedjbuocE9, {from: accounts[2]});
		await contractcLiBiMa.setApprovalForAll.call(operatorN27Q4fl, _approvedeJjntX0, {from: accounts[5]});
	});
})