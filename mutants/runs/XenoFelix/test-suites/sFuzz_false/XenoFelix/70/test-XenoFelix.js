const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixYmnH6sh = await XenoFelix.new({from: accounts[3]});
		const addressC6Le3ym = "0x0000000000000000000000000000000000000001"
		const addresse2PnPLq = accounts[2]
		await XenoFelixYmnH6sh.whenPaused.call({from: accounts[2]});
		const boolSrAfIFw = await XenoFelixYmnH6sh.freezeAccount.call(addressC6Le3ym, {from: accounts[1]});
		const addresshMMkuN = await XenoFelixYmnH6sh.notFrozen.call(addresse2PnPLq, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringNMZy6X = "XFHz9cQsEWHagne5Lm5XWj68YzPR3geJfvyn4BOPK45KFNfW5K3MTxBIQ6Q158jQk"
		const stringkcSqJ7L = "X0u9Slii8HRip1aFsoJ2wcHa0CR8qtfuUWo7WlsrH5gfEbRSmzpmIOwapa8gidXVrwUdQOqi1KRrRdbMOEwikP6b"
		const uintk30Ymdu = BigInt("1887")
		const uintMNXX7WB = BigInt("148")
		const XenoFelixV2WOKMf = await XenoFelix.new(stringNMZy6X, stringkcSqJ7L, uintk30Ymdu, uintMNXX7WB, {from: accounts[4]});
		const addressF9AItM1 = accounts[2]
		const addressU2Vcyk7 = accounts[1]
		const uintKJKDmmR = BigInt("277")
		const addressBPORQO7 = "0x0000000000000000000000000000000000000001"
		const boolMV7ZBNg = await XenoFelixV2WOKMf.unfreezeAccount.call(addressF9AItM1, {from: accounts[0]});
		const addressKGqx2Ju = await XenoFelixV2WOKMf.notFrozen.call(addressU2Vcyk7, {from: accounts[1]});
		const uint84sWZWw = await XenoFelixV2WOKMf.decimals.call({from: accounts[4]});
		await XenoFelixV2WOKMf.unpause.call({from: accounts[0]});
		const boolrwKPGLu = await XenoFelixV2WOKMf.transfer.call(addressBPORQO7, uintKJKDmmR, {from: accounts[1]});

		await expect(XenoFelixV2WOKMf.unfreezeAccount.call(addressF9AItM1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsfbl6H = "CJkyyUpZyDDzujrSBIQr5bP"
		const stringJPuoRL = "oVdrOYENH62GQAlM4GWvvassWj4Yp5jtwoMe8hn4E"
		const uintpRvUQzI = BigInt("202")
		const XenoFelixVG1W4XS = await XenoFelix.new(stringsfbl6H, stringJPuoRL, uintpRvUQzI, {from: "0x0000000000000000000000000000000000000001"});
		const addressixHZgpU = accounts[1]
		const uintabrCPje = BigInt("1888")
		const uintmSbLjkJ = BigInt("1014")
		const addressQpbbLIg = "0x0000000000000000000000000000000000000001"
		const addressx5oHoWJ = accounts[5]
		await XenoFelixVG1W4XS.pause.call({from: accounts[5]});
		const boolTBg4VTq = await XenoFelixVG1W4XS.isOwner.call(addressixHZgpU, {from: accounts[3]});
		const uint256ubyoIAn = await XenoFelixVG1W4XS.burn.call(uintabrCPje, {from: accounts[3]});
		const boolyz7nHI1 = await XenoFelixVG1W4XS.transferFrom.call(addressx5oHoWJ, addressQpbbLIg, uintmSbLjkJ, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringTD6iVvm = "TAoMJI2cMI79W2H7qCEB0j7tunfLsVesT4Tzl5IMyoihPpD3PD5"
		const stringd5ziWD6 = "jg7RdmqUpDgeI0OoKQsCtk8GsjWv3BTQbOFQx"
		const uintb4lhqTq = BigInt("560")
		const uintwk8TsH1 = BigInt("34")
		const XenoFelixjJdfOnZ = await XenoFelix.new(stringTD6iVvm, stringd5ziWD6, uintb4lhqTq, uintwk8TsH1, {from: accounts[5]});
		const uintZEhY3jg = BigInt("1621")
		const addressbJreLXZ = accounts[1]
		const uint256Zgzogw = await XenoFelixjJdfOnZ.totalSupply.call({from: accounts[2]});
		await XenoFelixjJdfOnZ.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixjJdfOnZ.whenNotPaused.call({from: accounts[1]});
		const stringSR4LmDu = await XenoFelixjJdfOnZ.symbol.call({from: accounts[1]});
		const boolr0ztEw0 = await XenoFelixjJdfOnZ.approve.call(addressbJreLXZ, uintZEhY3jg, {from: accounts[1]});

		assert.equal(uint256Zgzogw, BigInt("5600000000000000000000000000000000000"))
		await expect(XenoFelixjJdfOnZ.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAsCWxzA = "gFQ48CQhBDYRtCzg2PeJIYJ3Pm5bpU8VdWEbuVAljtCkW4DpKjCUU8OHqCCW8bKEqBbBKrOB8916qpEOgahsxRmglz"
		const stringBuLC3pE = "NGlcxmlinUnEDs9P45NF8Zq4YOosmCy8OMLtPvbNhyID5vfR1UhtV1WQ96OtYq6JDeOS5Ly5Znli5Yb"
		const uintXYN8fe0 = BigInt("47")
		const XenoFelixTMcw7aS = await XenoFelix.new(stringAsCWxzA, stringBuLC3pE, uintXYN8fe0, {from: accounts[1]});
		const uintFRPn8L = BigInt("435")
		const addressGsYAMe3 = accounts[1]
		const uintPrjEsaG = BigInt("320")
		const addressmk3WBoJ = accounts[4]
		const uintmcnjMoG = BigInt("912")
		const addressX7lgnxE = accounts[0]
		const addressdkQ1MY3 = accounts[2]
		const addressBeodBSO = accounts[2]
		const uinthsymnM = BigInt("768")
		const addresspjeqwmn = accounts[4]
		const booleHBchOY = await XenoFelixTMcw7aS.unlock.call(addressGsYAMe3, uintFRPn8L, {from: accounts[1]});
		const boolV0zCC8f = await XenoFelixTMcw7aS.approve.call(addressmk3WBoJ, uintPrjEsaG, {from: accounts[0]});
		const boole17h33A = await XenoFelixTMcw7aS.transferFrom.call(addressdkQ1MY3, addressX7lgnxE, uintmcnjMoG, {from: accounts[2]});
		const boolglQ6DrO = await XenoFelixTMcw7aS.isOwner.call(addressBeodBSO, {from: accounts[3]});
		const boolNktBCQ7 = await XenoFelixTMcw7aS.approve.call(addresspjeqwmn, uinthsymnM, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringW1n5gqQ = "faldJmPwjTK0vEUQZjCir1TkqaJ9cj9FQWTlHD4sR9mfpUd"
		const stringdtITQWL = "DAGywGzOOa4S9XUcBZO"
		const uintnVP9wrO = BigInt("140")
		const XenoFelixAOEYGnH = await XenoFelix.new(stringW1n5gqQ, stringdtITQWL, uintnVP9wrO, {from: accounts[3]});
		const uintpUcSYmF = BigInt("67")
		const addresseXrbjs = accounts[0]
		const addresszYrEolM = accounts[0]
		const uintLGYQAc = BigInt("1477")
		const uintb3otuJs = BigInt("1580")
		const addressyC2BK0L = accounts[0]
		const booljAJrXam = await XenoFelixAOEYGnH.unlock.call(addresseXrbjs, uintpUcSYmF, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixAOEYGnH.onlyNewOwner.call({from: accounts[1]});
		const uint256XMqvrN = await XenoFelixAOEYGnH.totalSupply.call({from: accounts[0]});
		const boolkX9QkJa = await XenoFelixAOEYGnH.isPauser.call(addresszYrEolM, {from: accounts[0]});
		const boolKOfiKw7 = await XenoFelixAOEYGnH.transferWithLock.call(addressyC2BK0L, uintb3otuJs, uintLGYQAc, {from: accounts[3]});
		await XenoFelixAOEYGnH.unpause.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringHBxX71S = "FgbX3HkKYYU7TXLNvSTBz5AmkpmSVNfIQtyTzQM3W83SqrebJnjwALy3mrRE"
		const stringMvWXKHq = "NqRECCBuRRFlafT91ruqoDCJe5t4deNDF9RY13jwKQ4oLliScM4jMb0HV8PILuuuMygQKGL"
		const uintlS6irHO = BigInt("157")
		const XenoFelixKU4TJgg = await XenoFelix.new(stringHBxX71S, stringMvWXKHq, uintlS6irHO, {from: accounts[5]});
		const uintVK59k96 = BigInt("753")
		const addressAGZUQT = accounts[3]
		const addresslJXQTXp = accounts[1]
		const addressji2Di0v = accounts[0]
		const addressIweSUyH = accounts[0]
		const addressrZpHrbQ = accounts[1]
		const boolIVXcBAj = await XenoFelixKU4TJgg.transferFrom.call(addresslJXQTXp, addressAGZUQT, uintVK59k96, {from: accounts[2]});
		const addressN1b6rkx = await XenoFelixKU4TJgg.addPauser.call(addressji2Di0v, {from: accounts[4]});
		const boolOkXA5lt = await XenoFelixKU4TJgg.isOwner.call(addressIweSUyH, {from: accounts[1]});
		const addressV1sUrCt = await XenoFelixKU4TJgg.removePauser.call(addressrZpHrbQ, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintUJCiRWS = BigInt("1309")
		const uintNTk2K7 = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintUJCiRWS, uintNTk2K7, {from: accounts[2]});
		const uintcfbm6CN = BigInt("1171")
		const addressRJtUQVP = accounts[1]
		const addressydeM8Ui = accounts[0]
		const addresslhEvisg = "0x0000000000000000000000000000000000000001"
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressydeM8Ui, addressRJtUQVP, uintcfbm6CN, {from: accounts[0]});
		const uint8uarjOcF = await XenoFelixlAhen8.decimals.call({from: accounts[2]});
		const boolLy87XIN = await XenoFelixlAhen8.isPauser.call(addresslhEvisg, {from: accounts[4]});
		await XenoFelixlAhen8.onlyNewOwner.call({from: accounts[2]});

		await expect(XenoFelixlAhen8.transferFrom.call(addressydeM8Ui, addressRJtUQVP, uintcfbm6CN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintcoLreSe = BigInt("1309")
		const uintskmD06U = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintcoLreSe, uintskmD06U, {from: accounts[2]});
		const addressjcLZSlK = "0x0000000000000000000000000000000000000002"
		const uint8uarjOcF = await XenoFelixlAhen8.decimals.call({from: accounts[2]});
		const boolLy87XIN = await XenoFelixlAhen8.isPauser.call(addressjcLZSlK, {from: accounts[4]});
		const boolyX900Q9 = await XenoFelixlAhen8.acceptOwnership.call({from: accounts[3]});
		await XenoFelixlAhen8.onlyNewOwner.call({from: accounts[2]});

		assert.equal(boolLy87XIN, false)
		assert.equal(uint8uarjOcF, BigInt("201"))
		await expect(XenoFelixlAhen8.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSwskWl1 = "92VJhe0kPxv8KnDwHhEn5WTg437reHG7EW6yh3n9MNmj4b6U"
		const stringvtZvYtV = "y1N88BFt3XlUc6NYQRIa8h1CnfhcEuHRSO8RpxrTsfKjKtUbBwRtjiSBKCeVhUp67i6tK5D"
		const uintBcwBNcv = BigInt("1159")
		const uintBLZsq1 = BigInt("99")
		const XenoFelixrjZyfpo = await XenoFelix.new(stringSwskWl1, stringvtZvYtV, uintBcwBNcv, uintBLZsq1, {from: accounts[5]});
		const uintOxPj4rQ = BigInt("1008")
		const addresss9WqXNv = accounts[1]
		const uintGdOxOEa = BigInt("1051")
		const addressX9q55M2 = accounts[0]
		const addressupk8nqn = accounts[4]
		const stringcykJ3SA = await XenoFelixrjZyfpo.symbol.call({from: accounts[4]});
		const boolH54Xrin = await XenoFelixrjZyfpo.acceptOwnership.call({from: accounts[4]});
		const boolp5jzKZ = await XenoFelixrjZyfpo.decreaseAllowance.call(addresss9WqXNv, uintOxPj4rQ, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixrjZyfpo.onlyPauser.call({from: accounts[4]});
		const addressxkWpcz = await XenoFelixrjZyfpo.burnFrom.call(addressX9q55M2, uintGdOxOEa, {from: accounts[0]});
		const uint256GI2gPd = await XenoFelixrjZyfpo.balanceOf.call(addressupk8nqn, {from: accounts[5]});

		assert.equal(stringcykJ3SA, "y1N88BFt3XlUc6NYQRIa8h1CnfhcEuHRSO8RpxrTsfKjKtUbBwRtjiSBKCeVhUp67i6tK5D")
		await expect(XenoFelixrjZyfpo.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintXOaiiXz = BigInt("1309")
		const uintDSaJhNO = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintXOaiiXz, uintDSaJhNO, {from: accounts[2]});
		const uintsvmEOkx = BigInt("919")
		const addressBUMGvXI = accounts[4]
		const uint8uarjOcF = await XenoFelixlAhen8.decimals.call({from: accounts[2]});
		const addressbzbcpmn = await XenoFelixlAhen8.burnFrom.call(addressBUMGvXI, uintsvmEOkx, {from: accounts[2]});
		await XenoFelixlAhen8.onlyNewOwner.call({from: accounts[2]});

		assert.equal(uint8uarjOcF, BigInt("201"))
		await expect(XenoFelixlAhen8.burnFrom.call(addressBUMGvXI, uintsvmEOkx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringNDFHQ1u = "H67NFmjT7azQhI4Cb1xsrc9KtAqrR65Xj7ffpfWVOGcRKy8apDFiDjlbA81mbNctH42RCq"
		const stringt5vta8m = "naLFddo1UUsQF7GMnnljMQKZssan"
		const uintpN4zUv5 = BigInt("1841")
		const uintnzngJA = BigInt("53")
		const XenoFelixDqXYkLM = await XenoFelix.new(stringNDFHQ1u, stringt5vta8m, uintpN4zUv5, uintnzngJA, {from: accounts[3]});
		const addressYyOWzRW = accounts[4]
		const uintUvjbp54 = BigInt("1790")
		const uintRgZqcVq = BigInt("1580")
		const addressibzyRYJ = accounts[4]
		const addressW0NvRZ = accounts[1]
		await XenoFelixDqXYkLM.onlyPauser.call({from: accounts[1]});
		const boolP9RSDA = await XenoFelixDqXYkLM.isPauser.call(addressYyOWzRW, {from: accounts[0]});
		const boolt0Fzw7 = await XenoFelixDqXYkLM.transferWithLock.call(addressibzyRYJ, uintRgZqcVq, uintUvjbp54, {from: accounts[0]});
		await XenoFelixDqXYkLM.whenPaused.call({from: accounts[4]});
		const addresszSE0ISs = await XenoFelixDqXYkLM.notFrozen.call(addressW0NvRZ, {from: accounts[0]});

		await expect(XenoFelixDqXYkLM.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintHKvGFvP = BigInt("1309")
		const uintHyVqWZv = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintHKvGFvP, uintHyVqWZv, {from: accounts[2]});
		const addressUcH2twK = accounts[2]
		const uintHE4QE2H = BigInt("381")
		const addresscaregt1 = accounts[1]
		const addressDnweD9W = accounts[0]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressUcH2twK, {from: accounts[3]});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressDnweD9W, addresscaregt1, uintHE4QE2H, {from: accounts[0]});

		assert.equal(uint256wXpQkQ6, BigInt("60374344814566874738957757208046977809618397928099865768571573727817552101376"))
		await expect(XenoFelixlAhen8.transferFrom.call(addressDnweD9W, addresscaregt1, uintHE4QE2H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintxNLjmvq = BigInt("1309")
		const uintT1sK5L = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintxNLjmvq, uintT1sK5L, {from: accounts[2]});
		const uinthb2OZbv = BigInt("1171")
		const addressQrBiTz = accounts[1]
		const addressAaPW1Ed = accounts[0]
		const boolMoSGDAN = await XenoFelixlAhen8.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressAaPW1Ed, addressQrBiTz, uinthb2OZbv, {from: accounts[0]});
		const boolisL3Ii = await XenoFelixlAhen8.paused.call({from: accounts[0]});

		assert.equal(boolMoSGDAN, false)
		await expect(XenoFelixlAhen8.transferFrom.call(addressAaPW1Ed, addressQrBiTz, uinthb2OZbv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkRAd5Sm = "EOp2zQPbVYI6y79gK49hSW8JLz57GEQExq1h7i2VE2OzFCrF5wkDLUif4ez2CJLn3SwiqOjkWThYHu7jPUnaTPcpOdqBmg7UxF"
		const stringXg41NMj = "vknIDb4QFYEbkMnSRoaOXNhCwMFWpLetbpZp9RjDOA7ueylJHPXbNRJ4Ehh37uuKsOoGPkWRLLvS4UAiFWNPDX"
		const uintnaWpfl = BigInt("83")
		const XenoFelixaoUWDz0 = await XenoFelix.new(stringkRAd5Sm, stringXg41NMj, uintnaWpfl, {from: accounts[4]});
		const addresstlsnS8x = accounts[3]
		await XenoFelixaoUWDz0.onlyPauser.call({from: accounts[0]});
		const addressIy93YSv = await XenoFelixaoUWDz0.notFrozen.call(addresstlsnS8x, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintwXCWPbW = BigInt("1309")
		const uintpNAIvte = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintwXCWPbW, uintpNAIvte, {from: accounts[2]});
		const uintU49NuZl = BigInt("1171")
		const addressILNoGyv = accounts[1]
		const addressWpQjWbG = accounts[0]
		const stringtJh2iba = await XenoFelixlAhen8.name.call({from: accounts[1]});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressWpQjWbG, addressILNoGyv, uintU49NuZl, {from: accounts[0]});
		const boolbfOBvD = await XenoFelixlAhen8.acceptOwnership.call({from: accounts[1]});

		assert.equal(stringtJh2iba, "lxK8QhzVN8K8iVYeUE")
		await expect(XenoFelixlAhen8.transferFrom.call(addressWpQjWbG, addressILNoGyv, uintU49NuZl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringeHpaB3Q = "nFUq9AlMAiGiJdmckK7XxktlH5SGIu1WD2ew8VoFOHN71pRfb9pjulqCWH"
		const stringZKEHpcV = "e9QoB7D6MSUUwkFRYWjUyEnsaY43P1SFobIB5GHrAhAJFtShzM7L4vYU7vQXoMh2EsEAeNWjR9gkQiI6"
		const uintcE1qgAc = BigInt("77")
		const XenoFelixxO42DL = await XenoFelix.new(stringeHpaB3Q, stringZKEHpcV, uintcE1qgAc, {from: accounts[0]});
		const addressjH2cK78 = "0x0000000000000000000000000000000000000001"
		const uinto9qIZh = BigInt("1408")
		const addressWUKVUgh = accounts[2]
		const addressRpIIrBe = accounts[4]
		const boolAoas6Nq = await XenoFelixxO42DL.isOwner.call(addressjH2cK78, {from: accounts[0]});
		const booli7T4eV = await XenoFelixxO42DL.approve.call(addressWUKVUgh, uinto9qIZh, {from: accounts[4]});
		const uint256njpjrlp = await XenoFelixxO42DL.balanceOf.call(addressRpIIrBe, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringRKZmJ8f = "vt1BUO4l9LsF7FlE3VoZwhY6YGGlQwt5jJiroFocJrnZzwx1H"
		const stringBRbFLyG = "RSwA3hijqJYxjxH4geBD8EOiVw8BuXyd2S8VB9w5cl5JE1ouZ8MAvM1cbgysnIHFF"
		const uintAHQWPsU = BigInt("190")
		const XenoFelixFYNTC0r = await XenoFelix.new(stringRKZmJ8f, stringBRbFLyG, uintAHQWPsU, {from: accounts[2]});
		const uintpqAhCva = BigInt("1874")
		const addressseGa9nN = accounts[2]
		const addressXi1Kkek = accounts[5]
		const uintf2oa3WF = BigInt("1067")
		const addressPHWVLpM = accounts[2]
		await XenoFelixFYNTC0r.whenNotPaused.call({from: accounts[2]});
		const bools1vkJC = await XenoFelixFYNTC0r.transferFrom.call(addressXi1Kkek, addressseGa9nN, uintpqAhCva, {from: accounts[3]});
		const booliVopkLf = await XenoFelixFYNTC0r.acceptOwnership.call({from: accounts[2]});
		await XenoFelixFYNTC0r.onlyNewOwner.call({from: accounts[0]});
		const boolgWOzbFg = await XenoFelixFYNTC0r.increaseAllowance.call(addressPHWVLpM, uintf2oa3WF, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintqIFsCv3 = BigInt("1309")
		const uintiZtenk = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintqIFsCv3, uintiZtenk, {from: accounts[2]});
		const uintDsuQB9A = BigInt("1113")
		const addressQsK7GnO = "0x0000000000000000000000000000000000000001"
		const uintylj7G1h = BigInt("1690")
		const addressTt7CUjH = accounts[1]
		const uintZSQbOCG = BigInt("1171")
		const addressL5E8F9K = accounts[1]
		const addressAZLWmyp = accounts[1]
		const boolACnfwg4 = await XenoFelixlAhen8.burnOwner.call(addressQsK7GnO, uintDsuQB9A, {from: accounts[2]});
		const boolTqXqKDE = await XenoFelixlAhen8.transfer.call(addressTt7CUjH, uintylj7G1h, {from: accounts[2]});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressAZLWmyp, addressL5E8F9K, uintZSQbOCG, {from: accounts[0]});

		await expect(XenoFelixlAhen8.burnOwner.call(addressQsK7GnO, uintDsuQB9A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintea76tDJ = BigInt("1309")
		const uintaqPxsX8 = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintea76tDJ, uintaqPxsX8, {from: accounts[2]});
		const uintHwcJBY = BigInt("1189")
		const addressbhasQCZ = accounts[1]
		const addressJySZodC = accounts[0]
		await XenoFelixlAhen8.renouncePauser.call({from: accounts[3]});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressJySZodC, addressbhasQCZ, uintHwcJBY, {from: accounts[0]});

		await expect(XenoFelixlAhen8.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintulPXU5G = BigInt("1309")
		const uintooPTM9z = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintulPXU5G, uintooPTM9z, {from: accounts[2]});
		const uinttUxoDyw = BigInt("932")
		const addressaYsfIhO = accounts[5]
		const uintPiYnXN7 = BigInt("1171")
		const addressFCGtdCk = accounts[1]
		const addressDdOSMt = accounts[0]
		const boolWEDXYtH = await XenoFelixlAhen8.increaseAllowance.call(addressaYsfIhO, uinttUxoDyw, {from: accounts[1]});
		const boolXUSr5wf = await XenoFelixlAhen8.transferFrom.call(addressDdOSMt, addressFCGtdCk, uintPiYnXN7, {from: accounts[0]});

		assert.equal(boolWEDXYtH, true)
		await expect(XenoFelixlAhen8.transferFrom.call(addressDdOSMt, addressFCGtdCk, uintPiYnXN7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintF13eeGX = BigInt("1309")
		const uintqrfM2OT = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintF13eeGX, uintqrfM2OT, {from: accounts[2]});
		const uintB3t6YLM = BigInt("1224")
		const addressEy5VP37 = accounts[2]
		const addressqdzk9Fu = accounts[3]
		const uinteKOhtPj = BigInt("1507")
		const addressyRqFR14 = accounts[1]
		const boolDkt2lB = await XenoFelixlAhen8.transfer.call(addressEy5VP37, uintB3t6YLM, {from: accounts[1]});
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressqdzk9Fu, {from: accounts[3]});
		const boolc0WkWD = await XenoFelixlAhen8.increaseAllowance.call(addressyRqFR14, uinteKOhtPj, {from: accounts[3]});

		await expect(XenoFelixlAhen8.transfer.call(addressEy5VP37, uintB3t6YLM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintqa168fQ = BigInt("1309")
		const uintsvUA1CN = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintqa168fQ, uintsvUA1CN, {from: accounts[2]});
		const uintHCuieu = BigInt("1282")
		const addressBiXLb0 = accounts[4]
		const uintfHWepmM = BigInt("1909")
		const addressptI0VZm = accounts[1]
		const addresspJE3w9 = accounts[1]
		const uint256IqRYs9R = await XenoFelixlAhen8.burn.call(uintHCuieu, {from: accounts[0]});
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressBiXLb0, {from: accounts[3]});
		const boolZ6zNj1E = await XenoFelixlAhen8.transferFrom.call(addresspJE3w9, addressptI0VZm, uintfHWepmM, {from: accounts[1]});

		await expect(XenoFelixlAhen8.burn.call(uintHCuieu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintofsWB9A = BigInt("1309")
		const uintmVmZez1 = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintofsWB9A, uintmVmZez1, {from: accounts[2]});
		const uintXOvXmUc = BigInt("454")
		const addressKJvfZM0 = accounts[4]
		const addressq4cMrZ5 = accounts[4]
		const boolGpFY34Y = await XenoFelixlAhen8.approve.call(addressKJvfZM0, uintXOvXmUc, {from: accounts[2]});
		await XenoFelixlAhen8.whenPaused.call({from: accounts[4]});
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressq4cMrZ5, {from: accounts[3]});

		assert.equal(boolGpFY34Y, true)
		await expect(XenoFelixlAhen8.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintd6olci7 = BigInt("1309")
		const uintcl4aVaS = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintd6olci7, uintcl4aVaS, {from: accounts[2]});
		const addressUd4xhCV = accounts[4]
		const addressoPIuQwN = accounts[5]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressUd4xhCV, {from: accounts[3]});
		const addressfkdnpWl = await XenoFelixlAhen8.removePauser.call(addressoPIuQwN, {from: accounts[2]});

		assert.equal(uint256wXpQkQ6, BigInt("0"))
		await expect(XenoFelixlAhen8.removePauser.call(addressoPIuQwN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringOk1fzza = "8CX2havUQ0UMdvVczVlQ"
		const stringDzw5sP9 = "YeOj2gIIbpjq2ULbx7Xwzb7J3oGYwfi7m1Zr2KoWfD55mmMxFmKWInDuMw"
		const uintQQtqHfP = BigInt("1343")
		const uintNMsPcdu = BigInt("168")
		const XenoFelixRMoVr2 = await XenoFelix.new(stringOk1fzza, stringDzw5sP9, uintQQtqHfP, uintNMsPcdu, {from: accounts[5]});
		const addressdbVlBWU = accounts[3]
		const addressTPCSt7H = accounts[5]
		const addresszO9G5Oo = accounts[0]
		const uintlMNvlA = BigInt("924")
		const addresscsvZ0v8 = accounts[2]
		const uint256mWhiYjc = await XenoFelixRMoVr2.allowance.call(addressTPCSt7H, addressdbVlBWU, {from: accounts[4]});
		const boolVVFjOUX = await XenoFelixRMoVr2.isOwner.call(addresszO9G5Oo, {from: accounts[2]});
		const booluB6XpBL = await XenoFelixRMoVr2.transfer.call(addresscsvZ0v8, uintlMNvlA, {from: accounts[3]});

		assert.equal(boolVVFjOUX, false)
		assert.equal(uint256mWhiYjc, BigInt("0"))
		await expect(XenoFelixRMoVr2.transfer.call(addresscsvZ0v8, uintlMNvlA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintoM2eNmp = BigInt("1309")
		const uintvq1Fdbv = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintoM2eNmp, uintvq1Fdbv, {from: accounts[2]});
		const addressBar70PA = accounts[3]
		const addressb3XuDBb = accounts[0]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressBar70PA, {from: accounts[3]});
		const addressDjTP0P = await XenoFelixlAhen8.transferOwnership.call(addressb3XuDBb, {from: accounts[2]});
		await XenoFelixlAhen8.whenPaused.call({from: accounts[3]});
		const stringK0O28mg = await XenoFelixlAhen8.symbol.call({from: accounts[5]});

		assert.equal(uint256wXpQkQ6, BigInt("0"))
		await expect(XenoFelixlAhen8.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintPMT6Jq = BigInt("1309")
		const uint85opvg = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintPMT6Jq, uint85opvg, {from: accounts[2]});
		const addressb85duVC = accounts[4]
		const uintVaxEBqz = BigInt("89")
		const addressERGkQn3 = accounts[2]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressb85duVC, {from: accounts[3]});
		const boolKo8PGFb = await XenoFelixlAhen8.decreaseAllowance.call(addressERGkQn3, uintVaxEBqz, {from: accounts[1]});

		assert.equal(uint256wXpQkQ6, BigInt("0"))
		await expect(XenoFelixlAhen8.decreaseAllowance.call(addressERGkQn3, uintVaxEBqz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintRqi7IV1 = BigInt("1309")
		const uintNcJ2Xy = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintRqi7IV1, uintNcJ2Xy, {from: accounts[2]});
		const addressxqw6Jr6 = accounts[4]
		const uintIyImMYq = BigInt("293")
		const addresss7rk52G = accounts[2]
		const addressYcmpT1r = accounts[2]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressxqw6Jr6, {from: accounts[3]});
		const boolc3ZPcqj = await XenoFelixlAhen8.transfer.call(addresss7rk52G, uintIyImMYq, {from: accounts[2]});
		const boolbeq0hEL = await XenoFelixlAhen8.isOwner.call(addressYcmpT1r, {from: accounts[1]});

		assert.equal(boolbeq0hEL, true)
		assert.equal(boolc3ZPcqj, true)
		assert.equal(uint256wXpQkQ6, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintBXp7lyC = BigInt("1309")
		const uintWQRHGgg = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintBXp7lyC, uintWQRHGgg, {from: accounts[2]});
		const addressKpviCk1 = accounts[3]
		const addresskty0xvD = accounts[0]
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addressKpviCk1, {from: accounts[3]});
		const boollN0BTVv = await XenoFelixlAhen8.unfreezeAccount.call(addresskty0xvD, {from: accounts[2]});

		assert.equal(uint256wXpQkQ6, BigInt("0"))
		await expect(XenoFelixlAhen8.unfreezeAccount.call(addresskty0xvD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringV5Lm8t4 = "lxK8QhzVN8K8iVYeUE"
		const stringISb8jSF = "XtW0fiRFRDjceeTfcynhTL14TIMA4nzJHvbkjoe6TonnLz6kQg6snK2hxCJmovu9yoIokLT4BJi2Sf3zH2osH1xDuHqA4dO"
		const uintGmJ645h = BigInt("1309")
		const uintqjgGhA = BigInt("201")
		const XenoFelixlAhen8 = await XenoFelix.new(stringV5Lm8t4, stringISb8jSF, uintGmJ645h, uintqjgGhA, {from: accounts[2]});
		const address8nMkc4 = accounts[2]
		const addresszWtHfBI = accounts[4]
		const addressqpXdAv0 = accounts[2]
		const addressoOLx4gv = accounts[4]
		const boolaIFjgax = await XenoFelixlAhen8.freezeAccount.call(address8nMkc4, {from: accounts[2]});
		const uint256wXpQkQ6 = await XenoFelixlAhen8.balanceOf.call(addresszWtHfBI, {from: accounts[3]});
		const boolOkPSFTf = await XenoFelixlAhen8.freezeAccount.call(addressqpXdAv0, {from: accounts[4]});
		const addressUctRI5x = await XenoFelixlAhen8.addPauser.call(addressoOLx4gv, {from: accounts[1]});

		assert.equal(boolaIFjgax, true)
		assert.equal(uint256wXpQkQ6, BigInt("0"))
		await expect(XenoFelixlAhen8.freezeAccount.call(addressqpXdAv0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})