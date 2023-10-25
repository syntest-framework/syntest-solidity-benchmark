const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenL7PmAA0 = await MIMOToken.new({from: accounts[1]});
		const uinti7pJKSP = BigInt("186")
		const addressLJ2TKCX = accounts[5]
		const uintWcp94m6 = BigInt("1496")
		const addressfxTl98F = accounts[5]
		const uintScMFTOV = BigInt("376")
		const uintDXLJnZX = BigInt("457")
		const addressvD7NI5m = accounts[1]
		const addressRUWNEwR = accounts[0]
		const addressvzGAsHG = accounts[1]
		const booldGButY3 = await MIMOTokenL7PmAA0.approve.call(addressLJ2TKCX, uinti7pJKSP, {from: accounts[2]});
		const boolSz5BeFq = await MIMOTokenL7PmAA0.transfer.call(addressfxTl98F, uintWcp94m6, {from: accounts[2]});
		const uint256X2Abbp = await MIMOTokenL7PmAA0.setFeeRate.call(uintScMFTOV, {from: accounts[0]});
		const boolVAM94w = await MIMOTokenL7PmAA0.approve.call(addressvD7NI5m, uintDXLJnZX, {from: accounts[1]});
		const uintNomvQm = await MIMOTokenL7PmAA0.allowance.call(addressvzGAsHG, addressRUWNEwR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldGButY3, true)
		await expect(MIMOTokenL7PmAA0.transfer.call(addressfxTl98F, uintWcp94m6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjHQjATe = await MIMOToken.new({from: accounts[5]});
		const addresstwqNsKp = accounts[3]
		const addressbxvaFdl = "0x0000000000000000000000000000000000000001"
		const uintPkewr7u = BigInt("1847")
		const addressdGtLcOC = accounts[0]
		const addressckYV10 = accounts[0]
		const uintUdkMo0a = BigInt("496")
		const uintqGQEdw2 = BigInt("1285")
		const addressU448tQD = accounts[1]
		const uintTv6wuXQ = BigInt("932")
		const uint3ySV5x = await MIMOTokenjHQjATe.allowance.call(addressbxvaFdl, addresstwqNsKp, {from: accounts[1]});
		const booltSyrRq1 = await MIMOTokenjHQjATe.transferFrom.call(addressckYV10, addressdGtLcOC, uintPkewr7u, {from: accounts[3]});
		const uint256hwxpCx = await MIMOTokenjHQjATe.setFeeRate.call(uintUdkMo0a, {from: accounts[0]});
		const boolMg49Or = await MIMOTokenjHQjATe.approve.call(addressU448tQD, uintqGQEdw2, {from: accounts[3]});
		const uint256GWUQ7EV = await MIMOTokenjHQjATe.setMinFee.call(uintTv6wuXQ, {from: accounts[0]});

		assert.equal(uint3ySV5x, BigInt("0"))
		await expect(MIMOTokenjHQjATe.transferFrom.call(addressckYV10, addressdGtLcOC, uintPkewr7u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenuQXlbU9 = await MIMOToken.new({from: accounts[4]});
		const uintlE6EhP = BigInt("953")
		const addressTxqV1wf = accounts[3]
		const uintd1vsGyb = BigInt("277")
		const addresshwfz6wI = accounts[0]
		const uintXczmYll = BigInt("926")
		const uinthvOWGNk = BigInt("1314")
		const addressJJTdekL = accounts[2]
		const boolEpj6P2x = await MIMOTokenuQXlbU9.approve.call(addressTxqV1wf, uintlE6EhP, {from: accounts[0]});
		const boolVEdFCOc = await MIMOTokenuQXlbU9.approve.call(addresshwfz6wI, uintd1vsGyb, {from: accounts[2]});
		const uint256sF1QyB = await MIMOTokenuQXlbU9.setFeeRate.call(uintXczmYll, {from: accounts[5]});
		const uint256UXd8DzR = await MIMOTokenuQXlbU9.setMinFee.call(uinthvOWGNk, {from: accounts[0]});
		const uintCgimdGq = await MIMOTokenuQXlbU9.totalSupply.call({from: accounts[2]});
		const uinth0y2HOq = await MIMOTokenuQXlbU9.balanceOf.call(addressJJTdekL, {from: accounts[3]});

		assert.equal(boolEpj6P2x, true)
		assert.equal(boolVEdFCOc, true)
		assert.equal(uintCgimdGq, BigInt("16000000000000000000000000"))
		assert.equal(uinth0y2HOq, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokena3o7vnd = await MIMOToken.new({from: accounts[5]});
		const uintBakaRq = BigInt("1537")
		const addressir3iiKe = accounts[2]
		const uintX3FjvB6 = BigInt("235")
		const uintcwETrmM = BigInt("484")
		const uintQLtWfrO = BigInt("761")
		const boolIg7NwfC = await MIMOTokena3o7vnd.approve.call(addressir3iiKe, uintBakaRq, {from: accounts[3]});
		const uint256Vt68sZL = await MIMOTokena3o7vnd.setFeeRate.call(uintX3FjvB6, {from: accounts[5]});
		const uint256KLuzEis = await MIMOTokena3o7vnd.getFee.call(uintcwETrmM, {from: accounts[4]});
		const uint256P4Wjj69 = await MIMOTokena3o7vnd.setFeeRate.call(uintQLtWfrO, {from: accounts[0]});

		assert.equal(boolIg7NwfC, true)
		assert.equal(uint256KLuzEis, BigInt("50000000000000000"))
	});
})