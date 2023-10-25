const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringp5ndVec = "QwpEcxy3z1b"
		const stringDd77nY = "K2mYUhvIfNHOpAk"
		const uintrP6vQcu = BigInt("41")
		const ETFXPoolb5mK7fI = await ETFXPool.new(stringp5ndVec, stringDd77nY, uintrP6vQcu, {from: accounts[1]});
		const uinttU0EBz6 = BigInt("599")
		const addressuL9yt05 = accounts[5]
		const addressyA0BPB = accounts[2]
		const uintfhJ3lOn = BigInt("1615")
		const uint8N89k12U = await ETFXPoolb5mK7fI.decimals.call({from: accounts[2]});
		const boolr3eDx7o = await ETFXPoolb5mK7fI.transferFrom.call(addressyA0BPB, addressuL9yt05, uinttU0EBz6, {from: accounts[1]});
		const uint8cDIuh19 = await ETFXPoolb5mK7fI.decimals.call({from: accounts[5]});
		await ETFXPoolb5mK7fI.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KGLLREN = await ETFXPoolb5mK7fI.withdraw.call(uintfhJ3lOn, {from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbajL1kF = await ETFXPool.new({from: accounts[1]});
		const addressMwhU5mB = accounts[3]
		const uintRDF1g77 = BigInt("1526")
		const addressITVI3jc = accounts[5]
		const uint256hBV8pzR = await ETFXPoolbajL1kF.earned.call(addressMwhU5mB, {from: accounts[3]});
		const booleszRMX5 = await ETFXPoolbajL1kF.approve.call(addressITVI3jc, uintRDF1g77, {from: accounts[1]});

		await expect(ETFXPoolbajL1kF.earned.call(addressMwhU5mB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbdWvHdp = await ETFXPool.new({from: accounts[4]});
		const addressW1kXFXu = await ETFXPoolbdWvHdp.owner.call({from: accounts[1]});
		const stringifjTJ4M = await ETFXPoolbdWvHdp.name.call({from: accounts[1]});
		const uint8NR1tkGe = await ETFXPoolbdWvHdp.decimals.call({from: accounts[3]});
		await ETFXPoolbdWvHdp.onlyOwner.call({from: accounts[3]});

		assert.equal(addressW1kXFXu, 0x8B0Dd210a2A31c7355a9897F374c361F8BF9F2b9)
		assert.equal(stringifjTJ4M, "ETFX-FARM")
		assert.equal(uint8NR1tkGe, BigInt("8"))
		await expect(ETFXPoolbdWvHdp.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolq1ihOJB = await ETFXPool.new({from: accounts[2]});
		const uintUow7pes = BigInt("2")
		const addressF6KgoKQ = accounts[1]
		const uint256TlaJNl8 = await ETFXPoolq1ihOJB.totalSupply.call({from: accounts[5]});
		const boolcz5cvv8 = await ETFXPoolq1ihOJB.transfer.call(addressF6KgoKQ, uintUow7pes, {from: accounts[4]});
		const stringBncxpR = await ETFXPoolq1ihOJB.symbol.call({from: accounts[1]});

		assert.equal(uint256TlaJNl8, BigInt("0"))
		await expect(ETFXPoolq1ihOJB.transfer.call(addressF6KgoKQ, uintUow7pes, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqeftihm = await ETFXPool.new({from: accounts[2]});
		const addressSMq6IaR = accounts[5]
		const uintn0C5Ztp = BigInt("1633")
		const uint256O36ov2q = await ETFXPoolqeftihm.balanceOf.call(addressSMq6IaR, {from: accounts[4]});
		const uint256vFWm6nm = await ETFXPoolqeftihm.withdraw.call(uintn0C5Ztp, {from: accounts[0]});
		await ETFXPoolqeftihm.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256O36ov2q, BigInt("0"))
		await expect(ETFXPoolqeftihm.withdraw.call(uintn0C5Ztp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaU4Zx9 = await ETFXPool.new({from: accounts[0]});
		const uinttkArp0h = BigInt("1705")
		const addressfhymobo = accounts[4]
		const stringWJTYIZ = await ETFXPoolaU4Zx9.name.call({from: accounts[4]});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[4]});
		const boolE8JVvJ = await ETFXPoolaU4Zx9.transfer.call(addressfhymobo, uinttkArp0h, {from: accounts[4]});

		assert.equal(stringWJTYIZ, "ETFX-FARM")
		await expect(ETFXPoolaU4Zx9.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbajL1kF = await ETFXPool.new({from: accounts[1]});
		const addressq34K0P2 = accounts[3]
		const uintRyHoZr8 = BigInt("1526")
		const addressVpQ9diV = accounts[5]
		const stringwu3ccN = await ETFXPoolbajL1kF.symbol.call({from: accounts[2]});
		const uint256hBV8pzR = await ETFXPoolbajL1kF.earned.call(addressq34K0P2, {from: accounts[3]});
		const booleszRMX5 = await ETFXPoolbajL1kF.approve.call(addressVpQ9diV, uintRyHoZr8, {from: accounts[1]});
		await ETFXPoolbajL1kF.nonReentrant.call({from: accounts[0]});

		assert.equal(stringwu3ccN, "FETFX")
		await expect(ETFXPoolbajL1kF.earned.call(addressq34K0P2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolkss0Cls = await ETFXPool.new({from: accounts[4]});
		const uintgpSRi9X = BigInt("1565")
		const addressNW2Km5A = accounts[5]
		const addressHR22Luo = accounts[1]
		const uintbOu3pCj = BigInt("1603")
		const boolawkojqQ = await ETFXPoolkss0Cls.transferFrom.call(addressHR22Luo, addressNW2Km5A, uintgpSRi9X, {from: accounts[4]});
		const uint256X5ZfIT2 = await ETFXPoolkss0Cls.totalSupply.call({from: accounts[0]});
		const uint256J9VvJg = await ETFXPoolkss0Cls.withdraw.call(uintbOu3pCj, {from: "0x0000000000000000000000000000000000000001"});
		const uint8HsKf9qN = await ETFXPoolkss0Cls.decimals.call({from: accounts[4]});
		const stringj5a2r5s = await ETFXPoolkss0Cls.name.call({from: accounts[0]});

		await expect(ETFXPoolkss0Cls.transferFrom.call(addressHR22Luo, addressNW2Km5A, uintgpSRi9X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbajL1kF = await ETFXPool.new({from: accounts[1]});
		const addressK5DhEMt = "0x0000000000000000000000000000000000000001"
		const addressIgZV9tI = accounts[2]
		const address3ElNFb = accounts[3]
		const uintHXKiFrV = BigInt("1526")
		const addressevUaGn = accounts[5]
		const uintzikhFEa = BigInt("1861")
		const addresslcCf76y = accounts[3]
		const uint256bveWbZ7 = await ETFXPoolbajL1kF.allowance.call(addressIgZV9tI, addressK5DhEMt, {from: accounts[2]});
		const uint256hBV8pzR = await ETFXPoolbajL1kF.earned.call(address3ElNFb, {from: accounts[3]});
		const booleszRMX5 = await ETFXPoolbajL1kF.approve.call(addressevUaGn, uintHXKiFrV, {from: accounts[1]});
		const boolMpVvkEs = await ETFXPoolbajL1kF.approve.call(addresslcCf76y, uintzikhFEa, {from: accounts[5]});

		assert.equal(uint256bveWbZ7, BigInt("0"))
		await expect(ETFXPoolbajL1kF.earned.call(address3ElNFb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPjuswzm = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFCsnig = accounts[3]
		const addresschMGItL = accounts[2]
		const uintwAVGm7 = BigInt("917")
		const addressKxaUi0r = accounts[4]
		await ETFXPoolPjuswzm.onlyOwner.call({from: accounts[4]});
		const uint256K8Y1TZN = await ETFXPoolPjuswzm.allowance.call(addresschMGItL, addressFCsnig, {from: accounts[1]});
		const boolLj886Ku = await ETFXPoolPjuswzm.transfer.call(addressKxaUi0r, uintwAVGm7, {from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqeftihm = await ETFXPool.new({from: accounts[2]});
		const addressf68TMDW = accounts[3]
		const addressoU99n8h = "0x0000000000000000000000000000000000000001"
		const uintAr1mEdA = BigInt("1653")
		const uint256wkKzpaF = await ETFXPoolqeftihm.allowance.call(addressoU99n8h, addressf68TMDW, {from: accounts[0]});
		await ETFXPoolqeftihm.renounceOwnership.call({from: accounts[5]});
		const uint256vFWm6nm = await ETFXPoolqeftihm.withdraw.call(uintAr1mEdA, {from: accounts[0]});

		assert.equal(uint256wkKzpaF, BigInt("0"))
		await expect(ETFXPoolqeftihm.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqeftihm = await ETFXPool.new({from: accounts[2]});
		const uint0gtUNc = BigInt("833")
		const addressMEJp3A2 = accounts[0]
		const uintobi0Pd = BigInt("136")
		const boolGAmEST = await ETFXPoolqeftihm.decreaseAllowance.call(addressMEJp3A2, uint0gtUNc, {from: accounts[4]});
		const uint256vFWm6nm = await ETFXPoolqeftihm.withdraw.call(uintobi0Pd, {from: accounts[0]});

		await expect(ETFXPoolqeftihm.decreaseAllowance.call(addressMEJp3A2, uint0gtUNc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaU4Zx9 = await ETFXPool.new({from: accounts[0]});
		const uintTxvqt7S = BigInt("1055")
		const addresskGfj9Jx = accounts[2]
		const uintGXFdVtB = BigInt("1406")
		const uintpsLU0EG = BigInt("1732")
		const addressGjyRgTG = accounts[4]
		const boolQj7JKp = await ETFXPoolaU4Zx9.approve.call(addresskGfj9Jx, uintTxvqt7S, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[4]});
		const uint256nQggV1E = await ETFXPoolaU4Zx9.withdraw.call(uintGXFdVtB, {from: accounts[5]});
		const boolE8JVvJ = await ETFXPoolaU4Zx9.transfer.call(addressGjyRgTG, uintpsLU0EG, {from: accounts[4]});

		assert.equal(boolQj7JKp, true)
		await expect(ETFXPoolaU4Zx9.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooluUreS6F = await ETFXPool.new({from: accounts[0]});
		const uintswBZeCT = BigInt("1128")
		const addressgmUvo9W = accounts[1]
		const uintMGnhmR = BigInt("1773")
		const addressEh7nrBy = accounts[3]
		const uintX7VYnst = BigInt("104")
		const addressVDbsSBu = accounts[4]
		const addresspkHNN27 = accounts[0]
		const booluWUqsb = await ETFXPooluUreS6F.increaseAllowance.call(addressgmUvo9W, uintswBZeCT, {from: "0x0000000000000000000000000000000000000001"});
		const boolleJ5Ifu = await ETFXPooluUreS6F.increaseAllowance.call(addressEh7nrBy, uintMGnhmR, {from: accounts[0]});
		await ETFXPooluUreS6F.onlyOwner.call({from: accounts[4]});
		const addressF5r2BZW = await ETFXPooluUreS6F.owner.call({from: accounts[2]});
		const boolxlW8lGl = await ETFXPooluUreS6F.transferFrom.call(addresspkHNN27, addressVDbsSBu, uintX7VYnst, {from: accounts[4]});

		assert.equal(boolleJ5Ifu, true)
		assert.equal(booluWUqsb, true)
		await expect(ETFXPooluUreS6F.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaU4Zx9 = await ETFXPool.new({from: accounts[0]});
		const uintvhUePbT = BigInt("1717")
		const addressEurugdS = accounts[4]
		const uint256FgrWNdX = await ETFXPoolaU4Zx9.rewardPerToken.call({from: accounts[1]});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[4]});
		const boolE8JVvJ = await ETFXPoolaU4Zx9.transfer.call(addressEurugdS, uintvhUePbT, {from: accounts[4]});
		const uint256hPbLpAG = await ETFXPoolaU4Zx9.totalSupply.call({from: accounts[0]});
		const uint8kKuhOGt = await ETFXPoolaU4Zx9.decimals.call({from: accounts[5]});
		const uint256MKaTMSE = await ETFXPoolaU4Zx9.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[2]});

		assert.equal(uint256FgrWNdX, BigInt("0"))
		await expect(ETFXPoolaU4Zx9.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolMEyjujy = await ETFXPool.new({from: accounts[2]});
		const uintIpRWvBW = BigInt("1902")
		const uint256DfRy6Za = await ETFXPoolMEyjujy.stake.call(uintIpRWvBW, {from: accounts[4]});
		const stringYf5Thvm = await ETFXPoolMEyjujy.symbol.call({from: accounts[2]});
		const stringq1yuHfw = await ETFXPoolMEyjujy.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolMEyjujy.getReward.call({from: accounts[4]});
		const stringDf95B1q = await ETFXPoolMEyjujy.symbol.call({from: accounts[4]});

		await expect(ETFXPoolMEyjujy.stake.call(uintIpRWvBW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaU4Zx9 = await ETFXPool.new({from: accounts[0]});
		const uintpCvNHK4 = BigInt("1717")
		const addressHhLAcds = accounts[4]
		const uintSc8AcyJ = BigInt("414")
		const addressNiSDzt1 = accounts[1]
		const uint256FgrWNdX = await ETFXPoolaU4Zx9.rewardPerToken.call({from: accounts[1]});
		await ETFXPoolaU4Zx9.renounceOwnership.call({from: accounts[0]});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[4]});
		const boolE8JVvJ = await ETFXPoolaU4Zx9.transfer.call(addressHhLAcds, uintpCvNHK4, {from: accounts[4]});
		await ETFXPoolaU4Zx9.renounceOwnership.call({from: accounts[5]});
		const uint256hPbLpAG = await ETFXPoolaU4Zx9.totalSupply.call({from: accounts[0]});
		const boolTsGoLnY = await ETFXPoolaU4Zx9.decreaseAllowance.call(addressNiSDzt1, uintSc8AcyJ, {from: accounts[2]});
		const uint8kKuhOGt = await ETFXPoolaU4Zx9.decimals.call({from: accounts[5]});

		assert.equal(uint256FgrWNdX, BigInt("0"))
		await expect(ETFXPoolaU4Zx9.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolV7SB2mK = await ETFXPool.new({from: accounts[3]});
		const addressOJDkZAM = accounts[3]
		const addresswKJhKA = accounts[5]
		const uint256FoPczGf = await ETFXPoolV7SB2mK.balanceOf.call(addressOJDkZAM, {from: accounts[2]});
		const uint256uh5kG0s = await ETFXPoolV7SB2mK.rewardPerToken.call({from: accounts[1]});
		await ETFXPoolV7SB2mK.exit.call({from: accounts[0]});
		const uint8iLYL6Ir = await ETFXPoolV7SB2mK.decimals.call({from: accounts[4]});
		const uint256JLJhcsh = await ETFXPoolV7SB2mK.earned.call(addresswKJhKA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FoPczGf, BigInt("0"))
		assert.equal(uint256uh5kG0s, BigInt("0"))
		await expect(ETFXPoolV7SB2mK.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaU4Zx9 = await ETFXPool.new({from: accounts[0]});
		const addresslXtMYlP = accounts[0]
		const addressp58ApjB = await ETFXPoolaU4Zx9.transferOwnership.call(addresslXtMYlP, {from: accounts[0]});
		await ETFXPoolaU4Zx9.getReward.call({from: accounts[4]});
		await ETFXPoolaU4Zx9.exit.call({from: accounts[0]});

		await expect(ETFXPoolaU4Zx9.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})