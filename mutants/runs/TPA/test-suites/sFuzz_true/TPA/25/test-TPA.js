const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringUA8NG8U = "sCnHgNf871f3b7ElZf5eP6l6hnDz5hAXvzqc7J3JU9Di"
		const stringdaUufch = "UietUOK3DbgSwOWxjFsrXomCOwoivDe"
		const uintCUnSFWt = BigInt("184")
		const TPANiTdySQ = await TPA.new(stringUA8NG8U, stringdaUufch, uintCUnSFWt, {from: accounts[4]});
		const addresspIZVsXV = accounts[4]
		const uintDL4iPF0 = BigInt("883")
		const addressOHxFSD5 = accounts[2]
		const stringaAhCtit = await TPANiTdySQ.symbol.call({from: accounts[0]});
		const boolC4BEOD = await TPANiTdySQ.unfreezeAccount.call(addresspIZVsXV, {from: accounts[2]});
		const boolYhZ2stk = await TPANiTdySQ.transfer.call(addressOHxFSD5, uintDL4iPF0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TPA', async () => {
		const TPAHkF6qZD = await TPA.new({from: accounts[2]});
		const addressdKKSjlQ = accounts[5]
		const addressWnWZwX2 = accounts[0]
		const addressTchkOqw = accounts[2]
		const addressGFazmeq = accounts[2]
		const addressgu2LnT = accounts[4]
		const uintAeUwgC3 = BigInt("1423")
		const addressOImtVaP = accounts[2]
		const uint256MwvTgQ8 = await TPAHkF6qZD.allowance.call(addressWnWZwX2, addressdKKSjlQ, {from: accounts[4]});
		const booliQsxAvG = await TPAHkF6qZD.unfreezeAccount.call(addressTchkOqw, {from: accounts[4]});
		const uint256C3WQBbX = await TPAHkF6qZD.allowance.call(addressgu2LnT, addressGFazmeq, {from: accounts[2]});
		const boolxCYjLl = await TPAHkF6qZD.approve.call(addressOImtVaP, uintAeUwgC3, {from: accounts[0]});
		await TPAHkF6qZD.unpause.call({from: accounts[3]});

		assert.equal(uint256MwvTgQ8, BigInt("0"))
		await expect(TPAHkF6qZD.unfreezeAccount.call(addressTchkOqw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAShbKI5s = await TPA.new({from: accounts[4]});
		const uintaLg2cRs = BigInt("1213")
		const addressQSBovc = accounts[0]
		const uintmT115kC = BigInt("1616")
		const addressTVDjXJN = accounts[5]
		const uintctadoRn = BigInt("1361")
		const addressNRGKO3v = accounts[5]
		const boolowalGgR = await TPAShbKI5s.transfer.call(addressQSBovc, uintaLg2cRs, {from: accounts[3]});
		const boolD8p1bqI = await TPAShbKI5s.transfer.call(addressTVDjXJN, uintmT115kC, {from: accounts[2]});
		await TPAShbKI5s.whenNotPaused.call({from: accounts[1]});
		await TPAShbKI5s.unpause.call({from: accounts[0]});
		const boolQBVInf8 = await TPAShbKI5s.approve.call(addressNRGKO3v, uintctadoRn, {from: accounts[2]});
		const uint8APEgxLs = await TPAShbKI5s.decimals.call({from: accounts[2]});

		await expect(TPAShbKI5s.transfer.call(addressQSBovc, uintaLg2cRs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressleeBxyl = accounts[4]
		const addressiHIl2g = accounts[5]
		const uint256hmmF4U5 = await TPAECm608X.totalSupply.call({from: accounts[4]});
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressleeBxyl, {from: accounts[0]});
		await TPAECm608X.onlyOwner.call({from: accounts[2]});
		const addressXnSJx90 = await TPAECm608X.transferOwnership.call(addressiHIl2g, {from: accounts[1]});

		assert.equal(uint256UasXIuG, BigInt("0"))
		assert.equal(uint256hmmF4U5, BigInt("10000000000000000000000000000"))
		await expect(TPAECm608X.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgimioa = await TPA.new({from: accounts[0]});
		const uintr9V3CRb = BigInt("137")
		const addressf2KRoiQ = accounts[1]
		const addressWi8nKuS = accounts[0]
		const addressBuamlVq = accounts[4]
		const uint4PPpxg = BigInt("229")
		const addressMuK7Fwj = accounts[3]
		const addressQ9s1Bsg = accounts[3]
		const booldAmS0kk = await TPAgimioa.increaseAllowance.call(addressf2KRoiQ, uintr9V3CRb, {from: accounts[1]});
		const uint256mrebEKx = await TPAgimioa.allowance.call(addressBuamlVq, addressWi8nKuS, {from: accounts[1]});
		await TPAgimioa.whenPaused.call({from: accounts[2]});
		await TPAgimioa.unpause.call({from: accounts[3]});
		const boolFzN3wpy = await TPAgimioa.increaseAllowance.call(addressMuK7Fwj, uint4PPpxg, {from: accounts[2]});
		const booljGXfpCt = await TPAgimioa.isAdmin.call(addressQ9s1Bsg, {from: accounts[3]});

		assert.equal(booldAmS0kk, true)
		assert.equal(uint256mrebEKx, BigInt("0"))
		await expect(TPAgimioa.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const uintfzRbt5 = BigInt("482")
		const addressmCOmiZG = accounts[3]
		const addressjyZE8t = accounts[4]
		const address1IYH7F = accounts[4]
		const addressDayhMDj = accounts[5]
		const boolmwLiORw = await TPAECm608X.transferFrom.call(addressjyZE8t, addressmCOmiZG, uintfzRbt5, {from: accounts[0]});
		const uint256hmmF4U5 = await TPAECm608X.totalSupply.call({from: accounts[4]});
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(address1IYH7F, {from: accounts[0]});
		await TPAECm608X.onlyOwner.call({from: accounts[2]});
		const addressXnSJx90 = await TPAECm608X.transferOwnership.call(addressDayhMDj, {from: accounts[1]});

		await expect(TPAECm608X.transferFrom.call(addressjyZE8t, addressmCOmiZG, uintfzRbt5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAShbKI5s = await TPA.new({from: accounts[4]});
		const uintCwKed4 = BigInt("1347")
		const addresszMbPP4r = accounts[3]
		const uintnlMOvT = BigInt("1213")
		const addressSLsjI6g = accounts[0]
		const uintCCW7CxA = BigInt("1616")
		const addressJ1QNDpn = accounts[6]
		const uintiSNwxay = BigInt("1361")
		const addressLWQjzvK = accounts[5]
		const addressLOBZBzf = await TPAShbKI5s.burnFrom.call(addresszMbPP4r, uintCwKed4, {from: "0x0000000000000000000000000000000000000001"});
		const boolowalGgR = await TPAShbKI5s.transfer.call(addressSLsjI6g, uintnlMOvT, {from: accounts[3]});
		await TPAShbKI5s.whenPaused.call({from: accounts[5]});
		const boolD8p1bqI = await TPAShbKI5s.transfer.call(addressJ1QNDpn, uintCCW7CxA, {from: accounts[2]});
		await TPAShbKI5s.whenNotPaused.call({from: accounts[1]});
		await TPAShbKI5s.unpause.call({from: accounts[0]});
		const boolQBVInf8 = await TPAShbKI5s.approve.call(addressLWQjzvK, uintiSNwxay, {from: accounts[2]});
		await TPAShbKI5s.onlyOwner.call({from: accounts[0]});
		const uint8APEgxLs = await TPAShbKI5s.decimals.call({from: accounts[2]});

		await expect(TPAShbKI5s.burnFrom.call(addresszMbPP4r, uintCwKed4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzZls6v1 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRL5bQkQ = accounts[5]
		const stringXQSsJD3 = await TPAzZls6v1.name.call({from: accounts[1]});
		await TPAzZls6v1.unpause.call({from: accounts[4]});
		const uint8K3UBVBU = await TPAzZls6v1.decimals.call({from: accounts[0]});
		const stringoCQ0oHs = await TPAzZls6v1.name.call({from: accounts[4]});
		const addressZ3Fym7m = await TPAzZls6v1.transferOwnership.call(addressRL5bQkQ, {from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAeWMpIMs = await TPA.new({from: accounts[5]});
		const addressJmV1CNY = accounts[2]
		const uintchh7QgQ = BigInt("1434")
		const address39Q6jm = accounts[3]
		const uintsTLaNeW = BigInt("134")
		const addressq5Ai6js = accounts[1]
		const stringFeT5qcx = await TPAeWMpIMs.name.call({from: accounts[0]});
		const addressF2LmSgM = await TPAeWMpIMs.upgradeTo.call(addressJmV1CNY, {from: accounts[3]});
		const stringo2F2GVE = await TPAeWMpIMs.symbol.call({from: accounts[3]});
		const boolwHiUfX9 = await TPAeWMpIMs.decreaseAllowance.call(address39Q6jm, uintchh7QgQ, {from: accounts[1]});
		const boolN6oBf9R = await TPAeWMpIMs.increaseAllowance.call(addressq5Ai6js, uintsTLaNeW, {from: accounts[4]});

		assert.equal(stringFeT5qcx, "TPA")
		await expect(TPAeWMpIMs.upgradeTo.call(addressJmV1CNY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeTN2Av0 = await TPA.new({from: accounts[3]});
		const addressdE6OFb = accounts[3]
		const addressaJmXeFb = accounts[3]
		const boolZ79tPTn = await TPAeTN2Av0.paused.call({from: accounts[0]});
		const boolT1gqfn = await TPAeTN2Av0.freezeAccount.call(addressdE6OFb, {from: accounts[2]});
		const boolPkhxnIh = await TPAeTN2Av0.paused.call({from: accounts[5]});
		const addressZB8bYhh = await TPAeTN2Av0.removeAdmin.call(addressaJmXeFb, {from: accounts[0]});

		assert.equal(boolZ79tPTn, false)
		await expect(TPAeTN2Av0.freezeAccount.call(addressdE6OFb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressGUhhdza = accounts[4]
		const uintyE8X4X3 = BigInt("1501")
		const addressZmV2Inm = accounts[0]
		const uintrStkV0L = BigInt("1349")
		const addressT8uurZV = accounts[0]
		const addressfaC1st = accounts[6]
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressGUhhdza, {from: accounts[0]});
		const boolmLM4c0z = await TPAECm608X.approve.call(addressZmV2Inm, uintyE8X4X3, {from: accounts[3]});
		const boolJlkGbBu = await TPAECm608X.unlock.call(addressT8uurZV, uintrStkV0L, {from: accounts[3]});
		const addressXnSJx90 = await TPAECm608X.transferOwnership.call(addressfaC1st, {from: accounts[1]});

		assert.equal(boolmLM4c0z, true)
		assert.equal(uint256UasXIuG, BigInt("0"))
		await expect(TPAECm608X.unlock.call(addressT8uurZV, uintrStkV0L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const uintSJIOjcx = BigInt("1736")
		const address6zEX8B = accounts[4]
		const addressCtCi0i = accounts[4]
		const addressH8uwp7u = accounts[5]
		const uint256Ki7Vsa8 = await TPAECm608X.burn.call(uintSJIOjcx, {from: accounts[5]});
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(address6zEX8B, {from: accounts[0]});
		const uint256WjHodT = await TPAECm608X.balanceOf.call(addressCtCi0i, {from: accounts[1]});
		const addressXnSJx90 = await TPAECm608X.transferOwnership.call(addressH8uwp7u, {from: accounts[1]});

		assert.equal(uint256UasXIuG, BigInt("0"))
		assert.equal(uint256WjHodT, BigInt("0"))
		await expect(TPAECm608X.transferOwnership.call(addressH8uwp7u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressy8qOYzn = accounts[4]
		const uintc2774ac = BigInt("383")
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressy8qOYzn, {from: accounts[0]});
		await TPAECm608X.renounceAdmin.call({from: accounts[4]});
		const uint2569PKNpx = await TPAECm608X.burn.call(uintc2774ac, {from: accounts[5]});

		assert.equal(uint256UasXIuG, BigInt("0"))
		await expect(TPAECm608X.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressFEcsjPW = accounts[5]
		const addressOutEp0 = accounts[5]
		const boolm1U7BGu = await TPAECm608X.isOwner.call(addressFEcsjPW, {from: accounts[4]});
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressOutEp0, {from: accounts[0]});

		assert.equal(boolm1U7BGu, true)
		assert.equal(uint256UasXIuG, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressRLJqI4 = accounts[4]
		const uintp8OqCbt = BigInt("223")
		const addresspK8pDm = accounts[3]
		const addressehrvsQB = accounts[2]
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressRLJqI4, {from: accounts[0]});
		const boolvPbE4Yb = await TPAECm608X.decreaseAllowance.call(addresspK8pDm, uintp8OqCbt, {from: accounts[2]});
		const boolHWcVYj4 = await TPAECm608X.unfreezeAccount.call(addressehrvsQB, {from: accounts[1]});

		assert.equal(uint256UasXIuG, BigInt("0"))
		await expect(TPAECm608X.decreaseAllowance.call(addresspK8pDm, uintp8OqCbt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressSw0KaP = accounts[5]
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressSw0KaP, {from: accounts[0]});
		const stringRRzuZww = await TPAECm608X.symbol.call({from: accounts[1]});

		assert.equal(stringRRzuZww, "TPA")
		assert.equal(uint256UasXIuG, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPACiIp2N = await TPA.new({from: accounts[3]});
		const uintCamco4m = BigInt("1378")
		const addressZ9oYDGo = accounts[0]
		const addressUtmAeFv = accounts[1]
		const uintwhr9kOG = BigInt("1607")
		const addresse4QTrUO = accounts[4]
		const addressze6QEGY = accounts[1]
		const boolmtqZ01 = await TPACiIp2N.approve.call(addressZ9oYDGo, uintCamco4m, {from: accounts[3]});
		const stringXAWHF1V = await TPACiIp2N.name.call({from: accounts[1]});
		const boolQgJJg6 = await TPACiIp2N.freezeAccount.call(addressUtmAeFv, {from: accounts[3]});
		const uint256Xc9Ldi9 = await TPACiIp2N.totalSupply.call({from: accounts[4]});
		const boolVcNJWS = await TPACiIp2N.transferFrom.call(addressze6QEGY, addresse4QTrUO, uintwhr9kOG, {from: accounts[1]});

		assert.equal(boolQgJJg6, true)
		assert.equal(boolmtqZ01, true)
		assert.equal(stringXAWHF1V, "TPA")
		assert.equal(uint256Xc9Ldi9, BigInt("10000000000000000000000000000"))
		await expect(TPACiIp2N.transferFrom.call(addressze6QEGY, addresse4QTrUO, uintwhr9kOG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECm608X = await TPA.new({from: accounts[5]});
		const addressG4274Jf = accounts[5]
		const uint256UasXIuG = await TPAECm608X.balanceOf.call(addressG4274Jf, {from: accounts[0]});
		const uint8R6nUtS2 = await TPAECm608X.decimals.call({from: accounts[5]});
		await TPAECm608X.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256UasXIuG, BigInt("10000000000000000000000000000"))
		assert.equal(uint8R6nUtS2, BigInt("18"))
		await expect(TPAECm608X.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPALbUzbhH = await TPA.new({from: accounts[1]});
		const uintvh4UNzp = BigInt("504")
		const addresstDQnaO7 = accounts[2]
		const addressCKjQBnK = accounts[1]
		const uintcgjFXY = BigInt("637")
		const addressmtDs8a4 = accounts[3]
		const boolwSfl8vC = await TPALbUzbhH.approve.call(addresstDQnaO7, uintvh4UNzp, {from: accounts[2]});
		const addressVy5t3yK = await TPALbUzbhH.removeAdmin.call(addressCKjQBnK, {from: accounts[1]});
		const boolCZzu4CN = await TPALbUzbhH.approve.call(addressmtDs8a4, uintcgjFXY, {from: accounts[0]});

		assert.equal(boolCZzu4CN, true)
		assert.equal(boolwSfl8vC, true)
	});

	it('test for TPA', async () => {
		const TPAShbKI5s = await TPA.new({from: accounts[4]});
		const uintoUKUu2i = BigInt("570")
		const uintD3czZis = BigInt("451")
		const addressgo2F0rw = accounts[2]
		const uintGyobyKy = BigInt("1213")
		const addressBXS5nrF = accounts[2]
		const boolcfT7GOs = await TPAShbKI5s.lock.call(addressgo2F0rw, uintD3czZis, uintoUKUu2i, {from: accounts[4]});
		const boolowalGgR = await TPAShbKI5s.transfer.call(addressBXS5nrF, uintGyobyKy, {from: accounts[3]});

		await expect(TPAShbKI5s.lock.call(addressgo2F0rw, uintD3czZis, uintoUKUu2i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})