const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyKZ6wnOK = await HungryHoody.new({from: accounts[4]});
		const addressLNmcV2T = accounts[2]
		const uintd5IWBEa = BigInt("1128")
		const uintM8q61Gi = BigInt("1873")
		const uintSx4sBMB = BigInt("253")
		const addressZu9zlb = accounts[2]
		const uintDDPwhQP = BigInt("797")
		const uintA32lq5h = BigInt("1143")
		const uintAmLMedM = BigInt("1253")
		const uintYti7eie = BigInt("1370")
		const uintKm6p6PK = await HungryHoodyKZ6wnOK.balanceOf.call(addressLNmcV2T, {from: accounts[3]});
		const uintl4X5y4V = await HungryHoodyKZ6wnOK.safeDiv.call(uintM8q61Gi, uintd5IWBEa, {from: accounts[0]});
		const boolRpmlY91 = await HungryHoodyKZ6wnOK.transfer.call(addressZu9zlb, uintSx4sBMB, {from: accounts[4]});
		const uintWU1kLVN = await HungryHoodyKZ6wnOK.safeSub.call(uintA32lq5h, uintDDPwhQP, {from: accounts[0]});
		const uintPfTdVLD = await HungryHoodyKZ6wnOK.safeDiv.call(uintYti7eie, uintAmLMedM, {from: accounts[3]});

		assert.equal(boolRpmlY91, true)
		assert.equal(uintKm6p6PK, BigInt("0"))
		assert.equal(uintPfTdVLD, BigInt("1"))
		assert.equal(uintWU1kLVN, BigInt("346"))
		assert.equal(uintl4X5y4V, BigInt("1"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoody5dwOOn = await HungryHoody.new({from: accounts[0]});
		const addresslr8Ozzq = accounts[4]
		const addressPmMxXmC = accounts[2]
		const uintRg4polY = BigInt("480")
		const addressfkqWLwO = "0x0000000000000000000000000000000000000001"
		const uintjV4eHCf = await HungryHoody5dwOOn.allowance.call(addressPmMxXmC, addresslr8Ozzq, {from: accounts[4]});
		const uintHTQQM4O = await HungryHoody5dwOOn.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnFRZakR = await HungryHoody5dwOOn.transfer.call(addressfkqWLwO, uintRg4polY, {from: accounts[3]});

		assert.equal(uintHTQQM4O, BigInt("25000000000000000000"))
		assert.equal(uintjV4eHCf, BigInt("0"))
		await expect(HungryHoody5dwOOn.transfer.call(addressfkqWLwO, uintRg4polY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyZAaH5A = await HungryHoody.new({from: accounts[2]});
		const uintku8ark = BigInt("1262")
		const addressGs2ol3c = accounts[4]
		const uintPXNJwRE = BigInt("1493")
		const uintulXBLER = BigInt("674")
		const uintL0x03rk = BigInt("1575")
		const uintSOV3zx7 = BigInt("326")
		const boolxvuGub2 = await HungryHoodyZAaH5A.approve.call(addressGs2ol3c, uintku8ark, {from: accounts[4]});
		const uintRAZbS9e = await HungryHoodyZAaH5A.safeSub.call(uintulXBLER, uintPXNJwRE, {from: accounts[1]});
		const uintoDCouJN = await HungryHoodyZAaH5A.safeAdd.call(uintSOV3zx7, uintL0x03rk, {from: accounts[0]});

		assert.equal(boolxvuGub2, true)
		await expect(HungryHoodyZAaH5A.safeSub.call(uintulXBLER, uintPXNJwRE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfPDTC80 = await HungryHoody.new({from: accounts[1]});
		const uintjRW84yC = BigInt("264")
		const addressyh5XipT = accounts[3]
		const addresscNDx6Vu = accounts[4]
		const uintWIK3BbR = BigInt("1595")
		const addressKmBco5C = accounts[2]
		const uintf6nCzH1 = await HungryHoodyfPDTC80.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolzelxajC = await HungryHoodyfPDTC80.transferFrom.call(addresscNDx6Vu, addressyh5XipT, uintjRW84yC, {from: accounts[2]});
		const boolXxzAGJl = await HungryHoodyfPDTC80.approve.call(addressKmBco5C, uintWIK3BbR, {from: accounts[1]});

		assert.equal(uintf6nCzH1, BigInt("25000000000000000000"))
		await expect(HungryHoodyfPDTC80.transferFrom.call(addresscNDx6Vu, addressyh5XipT, uintjRW84yC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfaLB5ys = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS7z6KYH = BigInt("510")
		const addressRPWnMko = accounts[0]
		const addressFsP9mdm = accounts[1]
		const uintHKOKKv = BigInt("1338")
		const uintYn0Ddsc = BigInt("1582")
		const uintCf3cxTI = await HungryHoodyfaLB5ys.totalSupply.call({from: accounts[0]});
		const uintxsLXrgc = await HungryHoodyfaLB5ys.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolKD2YRg = await HungryHoodyfaLB5ys.transferFrom.call(addressFsP9mdm, addressRPWnMko, uintS7z6KYH, {from: accounts[0]});
		const uintakpOVuo = await HungryHoodyfaLB5ys.totalSupply.call({from: accounts[0]});
		const uintFvXYaEv = await HungryHoodyfaLB5ys.safeMul.call(uintYn0Ddsc, uintHKOKKv, {from: accounts[1]});
	});
})