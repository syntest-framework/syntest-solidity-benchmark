const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addresszFu6SOJ = accounts[4]
		const addressVc2LlLi = accounts[3]
		const addressXQKqgVh = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addresszFu6SOJ, addressVc2LlLi, addressXQKqgVh, {from: accounts[1]});
		const addressqJAyNQm = accounts[4]
//		const addresstk9lz5 = await BACMARSLPTOKENPoolRlQbUXs.updateReward.call(addressqJAyNQm, {from: accounts[0]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolRlQbUXs.updateReward.call(addressqJAyNQm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwiCGo5 = "HsGmqQgt8Wo5ODSHAZjgv7P2IMhSQDZHt705bgT2c9Y56TVNTXcubkoXBy1O849EsS2EwJLUyplSW8UPxOq63gN6SO14rYK"
		const stringoqA0Lyv = "qrYCDhtMlDsa4PyAAubZVKg"
		const uintD0QPka = BigInt("198")
		const BACMARSLPTOKENPooltudYXVP = await BACMARSLPTOKENPool.new(stringwiCGo5, stringoqA0Lyv, uintD0QPka, {from: accounts[4]});
		const addresst1e5p9G = accounts[4]
		const addresskxiKlyr = accounts[5]
		const uint256zxQFZen = await BACMARSLPTOKENPooltudYXVP.earned.call(addresst1e5p9G, {from: accounts[1]});
		const uint256NBoiuiE = await BACMARSLPTOKENPooltudYXVP.rewardPerToken.call({from: accounts[2]});
		const uint256iu404Nv = await BACMARSLPTOKENPooltudYXVP.balanceOf.call(addresskxiKlyr, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressN9QshYx = accounts[4]
		const addressegx299B = accounts[0]
		const addressfWRr3HM = accounts[1]
		const BACMARSLPTOKENPoolRtYzUnq = await BACMARSLPTOKENPool.new(addressN9QshYx, addressegx299B, addressfWRr3HM, {from: "0x0000000000000000000000000000000000000001"});
		const uintYw1i6dN = BigInt("926")
		const uint256WKc8kId = await BACMARSLPTOKENPoolRtYzUnq.notifyRewardAmount.call(uintYw1i6dN, {from: accounts[0]});
		await BACMARSLPTOKENPoolRtYzUnq.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolRtYzUnq.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE2Lcxq = "3QWwjiIbBfr1nxt7r00ha6vp7yc6wOdgcu2XxKyjIJsfgHA7qczQmqzGpFrMHpQ42ap"
		const stringHifsUws = "2XiiBHZbTnDRKA6FsG"
		const uintJM7Zto = BigInt("9")
		const BACMARSLPTOKENPooliNrf9Gz = await BACMARSLPTOKENPool.new(stringE2Lcxq, stringHifsUws, uintJM7Zto, {from: "0x0000000000000000000000000000000000000001"});
		const addressfMMQeT5 = accounts[5]
		const uintqfvQsOM = BigInt("656")
		const addressoBHrS5V = "0x0000000000000000000000000000000000000001"
		const addressPKUmH0z = accounts[0]
		const uint256n0m27t = await BACMARSLPTOKENPooliNrf9Gz.earned.call(addressfMMQeT5, {from: accounts[2]});
		const uint256UbOBSMU = await BACMARSLPTOKENPooliNrf9Gz.withdraw.call(uintqfvQsOM, {from: accounts[3]});
		const addressphQz8sC = await BACMARSLPTOKENPooliNrf9Gz.updateReward.call(addressoBHrS5V, {from: accounts[3]});
		await BACMARSLPTOKENPooliNrf9Gz.exit.call({from: accounts[2]});
		const uint256X6pK9Nd = await BACMARSLPTOKENPooliNrf9Gz.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256harI4KN = await BACMARSLPTOKENPooliNrf9Gz.earned.call(addressPKUmH0z, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIjuLEca = "yjusaTZW2XyWLlioarHalnbfT1tKmR1gUJrLKZW0lysgTHSdsSbiHwnRpMcoMKyWTABgHBkR6dl9auYHaxYXz2fLafMlLmpna"
		const stringQys6uu = "EerqMe5q1TXoqtgn6PrCxqB9vpgKxEEs6IKTDQz3wRVplFGJyX66i"
		const uintlAGYla5 = BigInt("162")
		const BACMARSLPTOKENPoolU6mCzSo = await BACMARSLPTOKENPool.new(stringIjuLEca, stringQys6uu, uintlAGYla5, {from: accounts[1]});
		const uintLyPqQu9 = BigInt("1265")
		const uintdQWDVW4 = BigInt("1392")
		const uintLnjWYtt = BigInt("51")
		const uint256SqDStH = await BACMARSLPTOKENPoolU6mCzSo.totalSupply.call({from: accounts[1]});
		const uint256Bk7CZ7D = await BACMARSLPTOKENPoolU6mCzSo.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256IN36WAw = await BACMARSLPTOKENPoolU6mCzSo.notifyRewardAmount.call(uintLyPqQu9, {from: accounts[3]});
		const uint256BLBEva5 = await BACMARSLPTOKENPoolU6mCzSo.withdraw.call(uintdQWDVW4, {from: accounts[0]});
		const uint256bn8DRFm = await BACMARSLPTOKENPoolU6mCzSo.stake.call(uintLnjWYtt, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI5gFMEN = "cJF4fTEyDVXUhEl73aVh9Zy6EesjrWKATeHDxmNRKeMjKPihiLJuqyWnNL4mSg2zkqInXsRB9vrHg"
		const stringBsezm1P = "RoKPLIE3XU86nUn08Q"
		const uintBqIWzHv = BigInt("13")
		const BACMARSLPTOKENPoolk36oJjU = await BACMARSLPTOKENPool.new(stringI5gFMEN, stringBsezm1P, uintBqIWzHv, {from: accounts[2]});
		const uintYObGe1u = BigInt("100")
		const addressoW9SYy1 = accounts[2]
		const addressWY1N1C = accounts[3]
		const addressXXyq6sG = accounts[1]
		const uint256W8OVbYt = await BACMARSLPTOKENPoolk36oJjU.withdraw.call(uintYObGe1u, {from: accounts[1]});
		const addresso8AdiHv = await BACMARSLPTOKENPoolk36oJjU.updateReward.call(addressoW9SYy1, {from: accounts[4]});
		const uint256lNWmKLB = await BACMARSLPTOKENPoolk36oJjU.balanceOf.call(addressWY1N1C, {from: accounts[4]});
		const uint8YuoldlJ = await BACMARSLPTOKENPoolk36oJjU.decimals.call({from: accounts[4]});
		const uint256GVha5Lc = await BACMARSLPTOKENPoolk36oJjU.balanceOf.call(addressXXyq6sG, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVNrZWih = "2bT4jtQppM1huDACDF4bHJrX7yhVHqcbhfmLEz5H4fAhbfnxWsOCmNahOQWTqKV"
		const stringzBRSjs = "4X9qPyTMkvfDIGMXYGtQfv2VGgaNKDGJQ17kwsd8nWIF9Sf"
		const uintBjVS2TX = BigInt("105")
		const BACMARSLPTOKENPoolwoUxz6b = await BACMARSLPTOKENPool.new(stringVNrZWih, stringzBRSjs, uintBjVS2TX, {from: accounts[0]});
		const uint256oMOLvyR = await BACMARSLPTOKENPoolwoUxz6b.getRewardForDuration.call({from: accounts[1]});
		const uint8WirUvYz = await BACMARSLPTOKENPoolwoUxz6b.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolwoUxz6b.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolwoUxz6b.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv8ob9rj = "DvsemXm6Xz4FY6asgyuk65VSJyKem9X"
		const stringdVJCONb = "rMnU1aT1gzuMTSSFTCEFazRgyPawDrRoq4CTMp575W7Bhljwt9jVhm1KjWYW6z4SFMj8mBPkuaOBU3t457h4c80Edr4bQQ776"
		const uintfrma8t5 = BigInt("29")
		const BACMARSLPTOKENPoolD7WeGIi = await BACMARSLPTOKENPool.new(stringv8ob9rj, stringdVJCONb, uintfrma8t5, {from: accounts[4]});
		const uintGkXSmYX = BigInt("522")
		const uinttOzFoA = BigInt("1540")
		const uintE1np8j = BigInt("496")
		const addressSaCZmnP = accounts[0]
		const uint256C4esz8 = await BACMARSLPTOKENPoolD7WeGIi.withdraw.call(uintGkXSmYX, {from: accounts[0]});
		const uint256ycFZv2y = await BACMARSLPTOKENPoolD7WeGIi.totalSupply.call({from: accounts[2]});
		const uint256kOAThl2 = await BACMARSLPTOKENPoolD7WeGIi.notifyRewardAmount.call(uinttOzFoA, {from: accounts[2]});
		const uint256Bvin8n5 = await BACMARSLPTOKENPoolD7WeGIi.stake.call(uintE1np8j, {from: accounts[0]});
		const uint256aNCRc2p = await BACMARSLPTOKENPoolD7WeGIi.balanceOf.call(addressSaCZmnP, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaDrNLQN = "c9sGctNoYplNqdKNtZKv7MyxGYAoeLhIj4AikfhsGW6D115YQ0KWA2i2mnD2HwA8OhUc0pQexEWQ4oxO4v4DYQj5fnlGusH"
		const stringzgOl38A = "lCE1stc4ahaoN5M"
		const uintdX6AG3I = BigInt("247")
		const BACMARSLPTOKENPoolBA6345w = await BACMARSLPTOKENPool.new(stringaDrNLQN, stringzgOl38A, uintdX6AG3I, {from: accounts[2]});
		const addressiLj247M = accounts[3]
		const bytezgeNDF = "0x041c161a0c17181a140b0e0415141f1a0d0306060f051b070901090f13040d15"
		const bytepiGTjzU = "0x1d0d09080f151717171a1a0a1c0f150c0e081c0b0b01191d1b181a02180e1b18"
		const uintUBXDdea = BigInt("227")
		const uintGKLtyLC = BigInt("1968")
		const uintj8sSpAQ = BigInt("1390")
		const uint256KzlLfU6 = await BACMARSLPTOKENPoolBA6345w.balanceOf.call(addressiLj247M, {from: "0x0000000000000000000000000000000000000001"});
		const uint8PbSryS = await BACMARSLPTOKENPoolBA6345w.decimals.call({from: accounts[3]});
		const uint256FY03aKa = await BACMARSLPTOKENPoolBA6345w.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolBA6345w.exit.call({from: accounts[4]});
		const uint256eZ63dcP = await BACMARSLPTOKENPoolBA6345w.stakeWithPermit.call(uintj8sSpAQ, uintGKLtyLC, uintUBXDdea, bytepiGTjzU, bytezgeNDF, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressIYXk4Ek = accounts[4]
		const addressGJVoL9j = accounts[3]
		const addressMifSA7c = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressIYXk4Ek, addressGJVoL9j, addressMifSA7c, {from: accounts[1]});
		const addressWYv2b5B = accounts[1]
		const addressJrF9FLW = accounts[4]
//		await BACMARSLPTOKENPoolRlQbUXs.exit.call({from: accounts[4]});
//		const uint256FxCx0ts = await BACMARSLPTOKENPoolRlQbUXs.earned.call(addressWYv2b5B, {from: accounts[2]});
//		const addresstk9lz5 = await BACMARSLPTOKENPoolRlQbUXs.updateReward.call(addressJrF9FLW, {from: accounts[0]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolRlQbUXs.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswgBun8X = accounts[4]
		const addressflgwJFW = accounts[3]
		const addressjCKt5WE = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addresswgBun8X, addressflgwJFW, addressjCKt5WE, {from: accounts[1]});
		const addresscUiqqFs = accounts[5]
		const addressG7go51k = accounts[2]
		const uint256bC2WAJo = await BACMARSLPTOKENPoolRlQbUXs.totalSupply.call({from: accounts[0]});
//		const addresstk9lz5 = await BACMARSLPTOKENPoolRlQbUXs.updateReward.call(addresscUiqqFs, {from: accounts[0]});
//		const uint256PF3m5w1 = await BACMARSLPTOKENPoolRlQbUXs.balanceOf.call(addressG7go51k, {from: accounts[0]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		assert.equal(uint256bC2WAJo, BigInt("0"))
		await expect(BACMARSLPTOKENPoolRlQbUXs.updateReward.call(addresscUiqqFs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvDxTjez = accounts[4]
		const addressecJXOa = accounts[3]
		const addressJmMakP = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressvDxTjez, addressecJXOa, addressJmMakP, {from: accounts[1]});
		const uintI9LmVKr = BigInt("1331")
//		const uint256RM6JFL = await BACMARSLPTOKENPoolRlQbUXs.stake.call(uintI9LmVKr, {from: accounts[4]});
//		await BACMARSLPTOKENPoolRlQbUXs.nonReentrant.call({from: accounts[2]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolRlQbUXs.stake.call(uintI9LmVKr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressbIOS6b = accounts[4]
		const addresshbv6RM = accounts[3]
		const addressCeKEiH7 = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressbIOS6b, addresshbv6RM, addressCeKEiH7, {from: accounts[1]});
		const addressFYoUAA = "0x0000000000000000000000000000000000000001"
		const uint256dlRmWU = await BACMARSLPTOKENPoolRlQbUXs.balanceOf.call(addressFYoUAA, {from: accounts[4]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		assert.equal(uint256dlRmWU, BigInt("0"))
		await expect(BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLI07qRl = "VJcJHz2Ij5VETYRo9PwJnZlkekJajnvnw7TFrn6Yn"
		const stringi9G1RGe = "uNaz5F93gCV9tLKnOPSDwLuhQiW35SXMGRMLlzHGASaPyjnmCM"
		const uintqj0WSU6 = BigInt("56")
		const BACMARSLPTOKENPoolK6eha5E = await BACMARSLPTOKENPool.new(stringLI07qRl, stringi9G1RGe, uintqj0WSU6, {from: accounts[2]});
		const bytegTk2yW4 = "0x090e180f1814061f0900201718031214010d0e0f0b16161a1a061f1808141f14"
		const byteCF00WFY = "0x0b10140e001113150913000b1d0004080108081e1f04131c0a0a0d1918101e08"
		const uintucgpEGs = BigInt("227")
		const uintUwwLlOw = BigInt("1025")
		const uintYEI6zv = BigInt("734")
		const uint256D3exndK = await BACMARSLPTOKENPoolK6eha5E.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wRAfYca = await BACMARSLPTOKENPoolK6eha5E.stakeWithPermit.call(uintYEI6zv, uintUwwLlOw, uintucgpEGs, byteCF00WFY, bytegTk2yW4, {from: accounts[1]});
		const uint256KEgxdOE = await BACMARSLPTOKENPoolK6eha5E.getRewardForDuration.call({from: accounts[1]});
		const uint256e6eF5Qw = await BACMARSLPTOKENPoolK6eha5E.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressi9cUdaf = accounts[4]
		const addressumMkWIO = accounts[3]
		const addressODREwaJ = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressi9cUdaf, addressumMkWIO, addressODREwaJ, {from: accounts[1]});
//		await BACMARSLPTOKENPoolRlQbUXs.getReward.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolRlQbUXs.nonReentrant.call({from: accounts[2]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolRlQbUXs.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJWxdOt6 = accounts[0]
		const addressnHACrT4 = accounts[3]
		const addresstjh2QB4 = accounts[2]
		const BACMARSLPTOKENPoolscaBJWo = await BACMARSLPTOKENPool.new(addressJWxdOt6, addressnHACrT4, addresstjh2QB4, {from: accounts[1]});
		const uintHai3Xz = BigInt("1989")
		const uintUJklsII = BigInt("1211")
		const addresskMjUmRj = accounts[1]
//		const uint256f7g88ru = await BACMARSLPTOKENPoolscaBJWo.notifyRewardAmount.call(uintHai3Xz, {from: accounts[3]});
//		const stringG6jGeT = await BACMARSLPTOKENPoolscaBJWo.symbol.call({from: accounts[2]});
//		const uint256pJcjOpo = await BACMARSLPTOKENPoolscaBJWo.withdraw.call(uintUJklsII, {from: accounts[2]});
//		const addressOPx5RCa = await BACMARSLPTOKENPoolscaBJWo.updateReward.call(addresskMjUmRj, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolscaBJWo.notifyRewardAmount.call(uintHai3Xz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxBiZWvI = accounts[1]
		const addresscpvajI4 = accounts[3]
		const addressoIz4rZP = accounts[0]
		const BACMARSLPTOKENPoolSatTP4p = await BACMARSLPTOKENPool.new(addressxBiZWvI, addresscpvajI4, addressoIz4rZP, {from: accounts[4]});
		const addressgfDquW5 = accounts[3]
		const uint256a1lWCCm = await BACMARSLPTOKENPoolSatTP4p.getRewardForDuration.call({from: accounts[4]});
//		const stringOwsusd5 = await BACMARSLPTOKENPoolSatTP4p.name.call({from: accounts[5]});
//		const uint256uOKaNgE = await BACMARSLPTOKENPoolSatTP4p.balanceOf.call(addressgfDquW5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8N3fJXOM = await BACMARSLPTOKENPoolSatTP4p.decimals.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolSatTP4p.nonReentrant.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolSatTP4p.getReward.call({from: accounts[3]});

		assert.equal(uint256a1lWCCm, BigInt("0"))
		await expect(BACMARSLPTOKENPoolSatTP4p.name.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxxX0V5q = accounts[4]
		const addresswAwgv3 = accounts[3]
		const addressqolbGyO = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressxxX0V5q, addresswAwgv3, addressqolbGyO, {from: accounts[1]});
		const uintRZfGWyw = BigInt("880")
//		const uint256tqmtpuO = await BACMARSLPTOKENPoolRlQbUXs.withdraw.call(uintRZfGWyw, {from: accounts[4]});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolRlQbUXs.nonReentrant.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolRlQbUXs.withdraw.call(uintRZfGWyw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKdby8Tr = "0x0000000000000000000000000000000000000001"
		const addressPgvuPNw = accounts[3]
		const addressl9OSgmp = accounts[3]
		const BACMARSLPTOKENPoolrhD8FKY = await BACMARSLPTOKENPool.new(addressKdby8Tr, addressPgvuPNw, addressl9OSgmp, {from: accounts[0]});
		const uintsSwekXP = BigInt("1507")
		const uintfS74ayF = BigInt("507")
//		const uint256M678Ey5 = await BACMARSLPTOKENPoolrhD8FKY.notifyRewardAmount.call(uintsSwekXP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aizeQ6z = await BACMARSLPTOKENPoolrhD8FKY.totalSupply.call({from: accounts[0]});
//		const uint256iRNd831 = await BACMARSLPTOKENPoolrhD8FKY.rewardPerToken.call({from: accounts[1]});
//		const uint8IojIr1B = await BACMARSLPTOKENPoolrhD8FKY.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256DI4N3bZ = await BACMARSLPTOKENPoolrhD8FKY.stake.call(uintfS74ayF, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolrhD8FKY.notifyRewardAmount.call(uintsSwekXP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxczM4Sn = accounts[4]
		const addressexh29s6 = accounts[3]
		const addressRhFrFQA = accounts[1]
		const BACMARSLPTOKENPoolRlQbUXs = await BACMARSLPTOKENPool.new(addressxczM4Sn, addressexh29s6, addressRhFrFQA, {from: accounts[1]});
		const byte5VXHPE = "0x19140306061b0b190c1d0317141d0815040d060a0f0c0d08130b18090a1a0d1b"
		const byteq3hj2JK = "0x0f1b1f031f161e031205041305150c19041a1a1f1b18110c1010161e12181d18"
		const uintxQVLjRv = BigInt("50")
		const uintJYUufyn = BigInt("713")
		const uintjKXVzQu = BigInt("234")
		const uint256J0O8Rqo = await BACMARSLPTOKENPoolRlQbUXs.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256v843xYF = await BACMARSLPTOKENPoolRlQbUXs.stakeWithPermit.call(uintjKXVzQu, uintJYUufyn, uintxQVLjRv, byteq3hj2JK, byte5VXHPE, {from: "0x0000000000000000000000000000000000000001"});
//		const stringbj2IWb = await BACMARSLPTOKENPoolRlQbUXs.name.call({from: accounts[2]});

		assert.equal(uint256J0O8Rqo, BigInt("0"))
		await expect(BACMARSLPTOKENPoolRlQbUXs.stakeWithPermit.call(uintjKXVzQu, uintJYUufyn, uintxQVLjRv, byteq3hj2JK, byte5VXHPE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpzIyheg = "ohcH7oFbdITEs6BFlBlqf3jG9BfGnioYw62DTvcHRBtQbEEE6ps2EWcreVHybh"
		const stringAqTtUMR = "39OLDpeTVOHhoTVN8ZQeWHSYq68SWsWd7agunRWT8eyEjaSbMeRDIeQ9TBlULwXVe1KzwgbG9rccBYxzN3XqJ"
		const uintE7J2XZB = BigInt("232")
		const BACMARSLPTOKENPoolzLna2jQ = await BACMARSLPTOKENPool.new(stringpzIyheg, stringAqTtUMR, uintE7J2XZB, {from: accounts[4]});
		const uint256YklXkGS = await BACMARSLPTOKENPoolzLna2jQ.totalSupply.call({from: accounts[0]});
		const uint256b106N5 = await BACMARSLPTOKENPoolzLna2jQ.getRewardForDuration.call({from: accounts[1]});
		const uint256WlhUFrH = await BACMARSLPTOKENPoolzLna2jQ.totalSupply.call({from: accounts[1]});
		const uint256TZoLwJv = await BACMARSLPTOKENPoolzLna2jQ.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolzLna2jQ.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXB1mdLM = "u7l"
		const stringi6EH2ow = "BG1H3bUt8dD4puOJBExo1WLjMqnWxaNF9Xgp17kgZqL6Fr6C7UiDF"
		const uinteGF18vw = BigInt("118")
		const BACMARSLPTOKENPoolf62fGP0 = await BACMARSLPTOKENPool.new(stringXB1mdLM, stringi6EH2ow, uinteGF18vw, {from: accounts[2]});
		const uintEVyX6aN = BigInt("35")
		const addressZad73Cm = accounts[1]
		const uint256KojfJ05 = await BACMARSLPTOKENPoolf62fGP0.notifyRewardAmount.call(uintEVyX6aN, {from: accounts[0]});
		const stringy1F5pph = await BACMARSLPTOKENPoolf62fGP0.symbol.call({from: accounts[3]});
		const uint256qANuHLL = await BACMARSLPTOKENPoolf62fGP0.balanceOf.call(addressZad73Cm, {from: accounts[2]});
		const stringyWoivGL = await BACMARSLPTOKENPoolf62fGP0.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringj1nGOwU = "KtdywSHTKc27EvrFwTJk"
		const stringJYPV3iN = "QqTw4xwD8HXi"
		const uintIMNBAa5 = BigInt("105")
		const BACMARSLPTOKENPoolqEDnjoH = await BACMARSLPTOKENPool.new(stringj1nGOwU, stringJYPV3iN, uintIMNBAa5, {from: accounts[0]});
		const uinte28xZDL = BigInt("1212")
		const uint256kQRJQmf = await BACMARSLPTOKENPoolqEDnjoH.getRewardForDuration.call({from: accounts[4]});
		const uint256W4SOYbM = await BACMARSLPTOKENPoolqEDnjoH.stake.call(uinte28xZDL, {from: accounts[2]});
		const stringrRfkaqV = await BACMARSLPTOKENPoolqEDnjoH.name.call({from: accounts[2]});
		await BACMARSLPTOKENPoolqEDnjoH.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256qm1xF2J = await BACMARSLPTOKENPoolqEDnjoH.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoisgPnA = "3mxvkj9fs"
		const stringzlomPzq = "g"
		const uintZqtGmN = BigInt("117")
		const BACMARSLPTOKENPoolh5clQ34 = await BACMARSLPTOKENPool.new(stringoisgPnA, stringzlomPzq, uintZqtGmN, {from: accounts[0]});
		const uintAqylH9i = BigInt("548")
		const addressClDJy6 = accounts[2]
		const byteuYXfcuV = "0x0101090c101517180206011a18081f030414121f17171c180f0a1c0819110a07"
		const byteaCYusuh = "0x10030c1801070102091f040d101e010e0418160b1213011d061f1412110c0e09"
		const uintIWfa4ca = BigInt("37")
		const uintZnbU4DB = BigInt("2003")
		const uintGb5bVQG = BigInt("128")
		const uint256Zajkn6 = await BACMARSLPTOKENPoolh5clQ34.notifyRewardAmount.call(uintAqylH9i, {from: accounts[1]});
		await BACMARSLPTOKENPoolh5clQ34.nonReentrant.call({from: accounts[0]});
		const uint256Q1MzR7Q = await BACMARSLPTOKENPoolh5clQ34.totalSupply.call({from: accounts[1]});
		const addressN8Ta4eg = await BACMARSLPTOKENPoolh5clQ34.updateReward.call(addressClDJy6, {from: accounts[4]});
		const uint256da4NMHb = await BACMARSLPTOKENPoolh5clQ34.stakeWithPermit.call(uintGb5bVQG, uintZnbU4DB, uintIWfa4ca, byteaCYusuh, byteuYXfcuV, {from: accounts[0]});
		const stringPdPd6t6 = await BACMARSLPTOKENPoolh5clQ34.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCF9Ld2T = "QesDxcfrYSvpPETB8LiVvk8KmiShiFITKVhLVBl8dypMd0YTwTvrVwMHm1QEUxX7IVI1XKyeiDvnOlvP"
		const stringhW2bXGk = "SsqIbEOjSEwcHfixNMMlOTH1SCkAme6O1dTHDE2ffew14WfxSBzKi3785A7HrA6sMVfo"
		const uintHLfXkJO = BigInt("2")
		const BACMARSLPTOKENPoolWwnegVA = await BACMARSLPTOKENPool.new(stringCF9Ld2T, stringhW2bXGk, uintHLfXkJO, {from: accounts[4]});
		const uintWVblfEL = BigInt("364")
		const uint256uAgNq2Z = await BACMARSLPTOKENPoolWwnegVA.rewardPerToken.call({from: accounts[2]});
		const uint256UlqIH0F = await BACMARSLPTOKENPoolWwnegVA.stake.call(uintWVblfEL, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqxwJgo9 = "eG2ormwHT6JECBilwD7CzjhFFjj8arNyH8xIDap55ud7nhAvZVznE6QNkRjw1raBryrBJwECP2TTCfxiySMc6NssqRIsrc9"
		const stringu6DjHp8 = "NWKR294cYamDMIITtdU2Fwail9qHSLURu57eLeRfaPiIsWAqQlOVhGbKT3NwNv9JOcM"
		const uintZVu4aT = BigInt("91")
		const BACMARSLPTOKENPoolgLd2DJB = await BACMARSLPTOKENPool.new(stringqxwJgo9, stringu6DjHp8, uintZVu4aT, {from: accounts[2]});
		const addressjSw4z7F = accounts[0]
		const stringTsWQFcC = await BACMARSLPTOKENPoolgLd2DJB.symbol.call({from: accounts[2]});
		const addresstuhMqKq = await BACMARSLPTOKENPoolgLd2DJB.updateReward.call(addressjSw4z7F, {from: accounts[3]});
		await BACMARSLPTOKENPoolgLd2DJB.getReward.call({from: accounts[4]});
		const uint256dMFmVAB = await BACMARSLPTOKENPoolgLd2DJB.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgqJ7Sbi = "yU1AVx91u4o"
		const stringhFScf8 = "D7YVz8IxIho7PcOPaAPLoH"
		const uintnRZZdMK = BigInt("198")
		const BACMARSLPTOKENPoolT4lafDi = await BACMARSLPTOKENPool.new(stringgqJ7Sbi, stringhFScf8, uintnRZZdMK, {from: accounts[4]});
		const uintoEaB03y = BigInt("1376")
		const addressWMvLl0j = accounts[0]
		const uint256wuxqQ4Y = await BACMARSLPTOKENPoolT4lafDi.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LFmykPm = await BACMARSLPTOKENPoolT4lafDi.getRewardForDuration.call({from: accounts[3]});
		const strings5wH03z = await BACMARSLPTOKENPoolT4lafDi.symbol.call({from: accounts[3]});
		const uint256BtDd0GY = await BACMARSLPTOKENPoolT4lafDi.notifyRewardAmount.call(uintoEaB03y, {from: accounts[1]});
		const addressMa63VNU = await BACMARSLPTOKENPoolT4lafDi.updateReward.call(addressWMvLl0j, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwdtwFyG = "PW4fVSdcS4P2AaoKi5xLSV7gyZ4Hwm3uRPy0gWGjPiaFKHXG3dfB1xxbYCHC5nkhAKJbWm7"
		const stringe0EO2pq = "P32XhzDyt1VHdRrXPgA7nN3plaw1I7y7uFSUqF7U6qBKGgwRuVP8unIYOshrlUbMvOgAvc5JhRoKiR0iglzhSTi8"
		const uintk8Qekux = BigInt("45")
		const BACMARSLPTOKENPoolKasXCdJ = await BACMARSLPTOKENPool.new(stringwdtwFyG, stringe0EO2pq, uintk8Qekux, {from: accounts[2]});
		const uintMzMBc8 = BigInt("1807")
		const bytesXav7ui = "0x0712090b04181f1a13101c13201f18190d15111f1319060305101614000c1b15"
		const byteCIMCkn9 = "0x101a07180d16041e020d0e08041405080218030f1e15110d05141b0202190d19"
		const uintExNraGn = BigInt("202")
		const uinthmkN9b = BigInt("1615")
		const uintWajPYqG = BigInt("1284")
		const uinttowIXtz = BigInt("249")
		const uintLedhYyX = BigInt("1286")
		const uint256aZrJrMb = await BACMARSLPTOKENPoolKasXCdJ.withdraw.call(uintMzMBc8, {from: accounts[4]});
		await BACMARSLPTOKENPoolKasXCdJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const stringWa0o560 = await BACMARSLPTOKENPoolKasXCdJ.symbol.call({from: accounts[1]});
		const uint256OESWI4R = await BACMARSLPTOKENPoolKasXCdJ.stakeWithPermit.call(uintWajPYqG, uinthmkN9b, uintExNraGn, byteCIMCkn9, bytesXav7ui, {from: accounts[2]});
		const uint256WbfGyTj = await BACMARSLPTOKENPoolKasXCdJ.stake.call(uinttowIXtz, {from: accounts[1]});
		const uint256mOJm8c = await BACMARSLPTOKENPoolKasXCdJ.notifyRewardAmount.call(uintLedhYyX, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHfunAfC = "f4c6LTEITSUUE8wE"
		const stringbQjvCPt = "OT8AhKV7yPJPqdhUc0CNDStdwv1nVirPqIqiqH9P3RAnRNUoZgAQWLtjfMHTtVN"
		const uintagbO4wG = BigInt("148")
		const BACMARSLPTOKENPoolXaYqVHo = await BACMARSLPTOKENPool.new(stringHfunAfC, stringbQjvCPt, uintagbO4wG, {from: accounts[2]});
		const stringH77ejN = await BACMARSLPTOKENPoolXaYqVHo.name.call({from: accounts[5]});
		await BACMARSLPTOKENPoolXaYqVHo.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolXaYqVHo.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfHz8WRw = "PXQJR99mcmlqWd"
		const stringay3FWgP = "iCbV6AtHytun3TDqT0wRluDlF21u3KwNRwg9vmzERIQQcrAeroaLL3RdepdFnFN6Acy1y0TJIhfnw96ITq6xGbjf"
		const uintFFjWC4z = BigInt("55")
		const BACMARSLPTOKENPoolHy5zu55 = await BACMARSLPTOKENPool.new(stringfHz8WRw, stringay3FWgP, uintFFjWC4z, {from: accounts[5]});
		const uintCMsugjU = BigInt("404")
		const uintFeF6Jnl = BigInt("1966")
		const uint256qIcQrMW = await BACMARSLPTOKENPoolHy5zu55.withdraw.call(uintCMsugjU, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolHy5zu55.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolHy5zu55.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256J14kbsa = await BACMARSLPTOKENPoolHy5zu55.withdraw.call(uintFeF6Jnl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bfv9BIF = await BACMARSLPTOKENPoolHy5zu55.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEYsLj5a = "ILZ7RxBrBvqo2aXfkxpnbcBw2Pgn3EhwYV7VNVCFxBiX1u1Rlf7pLnwKHTgaP7rGYLf5t3DWMvgSO1Yz5vvoPlgDRrKyybEJ"
		const stringnBlP4u1 = "XaCFs3cnB5r2zrfhuWfbD4"
		const uinty9KDUT2 = BigInt("39")
		const BACMARSLPTOKENPoolQFkeFUN = await BACMARSLPTOKENPool.new(stringEYsLj5a, stringnBlP4u1, uinty9KDUT2, {from: accounts[1]});
		const uintQkbmI9L = BigInt("1097")
		const addresszNfXEaJ = accounts[1]
		await BACMARSLPTOKENPoolQFkeFUN.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolQFkeFUN.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const stringnSytt4R = await BACMARSLPTOKENPoolQFkeFUN.name.call({from: accounts[3]});
		const uint256MCzPQZj = await BACMARSLPTOKENPoolQFkeFUN.notifyRewardAmount.call(uintQkbmI9L, {from: accounts[1]});
		const uint256GLMrDpk = await BACMARSLPTOKENPoolQFkeFUN.balanceOf.call(addresszNfXEaJ, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWKCWDUQ = "JvSUUvSTNiuhAG"
		const string4y7THY = "W"
		const uintXciCzD1 = BigInt("28")
		const BACMARSLPTOKENPoolly9W8FW = await BACMARSLPTOKENPool.new(stringWKCWDUQ, string4y7THY, uintXciCzD1, {from: accounts[3]});
		const byteH1IF5sO = "0x02151e06031d070613061e0b031807130d1c0f16090803140a1b071a1d030f0d"
		const byteRlnX3a = "0x07150f0016021906051a0c121619171c07031d0a09101a061c05131802121f04"
		const uintCKor22 = BigInt("37")
		const uintD3XpF9U = BigInt("1912")
		const uintSfBKdO = BigInt("880")
		const uintl2pEcGf = BigInt("61")
		const uintNgdwhta = BigInt("1619")
		const uint256IAk7dCM = await BACMARSLPTOKENPoolly9W8FW.stakeWithPermit.call(uintSfBKdO, uintD3XpF9U, uintCKor22, byteRlnX3a, byteH1IF5sO, {from: accounts[0]});
		const uint256aJ3ouH0 = await BACMARSLPTOKENPoolly9W8FW.stake.call(uintl2pEcGf, {from: accounts[1]});
		await BACMARSLPTOKENPoolly9W8FW.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bQWcn3a = await BACMARSLPTOKENPoolly9W8FW.withdraw.call(uintNgdwhta, {from: accounts[0]});
		const stringzoKYKw = await BACMARSLPTOKENPoolly9W8FW.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVNJcEN = "QcG72lc5Ouoev0JHLucom2kj8vIFxhUonPDuMATLtaSaQyFqTagcI9UpEaW8"
		const stringkfkQvMg = "X4lA2BKbnNSHvNDAwdesKJMXGTEWZ8Zw0qVezPqxpYosfrDiDhDYwGZaBne9N5eDOszNsFQHrl4KvHVvt49kUTfQz5q6"
		const uintE0YMOEg = BigInt("226")
		const BACMARSLPTOKENPoolH9D97Fj = await BACMARSLPTOKENPool.new(stringVNJcEN, stringkfkQvMg, uintE0YMOEg, {from: accounts[1]});
		const uintDIqb6Ep = BigInt("618")
		await BACMARSLPTOKENPoolH9D97Fj.getReward.call({from: accounts[2]});
		const stringCFrm0jJ = await BACMARSLPTOKENPoolH9D97Fj.symbol.call({from: accounts[4]});
		const uint256h7WXkjR = await BACMARSLPTOKENPoolH9D97Fj.notifyRewardAmount.call(uintDIqb6Ep, {from: accounts[2]});
		await BACMARSLPTOKENPoolH9D97Fj.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolH9D97Fj.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringU2JaaWZ = "SwxDT9lfrOVcmuJypOsU5X9AbsDL2VQawwWFYFBqNGXD22k5phwhYAgsK6faeVPY2oCvPE"
		const stringssGPKaR = "DL1dcMP"
		const uintZMtSLla = BigInt("102")
		const BACMARSLPTOKENPoolER330bF = await BACMARSLPTOKENPool.new(stringU2JaaWZ, stringssGPKaR, uintZMtSLla, {from: accounts[3]});
		const uintEp6invr = BigInt("432")
		const addressJTVqdqt = accounts[1]
		const uint256mFXde1L = await BACMARSLPTOKENPoolER330bF.rewardPerToken.call({from: accounts[0]});
		const uint256hMeX88c = await BACMARSLPTOKENPoolER330bF.withdraw.call(uintEp6invr, {from: accounts[3]});
		const addressy0uMoI = await BACMARSLPTOKENPoolER330bF.updateReward.call(addressJTVqdqt, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolER330bF.onlyRewardsDistribution.call({from: accounts[5]});
		const stringuhkra09 = await BACMARSLPTOKENPoolER330bF.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUTEqNLW = "5MI92JRJJ2xzy8h8smMn"
		const stringWAXzAmg = "pMCWw967YVzZaaxGav6jVLXzUgaoP"
		const uintSlq0d5J = BigInt("109")
		const BACMARSLPTOKENPoolge5s7LC = await BACMARSLPTOKENPool.new(stringUTEqNLW, stringWAXzAmg, uintSlq0d5J, {from: accounts[3]});
		const uintgGgBDSF = BigInt("220")
		const uint256jfoXxqZ = await BACMARSLPTOKENPoolge5s7LC.withdraw.call(uintgGgBDSF, {from: accounts[2]});
		await BACMARSLPTOKENPoolge5s7LC.getReward.call({from: accounts[2]});
		const uint256YTZzXus = await BACMARSLPTOKENPoolge5s7LC.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256IgNoLpD = await BACMARSLPTOKENPoolge5s7LC.totalSupply.call({from: accounts[3]});
		const uint256HX6Tevc = await BACMARSLPTOKENPoolge5s7LC.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqBo57K0 = "1YMxZnW4IDwxhPF98PpR67AWlTCrMPiyr6lrMty7iWbiqOh0DzlrjuGlgUfx15OWLMbJTy9IP"
		const stringvq8pnW = "6BH0QaMHy5qkxl6muh6IoVvJJ9WEv8J7tcm9ypybkaxbQJnqHlp5f2ZstRU86pHONYBTAOUKjbR2kwiQyt0g9KuPhNjHN9PGGrI"
		const uintNZXMytR = BigInt("151")
		const BACMARSLPTOKENPoolSu0hotG = await BACMARSLPTOKENPool.new(stringqBo57K0, stringvq8pnW, uintNZXMytR, {from: accounts[3]});
		const uintM7xKs8g = BigInt("42")
		const uint256D3gQmJE = await BACMARSLPTOKENPoolSu0hotG.withdraw.call(uintM7xKs8g, {from: accounts[3]});
		const uint256L9FTk7 = await BACMARSLPTOKENPoolSu0hotG.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolSu0hotG.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8wDyduH = await BACMARSLPTOKENPoolSu0hotG.decimals.call({from: accounts[4]});
		const uint256wkVISyi = await BACMARSLPTOKENPoolSu0hotG.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqjQEKxo = "qYccwnI0LL1ypuCLgL4KuCum821icm2KJG0QlDuFeKcLuSyxKeWw8M4BxxJWWWQEB8qEHTRLNbSmXcuk4nr"
		const stringFnl7N3V = "NKKJLoXxTn"
		const uintTkHYxF = BigInt("219")
		const BACMARSLPTOKENPoolCuZ9amY = await BACMARSLPTOKENPool.new(stringqjQEKxo, stringFnl7N3V, uintTkHYxF, {from: "0x0000000000000000000000000000000000000001"});
		const stringSI59TX2 = await BACMARSLPTOKENPoolCuZ9amY.symbol.call({from: accounts[2]});
		const uint256DDVfMvQ = await BACMARSLPTOKENPoolCuZ9amY.getRewardForDuration.call({from: accounts[2]});
		const stringiGJJe0 = await BACMARSLPTOKENPoolCuZ9amY.symbol.call({from: accounts[3]});
		const stringEXulWdV = await BACMARSLPTOKENPoolCuZ9amY.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringS3MBmJY = "dsUYY8yp6wvok1GBc9in73n5f5ijZNl7ts5VK6R8bB2KuHmomoAOag"
		const stringKAS7GcY = "kLH9CRiz"
		const uintmeqj0sf = BigInt("124")
		const BACMARSLPTOKENPoolVtHejHU = await BACMARSLPTOKENPool.new(stringS3MBmJY, stringKAS7GcY, uintmeqj0sf, {from: accounts[1]});
		const uintaPepls = BigInt("1402")
		const addressiPIKhPf = accounts[0]
		const uint256wvxoTL1 = await BACMARSLPTOKENPoolVtHejHU.stake.call(uintaPepls, {from: accounts[2]});
		const uint256LjZBaiW = await BACMARSLPTOKENPoolVtHejHU.earned.call(addressiPIKhPf, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVtHejHU.onlyRewardsDistribution.call({from: accounts[2]});
		const stringGwudO04 = await BACMARSLPTOKENPoolVtHejHU.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmnAbTXT = "tUXqPNGTNytF40MncMP5Ajvzx"
		const stringnR4qh6 = "OU9Y9JReayruRr6Ly141pUv1q"
		const uintd9meJcx = BigInt("148")
		const BACMARSLPTOKENPooly6c4jil = await BACMARSLPTOKENPool.new(stringmnAbTXT, stringnR4qh6, uintd9meJcx, {from: accounts[1]});
		const uintV5vhc3n = BigInt("888")
		const uinthVKbqjr = BigInt("1255")
		const addressWoXKpZd = accounts[0]
		const uint256RfRZAx = await BACMARSLPTOKENPooly6c4jil.stake.call(uintV5vhc3n, {from: accounts[2]});
		const uint256jpugAcf = await BACMARSLPTOKENPooly6c4jil.withdraw.call(uinthVKbqjr, {from: accounts[1]});
		const uint256tb4Sxqf = await BACMARSLPTOKENPooly6c4jil.balanceOf.call(addressWoXKpZd, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuJwnlh0 = "uNrpMUeQko4pvXyv6IVfQ969E4w3F7ZorfiYRsQ9DPgBjvW68tnK5zmvHiOEkGwJKe"
		const stringaf2fRs8 = "5vPtOhSBeyIbqLjf2y4TEj7DeuOH"
		const uintmryUVfb = BigInt("242")
		const BACMARSLPTOKENPool83XC4S = await BACMARSLPTOKENPool.new(stringuJwnlh0, stringaf2fRs8, uintmryUVfb, {from: accounts[0]});
		const uintH65oekZ = BigInt("314")
		await BACMARSLPTOKENPool83XC4S.exit.call({from: accounts[0]});
		const uint8XkOcrQ = await BACMARSLPTOKENPool83XC4S.decimals.call({from: accounts[5]});
		const uint256z5USol = await BACMARSLPTOKENPool83XC4S.stake.call(uintH65oekZ, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiIpj0VK = ""
		const stringS7hkNd1 = "enr1FxT1sXNppboSzqNuig5vqTttT6re9HqesnSX1tLoDcqbgIzU8d6c9DvPUI2oOAz2QQv1VDVy0x8McM8kkjsk"
		const uintNbN8amu = BigInt("165")
		const BACMARSLPTOKENPoolZwjQqh7 = await BACMARSLPTOKENPool.new(stringiIpj0VK, stringS7hkNd1, uintNbN8amu, {from: accounts[2]});
		const addressarkQ9K4 = accounts[3]
		await BACMARSLPTOKENPoolZwjQqh7.exit.call({from: accounts[0]});
		const uint256SrNiMqa = await BACMARSLPTOKENPoolZwjQqh7.balanceOf.call(addressarkQ9K4, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOlV3R3 = "XNRntP"
		const stringvORWBIe = "fhlhpPOqWRvnG95Z65XiN7rINt8KxLEGX81uIKq7GR6m2"
		const uintWeEYNwV = BigInt("23")
		const BACMARSLPTOKENPoolXwiTfFm = await BACMARSLPTOKENPool.new(stringOlV3R3, stringvORWBIe, uintWeEYNwV, {from: accounts[2]});
		const uintmQEVEe = BigInt("738")
		const byteNvDD2iz = "0x0e071016090f200a021c0b0a1218170c0e0e141013141b120b131c1b0b140920"
		const byteVGneYd = "0x1f1f1f030601130216190e01101f05061018070c1b1808121e120d1e151e1d20"
		const uintMubjbsz = BigInt("217")
		const uintPr1Aj5I = BigInt("2039")
		const uintiitywqs = BigInt("2002")
		const uintKGL7wCC = BigInt("48")
		const uint256JPNQK5Y = await BACMARSLPTOKENPoolXwiTfFm.stake.call(uintmQEVEe, {from: accounts[4]});
		const uint8pp1Z4gR = await BACMARSLPTOKENPoolXwiTfFm.decimals.call({from: accounts[2]});
		const uint256htaKvcB = await BACMARSLPTOKENPoolXwiTfFm.stakeWithPermit.call(uintiitywqs, uintPr1Aj5I, uintMubjbsz, byteVGneYd, byteNvDD2iz, {from: accounts[3]});
		const stringJRiHBze = await BACMARSLPTOKENPoolXwiTfFm.symbol.call({from: accounts[5]});
		const uint256sDWO1Tm = await BACMARSLPTOKENPoolXwiTfFm.notifyRewardAmount.call(uintKGL7wCC, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm4IflY8 = "nOP8o74MD5JmbkJxDnJB2B5iP1s5kdokI1a9vJsg8EIgN4idMw5p30b3ccyzHgx9KevKRBBGZ6mxvl4hWw1HN7"
		const stringAtEiEwf = "u0chxnXspzcpYt4bvr6l6GhrVqkwTGrCsRDAINsD8eWTTGulMCBOImsK"
		const uintpsyyYmj = BigInt("1")
		const BACMARSLPTOKENPoolrA8YAig = await BACMARSLPTOKENPool.new(stringm4IflY8, stringAtEiEwf, uintpsyyYmj, {from: accounts[2]});
		const uintTeYBqd = BigInt("215")
		const uint256jYfF1cU = await BACMARSLPTOKENPoolrA8YAig.totalSupply.call({from: accounts[4]});
		const uint256g2e94Je = await BACMARSLPTOKENPoolrA8YAig.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringV5gDF72 = await BACMARSLPTOKENPoolrA8YAig.symbol.call({from: accounts[4]});
		const uint256mGEpGOB = await BACMARSLPTOKENPoolrA8YAig.notifyRewardAmount.call(uintTeYBqd, {from: accounts[1]});
		const stringsvgFlVC = await BACMARSLPTOKENPoolrA8YAig.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJvMmn7 = "EeUkS"
		const stringhVzlCl0 = "1ajS5KYArTPNjjCYhQuSLn9Us8RC8Rc"
		const uintdBB833a = BigInt("54")
		const BACMARSLPTOKENPooll2murM = await BACMARSLPTOKENPool.new(stringJvMmn7, stringhVzlCl0, uintdBB833a, {from: accounts[2]});
		const uintSF61Pq9 = BigInt("1711")
		const uintBrERI2s = BigInt("534")
		const uint256L8nbNMq = await BACMARSLPTOKENPooll2murM.withdraw.call(uintSF61Pq9, {from: accounts[0]});
		const uint256YLH7AzF = await BACMARSLPTOKENPooll2murM.withdraw.call(uintBrERI2s, {from: accounts[3]});
		const uint256gIVzJad = await BACMARSLPTOKENPooll2murM.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJphmkaP = "HdBURfu3cVbdAfXEHe"
		const stringrcz3s6k = "NDP6AsUXE6w4MR4t4ekyRQdtL4R"
		const uintzrrxb3 = BigInt("216")
		const BACMARSLPTOKENPoolEiKB5ll = await BACMARSLPTOKENPool.new(stringJphmkaP, stringrcz3s6k, uintzrrxb3, {from: accounts[3]});
		const uintqOuQrSx = BigInt("1454")
		const bytetfFPL0 = "0x1e06050b060e0e1c1e0f1f001b1e171e091907140a0910171408051500171b1b"
		const bytehWvFs7o = "0x07060614031a001e13150e150b0403051d1c0a1b01150d0b130b150b10070119"
		const uint2UHoBR = BigInt("173")
		const uintTIPH6C4 = BigInt("162")
		const uintuLQYJ4x = BigInt("1089")
		const uintLkSX95V = BigInt("1137")
		const uint256KMCdFL = await BACMARSLPTOKENPoolEiKB5ll.withdraw.call(uintqOuQrSx, {from: accounts[1]});
		const uint256eUDru8s = await BACMARSLPTOKENPoolEiKB5ll.stakeWithPermit.call(uintuLQYJ4x, uintTIPH6C4, uint2UHoBR, bytehWvFs7o, bytetfFPL0, {from: accounts[0]});
		const uint256TPAqMbS = await BACMARSLPTOKENPoolEiKB5ll.withdraw.call(uintLkSX95V, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringadoL8bI = "xEqjbBk3I1APcZHQUq3Oy68jDQ0M1jGuf1cIcZ6HiUtPpgsX8xbajoSmbjYKmmJTzskcc9no"
		const stringg4PqmiX = "mDRVuqljA5nSE7vvlvSB7uESV2uNRSXWT9H4ugnybzVNpPt811CE2sp4qut413vN"
		const uintlkCCA6e = BigInt("158")
		const BACMARSLPTOKENPoolAkNHzSl = await BACMARSLPTOKENPool.new(stringadoL8bI, stringg4PqmiX, uintlkCCA6e, {from: accounts[0]});
		const addressFL0i1ct = "0x0000000000000000000000000000000000000001"
		const addressbuueEo = accounts[1]
		const uint256VCf4EFu = await BACMARSLPTOKENPoolAkNHzSl.rewardPerToken.call({from: accounts[5]});
		const addressJjispMn = await BACMARSLPTOKENPoolAkNHzSl.updateReward.call(addressFL0i1ct, {from: accounts[0]});
		const uint256GXncrcL = await BACMARSLPTOKENPoolAkNHzSl.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256nlyQUB2 = await BACMARSLPTOKENPoolAkNHzSl.balanceOf.call(addressbuueEo, {from: accounts[4]});
		await BACMARSLPTOKENPoolAkNHzSl.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOYx30N = "h9HWt9XrjiXVhtGyC1k72okRIz3eJVgKnKYn"
		const stringHGIIDH3 = "tedhWf"
		const uintsXNODm0 = BigInt("218")
		const BACMARSLPTOKENPoolIbsiZc9 = await BACMARSLPTOKENPool.new(stringOYx30N, stringHGIIDH3, uintsXNODm0, {from: accounts[4]});
		const uintXJCs0wV = BigInt("1750")
		const uint256TzUASmS = await BACMARSLPTOKENPoolIbsiZc9.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256OwQoRSu = await BACMARSLPTOKENPoolIbsiZc9.stake.call(uintXJCs0wV, {from: accounts[0]});
		const uint256sYB3tZC = await BACMARSLPTOKENPoolIbsiZc9.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT3f6vkl = "uIKip9pOrh1fm4VxlI3dRIAWnQHMOFiRbFc3SFYHpXIs5lE37mKwoG7LKG"
		const stringDtAbyAR = "Bbe3WK6pGpHdWyAM6"
		const uintAiSmBD = BigInt("191")
		const BACMARSLPTOKENPools5g9k1u = await BACMARSLPTOKENPool.new(stringT3f6vkl, stringDtAbyAR, uintAiSmBD, {from: accounts[3]});
		await BACMARSLPTOKENPools5g9k1u.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPools5g9k1u.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256K26nCom = await BACMARSLPTOKENPools5g9k1u.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPools5g9k1u.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT8AMcxe = "s26J4"
		const stringQBd5IJg = "jabTIcUnbYjDVGtgKRJzrX72rq7Msvd8FR7"
		const uintpQZXa7I = BigInt("207")
		const BACMARSLPTOKENPoolPMzsowP = await BACMARSLPTOKENPool.new(stringT8AMcxe, stringQBd5IJg, uintpQZXa7I, {from: accounts[2]});
		const uintdRTkCp0 = BigInt("1502")
		const uint256cBZFE8v = await BACMARSLPTOKENPoolPMzsowP.notifyRewardAmount.call(uintdRTkCp0, {from: accounts[2]});
		await BACMARSLPTOKENPoolPMzsowP.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfSbTf4 = "3406Bu932t69U82Ydyjsy6HnW4XM9DLK9a3zsmjgYc"
		const stringfFFDzWP = "NmhedcjNdfx4HGou2WADudTRUgNz4l4KpxziNMGpH6vhLsKz1KLHMeNNtde7PaDktFT04X57qFyotOqzBugsHfiFHDRik"
		const uintAiKXLxs = BigInt("69")
		const BACMARSLPTOKENPoolpVhy6fM = await BACMARSLPTOKENPool.new(stringfSbTf4, stringfFFDzWP, uintAiKXLxs, {from: "0x0000000000000000000000000000000000000001"});
		const uintxwxL9W = BigInt("362")
		const uint256MaxjuP = await BACMARSLPTOKENPoolpVhy6fM.rewardPerToken.call({from: accounts[0]});
		const uint256BM8QSO = await BACMARSLPTOKENPoolpVhy6fM.stake.call(uintxwxL9W, {from: accounts[0]});
		const uint256qUAq2og = await BACMARSLPTOKENPoolpVhy6fM.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZZZxJiz = "HBxhX3wz6M6FoehzurRJ92DjrruWuzChtiLKUjrEFUhOldWu8V5V7IEgFEySluTO29iSVhbv8"
		const stringdUTqLUG = "iUyuf1ESwTbs3cE2eO3rwnxBYUGXOhrVtr51e77QtqwrNDH725tgstDJcaRECaNW4JmDZ4CrHHUW21465l4y"
		const uintVhVJljE = BigInt("125")
		const BACMARSLPTOKENPoolQBVm6y2 = await BACMARSLPTOKENPool.new(stringZZZxJiz, stringdUTqLUG, uintVhVJljE, {from: accounts[5]});
		const addressfQ1ST5c = accounts[2]
		await BACMARSLPTOKENPoolQBVm6y2.getReward.call({from: accounts[0]});
		const uint256eL4CaM = await BACMARSLPTOKENPoolQBVm6y2.balanceOf.call(addressfQ1ST5c, {from: accounts[4]});
		const stringprbq5E = await BACMARSLPTOKENPoolQBVm6y2.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA1QMR2C = "4TnA7B8r20i1ozoPmQsfwTLDHRmkKvcdCV4vpIK4dGhesXYOqg4i6zwGvlxkTLBRHcF3q"
		const stringsQEHeGq = "S7hO956IYLAFrk2A8wySx23G0EkbEVokjYSUkc6AaiBB5Wz27CcqYSolSvk628kmFEGuYAUo3KS6eo4Hx48HxqLK4R9"
		const uintTssc9f3 = BigInt("176")
		const BACMARSLPTOKENPoolZcw5n6H = await BACMARSLPTOKENPool.new(stringA1QMR2C, stringsQEHeGq, uintTssc9f3, {from: "0x0000000000000000000000000000000000000001"});
		const byte1UyfXX = "0x13100e1b0a02011e03021f17100b091b031a0c1b110911011d1913151a091f11"
		const bytelWHfvmK = "0x0e031912020102180c09201701171505140a110d0f1d1f1d140d001615010a15"
		const uintrDHGvp = BigInt("1")
		const uintfafIXBo = BigInt("1228")
		const uintBmo0ptD = BigInt("335")
		const uintX8sx2hh = BigInt("1771")
		const uint256UPdZvy = await BACMARSLPTOKENPoolZcw5n6H.stakeWithPermit.call(uintBmo0ptD, uintfafIXBo, uintrDHGvp, bytelWHfvmK, byte1UyfXX, {from: accounts[1]});
		await BACMARSLPTOKENPoolZcw5n6H.getReward.call({from: accounts[1]});
		await BACMARSLPTOKENPoolZcw5n6H.nonReentrant.call({from: accounts[2]});
		const uint256O6tB9jx = await BACMARSLPTOKENPoolZcw5n6H.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolZcw5n6H.exit.call({from: accounts[1]});
		const uint25635zfu1 = await BACMARSLPTOKENPoolZcw5n6H.notifyRewardAmount.call(uintX8sx2hh, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringluxVpL2 = "6LJuYDl5BpKfhy04evVNty371Idn"
		const string2lsb9B = "3OpJ9kBhygaDrwupkDsHexhcHOVyun74NHO6KI6mQzmhMcqJwLrKuEmZ3z5kP6pTGUxcsasPf"
		const uintK7rI6z3 = BigInt("141")
		const BACMARSLPTOKENPoolMe6oB3e = await BACMARSLPTOKENPool.new(stringluxVpL2, string2lsb9B, uintK7rI6z3, {from: accounts[3]});
		const addressamYSd1C = accounts[3]
		const uint256twKgaCa = await BACMARSLPTOKENPoolMe6oB3e.earned.call(addressamYSd1C, {from: accounts[4]});
		const uint256dW1Qp5B = await BACMARSLPTOKENPoolMe6oB3e.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8mSzl2wn = await BACMARSLPTOKENPoolMe6oB3e.decimals.call({from: accounts[2]});
		const uint256RePcaP = await BACMARSLPTOKENPoolMe6oB3e.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string1ebH3A = "aeSWkBwwcRIctrsvJZEUCaq5eueTm0ceVt"
		const stringclToWyV = "2YALNDGTyUjLZd8eiaCVcLxVkdS7qTNONiq44Uu4AneWR0JIlY27KadVmoIK13A9hYDSo9zGUcFCnWvaObGiHelzdw0on3OEv"
		const uint8Qa3w8 = BigInt("39")
		const BACMARSLPTOKENPoolkBkb602 = await BACMARSLPTOKENPool.new(string1ebH3A, stringclToWyV, uint8Qa3w8, {from: accounts[1]});
		const uintHO1W791 = BigInt("740")
		const byteGnE4sa3 = "0x0916040d1b05180419090c180c021115141e0e110a150e070a11140313190813"
		const bytexun0Nq6 = "0x1317140e151106100f111e190c1f0118040f0f1f11101b1a1407120415050a0c"
		const uintWRr7RtA = BigInt("226")
		const uintyvpT6gS = BigInt("1936")
		const uintXONuiS = BigInt("5")
		const uint256QhvaR0d = await BACMARSLPTOKENPoolkBkb602.notifyRewardAmount.call(uintHO1W791, {from: accounts[5]});
		const uint256ofKr7Am = await BACMARSLPTOKENPoolkBkb602.stakeWithPermit.call(uintXONuiS, uintyvpT6gS, uintWRr7RtA, bytexun0Nq6, byteGnE4sa3, {from: accounts[4]});
		const uint256S2qQni = await BACMARSLPTOKENPoolkBkb602.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolkBkb602.exit.call({from: accounts[1]});
		const stringPLAsfdI = await BACMARSLPTOKENPoolkBkb602.name.call({from: accounts[1]});
	});
})