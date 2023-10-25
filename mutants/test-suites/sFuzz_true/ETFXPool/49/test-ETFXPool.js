const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringI156tu = "9m2C5IAOslcH48c7SVXBRbE5tCzCUIIhHq7jLVcc7XaeQtqrVaTMcVYOqNe4yc7RMUXbekbtYF1ArA"
		const stringtZX5t4l = "YoBN4PIAfB8714DXZLrnJr1k759t8WIpOQUvM7WLCJFD6xnCZcDKPY"
		const uintF0Ig8Zy = BigInt("43")
		const ETFXPoolHJ9II6I = await ETFXPool.new(stringI156tu, stringtZX5t4l, uintF0Ig8Zy, {from: accounts[3]});
		const uintSTyFR9W = BigInt("1789")
		const addressSM8Ltx4 = accounts[1]
		await ETFXPoolHJ9II6I.renounceOwnership.call({from: accounts[2]});
		await ETFXPoolHJ9II6I.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolioAyKAq = await ETFXPoolHJ9II6I.approve.call(addressSM8Ltx4, uintSTyFR9W, {from: accounts[2]});
		const uint256kbFLBN2 = await ETFXPoolHJ9II6I.rewardPerToken.call({from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAUJkzlq = await ETFXPool.new({from: accounts[4]});
		const uintnQwhSdJ = BigInt("1312")
		const addressLVWRQ0C = accounts[0]
		const uintaFgN63S = BigInt("2029")
		const addressJjVFZw1 = accounts[1]
		const addressQ5aPJc = accounts[0]
		const uintrOc6H2Y = BigInt("799")
		const addressmiDrmKw = await ETFXPoolAUJkzlq.owner.call({from: accounts[2]});
//		const boolvcKZqG3 = await ETFXPoolAUJkzlq.decreaseAllowance.call(addressLVWRQ0C, uintnQwhSdJ, {from: accounts[3]});
//		const boolax9fWhX = await ETFXPoolAUJkzlq.transferFrom.call(addressQ5aPJc, addressJjVFZw1, uintaFgN63S, {from: accounts[2]});
//		const uint256VneEF3v = await ETFXPoolAUJkzlq.withdraw.call(uintrOc6H2Y, {from: accounts[1]});

		assert.equal(addressmiDrmKw, 0x69Aba7966D7Ed386d11C5329811b050045e0AC5D)
		await expect(ETFXPoolAUJkzlq.decreaseAllowance.call(addressLVWRQ0C, uintnQwhSdJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintRxmcjFU = BigInt("1585")
		const addressK8K4DPL = accounts[0]
		const addressh0vgpiT = "0x0000000000000000000000000000000000000001"
		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addressK8K4DPL, uintRxmcjFU, {from: accounts[2]});
		const uint256Zpj272O = await ETFXPooloDCvxJ5.balanceOf.call(addressh0vgpiT, {from: accounts[4]});

		assert.equal(booljBvgh4N, true)
		assert.equal(uint256Zpj272O, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJORfZLv = await ETFXPool.new({from: accounts[0]});
		const addressxIIYjmC = accounts[4]
		const addressjTA1tP7 = accounts[3]
		const addressThmsD0G = "0x0000000000000000000000000000000000000001"
		const addressuKx1lss = await ETFXPoolJORfZLv.owner.call({from: accounts[3]});
//		await ETFXPoolJORfZLv.nonReentrant.call({from: accounts[2]});
//		const uint256FkNipj5 = await ETFXPoolJORfZLv.allowance.call(addressjTA1tP7, addressxIIYjmC, {from: accounts[4]});
//		const uint256FjhS4AJ = await ETFXPoolJORfZLv.balanceOf.call(addressThmsD0G, {from: accounts[4]});

		assert.equal(addressuKx1lss, 0xcaf8F6e818b40bA8561593e9641B90D59B363422)
		await expect(ETFXPoolJORfZLv.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgjSGXox = await ETFXPool.new({from: accounts[2]});
		const uintkjp07Rv = BigInt("214")
		const address9CxL1G = accounts[2]
		const addressfSkUznX = accounts[1]
		const addressqmdoYWK = accounts[1]
		const uintvYbQpGP = BigInt("804")
		const addresssDlvdLO = accounts[2]
//		const boolhcAFcSt = await ETFXPoolgjSGXox.transferFrom.call(addressfSkUznX, address9CxL1G, uintkjp07Rv, {from: accounts[3]});
//		await ETFXPoolgjSGXox.renounceOwnership.call({from: accounts[3]});
//		const addressBbwk46L = await ETFXPoolgjSGXox.transferOwnership.call(addressqmdoYWK, {from: accounts[3]});
//		const booltHmdEV = await ETFXPoolgjSGXox.decreaseAllowance.call(addresssDlvdLO, uintvYbQpGP, {from: accounts[0]});

		await expect(ETFXPoolgjSGXox.transferFrom.call(addressfSkUznX, address9CxL1G, uintkjp07Rv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolHGibXMm = await ETFXPool.new({from: accounts[0]});
		const uintvtshQxS = BigInt("1976")
		const addresshC1SNn3 = accounts[1]
		const uint8hblizol = await ETFXPoolHGibXMm.decimals.call({from: accounts[3]});
//		const boolsfLjgvz = await ETFXPoolHGibXMm.transfer.call(addresshC1SNn3, uintvtshQxS, {from: accounts[1]});
//		await ETFXPoolHGibXMm.exit.call({from: accounts[4]});
//		await ETFXPoolHGibXMm.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolHGibXMm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BGZWMX = await ETFXPoolHGibXMm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8hblizol, BigInt("8"))
		await expect(ETFXPoolHGibXMm.transfer.call(addresshC1SNn3, uintvtshQxS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAUJkzlq = await ETFXPool.new({from: accounts[4]});
		const uintNABVjDW = BigInt("1552")
		const addressJv0oKfW = accounts[2]
		const uintIPYRHIB = BigInt("2036")
		const addressM1knFU = accounts[1]
		const addressdQi00g9 = accounts[0]
		const uintGy3psSy = BigInt("799")
		const uintt1akeaz = BigInt("2029")
		const addressF6GEnuF = accounts[2]
		const addresssOD336 = accounts[4]
		const boolfBBNvzY = await ETFXPoolAUJkzlq.approve.call(addressJv0oKfW, uintNABVjDW, {from: accounts[2]});
		const addressmiDrmKw = await ETFXPoolAUJkzlq.owner.call({from: accounts[2]});
//		const boolax9fWhX = await ETFXPoolAUJkzlq.transferFrom.call(addressdQi00g9, addressM1knFU, uintIPYRHIB, {from: accounts[2]});
//		const uint256VneEF3v = await ETFXPoolAUJkzlq.withdraw.call(uintGy3psSy, {from: accounts[1]});
//		const boolXiQh7B = await ETFXPoolAUJkzlq.transferFrom.call(addresssOD336, addressF6GEnuF, uintt1akeaz, {from: accounts[2]});

		assert.equal(addressmiDrmKw, 0x69Aba7966D7Ed386d11C5329811b050045e0AC5D)
		assert.equal(boolfBBNvzY, true)
		await expect(ETFXPoolAUJkzlq.transferFrom.call(addressdQi00g9, addressM1knFU, uintIPYRHIB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const addressO9FWtsh = "0x0000000000000000000000000000000000000001"
		const uintFYDeFux = BigInt("1482")
		const addressW8mNeo = accounts[2]
		const uintg252QFp = BigInt("1923")
		const uint256Zpj272O = await ETFXPooloDCvxJ5.balanceOf.call(addressO9FWtsh, {from: accounts[4]});
		const boolj20QlAZ = await ETFXPooloDCvxJ5.approve.call(addressW8mNeo, uintFYDeFux, {from: accounts[0]});
//		const uint256LVY2bFh = await ETFXPooloDCvxJ5.stake.call(uintg252QFp, {from: accounts[2]});

		assert.equal(boolj20QlAZ, true)
		assert.equal(uint256Zpj272O, BigInt("0"))
		await expect(ETFXPooloDCvxJ5.stake.call(uintg252QFp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintf3FBnP = BigInt("1702")
		const uint0RNsfs = BigInt("1585")
		const addresssCm8ekH = accounts[0]
		const addresskZzR9Q1 = "0x0000000000000000000000000000000000000002"
//		const uint256sVDE1GF = await ETFXPooloDCvxJ5.withdraw.call(uintf3FBnP, {from: "0x0000000000000000000000000000000000000001"});
//		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addresssCm8ekH, uint0RNsfs, {from: accounts[2]});
//		const uint256Zpj272O = await ETFXPooloDCvxJ5.balanceOf.call(addresskZzR9Q1, {from: accounts[4]});

		await expect(ETFXPooloDCvxJ5.withdraw.call(uintf3FBnP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintekkx1X = BigInt("1585")
		const addressvMx1SyV = accounts[0]
		const addressL2tQldV = "0x0000000000000000000000000000000000000002"
//		await ETFXPooloDCvxJ5.renounceOwnership.call({from: accounts[5]});
//		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addressvMx1SyV, uintekkx1X, {from: accounts[2]});
//		const addressBMuQ3G = await ETFXPooloDCvxJ5.owner.call({from: accounts[3]});
//		const uint256Zpj272O = await ETFXPooloDCvxJ5.balanceOf.call(addressL2tQldV, {from: accounts[4]});

		await expect(ETFXPooloDCvxJ5.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintIq6sjWa = BigInt("1585")
		const addressnH1Gyly = accounts[2]
		const addressvIwCHXt = accounts[2]
		const addressMfvCInk = accounts[0]
		const uintzd7OpMP = BigInt("1029")
		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addressnH1Gyly, uintIq6sjWa, {from: accounts[2]});
		const uint256X3OIqA6 = await ETFXPooloDCvxJ5.allowance.call(addressMfvCInk, addressvIwCHXt, {from: accounts[1]});
//		const uint256zZq1rbS = await ETFXPooloDCvxJ5.stake.call(uintzd7OpMP, {from: accounts[4]});
//		const uint8aUy4Tvt = await ETFXPooloDCvxJ5.decimals.call({from: accounts[0]});

		assert.equal(booljBvgh4N, true)
		assert.equal(uint256X3OIqA6, BigInt("0"))
		await expect(ETFXPooloDCvxJ5.stake.call(uintzd7OpMP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintfAyadmU = BigInt("1585")
		const addresswPkNISs = accounts[1]
		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addresswPkNISs, uintfAyadmU, {from: accounts[2]});
//		await ETFXPooloDCvxJ5.getReward.call({from: accounts[5]});

		assert.equal(booljBvgh4N, true)
		await expect(ETFXPooloDCvxJ5.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAUJkzlq = await ETFXPool.new({from: accounts[4]});
		const uintmPmgzqc = BigInt("1954")
		const addressIvwLnMu = accounts[1]
		const uintlyFNEUW = BigInt("1312")
		const addressFL0EkLa = accounts[2]
		const uintPcfJxeH = BigInt("690")
		const addressiB7WPbZ = accounts[5]
		const addressyYwfDgC = accounts[1]
		const uint256p0lpJV = await ETFXPoolAUJkzlq.rewardPerToken.call({from: accounts[0]});
		const boolj5uympw = await ETFXPoolAUJkzlq.approve.call(addressIvwLnMu, uintmPmgzqc, {from: accounts[3]});
//		const boolvcKZqG3 = await ETFXPoolAUJkzlq.decreaseAllowance.call(addressFL0EkLa, uintlyFNEUW, {from: accounts[3]});
//		const boolc62KGhd = await ETFXPoolAUJkzlq.transferFrom.call(addressyYwfDgC, addressiB7WPbZ, uintPcfJxeH, {from: accounts[4]});

		assert.equal(boolj5uympw, true)
		assert.equal(uint256p0lpJV, BigInt("0"))
		await expect(ETFXPoolAUJkzlq.decreaseAllowance.call(addressFL0EkLa, uintlyFNEUW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uintlKoXeGk = BigInt("528")
		const addressRMnd9UF = accounts[4]
		const uintZGoUrcL = BigInt("1585")
		const addressGmjddF = accounts[1]
		const string8xO9ZR = await ETFXPooloDCvxJ5.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrQSie0a = await ETFXPooloDCvxJ5.increaseAllowance.call(addressRMnd9UF, uintlKoXeGk, {from: accounts[5]});
		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addressGmjddF, uintZGoUrcL, {from: accounts[2]});

		assert.equal(booljBvgh4N, true)
		assert.equal(boolrQSie0a, true)
		assert.equal(string8xO9ZR, "ETFX-FARM")
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAUJkzlq = await ETFXPool.new({from: accounts[4]});
		const uintOaTXLrq = BigInt("1100")
		const addressjP2H2Vj = accounts[4]
		const uintI46lCD = BigInt("1286")
		const addressGfHij5z = accounts[1]
		const stringQt63yNb = await ETFXPoolAUJkzlq.symbol.call({from: accounts[0]});
//		const bools6lgEOF = await ETFXPoolAUJkzlq.decreaseAllowance.call(addressjP2H2Vj, uintOaTXLrq, {from: accounts[4]});
//		const boolvcKZqG3 = await ETFXPoolAUJkzlq.decreaseAllowance.call(addressGfHij5z, uintI46lCD, {from: accounts[3]});

		assert.equal(stringQt63yNb, "FETFX")
		await expect(ETFXPoolAUJkzlq.decreaseAllowance.call(addressjP2H2Vj, uintOaTXLrq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGGtQ5rC = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintA1ec0yf = BigInt("732")
		const addressxH6AAvg = accounts[0]
		const boolJsStItV = await ETFXPoolGGtQ5rC.decreaseAllowance.call(addressxH6AAvg, uintA1ec0yf, {from: accounts[0]});
		await ETFXPoolGGtQ5rC.exit.call({from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloDCvxJ5 = await ETFXPool.new({from: accounts[3]});
		const uinthBAeNt8 = BigInt("1585")
		const addressDWBqtLb = accounts[2]
//		await ETFXPooloDCvxJ5.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const booljBvgh4N = await ETFXPooloDCvxJ5.increaseAllowance.call(addressDWBqtLb, uinthBAeNt8, {from: accounts[2]});

		await expect(ETFXPooloDCvxJ5.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAUJkzlq = await ETFXPool.new({from: accounts[4]});
		const addressITbNfkF = accounts[3]
		const uintttTJHk6 = BigInt("1312")
		const addresstxItIQ4 = accounts[1]
		const uintSoLvLGf = BigInt("974")
		const addressp0rmkyK = accounts[3]
		const addressQRvDzpB = accounts[1]
		const addressZsxMAK = await ETFXPoolAUJkzlq.transferOwnership.call(addressITbNfkF, {from: accounts[4]});
//		const boolvcKZqG3 = await ETFXPoolAUJkzlq.decreaseAllowance.call(addresstxItIQ4, uintttTJHk6, {from: accounts[3]});
//		const uint256xoE3qNA = await ETFXPoolAUJkzlq.rewardPerToken.call({from: accounts[4]});
//		await ETFXPoolAUJkzlq.exit.call({from: accounts[1]});
//		await ETFXPoolAUJkzlq.renounceOwnership.call({from: accounts[1]});
//		const boolY9UjDNf = await ETFXPoolAUJkzlq.transferFrom.call(addressQRvDzpB, addressp0rmkyK, uintSoLvLGf, {from: accounts[2]});

		await expect(ETFXPoolAUJkzlq.decreaseAllowance.call(addresstxItIQ4, uintttTJHk6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolNhLW7Fb = await ETFXPool.new({from: accounts[3]});
		const uintGbyeCeZ = BigInt("1706")
		const addressLH04h5D = accounts[4]
		const boolq2lpbtN = await ETFXPoolNhLW7Fb.increaseAllowance.call(addressLH04h5D, uintGbyeCeZ, {from: accounts[4]});
//		await ETFXPoolNhLW7Fb.renounceOwnership.call({from: accounts[3]});
//		const uint256NjpCqRQ = await ETFXPoolNhLW7Fb.rewardPerToken.call({from: accounts[3]});
//		const uint8TtOeZkK = await ETFXPoolNhLW7Fb.decimals.call({from: accounts[3]});

		assert.equal(boolq2lpbtN, true)
		await expect(ETFXPoolNhLW7Fb.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})