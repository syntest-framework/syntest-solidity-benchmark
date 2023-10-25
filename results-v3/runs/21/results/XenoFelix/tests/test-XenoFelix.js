const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixyNHiZBI = await XenoFelix.new({from: accounts[2]});
		const uintEm42tB = BigInt("1532")
		const addressh23PFZj = accounts[0]
		const addressP2umNHD = accounts[1]
		await XenoFelixyNHiZBI.onlyOwner.call({from: accounts[4]});
		const boolYaaBfm4 = await XenoFelixyNHiZBI.burnOwner.call(addressh23PFZj, uintEm42tB, {from: accounts[2]});
		const addressBuR2uBE = await XenoFelixyNHiZBI.notFrozen.call(addressP2umNHD, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringrew4WZp = "yTBUb4ylddzU6XjoFKsGd1nr8yzuveCRxndfvuYKb171oKclLGwUdh87xiRgUVPsSpVlTILbHY4"
		const stringuginYFL = "Soa36wnIBI"
		const uintvRxyYwo = BigInt("195")
		const XenoFelixlWgjxs = await XenoFelix.new(stringrew4WZp, stringuginYFL, uintvRxyYwo, {from: accounts[5]});
		const uintBRk7DRI = BigInt("560")
		const addressG0yqWQc = accounts[1]
		const addressC0rYkSp = accounts[1]
		await XenoFelixlWgjxs.onlyNewOwner.call({from: accounts[3]});
		const boolsueeOgK = await XenoFelixlWgjxs.burnOwner.call(addressG0yqWQc, uintBRk7DRI, {from: accounts[0]});
		const uint256JaTj1Vi = await XenoFelixlWgjxs.balanceOf.call(addressC0rYkSp, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringTBjLcb = "mjffsBg0eOEwdvNIx2cyy5GnTO5YEK9PEA4Z3kiB"
		const stringLIih0m7 = "P7gTluAsTTeaufSQvXoN0xspEnGA1HcbwbJfjT9ceaKOXJ7ZXMiEWfFssuuc9jFeY6sZe0Xq38fuUnQlPnpMFlRP5P"
		const uintYoihrWg = BigInt("21")
		const XenoFelixVgyAcS3 = await XenoFelix.new(stringTBjLcb, stringLIih0m7, uintYoihrWg, {from: "0x0000000000000000000000000000000000000001"});
		const uintzJF475h = BigInt("571")
		const addressREDAA7B = accounts[2]
		const uintxSWFzJ2 = BigInt("966")
		const addressvsHzshU = accounts[3]
		const address6g7uyb = accounts[4]
		const addressXU0Gdo5 = accounts[2]
		const addresspmzDQz6 = accounts[4]
		const booljn8gE6 = await XenoFelixVgyAcS3.transfer.call(addressREDAA7B, uintzJF475h, {from: accounts[0]});
		const stringLpZ06R8 = await XenoFelixVgyAcS3.symbol.call({from: accounts[3]});
		const boolRCp4I7o = await XenoFelixVgyAcS3.transferFrom.call(address6g7uyb, addressvsHzshU, uintxSWFzJ2, {from: accounts[0]});
		await XenoFelixVgyAcS3.unpause.call({from: accounts[3]});
		const uint256VjO5quR = await XenoFelixVgyAcS3.allowance.call(addresspmzDQz6, addressXU0Gdo5, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringVVeg42 = "FkSMBjiUTjR8pJWjNKe"
		const stringIlfF9p7 = "OBzTi73mMzdJuEKnNqPR6QOszVO7iTEqCf1QRbUe1V2AJNBHhOfS5z8vtfrz7wwN66qCs1TzodsniOqwQhx"
		const uintJqbZ4He = BigInt("947")
		const uintn43larM = BigInt("47")
		const XenoFelixz8NEIFI = await XenoFelix.new(stringVVeg42, stringIlfF9p7, uintJqbZ4He, uintn43larM, {from: accounts[0]});
		const uintX5vkM4d = BigInt("1065")
		const addresssqkZgIQ = accounts[1]
		const boolOEksvv6 = await XenoFelixz8NEIFI.unlock.call(addresssqkZgIQ, uintX5vkM4d, {from: accounts[3]});
		const stringImSOuYM = await XenoFelixz8NEIFI.name.call({from: accounts[1]});
		const stringQOcnNOV = await XenoFelixz8NEIFI.name.call({from: accounts[0]});
		const uint256CKyfNEs = await XenoFelixz8NEIFI.totalSupply.call({from: accounts[4]});

		await expect(XenoFelixz8NEIFI.unlock.call(addresssqkZgIQ, uintX5vkM4d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringVVeg42 = "FkSMBjiUTjR8pJWjNKe"
		const stringIlfF9p7 = "OBzTi73mMzdJuEKnNqPR6QOszVO7iTEqCf1QRbUe1V2AJNBHhOfS5z8vtfrz7wwN66qCs1TzodsniOqwQhx"
		const uintnM5XQMy = BigInt("947")
		const uintKhFS2W = BigInt("47")
		const XenoFelixz8NEIFI = await XenoFelix.new(stringVVeg42, stringIlfF9p7, uintnM5XQMy, uintKhFS2W, {from: accounts[0]});
		const uintwCBvKN = BigInt("1065")
		const addressG8urHaY = accounts[1]
		await XenoFelixz8NEIFI.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOEksvv6 = await XenoFelixz8NEIFI.unlock.call(addressG8urHaY, uintwCBvKN, {from: accounts[3]});
		const stringImSOuYM = await XenoFelixz8NEIFI.name.call({from: accounts[1]});
		const stringQOcnNOV = await XenoFelixz8NEIFI.name.call({from: accounts[0]});
		const uint256CKyfNEs = await XenoFelixz8NEIFI.totalSupply.call({from: accounts[4]});

		await expect(XenoFelixz8NEIFI.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintVUwaHhj = BigInt("436")
		const uintQ78CKgW = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintVUwaHhj, uintQ78CKgW, {from: accounts[3]});
		const addresswG9Riik = accounts[3]
		const addressFi1XCsb = accounts[3]
		const addressJOjdFPK = accounts[0]
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addresswG9Riik, {from: accounts[4]});
		const stringiji0lBs = await XenoFelixlXkl7JI.name.call({from: accounts[2]});
		const boolH7lFyl9 = await XenoFelixlXkl7JI.acceptOwnership.call({from: accounts[5]});
		const uint256pst0P97 = await XenoFelixlXkl7JI.balanceOf.call(addressFi1XCsb, {from: accounts[4]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressJOjdFPK, {from: accounts[2]});

		assert.equal(stringiji0lBs, "bolY")
		assert.equal(uint256dIGahYK, BigInt("761467177518140437453517201147065464232676880389031475175544673413609029632"))
		await expect(XenoFelixlXkl7JI.acceptOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintDd3Gtuu = BigInt("436")
		const uint2zXz9h = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintDd3Gtuu, uint2zXz9h, {from: accounts[3]});
		const uintuhIyetf = BigInt("1250")
		const addressdK4LCH = accounts[1]
		const addressEljQ3jR = accounts[3]
		const addressqsqL2BO = accounts[2]
		const addressRiy4JgF = accounts[1]
		const addressii41Iw = accounts[3]
		const addressuPVlXdB = accounts[0]
		const addressPhpuaV = await XenoFelixlXkl7JI.burnFrom.call(addressdK4LCH, uintuhIyetf, {from: accounts[2]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressEljQ3jR, {from: accounts[4]});
		const stringiji0lBs = await XenoFelixlXkl7JI.name.call({from: accounts[2]});
		const boolH7lFyl9 = await XenoFelixlXkl7JI.acceptOwnership.call({from: accounts[5]});
		const addressIva06gs = await XenoFelixlXkl7JI.notFrozenAndTransaction.call(addressRiy4JgF, addressqsqL2BO, {from: accounts[1]});
		const uint256pst0P97 = await XenoFelixlXkl7JI.balanceOf.call(addressii41Iw, {from: accounts[4]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressuPVlXdB, {from: accounts[2]});

		await expect(XenoFelixlXkl7JI.burnFrom.call(addressdK4LCH, uintuhIyetf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintphcEGC6 = BigInt("436")
		const uintJI6qYRS = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintphcEGC6, uintJI6qYRS, {from: accounts[3]});
		const addressUBHEspI = accounts[3]
		const addressckxYPNA = accounts[3]
		const addressONQ8ims = accounts[4]
		const uintTp78fEu = BigInt("985")
		const addressB6ky59T = "0x0000000000000000000000000000000000000001"
		const addressgs2G1ez = accounts[5]
		const addressZ29awfB = accounts[0]
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressUBHEspI, {from: accounts[4]});
		const uint256tFV5TuS = await XenoFelixlXkl7JI.allowance.call(addressONQ8ims, addressckxYPNA, {from: accounts[3]});
		const bool7IrLxx = await XenoFelixlXkl7JI.transferFrom.call(addressgs2G1ez, addressB6ky59T, uintTp78fEu, {from: accounts[2]});
		const boolH7lFyl9 = await XenoFelixlXkl7JI.acceptOwnership.call({from: accounts[5]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressZ29awfB, {from: accounts[2]});

		assert.equal(uint256dIGahYK, BigInt("761467177518140437453517201147065464232676880389031475175544673413609029632"))
		assert.equal(uint256tFV5TuS, BigInt("0"))
		await expect(XenoFelixlXkl7JI.transferFrom.call(addressgs2G1ez, addressB6ky59T, uintTp78fEu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSn0cAPW = "ouSsOjSdnFtKY9UZTy0VRO9m4HI4Fi5BsNuQz5gU6GwrZy6X2LvfNQcvScMYM6SaSUrcoI2OHl"
		const stringgOz97q2 = "wWEuJ4db1q9kTOZnXORD7TSLs2PwVWvSf0bfnk3hhUMPyyFCZ1MZtUE6vJVKpojjXaBiJizk755LlPi8d4idrjojV2yjb7"
		const uintwIFLrjg = BigInt("144")
		const XenoFelixlz6UaWQ = await XenoFelix.new(stringSn0cAPW, stringgOz97q2, uintwIFLrjg, {from: accounts[1]});
		const addressyiUq50P = accounts[5]
		const uinthTtAMsY = BigInt("221")
		const addressEil0du7 = accounts[4]
		const addressGN3woZ9 = accounts[0]
		const addresssBGmzzT = accounts[2]
		const boolMk3MVLz = await XenoFelixlz6UaWQ.paused.call({from: accounts[2]});
		const addressEjjkEwv = await XenoFelixlz6UaWQ.addPauser.call(addressyiUq50P, {from: accounts[0]});
		const booltrSmoLR = await XenoFelixlz6UaWQ.transferFrom.call(addressGN3woZ9, addressEil0du7, uinthTtAMsY, {from: accounts[3]});
		const addressafYQI4 = await XenoFelixlz6UaWQ.removePauser.call(addresssBGmzzT, {from: accounts[0]});
		const uint256i7bWkmb = await XenoFelixlz6UaWQ.totalSupply.call({from: accounts[4]});
		await XenoFelixlz6UaWQ.onlyNewOwner.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintbqWXzW6 = BigInt("436")
		const uintE1pIgk3 = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintbqWXzW6, uintE1pIgk3, {from: accounts[3]});
		const addressNnLNGHX = accounts[4]
		const uintid44g9M = BigInt("1720")
		const addressvTaK4gu = accounts[4]
		const uintFBxO8s6 = BigInt("927")
		const addresspVR7UzR = accounts[3]
		const addressWCcZ5ps = accounts[0]
		const uintwK93coN = BigInt("1530")
		const addresstTTAgpT = accounts[4]
		const addressKZzFbI = accounts[0]
		const addressbJg0zCR = accounts[0]
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressNnLNGHX, {from: accounts[4]});
		const boolST1YM6o = await XenoFelixlXkl7JI.transfer.call(addressvTaK4gu, uintid44g9M, {from: "0x0000000000000000000000000000000000000001"});
		const boolH7lFyl9 = await XenoFelixlXkl7JI.acceptOwnership.call({from: accounts[5]});
		const boolWRWU1nW = await XenoFelixlXkl7JI.transferFrom.call(addressWCcZ5ps, addresspVR7UzR, uintFBxO8s6, {from: accounts[2]});
		const booleh9RYqM = await XenoFelixlXkl7JI.transferFrom.call(addressKZzFbI, addresstTTAgpT, uintwK93coN, {from: accounts[2]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressbJg0zCR, {from: accounts[2]});

		assert.equal(uint256dIGahYK, BigInt("0"))
		await expect(XenoFelixlXkl7JI.transfer.call(addressvTaK4gu, uintid44g9M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringO9dpLBS = "NpOC8ZEIaELasn9HAxuVAiajInfhUUQ5FjSAYIyofctHEqqLv9Op92dMmqlpKNv1z807qlW"
		const stringjTJbB06 = "9B4ySomw3ZQukVJr75WPejHfdssbj6V8fYMvhEY9AaW2"
		const uintIwoYmVs = BigInt("147")
		const XenoFelixIGvEDzY = await XenoFelix.new(stringO9dpLBS, stringjTJbB06, uintIwoYmVs, {from: accounts[4]});
		const uintMNf4LM2 = BigInt("1845")
		const addressmKSj7Gn = accounts[2]
		const addressae73sgq = accounts[2]
		const addresskxnrZ9 = "0x0000000000000000000000000000000000000001"
		const addressUph6ICT = accounts[1]
		await XenoFelixIGvEDzY.whenPaused.call({from: accounts[4]});
		const boolGvv2CTj = await XenoFelixIGvEDzY.transferFrom.call(addressae73sgq, addressmKSj7Gn, uintMNf4LM2, {from: accounts[3]});
		const addressXo6rjKj = await XenoFelixIGvEDzY.notFrozenAndTransaction.call(addressUph6ICT, addresskxnrZ9, {from: "0x0000000000000000000000000000000000000001"});
		const boolu0ZS3dY = await XenoFelixIGvEDzY.paused.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintjcQzn0q = BigInt("436")
		const uintCO5HCg = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintjcQzn0q, uintCO5HCg, {from: accounts[3]});
		const uintZYrmRsb = BigInt("153")
		const addressBA44gBF = "0x0000000000000000000000000000000000000001"
		const addressiETVdT8 = accounts[3]
		const uintE7EOtFd = BigInt("1064")
		const uintPOL25VU = BigInt("325")
		const addressrfHl0qJ = accounts[4]
		const addressdZ1Baqc = accounts[0]
		const boolkagJvKx = await XenoFelixlXkl7JI.decreaseAllowance.call(addressBA44gBF, uintZYrmRsb, {from: accounts[0]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressiETVdT8, {from: accounts[4]});
		const boolTIyrpzm = await XenoFelixlXkl7JI.transferWithLock.call(addressrfHl0qJ, uintPOL25VU, uintE7EOtFd, {from: accounts[1]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressdZ1Baqc, {from: accounts[2]});

		await expect(XenoFelixlXkl7JI.decreaseAllowance.call(addressBA44gBF, uintZYrmRsb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintFNSTGyy = BigInt("436")
		const uintRxjcxGV = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintFNSTGyy, uintRxjcxGV, {from: accounts[3]});
		const addressOoWvvm = accounts[0]
		const addressiz4qjgn = accounts[5]
		const addressanqcA76 = accounts[0]
		const uint256pI9Omrx = await XenoFelixlXkl7JI.allowance.call(addressiz4qjgn, addressOoWvvm, {from: accounts[3]});
		const boolLZ0LuuM = await XenoFelixlXkl7JI.paused.call({from: accounts[4]});
		const boolDebaYs = await XenoFelixlXkl7JI.isOwner.call(addressanqcA76, {from: accounts[2]});

		assert.equal(boolDebaYs, false)
		assert.equal(boolLZ0LuuM, false)
		assert.equal(uint256pI9Omrx, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringBCYuefL = "HWICQXbN6kzX1gShRMGDFjLjzfr3U1IMzTpu1hxvft2JnSx17DwQ"
		const stringPTYyEgd = "yebTRpfLuzys1XGneRJU8EKUojxc44UGhvFGUKPwi9HxerJddVyt1BcFgmyvCMMyZkWiLML4DlPN9ppuTvxmUvgrzWR"
		const uintDD47WtO = BigInt("27")
		const XenoFelixqwOj8ec = await XenoFelix.new(stringBCYuefL, stringPTYyEgd, uintDD47WtO, {from: accounts[2]});
		const uintUp46cR9 = BigInt("1674")
		const addressAxfoPBn = accounts[5]
		const addressBnD2es9 = accounts[3]
		const uintOaEPx4b = BigInt("1698")
		const addresspIzzDsm = accounts[2]
		const addresslFGDPP = accounts[3]
		await XenoFelixqwOj8ec.onlyPauser.call({from: accounts[5]});
		const boolAEvvxHH = await XenoFelixqwOj8ec.transferFrom.call(addressBnD2es9, addressAxfoPBn, uintUp46cR9, {from: "0x0000000000000000000000000000000000000001"});
		const boolnu1DD2M = await XenoFelixqwOj8ec.transferFrom.call(addresslFGDPP, addresspIzzDsm, uintOaEPx4b, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringAx1JI2g = "Gx8w2yj7fcb2828PJATe9B6y8OZQDNpkS1f5d3hNFqqlTyhJYhn2UeOQwCBCUX91tmWY593q5LhPST8aE"
		const stringqsIvtVB = "ZVK8y6CN85QAjGDhyPLwTNDDipX4JxSvPQFV6C9Rorpabyjh4nzyAympy1MKJWShPXrcvUr3yJEafHP23NuitFsjHCRqUAMk"
		const uintrjV2Hus = BigInt("60")
		const XenoFelix1ywTwT = await XenoFelix.new(stringAx1JI2g, stringqsIvtVB, uintrjV2Hus, {from: accounts[0]});
		const uinteEjbk4K = BigInt("1016")
		const addressAAz5hC = accounts[4]
		const addressEkZ08NZ = accounts[0]
		const uintH4rK63l = BigInt("1595")
		const addressFzdrjUk = accounts[2]
		const addressZvstuhX = accounts[2]
		const addressLP5c2fG = accounts[3]
		const boolQznvBjO = await XenoFelix1ywTwT.transferFrom.call(addressEkZ08NZ, addressAAz5hC, uinteEjbk4K, {from: accounts[1]});
		const boolBcm14cV = await XenoFelix1ywTwT.acceptOwnership.call({from: accounts[2]});
		const boolpfNvCgh = await XenoFelix1ywTwT.transferFrom.call(addressZvstuhX, addressFzdrjUk, uintH4rK63l, {from: accounts[1]});
		const uint256CsDuxw8 = await XenoFelix1ywTwT.totalSupply.call({from: accounts[4]});
		const addresseEc8o6p = await XenoFelix1ywTwT.notFrozen.call(addressLP5c2fG, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintcE1XWUr = BigInt("436")
		const uintNy0sdqv = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintcE1XWUr, uintNy0sdqv, {from: accounts[3]});
		const uintxPXD5A7 = BigInt("224")
		const addressVGIvAv2 = accounts[5]
		const uint256KXAbKJP = await XenoFelixlXkl7JI.burn.call(uintxPXD5A7, {from: accounts[0]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressVGIvAv2, {from: accounts[4]});

		await expect(XenoFelixlXkl7JI.burn.call(uintxPXD5A7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintjbdVK6k = BigInt("436")
		const uintX29RMAG = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintjbdVK6k, uintX29RMAG, {from: accounts[3]});
		const addresspZSFBl = accounts[5]
		const uint8kJgEng = await XenoFelixlXkl7JI.decimals.call({from: accounts[3]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addresspZSFBl, {from: accounts[4]});

		assert.equal(uint256dIGahYK, BigInt("0"))
		assert.equal(uint8kJgEng, BigInt("111"))
	});

	it('test for XenoFelix', async () => {
		const stringXX5doZn = "6CgFuNsyJRsfo12OMC95gtW"
		const stringRSIhuS5 = "LgdDp6i6cifWTx3ni7DUUTUDHsKawFHgAErUalJPdTvLdatsVyOsmVo6a03n1pxmZzBuO2PsIlLnWF"
		const uinthSHdQ87 = BigInt("1393")
		const uint9oXvn0 = BigInt("127")
		const XenoFelixkdVCsE = await XenoFelix.new(stringXX5doZn, stringRSIhuS5, uinthSHdQ87, uint9oXvn0, {from: accounts[0]});
		const addressk2iJBt3 = accounts[2]
		const uintJ8PdyFs = BigInt("1029")
		const uintH4sx1rX = BigInt("543")
		const addressN6MVLT3 = accounts[2]
		const addressNr5nbaw = accounts[2]
		const addressHPfSW8U = accounts[5]
		const addresssXkSSS9 = await XenoFelixkdVCsE.transferOwnership.call(addressk2iJBt3, {from: accounts[0]});
		const boolG8V37Pl = await XenoFelixkdVCsE.transferWithLock.call(addressN6MVLT3, uintH4sx1rX, uintJ8PdyFs, {from: accounts[0]});
		const addressngvi9la = await XenoFelixkdVCsE.notFrozenAndTransaction.call(addressHPfSW8U, addressNr5nbaw, {from: accounts[2]});

		assert.equal(boolG8V37Pl, true)
		await expect(XenoFelixkdVCsE.notFrozenAndTransaction.call(addressHPfSW8U, addressNr5nbaw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintZV7M8QN = BigInt("436")
		const uintPjrQJd = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintZV7M8QN, uintPjrQJd, {from: accounts[3]});
		const addressGAKL3m9 = accounts[1]
		const addressglKj9zi = accounts[4]
		const addressrQ6q7qn = accounts[3]
		const addresslxdxS1V = accounts[4]
		const uintBp9o2jE = BigInt("985")
		const addressQxwodi6 = "0x0000000000000000000000000000000000000001"
		const addressd6pFi8M = accounts[6]
		const uint256BabEKxz = await XenoFelixlXkl7JI.balanceOf.call(addressGAKL3m9, {from: "0x0000000000000000000000000000000000000001"});
		const addressismmkgS = await XenoFelixlXkl7JI.addPauser.call(addressglKj9zi, {from: accounts[3]});
		const uint256tFV5TuS = await XenoFelixlXkl7JI.allowance.call(addresslxdxS1V, addressrQ6q7qn, {from: accounts[3]});
		const bool7IrLxx = await XenoFelixlXkl7JI.transferFrom.call(addressd6pFi8M, addressQxwodi6, uintBp9o2jE, {from: accounts[2]});

		assert.equal(uint256BabEKxz, BigInt("0"))
		assert.equal(uint256tFV5TuS, BigInt("0"))
		await expect(XenoFelixlXkl7JI.transferFrom.call(addressd6pFi8M, addressQxwodi6, uintBp9o2jE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjqzOnBX = "rWtCG9QHEVmBqkl6veoisNkLOF1AER6fknui8jw4utajWQlHD9D0EZ5H778BbkH2lLwIPh94PN9SRVMpnmOKanae"
		const stringXu7YWbd = "pHLTiriq7"
		const uintK2IlplR = BigInt("664")
		const uint7vNFcM = BigInt("137")
		const XenoFelixb9CDG5D = await XenoFelix.new(stringjqzOnBX, stringXu7YWbd, uintK2IlplR, uint7vNFcM, {from: accounts[0]});
		const addressCQkTRuT = accounts[1]
		const uintRHhvG88 = BigInt("1209")
		const addressp548aq = "0x0000000000000000000000000000000000000001"
		const addressbHszjyl = accounts[2]
		const addressxDgO52U = accounts[0]
		const addresspHnajaZ = accounts[0]
		const stringoYVcDoQ = await XenoFelixb9CDG5D.symbol.call({from: accounts[4]});
		const addressmdRypeV = await XenoFelixb9CDG5D.addPauser.call(addressCQkTRuT, {from: accounts[4]});
		const boolOhUvxQ5 = await XenoFelixb9CDG5D.transferFrom.call(addressbHszjyl, addressp548aq, uintRHhvG88, {from: accounts[2]});
		const addressMOfAWyp = await XenoFelixb9CDG5D.notFrozenAndTransaction.call(addresspHnajaZ, addressxDgO52U, {from: accounts[1]});
		await XenoFelixb9CDG5D.whenNotPaused.call({from: accounts[5]});

		assert.equal(stringoYVcDoQ, "pHLTiriq7")
		await expect(XenoFelixb9CDG5D.addPauser.call(addressCQkTRuT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintR9EMHt = BigInt("436")
		const uintjZwFeRM = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintR9EMHt, uintjZwFeRM, {from: accounts[3]});
		const uintgjfDWjh = BigInt("912")
		const uintuXV7UZm = BigInt("1824")
		const addressG50dvYn = accounts[2]
		const uintg2HmQUc = BigInt("985")
		const addressISBhBmS = "0x0000000000000000000000000000000000000003"
		const addressS2nE5w6 = accounts[6]
		const uint256GpHy7GM = await XenoFelixlXkl7JI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixlXkl7JI.whenPaused.call({from: accounts[0]});
		const boolM8cDvoL = await XenoFelixlXkl7JI.transferWithLock.call(addressG50dvYn, uintuXV7UZm, uintgjfDWjh, {from: accounts[0]});
		const bool7IrLxx = await XenoFelixlXkl7JI.transferFrom.call(addressS2nE5w6, addressISBhBmS, uintg2HmQUc, {from: accounts[2]});

		assert.equal(uint256GpHy7GM, BigInt("761467177518140437453517201147065464232676880389031475175544673413609029632"))
		await expect(XenoFelixlXkl7JI.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uinth90lH8p = BigInt("436")
		const uintzpDR0r5 = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uinth90lH8p, uintzpDR0r5, {from: accounts[3]});
		const uintdRfqc3e = BigInt("1131")
		const addressu8vKVxd = accounts[3]
		const addressNyXHfDr = "0x0000000000000000000000000000000000000001"
		const addressRiGS4sR = accounts[1]
		const addressFXasub = accounts[5]
		const boolXWAOvpF = await XenoFelixlXkl7JI.approve.call(addressu8vKVxd, uintdRfqc3e, {from: accounts[1]});
		const address63NBOT = await XenoFelixlXkl7JI.addPauser.call(addressNyXHfDr, {from: accounts[5]});
		const addressifXFfIC = await XenoFelixlXkl7JI.removePauser.call(addressRiGS4sR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressFXasub, {from: accounts[4]});

		assert.equal(boolXWAOvpF, true)
		await expect(XenoFelixlXkl7JI.addPauser.call(addressNyXHfDr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringaRzqPWy = "RywMxgz6OXM96r5yIKKvxxt65"
		const stringUUEbYL5 = "t5ENbDJri9PWGiD91xEwiYSLBkl7jc4qsAHbHudDPNBYyDJfHLDaoZieIvTUEwo12We2FPpaF6iwP"
		const uintEdR144u = BigInt("215")
		const XenoFelixJsyTrJj = await XenoFelix.new(stringaRzqPWy, stringUUEbYL5, uintEdR144u, {from: accounts[3]});
		const uintjYkektZ = BigInt("985")
		const addressNcapyLo = accounts[0]
		const addressslepezT = accounts[4]
		const uintSC7Fmhn = BigInt("1618")
		const addressd6MZwzf = accounts[3]
		const addressMsnNld4 = accounts[2]
		const addressGWWTZiA = accounts[0]
		const boolJaFeJW = await XenoFelixJsyTrJj.decreaseAllowance.call(addressNcapyLo, uintjYkektZ, {from: accounts[3]});
		const addressVX8XkF2 = await XenoFelixJsyTrJj.addPauser.call(addressslepezT, {from: accounts[5]});
		const boolkhGSRWL = await XenoFelixJsyTrJj.approve.call(addressd6MZwzf, uintSC7Fmhn, {from: accounts[4]});
		const addressl0h52hM = await XenoFelixJsyTrJj.notFrozen.call(addressMsnNld4, {from: accounts[2]});
		const stringR29jH1M = await XenoFelixJsyTrJj.name.call({from: accounts[3]});
		const addressH8dfJV3 = await XenoFelixJsyTrJj.transferOwnership.call(addressGWWTZiA, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintHKX2dCE = BigInt("436")
		const uintpfBwnHS = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintHKX2dCE, uintpfBwnHS, {from: accounts[3]});
		const uintDjgroYZ = BigInt("155")
		const addressKsbjV6I = accounts[4]
		const addresspR0iNN = accounts[5]
		const boolabQ1UKq = await XenoFelixlXkl7JI.increaseAllowance.call(addressKsbjV6I, uintDjgroYZ, {from: accounts[0]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addresspR0iNN, {from: accounts[4]});

		assert.equal(boolabQ1UKq, true)
		assert.equal(uint256dIGahYK, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintJOXC8aD = BigInt("436")
		const uintEmhhGzR = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintJOXC8aD, uintEmhhGzR, {from: accounts[3]});
		const addressUiXik0H = accounts[5]
		await XenoFelixlXkl7JI.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressUiXik0H, {from: accounts[4]});
		const uint256rC0mHUq = await XenoFelixlXkl7JI.totalSupply.call({from: accounts[1]});

		await expect(XenoFelixlXkl7JI.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintPKBvESY = BigInt("436")
		const uintMCl0sS8 = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintPKBvESY, uintMCl0sS8, {from: accounts[3]});
		const uintEOrXvMi = BigInt("1576")
		const uintSrJof4 = BigInt("1972")
		const addressJ4CD2E = accounts[5]
		const uintxtX1rYo = BigInt("985")
		const addressHTcZjrL = "0x0000000000000000000000000000000000000002"
		const addresswmXvizz = accounts[6]
		await XenoFelixlXkl7JI.pause.call({from: accounts[3]});
		const boolZDwfaXw = await XenoFelixlXkl7JI.lock.call(addressJ4CD2E, uintSrJof4, uintEOrXvMi, {from: "0x0000000000000000000000000000000000000001"});
		const bool7IrLxx = await XenoFelixlXkl7JI.transferFrom.call(addresswmXvizz, addressHTcZjrL, uintxtX1rYo, {from: accounts[2]});

		await expect(XenoFelixlXkl7JI.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAdbLrDr = "0Rk7klrfD0h8oh0tAGn8U5VP85rLmxGDcQBeYTJd5OX9ty"
		const stringqw1qFL = "TQW1JfffuagLoHS1kqN"
		const uintqfOps1K = BigInt("475")
		const uintwtfJA1u = BigInt("87")
		const XenoFelixqRLc2OZ = await XenoFelix.new(stringAdbLrDr, stringqw1qFL, uintqfOps1K, uintwtfJA1u, {from: "0x0000000000000000000000000000000000000001"});
		const addressmZ0Vrx0 = accounts[3]
		const uintltEoBdY = BigInt("676")
		const addressSVnoqFE = accounts[1]
		const addressj9wvTUu = accounts[3]
		const uintkYeh4gX = BigInt("1")
		const uintxvrIW8m = BigInt("1080")
		const addressi8enjrr = accounts[0]
		const uintehrks5 = BigInt("1048")
		const addressBvcHKBr = "0x0000000000000000000000000000000000000001"
		const addressCfYrn0s = await XenoFelixqRLc2OZ.transferOwnership.call(addressmZ0Vrx0, {from: "0x0000000000000000000000000000000000000001"});
		const boolSdH6qhi = await XenoFelixqRLc2OZ.transferFrom.call(addressj9wvTUu, addressSVnoqFE, uintltEoBdY, {from: accounts[2]});
		const uint256mOmWxi = await XenoFelixqRLc2OZ.totalSupply.call({from: accounts[0]});
		const booluOwhp6 = await XenoFelixqRLc2OZ.transferWithLock.call(addressi8enjrr, uintxvrIW8m, uintkYeh4gX, {from: "0x0000000000000000000000000000000000000001"});
		const boolXaMBSgp = await XenoFelixqRLc2OZ.transfer.call(addressBvcHKBr, uintehrks5, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintOuoargI = BigInt("436")
		const uintgQ3oXA = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintOuoargI, uintgQ3oXA, {from: accounts[3]});
		const uintjxFxFPK = BigInt("477")
		const addressKCcDexz = accounts[0]
		await XenoFelixlXkl7JI.renouncePauser.call({from: accounts[3]});
		const uint256FYRAt6O = await XenoFelixlXkl7JI.totalSupply.call({from: accounts[1]});
		const boolrt5A2xD = await XenoFelixlXkl7JI.transfer.call(addressKCcDexz, uintjxFxFPK, {from: accounts[2]});
		const stringfJGEchz = await XenoFelixlXkl7JI.name.call({from: accounts[1]});

		await expect(XenoFelixlXkl7JI.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uinttTorsLl = BigInt("436")
		const uintXpMFbmJ = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uinttTorsLl, uintXpMFbmJ, {from: accounts[3]});
		const uinthEOrdPK = BigInt("994")
		const address8eltMu = "0x0000000000000000000000000000000000000001"
		const uintlEm494U = BigInt("985")
		const addressqZjkDqb = "0x0000000000000000000000000000000000000001"
		const addressG7jMcQF = accounts[6]
		const boolZ03HrSO = await XenoFelixlXkl7JI.unlock.call(address8eltMu, uinthEOrdPK, {from: accounts[3]});
		const bool7IrLxx = await XenoFelixlXkl7JI.transferFrom.call(addressG7jMcQF, addressqZjkDqb, uintlEm494U, {from: accounts[2]});

		await expect(XenoFelixlXkl7JI.unlock.call(address8eltMu, uinthEOrdPK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uintln0a1Y3 = BigInt("436")
		const uintUJgfoGp = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uintln0a1Y3, uintUJgfoGp, {from: accounts[3]});
		const addressdFNfl0m = accounts[5]
		const uintGw4XgjI = BigInt("948")
		const addresswap1dsO = accounts[1]
		const addressRTePdn = accounts[0]
		const addressjvYLgYr = "0x0000000000000000000000000000000000000001"
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressdFNfl0m, {from: accounts[4]});
		const boolsRJk1ri = await XenoFelixlXkl7JI.burnOwner.call(addresswap1dsO, uintGw4XgjI, {from: accounts[3]});
		const addressO2bGRQY = await XenoFelixlXkl7JI.notFrozenAndTransaction.call(addressjvYLgYr, addressRTePdn, {from: accounts[1]});

		assert.equal(uint256dIGahYK, BigInt("0"))
		await expect(XenoFelixlXkl7JI.burnOwner.call(addresswap1dsO, uintGw4XgjI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj2peDSd = "bolY"
		const stringAVlRadZ = ""
		const uinteUEfrpa = BigInt("436")
		const uint39LbvN = BigInt("111")
		const XenoFelixlXkl7JI = await XenoFelix.new(stringj2peDSd, stringAVlRadZ, uinteUEfrpa, uint39LbvN, {from: accounts[3]});
		const addressclrs9gf = accounts[1]
		const uintf2JFKAz = BigInt("1262")
		const addressCZQrgSb = accounts[3]
		const addressbkzScq6 = accounts[5]
		const uint8NXheq3L = await XenoFelixlXkl7JI.decimals.call({from: accounts[5]});
		const booll5jsJBO = await XenoFelixlXkl7JI.freezeAccount.call(addressclrs9gf, {from: accounts[3]});
		const boolSiDlWoV = await XenoFelixlXkl7JI.increaseAllowance.call(addressCZQrgSb, uintf2JFKAz, {from: accounts[5]});
		const uint256dIGahYK = await XenoFelixlXkl7JI.balanceOf.call(addressbkzScq6, {from: accounts[4]});

		assert.equal(boolSiDlWoV, true)
		assert.equal(booll5jsJBO, true)
		assert.equal(uint256dIGahYK, BigInt("0"))
		assert.equal(uint8NXheq3L, BigInt("111"))
	});
})