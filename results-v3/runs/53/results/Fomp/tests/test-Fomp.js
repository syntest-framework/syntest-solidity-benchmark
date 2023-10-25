const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressqQzKXqX = accounts[5]
		const FompeB8V7ty = await Fomp.new(addressqQzKXqX, {from: accounts[1]});
		const uintVPSsEm4 = BigInt("11")
		const addressAhXuIRJ = accounts[3]
		const addressoWbaepp = "0x0000000000000000000000000000000000000001"
		const uint96zX1mHli = await FompeB8V7ty.getPriorVotes.call(addressAhXuIRJ, uintVPSsEm4, {from: "0x0000000000000000000000000000000000000001"});
		const addressL8U0sQf = await FompeB8V7ty.delegate.call(addressoWbaepp, {from: accounts[5]});

		assert.equal(uint96zX1mHli, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressT5rv0g = accounts[3]
		const FompKDnbpbG = await Fomp.new(addressT5rv0g, {from: accounts[4]});
		const addresswQc7Nae = accounts[4]
		const addressQsyDemK = accounts[3]
		const uintnHiilgC = BigInt("430")
		const addressRCZgA6 = accounts[3]
		const uintYpphsyS = BigInt("20")
		const addressIgAJ4I = accounts[4]
		const addresskWztnwd = await FompKDnbpbG.delegate.call(addresswQc7Nae, {from: accounts[0]});
		const addressw3dZdIA = await FompKDnbpbG.delegate.call(addressQsyDemK, {from: accounts[0]});
		const boolSH32p14 = await FompKDnbpbG.transfer.call(addressRCZgA6, uintnHiilgC, {from: accounts[0]});
		const boolIZaC9FZ = await FompKDnbpbG.approve.call(addressIgAJ4I, uintYpphsyS, {from: accounts[3]});

		await expect(FompKDnbpbG.transfer.call(addressRCZgA6, uintnHiilgC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFJnb17H = accounts[2]
		const FompuJLZk0Q = await Fomp.new(addressFJnb17H, {from: accounts[2]});
		const addressOosJTB = accounts[1]
		const uintQXWruhi = BigInt("206")
		const addressHgFKCvI = accounts[2]
		const uintYqX5fy = BigInt("792")
		const addressEP4xdFU = accounts[3]
		const addressDr172Ph = accounts[3]
		const uintO5UduR = BigInt("606")
		const addressRECY9H6 = accounts[4]
		const addresssq4PBQc = accounts[2]
		const uint96BpXyD7 = await FompuJLZk0Q.getCurrentVotes.call(addressOosJTB, {from: accounts[1]});
		const boolKJFsFzt = await FompuJLZk0Q.transfer.call(addressHgFKCvI, uintQXWruhi, {from: accounts[4]});
		const uint96X5DekRO = await FompuJLZk0Q.getPriorVotes.call(addressEP4xdFU, uintYqX5fy, {from: "0x0000000000000000000000000000000000000001"});
		const uint96HV6nSkn = await FompuJLZk0Q.getCurrentVotes.call(addressDr172Ph, {from: accounts[5]});
		const uint96NPC2RRl = await FompuJLZk0Q.getPriorVotes.call(addressRECY9H6, uintO5UduR, {from: accounts[4]});
		const uint96maUPBrJ = await FompuJLZk0Q.getCurrentVotes.call(addresssq4PBQc, {from: accounts[3]});

		assert.equal(uint96BpXyD7, BigInt("0"))
		await expect(FompuJLZk0Q.transfer.call(addressHgFKCvI, uintQXWruhi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresso22EU8 = accounts[3]
		const Fompi9b8Hfj = await Fomp.new(addresso22EU8, {from: accounts[0]});
		const uintcjiIMdt = BigInt("809")
		const addressj7g1BMm = accounts[0]
		const uintX651t00 = BigInt("773")
		const addresseRHYtkM = accounts[0]
		const uintXirBrb = BigInt("1644")
		const addressaOi1Fkm = accounts[1]
		const addressrYxLjuy = accounts[3]
		const uintT3wArN1 = BigInt("1142")
		const addressgSxcS3T = accounts[2]
		const uintCAuyEt = BigInt("1230")
		const addressanJ9cAP = accounts[1]
		const boolJ6RcWK = await Fompi9b8Hfj.approve.call(addressj7g1BMm, uintcjiIMdt, {from: accounts[1]});
		const boolhZ9nI4G = await Fompi9b8Hfj.transfer.call(addresseRHYtkM, uintX651t00, {from: accounts[0]});
		const booljS5Htbx = await Fompi9b8Hfj.transferFrom.call(addressrYxLjuy, addressaOi1Fkm, uintXirBrb, {from: accounts[2]});
		const boolvGaIfna = await Fompi9b8Hfj.approve.call(addressgSxcS3T, uintT3wArN1, {from: accounts[4]});
		const booltWXsHI = await Fompi9b8Hfj.approve.call(addressanJ9cAP, uintCAuyEt, {from: accounts[2]});

		assert.equal(boolJ6RcWK, true)
		await expect(Fompi9b8Hfj.transfer.call(addresseRHYtkM, uintX651t00, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresstZG6LCO = accounts[0]
		const FompQsF3AZ5 = await Fomp.new(addresstZG6LCO, {from: accounts[3]});
		const addressa6fg926 = accounts[3]
		const addressBB455ah = accounts[1]
		const addressWJ71utx = accounts[1]
		const uintAPdzFhT = BigInt("1439")
		const addressptpFTo = "0x0000000000000000000000000000000000000001"
		const byteeswPQA = "0x1c161d190607130f180710122006081b0900030606101d02091f0b130c1c1100"
		const byteQtS0Ck2 = "0x190513110a1b0507150a1f1d0005081f1f15111c0a1e00151e1f141412191e19"
		const uintZh3lHzS = BigInt("159")
		const uinteyqWkYR = BigInt("2011")
		const uintRp6MCm4 = BigInt("427")
		const addressEXuw9ky = accounts[5]
		const addressGFHITIc = await FompQsF3AZ5.delegate.call(addressa6fg926, {from: accounts[0]});
		const uintU4ZQ65j = await FompQsF3AZ5.allowance.call(addressWJ71utx, addressBB455ah, {from: accounts[4]});
		const boolOZM78Bp = await FompQsF3AZ5.transfer.call(addressptpFTo, uintAPdzFhT, {from: accounts[1]});
		const addressR22F4HG = await FompQsF3AZ5.delegateBySig.call(addressEXuw9ky, uintRp6MCm4, uinteyqWkYR, uintZh3lHzS, byteQtS0Ck2, byteeswPQA, {from: accounts[3]});

		assert.equal(uintU4ZQ65j, BigInt("0"))
		await expect(FompQsF3AZ5.transfer.call(addressptpFTo, uintAPdzFhT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressgP4uwni = accounts[2]
		const Fompyf9pV3C = await Fomp.new(addressgP4uwni, {from: accounts[5]});
		const uintst2ZdQ = BigInt("1302")
		const addressjr60Awg = accounts[4]
		const uintuSjZvJx = BigInt("1647")
		const addressUI3ouX = accounts[0]
		const addresscExi58V = accounts[2]
		const bytelFlNwJS = "0x1704091911131704151a0803090f0e1401061f01120c16161800110d1c021908"
		const bytecOmcP0i = "0x190d1c1b0d070500130b1f041e0b090e170a141b101b1c1b1c090c1514130c0d"
		const uintTVcrvL1 = BigInt("70")
		const uintoBzDLZb = BigInt("547")
		const uinthfCXFQn = BigInt("475")
		const addressrDIb4N5 = accounts[3]
		const uintTmj46FY = BigInt("1332")
		const addressmF88lCQ = accounts[4]
		const addresskkO6o3M = accounts[1]
		const addresshpgqrCT = accounts[0]
		const boolSI4PPvR = await Fompyf9pV3C.approve.call(addressjr60Awg, uintst2ZdQ, {from: accounts[4]});
		const booltCiTARb = await Fompyf9pV3C.transferFrom.call(addresscExi58V, addressUI3ouX, uintuSjZvJx, {from: accounts[1]});
		const addressx9deLY6 = await Fompyf9pV3C.delegateBySig.call(addressrDIb4N5, uinthfCXFQn, uintoBzDLZb, uintTVcrvL1, bytecOmcP0i, bytelFlNwJS, {from: accounts[0]});
		const boolqowld1n = await Fompyf9pV3C.transferFrom.call(addresskkO6o3M, addressmF88lCQ, uintTmj46FY, {from: "0x0000000000000000000000000000000000000001"});
		const uintzmlmpkV = await Fompyf9pV3C.balanceOf.call(addresshpgqrCT, {from: accounts[3]});

		assert.equal(boolSI4PPvR, true)
		await expect(Fompyf9pV3C.transferFrom.call(addresscExi58V, addressUI3ouX, uintuSjZvJx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressSV2h2g = accounts[3]
		const FompZhVVUo5 = await Fomp.new(addressSV2h2g, {from: accounts[4]});
		const addressBfdCMp0 = accounts[3]
		const addressZOHm5ju = accounts[5]
		const bytejv6lWwc = "0x0409100114100a1e181c02050d1a0e1e00121e05130b05080c0304011c060204"
		const byteIQaOn9 = "0x0f1f0f1a0e011f09030c16201308041a141a180c0c18020a13011204151b1d15"
		const uintTWntBxa = BigInt("9")
		const uintE0wMT74 = BigInt("867")
		const uintI7YBcc9 = BigInt("889")
		const addressWFCeW5 = accounts[4]
		const uintNAi3vrz = BigInt("72")
		const addressF70AaA8 = accounts[1]
		const addressfM6enG = accounts[2]
		const uintFTzGUm7 = await FompZhVVUo5.allowance.call(addressZOHm5ju, addressBfdCMp0, {from: accounts[1]});
		const addressutoCzR = await FompZhVVUo5.delegateBySig.call(addressWFCeW5, uintI7YBcc9, uintE0wMT74, uintTWntBxa, byteIQaOn9, bytejv6lWwc, {from: accounts[2]});
		const booldWS6o2 = await FompZhVVUo5.approve.call(addressF70AaA8, uintNAi3vrz, {from: accounts[2]});
		const addressu4ogB61 = await FompZhVVUo5.delegate.call(addressfM6enG, {from: accounts[3]});

		assert.equal(uintFTzGUm7, BigInt("0"))
		await expect(FompZhVVUo5.delegateBySig.call(addressWFCeW5, uintI7YBcc9, uintE0wMT74, uintTWntBxa, byteIQaOn9, bytejv6lWwc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressrPwvMWX = accounts[5]
		const FompeB8V7ty = await Fomp.new(addressrPwvMWX, {from: accounts[1]});
		const addressTkmVZ6v = accounts[3]
		const uintIZqg9YW = BigInt("11")
		const addressUOfUS3F = accounts[3]
		const addressfjGmkbm = await FompeB8V7ty.delegate.call(addressTkmVZ6v, {from: accounts[3]});
		const uint96zX1mHli = await FompeB8V7ty.getPriorVotes.call(addressUOfUS3F, uintIZqg9YW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96zX1mHli, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressCPHaOSb = accounts[5]
		const FompeB8V7ty = await Fomp.new(addressCPHaOSb, {from: accounts[1]});
		const addresszHkYof = accounts[3]
		const uintPK3CKOW = BigInt("11")
		const addresspJu302e = accounts[3]
		const addressixl1DuH = "0x0000000000000000000000000000000000000001"
		const uintXE91Fna = BigInt("23")
		const addressEmRh0Qx = accounts[5]
		const addressfjGmkbm = await FompeB8V7ty.delegate.call(addresszHkYof, {from: accounts[3]});
		const uint96zX1mHli = await FompeB8V7ty.getPriorVotes.call(addresspJu302e, uintPK3CKOW, {from: "0x0000000000000000000000000000000000000001"});
		const uintynwmiSV = await FompeB8V7ty.balanceOf.call(addressixl1DuH, {from: accounts[2]});
		const uint96hg4jM9T = await FompeB8V7ty.getPriorVotes.call(addressEmRh0Qx, uintXE91Fna, {from: accounts[3]});

		assert.equal(uint96hg4jM9T, BigInt("0"))
		assert.equal(uint96zX1mHli, BigInt("0"))
		assert.equal(uintynwmiSV, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressY5t3H32 = accounts[0]
		const FompQsF3AZ5 = await Fomp.new(addressY5t3H32, {from: accounts[3]});
		const addressPtmnHbe = accounts[0]
		const addressGz40rHR = accounts[2]
		const uintgRr1upu = BigInt("1690")
		const addresskB5A3xf = "0x0000000000000000000000000000000000000001"
		const addressG0W7HXX = accounts[0]
		const uintwvY3ihb = BigInt("1439")
		const addressmh7EHJG = "0x0000000000000000000000000000000000000001"
		const bytemaDUPgb = "0x1c161d190607130f180710122006081b0900030606101d02091f0b130c1c1100"
		const byteSyJVYJt = "0x190513110a1b0507150a1f1d0005081f1f15111c0a1e00151e1f141412191e19"
		const uintA0prY5f = BigInt("159")
		const uintPXHeYt4 = BigInt("2011")
		const uintO1HoYr = BigInt("427")
		const addressU8denyZ = accounts[3]
		const uintU4ZQ65j = await FompQsF3AZ5.allowance.call(addressGz40rHR, addressPtmnHbe, {from: accounts[4]});
		const boolce1k5n = await FompQsF3AZ5.transfer.call(addresskB5A3xf, uintgRr1upu, {from: accounts[0]});
		const uint961RVY1C = await FompQsF3AZ5.getCurrentVotes.call(addressG0W7HXX, {from: accounts[3]});
		const boolOZM78Bp = await FompQsF3AZ5.transfer.call(addressmh7EHJG, uintwvY3ihb, {from: accounts[1]});
		const addressR22F4HG = await FompQsF3AZ5.delegateBySig.call(addressU8denyZ, uintO1HoYr, uintPXHeYt4, uintA0prY5f, byteSyJVYJt, bytemaDUPgb, {from: accounts[3]});

		assert.equal(boolce1k5n, true)
		assert.equal(uint961RVY1C, BigInt("0"))
		assert.equal(uintU4ZQ65j, BigInt("0"))
		await expect(FompQsF3AZ5.transfer.call(addressmh7EHJG, uintwvY3ihb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresssSFmacW = accounts[1]
		const Fompim9BUnE = await Fomp.new(addresssSFmacW, {from: "0x0000000000000000000000000000000000000001"});
		const addressHtrRpH5 = accounts[0]
		const uintc56UkGE = BigInt("1945")
		const addressCjEIJqS = "0x0000000000000000000000000000000000000001"
		const uintaokSJh = BigInt("838")
		const addressHpNlwss = accounts[0]
		const addressBUwSPD = accounts[3]
		const addressQ1n4Ha = "0x0000000000000000000000000000000000000001"
		const uintYhfiCA = await Fompim9BUnE.balanceOf.call(addressHtrRpH5, {from: accounts[3]});
		const boolfGoPoVg = await Fompim9BUnE.approve.call(addressCjEIJqS, uintc56UkGE, {from: accounts[1]});
		const boolwBAy4CC = await Fompim9BUnE.approve.call(addressHpNlwss, uintaokSJh, {from: accounts[3]});
		const uint96DMVwN1Y = await Fompim9BUnE.getCurrentVotes.call(addressBUwSPD, {from: accounts[1]});
		const uint96cjBAcTr = await Fompim9BUnE.getCurrentVotes.call(addressQ1n4Ha, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addressBxUhA47 = accounts[5]
		const FompeB8V7ty = await Fomp.new(addressBxUhA47, {from: accounts[1]});
		const byteqkN9uDm = "0x1106081a110d0c13111c18150b0a0609031c1d1f0719141c171b1201111e101d"
		const byteBz8C5pU = "0x1c1400180a1f1a0314170319071f1d1206031311110b160216100514031c1701"
		const uintPJdZvV = BigInt("28")
		const uintMNRfuwg = BigInt("531")
		const uintxe6ckvj = BigInt("143")
		const addressVBz4km0 = accounts[3]
		const uintlNRGP25 = BigInt("6")
		const addressA6hijeM = accounts[6]
		const addressfp5yUN = await FompeB8V7ty.delegateBySig.call(addressVBz4km0, uintxe6ckvj, uintMNRfuwg, uintPJdZvV, byteBz8C5pU, byteqkN9uDm, {from: accounts[1]});
		const uint96zX1mHli = await FompeB8V7ty.getPriorVotes.call(addressA6hijeM, uintlNRGP25, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompeB8V7ty.delegateBySig.call(addressVBz4km0, uintxe6ckvj, uintMNRfuwg, uintPJdZvV, byteBz8C5pU, byteqkN9uDm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})