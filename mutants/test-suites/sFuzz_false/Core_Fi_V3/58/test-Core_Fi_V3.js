const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qVg4OB = await Core_Fi_V3.new({from: accounts[4]});
		const uintmVd090L = BigInt("1847")
		const addressAjbdc6q = accounts[0]
		const addressXuTYrzF = accounts[5]
		const uintOp08tA1 = BigInt("1886")
		const address66HbNN = accounts[2]
		const addressaPycFUb = accounts[0]
		const boolErc193g = await Core_Fi_V3qVg4OB.approve.call(addressAjbdc6q, uintmVd090L, {from: accounts[3]});
		const uint256XVl0Xik = await Core_Fi_V3qVg4OB.balanceOf.call(addressXuTYrzF, {from: accounts[0]});
		const boolXvLkxEh = await Core_Fi_V3qVg4OB.transferFrom.call(addressaPycFUb, address66HbNN, uintOp08tA1, {from: accounts[5]});

		assert.equal(boolErc193g, true)
		assert.equal(boolXvLkxEh, false)
		assert.equal(uint256XVl0Xik, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3LJvs8s7 = await Core_Fi_V3.new({from: accounts[2]});
		const uintAiyESje = BigInt("1102")
		const addressBaiPNsk = accounts[3]
		const addressGtzQxfG = accounts[2]
		const uintz4ipBTA = BigInt("2026")
		const addressYAIgWlt = accounts[0]
		const uintT0rB30l = BigInt("266")
		const addressrQkMBnb = accounts[1]
		const addressQXwFzw1 = accounts[2]
		const uintjN3xrvl = BigInt("347")
		const address2cvxGN = accounts[5]
		const addressyMGan5 = "0x0000000000000000000000000000000000000001"
		const boolokvPAKI = await Core_Fi_V3LJvs8s7.transferFrom.call(addressGtzQxfG, addressBaiPNsk, uintAiyESje, {from: accounts[5]});
		const boolOQZRCxX = await Core_Fi_V3LJvs8s7.transfer.call(addressYAIgWlt, uintz4ipBTA, {from: "0x0000000000000000000000000000000000000001"});
		const boolDIetV4v = await Core_Fi_V3LJvs8s7.approve.call(addressrQkMBnb, uintT0rB30l, {from: accounts[2]});
		const uint256AQPKenZ = await Core_Fi_V3LJvs8s7.balanceOf.call(addressQXwFzw1, {from: accounts[2]});
		const boolotIf23 = await Core_Fi_V3LJvs8s7.transferFrom.call(addressyMGan5, address2cvxGN, uintjN3xrvl, {from: accounts[4]});

		assert.equal(boolDIetV4v, true)
		assert.equal(boolOQZRCxX, false)
		assert.equal(boolokvPAKI, false)
		assert.equal(boolotIf23, false)
		assert.equal(uint256AQPKenZ, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3oBwP8b0 = await Core_Fi_V3.new({from: accounts[1]});
		const addressaHW5TkP = accounts[4]
		const addressBxMs6er = accounts[0]
		const addressXzSOJug = accounts[0]
		const uint256boIGPpU = await Core_Fi_V3oBwP8b0.balanceOf.call(addressaHW5TkP, {from: accounts[5]});
		const uintIZI6zeQ = await Core_Fi_V3oBwP8b0.allowance.call(addressXzSOJug, addressBxMs6er, {from: accounts[5]});
		const uint256blAuIsb = await Core_Fi_V3oBwP8b0.totalSupply.call({from: accounts[0]});

		assert.equal(uint256blAuIsb, BigInt("84000000000000000000000"))
		assert.equal(uint256boIGPpU, BigInt("0"))
		assert.equal(uintIZI6zeQ, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3YDwLrn = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoe2RrPt = BigInt("958")
		const addressrZGi79 = accounts[2]
		const addressA6ucCCM = accounts[3]
		const addressMvx7fCt = accounts[1]
		const boolcwn1jCD = await Core_Fi_V3YDwLrn.transfer.call(addressrZGi79, uintoe2RrPt, {from: accounts[1]});
		const uint256fNiovO3 = await Core_Fi_V3YDwLrn.balanceOf.call(addressA6ucCCM, {from: accounts[3]});
		const uint256vNWiF2G = await Core_Fi_V3YDwLrn.totalSupply.call({from: accounts[0]});
		const uint256Z5dJomg = await Core_Fi_V3YDwLrn.balanceOf.call(addressMvx7fCt, {from: accounts[0]});
	});
})