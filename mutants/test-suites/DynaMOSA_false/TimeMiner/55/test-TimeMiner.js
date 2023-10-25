const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerkNGYVX = await TimeMiner.new({from: accounts[2]});
		const boolundNZpA = true
		const uintAYK3Hhn = BigInt("1628")
		const addresspbD5s6j = accounts[1]
		const addresscHYkC8o = accounts[2]
//		const boolIFSWsYo = await TimeMinerkNGYVX.setStableCoinSystem.call(boolundNZpA, {from: accounts[5]});
//		const boolWyhaIfl = await TimeMinerkNGYVX.approve.call(addresspbD5s6j, uintAYK3Hhn, {from: accounts[0]});
//		const uint256izc4ArX = await TimeMinerkNGYVX.tokensToClaim.call(addresscHYkC8o, {from: accounts[2]});

		await expect(TimeMinerkNGYVX.setStableCoinSystem.call(boolundNZpA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerz2XgKlO = await TimeMiner.new({from: accounts[2]});
		const uintuibtB6q = BigInt("589")
		const addresskJcIPss = accounts[0]
		const addressIyy8vbm = accounts[2]
//		const uintvCdngNv = await TimeMinerz2XgKlO.preSale.call(uintuibtB6q, {from: accounts[1]});
//		const uint256qkAZ92v = await TimeMinerz2XgKlO.balanceOf.call(addresskJcIPss, {from: accounts[4]});
//		await TimeMinerz2XgKlO.preSaleFinished.call({from: accounts[4]});
//		const uint256eDwWq80 = await TimeMinerz2XgKlO.tokensToClaim.call(addressIyy8vbm, {from: accounts[0]});

		await expect(TimeMinerz2XgKlO.preSale.call(uintuibtB6q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerorboto6 = await TimeMiner.new({from: accounts[2]});
		const addressS3f5xeN = accounts[1]
		const addressHhFi5fG = accounts[0]
		const uintiq6qjKm = BigInt("1747")
		const addressmxWIivq = accounts[4]
		const uintJOhY1TO = BigInt("296")
		const addressz1Rx0it = accounts[4]
		const uint256uJmvwtE = await TimeMinerorboto6.totalSupply.call({from: accounts[4]});
		const uint25687tV80 = await TimeMinerorboto6.balanceOfTokenCirculation.call(addressS3f5xeN, {from: accounts[2]});
		const uint256StKKpj = await TimeMinerorboto6.balanceOfTokenCirculation.call(addressHhFi5fG, {from: "0x0000000000000000000000000000000000000001"});
		const boolhBcOBfR = await TimeMinerorboto6.approve.call(addressmxWIivq, uintiq6qjKm, {from: accounts[2]});
//		await TimeMinerorboto6.preSaleFinished.call({from: accounts[0]});
//		const booly8AabWp = await TimeMinerorboto6.transfer.call(addressz1Rx0it, uintJOhY1TO, {from: accounts[0]});

		assert.equal(boolhBcOBfR, true)
		assert.equal(uint25687tV80, BigInt("0"))
		assert.equal(uint256StKKpj, BigInt("0"))
		assert.equal(uint256uJmvwtE, BigInt("24000000"))
		await expect(TimeMinerorboto6.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqNnDESD = await TimeMiner.new({from: accounts[0]});
		const addressoRa9TTD = accounts[4]
		const uint7Xea2l = BigInt("1055")
		const addressQRpE5Ba = accounts[0]
		const uintQi05WkU = BigInt("305")
		const addressZXHPbtg = accounts[4]
//		const uint256VECBstQ = await TimeMinerqNnDESD.tokensToClaim.call(addressoRa9TTD, {from: accounts[1]});
//		const boolbJWd2CA = await TimeMinerqNnDESD.transfer.call(addressQRpE5Ba, uint7Xea2l, {from: accounts[0]});
//		const boolay4YUEX = await TimeMinerqNnDESD.approve.call(addressZXHPbtg, uintQi05WkU, {from: accounts[2]});

		await expect(TimeMinerqNnDESD.tokensToClaim.call(addressoRa9TTD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBaHtLHZ = await TimeMiner.new({from: accounts[0]});
		const uintI56XpXL = BigInt("1454")
		const addressJ2AUdNf = accounts[1]
		const addressWVL4cAr = accounts[4]
		const uintDbiqex7 = BigInt("1370")
		const addressRX4AWF = accounts[4]
		const boolCpftjh = true
		const addressvLGHtUw = "0x0000000000000000000000000000000000000001"
		const boolloekVzG = await TimeMinerBaHtLHZ.approve.call(addressJ2AUdNf, uintI56XpXL, {from: accounts[2]});
		const uint256fIsxbKu = await TimeMinerBaHtLHZ.balanceOfTokenCirculation.call(addressWVL4cAr, {from: accounts[0]});
//		const uint256wyXtWQN = await TimeMinerBaHtLHZ.changePreSalePriceIfToHigh.call(uintDbiqex7, {from: accounts[5]});
//		const uint256uNw1VQT = await TimeMinerBaHtLHZ.allInfoFor.call(addressRX4AWF, {from: accounts[2]});
//		const addressi9rrenc = await TimeMinerBaHtLHZ.whitelist.call(addressvLGHtUw, boolCpftjh, {from: accounts[1]});
//		const boolBqzJDl = await TimeMinerBaHtLHZ.infoStableSystem.call({from: accounts[2]});

		assert.equal(boolloekVzG, true)
		assert.equal(uint256fIsxbKu, BigInt("0"))
		await expect(TimeMinerBaHtLHZ.changePreSalePriceIfToHigh.call(uintDbiqex7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXdJuM3L = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRO9OjUz = accounts[4]
		const addressb210pF2 = accounts[3]
		const uinteXtwOo = BigInt("1487")
		const addressAss5j9X = accounts[1]
		const boolJURnUEW = true
		const addressIeoGkBE = accounts[1]
		const uint256xPnMsF5 = await TimeMinerXdJuM3L.allowance.call(addressb210pF2, addressRO9OjUz, {from: accounts[3]});
		const uint256HJ8svvJ = await TimeMinerXdJuM3L.totalSupply.call({from: accounts[2]});
		const boolElLfEcD = await TimeMinerXdJuM3L.approve.call(addressAss5j9X, uinteXtwOo, {from: accounts[3]});
		const addressRY2xXDR = await TimeMinerXdJuM3L.whitelist.call(addressIeoGkBE, boolJURnUEW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerf3jiQBi = await TimeMiner.new({from: accounts[2]});
		const address0j0bcx = accounts[2]
		const uintURvneyW = BigInt("89")
		const uintHOoJPVp = BigInt("1670")
		const uinthN2JYf = BigInt("1495")
		const uintHBxE13R = BigInt("680")
		const uint256biCKZn = await TimeMinerf3jiQBi.balanceOf.call(address0j0bcx, {from: accounts[1]});
//		const uint256LiRJ3pp = await TimeMinerf3jiQBi.setPrizeFromNewAddress.call(uintHOoJPVp, uintURvneyW, {from: accounts[3]});
//		await TimeMinerf3jiQBi.preSaleFinished.call({from: accounts[4]});
//		const uint2565SbkAS = await TimeMinerf3jiQBi.setPrizeFromNewAddress.call(uintHBxE13R, uinthN2JYf, {from: accounts[3]});

		assert.equal(uint256biCKZn, BigInt("12000000"))
		await expect(TimeMinerf3jiQBi.setPrizeFromNewAddress.call(uintHOoJPVp, uintURvneyW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMdamVb7 = await TimeMiner.new({from: accounts[2]});
		const addressp0huFE = accounts[2]
		const addressb4EDKx = accounts[1]
		const uint5U4bJq = BigInt("1047")
		const addressikH0xKv = accounts[0]
		const boollJWRUVL = false
		const uintb0T6pPn = BigInt("1135")
		const uintBleQEVn = BigInt("636")
		const uint256TL8h31n = await TimeMinerMdamVb7.allowance.call(addressb4EDKx, addressp0huFE, {from: accounts[4]});
		const boolsngj3e2 = await TimeMinerMdamVb7.transfer.call(addressikH0xKv, uint5U4bJq, {from: accounts[2]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[5]});
//		const boolnxIwhPL = await TimeMinerMdamVb7.setStableCoinSystem.call(boollJWRUVL, {from: accounts[1]});
//		const uint256KlZxyCm = await TimeMinerMdamVb7.setPrizeFromNewAddress.call(uintBleQEVn, uintb0T6pPn, {from: accounts[4]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[1]});

		assert.equal(boolsngj3e2, true)
		assert.equal(uint256TL8h31n, BigInt("0"))
		await expect(TimeMinerMdamVb7.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerorboto6 = await TimeMiner.new({from: accounts[2]});
		const addressTLlehK4 = accounts[1]
		const addresswV1XWo7 = accounts[0]
		const uintN0DJfC = BigInt("1747")
		const addresshkh7VZC = accounts[4]
		const uintE49KEv = BigInt("296")
		const addresszsYd84 = accounts[4]
		const uint256uJmvwtE = await TimeMinerorboto6.totalSupply.call({from: accounts[4]});
//		const uint256F89u1AY = await TimeMinerorboto6.allInfoFor.call(addressTLlehK4, {from: accounts[2]});
//		const uint256bIEXDmW = await TimeMinerorboto6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256StKKpj = await TimeMinerorboto6.balanceOfTokenCirculation.call(addresswV1XWo7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhBcOBfR = await TimeMinerorboto6.approve.call(addresshkh7VZC, uintN0DJfC, {from: accounts[2]});
//		await TimeMinerorboto6.preSaleFinished.call({from: accounts[0]});
//		const booly8AabWp = await TimeMinerorboto6.transfer.call(addresszsYd84, uintE49KEv, {from: accounts[0]});

		assert.equal(uint256uJmvwtE, BigInt("24000000"))
		await expect(TimeMinerorboto6.allInfoFor.call(addressTLlehK4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMdamVb7 = await TimeMiner.new({from: accounts[2]});
		const addressQdMwJok = accounts[2]
		const addressiLK0RGU = accounts[1]
		const uintnXyxpB3 = BigInt("1047")
		const addressWHV00RQ = accounts[0]
		const boolWQ1YGRd = false
		const addressGGdQlyi = "0x0000000000000000000000000000000000000001"
		const boollJWRUVL = false
		const uintKqNR70 = BigInt("448")
		const uintl2HU45G = BigInt("610")
		const uintwus9FlQ = BigInt("1135")
		const uintiwiwTXD = BigInt("636")
		const uint256TL8h31n = await TimeMinerMdamVb7.allowance.call(addressiLK0RGU, addressQdMwJok, {from: accounts[4]});
		const boolsngj3e2 = await TimeMinerMdamVb7.transfer.call(addressWHV00RQ, uintnXyxpB3, {from: accounts[2]});
//		const addressqS987RJ = await TimeMinerMdamVb7.whitelist.call(addressGGdQlyi, boolWQ1YGRd, {from: accounts[1]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[5]});
//		const boolnxIwhPL = await TimeMinerMdamVb7.setStableCoinSystem.call(boollJWRUVL, {from: accounts[1]});
//		const uint256hGY4Jf = await TimeMinerMdamVb7.setPrizeFromNewAddress.call(uintl2HU45G, uintKqNR70, {from: accounts[5]});
//		const uint256KlZxyCm = await TimeMinerMdamVb7.setPrizeFromNewAddress.call(uintiwiwTXD, uintwus9FlQ, {from: accounts[4]});
//		const booljzWJQvG = await TimeMinerMdamVb7.infoStableSystem.call({from: accounts[2]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[1]});

		assert.equal(boolsngj3e2, true)
		assert.equal(uint256TL8h31n, BigInt("0"))
		await expect(TimeMinerMdamVb7.whitelist.call(addressGGdQlyi, boolWQ1YGRd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMdamVb7 = await TimeMiner.new({from: accounts[2]});
		const addressEMVThoq = accounts[2]
		const addressLKUO6nG = accounts[1]
		const addressnNy7HOu = accounts[4]
		const boollJWRUVL = false
		const uintwG3lGmD = BigInt("1135")
		const uintJJaiQSA = BigInt("636")
		const uint256TL8h31n = await TimeMinerMdamVb7.allowance.call(addressLKUO6nG, addressEMVThoq, {from: accounts[4]});
		const boolqj0EZ3o = await TimeMinerMdamVb7.infoStableSystem.call({from: accounts[4]});
//		const uint256cNglTEo = await TimeMinerMdamVb7.tokensToClaim.call(addressnNy7HOu, {from: accounts[0]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[5]});
//		const boolnxIwhPL = await TimeMinerMdamVb7.setStableCoinSystem.call(boollJWRUVL, {from: accounts[1]});
//		const uint256KlZxyCm = await TimeMinerMdamVb7.setPrizeFromNewAddress.call(uintJJaiQSA, uintwG3lGmD, {from: accounts[4]});
//		await TimeMinerMdamVb7.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint256TL8h31n, BigInt("0"))
		await expect(TimeMinerMdamVb7.tokensToClaim.call(addressnNy7HOu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerIr4sxq = await TimeMiner.new({from: accounts[2]});
		const addressj1DOmJ8 = accounts[3]
		const addressW3IRpx7 = accounts[4]
		const boolSgLVJLE = false
		const addressryaiY8V = accounts[5]
		const addressXXWp3ho = accounts[4]
		const uintTJOaoU = BigInt("1560")
		const addressMAw9Cpj = accounts[4]
		const uintilppgSo = BigInt("284")
		const addressGZjDIZt = accounts[0]
		const uint256pOl5rrR = await TimeMinerIr4sxq.balanceOf.call(addressj1DOmJ8, {from: accounts[1]});
		const boolkvrDkzT = await TimeMinerIr4sxq.isWhitelisted.call(addressW3IRpx7, {from: accounts[1]});
		const address3rDMNR = await TimeMinerIr4sxq.whitelist.call(addressryaiY8V, boolSgLVJLE, {from: accounts[2]});
//		const uint256XacH12B = await TimeMinerIr4sxq.tokensToClaim.call(addressXXWp3ho, {from: accounts[3]});
//		const boolGHXnoDh = await TimeMinerIr4sxq.transfer.call(addressMAw9Cpj, uintTJOaoU, {from: accounts[5]});
//		const boolkcUeIaG = await TimeMinerIr4sxq.approve.call(addressGZjDIZt, uintilppgSo, {from: accounts[4]});

		assert.equal(boolkvrDkzT, false)
		assert.equal(uint256pOl5rrR, BigInt("0"))
		await expect(TimeMinerIr4sxq.tokensToClaim.call(addressXXWp3ho, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineraEEQBtJ = await TimeMiner.new({from: accounts[1]});
		const addressR2ic6eM = accounts[4]
		const uintQEf55IP = BigInt("6")
		const addresslaEpSDg = accounts[1]
		const addressuqfoxzR = accounts[3]
		const uintx76sD9O = BigInt("557")
		const addressZncLZuI = accounts[3]
		const uint256uZcy1x = await TimeMineraEEQBtJ.balanceOfTokenCirculation.call(addressR2ic6eM, {from: accounts[4]});
		const boolxe1jROb = await TimeMineraEEQBtJ.transfer.call(addresslaEpSDg, uintQEf55IP, {from: accounts[1]});
		const uint256GTkWvlW = await TimeMineraEEQBtJ.balanceOf.call(addressuqfoxzR, {from: accounts[3]});
		const boolt0c7Ngq = await TimeMineraEEQBtJ.approve.call(addressZncLZuI, uintx76sD9O, {from: accounts[2]});

		assert.equal(boolt0c7Ngq, true)
		assert.equal(boolxe1jROb, true)
		assert.equal(uint256GTkWvlW, BigInt("0"))
		assert.equal(uint256uZcy1x, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzpEVVkb = await TimeMiner.new({from: accounts[4]});
		const addresstniWECj = accounts[3]
		const uintWZiXf9Y = BigInt("423")
		const addressBOFBuaS = accounts[3]
		const addressd81N8a3 = accounts[2]
		const uint256GCXOrPz = await TimeMinerzpEVVkb.balanceOf.call(addresstniWECj, {from: accounts[5]});
//		const boolWHMXyro = await TimeMinerzpEVVkb.transferFrom.call(addressd81N8a3, addressBOFBuaS, uintWZiXf9Y, {from: accounts[1]});

		assert.equal(uint256GCXOrPz, BigInt("0"))
		await expect(TimeMinerzpEVVkb.transferFrom.call(addressd81N8a3, addressBOFBuaS, uintWZiXf9Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})