const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerdMZ03yk = await TimeMiner.new({from: accounts[2]});
		const uintrEXfDv7 = BigInt("1731")
		const addresstm2ujjX = accounts[0]
		const addressPw5Gc3r = "0x0000000000000000000000000000000000000001"
		const uintNsawuay = BigInt("661")
		const addressW8cTgd2 = accounts[3]
		const bool0OPTu3 = false
		const boolE3pUsyq = await TimeMinerdMZ03yk.transferFrom.call(addressPw5Gc3r, addresstm2ujjX, uintrEXfDv7, {from: accounts[4]});
		const boolOXl9I7V = await TimeMinerdMZ03yk.approve.call(addressW8cTgd2, uintNsawuay, {from: accounts[5]});
		const boolgiYZ4yz = await TimeMinerdMZ03yk.setStableCoinSystem.call(bool0OPTu3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerdMZ03yk.transferFrom.call(addressPw5Gc3r, addresstm2ujjX, uintrEXfDv7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinery0jfcJG = await TimeMiner.new({from: accounts[3]});
		const uintZ84stUv = BigInt("1040")
		const boolelyOOJf = false
		const uintIH2EBNe = await TimeMinery0jfcJG.preSale.call(uintZ84stUv, {from: accounts[0]});
		const boolhovE7F = await TimeMinery0jfcJG.setStableCoinSystem.call(boolelyOOJf, {from: accounts[1]});

		await expect(TimeMinery0jfcJG.preSale.call(uintZ84stUv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVrPGG1k = await TimeMiner.new({from: accounts[1]});
		const addressM0B5tPz = accounts[2]
		const uintdBrUQIE = BigInt("428")
		const uintBDWJiv = BigInt("771")
		const addresszywqNjM = accounts[0]
		const addressaPg06Y = accounts[4]
		const uint256z0tGVoe = await TimeMinerVrPGG1k.tokensToClaim.call(addressM0B5tPz, {from: accounts[1]});
		const uint256Z6jlLkp = await TimeMinerVrPGG1k.changePreSalePriceIfToHigh.call(uintdBrUQIE, {from: accounts[2]});
		const boolPxnD111 = await TimeMinerVrPGG1k.transfer.call(addresszywqNjM, uintBDWJiv, {from: "0x0000000000000000000000000000000000000001"});
		const boolOfNhMdX = await TimeMinerVrPGG1k.isWhitelisted.call(addressaPg06Y, {from: accounts[3]});

		await expect(TimeMinerVrPGG1k.tokensToClaim.call(addressM0B5tPz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwvbnJqi = await TimeMiner.new({from: accounts[1]});
		const uintK8NcD45 = BigInt("424")
		const address0i6NIQ = accounts[0]
		const uintClbkpWk = BigInt("1163")
		const uintisLwgYY = BigInt("990")
		const addressv8yzGLC = accounts[0]
		const uintv8hFB2w = BigInt("31")
		const addressuK5IEe = accounts[3]
		const addresst8yQ0ge = accounts[1]
		const boolkZKhOMj = await TimeMinerwvbnJqi.approve.call(address0i6NIQ, uintK8NcD45, {from: accounts[2]});
		const booljntG5A = await TimeMinerwvbnJqi.infoStableSystem.call({from: accounts[3]});
		const uint256YJKowuR = await TimeMinerwvbnJqi.setPrizeFromNewAddress.call(uintisLwgYY, uintClbkpWk, {from: accounts[2]});
		const uint256riDifO0 = await TimeMinerwvbnJqi.balanceOf.call(addressv8yzGLC, {from: accounts[5]});
		const boolOA6GLO = await TimeMinerwvbnJqi.transfer.call(addressuK5IEe, uintv8hFB2w, {from: accounts[3]});
		const boolhIxY3EA = await TimeMinerwvbnJqi.isWhitelisted.call(addresst8yQ0ge, {from: accounts[2]});

		assert.equal(boolkZKhOMj, true)
		await expect(TimeMinerwvbnJqi.setPrizeFromNewAddress.call(uintisLwgYY, uintClbkpWk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervuPlLTx = await TimeMiner.new({from: accounts[3]});
		const uintSp3Dl1 = BigInt("1607")
		const addressLUsGuwF = "0x0000000000000000000000000000000000000001"
		const uintYXixcvf = BigInt("91")
		const addressSVKBZFP = "0x0000000000000000000000000000000000000001"
		const booldM5DwZO = await TimeMinervuPlLTx.transfer.call(addressLUsGuwF, uintSp3Dl1, {from: accounts[0]});
		const boolQ7xF2z = await TimeMinervuPlLTx.transfer.call(addressSVKBZFP, uintYXixcvf, {from: accounts[2]});

		await expect(TimeMinervuPlLTx.transfer.call(addressLUsGuwF, uintSp3Dl1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerF9bbj5P = await TimeMiner.new({from: accounts[5]});
		const addressX7cnEiV = accounts[1]
		const uintsfsR5ua = BigInt("13")
		const addressZjeIxSd = accounts[2]
		const addressRIg1rqJ = accounts[1]
		const addressK8isZQ = accounts[4]
		const uint256xvTjZGg = await TimeMinerF9bbj5P.balanceOfTokenCirculation.call(addressX7cnEiV, {from: accounts[3]});
		const uintsFO18qu = await TimeMinerF9bbj5P.preSale.call(uintsfsR5ua, {from: accounts[3]});
		const uint256d74ujWu = await TimeMinerF9bbj5P.allowance.call(addressRIg1rqJ, addressZjeIxSd, {from: accounts[3]});
		const boolOHcJI7M = await TimeMinerF9bbj5P.infoStableSystem.call({from: accounts[1]});
		const uint256yUEZsaN = await TimeMinerF9bbj5P.balanceOf.call(addressK8isZQ, {from: accounts[4]});

		assert.equal(uint256xvTjZGg, BigInt("0"))
		await expect(TimeMinerF9bbj5P.preSale.call(uintsfsR5ua, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinere1EUHyc = await TimeMiner.new({from: accounts[0]});
		const boolEJdX4v = false
		const addressGrdDlzE = accounts[2]
		await TimeMinere1EUHyc.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
		const addressgNEVJkP = await TimeMinere1EUHyc.whitelist.call(addressGrdDlzE, boolEJdX4v, {from: accounts[4]});
		const uint256YWxF1W = await TimeMinere1EUHyc.totalSupply.call({from: accounts[1]});

		await expect(TimeMinere1EUHyc.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerFMryWIn = await TimeMiner.new({from: accounts[1]});
		const addressl6Gny0I = accounts[4]
		const addressY538zU = accounts[2]
		const addressEZEDaeo = accounts[0]
		const addressJN9UM12 = accounts[1]
		const uint256DgEf3Cw = await TimeMinerFMryWIn.allowance.call(addressY538zU, addressl6Gny0I, {from: accounts[0]});
		const uint256NjGTEsm = await TimeMinerFMryWIn.tokensToClaim.call(addressEZEDaeo, {from: accounts[2]});
		const boolipFzPup = await TimeMinerFMryWIn.isWhitelisted.call(addressJN9UM12, {from: accounts[1]});
		const booltJZrsgq = await TimeMinerFMryWIn.infoStableSystem.call({from: accounts[4]});

		assert.equal(uint256DgEf3Cw, BigInt("0"))
		await expect(TimeMinerFMryWIn.tokensToClaim.call(addressEZEDaeo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwvbnJqi = await TimeMiner.new({from: accounts[1]});
		const uintjbhHdVe = BigInt("424")
		const addressk0YnaF1 = accounts[0]
		const addressOwRo5C4 = accounts[1]
		const addressN3HWdA9 = accounts[0]
		const uintFgA7RWd = BigInt("31")
		const addressDh5hvs8 = accounts[3]
		const addressvyYBLeE = accounts[1]
		const boolkZKhOMj = await TimeMinerwvbnJqi.approve.call(addressk0YnaF1, uintjbhHdVe, {from: accounts[2]});
		const uint256lp7FsPD = await TimeMinerwvbnJqi.allInfoFor.call(addressOwRo5C4, {from: accounts[1]});
		const booljntG5A = await TimeMinerwvbnJqi.infoStableSystem.call({from: accounts[3]});
		const uint256riDifO0 = await TimeMinerwvbnJqi.balanceOf.call(addressN3HWdA9, {from: accounts[5]});
		const boolOA6GLO = await TimeMinerwvbnJqi.transfer.call(addressDh5hvs8, uintFgA7RWd, {from: accounts[3]});
		const boolhIxY3EA = await TimeMinerwvbnJqi.isWhitelisted.call(addressvyYBLeE, {from: accounts[2]});

		assert.equal(boolkZKhOMj, true)
		assert.equal(uint256riDifO0, BigInt("0"))
		await expect(TimeMinerwvbnJqi.transfer.call(addressDh5hvs8, uintFgA7RWd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerh1VpgcE = await TimeMiner.new({from: accounts[2]});
		const addressYCMhgt = accounts[2]
		const addressNWlrDKI = accounts[0]
		const uintaNcJuf8 = BigInt("1184")
		const addresswnNmKbo = accounts[0]
		const addressUNZYa5m = accounts[3]
		const uint256hjIzucf = await TimeMinerh1VpgcE.totalSupply.call({from: accounts[0]});
		const boolAYZhfoO = await TimeMinerh1VpgcE.isWhitelisted.call(addressYCMhgt, {from: accounts[3]});
		await TimeMinerh1VpgcE.preSaleFinished.call({from: accounts[0]});
		const uint256wFW1ReN = await TimeMinerh1VpgcE.balanceOfTokenCirculation.call(addressNWlrDKI, {from: accounts[4]});
		const boolEOqY3cR = await TimeMinerh1VpgcE.transferFrom.call(addressUNZYa5m, addresswnNmKbo, uintaNcJuf8, {from: accounts[3]});
		const uint256prBtuY = await TimeMinerh1VpgcE.totalSupply.call({from: accounts[4]});

		assert.equal(boolAYZhfoO, true)
		assert.equal(uint256hjIzucf, BigInt("24000000"))
		await expect(TimeMinerh1VpgcE.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwvbnJqi = await TimeMiner.new({from: accounts[1]});
		const uintM4iBC15 = BigInt("424")
		const addressMbFOaX = accounts[0]
		const addressE05bfgk = accounts[1]
		const boolDUEsTcX = false
		const addressjRQkSu0 = accounts[4]
		const addresskmPdbSV = accounts[0]
		const addressKsHDo6V = accounts[1]
		const addressBuPZ4e7 = accounts[3]
		const uinty957SY = BigInt("31")
		const addressAwsLFar = accounts[3]
		const addresss96ipOx = accounts[1]
		const uintViv3rH8 = BigInt("957")
		const addressTnT2uxe = "0x0000000000000000000000000000000000000001"
		const addressHvjmcbV = accounts[1]
		const boolkZKhOMj = await TimeMinerwvbnJqi.approve.call(addressMbFOaX, uintM4iBC15, {from: accounts[2]});
		const uint256lp7FsPD = await TimeMinerwvbnJqi.allInfoFor.call(addressE05bfgk, {from: accounts[1]});
		const addressHoFZQaa = await TimeMinerwvbnJqi.whitelist.call(addressjRQkSu0, boolDUEsTcX, {from: accounts[2]});
		const uint256NC3EmEX = await TimeMinerwvbnJqi.balanceOfTokenCirculation.call(addresskmPdbSV, {from: accounts[1]});
		const booljntG5A = await TimeMinerwvbnJqi.infoStableSystem.call({from: accounts[3]});
		const uint256riDifO0 = await TimeMinerwvbnJqi.balanceOf.call(addressKsHDo6V, {from: accounts[5]});
		const uint256Lp9wMh1 = await TimeMinerwvbnJqi.balanceOf.call(addressBuPZ4e7, {from: accounts[4]});
		const boolOA6GLO = await TimeMinerwvbnJqi.transfer.call(addressAwsLFar, uinty957SY, {from: accounts[3]});
		const boolhIxY3EA = await TimeMinerwvbnJqi.isWhitelisted.call(addresss96ipOx, {from: accounts[2]});
		const boolCg5FcvQ = await TimeMinerwvbnJqi.transferFrom.call(addressHvjmcbV, addressTnT2uxe, uintViv3rH8, {from: accounts[2]});

		assert.equal(boolkZKhOMj, true)
		await expect(TimeMinerwvbnJqi.whitelist.call(addressjRQkSu0, boolDUEsTcX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwMVY9ve = await TimeMiner.new({from: accounts[2]});
		const uintohQEjiE = BigInt("1427")
		const addressDAYkyG4 = accounts[4]
		const addressad2dK4Z = accounts[1]
		const addressaq1GLKO = accounts[5]
		const uint256nVCSMPH = await TimeMinerwMVY9ve.changePreSalePriceIfToHigh.call(uintohQEjiE, {from: accounts[3]});
		const uint256kSzpPDA = await TimeMinerwMVY9ve.tokensToClaim.call(addressDAYkyG4, {from: accounts[3]});
		const uint256puW6BrE = await TimeMinerwMVY9ve.tokensToClaim.call(addressad2dK4Z, {from: accounts[0]});
		const uint256Sksym11 = await TimeMinerwMVY9ve.balanceOfTokenCirculation.call(addressaq1GLKO, {from: accounts[2]});

		await expect(TimeMinerwMVY9ve.changePreSalePriceIfToHigh.call(uintohQEjiE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwvbnJqi = await TimeMiner.new({from: accounts[1]});
		const uintxn47Fuu = BigInt("424")
		const addresslrZyiWy = accounts[0]
		const boolfhTcH2Q = true
		const addressqEfEc0d = accounts[1]
		const addressM0ncgtS = accounts[0]
		const uintrozDV2 = BigInt("31")
		const addressFaP8LjR = accounts[4]
		const addressxlPh0eD = accounts[1]
		const boolkZKhOMj = await TimeMinerwvbnJqi.approve.call(addresslrZyiWy, uintxn47Fuu, {from: accounts[2]});
		const boola6fzvfH = await TimeMinerwvbnJqi.setStableCoinSystem.call(boolfhTcH2Q, {from: accounts[3]});
		const uint256lp7FsPD = await TimeMinerwvbnJqi.allInfoFor.call(addressqEfEc0d, {from: accounts[1]});
		const booljntG5A = await TimeMinerwvbnJqi.infoStableSystem.call({from: accounts[3]});
		const uint256riDifO0 = await TimeMinerwvbnJqi.balanceOf.call(addressM0ncgtS, {from: accounts[5]});
		const boolOA6GLO = await TimeMinerwvbnJqi.transfer.call(addressFaP8LjR, uintrozDV2, {from: accounts[3]});
		const uint256fPM1wM = await TimeMinerwvbnJqi.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhIxY3EA = await TimeMinerwvbnJqi.isWhitelisted.call(addressxlPh0eD, {from: accounts[2]});

		assert.equal(boolkZKhOMj, true)
		await expect(TimeMinerwvbnJqi.setStableCoinSystem.call(boolfhTcH2Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwvbnJqi = await TimeMiner.new({from: accounts[1]});
		const uintZqG6Bqw = BigInt("424")
		const addresszkjLk96 = accounts[0]
		const uintnzDe2Cp = BigInt("143")
		const addressqNfH4R = accounts[4]
		const uintl84Nrr = BigInt("30")
		const addressHx3T7PA = accounts[4]
		const addressQfBGHFq = accounts[1]
		const uintCMnK23S = BigInt("31")
		const addresswNaIhJ6 = accounts[3]
		const uintRvWHFgh = BigInt("1967")
		const addressa5W2l4 = accounts[1]
		const boolkZKhOMj = await TimeMinerwvbnJqi.approve.call(addresszkjLk96, uintZqG6Bqw, {from: accounts[2]});
		const booloNqEzQF = await TimeMinerwvbnJqi.transfer.call(addressqNfH4R, uintnzDe2Cp, {from: accounts[1]});
		const boolHHXb6gS = await TimeMinerwvbnJqi.transfer.call(addressHx3T7PA, uintl84Nrr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lp7FsPD = await TimeMinerwvbnJqi.allInfoFor.call(addressQfBGHFq, {from: accounts[1]});
		const booljntG5A = await TimeMinerwvbnJqi.infoStableSystem.call({from: accounts[3]});
		const boolOA6GLO = await TimeMinerwvbnJqi.transfer.call(addresswNaIhJ6, uintCMnK23S, {from: accounts[3]});
		await TimeMinerwvbnJqi.preSaleFinished.call({from: accounts[2]});
		const uint256p5QK1t = await TimeMinerwvbnJqi.changePreSalePriceIfToHigh.call(uintRvWHFgh, {from: accounts[2]});
		const boolhIxY3EA = await TimeMinerwvbnJqi.isWhitelisted.call(addressa5W2l4, {from: accounts[2]});

		assert.equal(boolkZKhOMj, true)
		assert.equal(booloNqEzQF, true)
		await expect(TimeMinerwvbnJqi.transfer.call(addressHx3T7PA, uintl84Nrr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfjtw9qU = await TimeMiner.new({from: accounts[3]});
		const addresszw8XZQp = accounts[1]
		const boolbtI3zNh = true
		const addressMb1VoVp = accounts[3]
		const uint256nW7o7cZ = await TimeMinerfjtw9qU.balanceOfTokenCirculation.call(addresszw8XZQp, {from: "0x0000000000000000000000000000000000000001"});
		await TimeMinerfjtw9qU.preSaleFinished.call({from: accounts[3]});
		const addressyDkGvVc = await TimeMinerfjtw9qU.whitelist.call(addressMb1VoVp, boolbtI3zNh, {from: accounts[3]});

		assert.equal(uint256nW7o7cZ, BigInt("0"))
		await expect(TimeMinerfjtw9qU.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOrjczU7 = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const boolLXRSHm = true
		const uintGMCwPo5 = BigInt("44")
		const addressGsyWd2j = "0x0000000000000000000000000000000000000001"
		const addressgyxf1Cb = accounts[3]
		const uintLKZKqZL = BigInt("739")
		const addresszfCjcnK = accounts[2]
		const addresskfmje3W = accounts[1]
		const boolW140A4U = await TimeMinerOrjczU7.setStableCoinSystem.call(boolLXRSHm, {from: accounts[4]});
		const boolxqQQI09 = await TimeMinerOrjczU7.transfer.call(addressGsyWd2j, uintGMCwPo5, {from: accounts[3]});
		const uint256YNJ7tQF = await TimeMinerOrjczU7.tokensToClaim.call(addressgyxf1Cb, {from: accounts[1]});
		const booloriJs8z = await TimeMinerOrjczU7.transferFrom.call(addresskfmje3W, addresszfCjcnK, uintLKZKqZL, {from: accounts[3]});
	});
})