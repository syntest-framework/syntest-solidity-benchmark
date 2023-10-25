const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractnw4dbwX = await IERC721.new({from: accounts[4]});
		const operatoru2ZYm11 = accounts[2]
		const ownerYqHhknb = accounts[3]
		const operatoryLJrc4f = accounts[3]
		const ownerYyIGwTr = accounts[2]
		const datadmFNBd1 = "0x021d0f191104"
		const tokenIdsQ2o6qL = BigInt("811")
		const toIt3EGR = accounts[2]
		const fromRI1FSwj = accounts[1]
		const _approvedsW4gtBk = true
		const operatorhM0vIm0 = "0x0000000000000000000000000000000000000001"
		const tokenIdH3bYJo4 = BigInt("1570")
		const toXAOHHyN = accounts[2]
		const fromJt4rWeE = accounts[1]
		const nullgKyCG5c = await contractnw4dbwX.isApprovedForAll.call(ownerYqHhknb, operatoru2ZYm11, {from: accounts[4]});
		const nullOsgFd50 = await contractnw4dbwX.isApprovedForAll.call(ownerYyIGwTr, operatoryLJrc4f, {from: accounts[4]});
		await contractnw4dbwX.safeTransferFrom.call(fromRI1FSwj, toIt3EGR, tokenIdsQ2o6qL, datadmFNBd1, {from: accounts[0]});
		await contractnw4dbwX.setApprovalForAll.call(operatorhM0vIm0, _approvedsW4gtBk, {from: accounts[2]});
		await contractnw4dbwX.safeTransferFrom.call(fromJt4rWeE, toXAOHHyN, tokenIdH3bYJo4, {from: accounts[2]});
	});
})