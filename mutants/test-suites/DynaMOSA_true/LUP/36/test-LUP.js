const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringERxc5qx = "S1jt2TaH8DXSxjJlFiHJa9nee2fbVKGxIUmW44zvfAR9rHYYrHLCrzKaMAcM9MqRpwDMHLX5pSFMweNHRvtmOip32c"
		const stringTPw5sY = "bd3FIToEBgRCI7yo2cFHTPbBWva1COdmRIi"
		const uintkvGSARX = BigInt("14")
		const LUPMQyO2So = await LUP.new(stringERxc5qx, stringTPw5sY, uintkvGSARX, {from: accounts[3]});
		const uintHXF6EDJ = BigInt("1189")
		const uintXq1NpWS = BigInt("1041")
		const addressB6Ai1P = accounts[2]
		const uintSxaWVL8 = BigInt("316")
		const addressUXnoeLV = accounts[0]
		const uintWAw4MnH = BigInt("306")
		const addressIIE4q5s = accounts[3]
		const boolds5H3G6 = await LUPMQyO2So.transferWithLock.call(addressB6Ai1P, uintXq1NpWS, uintHXF6EDJ, {from: accounts[2]});
		const boolZoploJo = await LUPMQyO2So.transfer.call(addressUXnoeLV, uintSxaWVL8, {from: accounts[2]});
		const boolQChpTP = await LUPMQyO2So.transfer.call(addressIIE4q5s, uintWAw4MnH, {from: accounts[0]});
		const stringh53PEAu = await LUPMQyO2So.symbol.call({from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPUfvo07u = await LUP.new({from: accounts[0]});
		const uintN3GA8l8 = BigInt("1067")
		const uintuizuLOY = BigInt("1266")
		const addressiaIajH = accounts[4]
		const addresserhp3D8 = accounts[4]
		const uintRQcIZH6 = BigInt("2014")
		const uintPx4EiU = BigInt("1656")
		const addressUfItJzz = accounts[1]
//		const booldlFSLBb = await LUPUfvo07u.lock.call(addressiaIajH, uintuizuLOY, uintN3GA8l8, {from: accounts[2]});
//		const uint256YLZTz4V = await LUPUfvo07u.balanceOf.call(addresserhp3D8, {from: accounts[5]});
//		const boolyaKG9bJ = await LUPUfvo07u.lock.call(addressUfItJzz, uintPx4EiU, uintRQcIZH6, {from: accounts[3]});

		await expect(LUPUfvo07u.lock.call(addressiaIajH, uintuizuLOY, uintN3GA8l8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPQHGHGrZ = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressa9JbbQO = accounts[2]
		const addressreepUCo = accounts[3]
		const uint8vFHKj1 = await LUPQHGHGrZ.decimals.call({from: accounts[0]});
		const string1iYM4L = await LUPQHGHGrZ.name.call({from: accounts[2]});
		const uint256X04nXnc = await LUPQHGHGrZ.balanceOf.call(addressa9JbbQO, {from: accounts[3]});
		const addressKceWfqg = await LUPQHGHGrZ.upgradeTo.call(addressreepUCo, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPJgBq0m = await LUP.new({from: accounts[5]});
		const uintYa7fHY5 = BigInt("265")
		const addressl9RLrxH = accounts[1]
		const uintW8kVlqP = BigInt("44")
		const addresse14TaQV = accounts[4]
		const addressOJdqbx = accounts[3]
		const uintL59CCTg = BigInt("1059")
		const uintTzP3tpG = BigInt("1887")
		const addressNWt3Oe9 = accounts[0]
		const uints2AFkwh = BigInt("200")
		const uint3f9BGI = BigInt("1383")
		const addressyZkT32C = accounts[3]
//		const boolGX1wdAF = await LUPJgBq0m.unlock.call(addressl9RLrxH, uintYa7fHY5, {from: accounts[5]});
//		const boolz0y41M3 = await LUPJgBq0m.unlock.call(addresse14TaQV, uintW8kVlqP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2561Sotj2 = await LUPJgBq0m.balanceOf.call(addressOJdqbx, {from: accounts[3]});
//		const boolevhJrGC = await LUPJgBq0m.transferWithLock.call(addressNWt3Oe9, uintTzP3tpG, uintL59CCTg, {from: accounts[0]});
//		const boolFejhwp2 = await LUPJgBq0m.transferWithLock.call(addressyZkT32C, uint3f9BGI, uints2AFkwh, {from: accounts[2]});
//		const stringD8OOFBa = await LUPJgBq0m.symbol.call({from: accounts[0]});

		await expect(LUPJgBq0m.unlock.call(addressl9RLrxH, uintYa7fHY5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPyuz8hhw = await LUP.new({from: accounts[2]});
		const uintpx4FPe4 = BigInt("1588")
		const uintPoJBlcC = BigInt("119")
		const addressHRZaFPF = accounts[4]
		const boolvM1wXye = await LUPyuz8hhw.transferWithLock.call(addressHRZaFPF, uintPoJBlcC, uintpx4FPe4, {from: accounts[2]});
		const stringt12etjz = await LUPyuz8hhw.name.call({from: accounts[5]});
		const stringPocHIEC = await LUPyuz8hhw.symbol.call({from: accounts[2]});
		const stringoGP8JV = await LUPyuz8hhw.symbol.call({from: accounts[3]});

		assert.equal(boolvM1wXye, true)
		assert.equal(stringPocHIEC, "LUP")
		assert.equal(stringoGP8JV, "LUP")
		assert.equal(stringt12etjz, "LINKUP Token")
	});

	it('test for LUP', async () => {
		const LUPBHWQTHz = await LUP.new({from: accounts[0]});
		const addressBvAaJOf = accounts[0]
		const uintzKc8F9E = BigInt("501")
		const uintmguqWHN = BigInt("19")
		const addressDBY1JC = accounts[5]
//		const addresssntTjm = await LUPBHWQTHz.notFrozen.call(addressBvAaJOf, {from: accounts[0]});
//		const boolpIbFcJ = await LUPBHWQTHz.lock.call(addressDBY1JC, uintmguqWHN, uintzKc8F9E, {from: accounts[1]});
//		const stringGAuWKG = await LUPBHWQTHz.name.call({from: accounts[4]});

		await expect(LUPBHWQTHz.notFrozen.call(addressBvAaJOf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvXcvZEv = await LUP.new({from: accounts[0]});
		const stringcTdFss9 = await LUPvXcvZEv.symbol.call({from: accounts[4]});
		const uint8PC6qrmD = await LUPvXcvZEv.decimals.call({from: accounts[2]});

		assert.equal(stringcTdFss9, "LUP")
		assert.equal(uint8PC6qrmD, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPJgBq0m = await LUP.new({from: accounts[5]});
		const boolofbiiMp = false
		const addressZvLMyJI = "0x0000000000000000000000000000000000000001"
		const uintzOrveID = BigInt("265")
		const addressH4VHDmw = accounts[1]
		const uintLX56AsF = BigInt("1435")
		const uintwrLMsUY = BigInt("1004")
		const addressU9DhS6C = "0x0000000000000000000000000000000000000001"
		const uintFsmN27H = BigInt("44")
		const address3C3oKN = accounts[4]
		const addresso5Tqy4 = accounts[3]
		const uintQcFS2uv = BigInt("1080")
		const uintrpKPj2q = BigInt("1887")
		const addressRXuJ3ln = accounts[0]
		const boolWlcZaUf = await LUPJgBq0m.freezeAccount.call(addressZvLMyJI, boolofbiiMp, {from: accounts[5]});
//		const boolGX1wdAF = await LUPJgBq0m.unlock.call(addressH4VHDmw, uintzOrveID, {from: accounts[5]});
//		const booljkdjcnp = await LUPJgBq0m.lock.call(addressU9DhS6C, uintwrLMsUY, uintLX56AsF, {from: accounts[3]});
//		const boolz0y41M3 = await LUPJgBq0m.unlock.call(address3C3oKN, uintFsmN27H, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2561Sotj2 = await LUPJgBq0m.balanceOf.call(addresso5Tqy4, {from: accounts[3]});
//		const boolevhJrGC = await LUPJgBq0m.transferWithLock.call(addressRXuJ3ln, uintrpKPj2q, uintQcFS2uv, {from: accounts[0]});
//		const stringD8OOFBa = await LUPJgBq0m.symbol.call({from: accounts[0]});

		assert.equal(boolWlcZaUf, true)
		await expect(LUPJgBq0m.unlock.call(addressH4VHDmw, uintzOrveID, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPUfvo07u = await LUP.new({from: accounts[0]});
		const addresssPaFlGz = accounts[2]
		const uintOrDHAZL = BigInt("1067")
		const uinthDJhYDH = BigInt("1266")
		const addressY0xip5r = accounts[4]
		const uintxBYNe12 = BigInt("1742")
		const uintUxLCESw = BigInt("1656")
		const addressWx5IZFH = accounts[1]
		const uint256LGEpEdf = await LUPUfvo07u.balanceOf.call(addresssPaFlGz, {from: accounts[0]});
//		const booldlFSLBb = await LUPUfvo07u.lock.call(addressY0xip5r, uinthDJhYDH, uintOrDHAZL, {from: accounts[2]});
//		const stringVCtNAib = await LUPUfvo07u.symbol.call({from: accounts[3]});
//		const boolyaKG9bJ = await LUPUfvo07u.lock.call(addressWx5IZFH, uintUxLCESw, uintxBYNe12, {from: accounts[3]});

		assert.equal(uint256LGEpEdf, BigInt("0"))
		await expect(LUPUfvo07u.lock.call(addressY0xip5r, uinthDJhYDH, uintOrDHAZL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPUfvo07u = await LUP.new({from: accounts[0]});
		const addressKWgrGt8 = accounts[5]
		const uintcCkAVSy = BigInt("288")
		const addressdiAKz8q = accounts[3]
		const uintBcAcHk1 = BigInt("1549")
		const uintupkqDH3 = BigInt("1266")
		const addressB4sJkJZ = accounts[4]
		const uinty4sa3vY = BigInt("618")
		const addressUFEKeTM = accounts[1]
		const uintDRT7xxg = BigInt("1987")
		const uintJ3iYuMK = BigInt("1656")
		const addressDMPHGtC = accounts[1]
		const uint256FR0Kyz1 = await LUPUfvo07u.balanceOf.call(addressKWgrGt8, {from: accounts[4]});
//		const boolUSdnSgH = await LUPUfvo07u.transfer.call(addressdiAKz8q, uintcCkAVSy, {from: accounts[5]});
//		const booldlFSLBb = await LUPUfvo07u.lock.call(addressB4sJkJZ, uintupkqDH3, uintBcAcHk1, {from: accounts[2]});
//		const boolSyu6d2H = await LUPUfvo07u.unlock.call(addressUFEKeTM, uinty4sa3vY, {from: accounts[3]});
//		const boolyaKG9bJ = await LUPUfvo07u.lock.call(addressDMPHGtC, uintJ3iYuMK, uintDRT7xxg, {from: accounts[3]});

		assert.equal(uint256FR0Kyz1, BigInt("0"))
		await expect(LUPUfvo07u.transfer.call(addressdiAKz8q, uintcCkAVSy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPUfvo07u = await LUP.new({from: accounts[0]});
		const addressONF9F9g = accounts[3]
		const addressy9C1f9F = accounts[4]
		const uint8XAFGBnw = await LUPUfvo07u.decimals.call({from: accounts[3]});
		const uint256LGEpEdf = await LUPUfvo07u.balanceOf.call(addressONF9F9g, {from: accounts[0]});
		const addressbetxWD = await LUPUfvo07u.upgradeTo.call(addressy9C1f9F, {from: accounts[0]});
		const stringVCtNAib = await LUPUfvo07u.symbol.call({from: accounts[3]});

		assert.equal(stringVCtNAib, "LUP")
		assert.equal(uint256LGEpEdf, BigInt("0"))
		assert.equal(uint8XAFGBnw, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPJgBq0m = await LUP.new({from: accounts[5]});
		const addressXhvhW0M = accounts[5]
		const uint502gqp = BigInt("265")
		const addressx4yxGnv = accounts[1]
		const uintG9uFkZu = BigInt("44")
		const addressr616xd = accounts[4]
		const addressmSO6oq = accounts[3]
		const uinthEoSSw = BigInt("1059")
		const uintCcGziat = BigInt("1887")
		const addressFrZmMsz = accounts[0]
//		const addressoYZTLfX = await LUPJgBq0m.upgradeTo.call(addressXhvhW0M, {from: accounts[2]});
//		const boolGX1wdAF = await LUPJgBq0m.unlock.call(addressx4yxGnv, uint502gqp, {from: accounts[5]});
//		const boolz0y41M3 = await LUPJgBq0m.unlock.call(addressr616xd, uintG9uFkZu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2561Sotj2 = await LUPJgBq0m.balanceOf.call(addressmSO6oq, {from: accounts[3]});
//		const boolevhJrGC = await LUPJgBq0m.transferWithLock.call(addressFrZmMsz, uintCcGziat, uinthEoSSw, {from: accounts[0]});
//		const stringD8OOFBa = await LUPJgBq0m.symbol.call({from: accounts[0]});

		await expect(LUPJgBq0m.upgradeTo.call(addressXhvhW0M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOlAhkPC = await LUP.new({from: accounts[4]});
		const uintRx4yqW = BigInt("1834")
		const uintgwhMqOe = BigInt("1759")
		const addressTM050AH = accounts[3]
		const uintvfPcw5t = BigInt("332")
		const addresszPcAzeb = accounts[2]
		const boolW9qSXVe = false
		const addressDEF4d9j = accounts[3]
		const boolgMXfVGi = false
		const addressjLcfhe = accounts[3]
//		const boolgJPcofb = await LUPOlAhkPC.lock.call(addressTM050AH, uintgwhMqOe, uintRx4yqW, {from: accounts[4]});
//		const boolfAqrMZ5 = await LUPOlAhkPC.unlock.call(addresszPcAzeb, uintvfPcw5t, {from: accounts[4]});
//		const boolddug1dD = await LUPOlAhkPC.freezeAccount.call(addressDEF4d9j, boolW9qSXVe, {from: accounts[4]});
//		const boolDSxabNY = await LUPOlAhkPC.freezeAccount.call(addressjLcfhe, boolgMXfVGi, {from: accounts[4]});

		await expect(LUPOlAhkPC.lock.call(addressTM050AH, uintgwhMqOe, uintRx4yqW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOlAhkPC = await LUP.new({from: accounts[4]});
		const uintV3Ml7F9 = BigInt("1834")
		const uintX5FHob = BigInt("1759")
		const addressoux4ZTM = accounts[4]
		const uintEqZB2H = BigInt("1131")
		const uintKJqhwfT = BigInt("1964")
		const addressnOlPuez = accounts[3]
		const boolW9qSXVe = false
		const addresskKDD4rq = accounts[3]
		const boolgJPcofb = await LUPOlAhkPC.lock.call(addressoux4ZTM, uintX5FHob, uintV3Ml7F9, {from: accounts[4]});
//		const boolGbHHQrs = await LUPOlAhkPC.lock.call(addressnOlPuez, uintKJqhwfT, uintEqZB2H, {from: accounts[2]});
//		const boolddug1dD = await LUPOlAhkPC.freezeAccount.call(addresskKDD4rq, boolW9qSXVe, {from: accounts[4]});

		assert.equal(boolgJPcofb, true)
		await expect(LUPOlAhkPC.lock.call(addressnOlPuez, uintKJqhwfT, uintEqZB2H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})