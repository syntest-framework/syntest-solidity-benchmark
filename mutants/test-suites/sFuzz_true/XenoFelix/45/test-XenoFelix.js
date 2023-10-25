const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixNSWxich = await XenoFelix.new({from: accounts[1]});
		const uintvpl9wFA = BigInt("1463")
		const uintiJo0LtB = BigInt("874")
		const addressIadAFyU = accounts[4]
		const addresssuyG7vS = accounts[3]
		const uintUvr8O59 = BigInt("99")
		const uintJ5RXrWm = BigInt("371")
		const addressJ44h5m5 = accounts[4]
		const addressTRXa63W = accounts[2]
		await XenoFelixNSWxich.unpause.call({from: accounts[1]});
		const boolAqAgZJa = await XenoFelixNSWxich.lock.call(addressIadAFyU, uintiJo0LtB, uintvpl9wFA, {from: accounts[3]});
		const uint256RMFpuUY = await XenoFelixNSWxich.balanceOf.call(addresssuyG7vS, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixNSWxich.onlyPauser.call({from: accounts[0]});
		const boolzAnJ0Yp = await XenoFelixNSWxich.lock.call(addressJ44h5m5, uintJ5RXrWm, uintUvr8O59, {from: accounts[5]});
		const addressS8Q4IxB = await XenoFelixNSWxich.notFrozen.call(addressTRXa63W, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringgFIo97 = ""
		const stringvQ2ErsC = "OIZVR"
		const uintTxE7YM5 = BigInt("98")
		const XenoFelixC04Wyli = await XenoFelix.new(stringgFIo97, stringvQ2ErsC, uintTxE7YM5, {from: accounts[5]});
		const addressgbQfyXI = accounts[2]
		const addressMjPdG6Q = accounts[1]
		const boolOtJbGhj = await XenoFelixC04Wyli.unfreezeAccount.call(addressgbQfyXI, {from: accounts[3]});
		const stringbn9hFxP = await XenoFelixC04Wyli.symbol.call({from: accounts[0]});
		const address9YdohJ = await XenoFelixC04Wyli.notFrozen.call(addressMjPdG6Q, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringBrW7ApJ = "m9G88ewfqYalaq1GROALEpqWx233fqw2bLyXWWQEugYez9PqUmd1gL73x5D5qXqtowJ0o1ggJNfucuSXdFh3lcp52Eunqlzbqq"
		const stringIUT3hH = "T8aFYCExclL1WNUfZEhOP3k9v6kunFF5nYbMwJIL6BcP7NLxHgRBREJSNpGN6jJGBQ5RU4Elyn7LhGYEJLfMTJdn861I7Q"
		const uintUzZkH1T = BigInt("122")
		const XenoFelixTv60N5h = await XenoFelix.new(stringBrW7ApJ, stringIUT3hH, uintUzZkH1T, {from: accounts[0]});
		const uintseIxVRP = BigInt("1545")
		const addressUCvuFO = accounts[2]
		const addressCf8qBXn = accounts[3]
		const addressqeaKKNE = accounts[2]
		const uintS3sIF3N = BigInt("1469")
		const uintFq4a91Z = BigInt("977")
		const addressAHHwlxY = accounts[0]
		const addresswIuan9l = accounts[1]
		const boolWbtCTMb = await XenoFelixTv60N5h.transferFrom.call(addressCf8qBXn, addressUCvuFO, uintseIxVRP, {from: accounts[0]});
		const addresswFWEEjY = await XenoFelixTv60N5h.removePauser.call(addressqeaKKNE, {from: accounts[3]});
		await XenoFelixTv60N5h.whenNotPaused.call({from: accounts[3]});
		const boolDywSUs1 = await XenoFelixTv60N5h.lock.call(addressAHHwlxY, uintFq4a91Z, uintS3sIF3N, {from: accounts[1]});
		const boolHjHAUJy = await XenoFelixTv60N5h.freezeAccount.call(addresswIuan9l, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringWGKTZas = "KhJbrrosf6k"
		const stringX0ptHb = "T4DbaxaIdsJUltZ4PnIajLmGfDg4mbYcc54BTa9CahgzysrcSxAl"
		const uintvc7PAvh = BigInt("243")
		const uintFTJTTJ5 = BigInt("226")
		const XenoFelixYyxD6dZ = await XenoFelix.new(stringWGKTZas, stringX0ptHb, uintvc7PAvh, uintFTJTTJ5, {from: accounts[4]});
		const uintzAxJCgm = BigInt("548")
		const addressrcjFHaL = accounts[4]
		const addressz56vXcH = accounts[1]
//		const boolcN8CPJi = await XenoFelixYyxD6dZ.decreaseAllowance.call(addressrcjFHaL, uintzAxJCgm, {from: accounts[4]});
//		await XenoFelixYyxD6dZ.onlyPauser.call({from: accounts[0]});
//		const stringOk6vdz = await XenoFelixYyxD6dZ.symbol.call({from: accounts[4]});
//		const addressOb4pEqs = await XenoFelixYyxD6dZ.addPauser.call(addressz56vXcH, {from: accounts[1]});

		await expect(XenoFelixYyxD6dZ.decreaseAllowance.call(addressrcjFHaL, uintzAxJCgm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringK7McjrG = "ilnQKG0uSYq8PttBvauSNoVAsMV1BkX3TKyl3sQEux"
		const stringIDGmfGH = "8q84wNOsUFyczy3TDRuCRpA4HVlBhWiaOooZwF8Er26EpatNlpMnpGL2CSQ3QsLME5Neb68o3QjZECULo65vOXsA7QUvFujS"
		const uintOh57ayX = BigInt("1106")
		const uintlglPmEe = BigInt("16")
		const XenoFelixmTiXvy = await XenoFelix.new(stringK7McjrG, stringIDGmfGH, uintOh57ayX, uintlglPmEe, {from: accounts[4]});
		const addressJ1mDlir = accounts[2]
		const addressi8x1awm = accounts[0]
		const boolT0BjEmZ = await XenoFelixmTiXvy.isOwner.call(addressJ1mDlir, {from: accounts[3]});
//		await XenoFelixmTiXvy.renouncePauser.call({from: accounts[0]});
//		await XenoFelixmTiXvy.whenNotPaused.call({from: accounts[2]});
//		const boolbtYblAG = await XenoFelixmTiXvy.unfreezeAccount.call(addressi8x1awm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolT0BjEmZ, false)
		await expect(XenoFelixmTiXvy.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringtIjWbw = "DUOVjX4W2UaUPOMufJ4QtqCYqhz5cnzHovkG1Q"
		const stringAaLiXuq = "YqwS76zUiANPVE5LGMhTfTqA8ap3CxkGOD297umHSDuhireQ1Z7x2ysFyCh8jSExEzash4LM"
		const uintymvXfd = BigInt("21")
		const XenoFelixUyHpPNt = await XenoFelix.new(stringtIjWbw, stringAaLiXuq, uintymvXfd, {from: accounts[3]});
		const uintKEtsTL1 = BigInt("194")
		const addressWd2qGgS = accounts[2]
		const uintfnYjoPV = BigInt("1969")
		const addressXvjM3gc = accounts[0]
		const uintzpafNB = BigInt("23")
		const addressQ5aqIsv = accounts[5]
		const addressKV03n6Z = accounts[2]
		const uintCZ5EImM = BigInt("2023")
		const addressgMZyc3B = accounts[4]
		const addressGNn1nNw = accounts[0]
		const boolpgGF2oV = await XenoFelixUyHpPNt.increaseAllowance.call(addressWd2qGgS, uintKEtsTL1, {from: accounts[0]});
		const booltNOlFjX = await XenoFelixUyHpPNt.unlock.call(addressXvjM3gc, uintfnYjoPV, {from: accounts[1]});
		const boola5yx0k9 = await XenoFelixUyHpPNt.transferFrom.call(addressKV03n6Z, addressQ5aqIsv, uintzpafNB, {from: accounts[2]});
		await XenoFelixUyHpPNt.onlyNewOwner.call({from: accounts[2]});
		const boolgsdK3QL = await XenoFelixUyHpPNt.transferFrom.call(addressGNn1nNw, addressgMZyc3B, uintCZ5EImM, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringqgN4c2i = "9TR4p7LdiGBr7qz9pwfpeJIRgZzzYRmqw1YdtVIP7Hb"
		const stringok6HgZ1 = "CfRaqoVPWkhzCWQWXtNHCIaW5T0eFhpWxwLNvX7vqMYliSuxLRZyAjzFG72bN"
		const uintLTr3uAz = BigInt("204")
		const XenoFelixpguE3qs = await XenoFelix.new(stringqgN4c2i, stringok6HgZ1, uintLTr3uAz, {from: accounts[1]});
		const addresszjKFlC4 = accounts[1]
		const addressltSXjy3 = accounts[4]
		const boolb6pfH2i = await XenoFelixpguE3qs.paused.call({from: accounts[2]});
		const uint256r67QiTu = await XenoFelixpguE3qs.allowance.call(addressltSXjy3, addresszjKFlC4, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringRRcjMQ0 = "7"
		const stringVfRFgRF = "HSFkhSJ3hQKR8TI0Iv1ata4zme3n1NWjUnUXXBj3xTdJGkeKOlErsHWMr6nd5GWFFV96"
		const uintRds6gF1 = BigInt("118")
		const XenoFelixe3f31WC = await XenoFelix.new(stringRRcjMQ0, stringVfRFgRF, uintRds6gF1, {from: accounts[2]});
		const addresssnRdtZh = accounts[5]
		const addressG3aWXtM = accounts[3]
		const uintMnZn0BO = BigInt("242")
		const addressCq0Fa2f = "0x0000000000000000000000000000000000000001"
		const boolO8ywwAQ = await XenoFelixe3f31WC.acceptOwnership.call({from: accounts[2]});
		const uint256djxSZT7 = await XenoFelixe3f31WC.balanceOf.call(addresssnRdtZh, {from: accounts[4]});
		const addressFiUnD3b = await XenoFelixe3f31WC.transferOwnership.call(addressG3aWXtM, {from: accounts[2]});
		const boolXkTCTF = await XenoFelixe3f31WC.burnOwner.call(addressCq0Fa2f, uintMnZn0BO, {from: accounts[1]});
		await XenoFelixe3f31WC.whenNotPaused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMRYC8Ks = "XLNhnh6XnjdBSgYaWSQzuEJhlTyz8ur5FXVJ8wTJtuQA09IhqQSUi1pqUnV1zdon9ypVZCZAjtHY8L"
		const string3A8hZc = "9FHHQDyOvYgzE7"
		const uintFS0kvju = BigInt("225")
		const XenoFelixMFUqXAc = await XenoFelix.new(stringMRYC8Ks, string3A8hZc, uintFS0kvju, {from: accounts[4]});
		const addressKba6dAU = accounts[3]
		const uintTmiSO1O = BigInt("448")
		const addressxIm0szb = accounts[4]
		const addressertdJFB = accounts[4]
		const stringATx1jy3 = await XenoFelixMFUqXAc.name.call({from: accounts[3]});
		const booloLSfYNL = await XenoFelixMFUqXAc.freezeAccount.call(addressKba6dAU, {from: accounts[3]});
		const uint8SejMh3A = await XenoFelixMFUqXAc.decimals.call({from: accounts[2]});
		const boolkWCNypc = await XenoFelixMFUqXAc.approve.call(addressxIm0szb, uintTmiSO1O, {from: accounts[0]});
		const boolXk3ctCP = await XenoFelixMFUqXAc.freezeAccount.call(addressertdJFB, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringM7DiCKo = "kTrI0ev88rQQcWHuLs7I2ilIQ8rjJiFXYFj5THObVNkeom6CbwuoB3ewyrb15QcWFYE5RbsQkaGDcc4Od8eVQfAWdPrAA"
		const stringKbgycj = "3UbzUy98byFErgN2wtHIqLqDmMobXcwxJNuIbKyjWfq8lD3e8AKs0jbaoh51tgNSiP3mH5mq83pHm"
		const uintjzBfEam = BigInt("1866")
		const uintpOSLD0m = BigInt("56")
		const XenoFelixL8CVqZG = await XenoFelix.new(stringM7DiCKo, stringKbgycj, uintjzBfEam, uintpOSLD0m, {from: accounts[3]});
		const addressY4RJIeJ = accounts[0]
		const uintJcMAVNG = BigInt("1164")
		const uinthO79UKT = BigInt("526")
		const address12qfMH = accounts[3]
		const stringQQQqLow = await XenoFelixL8CVqZG.name.call({from: accounts[1]});
		const boolLz9OAb = await XenoFelixL8CVqZG.isPauser.call(addressY4RJIeJ, {from: accounts[3]});
//		await XenoFelixL8CVqZG.onlyOwner.call({from: accounts[1]});
//		const boolU3v4d6x = await XenoFelixL8CVqZG.lock.call(address12qfMH, uinthO79UKT, uintJcMAVNG, {from: accounts[2]});

		assert.equal(boolLz9OAb, false)
		assert.equal(stringQQQqLow, "kTrI0ev88rQQcWHuLs7I2ilIQ8rjJiFXYFj5THObVNkeom6CbwuoB3ewyrb15QcWFYE5RbsQkaGDcc4Od8eVQfAWdPrAA")
		await expect(XenoFelixL8CVqZG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintRIsxS6Z = BigInt("542")
		const uintn9sAUKT = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintRIsxS6Z, uintn9sAUKT, {from: accounts[4]});
		const uintllBuhdw = BigInt("69")
		const addressW8GLNRU = accounts[0]
		const addressOL2OWLX = accounts[2]
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressW8GLNRU, uintllBuhdw, {from: accounts[5]});
//		const addressd3tSzO5 = await XenoFelixW9ulhpa.notFrozen.call(addressOL2OWLX, {from: accounts[0]});
//		await XenoFelixW9ulhpa.unpause.call({from: accounts[5]});
//		const uint256ikSqAZF = await XenoFelixW9ulhpa.totalSupply.call({from: accounts[0]});

		await expect(XenoFelixW9ulhpa.transfer.call(addressW8GLNRU, uintllBuhdw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintzlbA4Pz = BigInt("542")
		const uintS8CF79t = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintzlbA4Pz, uintS8CF79t, {from: accounts[4]});
		const addresspNWvjme = accounts[1]
		const uintSHp4fXV = BigInt("69")
		const addressG75yK8s = accounts[1]
		const address1IxpzX = accounts[2]
//		const boollQOdBj = await XenoFelixW9ulhpa.unfreezeAccount.call(addresspNWvjme, {from: accounts[4]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressG75yK8s, uintSHp4fXV, {from: accounts[5]});
//		const addressd3tSzO5 = await XenoFelixW9ulhpa.notFrozen.call(address1IxpzX, {from: accounts[0]});
//		await XenoFelixW9ulhpa.unpause.call({from: accounts[5]});
//		const uint256ikSqAZF = await XenoFelixW9ulhpa.totalSupply.call({from: accounts[0]});

		await expect(XenoFelixW9ulhpa.unfreezeAccount.call(addresspNWvjme, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintrvCex4r = BigInt("542")
		const uintJQHCjJo = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintrvCex4r, uintJQHCjJo, {from: accounts[4]});
		const uintUFvbTYy = BigInt("676")
		const addressaziwGW = accounts[2]
		const uintT2hEf4L = BigInt("73")
		const addressnmFbvox = accounts[0]
		const addressMUoez51 = accounts[4]
		const boolGu9GEv = await XenoFelixW9ulhpa.increaseAllowance.call(addressaziwGW, uintUFvbTYy, {from: "0x0000000000000000000000000000000000000001"});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressnmFbvox, uintT2hEf4L, {from: accounts[5]});
//		const addresseh5glE = await XenoFelixW9ulhpa.addPauser.call(addressMUoez51, {from: accounts[0]});
//		const uint256ikSqAZF = await XenoFelixW9ulhpa.totalSupply.call({from: accounts[0]});

		assert.equal(boolGu9GEv, true)
		await expect(XenoFelixW9ulhpa.transfer.call(addressnmFbvox, uintT2hEf4L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintpObFr4 = BigInt("542")
		const uintmIm9FFa = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintpObFr4, uintmIm9FFa, {from: accounts[4]});
		const addressCliMmW = accounts[1]
		const addressQQuQAFy = accounts[4]
		const uintyKEkpt0 = BigInt("32")
		const addresseQaou9z = accounts[1]
		const uint256kVAcYPA = await XenoFelixW9ulhpa.allowance.call(addressQQuQAFy, addressCliMmW, {from: "0x0000000000000000000000000000000000000001"});
		const stringqc7llu = await XenoFelixW9ulhpa.symbol.call({from: accounts[5]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addresseQaou9z, uintyKEkpt0, {from: accounts[5]});

		assert.equal(stringqc7llu, "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN")
		assert.equal(uint256kVAcYPA, BigInt("0"))
		await expect(XenoFelixW9ulhpa.transfer.call(addresseQaou9z, uintyKEkpt0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uinthtkw9yl = BigInt("542")
		const uintVL92gpH = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uinthtkw9yl, uintVL92gpH, {from: accounts[4]});
		const uint256ikSqAZF = await XenoFelixW9ulhpa.totalSupply.call({from: accounts[0]});

		assert.equal(uint256ikSqAZF, BigInt("542000000000000000000000000"))
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintaV2UGI9 = BigInt("542")
		const uintBG9xpyx = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintaV2UGI9, uintBG9xpyx, {from: accounts[4]});
		const uintQys4dpL = BigInt("919")
		const addressVyR75FV = accounts[1]
		const uintlyBG5pm = BigInt("32")
		const addressqYxTU9 = accounts[1]
		const booleeHUd48 = await XenoFelixW9ulhpa.approve.call(addressVyR75FV, uintQys4dpL, {from: accounts[0]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressqYxTU9, uintlyBG5pm, {from: accounts[5]});
//		const stringj9xqswE = await XenoFelixW9ulhpa.symbol.call({from: accounts[2]});

		assert.equal(booleeHUd48, true)
		await expect(XenoFelixW9ulhpa.transfer.call(addressqYxTU9, uintlyBG5pm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintyH0hwbf = BigInt("542")
		const uintB3X6BPn = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintyH0hwbf, uintB3X6BPn, {from: accounts[4]});
		const addressJPUTgBF = accounts[0]
		const uintGs4PXhh = BigInt("32")
		const address40lwN8 = accounts[0]
		const boolXMbjXiL = await XenoFelixW9ulhpa.paused.call({from: accounts[2]});
		const uint256mGF8xb8 = await XenoFelixW9ulhpa.balanceOf.call(addressJPUTgBF, {from: accounts[4]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(address40lwN8, uintGs4PXhh, {from: accounts[5]});

		assert.equal(boolXMbjXiL, false)
		assert.equal(uint256mGF8xb8, BigInt("0"))
		await expect(XenoFelixW9ulhpa.transfer.call(address40lwN8, uintGs4PXhh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintnnyxheB = BigInt("542")
		const uintiw3HjN7 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintnnyxheB, uintiw3HjN7, {from: accounts[4]});
		const uintiR9qhT = BigInt("772")
		const addressSbkYvgT = accounts[4]
		const addressEarQRHO = accounts[3]
		const uinte9lrTDv = BigInt("32")
		const addressiSAlqi9 = accounts[0]
//		const boolwjONmRj = await XenoFelixW9ulhpa.transferFrom.call(addressEarQRHO, addressSbkYvgT, uintiR9qhT, {from: "0x0000000000000000000000000000000000000001"});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressiSAlqi9, uinte9lrTDv, {from: accounts[5]});
//		const uint8nVwYCew = await XenoFelixW9ulhpa.decimals.call({from: accounts[0]});

		await expect(XenoFelixW9ulhpa.transferFrom.call(addressEarQRHO, addressSbkYvgT, uintiR9qhT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintAzt6lAl = BigInt("542")
		const uintDtKhqYZ = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintAzt6lAl, uintDtKhqYZ, {from: accounts[4]});
		const uintJ7cF2D = BigInt("207")
		const addresslsAjwfG = accounts[2]
		const uintgmhxNXn = BigInt("32")
		const addressil4Lms9 = accounts[1]
		const uintX1OnTTF = BigInt("1811")
		const addressHOJ03n5 = accounts[0]
		const addressajFLskl = accounts[3]
//		const boolyXhM4pZ = await XenoFelixW9ulhpa.burnOwner.call(addresslsAjwfG, uintJ7cF2D, {from: accounts[4]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressil4Lms9, uintgmhxNXn, {from: accounts[5]});
//		const boolKL38jgK = await XenoFelixW9ulhpa.transferFrom.call(addressajFLskl, addressHOJ03n5, uintX1OnTTF, {from: accounts[4]});

		await expect(XenoFelixW9ulhpa.burnOwner.call(addresslsAjwfG, uintJ7cF2D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintbb9wZnX = BigInt("542")
		const uintapsFrI3 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintbb9wZnX, uintapsFrI3, {from: accounts[4]});
		const addressL75TiDV = accounts[2]
		const addressPVXdZEd = await XenoFelixW9ulhpa.addPauser.call(addressL75TiDV, {from: accounts[4]});
//		await XenoFelixW9ulhpa.renouncePauser.call({from: accounts[3]});

		await expect(XenoFelixW9ulhpa.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintlHJOrKv = BigInt("542")
		const uintdZVEU9s = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintlHJOrKv, uintdZVEU9s, {from: accounts[4]});
		const uintowvlZ8Y = BigInt("664")
		const addressX9BOO7c = accounts[3]
		const uintGduPvY = BigInt("1944")
		const uintMQKNEXY = BigInt("352")
		const addressbDhlDjy = accounts[5]
		const boolqjLHouO = await XenoFelixW9ulhpa.approve.call(addressX9BOO7c, uintowvlZ8Y, {from: accounts[1]});
//		const boolEZBG2Xn = await XenoFelixW9ulhpa.lock.call(addressbDhlDjy, uintMQKNEXY, uintGduPvY, {from: accounts[4]});
//		await XenoFelixW9ulhpa.renouncePauser.call({from: accounts[3]});

		assert.equal(boolqjLHouO, true)
		await expect(XenoFelixW9ulhpa.lock.call(addressbDhlDjy, uintMQKNEXY, uintGduPvY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintPmWsLO0 = BigInt("542")
		const uintZLluQTr = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintPmWsLO0, uintZLluQTr, {from: accounts[4]});
		const addressntcRmsU = accounts[3]
		const uintODRx0uv = BigInt("736")
		const uintuUj8aH = BigInt("1089")
		const addressBWtDgbb = accounts[1]
		const uint256mGF8xb8 = await XenoFelixW9ulhpa.balanceOf.call(addressntcRmsU, {from: accounts[4]});
		const boola1Pes88 = await XenoFelixW9ulhpa.transferWithLock.call(addressBWtDgbb, uintuUj8aH, uintODRx0uv, {from: accounts[4]});

		assert.equal(boola1Pes88, true)
		assert.equal(uint256mGF8xb8, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintrNQ1CzW = BigInt("542")
		const uintpIF5mX9 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintrNQ1CzW, uintpIF5mX9, {from: accounts[4]});
		const addresskbZpYgc = accounts[5]
		const addressWK6soId = accounts[5]
//		const addressa60ojOI = await XenoFelixW9ulhpa.removePauser.call(addresskbZpYgc, {from: accounts[4]});
//		await XenoFelixW9ulhpa.renouncePauser.call({from: accounts[3]});
//		const boola2JhHPy = await XenoFelixW9ulhpa.unfreezeAccount.call(addressWK6soId, {from: accounts[5]});

		await expect(XenoFelixW9ulhpa.removePauser.call(addresskbZpYgc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintXZAgt2I = BigInt("542")
		const uintFfn1E82 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintXZAgt2I, uintFfn1E82, {from: accounts[4]});
		const uintnJJrxZf = BigInt("823")
		const uints17Mbp2 = BigInt("14")
		const addressDcgQRgP = accounts[1]
		const addressETgybhk = accounts[2]
		const uint256ogbZoKW = await XenoFelixW9ulhpa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256anyTZi1 = await XenoFelixW9ulhpa.burn.call(uintnJJrxZf, {from: accounts[5]});
//		const boolO7t60fi = await XenoFelixW9ulhpa.transferFrom.call(addressETgybhk, addressDcgQRgP, uints17Mbp2, {from: accounts[2]});

		assert.equal(uint256ogbZoKW, BigInt("542000000000000000000000000"))
		await expect(XenoFelixW9ulhpa.burn.call(uintnJJrxZf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintd76S9a = BigInt("542")
		const uintVo6uLzH = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintd76S9a, uintVo6uLzH, {from: accounts[4]});
		const addressa4ADpq = accounts[2]
		const addressSfxJXtR = accounts[1]
		const uintO60w20O = BigInt("742")
		const addressvfB2zXi = "0x0000000000000000000000000000000000000001"
		const uint256mGF8xb8 = await XenoFelixW9ulhpa.balanceOf.call(addressa4ADpq, {from: accounts[4]});
		const boolG6b2wFG = await XenoFelixW9ulhpa.isOwner.call(addressSfxJXtR, {from: accounts[3]});
		const uint8y4uIOnI = await XenoFelixW9ulhpa.decimals.call({from: accounts[5]});
//		const boolNbxzW4a = await XenoFelixW9ulhpa.transfer.call(addressvfB2zXi, uintO60w20O, {from: accounts[3]});

		assert.equal(boolG6b2wFG, false)
		assert.equal(uint256mGF8xb8, BigInt("0"))
		assert.equal(uint8y4uIOnI, BigInt("24"))
		await expect(XenoFelixW9ulhpa.transfer.call(addressvfB2zXi, uintO60w20O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uinteoIAqnE = BigInt("542")
		const uintCRXa2R9 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uinteoIAqnE, uintCRXa2R9, {from: accounts[4]});
		const uinteLrtxgr = BigInt("1293")
		const address0oUvR7 = accounts[0]
		const uintL2crRqI = BigInt("14")
		const addresseuVrrzK = accounts[2]
		const addressnZNJn61 = accounts[2]
//		const addressLGNQDXm = await XenoFelixW9ulhpa.burnFrom.call(address0oUvR7, uinteLrtxgr, {from: accounts[5]});
//		const boolO7t60fi = await XenoFelixW9ulhpa.transferFrom.call(addressnZNJn61, addresseuVrrzK, uintL2crRqI, {from: accounts[2]});

		await expect(XenoFelixW9ulhpa.burnFrom.call(address0oUvR7, uinteLrtxgr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintCwitJQL = BigInt("542")
		const uintDU8YQ8 = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintCwitJQL, uintDU8YQ8, {from: accounts[4]});
		const addressfKgxK21 = accounts[2]
		const addressUeZjq5H = accounts[0]
		const uint256mGF8xb8 = await XenoFelixW9ulhpa.balanceOf.call(addressfKgxK21, {from: accounts[4]});
		const boolNRxsQqd = await XenoFelixW9ulhpa.freezeAccount.call(addressUeZjq5H, {from: accounts[4]});

		assert.equal(boolNRxsQqd, true)
		assert.equal(uint256mGF8xb8, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringqXQGZ43 = "kEG23RRPuLVoJ2AEr9e39Ki3f5dTqxKpSkIWlG5ctQI"
		const stringFjl955E = "V1qzLhpoDlw5dQyUDCifUeRRgD6GuJCl3KPjGeFgzilkGTLtj7XYjN"
		const uintq3pMzG6 = BigInt("542")
		const uintWRSH0Hy = BigInt("24")
		const XenoFelixW9ulhpa = await XenoFelix.new(stringqXQGZ43, stringFjl955E, uintq3pMzG6, uintWRSH0Hy, {from: accounts[4]});
		const uintIS1PovZ = BigInt("433")
		const addressFfluP0s = accounts[4]
		const uintcU2xnhR = BigInt("32")
		const addressZxUmorI = accounts[0]
//		await XenoFelixW9ulhpa.renouncePauser.call({from: accounts[4]});
//		const boolXJFUVqM = await XenoFelixW9ulhpa.approve.call(addressFfluP0s, uintIS1PovZ, {from: accounts[5]});
//		const booldjhpokU = await XenoFelixW9ulhpa.transfer.call(addressZxUmorI, uintcU2xnhR, {from: accounts[5]});

		await expect(XenoFelixW9ulhpa.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})