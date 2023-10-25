const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinkQCdtN7 = await EdenCoin.new({from: accounts[4]});
		const uintbOiDYVX = BigInt("1161")
		const addressdVCKDk7 = accounts[5]
		const uintcI74T2a = BigInt("237")
		const addressLkC2Uxk = "0x0000000000000000000000000000000000000001"
		const addressjOLAUWf = accounts[2]
		const uintOM4CjYI = BigInt("1390")
		const addressdeeA4Ng = accounts[3]
		const uintilBkMSX = BigInt("359")
		const addressc0Quwdg = accounts[3]
		const uintUEvtmTt = BigInt("881")
		const addressaLw0ow2 = accounts[3]
		const boolW2tynLr = await EdenCoinkQCdtN7.transfer.call(addressdVCKDk7, uintbOiDYVX, {from: accounts[5]});
		const boolxFO7SeI = await EdenCoinkQCdtN7.transferFrom.call(addressjOLAUWf, addressLkC2Uxk, uintcI74T2a, {from: "0x0000000000000000000000000000000000000001"});
		const boolQONZ1Yx = await EdenCoinkQCdtN7.increaseApproval.call(addressdeeA4Ng, uintOM4CjYI, {from: accounts[5]});
		const boolnoF7aUx = await EdenCoinkQCdtN7.approve.call(addressc0Quwdg, uintilBkMSX, {from: accounts[5]});
		const boolLk8doCn = await EdenCoinkQCdtN7.decreaseApproval.call(addressaLw0ow2, uintUEvtmTt, {from: accounts[2]});

		await expect(EdenCoinkQCdtN7.transfer.call(addressdVCKDk7, uintbOiDYVX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinE7Ttl0d = await EdenCoin.new({from: accounts[1]});
		const addressEI1Vvtz = accounts[0]
		const uintkcyn0Ex = BigInt("1079")
		const addressx3QcGJD = accounts[5]
		const uintX0Wdb2Y = BigInt("1542")
		const addressu0i2EKU = accounts[0]
		const uintM5fNzSy = BigInt("450")
		const addresscf7BDTp = accounts[2]
		const uintI7pYuZH = BigInt("724")
		const addressbxlLW5x = accounts[5]
		const uint256qqDZoLd = await EdenCoinE7Ttl0d.balanceOf.call(addressEI1Vvtz, {from: "0x0000000000000000000000000000000000000001"});
		const boolAd3ZYnz = await EdenCoinE7Ttl0d.approve.call(addressx3QcGJD, uintkcyn0Ex, {from: accounts[0]});
		const boolz5PUdMe = await EdenCoinE7Ttl0d.transfer.call(addressu0i2EKU, uintX0Wdb2Y, {from: accounts[2]});
		const boolUalghw = await EdenCoinE7Ttl0d.increaseApproval.call(addresscf7BDTp, uintM5fNzSy, {from: accounts[1]});
		const boolRUJp1zO = await EdenCoinE7Ttl0d.decreaseApproval.call(addressbxlLW5x, uintI7pYuZH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAd3ZYnz, true)
		assert.equal(uint256qqDZoLd, BigInt("0"))
		await expect(EdenCoinE7Ttl0d.transfer.call(addressu0i2EKU, uintX0Wdb2Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinIM3kE5r = await EdenCoin.new({from: accounts[5]});
		const uintI2cKGFq = BigInt("1132")
		const addresscsHPRqz = accounts[2]
		const uintpYW973j = BigInt("852")
		const addresssDSrhqM = accounts[1]
		const uintrPlELl3 = BigInt("318")
		const addressEEYYMmh = accounts[4]
		const boolMW39Vz = await EdenCoinIM3kE5r.increaseApproval.call(addresscsHPRqz, uintI2cKGFq, {from: accounts[1]});
		const boolwJwMAk0 = await EdenCoinIM3kE5r.increaseApproval.call(addresssDSrhqM, uintpYW973j, {from: accounts[4]});
		const boolmGV3be8 = await EdenCoinIM3kE5r.approve.call(addressEEYYMmh, uintrPlELl3, {from: accounts[0]});

		assert.equal(boolMW39Vz, true)
		assert.equal(boolmGV3be8, true)
		assert.equal(boolwJwMAk0, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinmWCH4GO = await EdenCoin.new({from: accounts[0]});
		const addressoDijKhJ = accounts[2]
		const addressTEyxk4n = accounts[1]
		const uinttxhty4 = BigInt("612")
		const addressMIDh6dn = accounts[0]
		const addressTjsdFjy = accounts[3]
		const uintpzjtiri = BigInt("668")
		const addressPThPySE = accounts[4]
		const uint256pTZNcU2 = await EdenCoinmWCH4GO.allowance.call(addressTEyxk4n, addressoDijKhJ, {from: accounts[3]});
		const boolUYdYkH = await EdenCoinmWCH4GO.transferFrom.call(addressTjsdFjy, addressMIDh6dn, uinttxhty4, {from: "0x0000000000000000000000000000000000000001"});
		const boolA1aTPZD = await EdenCoinmWCH4GO.increaseApproval.call(addressPThPySE, uintpzjtiri, {from: accounts[2]});

		assert.equal(uint256pTZNcU2, BigInt("0"))
		await expect(EdenCoinmWCH4GO.transferFrom.call(addressTjsdFjy, addressMIDh6dn, uinttxhty4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOwFYig = await EdenCoin.new({from: accounts[4]});
		const uintmY35cZK = BigInt("1257")
		const addressK6W5SCS = accounts[1]
		const addressJozu4sj = accounts[4]
		const uintCV0p0zt = BigInt("321")
		const addressUJGuxdV = accounts[5]
		const uintV8FFp7f = BigInt("1665")
		const addressYBgbnzA = accounts[0]
		const addressoh3IgY1 = accounts[4]
		const uintg4l27Ft = BigInt("921")
		const addresshPL8It9 = accounts[2]
		const addressXcLDMzw = accounts[0]
		const uintRqzCui0 = BigInt("433")
		const addressS3tNQla = accounts[4]
		const boolp4Yh9m0 = await EdenCoinOwFYig.transferFrom.call(addressJozu4sj, addressK6W5SCS, uintmY35cZK, {from: accounts[1]});
		const boolZGBvUw9 = await EdenCoinOwFYig.approve.call(addressUJGuxdV, uintCV0p0zt, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ4QtdXP = await EdenCoinOwFYig.transferFrom.call(addressoh3IgY1, addressYBgbnzA, uintV8FFp7f, {from: accounts[4]});
		const bool24MtRA = await EdenCoinOwFYig.transferFrom.call(addressXcLDMzw, addresshPL8It9, uintg4l27Ft, {from: accounts[1]});
		const boolV5IC61i = await EdenCoinOwFYig.approve.call(addressS3tNQla, uintRqzCui0, {from: accounts[3]});

		await expect(EdenCoinOwFYig.transferFrom.call(addressJozu4sj, addressK6W5SCS, uintmY35cZK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinL4aCU3r = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJymPCJh = BigInt("2025")
		const addresspg3e2EJ = accounts[4]
		const uintQg624o = BigInt("1739")
		const addressNdEMPp9 = accounts[2]
		const addresscbjFWDe = accounts[1]
		const uintBa7T1qf = BigInt("1014")
		const addresswCa1ASr = accounts[2]
		const address7u2Spe = accounts[4]
		const addressUnQuxOG = accounts[1]
		const boolXqzp6a = await EdenCoinL4aCU3r.transfer.call(addresspg3e2EJ, uintJymPCJh, {from: accounts[4]});
		const boolpTP3bax = await EdenCoinL4aCU3r.transferFrom.call(addresscbjFWDe, addressNdEMPp9, uintQg624o, {from: accounts[2]});
		const boolS4aMkk2 = await EdenCoinL4aCU3r.approve.call(addresswCa1ASr, uintBa7T1qf, {from: accounts[4]});
		const uint256I6NqipE = await EdenCoinL4aCU3r.allowance.call(addressUnQuxOG, address7u2Spe, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinz7VCmhp = await EdenCoin.new({from: accounts[1]});
		const addressUDiwPmb = accounts[3]
		const uinth9doMzv = BigInt("2042")
		const addressiZF0EGu = accounts[4]
		const uintCqWruL2 = BigInt("675")
		const addressrIMf50q = "0x0000000000000000000000000000000000000001"
		const uintstObub = BigInt("108")
		const addressV8CKjeg = accounts[2]
		const uint256hmhV65e = await EdenCoinz7VCmhp.balanceOf.call(addressUDiwPmb, {from: accounts[4]});
		const boolgX6nUWi = await EdenCoinz7VCmhp.decreaseApproval.call(addressiZF0EGu, uinth9doMzv, {from: accounts[5]});
		const boolycPiekk = await EdenCoinz7VCmhp.transfer.call(addressrIMf50q, uintCqWruL2, {from: accounts[0]});
		const boolRqO6zYC = await EdenCoinz7VCmhp.approve.call(addressV8CKjeg, uintstObub, {from: accounts[2]});

		assert.equal(boolgX6nUWi, true)
		assert.equal(uint256hmhV65e, BigInt("0"))
		await expect(EdenCoinz7VCmhp.transfer.call(addressrIMf50q, uintCqWruL2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoincsLM9AY = await EdenCoin.new({from: accounts[1]});
		const uintsmH4uGG = BigInt("606")
		const addressNDQNyb = accounts[4]
		const uintkkeVd2 = BigInt("479")
		const addressnJrjQPJ = accounts[0]
		const uintom7UD07 = BigInt("1987")
		const addressDToClc = accounts[4]
		const addresssmQRhz = accounts[1]
		const boolzWq1iTe = await EdenCoincsLM9AY.approve.call(addressNDQNyb, uintsmH4uGG, {from: accounts[3]});
		const boolcYMswll = await EdenCoincsLM9AY.decreaseApproval.call(addressnJrjQPJ, uintkkeVd2, {from: accounts[4]});
		const boolfWPBvbP = await EdenCoincsLM9AY.transfer.call(addressDToClc, uintom7UD07, {from: accounts[1]});
		const uint256k6dVpom = await EdenCoincsLM9AY.balanceOf.call(addresssmQRhz, {from: accounts[5]});

		assert.equal(boolcYMswll, true)
		assert.equal(boolfWPBvbP, true)
		assert.equal(boolzWq1iTe, true)
		assert.equal(uint256k6dVpom, BigInt("1000000000000000000000000000"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoincsLM9AY = await EdenCoin.new({from: accounts[1]});
		const addressOEq1OI = accounts[3]
		const addressO72EOSH = accounts[0]
		const uint7DaY8g = BigInt("0")
		const addressjTVmquu = accounts[6]
		const uintQB64FDl = BigInt("1756")
		const addressxQPO1cC = accounts[3]
		const uintEW0IZY8 = BigInt("610")
		const addressle1UC0z = accounts[4]
		const addresszTlTz1 = accounts[5]
		const addresswKzeExz = accounts[4]
		const uintczMSWXy = BigInt("1371")
		const addressjqKh6Pi = accounts[2]
		const uintQ18g5kc = BigInt("345")
		const addressm1B8Cj = accounts[3]
		const addressVPF8936 = accounts[1]
		const uintUn5AcjJ = BigInt("1707")
		const address13NZms = accounts[5]
		const uintLbiaMeW = BigInt("1812")
		const addresseFTBtW1 = accounts[1]
		const addresseOIXvLS = accounts[0]
		const addressvIhYrJR = accounts[5]
		const uintJ7C6FKm = BigInt("401")
		const addressT2S7fGp = accounts[4]
		const addressyF6oN2k = accounts[5]
		const addressYO3sCUh = accounts[3]
		const addressoEIGZHP = accounts[1]
		const uintuoidZRv = BigInt("350")
		const addresstoSL5NU = accounts[4]
		const uintAqgKo2W = BigInt("1214")
		const addressom63has = accounts[1]
		const addressxQz0svA = accounts[1]
		const uintqshyVu = BigInt("1277")
		const addressnYpVeG = accounts[1]
		const uintLbvp3KO = BigInt("1700")
		const addressfK2h3g3 = accounts[3]
		const addressv1hAaWk = accounts[2]
		const addressaB6ZC2C = "0x0000000000000000000000000000000000000001"
		const uintInaXgcE = BigInt("2025")
		const addressefdp2P = accounts[0]
		const uintcik7i7 = BigInt("1706")
		const addresskBw29wK = accounts[2]
		const addressoqp6RFR = accounts[1]
		const uint256vq27jKk = await EdenCoincsLM9AY.allowance.call(addressO72EOSH, addressOEq1OI, {from: "0x0000000000000000000000000000000000000001"});
		const booliEDXH3T = await EdenCoincsLM9AY.decreaseApproval.call(addressjTVmquu, uint7DaY8g, {from: accounts[0]});
		const boolvErsP7s = await EdenCoincsLM9AY.increaseApproval.call(addressxQPO1cC, uintQB64FDl, {from: accounts[4]});
		const boolzWq1iTe = await EdenCoincsLM9AY.approve.call(addressle1UC0z, uintEW0IZY8, {from: accounts[3]});
		const uint256b6d3zRx = await EdenCoincsLM9AY.allowance.call(addresswKzeExz, addresszTlTz1, {from: accounts[1]});
		const boolWhmb8of = await EdenCoincsLM9AY.increaseApproval.call(addressjqKh6Pi, uintczMSWXy, {from: accounts[0]});
		const boolO4BI8t = await EdenCoincsLM9AY.transferFrom.call(addressVPF8936, addressm1B8Cj, uintQ18g5kc, {from: accounts[3]});
		const boolNMWHyT = await EdenCoincsLM9AY.increaseApproval.call(address13NZms, uintUn5AcjJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolxzhxeh6 = await EdenCoincsLM9AY.transferFrom.call(addresseOIXvLS, addresseFTBtW1, uintLbiaMeW, {from: accounts[4]});
		const uint256ZjXm5YM = await EdenCoincsLM9AY.balanceOf.call(addressvIhYrJR, {from: accounts[0]});
		const boolAdkSOl6 = await EdenCoincsLM9AY.transferFrom.call(addressyF6oN2k, addressT2S7fGp, uintJ7C6FKm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VycZLQ = await EdenCoincsLM9AY.allowance.call(addressoEIGZHP, addressYO3sCUh, {from: "0x0000000000000000000000000000000000000001"});
		const boolbksKKJ = await EdenCoincsLM9AY.approve.call(addresstoSL5NU, uintuoidZRv, {from: accounts[0]});
		const boolvGSB8yi = await EdenCoincsLM9AY.transferFrom.call(addressxQz0svA, addressom63has, uintAqgKo2W, {from: accounts[2]});
		const boollknGlVV = await EdenCoincsLM9AY.approve.call(addressnYpVeG, uintqshyVu, {from: accounts[4]});
		const boolKV2HxAQ = await EdenCoincsLM9AY.approve.call(addressfK2h3g3, uintLbvp3KO, {from: accounts[4]});
		const uint256FtSMUMi = await EdenCoincsLM9AY.allowance.call(addressaB6ZC2C, addressv1hAaWk, {from: accounts[1]});
		const booliAUeyWD = await EdenCoincsLM9AY.decreaseApproval.call(addressefdp2P, uintInaXgcE, {from: accounts[3]});
		const boolesl3wHu = await EdenCoincsLM9AY.decreaseApproval.call(addresskBw29wK, uintcik7i7, {from: accounts[3]});
		const uint256Hor3ktq = await EdenCoincsLM9AY.balanceOf.call(addressoqp6RFR, {from: accounts[4]});

		assert.equal(boolWhmb8of, true)
		assert.equal(booliEDXH3T, true)
		assert.equal(boolvErsP7s, true)
		assert.equal(boolzWq1iTe, true)
		assert.equal(uint256b6d3zRx, BigInt("0"))
		assert.equal(uint256vq27jKk, BigInt("0"))
		await expect(EdenCoincsLM9AY.transferFrom.call(addressVPF8936, addressm1B8Cj, uintQ18g5kc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})