const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressvysqBFp = accounts[2]
		const FompfGZOkF = await Fomp.new(addressvysqBFp, {from: "0x0000000000000000000000000000000000000001"});
		const bytebsd6NMh = "0x12071a1a0d0e080a0b010c14021c031b18121b1705070c0e140c080d1c151f16"
		const byteYJao86R = "0x151a021e091519100701031c06190b070a14160c0d1b171c1a100f02170c020c"
		const uintm8bBbZU = BigInt("218")
		const uintzYgrBIP = BigInt("1149")
		const uintJYpg1Wl = BigInt("2023")
		const address3Tl7FC = accounts[2]
		const byteqaLLet = "0x011c091c010711190b0b19061a010c05150218090e0f0309181d110814131f12"
		const byteS5mKH5d = "0x010e010d041a08070c1a0101021809151d10110f1f0e02010e04180d040a1208"
		const uintACppeeD = BigInt("153")
		const uintgVC6CAc = BigInt("1959")
		const uintxTXcIV3 = BigInt("1763")
		const addressFzf2aMa = accounts[0]
		const uintXDJ6hz = BigInt("2021")
		const addressxOJgHvY = accounts[3]
		const addressC6Bfljz = accounts[4]
		const uintFjNkfPh = BigInt("74")
		const addressyr2bVW8 = accounts[2]
		const addressBlEEEE4 = accounts[2]
		const addressx3ZFV2R = await FompfGZOkF.delegateBySig.call(address3Tl7FC, uintJYpg1Wl, uintzYgrBIP, uintm8bBbZU, byteYJao86R, bytebsd6NMh, {from: accounts[4]});
		const addresspMKQVGL = await FompfGZOkF.delegateBySig.call(addressFzf2aMa, uintxTXcIV3, uintgVC6CAc, uintACppeeD, byteS5mKH5d, byteqaLLet, {from: accounts[3]});
		const boolXfeSHI0 = await FompfGZOkF.transferFrom.call(addressC6Bfljz, addressxOJgHvY, uintXDJ6hz, {from: accounts[5]});
		const boolO6KRj7b = await FompfGZOkF.approve.call(addressyr2bVW8, uintFjNkfPh, {from: "0x0000000000000000000000000000000000000001"});
		const addressAJhANAa = await FompfGZOkF.delegate.call(addressBlEEEE4, {from: accounts[0]});
	});

	it('test for Fomp', async () => {
		const addressVKbFAtf = accounts[2]
		const FompejFIw7S = await Fomp.new(addressVKbFAtf, {from: accounts[4]});
		const addressMoZX9Ly = accounts[3]
		const uintdWlAmYg = BigInt("1926")
		const addresswWDtwWW = accounts[0]
		const addressZvwL8UU = await FompejFIw7S.delegate.call(addressMoZX9Ly, {from: accounts[1]});
//		const uint96UAlwVvZ = await FompejFIw7S.getPriorVotes.call(addresswWDtwWW, uintdWlAmYg, {from: accounts[0]});

		await expect(FompejFIw7S.getPriorVotes.call(addresswWDtwWW, uintdWlAmYg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshcH2LUR = accounts[5]
		const FompcXtVsj = await Fomp.new(addresshcH2LUR, {from: accounts[4]});
		const uintwItE8UR = BigInt("1215")
		const addressKoanllz = accounts[4]
		const addresszGaSlhO = accounts[2]
		const addresskAvvPx0 = accounts[0]
		const uintaM3zuaQ = BigInt("173")
		const addressq2s2bqI = accounts[1]
		const addressJAA56IL = "0x0000000000000000000000000000000000000001"
//		const boolNrr6J7l = await FompcXtVsj.transfer.call(addressKoanllz, uintwItE8UR, {from: accounts[0]});
//		const addressaxYVSE3 = await FompcXtVsj.delegate.call(addresszGaSlhO, {from: accounts[1]});
//		const uintEOLaCl = await FompcXtVsj.balanceOf.call(addresskAvvPx0, {from: accounts[4]});
//		const boolFX2Okb8 = await FompcXtVsj.transferFrom.call(addressJAA56IL, addressq2s2bqI, uintaM3zuaQ, {from: accounts[0]});

		await expect(FompcXtVsj.transfer.call(addressKoanllz, uintwItE8UR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressp10UGj = accounts[3]
		const FompgbYZ4Wx = await Fomp.new(addressp10UGj, {from: accounts[2]});
		const addressCb7QqGa = accounts[2]
		const addressUOsjSfY = accounts[4]
		const byteDjY17Oq = "0x160a09081f151b12080b02091f1e03151514120d1f1b1905150a191808070d12"
		const byteP2PnTei = "0x0517181c1b09051a191c18131c090503131420151e1d13160a1a07031107000d"
		const uintkQkw7T8 = BigInt("50")
		const uintbeTtC8t = BigInt("982")
		const uintdOYX1fd = BigInt("1794")
		const addressCrgRBO6 = accounts[1]
		const uintA6vqdd5 = BigInt("395")
		const addressAprPLoM = accounts[3]
		const uintYnj4Bzd = await FompgbYZ4Wx.allowance.call(addressUOsjSfY, addressCb7QqGa, {from: accounts[2]});
//		const addresseO464Qi = await FompgbYZ4Wx.delegateBySig.call(addressCrgRBO6, uintdOYX1fd, uintbeTtC8t, uintkQkw7T8, byteP2PnTei, byteDjY17Oq, {from: accounts[4]});
//		const uint96riGCT7i = await FompgbYZ4Wx.getPriorVotes.call(addressAprPLoM, uintA6vqdd5, {from: accounts[5]});

		assert.equal(uintYnj4Bzd, BigInt("0"))
		await expect(FompgbYZ4Wx.delegateBySig.call(addressCrgRBO6, uintdOYX1fd, uintbeTtC8t, uintkQkw7T8, byteP2PnTei, byteDjY17Oq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresssiGMpEE = accounts[4]
		const FompK7C4FQ1 = await Fomp.new(addresssiGMpEE, {from: accounts[3]});
		const uintfKFJVF = BigInt("748")
		const addressm21EggG = accounts[4]
		const addressrHpVHFB = accounts[5]
		const addressyrKKLe = accounts[2]
		const uintUOTbt9 = BigInt("1120")
		const addressuPCRIR = accounts[0]
		const addressFBC9dAd = accounts[1]
//		const boolXCZYkbc = await FompK7C4FQ1.transferFrom.call(addressrHpVHFB, addressm21EggG, uintfKFJVF, {from: accounts[2]});
//		const uintNH7WHnC = await FompK7C4FQ1.balanceOf.call(addressyrKKLe, {from: accounts[0]});
//		const boolQhmhnT = await FompK7C4FQ1.transferFrom.call(addressFBC9dAd, addressuPCRIR, uintUOTbt9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompK7C4FQ1.transferFrom.call(addressrHpVHFB, addressm21EggG, uintfKFJVF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressIzqgM3h = "0x0000000000000000000000000000000000000001"
		const FompAyjqZ2d = await Fomp.new(addressIzqgM3h, {from: accounts[1]});
		const addressixbESyg = accounts[0]
		const addressypojneX = accounts[1]
		const addressMm1Vgn = accounts[4]
		const addressksdNnc3 = accounts[0]
		const uintWntukT = await FompAyjqZ2d.balanceOf.call(addressixbESyg, {from: accounts[2]});
		const addressbAb2I3E = await FompAyjqZ2d.delegate.call(addressypojneX, {from: accounts[0]});
		const uint96FQ4tjDy = await FompAyjqZ2d.getCurrentVotes.call(addressMm1Vgn, {from: accounts[3]});
		const uintLuFoB3i = await FompAyjqZ2d.balanceOf.call(addressksdNnc3, {from: accounts[3]});

		assert.equal(uint96FQ4tjDy, BigInt("0"))
		assert.equal(uintLuFoB3i, BigInt("0"))
		assert.equal(uintWntukT, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressC2cJZnJ = "0x0000000000000000000000000000000000000001"
		const FompAyjqZ2d = await Fomp.new(addressC2cJZnJ, {from: accounts[1]});
		const addressawbKvGu = accounts[0]
		const addressEEIZDII = accounts[6]
		const uintF1q0HOd = BigInt("1546")
		const addressC2zHPBE = accounts[0]
		const addressjdF3ag = accounts[4]
		const addressuV9xzKS = accounts[0]
		const uintWntukT = await FompAyjqZ2d.balanceOf.call(addressawbKvGu, {from: accounts[2]});
		const addressbAb2I3E = await FompAyjqZ2d.delegate.call(addressEEIZDII, {from: accounts[0]});
		const boolcOtcmll = await FompAyjqZ2d.approve.call(addressC2zHPBE, uintF1q0HOd, {from: accounts[5]});
		const uint96FQ4tjDy = await FompAyjqZ2d.getCurrentVotes.call(addressjdF3ag, {from: accounts[3]});
		const uintLuFoB3i = await FompAyjqZ2d.balanceOf.call(addressuV9xzKS, {from: accounts[3]});

		assert.equal(boolcOtcmll, true)
		assert.equal(uint96FQ4tjDy, BigInt("0"))
		assert.equal(uintLuFoB3i, BigInt("0"))
		assert.equal(uintWntukT, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressN5QXRv4 = accounts[2]
		const FompejFIw7S = await Fomp.new(addressN5QXRv4, {from: accounts[4]});
		const addressvuz1xA = accounts[0]
		const uintN5OovWF = BigInt("90")
		const addresslOKNBzs = accounts[4]
		const addressZvwL8UU = await FompejFIw7S.delegate.call(addressvuz1xA, {from: accounts[1]});
		const boolUyrhFwI = await FompejFIw7S.transfer.call(addresslOKNBzs, uintN5OovWF, {from: accounts[2]});

		assert.equal(boolUyrhFwI, true)
	});

	it('test for Fomp', async () => {
		const addressGCEYxqe = accounts[2]
		const FompejFIw7S = await Fomp.new(addressGCEYxqe, {from: accounts[4]});
		const addressngosLiN = accounts[3]
		const addressy5Uqu9A = "0x0000000000000000000000000000000000000001"
		const uinttQDemz6 = BigInt("1628")
		const addressdXpJC0M = accounts[0]
		const address8O4mLt = accounts[2]
		const uintasI8rLn = BigInt("1926")
		const address2D13xR = accounts[3]
		const addressZvwL8UU = await FompejFIw7S.delegate.call(addressngosLiN, {from: accounts[1]});
		const addresswCBLeTx = await FompejFIw7S.delegate.call(addressy5Uqu9A, {from: accounts[2]});
		const boolYZksFOI = await FompejFIw7S.approve.call(addressdXpJC0M, uinttQDemz6, {from: accounts[3]});
		const uintu6VH3SE = await FompejFIw7S.balanceOf.call(address8O4mLt, {from: accounts[5]});
//		const uint96UAlwVvZ = await FompejFIw7S.getPriorVotes.call(address2D13xR, uintasI8rLn, {from: accounts[0]});

		assert.equal(boolYZksFOI, true)
		assert.equal(uintu6VH3SE, BigInt("1000000000000000000000000"))
		await expect(FompejFIw7S.getPriorVotes.call(address2D13xR, uintasI8rLn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshCBDnaX = accounts[2]
		const FompejFIw7S = await Fomp.new(addresshCBDnaX, {from: accounts[4]});
		const addressQnjCkHk = "0x0000000000000000000000000000000000000001"
		const uinteEh4epc = BigInt("80")
		const addresskewhOHb = accounts[3]
		const addresseSR1dJP = accounts[4]
		const uintmNxJMBy = BigInt("249")
		const addressWKZOAaT = accounts[0]
		const byteXPVk9IZ = "0x031d0b0300141b1f0b06061a1c120a011b031b0e10151b0c0e1507060914110c"
		const bytecspTsd = "0x07170f091f1115101e15201e121d0c0c161510081d120f03160d15080c15171d"
		const uintBcVSZow = BigInt("114")
		const uintYm5A7h = BigInt("1935")
		const uintt40yiTI = BigInt("1459")
		const addressN5FAqEp = "0x0000000000000000000000000000000000000001"
		const uintrZ7LuI = BigInt("2010")
		const addressS4iF1cZ = accounts[2]
		const addressQwsqJfW = accounts[2]
		const addressfa3Xno = accounts[3]
		const addressGGjjTC2 = accounts[3]
		const addresss2g7gpF = accounts[0]
		const addressbUuLaxP = await FompejFIw7S.delegate.call(addressQnjCkHk, {from: accounts[2]});
		const boolJh1MUFn = await FompejFIw7S.approve.call(addresskewhOHb, uinteEh4epc, {from: accounts[0]});
		const addresskpgQfzU = await FompejFIw7S.delegate.call(addresseSR1dJP, {from: accounts[1]});
		const uint96WOMKmbw = await FompejFIw7S.getPriorVotes.call(addressWKZOAaT, uintmNxJMBy, {from: accounts[0]});
//		const addressRpvzkwo = await FompejFIw7S.delegateBySig.call(addressN5FAqEp, uintt40yiTI, uintYm5A7h, uintBcVSZow, bytecspTsd, byteXPVk9IZ, {from: accounts[5]});
//		const boolnuGMJYF = await FompejFIw7S.transferFrom.call(addressQwsqJfW, addressS4iF1cZ, uintrZ7LuI, {from: accounts[4]});
//		const uint4lXpEG = await FompejFIw7S.balanceOf.call(addressfa3Xno, {from: accounts[0]});
//		const uintmeRaT8k = await FompejFIw7S.allowance.call(addresss2g7gpF, addressGGjjTC2, {from: accounts[1]});

		assert.equal(boolJh1MUFn, true)
		assert.equal(uint96WOMKmbw, BigInt("0"))
		await expect(FompejFIw7S.delegateBySig.call(addressN5FAqEp, uintt40yiTI, uintYm5A7h, uintBcVSZow, bytecspTsd, byteXPVk9IZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})