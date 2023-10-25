const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelix86ZEy6 = await XenoFelix.new({from: accounts[2]});
		const addressfvThCX = accounts[1]
		const addressCXB3pkh = accounts[2]
		const uintF1wepkw = BigInt("875")
		const addressNOk5SUf = accounts[0]
		const addressjGYNwLQ = accounts[2]
		const uint256TbM6YHb = await XenoFelix86ZEy6.allowance.call(addressCXB3pkh, addressfvThCX, {from: accounts[0]});
		const uint8wgGI8uS = await XenoFelix86ZEy6.decimals.call({from: accounts[5]});
		await XenoFelix86ZEy6.unpause.call({from: accounts[4]});
		const boolxs1X056 = await XenoFelix86ZEy6.transferFrom.call(addressjGYNwLQ, addressNOk5SUf, uintF1wepkw, {from: accounts[2]});
		const boolWP4pBVd = await XenoFelix86ZEy6.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringJK8yePx = "b0kCuZJd59i3Pl5nO10OFuNgFjs3TvaD"
		const stringkspz4x5 = "jXg5K5QqjP2BgRqVxoH1j6YjSp7qJt"
		const uintidrxS7Z = BigInt("1583")
		const uintosUREM = BigInt("27")
		const XenoFelixPQLnqCy = await XenoFelix.new(stringJK8yePx, stringkspz4x5, uintidrxS7Z, uintosUREM, {from: accounts[0]});
		const addressYCw58ex = accounts[1]
		const uintRejvWbz = BigInt("1855")
		const addressHv24IsP = accounts[4]
