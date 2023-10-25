const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerQUqIJtC = await TimeMiner.new({from: accounts[2]});
		const boolAMjs6Ux = false
		const addressj7BQG3 = "0x0000000000000000000000000000000000000001"
		const booloTH6JTC = false
		await TimeMinerQUqIJtC.preSaleFinished.call({from: accounts[1]});
		const addressG14fHjn = await TimeMinerQUqIJtC.whitelist.call(addressj7BQG3, boolAMjs6Ux, {from: accounts[5]});
		const uint256gW6JdWJ = await TimeMinerQUqIJtC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyvDvX4v = await TimeMinerQUqIJtC.setStableCoinSystem.call(booloTH6JTC, {from: accounts[4]});

		await expect(TimeMinerQUqIJtC.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlUNtHXd = await TimeMiner.new({from: accounts[1]});
		const addressHS2stLd = accounts[3]
		const uintWRAjLV = BigInt("1579")
		const addresslkbF40 = accounts[3]
		const addressSCWyOUj = "0x0000000000000000000000000000000000000001"
		const uintmbNMkJJ = BigInt("1697")
		const addresswWJcfYc = accounts[1]
		const boolaVu2cY = false
		const uintZvAikjr = BigInt("1082")
		const addressLYn3Euo = accounts[3]
		const boolzyU7AI2 = await TimeMinerlUNtHXd.isWhitelisted.call(addressHS2stLd, {from: accounts[4]});
		const boolEDKHfA = await TimeMinerlUNtHXd.transferFrom.call(addressSCWyOUj, addresslkbF40, uintWRAjLV, {from: accounts[1]});
		const boolUIa5PBB = await TimeMinerlUNtHXd.transfer.call(addresswWJcfYc, uintmbNMkJJ, {from: accounts[1]});
		const boolqB2cqcX = await TimeMinerlUNtHXd.setStableCoinSystem.call(boolaVu2cY, {from: accounts[5]});
		const uint256vVolwn4 = await TimeMinerlUNtHXd.changePreSalePriceIfToHigh.call(uintZvAikjr, {from: accounts[0]});
		const uint256C9hx9W = await TimeMinerlUNtHXd.allInfoFor.call(addressLYn3Euo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzyU7AI2, false)
		await expect(TimeMinerlUNtHXd.transferFrom.call(addressSCWyOUj, addresslkbF40, uintWRAjLV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerz6pjXEq = await TimeMiner.new({from: accounts[4]});
		const uintqlutjxX = BigInt("341")
		const addressqMd0Ld = accounts[1]
		const addresseHgU4cC = accounts[1]
		const boolhkHVslz = await TimeMinerz6pjXEq.transfer.call(addressqMd0Ld, uintqlutjxX, {from: accounts[1]});
		const uint256ohGh8E1 = await TimeMinerz6pjXEq.balanceOf.call(addresseHgU4cC, {from: accounts[2]});
		const uint256UwHvvCa = await TimeMinerz6pjXEq.totalSupply.call({from: accounts[0]});

		await expect(TimeMinerz6pjXEq.transfer.call(addressqMd0Ld, uintqlutjxX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdvDWw9Q = await TimeMiner.new({from: accounts[3]});
		const uintPLmQBaJ = BigInt("1370")
		const addressKza5WOq = accounts[2]
		const uintySlfnsB = await TimeMinerdvDWw9Q.preSale.call(uintPLmQBaJ, {from: "0x0000000000000000000000000000000000000001"});
		await TimeMinerdvDWw9Q.preSaleFinished.call({from: accounts[3]});
		const uint256VoiIosx = await TimeMinerdvDWw9Q.tokensToClaim.call(addressKza5WOq, {from: accounts[3]});

		await expect(TimeMinerdvDWw9Q.preSale.call(uintPLmQBaJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhwdnkCQ = await TimeMiner.new({from: accounts[3]});
		const addressGNlJrD = accounts[5]
		const boolcOaSDs9 = false
		const addressevTxVt = accounts[3]
		const addressh2dRFm = accounts[1]
		const uintnWX9wo5 = BigInt("1082")
		const uint256wFJ9w3 = await TimeMinerhwdnkCQ.tokensToClaim.call(addressGNlJrD, {from: accounts[1]});
		const addressh7rsfga = await TimeMinerhwdnkCQ.whitelist.call(addressevTxVt, boolcOaSDs9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tDWKb8x = await TimeMinerhwdnkCQ.tokensToClaim.call(addressh2dRFm, {from: accounts[4]});
		const uint256w5iq8Px = await TimeMinerhwdnkCQ.changePreSalePriceIfToHigh.call(uintnWX9wo5, {from: accounts[2]});
		const boolIQA5Fpd = await TimeMinerhwdnkCQ.infoStableSystem.call({from: accounts[2]});

		await expect(TimeMinerhwdnkCQ.tokensToClaim.call(addressGNlJrD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlUNtHXd = await TimeMiner.new({from: accounts[1]});
		const addressfCe8x06 = accounts[3]
		const uintj5u5DM2 = BigInt("1450")
		const uint4srcYR = BigInt("1184")
		const uintFHWEJ6v = BigInt("1579")
		const addressk7tcgW = accounts[3]
		const addressOCRrltP = "0x0000000000000000000000000000000000000001"
		const uintBvio2wa = BigInt("1697")
		const addresstQRrRCC = accounts[1]
		const boolaVu2cY = false
		const boolk7VR6XD = true
		const addressApC3YO8 = accounts[1]
		const uintnulWsfj = BigInt("1082")
		const addressDKKBKwY = accounts[3]
		const boolzyU7AI2 = await TimeMinerlUNtHXd.isWhitelisted.call(addressfCe8x06, {from: accounts[4]});
		const uint256WwvF5ba = await TimeMinerlUNtHXd.setPrizeFromNewAddress.call(uint4srcYR, uintj5u5DM2, {from: accounts[1]});
		const boolEDKHfA = await TimeMinerlUNtHXd.transferFrom.call(addressOCRrltP, addressk7tcgW, uintFHWEJ6v, {from: accounts[1]});
		const boolUIa5PBB = await TimeMinerlUNtHXd.transfer.call(addresstQRrRCC, uintBvio2wa, {from: accounts[1]});
		const boolqB2cqcX = await TimeMinerlUNtHXd.setStableCoinSystem.call(boolaVu2cY, {from: accounts[5]});
		const addressUkcc8gG = await TimeMinerlUNtHXd.whitelist.call(addressApC3YO8, boolk7VR6XD, {from: accounts[0]});
		const uint256vVolwn4 = await TimeMinerlUNtHXd.changePreSalePriceIfToHigh.call(uintnulWsfj, {from: accounts[0]});
		const uint256C9hx9W = await TimeMinerlUNtHXd.allInfoFor.call(addressDKKBKwY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzyU7AI2, false)
		await expect(TimeMinerlUNtHXd.transferFrom.call(addressOCRrltP, addressk7tcgW, uintFHWEJ6v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressWnuE1T = accounts[4]
		const addressEfYObQ1 = accounts[4]
		const uintzicodAx = BigInt("1110")
		const addressNgjzxmJ = accounts[0]
		const addressfDgrbsU = accounts[3]
		const uintH1FZFfs = BigInt("199")
		const boolT9dDgEy = false
		const addressoQqLYMz = accounts[2]
		const boolpYmOqyp = await TimeMiner6O1asw.isWhitelisted.call(addressWnuE1T, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v8u5ao = await TimeMiner6O1asw.balanceOf.call(addressEfYObQ1, {from: accounts[4]});
		const uint256D5Sm9nF = await TimeMiner6O1asw.totalSupply.call({from: accounts[3]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressfDgrbsU, addressNgjzxmJ, uintzicodAx, {from: accounts[5]});
		const uintcXI2RFN = await TimeMiner6O1asw.preSale.call(uintH1FZFfs, {from: accounts[2]});
		const addressBMIHnEZ = await TimeMiner6O1asw.whitelist.call(addressoQqLYMz, boolT9dDgEy, {from: accounts[4]});

		assert.equal(boolpYmOqyp, false)
		assert.equal(uint256D5Sm9nF, BigInt("24000000"))
		assert.equal(uint256v8u5ao, BigInt("0"))
		await expect(TimeMiner6O1asw.transferFrom.call(addressfDgrbsU, addressNgjzxmJ, uintzicodAx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressZRdSXR0 = accounts[4]
		const boolT9dDgEy = false
		const addresshlO4qwQ = accounts[2]
		const boolpYmOqyp = await TimeMiner6O1asw.isWhitelisted.call(addressZRdSXR0, {from: "0x0000000000000000000000000000000000000001"});
		const addressBMIHnEZ = await TimeMiner6O1asw.whitelist.call(addresshlO4qwQ, boolT9dDgEy, {from: accounts[4]});

		assert.equal(boolpYmOqyp, false)
		await expect(TimeMiner6O1asw.whitelist.call(addresshlO4qwQ, boolT9dDgEy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQl5b0Z0 = await TimeMiner.new({from: accounts[5]});
		const addressVoIDIVQ = accounts[5]
		const addressd6nuNAG = accounts[2]
		const uintvBDtslb = BigInt("226")
		const addressqi5vbJN = accounts[0]
		const addressbr9odjs = accounts[1]
		const uintk2aLCC0 = BigInt("1114")
		const addressnY5eKCF = accounts[4]
		const addressuPprpI6 = accounts[3]
		const addressbDc7KnU = accounts[2]
		const uintl1MotG = BigInt("1419")
		const addressEQPAbDY = accounts[3]
		const uint256uuT2N4b = await TimeMinerQl5b0Z0.balanceOfTokenCirculation.call(addressVoIDIVQ, {from: accounts[4]});
		const uint256vjZRxUg = await TimeMinerQl5b0Z0.balanceOf.call(addressd6nuNAG, {from: accounts[3]});
		const boolR9xD8M2 = await TimeMinerQl5b0Z0.transferFrom.call(addressbr9odjs, addressqi5vbJN, uintvBDtslb, {from: accounts[2]});
		const boolUQxZBkp = await TimeMinerQl5b0Z0.transferFrom.call(addressuPprpI6, addressnY5eKCF, uintk2aLCC0, {from: accounts[1]});
		const uint256L5A2tUY = await TimeMinerQl5b0Z0.allInfoFor.call(addressbDc7KnU, {from: accounts[5]});
		const uint256EObCpGA = await TimeMinerQl5b0Z0.changePreSalePriceIfToHigh.call(uintl1MotG, {from: accounts[2]});
		const uint256wGYCdq7 = await TimeMinerQl5b0Z0.allInfoFor.call(addressEQPAbDY, {from: accounts[1]});

		assert.equal(uint256uuT2N4b, BigInt("24000000"))
		assert.equal(uint256vjZRxUg, BigInt("0"))
		await expect(TimeMinerQl5b0Z0.transferFrom.call(addressbr9odjs, addressqi5vbJN, uintvBDtslb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEiWor9V = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressj4jTpKC = accounts[5]
		const addressLJI74Oo = accounts[2]
		const addressi1n8KEd = accounts[0]
		const boolSi1E3eW = await TimeMinerEiWor9V.infoStableSystem.call({from: accounts[1]});
		const boole0gdSk5 = await TimeMinerEiWor9V.infoStableSystem.call({from: accounts[2]});
		const uint256MsK3OdN = await TimeMinerEiWor9V.balanceOf.call(addressj4jTpKC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aAKSgNU = await TimeMinerEiWor9V.tokensToClaim.call(addressLJI74Oo, {from: accounts[4]});
		const boolcnRORRH = await TimeMinerEiWor9V.isWhitelisted.call(addressi1n8KEd, {from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdvDWw9Q = await TimeMiner.new({from: accounts[3]});
		const uintY69N7YW = BigInt("1811")
		const uintqK2aVkO = BigInt("1370")
		const addressEGhWvE = accounts[2]
		const uint256oOAVuz = await TimeMinerdvDWw9Q.changePreSalePriceIfToHigh.call(uintY69N7YW, {from: accounts[4]});
		const uintySlfnsB = await TimeMinerdvDWw9Q.preSale.call(uintqK2aVkO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VoiIosx = await TimeMinerdvDWw9Q.tokensToClaim.call(addressEGhWvE, {from: accounts[3]});

		await expect(TimeMinerdvDWw9Q.changePreSalePriceIfToHigh.call(uintY69N7YW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const uintAQvbBm = BigInt("781")
		const addressVONFekK = accounts[2]
		const addressQZBHYmR = accounts[4]
		const boolOnOnmHj = true
		const addressiompIow = accounts[5]
		const uintn5eltv4 = BigInt("1110")
		const addressWTVxo2B = accounts[1]
		const addressGR5fS6 = accounts[3]
		const boolT9dDgEy = false
		const addressjBCnBAT = accounts[2]
		const booliQ7CzAt = await TimeMiner6O1asw.approve.call(addressVONFekK, uintAQvbBm, {from: accounts[3]});
		const boolpYmOqyp = await TimeMiner6O1asw.isWhitelisted.call(addressQZBHYmR, {from: "0x0000000000000000000000000000000000000001"});
		const addressn5xkR4r = await TimeMiner6O1asw.whitelist.call(addressiompIow, boolOnOnmHj, {from: accounts[0]});
		await TimeMiner6O1asw.preSaleFinished.call({from: accounts[0]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressGR5fS6, addressWTVxo2B, uintn5eltv4, {from: accounts[5]});
		const addressBMIHnEZ = await TimeMiner6O1asw.whitelist.call(addressjBCnBAT, boolT9dDgEy, {from: accounts[4]});

		assert.equal(booliQ7CzAt, true)
		assert.equal(boolpYmOqyp, false)
		await expect(TimeMiner6O1asw.whitelist.call(addressiompIow, boolOnOnmHj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressqqyfcTr = accounts[3]
		const addressihKIGEX = accounts[5]
		const address5zj15i = accounts[1]
		const addressPxXp1dB = accounts[1]
		const uintZYj8H1 = BigInt("1110")
		const addressuGySbyL = accounts[0]
		const addressu6Fsy7C = accounts[3]
		const addressx4Pix8q = accounts[4]
		const addressHHEjAwk = accounts[4]
		const uinti5DoWIe = BigInt("1653")
		const addressCcVGa6b = accounts[5]
		const boolT9dDgEy = false
		const addressVvNsyOs = accounts[2]
		const uint256eYJ826W = await TimeMiner6O1asw.balanceOf.call(addressqqyfcTr, {from: accounts[2]});
		const boolpYmOqyp = await TimeMiner6O1asw.isWhitelisted.call(addressihKIGEX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C7mNH2e = await TimeMiner6O1asw.allowance.call(addressPxXp1dB, address5zj15i, {from: accounts[5]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressu6Fsy7C, addressuGySbyL, uintZYj8H1, {from: accounts[5]});
		const uint256DX53FH7 = await TimeMiner6O1asw.allowance.call(addressHHEjAwk, addressx4Pix8q, {from: "0x0000000000000000000000000000000000000001"});
		const boolEYOYGaz = await TimeMiner6O1asw.transfer.call(addressCcVGa6b, uinti5DoWIe, {from: accounts[0]});
		const addressBMIHnEZ = await TimeMiner6O1asw.whitelist.call(addressVvNsyOs, boolT9dDgEy, {from: accounts[4]});

		assert.equal(boolpYmOqyp, true)
		assert.equal(uint256C7mNH2e, BigInt("0"))
		assert.equal(uint256eYJ826W, BigInt("0"))
		await expect(TimeMiner6O1asw.transferFrom.call(addressu6Fsy7C, addressuGySbyL, uintZYj8H1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressAQjU3wj = accounts[4]
		const addressnVkeF50 = "0x0000000000000000000000000000000000000001"
		const uints3hQU2 = BigInt("1108")
		const addressGwFtyZC = accounts[0]
		const addressOVWuko = accounts[3]
		const uintZKcrL6o = BigInt("759")
		const boolT9dDgEy = false
		const addresssNe2Yrx = accounts[2]
		const address24r2vi = accounts[3]
		const addressaEDPQ3s = accounts[5]
		const boolpYmOqyp = await TimeMiner6O1asw.isWhitelisted.call(addressAQjU3wj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qQnnxwU = await TimeMiner6O1asw.allInfoFor.call(addressnVkeF50, {from: accounts[0]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressOVWuko, addressGwFtyZC, uints3hQU2, {from: accounts[5]});
		const uint256ntBi2k0 = await TimeMiner6O1asw.changePreSalePriceIfToHigh.call(uintZKcrL6o, {from: accounts[0]});
		const addressBMIHnEZ = await TimeMiner6O1asw.whitelist.call(addresssNe2Yrx, boolT9dDgEy, {from: accounts[4]});
		const uint256KMAdm7E = await TimeMiner6O1asw.allowance.call(addressaEDPQ3s, address24r2vi, {from: accounts[5]});

		assert.equal(boolpYmOqyp, false)
		await expect(TimeMiner6O1asw.allInfoFor.call(addressnVkeF50, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerz6pjXEq = await TimeMiner.new({from: accounts[4]});
		const addresspghtaKu = accounts[1]
		const addressBzU8CEE = accounts[2]
		const uintZ80eeE9 = BigInt("324")
		const addressjhT4GaL = accounts[1]
		const uint256Im7FhoK = await TimeMinerz6pjXEq.allowance.call(addressBzU8CEE, addresspghtaKu, {from: accounts[0]});
		const boolIAKkeGg = await TimeMinerz6pjXEq.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhkHVslz = await TimeMinerz6pjXEq.transfer.call(addressjhT4GaL, uintZ80eeE9, {from: accounts[1]});

		assert.equal(uint256Im7FhoK, BigInt("0"))
		await expect(TimeMinerz6pjXEq.transfer.call(addressjhT4GaL, uintZ80eeE9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAzCqClj = await TimeMiner.new({from: accounts[4]});
		const boolMrC7Aec = false
		const addressFogHaVF = accounts[0]
		const bool84gz2j = false
		const uintpPKQpUP = BigInt("1182")
		const uintciXPYUs = BigInt("900")
		const boolrHPspYW = await TimeMinerAzCqClj.setStableCoinSystem.call(boolMrC7Aec, {from: accounts[3]});
		const uint256IfYjqR = await TimeMinerAzCqClj.balanceOf.call(addressFogHaVF, {from: accounts[3]});
		const boolg0Q3am = await TimeMinerAzCqClj.setStableCoinSystem.call(bool84gz2j, {from: "0x0000000000000000000000000000000000000001"});
		const uint2562V8y7O = await TimeMinerAzCqClj.setPrizeFromNewAddress.call(uintciXPYUs, uintpPKQpUP, {from: accounts[3]});
		await TimeMinerAzCqClj.preSaleFinished.call({from: accounts[0]});

		await expect(TimeMinerAzCqClj.setStableCoinSystem.call(boolMrC7Aec, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwb6AR3D = await TimeMiner.new({from: accounts[2]});
		const uintR0v81C1 = BigInt("2033")
		const addressIYjpc3G = accounts[3]
		const addressEW9vTK = accounts[5]
		const boolJ2X04hw = true
		const addressTiWOZBk = accounts[5]
		const boolpqboG4p = await TimeMinerwb6AR3D.approve.call(addressIYjpc3G, uintR0v81C1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ny2tkm9 = await TimeMinerwb6AR3D.balanceOf.call(addressEW9vTK, {from: "0x0000000000000000000000000000000000000001"});
		const boolwnAhVx4 = await TimeMinerwb6AR3D.setStableCoinSystem.call(boolJ2X04hw, {from: accounts[2]});
		const boolitJ39FK = await TimeMinerwb6AR3D.isWhitelisted.call(addressTiWOZBk, {from: "0x0000000000000000000000000000000000000001"});
		const uint2567fnkbO = await TimeMinerwb6AR3D.totalSupply.call({from: accounts[5]});

		assert.equal(boolitJ39FK, false)
		assert.equal(boolpqboG4p, true)
		assert.equal(uint2567fnkbO, BigInt("24000000"))
		assert.equal(uint256ny2tkm9, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerb1qRhjd = await TimeMiner.new({from: accounts[4]});
		const boolJjkdRWZ = false
		const addressZdBHbDx = accounts[2]
		const addressEWHwRR = accounts[2]
		const uintN7F02UQ = BigInt("182")
		const addressunWq00x = accounts[4]
		const uintLuLGr7I = BigInt("385")
		const uintxR1tRU = BigInt("512")
		const uintyTVQ8xC = BigInt("911")
		const addressi9yYs7J = await TimeMinerb1qRhjd.whitelist.call(addressZdBHbDx, boolJjkdRWZ, {from: accounts[4]});
		const uint256KHdsYWB = await TimeMinerb1qRhjd.balanceOf.call(addressEWHwRR, {from: accounts[1]});
		const boolm7nOvnx = await TimeMinerb1qRhjd.infoStableSystem.call({from: accounts[4]});
		const boolmVadl2Y = await TimeMinerb1qRhjd.transfer.call(addressunWq00x, uintN7F02UQ, {from: accounts[0]});
		const uint256rXqzkJE = await TimeMinerb1qRhjd.changePreSalePriceIfToHigh.call(uintLuLGr7I, {from: accounts[5]});
		const uint256Ttj5wg8 = await TimeMinerb1qRhjd.setPrizeFromNewAddress.call(uintyTVQ8xC, uintxR1tRU, {from: accounts[2]});

		assert.equal(uint256KHdsYWB, BigInt("0"))
		await expect(TimeMinerb1qRhjd.transfer.call(addressunWq00x, uintN7F02UQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressPzP0INE = accounts[2]
		const addressYKknFf = accounts[3]
		const uintyvuRd3 = BigInt("1981")
		const addressyZVej6N = accounts[4]
		const uintqVvDm8A = BigInt("1110")
		const addressPQiusow = accounts[0]
		const addressDrfnLtP = accounts[3]
		const uint256DJeX29P = await TimeMiner6O1asw.allowance.call(addressYKknFf, addressPzP0INE, {from: accounts[0]});
		const booluO81Xtp = await TimeMiner6O1asw.transfer.call(addressyZVej6N, uintyvuRd3, {from: accounts[5]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressDrfnLtP, addressPQiusow, uintqVvDm8A, {from: accounts[5]});

		assert.equal(booluO81Xtp, true)
		assert.equal(uint256DJeX29P, BigInt("0"))
		await expect(TimeMiner6O1asw.transferFrom.call(addressDrfnLtP, addressPQiusow, uintqVvDm8A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner6O1asw = await TimeMiner.new({from: accounts[5]});
		const addressI0giU7Y = accounts[3]
		const addresslAWWQIF = accounts[3]
		const uintEyxLXt = BigInt("1981")
		const addressJsUGz5i = accounts[5]
		const uintotzit5U = BigInt("1110")
		const addresseRFHZM3 = accounts[0]
		const addressJvOic12 = accounts[3]
		const uint256DJeX29P = await TimeMiner6O1asw.allowance.call(addresslAWWQIF, addressI0giU7Y, {from: accounts[0]});
		const booluO81Xtp = await TimeMiner6O1asw.transfer.call(addressJsUGz5i, uintEyxLXt, {from: accounts[5]});
		const boolcjm1bYG = await TimeMiner6O1asw.transferFrom.call(addressJvOic12, addresseRFHZM3, uintotzit5U, {from: accounts[5]});

		assert.equal(booluO81Xtp, true)
		assert.equal(uint256DJeX29P, BigInt("0"))
		await expect(TimeMiner6O1asw.transferFrom.call(addressJvOic12, addresseRFHZM3, uintotzit5U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdvDWw9Q = await TimeMiner.new({from: accounts[3]});
		const uintOrrNQ4p = BigInt("320")
		const uintw7QKyZv = BigInt("453")
		const addressWUfXKEl = "0x0000000000000000000000000000000000000001"
		const addresshdAXvXn = accounts[3]
		const uint256NIbJX4l = await TimeMinerdvDWw9Q.changePreSalePriceIfToHigh.call(uintOrrNQ4p, {from: accounts[3]});
		const uint256oOAVuz = await TimeMinerdvDWw9Q.changePreSalePriceIfToHigh.call(uintw7QKyZv, {from: accounts[4]});
		const uint256kgTbl5R = await TimeMinerdvDWw9Q.allInfoFor.call(addressWUfXKEl, {from: accounts[1]});
		const uint256zgVBJL9 = await TimeMinerdvDWw9Q.allInfoFor.call(addresshdAXvXn, {from: accounts[2]});

		await expect(TimeMinerdvDWw9Q.changePreSalePriceIfToHigh.call(uintw7QKyZv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})