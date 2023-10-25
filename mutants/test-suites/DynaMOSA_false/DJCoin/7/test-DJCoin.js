const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinmuaEX1 = await DJCoin.new({from: accounts[1]});
		const addressq6wcsfd = accounts[3]
		const uintswfu9YP = BigInt("550")
		const addressCr1Uef4 = accounts[3]
		const addresszGUUgh6 = accounts[1]
		const addressIe0CsTH = accounts[3]
		const uintf7qwsQp = BigInt("1908")
		const addressOD9Wyq = accounts[4]
		const addressPWJYkw = accounts[0]
//		const addressSJADvQ7 = await DJCoinmuaEX1.transferOwnership.call(addressq6wcsfd, {from: accounts[5]});
//		const boolxFnLJv6 = await DJCoinmuaEX1.transferFrom.call(addresszGUUgh6, addressCr1Uef4, uintswfu9YP, {from: accounts[2]});
//		await DJCoinmuaEX1.renounceOwnership.call({from: accounts[1]});
//		const uint256VIYLB2o = await DJCoinmuaEX1.balanceOf.call(addressIe0CsTH, {from: accounts[2]});
//		const boolLU3y7bj = await DJCoinmuaEX1.transferFrom.call(addressPWJYkw, addressOD9Wyq, uintf7qwsQp, {from: accounts[3]});
//		const uint256qqiGXpi = await DJCoinmuaEX1.totalSupply.call({from: accounts[3]});

		await expect(DJCoinmuaEX1.transferOwnership.call(addressq6wcsfd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindRsFGeD = await DJCoin.new({from: accounts[3]});
		const uintaCcSkQL = BigInt("7")
		const addressZRiatk9 = accounts[1]
//		await DJCoindRsFGeD.onlyOwner.call({from: accounts[3]});
//		const boola8TElY = await DJCoindRsFGeD.increaseAllowance.call(addressZRiatk9, uintaCcSkQL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoindRsFGeD.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoino5goZRc = await DJCoin.new({from: accounts[1]});
		const uintS9jspnj = BigInt("178")
		const addressqSmUhsY = accounts[5]
		const uintqOFS7Pl = BigInt("1296")
		const uintlac534G = BigInt("1188")
		const uintXxcLzWS = BigInt("1152")
		const addressft5V7bO = accounts[5]
		const boolmbo0CPt = await DJCoino5goZRc.increaseAllowance.call(addressqSmUhsY, uintS9jspnj, {from: accounts[2]});
//		const uint256WhuQEmT = await DJCoino5goZRc.burn.call(uintlac534G, uintqOFS7Pl, {from: accounts[0]});
//		const boolEiMGngf = await DJCoino5goZRc.approve.call(addressft5V7bO, uintXxcLzWS, {from: accounts[2]});

		assert.equal(boolmbo0CPt, true)
		await expect(DJCoino5goZRc.burn.call(uintlac534G, uintqOFS7Pl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinKoUIOdw = await DJCoin.new({from: accounts[4]});
		const uintLddAMjF = BigInt("845")
		const addresswePBE3A = accounts[3]
		const addressmfXDWfw = accounts[0]
		const booleS24WYy = await DJCoinKoUIOdw.approve.call(addresswePBE3A, uintLddAMjF, {from: accounts[2]});
		const uint256OmB8fl4 = await DJCoinKoUIOdw.balanceOf.call(addressmfXDWfw, {from: accounts[0]});
		const uint256DXOvqsb = await DJCoinKoUIOdw.totalSupply.call({from: accounts[3]});

		assert.equal(booleS24WYy, true)
		assert.equal(uint256DXOvqsb, BigInt("2100000000000"))
		assert.equal(uint256OmB8fl4, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoincWJRHvE = await DJCoin.new({from: accounts[0]});
		const uintLvscG34 = BigInt("192")
		const addressuxUlOP = accounts[1]
		const uintwlHKFkF = BigInt("1072")
		const addresswCU4Zup = "0x0000000000000000000000000000000000000001"
		const addressuipSiZ = accounts[4]
		const uintUpwqw6 = BigInt("832")
		const uintk2FFk3S = BigInt("735")
		const boolXedEnSx = await DJCoincWJRHvE.increaseAllowance.call(addressuxUlOP, uintLvscG34, {from: accounts[4]});
//		const booldZHbnRE = await DJCoincWJRHvE.transferFrom.call(addressuipSiZ, addresswCU4Zup, uintwlHKFkF, {from: accounts[2]});
//		const uint256WcroGZ = await DJCoincWJRHvE.burn.call(uintk2FFk3S, uintUpwqw6, {from: accounts[5]});

		assert.equal(boolXedEnSx, true)
		await expect(DJCoincWJRHvE.transferFrom.call(addressuipSiZ, addresswCU4Zup, uintwlHKFkF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmv0kXZi = await DJCoin.new({from: accounts[4]});
		const addressBBU53Qi = accounts[0]
		const addressqNBPV1B = accounts[5]
		const addressWJHQq8a = await DJCoinmv0kXZi.owner.call({from: accounts[1]});
//		const addressuXZcQf4 = await DJCoinmv0kXZi.transferOwnership.call(addressBBU53Qi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256IiuKHZ = await DJCoinmv0kXZi.balanceOf.call(addressqNBPV1B, {from: accounts[5]});
//		const uint256NVs9thG = await DJCoinmv0kXZi.totalSupply.call({from: accounts[0]});

		assert.equal(addressWJHQq8a, 0xE5f4BaB4C81793D085565FC830e6B0720516Ed39)
		await expect(DJCoinmv0kXZi.transferOwnership.call(addressBBU53Qi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoincWJRHvE = await DJCoin.new({from: accounts[0]});
		const uintVRBSbNq = BigInt("192")
		const addressogawOzC = accounts[1]
		const addresszcbrBZw = accounts[0]
		const addresscOBzLpO = accounts[0]
		const uintT0bXJ4J = BigInt("1072")
		const addressFWLGiCN = "0x0000000000000000000000000000000000000001"
		const addressjRgojFv = accounts[4]
		const uintbNlEEuB = BigInt("832")
		const uintMK3vC6m = BigInt("735")
		const uintwnPGKV5 = BigInt("692")
		const addressh556WUw = "0x0000000000000000000000000000000000000001"
		const addresseGQxi6n = accounts[3]
		const boolXedEnSx = await DJCoincWJRHvE.increaseAllowance.call(addressogawOzC, uintVRBSbNq, {from: accounts[4]});
		const uint256zhcBuRV = await DJCoincWJRHvE.totalSupply.call({from: accounts[4]});
		const uint256SuESeF = await DJCoincWJRHvE.allowance.call(addresscOBzLpO, addresszcbrBZw, {from: accounts[1]});
//		const booldZHbnRE = await DJCoincWJRHvE.transferFrom.call(addressjRgojFv, addressFWLGiCN, uintT0bXJ4J, {from: accounts[2]});
//		const uint256WcroGZ = await DJCoincWJRHvE.burn.call(uintMK3vC6m, uintbNlEEuB, {from: accounts[5]});
//		const boolOProtxx = await DJCoincWJRHvE.transferFrom.call(addresseGQxi6n, addressh556WUw, uintwnPGKV5, {from: accounts[3]});

		assert.equal(boolXedEnSx, true)
		assert.equal(uint256SuESeF, BigInt("0"))
		assert.equal(uint256zhcBuRV, BigInt("2100000000000"))
		await expect(DJCoincWJRHvE.transferFrom.call(addressjRgojFv, addressFWLGiCN, uintT0bXJ4J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMBKQ1Ks = await DJCoin.new({from: accounts[0]});
		const uintLBOm7cR = BigInt("1640")
		const addresskUo5k5j = accounts[0]
		const addressmFZa0OB = accounts[4]
//		const boolcXE8xpu = await DJCoinMBKQ1Ks.transfer.call(addresskUo5k5j, uintLBOm7cR, {from: accounts[1]});
//		const addressWuABrwv = await DJCoinMBKQ1Ks.transferOwnership.call(addressmFZa0OB, {from: accounts[1]});

		await expect(DJCoinMBKQ1Ks.transfer.call(addresskUo5k5j, uintLBOm7cR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinIV6yxy7 = await DJCoin.new({from: accounts[1]});
		const uintIruFeqI = BigInt("1912")
		const addressI7sZQVV = accounts[1]
		const addressNXR0iA = accounts[1]
		const addresssvl60B5 = accounts[5]
		const uintGDobnqb = BigInt("2038")
		const addressQvaGvH = accounts[2]
		const boolEAb60wF = await DJCoinIV6yxy7.decreaseAllowance.call(addressI7sZQVV, uintIruFeqI, {from: accounts[3]});
		const uint256AzpocUD = await DJCoinIV6yxy7.allowance.call(addresssvl60B5, addressNXR0iA, {from: accounts[2]});
		const uint256J78FTZB = await DJCoinIV6yxy7.totalSupply.call({from: accounts[0]});
		const boolvxv1056 = await DJCoinIV6yxy7.increaseAllowance.call(addressQvaGvH, uintGDobnqb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEAb60wF, true)
		assert.equal(boolvxv1056, true)
		assert.equal(uint256AzpocUD, BigInt("0"))
		assert.equal(uint256J78FTZB, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinaDsE1wS = await DJCoin.new({from: accounts[4]});
		const uintfF1L5au = BigInt("502")
		const addressYw1LhJx = accounts[0]
		const uintkgwEUCv = BigInt("1943")
		const uintj3hOIJ = BigInt("97")
		const addressS8SD5kY = accounts[4]
		const uintqMfTLzG = BigInt("1187")
		const addressKyDhcDk = accounts[5]
		const addresslig06cA = "0x0000000000000000000000000000000000000001"
		const addresstpKrTqO = accounts[0]
		const addressufQbX68 = accounts[2]
		const uintDKAZQyr = BigInt("794")
		const uintUURJYbu = BigInt("941")
		const addressHNYwTPi = accounts[0]
		const boolkgQCPkp = await DJCoinaDsE1wS.approve.call(addressYw1LhJx, uintfF1L5au, {from: accounts[2]});
		const boolBUiw5WC = await DJCoinaDsE1wS.changetokensPerBlock.call(uintkgwEUCv, {from: accounts[3]});
		const boolNv2XsKo = await DJCoinaDsE1wS.transfer.call(addressS8SD5kY, uintj3hOIJ, {from: accounts[4]});
//		const boolBL0VaDd = await DJCoinaDsE1wS.transferFrom.call(addresslig06cA, addressKyDhcDk, uintqMfTLzG, {from: accounts[3]});
//		const uint256XqmD6pH = await DJCoinaDsE1wS.balanceOf.call(addresstpKrTqO, {from: accounts[0]});
//		const uint256hSy7Kag = await DJCoinaDsE1wS.balanceOf.call(addressufQbX68, {from: accounts[4]});
//		const uint256yk5eaOr = await DJCoinaDsE1wS.burn.call(uintUURJYbu, uintDKAZQyr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256i64fgFb = await DJCoinaDsE1wS.balanceOf.call(addressHNYwTPi, {from: accounts[1]});

		assert.equal(boolBUiw5WC, true)
		assert.equal(boolNv2XsKo, true)
		assert.equal(boolkgQCPkp, true)
		await expect(DJCoinaDsE1wS.transferFrom.call(addresslig06cA, addressKyDhcDk, uintqMfTLzG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindRsFGeD = await DJCoin.new({from: accounts[3]});
		const uintkdopONL = BigInt("957")
		const addresseZsCWD5 = accounts[1]
//		await DJCoindRsFGeD.renounceOwnership.call({from: accounts[3]});
//		const boola8TElY = await DJCoindRsFGeD.increaseAllowance.call(addresseZsCWD5, uintkdopONL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoindRsFGeD.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmbW7IvT = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVV9tKHz = BigInt("1364")
		const address1vxaxA = accounts[5]
		const uintupYXd0L = BigInt("738")
		const uintbl76z5a = BigInt("1278")
		const uinty2H86qm = BigInt("1808")
		const addresssavmosd = accounts[1]
		const addressZsklnCg = accounts[4]
		const addresspZCv4lB = accounts[2]
		const bool8Ij8nH = await DJCoinmbW7IvT.increaseAllowance.call(address1vxaxA, uintVV9tKHz, {from: accounts[4]});
		const uint256GWqSAV = await DJCoinmbW7IvT.burn.call(uintbl76z5a, uintupYXd0L, {from: accounts[4]});
		const boolyvO1mJa = await DJCoinmbW7IvT.increaseAllowance.call(addresssavmosd, uinty2H86qm, {from: accounts[1]});
		await DJCoinmbW7IvT.onlyOwner.call({from: accounts[2]});
		const addressu259e9A = await DJCoinmbW7IvT.owner.call({from: accounts[0]});
		const uint256HtosCJY = await DJCoinmbW7IvT.allowance.call(addresspZCv4lB, addressZsklnCg, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinaDsE1wS = await DJCoin.new({from: accounts[4]});
		const uintohvaf1I = BigInt("97")
		const addresscZyILA = accounts[5]
		const addresswIcIMCf = accounts[0]
		const uintZiRKPn5 = BigInt("23")
		const addressp24yZrL = accounts[4]
		const uintmnzdAAH = BigInt("1424")
		const uintp4TYd7 = BigInt("606")
		const uinti7ZS0MJ = BigInt("1171")
		const addressABX8JBr = accounts[5]
		const addressUIq1jKD = "0x0000000000000000000000000000000000000001"
		const addressilkk6xo = accounts[3]
		const uintJZ0kcXE = BigInt("182")
		const addressS0dpUIW = accounts[5]
		const addressVzBzag9 = accounts[2]
		const uintJqfUn5D = BigInt("775")
		const uintkcdEn8G = BigInt("918")
		const addresspr0Lh4 = accounts[4]
		const address8WXU3R = await DJCoinaDsE1wS.owner.call({from: accounts[1]});
		const boolNv2XsKo = await DJCoinaDsE1wS.transfer.call(addresscZyILA, uintohvaf1I, {from: accounts[4]});
		const addresseOy22G = await DJCoinaDsE1wS.transferOwnership.call(addresswIcIMCf, {from: accounts[4]});
//		const booleItLsO = await DJCoinaDsE1wS.transfer.call(addressp24yZrL, uintZiRKPn5, {from: accounts[0]});
//		const uint256gTZbg66 = await DJCoinaDsE1wS.burn.call(uintp4TYd7, uintmnzdAAH, {from: accounts[2]});
//		const boolBL0VaDd = await DJCoinaDsE1wS.transferFrom.call(addressUIq1jKD, addressABX8JBr, uinti7ZS0MJ, {from: accounts[3]});
//		const addressjoZFiNC = await DJCoinaDsE1wS.validRecipient.call(addressilkk6xo, {from: accounts[3]});
//		const boolqEz0M91 = await DJCoinaDsE1wS.increaseAllowance.call(addressS0dpUIW, uintJZ0kcXE, {from: accounts[0]});
//		const uint256hSy7Kag = await DJCoinaDsE1wS.balanceOf.call(addressVzBzag9, {from: accounts[4]});
//		const addressDbzz3Gi = await DJCoinaDsE1wS.owner.call({from: accounts[1]});
//		const uint256yk5eaOr = await DJCoinaDsE1wS.burn.call(uintkcdEn8G, uintJqfUn5D, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKelmLU1 = await DJCoinaDsE1wS.transferOwnership.call(addresspr0Lh4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jZVc0jf = await DJCoinaDsE1wS.totalSupply.call({from: accounts[1]});

		assert.equal(address8WXU3R, 0xE5f4BaB4C81793D085565FC830e6B0720516Ed39)
		assert.equal(boolNv2XsKo, true)
		await expect(DJCoinaDsE1wS.transfer.call(addressp24yZrL, uintZiRKPn5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinJyVxz0Y = await DJCoin.new({from: accounts[0]});
		const uintxplX367 = BigInt("1163")
		const uintL6euPe = BigInt("811")
		const uintD6cw6xe = BigInt("1510")
		const addressrqwlu3G = accounts[2]
		const addressq6hf6b = accounts[3]
		const addressrifzFa = accounts[5]
		const uint256qLuIkhU = await DJCoinJyVxz0Y.burn.call(uintL6euPe, uintxplX367, {from: accounts[0]});
//		const boolx02MbJn = await DJCoinJyVxz0Y.transfer.call(addressrqwlu3G, uintD6cw6xe, {from: accounts[3]});
//		const uint256FS2JYBe = await DJCoinJyVxz0Y.allowance.call(addressrifzFa, addressq6hf6b, {from: accounts[5]});

		assert.equal(uint256qLuIkhU, BigInt("1855770000000"))
		await expect(DJCoinJyVxz0Y.transfer.call(addressrqwlu3G, uintD6cw6xe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinaDsE1wS = await DJCoin.new({from: accounts[4]});
		const uintzi5NmvJ = BigInt("110")
		const addressb8LBA3 = accounts[4]
		const uintjFytczW = BigInt("905")
		const addresshrj5enY = accounts[1]
		const uintxlxbwmZ = BigInt("0")
		const addressMdUVrUr = accounts[6]
		const uintt0NEF9J = BigInt("1171")
		const addressqrSErCt = accounts[5]
		const addressftUydqa = "0x0000000000000000000000000000000000000001"
		const uintSW1ZqM = BigInt("1605")
		const addressNBMQ3D3 = accounts[0]
		const uintQ6oZLer = BigInt("2036")
		const addressuQciXmx = accounts[0]
		const addressO3vudQb = accounts[4]
		const addressWGaYhkm = "0x0000000000000000000000000000000000000001"
		const addresssvzVTg = accounts[1]
		const boolNv2XsKo = await DJCoinaDsE1wS.transfer.call(addressb8LBA3, uintzi5NmvJ, {from: accounts[4]});
		const boolnNbD7K = await DJCoinaDsE1wS.approve.call(addresshrj5enY, uintjFytczW, {from: accounts[3]});
		const booleItLsO = await DJCoinaDsE1wS.transfer.call(addressMdUVrUr, uintxlxbwmZ, {from: accounts[0]});
//		const boolBL0VaDd = await DJCoinaDsE1wS.transferFrom.call(addressftUydqa, addressqrSErCt, uintt0NEF9J, {from: accounts[3]});
//		const boolOCVZOzW = await DJCoinaDsE1wS.transfer.call(addressNBMQ3D3, uintSW1ZqM, {from: accounts[2]});
//		const boolRl1hvBk = await DJCoinaDsE1wS.approve.call(addressuQciXmx, uintQ6oZLer, {from: accounts[0]});
//		const uint256rBPOOPg = await DJCoinaDsE1wS.allowance.call(addressWGaYhkm, addressO3vudQb, {from: accounts[5]});
//		const addressfEaTX7I = await DJCoinaDsE1wS.transferOwnership.call(addresssvzVTg, {from: accounts[3]});
//		await DJCoinaDsE1wS.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolNv2XsKo, true)
		assert.equal(booleItLsO, true)
		assert.equal(boolnNbD7K, true)
		await expect(DJCoinaDsE1wS.transferFrom.call(addressftUydqa, addressqrSErCt, uintt0NEF9J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})