//		await XenoFelixPQLnqCy.pause.call({from: accounts[1]});
//		const addressC3sgiY = await XenoFelixPQLnqCy.transferOwnership.call(addressYCw58ex, {from: accounts[4]});
//		const stringje3grDV = await XenoFelixPQLnqCy.name.call({from: accounts[3]});
//		await XenoFelixPQLnqCy.renouncePauser.call({from: accounts[4]});
//		const boolz5g5JRF = await XenoFelixPQLnqCy.approve.call(addressHv24IsP, uintRejvWbz, {from: accounts[3]});

		await expect(XenoFelixPQLnqCy.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringa78lE4 = "ldwgzCvIFdX6ZjtwQ3IlQ6DYaVO0DRPvbu66RNHJIIXRqGyhRrwxGWfwqxMl"
		const stringvg4vRdP = "0T48WQCKowgBDihXWLP7WuvKXRlpBqeBUS6J10Aa1fsutinl5YcndKgvraFBMKUlzN9"
		const uintV84igJv = BigInt("112")
		const XenoFelixnKcBrtf = await XenoFelix.new(stringa78lE4, stringvg4vRdP, uintV84igJv, {from: accounts[0]});
		const uintGGZDfT8 = BigInt("434")
		const addressVC1s83W = accounts[3]
		const addressDEnJgN3 = accounts[3]
		const booliCxXVtg = await XenoFelixnKcBrtf.paused.call({from: accounts[0]});
		const boolUepCsCp = await XenoFelixnKcBrtf.burnOwner.call(addressVC1s83W, uintGGZDfT8, {from: "0x0000000000000000000000000000000000000001"});
		const stringRdxbs5c = await XenoFelixnKcBrtf.symbol.call({from: accounts[2]});
		const boolHcbcrKi = await XenoFelixnKcBrtf.unfreezeAccount.call(addressDEnJgN3, {from: accounts[3]});
		await XenoFelixnKcBrtf.whenNotPaused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringcPKiLtB = "XeJpQLRBCN9j"
		const stringSnwNiWg = "Rjyp0E7q6P2N2gzjD6IROQOhcl1lruJEXLOt80A3HLaXeIMRjjgwmUPN8plK62o"
		const uintFjcNcNO = BigInt("1843")
		const uint7LvfDU = BigInt("156")
		const XenoFelixaZq0oPM = await XenoFelix.new(stringcPKiLtB, stringSnwNiWg, uintFjcNcNO, uint7LvfDU, {from: accounts[0]});
		const uinthMEIuda = BigInt("489")
		const addresscViWih5 = accounts[2]
		const uintzvJKhK = BigInt("547")
		const addressb6zujmF = "0x0000000000000000000000000000000000000001"
		const uintY6XMt2F = BigInt("1213")
		const addressl9xGCd = accounts[1]
		const uintiBOMzFo = BigInt("303")
		const addressyi3pQ4k = "0x0000000000000000000000000000000000000001"
		const addresslxkpzLJ = accounts[2]
		const uintSsaBG6P = BigInt("36")
		const uintVqHecQN = BigInt("580")
		const addressBVALim8 = accounts[2]
		const boolDFLpjCv = await XenoFelixaZq0oPM.transfer.call(addresscViWih5, uinthMEIuda, {from: accounts[0]});
//		const boolEEQL5r0 = await XenoFelixaZq0oPM.unlock.call(addressb6zujmF, uintzvJKhK, {from: accounts[2]});
//		await XenoFelixaZq0oPM.unpause.call({from: accounts[2]});
//		const boolpb2iu7F = await XenoFelixaZq0oPM.decreaseAllowance.call(addressl9xGCd, uintY6XMt2F, {from: accounts[0]});
//		const boolsGPUOm5 = await XenoFelixaZq0oPM.transferFrom.call(addresslxkpzLJ, addressyi3pQ4k, uintiBOMzFo, {from: accounts[2]});
//		const boolLgrBVrv = await XenoFelixaZq0oPM.lock.call(addressBVALim8, uintVqHecQN, uintSsaBG6P, {from: accounts[0]});

		assert.equal(boolDFLpjCv, true)
		await expect(XenoFelixaZq0oPM.unlock.call(addressb6zujmF, uintzvJKhK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXSonRC = "XwTq8dAIPEQI2n4jfL"
		const stringnNEVVt2 = "d6Ju"
		const uintge7tCqA = BigInt("230")
		const XenoFelixapPs3Cd = await XenoFelix.new(stringXSonRC, stringnNEVVt2, uintge7tCqA, {from: accounts[4]});
		const addresslWlWfGD = accounts[2]
		const uintfBTgJi3 = BigInt("752")
		const addressuRBkLey = accounts[1]
		const addresslw2VXYD = accounts[1]
		const addressMt0IGbp = accounts[3]
		const uintLzng8ls = BigInt("77")
		const addressDJZeuEq = accounts[2]
		const boolxjguBPa = await XenoFelixapPs3Cd.isPauser.call(addresslWlWfGD, {from: accounts[5]});
		const boolgS0Urz1 = await XenoFelixapPs3Cd.burnOwner.call(addressuRBkLey, uintfBTgJi3, {from: accounts[1]});
		const addresseSXBAU = await XenoFelixapPs3Cd.removePauser.call(addresslw2VXYD, {from: accounts[5]});
		const boolMsm14n = await XenoFelixapPs3Cd.paused.call({from: accounts[4]});
		const addressZJQTGuY = await XenoFelixapPs3Cd.removePauser.call(addressMt0IGbp, {from: accounts[0]});
		const boolOcd3XsL = await XenoFelixapPs3Cd.increaseAllowance.call(addressDJZeuEq, uintLzng8ls, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringXt3VQs = "F5FpJUHVe4YQ5SPBkK8XKujMo61sFo5X1oWKST4RSA8HsiTtRlFTzXwIrJuWJplG7Hbwf6qXZVQKiVdsXEATSQ3DNYYU10"
		const stringklP8mti = "p89nu2tJ4yT5y1cmLlQOXcCYbGrJnZ"
		const uintjIBjtgj = BigInt("22")
		const XenoFelixPwiUBjW = await XenoFelix.new(stringXt3VQs, stringklP8mti, uintjIBjtgj, {from: accounts[1]});
		const uintmPeUKBo = BigInt("1409")
		const addressCftFtHk = accounts[0]
		const uintNSETXH = BigInt("513")
		const addresslKdkjF = accounts[0]
		const boolvV5haFg = await XenoFelixPwiUBjW.burnOwner.call(addressCftFtHk, uintmPeUKBo, {from: accounts[4]});
		await XenoFelixPwiUBjW.whenPaused.call({from: accounts[4]});
		await XenoFelixPwiUBjW.renouncePauser.call({from: accounts[3]});
		const boolNZV8q4K = await XenoFelixPwiUBjW.burnOwner.call(addresslKdkjF, uintNSETXH, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintekfUpN0 = BigInt("150")
		const uintCKkwUE = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintekfUpN0, uintCKkwUE, {from: accounts[3]});
		const addresseiNF6iy = accounts[2]
		const uintbCpUfzr = BigInt("1824")
		const addressEmbdKQ0 = "0x0000000000000000000000000000000000000000"
		const uintV9NAgQ5 = BigInt("605")
		const addressKLPGYAI = accounts[3]
		const addressBqkWqol = accounts[0]
		const addressL96ljEp = "0x0000000000000000000000000000000000000001"
		const uint256Hn7LPs = await XenoFelixqhRUHDQ.balanceOf.call(addresseiNF6iy, {from: accounts[1]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressEmbdKQ0, uintbCpUfzr, {from: accounts[2]});
//		const boolGkwx5Sy = await XenoFelixqhRUHDQ.decreaseAllowance.call(addressKLPGYAI, uintV9NAgQ5, {from: accounts[2]});
//		const addressmzmPSUw = await XenoFelixqhRUHDQ.notFrozenAndTransaction.call(addressL96ljEp, addressBqkWqol, {from: accounts[1]});

		assert.equal(uint256Hn7LPs, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.transfer.call(addressEmbdKQ0, uintbCpUfzr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringy03vlfO = "fgoQEkkm7N1DdgUD3F3cXuPL9G9"
		const stringEd50GHA = "8IKJqODfnfy7PtyosmMqUK3EtkBPAn5SsSnfz6B37CkUxMkGMu9Pcz0ozKm"
		const uintadf13iY = BigInt("82")
		const XenoFelixH3wTt3I = await XenoFelix.new(stringy03vlfO, stringEd50GHA, uintadf13iY, {from: accounts[2]});
		const uintTdn2lVu = BigInt("332")
		const addresseYfKbvM = accounts[4]
		const addresscoY1akX = accounts[5]
		const addressUAhOkHy = accounts[1]
		const addressOXng5Ta = accounts[1]
		await XenoFelixH3wTt3I.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpLB8qWd = await XenoFelixH3wTt3I.transfer.call(addresseYfKbvM, uintTdn2lVu, {from: accounts[0]});
		const uint256dBTCxOd = await XenoFelixH3wTt3I.allowance.call(addressUAhOkHy, addresscoY1akX, {from: accounts[4]});
		const addressKHGmqh7 = await XenoFelixH3wTt3I.addPauser.call(addressOXng5Ta, {from: accounts[3]});
		await XenoFelixH3wTt3I.onlyPauser.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintxbK1vLA = BigInt("150")
		const uintSDk0PeB = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintxbK1vLA, uintSDk0PeB, {from: accounts[3]});
		const addressDCZUJoN = accounts[0]
		const uintZTav6hU = BigInt("1507")
		const address35gJd2 = accounts[2]
		const uinttCnkXv = BigInt("1848")
		const addressR0uRmUd = "0x0000000000000000000000000000000000000001"
		const stringTP67XA = await XenoFelixqhRUHDQ.symbol.call({from: accounts[2]});
		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressDCZUJoN, {from: accounts[2]});
//		const boolcRVXpzA = await XenoFelixqhRUHDQ.unlock.call(address35gJd2, uintZTav6hU, {from: accounts[2]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressR0uRmUd, uinttCnkXv, {from: accounts[2]});

		assert.equal(stringTP67XA, "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS")
		assert.equal(uint256zqoK8W4, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.unlock.call(address35gJd2, uintZTav6hU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintQlNX5rG = BigInt("150")
		const uintkiCfrI = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintQlNX5rG, uintkiCfrI, {from: accounts[3]});
		const addressGMrNAQc = accounts[1]
		const uintINyObG9 = BigInt("1482")
		const addressxbhbhZh = accounts[2]
		const uintEm0tbpR = BigInt("1848")
		const addressDgD8IL9 = "0x0000000000000000000000000000000000000001"
		const addressIxefZ71 = accounts[5]
		const stringi0wbyi7 = await XenoFelixqhRUHDQ.name.call({from: accounts[3]});
		const boolLHeDl85 = await XenoFelixqhRUHDQ.paused.call({from: accounts[2]});
		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressGMrNAQc, {from: accounts[2]});
//		const boolcRVXpzA = await XenoFelixqhRUHDQ.unlock.call(addressxbhbhZh, uintINyObG9, {from: accounts[2]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressDgD8IL9, uintEm0tbpR, {from: accounts[2]});
//		const uint256YhdbyG = await XenoFelixqhRUHDQ.balanceOf.call(addressIxefZ71, {from: accounts[4]});

		assert.equal(boolLHeDl85, false)
		assert.equal(stringi0wbyi7, "LvdiC2rnXS6RCje6aZC8NMjIM4Vn")
		assert.equal(uint256zqoK8W4, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.unlock.call(addressxbhbhZh, uintINyObG9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintSzdsKGD = BigInt("150")
		const uinto6Ha6mu = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintSzdsKGD, uinto6Ha6mu, {from: accounts[3]});
		const uintMbVjHO6 = BigInt("1823")
		const addressuHpp8Gf = "0x0000000000000000000000000000000000000001"
//		await XenoFelixqhRUHDQ.whenNotPaused.call({from: accounts[0]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressuHpp8Gf, uintMbVjHO6, {from: accounts[2]});

		await expect(XenoFelixqhRUHDQ.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintmRk8A2M = BigInt("150")
		const uintPwyS5EC = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintmRk8A2M, uintPwyS5EC, {from: accounts[3]});
		const uintJi2JcDw = BigInt("44")
		const addressaRSi3o = accounts[1]
		const addressdTzW27B = accounts[3]
		const uintwt1P7Pq = BigInt("504")
		const addressgoHS9c6 = "0x0000000000000000000000000000000000000001"
		const stringvtVUxV6 = await XenoFelixqhRUHDQ.symbol.call({from: accounts[4]});
//		const booluaRbm1i = await XenoFelixqhRUHDQ.transferFrom.call(addressdTzW27B, addressaRSi3o, uintJi2JcDw, {from: accounts[2]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressgoHS9c6, uintwt1P7Pq, {from: accounts[2]});

		assert.equal(stringvtVUxV6, "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS")
		await expect(XenoFelixqhRUHDQ.transferFrom.call(addressdTzW27B, addressaRSi3o, uintJi2JcDw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintgDyP24C = BigInt("150")
		const uintmmsgN8G = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintgDyP24C, uintmmsgN8G, {from: accounts[3]});
		const uintEuRxfU8 = BigInt("1185")
		const address5jAivt = accounts[5]
		const uintToYQ5uX = BigInt("1808")
		const addressIwlao9 = "0x0000000000000000000000000000000000000001"
		const uint8O8xiYXv = await XenoFelixqhRUHDQ.decimals.call({from: accounts[0]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(address5jAivt, uintEuRxfU8, {from: accounts[4]});
//		const boolAH5LR0R = await XenoFelixqhRUHDQ.transfer.call(addressIwlao9, uintToYQ5uX, {from: accounts[2]});

		assert.equal(uint8O8xiYXv, BigInt("137"))
		await expect(XenoFelixqhRUHDQ.burnOwner.call(address5jAivt, uintEuRxfU8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringOpUbCw7 = "4CRMzsp6VYKIueICVrvwK0C8OPfxJtGYDaWg"
		const stringGnfg3dS = "4fCtxhbcmwjm7F8BlfxLoOXIMt9foUm8VY1"
		const uintqR8OwE = BigInt("85")
		const XenoFelixi74qUAb = await XenoFelix.new(stringOpUbCw7, stringGnfg3dS, uintqR8OwE, {from: accounts[5]});
		const addressyiW589j = accounts[3]
		const addressoPhpKvs = accounts[4]
		const uintBKLUaRZ = BigInt("462")
		const addressvoQQ6UE = accounts[2]
		const addressyeA6k9x = accounts[0]
		const uintsLf3JfZ = BigInt("1316")
		const addressaZedDS = accounts[1]
		await XenoFelixi74qUAb.unpause.call({from: accounts[0]});
		const boolJfSfwyO = await XenoFelixi74qUAb.isOwner.call(addressyiW589j, {from: accounts[3]});
		const boolxY5RZi = await XenoFelixi74qUAb.isOwner.call(addressoPhpKvs, {from: "0x0000000000000000000000000000000000000001"});
		const boolFhSMgSM = await XenoFelixi74qUAb.transferFrom.call(addressyeA6k9x, addressvoQQ6UE, uintBKLUaRZ, {from: accounts[3]});
		const stringXLEfjBV = await XenoFelixi74qUAb.symbol.call({from: accounts[0]});
		const boolgufWzML = await XenoFelixi74qUAb.burnOwner.call(addressaZedDS, uintsLf3JfZ, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintquxzP0W = BigInt("150")
		const uintdIILTxQ = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintquxzP0W, uintdIILTxQ, {from: accounts[3]});
		const addressXqiRd6O = accounts[3]
		const uintsoz04DL = BigInt("708")
		const address6GsGdJ = accounts[3]
		const addressKH3MEvG = accounts[0]
		const uintORy91zz = BigInt("1848")
		const addressHWyyBjC = "0x0000000000000000000000000000000000000001"
		const uint256L6l3XSh = await XenoFelixqhRUHDQ.balanceOf.call(addressXqiRd6O, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCDGeHbt = await XenoFelixqhRUHDQ.decreaseAllowance.call(address6GsGdJ, uintsoz04DL, {from: accounts[1]});
//		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressKH3MEvG, {from: accounts[2]});
//		const booloXrbvp9 = await XenoFelixqhRUHDQ.acceptOwnership.call({from: accounts[1]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressHWyyBjC, uintORy91zz, {from: accounts[2]});

		assert.equal(uint256L6l3XSh, BigInt("6082428418612766781059824882418999999981686013387733435655321030059861475328"))
		await expect(XenoFelixqhRUHDQ.decreaseAllowance.call(address6GsGdJ, uintsoz04DL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintUWEBUeD = BigInt("150")
		const uintNdyzyFg = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintUWEBUeD, uintNdyzyFg, {from: accounts[3]});
		const addressMd82asf = accounts[3]
		const uintuaME119 = BigInt("1185")
		const addressbT1rBHf = accounts[5]
		const uint256OP3Iss = await XenoFelixqhRUHDQ.totalSupply.call({from: accounts[1]});
//		const addressbS6sEk1 = await XenoFelixqhRUHDQ.transferOwnership.call(addressMd82asf, {from: accounts[4]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressbT1rBHf, uintuaME119, {from: accounts[4]});

		assert.equal(uint256OP3Iss, BigInt("6082428418612766781059824882418999999981686013387733435655321030059861475328"))
		await expect(XenoFelixqhRUHDQ.transferOwnership.call(addressMd82asf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintUENCKlk = BigInt("150")
		const uintd93RFBG = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintUENCKlk, uintd93RFBG, {from: accounts[3]});
		const uintjVAYhg = BigInt("378")
		const addressvPZxWac = accounts[3]
		const uintidhWkgJ = BigInt("96")
		const uintYNKWjRg = BigInt("1166")
		const addressusoECN = accounts[3]
		const uintbXjNP09 = BigInt("1185")
		const addressikATEA = accounts[4]
		const boolPl83zk6 = await XenoFelixqhRUHDQ.increaseAllowance.call(addressvPZxWac, uintjVAYhg, {from: "0x0000000000000000000000000000000000000001"});
//		const booliDOBZWX = await XenoFelixqhRUHDQ.transferWithLock.call(addressusoECN, uintYNKWjRg, uintidhWkgJ, {from: accounts[1]});
//		await XenoFelixqhRUHDQ.whenPaused.call({from: accounts[4]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressikATEA, uintbXjNP09, {from: accounts[4]});

		assert.equal(boolPl83zk6, true)
		await expect(XenoFelixqhRUHDQ.transferWithLock.call(addressusoECN, uintYNKWjRg, uintidhWkgJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoh86opv = "oLHJW7bw8LwEGgiIY6ZabbOunXL6L4cx68Ya5Y3nvBg3s2jyNrKm8QHzHbsJdbC4FWIbv0wbxK9zFJFqRSHoq"
		const stringkU3EMpI = "jb96HSyOHSKcwe0s4LMpBIAdDC98vmj0HKuf5HeqApH0hIAFtSrNQm8AlNaQLrH463m2wcvedBguja6Fa"
		const uintA8YP9zS = BigInt("50")
		const XenoFelixlibw9eZ = await XenoFelix.new(stringoh86opv, stringkU3EMpI, uintA8YP9zS, {from: accounts[3]});
		const addressRAeJViF = "0x0000000000000000000000000000000000000001"
		const uint8g8PTHlL = await XenoFelixlibw9eZ.decimals.call({from: accounts[4]});
		await XenoFelixlibw9eZ.onlyPauser.call({from: accounts[5]});
		await XenoFelixlibw9eZ.renouncePauser.call({from: accounts[3]});
		const uint256yPhiifk = await XenoFelixlibw9eZ.balanceOf.call(addressRAeJViF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringh4TTbi6 = "I3gH0MfCfdNmCoyGYSkQ4YgDiumUQ1gI6jTAKT7rSlmR5vEALdvaYeJMfUgM19WZ6o8GYNNnoc6Vxj"
		const stringGcHLP2 = "NIu8eI8yDUAUUFQQBJ2bzr8MvnRnt0aAeL9oPIgfXRNRtG6crcTEqkGrpYKBqrE"
		const uintyFkkieU = BigInt("1722")
		const uintD4r2509 = BigInt("97")
		const XenoFelixj2xC1Jt = await XenoFelix.new(stringh4TTbi6, stringGcHLP2, uintyFkkieU, uintD4r2509, {from: "0x0000000000000000000000000000000000000001"});
		const addressYYXAhqS = accounts[0]
		const addressFeJ7jRv = await XenoFelixj2xC1Jt.removePauser.call(addressYYXAhqS, {from: accounts[3]});
		await XenoFelixj2xC1Jt.whenNotPaused.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintlYxwIEu = BigInt("150")
		const uintAHaViJ = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintlYxwIEu, uintAHaViJ, {from: accounts[3]});
		const uintbvbDv4 = BigInt("1440")
		const addressOMpeM3 = accounts[1]
		const addresscJ4QbZ = accounts[0]
		const uintTnDy4gh = BigInt("1198")
		const addressBdHYlGI = accounts[4]
//		const addressTQt3n6v = await XenoFelixqhRUHDQ.burnFrom.call(addressOMpeM3, uintbvbDv4, {from: accounts[4]});
//		const address6bVKeO = await XenoFelixqhRUHDQ.transferOwnership.call(addresscJ4QbZ, {from: accounts[4]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressBdHYlGI, uintTnDy4gh, {from: accounts[4]});

		await expect(XenoFelixqhRUHDQ.burnFrom.call(addressOMpeM3, uintbvbDv4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintQUedFX8 = BigInt("150")
		const uintJIRjmFZ = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintQUedFX8, uintJIRjmFZ, {from: accounts[3]});
		const addressbHt3Iam = accounts[1]
		const uintcEmAe2E = BigInt("148")
		const addressK09441J = accounts[0]
		const uintHHvtW1d = BigInt("1825")
		const addressMQctN3y = "0x0000000000000000000000000000000000000001"
		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressbHt3Iam, {from: accounts[2]});
//		const boolJgU5W1C = await XenoFelixqhRUHDQ.burnOwner.call(addressK09441J, uintcEmAe2E, {from: accounts[3]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressMQctN3y, uintHHvtW1d, {from: accounts[2]});

		assert.equal(uint256zqoK8W4, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.burnOwner.call(addressK09441J, uintcEmAe2E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintgmfnF6U = BigInt("150")
		const uintHVwXCjS = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintgmfnF6U, uintHVwXCjS, {from: accounts[3]});
		const addressntgZxI5 = accounts[1]
		const addresshrBpor8 = accounts[4]
		const uintiYfOiia = BigInt("1843")
		const addressEK9Rn0 = "0x0000000000000000000000000000000000000001"
		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressntgZxI5, {from: accounts[2]});
		const addressotRrTx2 = await XenoFelixqhRUHDQ.addPauser.call(addresshrBpor8, {from: accounts[3]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressEK9Rn0, uintiYfOiia, {from: accounts[2]});

		assert.equal(uint256zqoK8W4, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.transfer.call(addressEK9Rn0, uintiYfOiia, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintRdM8lbu = BigInt("150")
		const uintc8Tq1H = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintRdM8lbu, uintc8Tq1H, {from: accounts[3]});
		const addressq7zmbSg = accounts[1]
		const uintgkOEM6x = BigInt("732")
		const uintUnAkkqU = BigInt("1838")
		const addressB6Xl9EZ = "0x0000000000000000000000000000000000000001"
		const uint256zqoK8W4 = await XenoFelixqhRUHDQ.balanceOf.call(addressq7zmbSg, {from: accounts[2]});
//		const uint256vEFlksz = await XenoFelixqhRUHDQ.burn.call(uintgkOEM6x, {from: "0x0000000000000000000000000000000000000001"});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressB6Xl9EZ, uintUnAkkqU, {from: accounts[2]});

		assert.equal(uint256zqoK8W4, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.burn.call(uintgkOEM6x, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintREErSM2 = BigInt("150")
		const uintQK8cQ7D = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintREErSM2, uintQK8cQ7D, {from: accounts[3]});
		const uintF2iHyFI = BigInt("1260")
		const addressgjUVbRD = accounts[4]
		const uintsaDTvxV = BigInt("762")
		const addressLaWSb1t = accounts[4]
//		await XenoFelixqhRUHDQ.pause.call({from: accounts[3]});
//		const boolqN70ldv = await XenoFelixqhRUHDQ.transfer.call(addressgjUVbRD, uintF2iHyFI, {from: accounts[3]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressLaWSb1t, uintsaDTvxV, {from: accounts[4]});
//		const uint256saBmMVn = await XenoFelixqhRUHDQ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixqhRUHDQ.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintihN9gKG = BigInt("150")
		const uintaalDJCm = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintihN9gKG, uintaalDJCm, {from: accounts[3]});
		const uintUhoOK1v = BigInt("1185")
		const addressm0yRlfs = accounts[5]
//		await XenoFelixqhRUHDQ.renouncePauser.call({from: accounts[5]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressm0yRlfs, uintUhoOK1v, {from: accounts[4]});

		await expect(XenoFelixqhRUHDQ.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintD1hNbya = BigInt("150")
		const uintvwQ0jDV = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintD1hNbya, uintvwQ0jDV, {from: accounts[3]});
		const addressRZoJDB4 = accounts[0]
		const addressEu8nRF3 = accounts[4]
		const addressXYm61fs = accounts[2]
		const addresspLBVI1h = accounts[5]
		const addresss3rzbEp = accounts[1]
		const uintRPDLb1C = BigInt("504")
		const addresscMq2acy = "0x0000000000000000000000000000000000000002"
		const uint256JAGjd1m = await XenoFelixqhRUHDQ.allowance.call(addressEu8nRF3, addressRZoJDB4, {from: accounts[0]});
		const uint256BT0WQEh = await XenoFelixqhRUHDQ.allowance.call(addresspLBVI1h, addressXYm61fs, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXnBQH4 = await XenoFelixqhRUHDQ.addPauser.call(addresss3rzbEp, {from: accounts[0]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addresscMq2acy, uintRPDLb1C, {from: accounts[2]});

		assert.equal(uint256BT0WQEh, BigInt("0"))
		assert.equal(uint256JAGjd1m, BigInt("0"))
		await expect(XenoFelixqhRUHDQ.addPauser.call(addresss3rzbEp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintEVFTBHE = BigInt("150")
		const uintWaRCDmE = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintEVFTBHE, uintWaRCDmE, {from: accounts[3]});
		const uint8vmMeH = BigInt("1555")
		const addressxetcTjt = accounts[3]
		const uintTvwPJ2 = BigInt("1185")
		const addressfVTsTDJ = accounts[5]
		const boolAhRJZHG = await XenoFelixqhRUHDQ.approve.call(addressxetcTjt, uint8vmMeH, {from: accounts[1]});
		const stringD8z3Oe = await XenoFelixqhRUHDQ.symbol.call({from: accounts[1]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressfVTsTDJ, uintTvwPJ2, {from: accounts[4]});

		assert.equal(boolAhRJZHG, true)
		assert.equal(stringD8z3Oe, "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS")
		await expect(XenoFelixqhRUHDQ.burnOwner.call(addressfVTsTDJ, uintTvwPJ2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintklX5Ekz = BigInt("150")
		const uintBD8pRTE = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintklX5Ekz, uintBD8pRTE, {from: accounts[3]});
		const addressASYSNA7 = "0x0000000000000000000000000000000000000001"
		const uintkI706WG = BigInt("1867")
		const addresslx5EqY4 = "0x0000000000000000000000000000000000000001"
		const boolRHKjXc1 = await XenoFelixqhRUHDQ.paused.call({from: accounts[0]});
//		const addressA9FVhDF = await XenoFelixqhRUHDQ.removePauser.call(addressASYSNA7, {from: accounts[3]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addresslx5EqY4, uintkI706WG, {from: accounts[2]});

		assert.equal(boolRHKjXc1, false)
		await expect(XenoFelixqhRUHDQ.removePauser.call(addressASYSNA7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintSTMvCrM = BigInt("150")
		const uint7ZlmSl = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintSTMvCrM, uint7ZlmSl, {from: accounts[3]});
		const addressOVVXKJ5 = "0x0000000000000000000000000000000000000001"
		const addressqcOR8Pc = accounts[4]
		const uintVv9JQd = BigInt("409")
		const addresskt4l2kF = accounts[3]
		const addressQpl2IUZ = accounts[2]
		const uintvd42drA = BigInt("1896")
		const addressP4QgeTP = accounts[4]
//		const boolvxz7D5s = await XenoFelixqhRUHDQ.unfreezeAccount.call(addressOVVXKJ5, {from: accounts[3]});
//		const boolkK0DZck = await XenoFelixqhRUHDQ.unfreezeAccount.call(addressqcOR8Pc, {from: accounts[4]});
//		const boolYLxsbkY = await XenoFelixqhRUHDQ.transferFrom.call(addressQpl2IUZ, addresskt4l2kF, uintVv9JQd, {from: accounts[3]});
//		const boolpqAfhgi = await XenoFelixqhRUHDQ.burnOwner.call(addressP4QgeTP, uintvd42drA, {from: accounts[4]});

		await expect(XenoFelixqhRUHDQ.unfreezeAccount.call(addressOVVXKJ5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintTAah6W5 = BigInt("150")
		const uintxCvOfs8 = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintTAah6W5, uintxCvOfs8, {from: accounts[3]});
		const uintOmt9iQK = BigInt("1888")
		const uintou0nw8V = BigInt("46")
		const addressHPIDeI = accounts[0]
		const uintg4n915F = BigInt("1827")
		const addressdh1GpMl = "0x0000000000000000000000000000000000000001"
//		const boolb2oWZzp = await XenoFelixqhRUHDQ.lock.call(addressHPIDeI, uintou0nw8V, uintOmt9iQK, {from: accounts[3]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressdh1GpMl, uintg4n915F, {from: accounts[2]});

		await expect(XenoFelixqhRUHDQ.lock.call(addressHPIDeI, uintou0nw8V, uintOmt9iQK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcltdUiz = "LvdiC2rnXS6RCje6aZC8NMjIM4Vn"
		const stringjvnpBl7 = "hirJ2c4lUARmszCRoemtdCTcedrfamBP7yfPqIRAn9TUJOWumdIKDVyP4kS"
		const uintLBYcqHn = BigInt("150")
		const uintg7NZSUU = BigInt("137")
		const XenoFelixqhRUHDQ = await XenoFelix.new(stringcltdUiz, stringjvnpBl7, uintLBYcqHn, uintg7NZSUU, {from: accounts[3]});
		const uintSXqsKfP = BigInt("1277")
		const uint02Xdci = BigInt("324")
		const addressxaoQ4wA = accounts[5]
		const uintXeeaBuj = BigInt("1824")
		const addressc7dUKrh = "0x0000000000000000000000000000000000000000"
		const boolmVftysX = await XenoFelixqhRUHDQ.transferWithLock.call(addressxaoQ4wA, uint02Xdci, uintSXqsKfP, {from: accounts[3]});
//		await XenoFelixqhRUHDQ.whenNotPaused.call({from: accounts[3]});
//		const booluudTwX4 = await XenoFelixqhRUHDQ.transfer.call(addressc7dUKrh, uintXeeaBuj, {from: accounts[2]});

		assert.equal(boolmVftysX, true)
		await expect(XenoFelixqhRUHDQ.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})