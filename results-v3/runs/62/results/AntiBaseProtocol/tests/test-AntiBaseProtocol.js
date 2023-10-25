const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringlQECPSS = "lVZCfPmJwfbVN7IWl3OpPOEBzagYUgQDjUtWrURXImm3n5Gar41Sgq"
		const stringIYfTRnr = "j1B5Lrjpgmi5vN2ulKCcdeQHOP9gOf6qzRIk4j2geD2yhCtxEh"
		const uintgW9d2rI = BigInt("24")
		const AntiBaseProtocolBGh9zQ2 = await AntiBaseProtocol.new(stringlQECPSS, stringIYfTRnr, uintgW9d2rI, {from: accounts[1]});
		const uintO6ZexRl = BigInt("1682")
		const addressXKMMsZt = accounts[1]
		const addressisJM1OF = "0x0000000000000000000000000000000000000001"
		const uintlHswec7 = BigInt("1100")
		const addressLpGVuiM = accounts[2]
		const addressCjZz3v5 = await AntiBaseProtocolBGh9zQ2._approve.call(addressisJM1OF, addressXKMMsZt, uintO6ZexRl, {from: accounts[1]});
		const boolqUHfTa6 = await AntiBaseProtocolBGh9zQ2.decreaseAllowance.call(addressLpGVuiM, uintlHswec7, {from: accounts[1]});
		const uint256cAqw3vk = await AntiBaseProtocolBGh9zQ2.totalSupply.call({from: accounts[3]});
		await AntiBaseProtocolBGh9zQ2.onlyOwner.call({from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfKzTigw = await AntiBaseProtocol.new({from: accounts[4]});
		const uintl55PXMW = BigInt("601")
		const addressWXv9nBj = accounts[0]
		const addressBfoKeXq = accounts[2]
		const uintVVF30qR = BigInt("1704")
		const stringgbNJ0wJ = await AntiBaseProtocolfKzTigw.symbol.call({from: accounts[4]});
		const booldIGR93c = await AntiBaseProtocolfKzTigw.transferFrom.call(addressBfoKeXq, addressWXv9nBj, uintl55PXMW, {from: accounts[3]});
		const boolPJk8mRm = await AntiBaseProtocolfKzTigw.isOwner.call({from: accounts[2]});
		const uint256lrNESfq = await AntiBaseProtocolfKzTigw.burn.call(uintVVF30qR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringgbNJ0wJ, "ABASE")
		await expect(AntiBaseProtocolfKzTigw.transferFrom.call(addressBfoKeXq, addressWXv9nBj, uintl55PXMW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uint3bNRkn = BigInt("913")
		const addressEUYvbV8 = accounts[1]
		const uintRYupJVy = BigInt("1282")
		const addresskmePmzc = accounts[2]
		const uintBIvaD4l = BigInt("1832")
		const addresslHCBbmk = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressEUYvbV8, uint3bNRkn, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addresskmePmzc, uintRYupJVy, {from: accounts[3]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addresslHCBbmk, uintBIvaD4l, {from: accounts[2]});

		assert.equal(boolSgTOtWh, true)
		assert.equal(booleJorEU, true)
		assert.equal(boolqLN9bKJ, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOUuJnon = await AntiBaseProtocol.new({from: accounts[2]});
		const uintPWUDC5a = BigInt("13")
		const addressWVhrCQo = "0x0000000000000000000000000000000000000001"
		const uintRBvbifM = BigInt("1136")
		const addressMMhhEKy = accounts[1]
		const addressR7TfYqD = accounts[0]
		const addressFE7t8GS = accounts[1]
		const addressytgpoH = accounts[2]
		const addressHrMhWq1 = await AntiBaseProtocolOUuJnon.burnFrom.call(addressWVhrCQo, uintPWUDC5a, {from: accounts[2]});
		const bool9wvVB1 = await AntiBaseProtocolOUuJnon.transferFrom.call(addressR7TfYqD, addressMMhhEKy, uintRBvbifM, {from: accounts[4]});
		await AntiBaseProtocolOUuJnon.onlyOwner.call({from: accounts[5]});
		const uint8QgwCbVB = await AntiBaseProtocolOUuJnon.decimals.call({from: accounts[2]});
		const uint256Trk8m4C = await AntiBaseProtocolOUuJnon.allowance.call(addressytgpoH, addressFE7t8GS, {from: accounts[2]});
		const uint256Zj3olwI = await AntiBaseProtocolOUuJnon.totalSupply.call({from: accounts[0]});

		await expect(AntiBaseProtocolOUuJnon.burnFrom.call(addressWVhrCQo, uintPWUDC5a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintPRvhmJ = BigInt("913")
		const addressEIZLxnB = accounts[1]
		const uintYRjt6wR = BigInt("1508")
		const uintEmjoNkJ = BigInt("1282")
		const addressMapbJQ5 = accounts[2]
		const uintelIxzs7 = BigInt("1832")
		const addressIPw2ST = accounts[3]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressEIZLxnB, uintPRvhmJ, {from: accounts[0]});
		const uint256vgQ5XJC = await AntiBaseProtocol2VU0Rb.findRewardFee.call(uintYRjt6wR, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressMapbJQ5, uintEmjoNkJ, {from: accounts[3]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressIPw2ST, uintelIxzs7, {from: accounts[2]});

		assert.equal(boolSgTOtWh, true)
		assert.equal(booleJorEU, true)
		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256vgQ5XJC, BigInt("80"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintM5K6Q4B = BigInt("913")
		const addressKOtqdtp = accounts[1]
		const uintZCl6EFH = BigInt("1856")
		const addressr6yBsdm = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressKOtqdtp, uintM5K6Q4B, {from: accounts[0]});
		const boolJq9iLC = await AntiBaseProtocol2VU0Rb.isOwner.call({from: accounts[1]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressr6yBsdm, uintZCl6EFH, {from: accounts[2]});

		assert.equal(boolJq9iLC, false)
		assert.equal(booleJorEU, true)
		assert.equal(boolqLN9bKJ, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolvQ0dEv = await AntiBaseProtocol.new({from: accounts[3]});
		const stringK76OTpZ = await AntiBaseProtocolvQ0dEv.name.call({from: accounts[2]});
		const stringhZkUEqu = await AntiBaseProtocolvQ0dEv.name.call({from: accounts[1]});

		assert.equal(stringK76OTpZ, "https://t.me/antibaseprotocol")
		assert.equal(stringhZkUEqu, "https://t.me/antibaseprotocol")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintFUTmZh = BigInt("913")
		const addressHIdxNnl = accounts[1]
		const uinthpo85na = BigInt("1508")
		const uintdiKbCXE = BigInt("1279")
		const addressLvdxTVR = accounts[2]
		const uintHqeyovP = BigInt("1832")
		const addressFOJdIsO = accounts[3]
		const addressNrZojxP = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressHIdxNnl, uintFUTmZh, {from: accounts[0]});
		const uint256vgQ5XJC = await AntiBaseProtocol2VU0Rb.findRewardFee.call(uinthpo85na, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressLvdxTVR, uintdiKbCXE, {from: accounts[3]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressFOJdIsO, uintHqeyovP, {from: accounts[2]});
		const uint256PsMhPh9 = await AntiBaseProtocol2VU0Rb.balanceOf.call(addressNrZojxP, {from: accounts[0]});

		assert.equal(boolSgTOtWh, true)
		assert.equal(booleJorEU, true)
		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256PsMhPh9, BigInt("0"))
		assert.equal(uint256vgQ5XJC, BigInt("80"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uinte7Fc98r = BigInt("913")
		const addressNtpz5NE = accounts[2]
		const uintngymtA0 = BigInt("1832")
		const addressn7uIeEt = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressNtpz5NE, uinte7Fc98r, {from: accounts[0]});
		await AntiBaseProtocol2VU0Rb.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressn7uIeEt, uintngymtA0, {from: accounts[2]});

		assert.equal(boolqLN9bKJ, true)
		await expect(AntiBaseProtocol2VU0Rb.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintvv5Rqhm = BigInt("913")
		const addressClY7jow = accounts[2]
		const uint8j6jmz = BigInt("1127")
		const addressIF3caLK = accounts[3]
		const uintF8wqApz = BigInt("1508")
		const uintlbDlsut = BigInt("1282")
		const addressNIC2aAm = accounts[2]
		const uintP1T7LtF = BigInt("194")
		const addressi1elRR = accounts[4]
		const uintlIvpuLU = BigInt("1832")
		const addressBX2i7DC = accounts[3]
		const uintSM8jXuk = BigInt("180")
		const address2m7QR2 = accounts[4]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressClY7jow, uintvv5Rqhm, {from: accounts[0]});
		const boolN3b8WtR = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressIF3caLK, uint8j6jmz, {from: accounts[0]});
		const uint256vgQ5XJC = await AntiBaseProtocol2VU0Rb.findRewardFee.call(uintF8wqApz, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressNIC2aAm, uintlbDlsut, {from: accounts[3]});
		const addressoyEMOKY = await AntiBaseProtocol2VU0Rb.burnFrom.call(addressi1elRR, uintP1T7LtF, {from: accounts[2]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressBX2i7DC, uintlIvpuLU, {from: accounts[2]});
		const addressNau4qg9 = await AntiBaseProtocol2VU0Rb.burnFrom.call(address2m7QR2, uintSM8jXuk, {from: accounts[3]});

		assert.equal(boolN3b8WtR, true)
		assert.equal(boolSgTOtWh, true)
		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256vgQ5XJC, BigInt("80"))
		await expect(AntiBaseProtocol2VU0Rb.burnFrom.call(addressi1elRR, uintP1T7LtF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintKmJF6L = BigInt("913")
		const addressYhRKzPg = accounts[1]
		const uinttvwRuvM = BigInt("1508")
		const uintd1lcd5 = BigInt("1282")
		const addressTbfRN1K = accounts[2]
		const uintKxc6SDK = BigInt("1832")
		const addressbfCjwHv = accounts[3]
		const uintVR0sDAJ = BigInt("1090")
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressYhRKzPg, uintKmJF6L, {from: accounts[0]});
		const uint256vgQ5XJC = await AntiBaseProtocol2VU0Rb.findRewardFee.call(uinttvwRuvM, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressTbfRN1K, uintd1lcd5, {from: accounts[3]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressbfCjwHv, uintKxc6SDK, {from: accounts[2]});
		const uint256hgYGXxl = await AntiBaseProtocol2VU0Rb.burn.call(uintVR0sDAJ, {from: accounts[4]});

		assert.equal(boolSgTOtWh, true)
		assert.equal(booleJorEU, true)
		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256vgQ5XJC, BigInt("80"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolV4ikkf4 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintZWSvETi = BigInt("550")
		const addressTtmWJal = accounts[2]
		const uintJ6Uqx39 = BigInt("1570")
		const addressQ9XU2bG = "0x0000000000000000000000000000000000000001"
		const stringc21YgZ4 = await AntiBaseProtocolV4ikkf4.symbol.call({from: accounts[2]});
		const boolZpltqH4 = await AntiBaseProtocolV4ikkf4.transfer.call(addressTtmWJal, uintZWSvETi, {from: accounts[3]});
		const boolwoz2CQ = await AntiBaseProtocolV4ikkf4.transfer.call(addressQ9XU2bG, uintJ6Uqx39, {from: accounts[3]});

		assert.equal(stringc21YgZ4, "ABASE")
		await expect(AntiBaseProtocolV4ikkf4.transfer.call(addressTtmWJal, uintZWSvETi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXLIBy1F = BigInt("913")
		const addresstUZIlF0 = accounts[1]
		const uintjuAv0Y = BigInt("1705")
		const uintUZXfQZY = BigInt("1470")
		const uintOkiJHTJ = BigInt("1282")
		const addresscHgerh = accounts[2]
		const uintIT2yN2C = BigInt("1832")
		const addressp8Sx2pY = accounts[3]
		await AntiBaseProtocol2VU0Rb.renounceOwnership.call({from: accounts[5]});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addresstUZIlF0, uintXLIBy1F, {from: accounts[0]});
		const uint256UduXk85 = await AntiBaseProtocol2VU0Rb.findBurnFee.call(uintjuAv0Y, {from: accounts[4]});
		const uint256vgQ5XJC = await AntiBaseProtocol2VU0Rb.findRewardFee.call(uintUZXfQZY, {from: accounts[0]});
		const boolSgTOtWh = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addresscHgerh, uintOkiJHTJ, {from: accounts[3]});
		const booleJorEU = await AntiBaseProtocol2VU0Rb.approve.call(addressp8Sx2pY, uintIT2yN2C, {from: accounts[2]});

		await expect(AntiBaseProtocol2VU0Rb.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintfuwnAQ = BigInt("1022")
		const addressunCpIPY = accounts[0]
		const boolQE2MfoX = await AntiBaseProtocol2VU0Rb.isOwner.call({from: accounts[4]});
		const boolBb0qZ6J = await AntiBaseProtocol2VU0Rb.decreaseAllowance.call(addressunCpIPY, uintfuwnAQ, {from: accounts[2]});

		assert.equal(boolQE2MfoX, true)
		await expect(AntiBaseProtocol2VU0Rb.decreaseAllowance.call(addressunCpIPY, uintfuwnAQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintZDT9M6x = BigInt("1337")
		const uintLPKz806 = BigInt("900")
		const addressO7A5v44 = accounts[1]
		const uint256EGRDl5Q = await AntiBaseProtocol2VU0Rb.findBurnFee.call(uintZDT9M6x, {from: accounts[2]});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressO7A5v44, uintLPKz806, {from: accounts[0]});

		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256EGRDl5Q, BigInt("210"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const addresszB1kbds = accounts[0]
		const addressdlqqiOb = "0x0000000000000000000000000000000000000001"
		const uintkEdM6Gt = BigInt("900")
		const addressgw5jR5G = accounts[1]
		const uint256HUGyUKv = await AntiBaseProtocol2VU0Rb.allowance.call(addressdlqqiOb, addresszB1kbds, {from: accounts[1]});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressgw5jR5G, uintkEdM6Gt, {from: accounts[0]});

		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256HUGyUKv, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintApy4ynt = BigInt("913")
		const addressCyV5VCq = accounts[1]
		const uintp3b14GM = BigInt("1979")
		const addressnONRPRj = accounts[3]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressCyV5VCq, uintApy4ynt, {from: accounts[0]});
		const uint8Ozlji2c = await AntiBaseProtocol2VU0Rb.decimals.call({from: accounts[3]});
		const addressujQwxRl = await AntiBaseProtocol2VU0Rb._burnFrom.call(addressnONRPRj, uintp3b14GM, {from: accounts[2]});

		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint8Ozlji2c, BigInt("18"))
		await expect(AntiBaseProtocol2VU0Rb._burnFrom.call(addressnONRPRj, uintp3b14GM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uint0fehCO = BigInt("913")
		const addressluccJrq = accounts[1]
		const uint256QdeaFz = await AntiBaseProtocol2VU0Rb.totalSupply.call({from: accounts[2]});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressluccJrq, uint0fehCO, {from: accounts[0]});

		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256QdeaFz, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolt398jv3 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW3KBcxU = BigInt("722")
		const addressosUZByI = accounts[5]
		const uintakhjFCK = BigInt("1")
		const addressJxl7KT = "0x0000000000000000000000000000000000000001"
		const uintHyYAZ6 = BigInt("749")
		const addresshIWnwQQ = "0x0000000000000000000000000000000000000001"
		const addressX1FFuYZ = accounts[1]
		const boolVQV7UZm = await AntiBaseProtocolt398jv3.transfer.call(addressosUZByI, uintW3KBcxU, {from: accounts[0]});
		const addressxXdUxbu = await AntiBaseProtocolt398jv3._mint.call(addressJxl7KT, uintakhjFCK, {from: accounts[4]});
		const addressy0N4Fiv = await AntiBaseProtocolt398jv3._approve.call(addressX1FFuYZ, addresshIWnwQQ, uintHyYAZ6, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintGlFJAcS = BigInt("913")
		const addresskFB5x9f = accounts[2]
		const uintBTcebcR = BigInt("149")
		const addresse4A09UQ = await AntiBaseProtocol2VU0Rb.owner.call({from: accounts[4]});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addresskFB5x9f, uintGlFJAcS, {from: accounts[0]});
		const uint256RP8CFz = await AntiBaseProtocol2VU0Rb.findBurnFee.call(uintBTcebcR, {from: accounts[2]});

		assert.equal(addresse4A09UQ, 0x8a67201515BF9F3D1Ab9BdB88f303A9eC538CC79)
		assert.equal(boolqLN9bKJ, true)
		assert.equal(uint256RP8CFz, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintMVxuph5 = BigInt("0")
		const uintIC7Km6i = BigInt("164")
		const uint256RP8CFz = await AntiBaseProtocol2VU0Rb.findBurnFee.call(uintMVxuph5, {from: accounts[2]});
		const uint256plQtXM = await AntiBaseProtocol2VU0Rb.burn.call(uintIC7Km6i, {from: "0x0000000000000000000000000000000000000001"});
		const stringkXHaoUx = await AntiBaseProtocol2VU0Rb.symbol.call({from: accounts[4]});

		assert.equal(uint256RP8CFz, BigInt("0"))
		await expect(AntiBaseProtocol2VU0Rb.burn.call(uintIC7Km6i, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const addressdQDa66P = accounts[0]
		const addressG4aet7N = accounts[1]
		const uintY1j7pII = BigInt("913")
		const addressDf0cwIq = accounts[2]
		const stringclNVpw9 = await AntiBaseProtocol2VU0Rb.symbol.call({from: accounts[5]});
		const addressdTpDjyX = await AntiBaseProtocol2VU0Rb.transferOwnership.call(addressdQDa66P, {from: accounts[4]});
		const uint256UjCAJos = await AntiBaseProtocol2VU0Rb.balanceOf.call(addressG4aet7N, {from: "0x0000000000000000000000000000000000000001"});
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressDf0cwIq, uintY1j7pII, {from: accounts[0]});

		assert.equal(boolqLN9bKJ, true)
		assert.equal(stringclNVpw9, "ABASE")
		assert.equal(uint256UjCAJos, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintn11GjC = BigInt("913")
		const addressHFgR6A8 = accounts[1]
		const uintYXKqQ82 = BigInt("1001")
		const addresspIgwFIP = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addressHFgR6A8, uintn11GjC, {from: accounts[0]});
		const booloKJfwjg = await AntiBaseProtocol2VU0Rb.transfer.call(addresspIgwFIP, uintYXKqQ82, {from: accounts[4]});

		assert.equal(booloKJfwjg, true)
		assert.equal(boolqLN9bKJ, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolAOT3M6L = await AntiBaseProtocol.new({from: accounts[2]});
		const uintwldYP4p = BigInt("580")
		const addressDVfEZK8 = accounts[0]
		const addressjS3Ksp = accounts[2]
		const boolMajLXEK = await AntiBaseProtocolAOT3M6L.transferFrom.call(addressjS3Ksp, addressDVfEZK8, uintwldYP4p, {from: accounts[3]});
		const uint256ogRMKcI = await AntiBaseProtocolAOT3M6L.totalSupply.call({from: accounts[2]});
		const addressfRe3Qfn = await AntiBaseProtocolAOT3M6L.owner.call({from: accounts[3]});

		await expect(AntiBaseProtocolAOT3M6L.transferFrom.call(addressjS3Ksp, addressDVfEZK8, uintwldYP4p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2VU0Rb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintMMU8s7e = BigInt("913")
		const addresss4xfa8i = accounts[2]
		const boolqLN9bKJ = await AntiBaseProtocol2VU0Rb.increaseAllowance.call(addresss4xfa8i, uintMMU8s7e, {from: accounts[0]});
		await AntiBaseProtocol2VU0Rb.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolqLN9bKJ, true)
		await expect(AntiBaseProtocol2VU0Rb.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})