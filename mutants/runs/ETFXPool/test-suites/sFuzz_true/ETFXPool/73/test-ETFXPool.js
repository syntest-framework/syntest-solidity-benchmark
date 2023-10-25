const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolJq2aqvs = await ETFXPool.new({from: accounts[4]});
		const uintRVXME0 = BigInt("203")
		const addressH2mRu2l = accounts[0]
		await ETFXPoolJq2aqvs.exit.call({from: accounts[5]});
		const uint256tQm03pd = await ETFXPoolJq2aqvs.stake.call(uintRVXME0, {from: accounts[0]});
		await ETFXPoolJq2aqvs.nonReentrant.call({from: accounts[1]});
		const uint256dwa7Lr3 = await ETFXPoolJq2aqvs.earned.call(addressH2mRu2l, {from: accounts[4]});
		await ETFXPoolJq2aqvs.exit.call({from: accounts[0]});

		await expect(ETFXPoolJq2aqvs.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDpFAM1l = await ETFXPool.new({from: accounts[3]});
		await ETFXPoolDpFAM1l.getReward.call({from: accounts[0]});
		const addressSQkorY = await ETFXPoolDpFAM1l.owner.call({from: accounts[5]});
		await ETFXPoolDpFAM1l.getReward.call({from: accounts[2]});
		const uint256IzA4xuz = await ETFXPoolDpFAM1l.totalSupply.call({from: accounts[4]});

		await expect(ETFXPoolDpFAM1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldlOd0j4 = await ETFXPool.new({from: accounts[4]});
		const uintVPyOlbh = BigInt("262")
		const uinth5eb0Tv = BigInt("2031")
		const addressitb0YXI = accounts[2]
		const uint256nUQEBtg = await ETFXPooldlOd0j4.withdraw.call(uintVPyOlbh, {from: accounts[0]});
		await ETFXPooldlOd0j4.onlyOwner.call({from: accounts[4]});
		const boolvOgqHlM = await ETFXPooldlOd0j4.increaseAllowance.call(addressitb0YXI, uinth5eb0Tv, {from: accounts[5]});

		await expect(ETFXPooldlOd0j4.withdraw.call(uintVPyOlbh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvu1qZRT = await ETFXPool.new({from: accounts[4]});
		const uintA9xxmdS = BigInt("663")
		const uintcvkzMN9 = BigInt("975")
		const addressYpi8Y8w = accounts[2]
		const addressgMS2ud9 = "0x0000000000000000000000000000000000000001"
		const uintMCdWHbm = BigInt("1310")
		const uintNyp4Yws = BigInt("194")
		const addressfCgSWCp = accounts[4]
		const addresspK9sad = accounts[4]
		const uint256QCeCbUu = await ETFXPoolvu1qZRT.stake.call(uintA9xxmdS, {from: accounts[0]});
		const boolFPzVDng = await ETFXPoolvu1qZRT.transferFrom.call(addressgMS2ud9, addressYpi8Y8w, uintcvkzMN9, {from: accounts[3]});
		const uint256PxOwiYy = await ETFXPoolvu1qZRT.stake.call(uintMCdWHbm, {from: accounts[0]});
		const boolhe4FxJy = await ETFXPoolvu1qZRT.decreaseAllowance.call(addressfCgSWCp, uintNyp4Yws, {from: accounts[3]});
		await ETFXPoolvu1qZRT.renounceOwnership.call({from: accounts[5]});
		const uint256j04lOMr = await ETFXPoolvu1qZRT.earned.call(addresspK9sad, {from: accounts[2]});

		await expect(ETFXPoolvu1qZRT.stake.call(uintA9xxmdS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringHKyLm5y = "nbLOLIYrOeUzKJ2VVvEOviGSqG6j"
		const stringLV5g3Y8 = "GAplxKfqcAJhullCoH8HdclMxyGNqyd3h4erOfGJJfDs3f1rmpbi8GeqCwLotX9OBlB"
		const uintdIFrXC = BigInt("49")
		const ETFXPooltPyEFu = await ETFXPool.new(stringHKyLm5y, stringLV5g3Y8, uintdIFrXC, {from: accounts[0]});
		const uintAuHAt1b = BigInt("949")
		const addressOaGZFRR = accounts[0]
		const stringPYn628M = await ETFXPooltPyEFu.symbol.call({from: accounts[3]});
		const stringDKw9Jiw = await ETFXPooltPyEFu.name.call({from: accounts[4]});
		await ETFXPooltPyEFu.nonReentrant.call({from: accounts[0]});
		const boolJTjZEUW = await ETFXPooltPyEFu.decreaseAllowance.call(addressOaGZFRR, uintAuHAt1b, {from: "0x0000000000000000000000000000000000000001"});
		const stringERlLrc5 = await ETFXPooltPyEFu.symbol.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyHNav4M = await ETFXPool.new({from: accounts[0]});
		const uintRhR2YtC = BigInt("1993")
		const addressfvN8Vb = accounts[2]
		const addressqnNqh2 = accounts[2]
		await ETFXPoolyHNav4M.nonReentrant.call({from: accounts[4]});
		const uint256Z79k1iH = await ETFXPoolyHNav4M.totalSupply.call({from: accounts[0]});
		const booldlc4Aw = await ETFXPoolyHNav4M.transfer.call(addressfvN8Vb, uintRhR2YtC, {from: accounts[2]});
		const addressWpFfEL4 = await ETFXPoolyHNav4M.transferOwnership.call(addressqnNqh2, {from: accounts[1]});

		await expect(ETFXPoolyHNav4M.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		const stringqz1LwzK = await ETFXPoolT5squ20.name.call({from: accounts[0]});
		await ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]});
		await ETFXPoolT5squ20.exit.call({from: accounts[3]});

		assert.equal(stringqz1LwzK, "ETFX-FARM")
		assert.equal(uint256b9pBAQ9, BigInt("0"))
		await expect(ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDYOTUHa = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjtReH6 = BigInt("917")
		const uinttYT9K1L = BigInt("1348")
		const addressDdRlOx = accounts[0]
		const addressNYGYMkM = accounts[2]
		const uintGKlepNV = BigInt("206")
		const addressAyBKycA = accounts[3]
		const uint256eNUJ6Y8 = await ETFXPoolDYOTUHa.withdraw.call(uintjtReH6, {from: accounts[3]});
		const uint256NnxyAug = await ETFXPoolDYOTUHa.stake.call(uinttYT9K1L, {from: accounts[2]});
		const uint256XUy4KWf = await ETFXPoolDYOTUHa.allowance.call(addressNYGYMkM, addressDdRlOx, {from: accounts[2]});
		const boolrstypIS = await ETFXPoolDYOTUHa.decreaseAllowance.call(addressAyBKycA, uintGKlepNV, {from: accounts[3]});
		const uint8huzxS5 = await ETFXPoolDYOTUHa.decimals.call({from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolClJa0p4 = await ETFXPool.new({from: accounts[4]});
		const uintSH5uOY = BigInt("1004")
		await ETFXPoolClJa0p4.renounceOwnership.call({from: accounts[3]});
		await ETFXPoolClJa0p4.renounceOwnership.call({from: accounts[1]});
		const uint256PDiFsfg = await ETFXPoolClJa0p4.withdraw.call(uintSH5uOY, {from: accounts[2]});
		const uint8AMPUYKR = await ETFXPoolClJa0p4.decimals.call({from: accounts[1]});

		await expect(ETFXPoolClJa0p4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolHcu5uqa = await ETFXPool.new({from: accounts[4]});
		const uintlrottNw = BigInt("1122")
		const addresscO05IXt = accounts[0]
		const uintxG55qQP = BigInt("754")
		const addressy8hbewY = accounts[4]
		const boolSbYIVG = await ETFXPoolHcu5uqa.decreaseAllowance.call(addresscO05IXt, uintlrottNw, {from: "0x0000000000000000000000000000000000000001"});
		const boolzITU6Ph = await ETFXPoolHcu5uqa.transfer.call(addressy8hbewY, uintxG55qQP, {from: accounts[2]});
		const stringG8955sD = await ETFXPoolHcu5uqa.symbol.call({from: accounts[4]});
		const uint8mHWQLy = await ETFXPoolHcu5uqa.decimals.call({from: accounts[2]});

		await expect(ETFXPoolHcu5uqa.decreaseAllowance.call(addresscO05IXt, uintlrottNw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldlOd0j4 = await ETFXPool.new({from: accounts[4]});
		const uintP6GTWZK = BigInt("102")
		const addressvtSunkz = accounts[0]
		const uintOjsyUKr = BigInt("262")
		const uintkHBM8wP = BigInt("2031")
		const addressW4E963 = accounts[3]
		const boolbDG9HDS = await ETFXPooldlOd0j4.approve.call(addressvtSunkz, uintP6GTWZK, {from: accounts[4]});
		const uint256nUQEBtg = await ETFXPooldlOd0j4.withdraw.call(uintOjsyUKr, {from: accounts[0]});
		await ETFXPooldlOd0j4.onlyOwner.call({from: accounts[4]});
		const boolvOgqHlM = await ETFXPooldlOd0j4.increaseAllowance.call(addressW4E963, uintkHBM8wP, {from: accounts[5]});

		assert.equal(boolbDG9HDS, true)
		await expect(ETFXPooldlOd0j4.withdraw.call(uintOjsyUKr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolm8VXFOt = await ETFXPool.new({from: accounts[1]});
		const uintBOQH6GY = BigInt("1418")
		const addressSt2ZPC = accounts[3]
		const uintCGeNH2m = BigInt("1677")
		const addressBTAzAdu = accounts[3]
		const uintW3Ni27 = BigInt("1392")
		const addressKOiMDAC = accounts[2]
		const boolA0wzd6i = await ETFXPoolm8VXFOt.transfer.call(addressSt2ZPC, uintBOQH6GY, {from: accounts[3]});
		const booltJVHxIf = await ETFXPoolm8VXFOt.transfer.call(addressBTAzAdu, uintCGeNH2m, {from: accounts[5]});
		const boolyejQ2TM = await ETFXPoolm8VXFOt.decreaseAllowance.call(addressKOiMDAC, uintW3Ni27, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XnAHrOC = await ETFXPoolm8VXFOt.totalSupply.call({from: accounts[0]});

		await expect(ETFXPoolm8VXFOt.transfer.call(addressSt2ZPC, uintBOQH6GY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldlOd0j4 = await ETFXPool.new({from: accounts[4]});
		const uintkLa6OV = BigInt("2031")
		const addressfbckSGb = accounts[3]
		const boolvOgqHlM = await ETFXPooldlOd0j4.increaseAllowance.call(addressfbckSGb, uintkLa6OV, {from: accounts[5]});

		assert.equal(boolvOgqHlM, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const uintItuwcXE = BigInt("795")
		const addressSNFJHoH = accounts[3]
		const addressMwVEiRw = accounts[0]
		const boolA3PAoyP = await ETFXPoolT5squ20.transferFrom.call(addressMwVEiRw, addressSNFJHoH, uintItuwcXE, {from: accounts[0]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		const stringqz1LwzK = await ETFXPoolT5squ20.name.call({from: accounts[0]});
		await ETFXPoolT5squ20.exit.call({from: accounts[3]});

		await expect(ETFXPoolT5squ20.transferFrom.call(addressMwVEiRw, addressSNFJHoH, uintItuwcXE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		const uint8L9nNcVQ = await ETFXPoolT5squ20.decimals.call({from: accounts[0]});
		const uint256NanDLr = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[5]});
		const stringqz1LwzK = await ETFXPoolT5squ20.name.call({from: accounts[0]});
		await ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]});

		assert.equal(stringqz1LwzK, "ETFX-FARM")
		assert.equal(uint256NanDLr, BigInt("0"))
		assert.equal(uint256b9pBAQ9, BigInt("0"))
		assert.equal(uint8L9nNcVQ, BigInt("8"))
		await expect(ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const uint8C3JGG5n = await ETFXPoolT5squ20.decimals.call({from: accounts[2]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		const stringof5qBVt = await ETFXPoolT5squ20.symbol.call({from: accounts[2]});
		const stringqz1LwzK = await ETFXPoolT5squ20.name.call({from: accounts[0]});
		await ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]});

		assert.equal(stringof5qBVt, "FETFX")
		assert.equal(stringqz1LwzK, "ETFX-FARM")
		assert.equal(uint256b9pBAQ9, BigInt("0"))
		assert.equal(uint8C3JGG5n, BigInt("8"))
		await expect(ETFXPoolT5squ20.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const address6dQI5R = await ETFXPoolT5squ20.owner.call({from: accounts[2]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});

		assert.equal(address6dQI5R, 0xbAC2b5779a23f3603dFd647767bC04Ac9d3B5640)
		assert.equal(uint256b9pBAQ9, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		await ETFXPoolT5squ20.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256b9pBAQ9, BigInt("0"))
		await expect(ETFXPoolT5squ20.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolT5squ20 = await ETFXPool.new({from: accounts[1]});
		const addressLthBYVt = accounts[4]
		const uint256b9pBAQ9 = await ETFXPoolT5squ20.rewardPerToken.call({from: accounts[4]});
		const addressJAmUH30 = await ETFXPoolT5squ20.owner.call({from: accounts[0]});
		const addressR08oTSy = await ETFXPoolT5squ20.transferOwnership.call(addressLthBYVt, {from: accounts[1]});

		assert.equal(addressJAmUH30, 0xbAC2b5779a23f3603dFd647767bC04Ac9d3B5640)
		assert.equal(uint256b9pBAQ9, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldlOd0j4 = await ETFXPool.new({from: accounts[4]});
		const addresspWedR2A = accounts[3]
		const addressCnLe1Kv = accounts[4]
		const uintarSDQPb = BigInt("2031")
		const addressJHCSyQW = accounts[3]
		const uint256IuaZTz7 = await ETFXPooldlOd0j4.totalSupply.call({from: accounts[1]});
		const uint256h4loOwY = await ETFXPooldlOd0j4.totalSupply.call({from: accounts[3]});
		const uint256OzzowU = await ETFXPooldlOd0j4.allowance.call(addressCnLe1Kv, addresspWedR2A, {from: accounts[4]});
		const boolvOgqHlM = await ETFXPooldlOd0j4.increaseAllowance.call(addressJHCSyQW, uintarSDQPb, {from: accounts[5]});

		assert.equal(boolvOgqHlM, true)
		assert.equal(uint256IuaZTz7, BigInt("0"))
		assert.equal(uint256OzzowU, BigInt("0"))
		assert.equal(uint256h4loOwY, BigInt("0"))
	});
})