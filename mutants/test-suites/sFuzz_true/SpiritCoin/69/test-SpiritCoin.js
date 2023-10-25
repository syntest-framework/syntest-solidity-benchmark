const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressNeWkOno = accounts[2]
		const addressWFDCz72 = "0x0000000000000000000000000000000000000001"
		const SpiritCoinebdG0u = await SpiritCoin.new(addressNeWkOno, addressWFDCz72, {from: accounts[3]});
		const addressqfYAG1T = accounts[3]
		const addressik3DAkc = accounts[0]
		const addressEFOy9X9 = accounts[4]
		const addressFoGEom = accounts[4]
		const uintYV80jN = await SpiritCoinebdG0u.allowance.call(addressik3DAkc, addressqfYAG1T, {from: "0x0000000000000000000000000000000000000001"});
		const uintJXkwC6Y = await SpiritCoinebdG0u.allowance.call(addressFoGEom, addressEFOy9X9, {from: accounts[1]});

		assert.equal(uintJXkwC6Y, BigInt("0"))
		assert.equal(uintYV80jN, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressdHv3ibc = accounts[1]
		const addressfGMBoqx = accounts[4]
		const SpiritCoinnWzSt6U = await SpiritCoin.new(addressdHv3ibc, addressfGMBoqx, {from: accounts[0]});
		const uintRjNbKUl = BigInt("1526")
		const addressO3Oz4II = accounts[4]
		const uintpyCBUrU = BigInt("329")
		const addressiWq9KcH = accounts[4]
		const uintrChnLB = BigInt("1993")
		const addressvOlcgod = accounts[5]
		const addressp60ygQP = accounts[2]
		const addressc6RRix = accounts[4]
		const addresscpopTec = accounts[3]
		const addressehiytA2 = accounts[0]
//		const addressfEb9lBR = await SpiritCoinnWzSt6U.mint.call(addressO3Oz4II, uintRjNbKUl, {from: accounts[1]});
//		const boolMaIIYhI = await SpiritCoinnWzSt6U.approve.call(addressiWq9KcH, uintpyCBUrU, {from: accounts[4]});
//		const boolV7uWFwS = await SpiritCoinnWzSt6U.transferFrom.call(addressp60ygQP, addressvOlcgod, uintrChnLB, {from: accounts[2]});
//		const addressXi0tTt4 = await SpiritCoinnWzSt6U.setMinter.call(addressc6RRix, {from: accounts[3]});
//		const uintNwDTv52 = await SpiritCoinnWzSt6U.allowance.call(addressehiytA2, addresscpopTec, {from: accounts[1]});

		await expect(SpiritCoinnWzSt6U.mint.call(addressO3Oz4II, uintRjNbKUl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressHTLIWPE = accounts[1]
		const addressBQiR6te = accounts[2]
		const SpiritCoinDbTPsFX = await SpiritCoin.new(addressHTLIWPE, addressBQiR6te, {from: accounts[5]});
		const uintpUN0fex = BigInt("2045")
		const addresskVh51UJ = accounts[1]
		const addresslkTo4xc = accounts[4]
		const boolFensFE = await SpiritCoinDbTPsFX.approve.call(addresskVh51UJ, uintpUN0fex, {from: accounts[1]});
		const uintFSKpEzz = await SpiritCoinDbTPsFX.balanceOf.call(addresslkTo4xc, {from: accounts[2]});

		assert.equal(boolFensFE, true)
		assert.equal(uintFSKpEzz, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressXGQFbjU = accounts[0]
		const addressWaHzYp = accounts[1]
		const SpiritCoinpRe16nL = await SpiritCoin.new(addressXGQFbjU, addressWaHzYp, {from: accounts[1]});
		const uintoXu1gi = BigInt("1637")
		const addressVuGyrBt = accounts[2]
		const uintm6nIz4I = BigInt("1988")
		const addressa1lSDvd = accounts[3]
		const addressxPmwbe = accounts[1]
		const uintGWz0c62 = BigInt("1043")
		const addressR8mCAPM = accounts[5]
		const boolij2f6i = await SpiritCoinpRe16nL.transfer.call(addressVuGyrBt, uintoXu1gi, {from: accounts[0]});
//		const boolQCBk73 = await SpiritCoinpRe16nL.transferFrom.call(addressxPmwbe, addressa1lSDvd, uintm6nIz4I, {from: accounts[0]});
//		const addressDNxdP9n = await SpiritCoinpRe16nL.mint.call(addressR8mCAPM, uintGWz0c62, {from: accounts[4]});

		assert.equal(boolij2f6i, true)
		await expect(SpiritCoinpRe16nL.transferFrom.call(addressxPmwbe, addressa1lSDvd, uintm6nIz4I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressrwnIZ7Y = accounts[2]
		const addressEMwDRAH = accounts[2]
		const SpiritCoinGxChTuF = await SpiritCoin.new(addressrwnIZ7Y, addressEMwDRAH, {from: accounts[3]});
		const uintsavVAtl = BigInt("1926")
		const addressCQFuSE6 = accounts[0]
		const addressVRRaruj = accounts[3]
		const uinta2RKq5u = BigInt("637")
		const addressbKs8UyZ = accounts[3]
		const uintruGVWvs = BigInt("20")
		const addresswZkdm4P = accounts[5]
		const addressfx39AxC = accounts[2]
//		const bool4Z14kx = await SpiritCoinGxChTuF.transfer.call(addressCQFuSE6, uintsavVAtl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintg9mjMn1 = await SpiritCoinGxChTuF.balanceOf.call(addressVRRaruj, {from: accounts[5]});
//		const boolLqparGF = await SpiritCoinGxChTuF.transfer.call(addressbKs8UyZ, uinta2RKq5u, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPCUFYGz = await SpiritCoinGxChTuF.transferFrom.call(addressfx39AxC, addresswZkdm4P, uintruGVWvs, {from: accounts[1]});

		await expect(SpiritCoinGxChTuF.transfer.call(addressCQFuSE6, uintsavVAtl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressq79gNIa = accounts[2]
		const addressMiEhpIi = "0x0000000000000000000000000000000000000001"
		const SpiritCoing8NTRt6 = await SpiritCoin.new(addressq79gNIa, addressMiEhpIi, {from: accounts[3]});
		const uint6DDC4G = BigInt("935")
		const addressBFXxSz = "0x0000000000000000000000000000000000000001"
		const addressNEGzMKF = accounts[0]
		const addresswhGTFSx = accounts[1]
		const addresswzXP1A9 = "0x0000000000000000000000000000000000000001"
		const uintkRcWS9 = BigInt("584")
		const addressFC3vYP9 = accounts[0]
		const addressRdM36kp = accounts[2]
		const addressNML7ODS = accounts[0]
		const boolda40s5m = await SpiritCoing8NTRt6.approve.call(addressBFXxSz, uint6DDC4G, {from: accounts[2]});
		const uintrJhRFtY = await SpiritCoing8NTRt6.allowance.call(addresswhGTFSx, addressNEGzMKF, {from: accounts[5]});
//		const addressGnVzkL = await SpiritCoing8NTRt6.setMinter.call(addresswzXP1A9, {from: accounts[5]});
//		const boolyMzSza7 = await SpiritCoing8NTRt6.approve.call(addressFC3vYP9, uintkRcWS9, {from: accounts[4]});
//		const uintuMRKYJm = await SpiritCoing8NTRt6.allowance.call(addressNML7ODS, addressRdM36kp, {from: accounts[0]});

		assert.equal(boolda40s5m, true)
		assert.equal(uintrJhRFtY, BigInt("0"))
		await expect(SpiritCoing8NTRt6.setMinter.call(addresswzXP1A9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressDAB5Fu3 = accounts[2]
		const addressgmp3mnR = accounts[3]
		const SpiritCoinJwooztL = await SpiritCoin.new(addressDAB5Fu3, addressgmp3mnR, {from: accounts[0]});
		const addressyh4PXWl = accounts[0]
		const addressGuv9ua = "0x0000000000000000000000000000000000000001"
		const uinttHrRMg = BigInt("245")
		const addressJsaOZY8 = accounts[4]
		const uintsTq8kmc = BigInt("296")
		const address3kKESB = accounts[1]
		const uintOlneTu7 = await SpiritCoinJwooztL.balanceOf.call(addressyh4PXWl, {from: accounts[1]});
		const addressbfA1TLd = await SpiritCoinJwooztL.setMinter.call(addressGuv9ua, {from: accounts[3]});
		const boolXJ5EoCi = await SpiritCoinJwooztL.approve.call(addressJsaOZY8, uinttHrRMg, {from: accounts[2]});
		const addresscQfTLhl = await SpiritCoinJwooztL.mint.call(address3kKESB, uintsTq8kmc, {from: accounts[3]});

		assert.equal(boolXJ5EoCi, true)
		assert.equal(uintOlneTu7, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressCA4EH88 = accounts[4]
		const addressqCfTV2X = accounts[5]
		const SpiritCoinGAJeDfv = await SpiritCoin.new(addressCA4EH88, addressqCfTV2X, {from: "0x0000000000000000000000000000000000000001"});
		const addressBVoLDhQ = accounts[0]
		const addressvox2clR = accounts[0]
		const uintDvEqCa1 = BigInt("1618")
		const addresszmjhuC = accounts[0]
		const addressdUjXQtv = accounts[0]
		const addressvpswU7h = await SpiritCoinGAJeDfv.setMinter.call(addressBVoLDhQ, {from: accounts[5]});
		const uintglzCqiS = await SpiritCoinGAJeDfv.balanceOf.call(addressvox2clR, {from: accounts[4]});
		const boolSn9NEDF = await SpiritCoinGAJeDfv.transferFrom.call(addressdUjXQtv, addresszmjhuC, uintDvEqCa1, {from: accounts[3]});
	});
})