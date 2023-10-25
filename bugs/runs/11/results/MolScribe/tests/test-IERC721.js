const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractd94A0a0 = await IERC721.new({from: accounts[2]});
		const operatorsijD3j1 = accounts[0]
		const ownerXQ5gw5b = "0x0000000000000000000000000000000000000001"
		const tokenIdnuDF1t1 = BigInt("457")
		const tokenIdG4MdWmQ = BigInt("1807")
		const _approvedZnOVD9V = true
		const operatorLw4tt82 = accounts[3]
		const operatorbQTPdio = accounts[4]
		const ownerCPRJTNM = "0x0000000000000000000000000000000000000001"
		const nulliLGTl02 = await contractd94A0a0.isApprovedForAll.call(ownerXQ5gw5b, operatorsijD3j1, {from: accounts[0]});
		const operatorMtnrbM = await contractd94A0a0.getApproved.call(tokenIdnuDF1t1, {from: accounts[3]});
		const operatorrDeg8Tx = await contractd94A0a0.getApproved.call(tokenIdG4MdWmQ, {from: accounts[3]});
		await contractd94A0a0.setApprovalForAll.call(operatorLw4tt82, _approvedZnOVD9V, {from: accounts[1]});
		const nullr9zsSne = await contractd94A0a0.isApprovedForAll.call(ownerCPRJTNM, operatorbQTPdio, {from: accounts[1]});
	});
})