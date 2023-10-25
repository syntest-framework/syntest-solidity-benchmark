const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolFP5TkG = await ETFXPool.new({from: accounts[2]});
		const addressFIqD8AX = accounts[3]
		const addressU8Nq25Z = accounts[0]
		const uint256vaISPV = await ETFXPoolFP5TkG.rewardPerToken.call({from: accounts[5]});
//		const uint256AHizW7B = await ETFXPoolFP5TkG.earned.call(addressFIqD8AX, {from: accounts[1]});
//		const uint256se5GtXk = await ETFXPoolFP5TkG.balanceOf.call(addressU8Nq25Z, {from: accounts[4]});
//		const stringdufJTFx = await ETFXPoolFP5TkG.symbol.call({from: accounts[4]});

		assert.equal(uint256vaISPV, BigInt("0"))
		await expect(ETFXPoolFP5TkG.earned.call(addressFIqD8AX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringxol7xXG = "GnrHzq5YomazRews3tOe1L4UDlf7O7BwsO5AybLek0zgNJoWY1oEdAnsqmznS4ug6Qr8QWaNXSTLCksMy8mCFVssK0fWv16"
		const stringSn1Xh6 = "i8JaqQgvTiMieYnEdzWKWYbCxcW86CFg5ckUzw8frPA7"
		const uintVmf3gO = BigInt("151")
		const ETFXPoolFdOUzi = await ETFXPool.new(stringxol7xXG, stringSn1Xh6, uintVmf3gO, {from: accounts[4]});
		const uintUwPhCqV = BigInt("1811")
		const addressxs11vVG = accounts[0]
		const uint256lMZGNPS = await ETFXPoolFdOUzi.withdraw.call(uintUwPhCqV, {from: accounts[4]});
		const uint8Nfwh4en = await ETFXPoolFdOUzi.decimals.call({from: accounts[1]});
		const uint2569vlDSd = await ETFXPoolFdOUzi.balanceOf.call(addressxs11vVG, {from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolD9yryHs = await ETFXPool.new({from: accounts[1]});
		const uintkgDCq90 = BigInt("1498")
		const addressN4c2kvo = accounts[0]
		const addressJNdj8RX = accounts[3]
//		const boolam7QgMK = await ETFXPoolD9yryHs.decreaseAllowance.call(addressN4c2kvo, uintkgDCq90, {from: accounts[3]});
//		const addressZTVnvHf = await ETFXPoolD9yryHs.owner.call({from: accounts[4]});
//		const uint2569D68Ez = await ETFXPoolD9yryHs.balanceOf.call(addressJNdj8RX, {from: accounts[4]});

		await expect(ETFXPoolD9yryHs.decreaseAllowance.call(addressN4c2kvo, uintkgDCq90, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolclgp24K = await ETFXPool.new({from: accounts[3]});
		const addressGctJ3XA = accounts[0]
		const uintzK83JaO = BigInt("83")
		const addressOdgKUgU = accounts[3]
		const addressqwU1kpU = accounts[3]
		const addressCzfEFUQ = accounts[0]
		const uintAXFVmvp = BigInt("1842")
		const addressLU423ZG = accounts[4]
		const uint256oDuZd2O = await ETFXPoolclgp24K.balanceOf.call(addressGctJ3XA, {from: accounts[4]});
//		const uint256X11qqro = await ETFXPoolclgp24K.withdraw.call(uintzK83JaO, {from: accounts[5]});
//		const uint256l74BFYU = await ETFXPoolclgp24K.earned.call(addressOdgKUgU, {from: accounts[0]});
//		const uint256SnFZ4Hb = await ETFXPoolclgp24K.allowance.call(addressCzfEFUQ, addressqwU1kpU, {from: accounts[2]});
//		const boolWPj0k2v = await ETFXPoolclgp24K.decreaseAllowance.call(addressLU423ZG, uintAXFVmvp, {from: accounts[4]});

		assert.equal(uint256oDuZd2O, BigInt("0"))
		await expect(ETFXPoolclgp24K.withdraw.call(uintzK83JaO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolanyil5y = await ETFXPool.new({from: accounts[2]});
		const uintaV6oimV = BigInt("826")
		const uintGL8kil9 = BigInt("1086")
//		await ETFXPoolanyil5y.getReward.call({from: accounts[3]});
//		const uint256z0SFC8q = await ETFXPoolanyil5y.stake.call(uintaV6oimV, {from: accounts[4]});
//		const uint256ajoF78x = await ETFXPoolanyil5y.stake.call(uintGL8kil9, {from: accounts[0]});
//		await ETFXPoolanyil5y.renounceOwnership.call({from: accounts[5]});
//		const stringGw6Md71 = await ETFXPoolanyil5y.name.call({from: accounts[5]});

		await expect(ETFXPoolanyil5y.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvd1wPer = await ETFXPool.new({from: accounts[5]});
		const uintUrMmb7z = BigInt("1850")
		const uintzovniJ = BigInt("1203")
		const addressebSEq7u = accounts[0]
//		const uint256JxMshwr = await ETFXPoolvd1wPer.stake.call(uintUrMmb7z, {from: accounts[1]});
//		const boolsBplowA = await ETFXPoolvd1wPer.transfer.call(addressebSEq7u, uintzovniJ, {from: accounts[1]});
//		const uint8kPlr2k5 = await ETFXPoolvd1wPer.decimals.call({from: accounts[3]});

		await expect(ETFXPoolvd1wPer.stake.call(uintUrMmb7z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqhJ7tEG = await ETFXPool.new({from: accounts[2]});
		const addressCA66a6 = "0x0000000000000000000000000000000000000001"
		const addressc9h5cC = accounts[2]
//		const addressmdhR9gl = await ETFXPoolqhJ7tEG.transferOwnership.call(addressCA66a6, {from: accounts[1]});
//		await ETFXPoolqhJ7tEG.exit.call({from: accounts[4]});
//		const addressfMiBZ2E = await ETFXPoolqhJ7tEG.transferOwnership.call(addressc9h5cC, {from: accounts[5]});

		await expect(ETFXPoolqhJ7tEG.transferOwnership.call(addressCA66a6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooluTUM3yX = await ETFXPool.new({from: accounts[2]});
		const addresslYSaI2K = accounts[3]
		const addressOIwl8w9 = accounts[1]
		const uint256XGBJF45 = await ETFXPooluTUM3yX.allowance.call(addressOIwl8w9, addresslYSaI2K, {from: "0x0000000000000000000000000000000000000001"});
		const stringb5aBirf = await ETFXPooluTUM3yX.name.call({from: accounts[2]});

		assert.equal(stringb5aBirf, "ETFX-FARM")
		assert.equal(uint256XGBJF45, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolXSa46Xq = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz2ezVw = BigInt("819")
		const addressO8QxmdP = accounts[0]
		const addresseaSmCcV = accounts[4]
		await ETFXPoolXSa46Xq.nonReentrant.call({from: accounts[3]});
		const boolAEmcqBh = await ETFXPoolXSa46Xq.transferFrom.call(addresseaSmCcV, addressO8QxmdP, uintz2ezVw, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFP5TkG = await ETFXPool.new({from: accounts[2]});
		const addressL2i6GV0 = accounts[1]
		const uint256vaISPV = await ETFXPoolFP5TkG.rewardPerToken.call({from: accounts[5]});
		const uint256se5GtXk = await ETFXPoolFP5TkG.balanceOf.call(addressL2i6GV0, {from: accounts[4]});
		const stringdufJTFx = await ETFXPoolFP5TkG.symbol.call({from: accounts[4]});

		assert.equal(stringdufJTFx, "FETFX")
		assert.equal(uint256se5GtXk, BigInt("0"))
		assert.equal(uint256vaISPV, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvd1wPer = await ETFXPool.new({from: accounts[5]});
		const uintNTH4j6L = BigInt("1203")
		const addressBFG1GRv = accounts[0]
//		await ETFXPoolvd1wPer.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolsBplowA = await ETFXPoolvd1wPer.transfer.call(addressBFG1GRv, uintNTH4j6L, {from: accounts[1]});
//		const uint8kPlr2k5 = await ETFXPoolvd1wPer.decimals.call({from: accounts[3]});

		await expect(ETFXPoolvd1wPer.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const addressdzsRbFA = await ETFXPoolZyW9QEk.owner.call({from: accounts[4]});
		const uint256sP9pR9 = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[0]});
		const uint256S8t52VH = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[2]});

		assert.equal(addressdzsRbFA, 0x9ECC75a3DF2877cDA5AFC31EC638b4b6F8a4E677)
		assert.equal(uint256S8t52VH, BigInt("0"))
		assert.equal(uint256sP9pR9, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolt7WPryX = await ETFXPool.new({from: accounts[4]});
		const addresstM16Gwf = await ETFXPoolt7WPryX.owner.call({from: accounts[0]});
		const addressTqkTKzI = await ETFXPoolt7WPryX.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolt7WPryX.nonReentrant.call({from: accounts[3]});
//		const uint8XcRuQeQ = await ETFXPoolt7WPryX.decimals.call({from: accounts[1]});

		assert.equal(addressTqkTKzI, 0x9573Ab258Cf97486aC40c6267C400f861910518F)
		assert.equal(addresstM16Gwf, 0x9573Ab258Cf97486aC40c6267C400f861910518F)
		await expect(ETFXPoolt7WPryX.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const uintvOZvA4 = BigInt("1292")
		const addressmqyRc1E = accounts[4]
		const addressi1XVLS7 = accounts[2]
		const addressFxj7LS = accounts[4]
		const addressdzsRbFA = await ETFXPoolZyW9QEk.owner.call({from: accounts[4]});
//		const boolV8tfAAv = await ETFXPoolZyW9QEk.transferFrom.call(addressi1XVLS7, addressmqyRc1E, uintvOZvA4, {from: accounts[0]});
//		const uint256TOAsrfR = await ETFXPoolZyW9QEk.balanceOf.call(addressFxj7LS, {from: accounts[4]});
//		await ETFXPoolZyW9QEk.getReward.call({from: accounts[2]});
//		const addressodCnKFk = await ETFXPoolZyW9QEk.owner.call({from: accounts[0]});

		assert.equal(addressdzsRbFA, 0x9ECC75a3DF2877cDA5AFC31EC638b4b6F8a4E677)
		await expect(ETFXPoolZyW9QEk.transferFrom.call(addressi1XVLS7, addressmqyRc1E, uintvOZvA4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLzwz0nM = await ETFXPool.new({from: accounts[2]});
		const uintCFoz5jf = BigInt("1533")
		const addressK6MKWiz = accounts[2]
		const addressGKFCx3c = accounts[1]
		const uint256AJMF3S8 = await ETFXPoolLzwz0nM.totalSupply.call({from: accounts[5]});
		const booldGLXea = await ETFXPoolLzwz0nM.increaseAllowance.call(addressK6MKWiz, uintCFoz5jf, {from: accounts[3]});
		const uint256MxzazXY = await ETFXPoolLzwz0nM.rewardPerToken.call({from: accounts[2]});
		const uint256z21Ph7 = await ETFXPoolLzwz0nM.balanceOf.call(addressGKFCx3c, {from: accounts[4]});

		assert.equal(booldGLXea, true)
		assert.equal(uint256AJMF3S8, BigInt("0"))
		assert.equal(uint256MxzazXY, BigInt("0"))
		assert.equal(uint256z21Ph7, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const addressdzsRbFA = await ETFXPoolZyW9QEk.owner.call({from: accounts[4]});
		const uint8UYH5E6Y = await ETFXPoolZyW9QEk.decimals.call({from: accounts[1]});
//		await ETFXPoolZyW9QEk.nonReentrant.call({from: accounts[2]});
//		const uint256S8t52VH = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[2]});
//		const stringDeXWv7O = await ETFXPoolZyW9QEk.name.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolZyW9QEk.getReward.call({from: accounts[2]});
//		const addressodCnKFk = await ETFXPoolZyW9QEk.owner.call({from: accounts[0]});

		assert.equal(addressdzsRbFA, 0x9ECC75a3DF2877cDA5AFC31EC638b4b6F8a4E677)
		assert.equal(uint8UYH5E6Y, BigInt("8"))
		await expect(ETFXPoolZyW9QEk.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const addressgnVYvyh = accounts[5]
		const addressdzsRbFA = await ETFXPoolZyW9QEk.owner.call({from: accounts[4]});
		const addressDoi4nn = await ETFXPoolZyW9QEk.transferOwnership.call(addressgnVYvyh, {from: accounts[5]});
		const uint256S8t52VH = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[2]});
		const stringDeXWv7O = await ETFXPoolZyW9QEk.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringQzLykW0 = await ETFXPoolZyW9QEk.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolZyW9QEk.getReward.call({from: accounts[3]});
//		const stringG1aPypG = await ETFXPoolZyW9QEk.symbol.call({from: accounts[4]});
//		await ETFXPoolZyW9QEk.getReward.call({from: accounts[2]});
//		const addressodCnKFk = await ETFXPoolZyW9QEk.owner.call({from: accounts[0]});

		assert.equal(addressdzsRbFA, 0x9ECC75a3DF2877cDA5AFC31EC638b4b6F8a4E677)
		assert.equal(stringDeXWv7O, "ETFX-FARM")
		assert.equal(stringQzLykW0, "FETFX")
		assert.equal(uint256S8t52VH, BigInt("0"))
		await expect(ETFXPoolZyW9QEk.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const uintePHp1cR = BigInt("1254")
		const addressjINQ8Mj = accounts[3]
		const uintzx6t74a = BigInt("1082")
		const booluRt2N00 = await ETFXPoolZyW9QEk.approve.call(addressjINQ8Mj, uintePHp1cR, {from: accounts[3]});
//		const uint256ky6n69Q = await ETFXPoolZyW9QEk.withdraw.call(uintzx6t74a, {from: accounts[3]});
//		const uint256S8t52VH = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[2]});

		assert.equal(booluRt2N00, true)
		await expect(ETFXPoolZyW9QEk.withdraw.call(uintzx6t74a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZyW9QEk = await ETFXPool.new({from: accounts[5]});
		const uintM7dqCAI = BigInt("363")
		const addressLAIidX4 = accounts[5]
//		const booldFwhO0G = await ETFXPoolZyW9QEk.transfer.call(addressLAIidX4, uintM7dqCAI, {from: accounts[2]});
//		await ETFXPoolZyW9QEk.onlyOwner.call({from: accounts[0]});
//		const uint256S8t52VH = await ETFXPoolZyW9QEk.rewardPerToken.call({from: accounts[2]});

		await expect(ETFXPoolZyW9QEk.transfer.call(addressLAIidX4, uintM7dqCAI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwFOSNAg = await ETFXPool.new({from: accounts[1]});
		const uintHDbGoDl = BigInt("1086")
		const addressSdVTn4o = accounts[2]
//		await ETFXPoolwFOSNAg.renounceOwnership.call({from: accounts[1]});
//		await ETFXPoolwFOSNAg.getReward.call({from: accounts[2]});
//		const stringCdHBL7e = await ETFXPoolwFOSNAg.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLwvrfWn = await ETFXPoolwFOSNAg.decreaseAllowance.call(addressSdVTn4o, uintHDbGoDl, {from: accounts[1]});

		await expect(ETFXPoolwFOSNAg.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})