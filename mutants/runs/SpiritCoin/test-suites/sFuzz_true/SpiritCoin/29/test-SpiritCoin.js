const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressARqrxqE = accounts[4]
		const addressKkDVI9v = accounts[5]
		const SpiritCoinFjSbjZ = await SpiritCoin.new(addressARqrxqE, addressKkDVI9v, {from: accounts[3]});
		const uintfxkq55I = BigInt("1743")
		const addressjcKZaW3 = accounts[0]
		const uintPLCl2i = BigInt("1543")
		const addressqiizUll = accounts[5]
		const addressvBGxnqD = accounts[2]
		const uintrN7xQYg = BigInt("908")
		const addressmgLKUlY = accounts[4]
		const uintnLCJ1Vy = BigInt("946")
		const addressKIzGykm = accounts[4]
		const address7QSR6k = await SpiritCoinFjSbjZ.mint.call(addressjcKZaW3, uintfxkq55I, {from: accounts[4]});
		const boolejCMItW = await SpiritCoinFjSbjZ.transferFrom.call(addressvBGxnqD, addressqiizUll, uintPLCl2i, {from: accounts[4]});
		const boollyNSrAH = await SpiritCoinFjSbjZ.approve.call(addressmgLKUlY, uintrN7xQYg, {from: "0x0000000000000000000000000000000000000001"});
		const addressEypvrSG = await SpiritCoinFjSbjZ.mint.call(addressKIzGykm, uintnLCJ1Vy, {from: accounts[0]});

		await expect(SpiritCoinFjSbjZ.mint.call(addressjcKZaW3, uintfxkq55I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressHp5TZhm = accounts[3]
		const addresshDntr93 = accounts[3]
		const SpiritCoinTVPdAqj = await SpiritCoin.new(addressHp5TZhm, addresshDntr93, {from: accounts[2]});
		const addressdql0lRk = accounts[0]
		const addressn42ebBy = "0x0000000000000000000000000000000000000001"
		const addressZV7aPnI = accounts[1]
		const uintUa9HBu = BigInt("628")
		const addressOmvieYU = accounts[4]
		const addressObzAEIx = accounts[2]
		const addresspCMprWU = accounts[2]
		const uintCcgB4Im = await SpiritCoinTVPdAqj.balanceOf.call(addressdql0lRk, {from: accounts[3]});
		const uintDL8P3ng = await SpiritCoinTVPdAqj.allowance.call(addressZV7aPnI, addressn42ebBy, {from: accounts[0]});
		const boolbP5SQSd = await SpiritCoinTVPdAqj.approve.call(addressOmvieYU, uintUa9HBu, {from: accounts[4]});
		const uintTTf41GR = await SpiritCoinTVPdAqj.balanceOf.call(addressObzAEIx, {from: accounts[4]});
		const addressymnZmPX = await SpiritCoinTVPdAqj.setMinter.call(addresspCMprWU, {from: accounts[2]});

		assert.equal(boolbP5SQSd, true)
		assert.equal(uintCcgB4Im, BigInt("0"))
		assert.equal(uintDL8P3ng, BigInt("0"))
		assert.equal(uintTTf41GR, BigInt("0"))
		await expect(SpiritCoinTVPdAqj.setMinter.call(addresspCMprWU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAn1r2O = "0x0000000000000000000000000000000000000001"
		const addresseOhxelI = accounts[4]
		const SpiritCoinTeeQPMA = await SpiritCoin.new(addressAn1r2O, addresseOhxelI, {from: accounts[3]});
		const uintGdlmKeH = BigInt("1975")
		const addressQ7q9J1Q = accounts[1]
		const addressBd2rB8e = accounts[2]
		const addressUgjWmpK = "0x0000000000000000000000000000000000000001"
		const uintI5o2DuT = BigInt("346")
		const addressiY8hP0t = accounts[1]
		const uintdgccDGD = BigInt("650")
		const addressKP9saN = accounts[3]
		const addressOXiD0eN = accounts[4]
		const bool2oCWsW = await SpiritCoinTeeQPMA.transferFrom.call(addressBd2rB8e, addressQ7q9J1Q, uintGdlmKeH, {from: accounts[3]});
		const addressc1dtCfX = await SpiritCoinTeeQPMA.setMinter.call(addressUgjWmpK, {from: accounts[0]});
		const boolqHakDDm = await SpiritCoinTeeQPMA.transfer.call(addressiY8hP0t, uintI5o2DuT, {from: accounts[0]});
		const boolxijMjg1 = await SpiritCoinTeeQPMA.approve.call(addressKP9saN, uintdgccDGD, {from: accounts[1]});
		const uintRsPhdjq = await SpiritCoinTeeQPMA.balanceOf.call(addressOXiD0eN, {from: accounts[4]});

		await expect(SpiritCoinTeeQPMA.transferFrom.call(addressBd2rB8e, addressQ7q9J1Q, uintGdlmKeH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressGtNaw5C = accounts[2]
		const addressPjBuvZ = accounts[2]
		const SpiritCoinSUXzJx = await SpiritCoin.new(addressGtNaw5C, addressPjBuvZ, {from: accounts[1]});
		const addresstt0cEpI = accounts[1]
		const addressdwmw0Y9 = accounts[4]
		const addressESvU69 = accounts[1]
		const addressQyiJyC5 = accounts[2]
		const uintP5JrZWi = BigInt("1480")
		const addresstZzHcEl = accounts[2]
		const uintzKSmD7o = await SpiritCoinSUXzJx.allowance.call(addressdwmw0Y9, addresstt0cEpI, {from: accounts[0]});
		const uintuS7bx9x = await SpiritCoinSUXzJx.allowance.call(addressQyiJyC5, addressESvU69, {from: accounts[2]});
		const boolAa1Qea1 = await SpiritCoinSUXzJx.transfer.call(addresstZzHcEl, uintP5JrZWi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintuS7bx9x, BigInt("0"))
		assert.equal(uintzKSmD7o, BigInt("0"))
		await expect(SpiritCoinSUXzJx.transfer.call(addresstZzHcEl, uintP5JrZWi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresseKQgYLn = accounts[2]
		const addresssLiexfJ = accounts[4]
		const SpiritCoinlj7xy52 = await SpiritCoin.new(addresseKQgYLn, addresssLiexfJ, {from: accounts[0]});
		const uintR7czyY = BigInt("1907")
		const addressinFXaWt = accounts[4]
		const uintiJ2VpOm = BigInt("1343")
		const addressP4tzXa5 = accounts[5]
		const addressHyzhhu4 = accounts[1]
		const boolXH8PHru = await SpiritCoinlj7xy52.transfer.call(addressinFXaWt, uintR7czyY, {from: accounts[2]});
		const addressYvxAqND = await SpiritCoinlj7xy52.mint.call(addressP4tzXa5, uintiJ2VpOm, {from: accounts[0]});
		const addressXXBgad = await SpiritCoinlj7xy52.setMinter.call(addressHyzhhu4, {from: accounts[0]});

		assert.equal(boolXH8PHru, true)
		await expect(SpiritCoinlj7xy52.mint.call(addressP4tzXa5, uintiJ2VpOm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressncsw26q = accounts[1]
		const addresskY1RXEQ = accounts[1]
		const SpiritCoinF6fBVR = await SpiritCoin.new(addressncsw26q, addresskY1RXEQ, {from: accounts[4]});
		const addressARRPPl0 = accounts[4]
		const addressS8nVmd = accounts[1]
		const uintEGMp38x = BigInt("894")
		const addressnrmE5mH = "0x0000000000000000000000000000000000000001"
		const addressjc2HbFA = await SpiritCoinF6fBVR.setMinter.call(addressARRPPl0, {from: accounts[1]});
		const uintq5KBvhy = await SpiritCoinF6fBVR.balanceOf.call(addressS8nVmd, {from: accounts[2]});
		const boolrn5tWZA = await SpiritCoinF6fBVR.transfer.call(addressnrmE5mH, uintEGMp38x, {from: accounts[1]});

		assert.equal(boolrn5tWZA, true)
		assert.equal(uintq5KBvhy, BigInt("10000000000000000000000000"))
	});

	it('test for SpiritCoin', async () => {
		const address4xaWf6 = accounts[1]
		const addressLAfN74c = accounts[3]
		const SpiritCoinCbMhybj = await SpiritCoin.new(address4xaWf6, addressLAfN74c, {from: accounts[3]});
		const uinttjkrg1w = BigInt("1662")
		const addressSoAnEQM = accounts[2]
		const uintbrTuzgE = BigInt("1497")
		const addressRh27gnn = accounts[4]
		const addresshSm9i66 = accounts[3]
		const uintvb5p1A7 = BigInt("1441")
		const addressoToE0ek = accounts[0]
		const addressEAQnC7y = await SpiritCoinCbMhybj.mint.call(addressSoAnEQM, uinttjkrg1w, {from: accounts[3]});
		const addressWnsT4g = await SpiritCoinCbMhybj.mint.call(addressRh27gnn, uintbrTuzgE, {from: accounts[3]});
		const uintL1ccPlm = await SpiritCoinCbMhybj.balanceOf.call(addresshSm9i66, {from: accounts[0]});
		const addresshHm3PwB = await SpiritCoinCbMhybj.mint.call(addressoToE0ek, uintvb5p1A7, {from: accounts[1]});

		assert.equal(uintL1ccPlm, BigInt("0"))
		await expect(SpiritCoinCbMhybj.mint.call(addressoToE0ek, uintvb5p1A7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressxCfi4DO = accounts[1]
		const addressTRG774 = accounts[2]
		const SpiritCoinZeMm4P6 = await SpiritCoin.new(addressxCfi4DO, addressTRG774, {from: "0x0000000000000000000000000000000000000001"});
		const uintJEV2vop = BigInt("659")
		const addressJACfLUO = accounts[4]
		const addresseet0jbL = "0x0000000000000000000000000000000000000001"
		const addressGz9hBQ3 = await SpiritCoinZeMm4P6.mint.call(addressJACfLUO, uintJEV2vop, {from: accounts[3]});
		const addressVOWx3n9 = await SpiritCoinZeMm4P6.setMinter.call(addresseet0jbL, {from: accounts[0]});
	});
})