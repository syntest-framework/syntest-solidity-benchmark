const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressJ4QECxG = accounts[1]
		const BAEJOp0wl = await BAE.new(addressJ4QECxG, {from: accounts[0]});
		const uintWihodeX = BigInt("204")
		const uintxM9GpTY = BigInt("848")
		const uintPTMOPlV = BigInt("1070")
		const uintU6DZ9d1 = BigInt("26")
		const uintmWoVRKJ = BigInt("30")
		const uintHIA63Ls = BigInt("1898")
		const uint0WTFND = BigInt("749")
		const uinta9FnSUO = BigInt("55")
		const uint256lVyLdGU = await BAEJOp0wl.resetAuction.call(uintPTMOPlV, uintxM9GpTY, uintWihodeX, {from: accounts[3]});
		const uint256C9HX786 = await BAEJOp0wl.createAuction.call(uint0WTFND, uintHIA63Ls, uintmWoVRKJ, uintU6DZ9d1, {from: accounts[1]});
		const uint256TXt0DvR = await BAEJOp0wl.bid.call(uinta9FnSUO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEJOp0wl.resetAuction.call(uintPTMOPlV, uintxM9GpTY, uintWihodeX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressjrsKmFw = accounts[2]
		const BAEenzwPHr = await BAE.new(addressjrsKmFw, {from: accounts[1]});
		const uintEHhfbMC = BigInt("832")
		const uintliKKO0Q = BigInt("804")
		const uintzVPBrq5 = BigInt("1427")
		const uintEeOPCV3 = BigInt("1158")
		const uintvHd4W1X = BigInt("644")
		const uint256XK7soU6 = await BAEenzwPHr.changePrintFee.call(uintEHhfbMC, {from: accounts[4]});
		const uint256BpHYCoW = await BAEenzwPHr.createAuction.call(uintvHd4W1X, uintEeOPCV3, uintzVPBrq5, uintliKKO0Q, {from: accounts[4]});

		await expect(BAEenzwPHr.changePrintFee.call(uintEHhfbMC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspyG5cBb = "0x0000000000000000000000000000000000000001"
		const BAEcD3eUU = await BAE.new(addresspyG5cBb, {from: accounts[2]});
		const uintyH4XWYW = BigInt("1427")
		const uinteD72Tj = BigInt("1015")
		const uintj3cgnyj = BigInt("138")
		const uintr6HMNkD = BigInt("2011")
		const uintfgk4Gf = BigInt("1954")
		const uintDqaSnTo = BigInt("605")
		const uintH5da9B = BigInt("1617")
		const uint256Kb32Dbq = await BAEcD3eUU.concludeAuction.call(uintyH4XWYW, {from: accounts[3]});
		const uint256HHjyiTg = await BAEcD3eUU.bid.call(uinteD72Tj, {from: accounts[3]});
		const uint256tdwTNcr = await BAEcD3eUU.createAuction.call(uintDqaSnTo, uintfgk4Gf, uintr6HMNkD, uintj3cgnyj, {from: accounts[4]});
		const uint256rQARAy7 = await BAEcD3eUU.concludeAuction.call(uintH5da9B, {from: accounts[1]});

		await expect(BAEcD3eUU.concludeAuction.call(uintyH4XWYW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshGV3MO = "0x0000000000000000000000000000000000000001"
		const BAEOFj7YHA = await BAE.new(addresshGV3MO, {from: accounts[1]});
		const uintKeVwk66 = BigInt("1890")
		const uints13Qwtb = BigInt("202")
		const uinti11fz1b = BigInt("800")
		const uintqDZM52P = BigInt("130")
		const uintcvBBEuT = BigInt("1618")
		const uintytO2Z3o = BigInt("2018")
		const uintItcfKV = BigInt("1223")
		const uintLO4OPBi = BigInt("93")
		const uinta5LR8p = BigInt("2016")
		const uint256JmSz2El = await BAEOFj7YHA.bid.call(uintKeVwk66, {from: accounts[4]});
		const uint256V865kuS = await BAEOFj7YHA.bid.call(uints13Qwtb, {from: accounts[2]});
		const uint256UmaUmhi = await BAEOFj7YHA.concludeAuction.call(uinti11fz1b, {from: accounts[4]});
		const uint256Jcq95p = await BAEOFj7YHA.bid.call(uintqDZM52P, {from: accounts[4]});
		const uint256goexQo3 = await BAEOFj7YHA.createAuction.call(uintLO4OPBi, uintItcfKV, uintytO2Z3o, uintcvBBEuT, {from: accounts[4]});
		const uint256hQSfWU4 = await BAEOFj7YHA.bid.call(uinta5LR8p, {from: accounts[1]});

		await expect(BAEOFj7YHA.bid.call(uintKeVwk66, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressSo5zDiF = accounts[4]
		const BAEyNS203p = await BAE.new(addressSo5zDiF, {from: accounts[4]});
		const uintVS4MquJ = BigInt("1202")
		const uinton794UP = BigInt("2037")
		const uintiqgdrZb = BigInt("1214")
		const uintU1bhGr = BigInt("741")
		const uintzsIaRa = BigInt("1780")
		const uintwGHadxZ = BigInt("1499")
		const uint4smLiM = BigInt("1009")
		const uintRHL4Rzj = BigInt("1941")
		const uinteG4Lnew = BigInt("440")
		const uinthEdSBm = BigInt("1426")
		const uintF6mYH8x = BigInt("1364")
		const uintnN1bScx = BigInt("1646")
		const uintymxPBd = BigInt("354")
		const uintHitLTfv = BigInt("1889")
		const uint256Ljs0DYZ = await BAEyNS203p.createAuction.call(uintU1bhGr, uintiqgdrZb, uinton794UP, uintVS4MquJ, {from: accounts[3]});
		const uint256tGMHdlu = await BAEyNS203p.createAuction.call(uintRHL4Rzj, uint4smLiM, uintwGHadxZ, uintzsIaRa, {from: accounts[5]});
		const uint256IXMQpOn = await BAEyNS203p.setAuctionFee.call(uinteG4Lnew, {from: accounts[4]});
		const uint256QZDeiOn = await BAEyNS203p.concludeAuction.call(uinthEdSBm, {from: accounts[1]});
		const uint256t0yUHZs = await BAEyNS203p.buy.call(uintF6mYH8x, {from: accounts[2]});
		const uint256f73uSAv = await BAEyNS203p.resetAuction.call(uintHitLTfv, uintymxPBd, uintnN1bScx, {from: accounts[0]});

		await expect(BAEyNS203p.createAuction.call(uintU1bhGr, uintiqgdrZb, uinton794UP, uintVS4MquJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressLPhq1R7 = accounts[1]
		const BAEBhl0Az = await BAE.new(addressLPhq1R7, {from: accounts[0]});
		const uintH7xb4zU = BigInt("1543")
		const uintVwflcS = BigInt("941")
		const uintWnueWQ6 = BigInt("1319")
		const uintSkogQfh = BigInt("1552")
		const uintbLTA2zv = BigInt("69")
		const uintYiSrJmD = BigInt("1672")
		const uint256WaA52eg = await BAEBhl0Az.buy.call(uintH7xb4zU, {from: accounts[3]});
		const uint256zEPi2UJ = await BAEBhl0Az.createAuction.call(uintbLTA2zv, uintSkogQfh, uintWnueWQ6, uintVwflcS, {from: accounts[0]});
		const uint256dw05CA = await BAEBhl0Az.bid.call(uintYiSrJmD, {from: accounts[5]});

		await expect(BAEBhl0Az.buy.call(uintH7xb4zU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressO0zSM1Q = accounts[2]
		const BAEu0xgvWs = await BAE.new(addressO0zSM1Q, {from: "0x0000000000000000000000000000000000000001"});
		const uintB4Y76pC = BigInt("727")
		const uintcMqNAIp = BigInt("935")
		const uintbncFIwS = BigInt("1496")
		const uintnHVnkE2 = BigInt("10")
		const uintIz4b9l7 = BigInt("1292")
		const uintCdySEvj = BigInt("1054")
		const uintf3sAt3 = BigInt("1128")
		const uintM6jfFgI = BigInt("1326")
		const uint256MEtiB0q = await BAEu0xgvWs.resetAuction.call(uintbncFIwS, uintcMqNAIp, uintB4Y76pC, {from: accounts[1]});
		const uint256pQpynQY = await BAEu0xgvWs.buy.call(uintnHVnkE2, {from: accounts[4]});
		const uint256mZeLfJ5 = await BAEu0xgvWs.resetAuction.call(uintf3sAt3, uintCdySEvj, uintIz4b9l7, {from: accounts[4]});
		const uint256dOPOdBt = await BAEu0xgvWs.changePrintFee.call(uintM6jfFgI, {from: accounts[2]});
	});
})