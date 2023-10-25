const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoingM4hl6P = await MetaCoin.new({from: accounts[1]});
		const uintHoSx8l6 = BigInt("1461")
		const addressKmQAow1 = accounts[4]
		const uintICN6hjQ = BigInt("1750")
		const addressY4GYGwh = accounts[1]
		const uint6FdDl8 = BigInt("1985")
		const addressqHTVTNl = "0x0000000000000000000000000000000000000001"
		const uintdqXmwbj = BigInt("1767")
		const addressu693Zrk = accounts[0]
		const uint2vd2by = BigInt("207")
		const addressUZ1y6m = accounts[3]
		const boolenK3LiW = await MetaCoingM4hl6P.sendCoin.call(addressKmQAow1, uintHoSx8l6, {from: accounts[4]});
		const boolazgtPtf = await MetaCoingM4hl6P.sendCoin.call(addressY4GYGwh, uintICN6hjQ, {from: accounts[0]});
		const boolJF9MEAS = await MetaCoingM4hl6P.sendCoin.call(addressqHTVTNl, uint6FdDl8, {from: accounts[0]});
		const boolXrZySIq = await MetaCoingM4hl6P.sendCoin.call(addressu693Zrk, uintdqXmwbj, {from: accounts[2]});
		const boolR2338G = await MetaCoingM4hl6P.sendCoin.call(addressUZ1y6m, uint2vd2by, {from: accounts[3]});

		assert.equal(boolJF9MEAS, false)
		assert.equal(boolR2338G, false)
		assert.equal(boolXrZySIq, false)
		assert.equal(boolazgtPtf, false)
		assert.equal(boolenK3LiW, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCtImJ2T = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8szbit = BigInt("815")
		const addressEoYISZY = accounts[3]
		const uintB0z7xT = BigInt("1652")
		const addressi2vQr2 = accounts[5]
		const uintaEDAnot = BigInt("781")
		const addressLJviMgD = accounts[2]
		const boollBLnIDG = await MetaCoinCtImJ2T.sendCoin.call(addressEoYISZY, uint8szbit, {from: accounts[1]});
		const boolPqIiIC = await MetaCoinCtImJ2T.sendCoin.call(addressi2vQr2, uintB0z7xT, {from: accounts[3]});
		const boolOYImm2n = await MetaCoinCtImJ2T.sendCoin.call(addressLJviMgD, uintaEDAnot, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinBczSp4V = await MetaCoin.new({from: accounts[1]});
		const uintgBs1Ppo = BigInt("1429")
		const addressKT7YIYA = accounts[1]
		const uintN37KICB = BigInt("1552")
		const addressQQw7T0r = accounts[0]
		const uintqyh5bTI = BigInt("1570")
		const addressllRPuQn = accounts[0]
		const uintsPdgqnK = BigInt("1012")
		const addressCsVcths = accounts[0]
		const uintm54wMo6 = BigInt("880")
		const addressf2t69l = accounts[4]
		const uintSVC6Ads = BigInt("849")
		const addressTJjVDQC = accounts[4]
		const booloRtWIoc = await MetaCoinBczSp4V.sendCoin.call(addressKT7YIYA, uintgBs1Ppo, {from: accounts[3]});
		const boolBTzWuE1 = await MetaCoinBczSp4V.sendCoin.call(addressQQw7T0r, uintN37KICB, {from: accounts[3]});
		const boolzDZwf3p = await MetaCoinBczSp4V.sendCoin.call(addressllRPuQn, uintqyh5bTI, {from: accounts[3]});
		const boolC6jUTWw = await MetaCoinBczSp4V.sendCoin.call(addressCsVcths, uintsPdgqnK, {from: accounts[1]});
		const bool1f8GWk = await MetaCoinBczSp4V.sendCoin.call(addressf2t69l, uintm54wMo6, {from: accounts[4]});
		const boolnPTpmzI = await MetaCoinBczSp4V.sendCoin.call(addressTJjVDQC, uintSVC6Ads, {from: accounts[1]});

		assert.equal(bool1f8GWk, false)
		assert.equal(boolBTzWuE1, false)
		assert.equal(boolC6jUTWw, true)
		assert.equal(boolnPTpmzI, true)
		assert.equal(booloRtWIoc, false)
		assert.equal(boolzDZwf3p, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinN1CyxCI = await MetaCoin.new({from: accounts[3]});
		const uintJaBwTK2 = BigInt("1904")
		const addressLf9EGZl = accounts[1]
		const uintmNCNnH3 = BigInt("182")
		const addresskIzhssg = accounts[4]
		const uintkzuo4i4 = BigInt("1546")
		const addressppcbXBO = accounts[5]
		const uintKAjfsv = BigInt("0")
		const addressGbCLDQn = accounts[4]
		const uintoZqLXxA = BigInt("1462")
		const addresshRXesA = accounts[3]
		const uintGBZmV3R = BigInt("373")
		const addressrCrVhEz = accounts[1]
		const uintaM1xQHC = BigInt("1353")
		const addressvRX4sRm = accounts[1]
		const uintak8cLcT = BigInt("195")
		const addressdbXpbLn = accounts[1]
		const boolG9rSg04 = await MetaCoinN1CyxCI.sendCoin.call(addressLf9EGZl, uintJaBwTK2, {from: accounts[2]});
		const boolAiej1yt = await MetaCoinN1CyxCI.sendCoin.call(addresskIzhssg, uintmNCNnH3, {from: accounts[3]});
		const booli4Z2cH = await MetaCoinN1CyxCI.sendCoin.call(addressppcbXBO, uintkzuo4i4, {from: accounts[0]});
		const boola6daUTT = await MetaCoinN1CyxCI.sendCoin.call(addressGbCLDQn, uintKAjfsv, {from: accounts[3]});
		const boolgC2xjJo = await MetaCoinN1CyxCI.sendCoin.call(addresshRXesA, uintoZqLXxA, {from: accounts[0]});
		const boolOtswBiX = await MetaCoinN1CyxCI.sendCoin.call(addressrCrVhEz, uintGBZmV3R, {from: accounts[4]});
		const boolrf5U677 = await MetaCoinN1CyxCI.sendCoin.call(addressvRX4sRm, uintaM1xQHC, {from: accounts[0]});
		const boolimSMRXJ = await MetaCoinN1CyxCI.sendCoin.call(addressdbXpbLn, uintak8cLcT, {from: accounts[5]});

		assert.equal(boolAiej1yt, true)
		assert.equal(boolG9rSg04, false)
		assert.equal(boolOtswBiX, false)
		assert.equal(boola6daUTT, true)
		assert.equal(boolgC2xjJo, false)
		assert.equal(booli4Z2cH, false)
		assert.equal(boolimSMRXJ, false)
		assert.equal(boolrf5U677, false)
	});
})