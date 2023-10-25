const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTEimSKm7 = await PACT.new({from: accounts[1]});
		const uintpgXQPCa = BigInt("1438")
		const addresssifMlkn = accounts[0]
		const addressXQMeEGE = accounts[5]
		const addressIVvR0uE = accounts[1]
		const uint8FUz3LK5 = await PACTEimSKm7.decimals.call({from: accounts[3]});
		const boolV8gLSkw = await PACTEimSKm7.approve.call(addresssifMlkn, uintpgXQPCa, {from: accounts[0]});
		const boolhMsjRpC = await PACTEimSKm7.setupBasePool.call(addressXQMeEGE, {from: accounts[3]});
		const boolI5sbxBo = await PACTEimSKm7.setupReserve.call(addressIVvR0uE, {from: accounts[1]});

		assert.equal(boolV8gLSkw, true)
		assert.equal(uint8FUz3LK5, BigInt("18"))
		await expect(PACTEimSKm7.setupBasePool.call(addressXQMeEGE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOI0k49u = await PACT.new({from: accounts[3]});
		const uintoXBNvGM = BigInt("1568")
		const addressRsbLTeP = accounts[4]
		const addressa0Yh08q = "0x0000000000000000000000000000000000000001"
		const addressRlifR6 = accounts[2]
		const uintrcyMBw1 = BigInt("48")
		const addressVOr8gzw = accounts[3]
		const addressIU4zNJn = accounts[3]
		const boolJuxwKCw = await PACTOI0k49u.transferFrom.call(addressa0Yh08q, addressRsbLTeP, uintoXBNvGM, {from: accounts[2]});
		const boolVb6AM28 = await PACTOI0k49u.setupRewards.call(addressRlifR6, {from: accounts[1]});
		const boolbbCrbok = await PACTOI0k49u.transfer.call(addressVOr8gzw, uintrcyMBw1, {from: accounts[2]});
		const uint53W2Bv = await PACTOI0k49u.balanceOf.call(addressIU4zNJn, {from: accounts[0]});

		await expect(PACTOI0k49u.transferFrom.call(addressa0Yh08q, addressRsbLTeP, uintoXBNvGM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOBd6kUi = await PACT.new({from: accounts[4]});
		const uintfQIqnzz = BigInt("1920")
		const addressuDuvpB3 = accounts[0]
		const addressfTzKU8c = accounts[1]
		const uintQQhwPz9 = BigInt("785")
		const addressR9RE9HQ = accounts[1]
		const addressiRYa0E5 = accounts[2]
		const addressSNLCUo7 = accounts[0]
		const uintsOyP6Mf = BigInt("1660")
		const address2xCFcU = accounts[4]
		const addressNbt6kp = accounts[2]
		const boolWkhLOek = await PACTOBd6kUi.transfer.call(addressuDuvpB3, uintfQIqnzz, {from: accounts[1]});
		const boolIo6yBJs = await PACTOBd6kUi.setupBasePool.call(addressfTzKU8c, {from: accounts[0]});
		const boold79RdmZ = await PACTOBd6kUi.burn.call(addressR9RE9HQ, uintQQhwPz9, {from: accounts[4]});
		const uinttGCTiZ = await PACTOBd6kUi.allowance.call(addressSNLCUo7, addressiRYa0E5, {from: accounts[0]});
		const boolrdaLNN = await PACTOBd6kUi.transferFrom.call(addressNbt6kp, address2xCFcU, uintsOyP6Mf, {from: accounts[4]});

		await expect(PACTOBd6kUi.transfer.call(addressuDuvpB3, uintfQIqnzz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTCrgQnkK = await PACT.new({from: accounts[4]});
		const addressY43IKE8 = "0x0000000000000000000000000000000000000001"
		const addresshBxR5E5 = accounts[1]
		const uintm7D6C5i = BigInt("1239")
		const addressDpUc44 = accounts[0]
		const addressaLXSsPi = accounts[0]
		const uintWaHyk6 = BigInt("2042")
		const addressFHQv3jB = accounts[5]
		const uintsaNaktH = await PACTCrgQnkK.allowance.call(addresshBxR5E5, addressY43IKE8, {from: accounts[2]});
		const boolTMrPjdM = await PACTCrgQnkK.transferFrom.call(addressaLXSsPi, addressDpUc44, uintm7D6C5i, {from: accounts[4]});
		const stringGZwaW5d = await PACTCrgQnkK.name.call({from: accounts[4]});
		const bool0UlCBH = await PACTCrgQnkK.burn.call(addressFHQv3jB, uintWaHyk6, {from: accounts[2]});
		const stringIL7XGPo = await PACTCrgQnkK.symbol.call({from: accounts[3]});

		assert.equal(uintsaNaktH, BigInt("0"))
		await expect(PACTCrgQnkK.transferFrom.call(addressaLXSsPi, addressDpUc44, uintm7D6C5i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTbmruM4Z = await PACT.new({from: accounts[1]});
		const addressZbDRJW7 = accounts[4]
		const uintMOrzdNj = BigInt("267")
		const addressDUwlgxY = accounts[4]
		const uintuR7HbdB = await PACTbmruM4Z.balanceOf.call(addressZbDRJW7, {from: accounts[5]});
		const boolFOEKCCD = await PACTbmruM4Z.approve.call(addressDUwlgxY, uintMOrzdNj, {from: accounts[4]});

		assert.equal(boolFOEKCCD, true)
		assert.equal(uintuR7HbdB, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTr7tyuIz = await PACT.new({from: accounts[2]});
		const addressaxK581 = "0x0000000000000000000000000000000000000001"
		const uintirK6fwE = BigInt("294")
		const addressvGdhbYk = accounts[0]
		const addressUGRVlf = accounts[5]
		const uintlCW3mCh = BigInt("1213")
		const addressLkvb9PC = accounts[2]
		const addressTsI9oJN = accounts[0]
		const uintsy1Usb0 = await PACTr7tyuIz.totalSupply.call({from: accounts[1]});
		const boolDBBfDYq = await PACTr7tyuIz.setupRewards.call(addressaxK581, {from: accounts[5]});
		const uintHYkRaT1 = await PACTr7tyuIz.totalSupply.call({from: accounts[1]});
		const bool3i10UH = await PACTr7tyuIz.approve.call(addressvGdhbYk, uintirK6fwE, {from: accounts[1]});
		const uintyRZuy98 = await PACTr7tyuIz.balanceOf.call(addressUGRVlf, {from: accounts[3]});
		const boolON2VlNK = await PACTr7tyuIz.transferFrom.call(addressTsI9oJN, addressLkvb9PC, uintlCW3mCh, {from: accounts[3]});

		assert.equal(uintsy1Usb0, BigInt("1000000000000000000000000000"))
		await expect(PACTr7tyuIz.setupRewards.call(addressaxK581, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtQmruT = await PACT.new({from: accounts[2]});
		const addressClAVehV = accounts[4]
		const uintqJjsN9C = BigInt("1255")
		const addressbllPfpl = accounts[1]
		const uintRjPOxLI = await PACTtQmruT.balanceOf.call(addressClAVehV, {from: accounts[2]});
		const strings5tc4n7 = await PACTtQmruT.symbol.call({from: accounts[5]});
		const boolfwtjCFD = await PACTtQmruT.burn.call(addressbllPfpl, uintqJjsN9C, {from: accounts[2]});
		const stringjaUXFFI = await PACTtQmruT.name.call({from: accounts[1]});

		assert.equal(strings5tc4n7, "PACT")
		assert.equal(uintRjPOxLI, BigInt("0"))
		await expect(PACTtQmruT.burn.call(addressbllPfpl, uintqJjsN9C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTPSUQWOH = await PACT.new({from: accounts[1]});
		const addressRUvOe9O = accounts[0]
		const uintsCFj4bA = BigInt("930")
		const addresstvrCwK = accounts[2]
		const addressBOwO6gy = accounts[5]
		const uintgiT7SKP = BigInt("996")
		const addresshrcadhO = accounts[1]
		const stringgamswZ = await PACTPSUQWOH.name.call({from: accounts[3]});
		const boolZ6naDCn = await PACTPSUQWOH.setupReserve.call(addressRUvOe9O, {from: accounts[5]});
		const boolnYfbwby = await PACTPSUQWOH.approve.call(addresstvrCwK, uintsCFj4bA, {from: accounts[0]});
		const uintHZaJvqj = await PACTPSUQWOH.totalSupply.call({from: accounts[0]});
		const boolmWnPBvY = await PACTPSUQWOH.setupBasePool.call(addressBOwO6gy, {from: accounts[0]});
		const boolOhn31r5 = await PACTPSUQWOH.burn.call(addresshrcadhO, uintgiT7SKP, {from: accounts[5]});

		assert.equal(stringgamswZ, "P2PB2B community token")
		await expect(PACTPSUQWOH.setupReserve.call(addressRUvOe9O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHp3l07g = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjysZjKH = BigInt("1643")
		const addressfh55NUl = accounts[1]
		const uintMrfIfhD = BigInt("248")
		const addressKA3kxb4 = accounts[5]
		const addressg5COJUG = accounts[4]
		const addressciTiHRc = accounts[1]
		const boolYr1zRIj = await PACTHp3l07g.transfer.call(addressfh55NUl, uintjysZjKH, {from: accounts[2]});
		const booldu2aR47 = await PACTHp3l07g.transferFrom.call(addressg5COJUG, addressKA3kxb4, uintMrfIfhD, {from: accounts[1]});
		const uintpl8PhYe = await PACTHp3l07g.totalSupply.call({from: accounts[2]});
		const boolWpvO9vd = await PACTHp3l07g.setupReserve.call(addressciTiHRc, {from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTtQmruT = await PACT.new({from: accounts[2]});
		const addressL25tBi7 = accounts[4]
		const addressHB7YVK = accounts[4]
		const uintRjPOxLI = await PACTtQmruT.balanceOf.call(addressL25tBi7, {from: accounts[2]});
		const uint8IgwDqWl = await PACTtQmruT.decimals.call({from: accounts[2]});
		const boolJ0dzmxF = await PACTtQmruT.setupTeam.call(addressHB7YVK, {from: accounts[1]});
		const strings5tc4n7 = await PACTtQmruT.symbol.call({from: accounts[5]});
		const stringjaUXFFI = await PACTtQmruT.name.call({from: accounts[1]});

		assert.equal(uint8IgwDqWl, BigInt("18"))
		assert.equal(uintRjPOxLI, BigInt("0"))
		await expect(PACTtQmruT.setupTeam.call(addressHB7YVK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTr9u675 = await PACT.new({from: accounts[2]});
		const addressnvFNUPJ = accounts[4]
		const addressRkFo78r = accounts[4]
		const addressLBNn2VA = accounts[1]
		const addressuf4GeQV = accounts[1]
		const booltCgerUQ = await PACTr9u675.setupFarming.call(addressnvFNUPJ, {from: accounts[5]});
		const stringOiZskFQ = await PACTr9u675.symbol.call({from: accounts[3]});
		const boolcRGk1jn = await PACTr9u675.setupBasePool.call(addressRkFo78r, {from: accounts[2]});
		const boolHnx4QH = await PACTr9u675.setupRewards.call(addressLBNn2VA, {from: accounts[4]});
		const boolwc4oluu = await PACTr9u675.setupTeam.call(addressuf4GeQV, {from: accounts[1]});
		const uintrYb0mQg = await PACTr9u675.totalSupply.call({from: accounts[0]});

		await expect(PACTr9u675.setupFarming.call(addressnvFNUPJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})