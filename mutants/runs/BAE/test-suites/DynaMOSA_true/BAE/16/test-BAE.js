const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressfVGTRfJ = accounts[0]
		const BAEhs2w4Ia = await BAE.new(addressfVGTRfJ, {from: accounts[2]});
		const uintzbP4qYF = BigInt("1645")
		const uintEXdBBIg = BigInt("1498")
		const uintnyfpd3I = BigInt("1163")
		const uintR546nNl = BigInt("1276")
		const uintV2kuzT3 = BigInt("848")
		const uintNyv4MBe = BigInt("1133")
		const uintAgD64o8 = BigInt("844")
		const uintaIpAwL3 = BigInt("418")
		const uint256ne3om3 = await BAEhs2w4Ia.createAuction.call(uintR546nNl, uintnyfpd3I, uintEXdBBIg, uintzbP4qYF, {from: accounts[3]});
		const uint256YZCXl3 = await BAEhs2w4Ia.createAuction.call(uintaIpAwL3, uintAgD64o8, uintNyv4MBe, uintV2kuzT3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEhs2w4Ia.createAuction.call(uintR546nNl, uintnyfpd3I, uintEXdBBIg, uintzbP4qYF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressm7AwuuN = accounts[2]
		const BAEsZGHguX = await BAE.new(addressm7AwuuN, {from: accounts[3]});
		const uintrpcQJDs = BigInt("1937")
		const uintBiTKerU = BigInt("179")
		const uintwCLObG0 = BigInt("1955")
		const uintQEObNPK = BigInt("880")
		const uintN2KIK2e = BigInt("1646")
		const uint256wHKB5cy = await BAEsZGHguX.setAuctionFee.call(uintrpcQJDs, {from: accounts[2]});
		const uint256kFwMBmQ = await BAEsZGHguX.createAuction.call(uintN2KIK2e, uintQEObNPK, uintwCLObG0, uintBiTKerU, {from: accounts[2]});

		await expect(BAEsZGHguX.setAuctionFee.call(uintrpcQJDs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const address8TMn9k = accounts[2]
		const BAEsw17Je = await BAE.new(address8TMn9k, {from: accounts[4]});
		const uintLhY4Ewr = BigInt("1601")
		const uintx0bftF0 = BigInt("1464")
		const uintcfg0tMF = BigInt("123")
		const uintSCmQZLz = BigInt("935")
		const uintIMuPkEo = BigInt("257")
		const uintPUtFdyi = BigInt("2030")
		const uintsLyRuvB = BigInt("1013")
		const uintc0VI93v = BigInt("1362")
		const uintBV6bGIg = BigInt("873")
		const uint256ulbByRD = await BAEsw17Je.bid.call(uintLhY4Ewr, {from: accounts[0]});
		const uint256sg1fLQ = await BAEsw17Je.resetAuction.call(uintSCmQZLz, uintcfg0tMF, uintx0bftF0, {from: accounts[1]});
		const uint256rJbLIAH = await BAEsw17Je.createAuction.call(uintc0VI93v, uintsLyRuvB, uintPUtFdyi, uintIMuPkEo, {from: accounts[2]});
		const uint256tt0n3W7 = await BAEsw17Je.setAuctionFee.call(uintBV6bGIg, {from: accounts[2]});

		await expect(BAEsw17Je.bid.call(uintLhY4Ewr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressu2qydQw = accounts[0]
		const BAERNtOfE0 = await BAE.new(addressu2qydQw, {from: accounts[2]});
		const uintxGZV63L = BigInt("1158")
		const uintWKSBd5j = BigInt("709")
		const uint256iJ0IY7H = await BAERNtOfE0.buy.call(uintxGZV63L, {from: accounts[3]});
		const uint256ep0IR0 = await BAERNtOfE0.concludeAuction.call(uintWKSBd5j, {from: accounts[1]});

		await expect(BAERNtOfE0.buy.call(uintxGZV63L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressgly28l3 = accounts[3]
		const BAEWar9f58 = await BAE.new(addressgly28l3, {from: accounts[1]});
		const uintZTG9Qow = BigInt("578")
		const uintSS9SZxW = BigInt("764")
		const uintyHDVZoE = BigInt("880")
		const uintywEKdIf = BigInt("869")
		const uintfq9LFdA = BigInt("1012")
		const uintcXfAJaq = BigInt("787")
		const uintEcLSH0m = BigInt("961")
		const uintQZBurKE = BigInt("1367")
		const uintw4qs32F = BigInt("790")
		const uintHjEqPzU = BigInt("945")
		const uintv5aBCj = BigInt("1375")
		const uintK7ubBbk = BigInt("329")
		const uint256D5JOgCZ = await BAEWar9f58.resetAuction.call(uintyHDVZoE, uintSS9SZxW, uintZTG9Qow, {from: accounts[1]});
		const uint256XQ2PTvd = await BAEWar9f58.createAuction.call(uintEcLSH0m, uintcXfAJaq, uintfq9LFdA, uintywEKdIf, {from: accounts[4]});
		const uint256m1OypSl = await BAEWar9f58.createAuction.call(uintv5aBCj, uintHjEqPzU, uintw4qs32F, uintQZBurKE, {from: accounts[4]});
		const uint256IQk47mH = await BAEWar9f58.setAuctionFee.call(uintK7ubBbk, {from: accounts[3]});

		await expect(BAEWar9f58.resetAuction.call(uintyHDVZoE, uintSS9SZxW, uintZTG9Qow, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressx8GPSJc = accounts[1]
		const BAEbuG8wiL = await BAE.new(addressx8GPSJc, {from: accounts[0]});
		const uintf9ZdVlU = BigInt("1885")
		const uintX2tR2zM = BigInt("2046")
		const uinthBjU41H = BigInt("986")
		const uintm21Slq3 = BigInt("1514")
		const uint256WbRp20q = await BAEbuG8wiL.concludeAuction.call(uintf9ZdVlU, {from: accounts[4]});
		const uint256PaO1xj5 = await BAEbuG8wiL.setAuctionFee.call(uintX2tR2zM, {from: accounts[2]});
		const uint256ynPl9O = await BAEbuG8wiL.bid.call(uinthBjU41H, {from: accounts[0]});
		const uint256QBbI85 = await BAEbuG8wiL.changePrintFee.call(uintm21Slq3, {from: accounts[3]});

		await expect(BAEbuG8wiL.concludeAuction.call(uintf9ZdVlU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressDtQs4XR = accounts[3]
		const BAElmUPL30 = await BAE.new(addressDtQs4XR, {from: "0x0000000000000000000000000000000000000001"});
		const uintLMApetv = BigInt("31")
		const uintgpe7Ze = BigInt("63")
		const uint256LmOM2jt = await BAElmUPL30.buy.call(uintLMApetv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hyzXh6q = await BAElmUPL30.buy.call(uintgpe7Ze, {from: "0x0000000000000000000000000000000000000001"});
	});
})