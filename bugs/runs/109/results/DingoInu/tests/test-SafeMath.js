const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractBRagqG = await SafeMath.new({from: accounts[1]});
		const bUNkbcu = BigInt("1345")
		const aPcBiAcM = BigInt("1034")
		const bn815voJ = BigInt("1432")
		const aTbK9uC = BigInt("714")
		const bWVABMJZ = BigInt("366")
		const ainIvovR = BigInt("540")
		const bD3ICCce = BigInt("1388")
		const aDLht0FZ = BigInt("1212")
		const bliSZ2Nk = BigInt("321")
		const arpeHzM1 = BigInt("1333")
		const ccgYi4x = await contractBRagqG.safeMul.call(aPcBiAcM, bUNkbcu, {from: accounts[2]});
		const cxRwxdO3 = await contractBRagqG.safeMul.call(aTbK9uC, bn815voJ, {from: accounts[4]});
		const chUNVbgr = await contractBRagqG.safeMul.call(ainIvovR, bWVABMJZ, {from: accounts[3]});
		const ckgj5GVZ = await contractBRagqG.safeSub.call(aDLht0FZ, bD3ICCce, {from: accounts[0]});
		const cpqqt15j = await contractBRagqG.safeSub.call(arpeHzM1, bliSZ2Nk, {from: accounts[3]});

		assert.equal(ccgYi4x, 1390730)
		assert.equal(chUNVbgr, 197640)
		assert.equal(cxRwxdO3, 1022448)
		await expect(contractBRagqG.safeSub.call(aDLht0FZ, bD3ICCce, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractksA35vr = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bVcQ2ncw = BigInt("371")
		const astXI7pG = BigInt("1886")
		const bBlgPNX0 = BigInt("92")
		const acGwWjAc = BigInt("1367")
		const bosR5Yvl = BigInt("1401")
		const aPzXCjYe = BigInt("861")
		const cOGjX47X = await contractksA35vr.safeMul.call(astXI7pG, bVcQ2ncw, {from: accounts[0]});
		const cIcb80H3 = await contractksA35vr.safeAdd.call(acGwWjAc, bBlgPNX0, {from: accounts[1]});
		const cIO3ysAI = await contractksA35vr.safeDiv.call(aPzXCjYe, bosR5Yvl, {from: "0x0000000000000000000000000000000000000001"});
	});
})