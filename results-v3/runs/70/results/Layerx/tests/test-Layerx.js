const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressuPL6FrT = accounts[2]
		const LayerxLE6co1Y = await Layerx.new(addressuPL6FrT, {from: "0x0000000000000000000000000000000000000001"});
		const uintYquN9iP = BigInt("536")
		const addressadTqXtG = accounts[4]
		const uint1UWi02 = BigInt("1233")
		const addressyhL6TEP = accounts[1]
		const addresst8zI4ZA = accounts[0]
		const uintacg0QHp = BigInt("496")
		const uintful4r6O = BigInt("732")
		const boolgAWITJR = await LayerxLE6co1Y.transfer.call(addressadTqXtG, uintYquN9iP, {from: accounts[2]});
		const boolfLtmqKM = await LayerxLE6co1Y.transferFrom.call(addresst8zI4ZA, addressyhL6TEP, uint1UWi02, {from: accounts[4]});
		const uintbiNC6dA = await LayerxLE6co1Y.withdraw.call(uintacg0QHp, {from: accounts[3]});
		const uintGrodYRY = await LayerxLE6co1Y.exist.call(uintful4r6O, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addressFspGthR = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressFspGthR, {from: accounts[1]});
		const uints0jQGvf = BigInt("1031")
		const addressNXhsKBS = accounts[2]
		const uintZ3CDccF = BigInt("604")
		const boolpCEcxkA = await LayerxK6A6jun.approve.call(addressNXhsKBS, uints0jQGvf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintZ3CDccF, {from: accounts[2]});

		assert.equal(boolpCEcxkA, true)
		await expect(LayerxK6A6jun.burn.call(uintZ3CDccF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressamAhH5s = accounts[0]
		const LayerxaYm4lKl = await Layerx.new(addressamAhH5s, {from: accounts[0]});
		const addressOYv2eH4 = accounts[4]
		const uintmzAeuy4 = BigInt("588")
		const uintD5kejml = await LayerxaYm4lKl.balanceOf.call(addressOYv2eH4, {from: accounts[0]});
		await LayerxaYm4lKl.addStakePayment.call({from: accounts[4]});
		const uint256iFrGO1P = await LayerxaYm4lKl.burn.call(uintmzAeuy4, {from: accounts[4]});
		const uintbQzPtU9 = await LayerxaYm4lKl.totalSupply.call({from: accounts[0]});

		assert.equal(uintD5kejml, BigInt("0"))
		await expect(LayerxaYm4lKl.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBdB8mm = accounts[1]
		const LayerxrNeapj = await Layerx.new(addressBdB8mm, {from: accounts[3]});
		const addressT5GLuqj = accounts[3]
		const addressO9PnqbR = "0x0000000000000000000000000000000000000001"
		const addressHgJq5Vi = accounts[1]
		const addressulUkEqE = accounts[4]
		const uintmdtOnH2 = BigInt("732")
		await LayerxrNeapj.paused.call({from: accounts[1]});
		const uintI7s9B7e = await LayerxrNeapj.allowance.call(addressO9PnqbR, addressT5GLuqj, {from: accounts[4]});
		const uintQKl30R0 = await LayerxrNeapj.allowance.call(addressulUkEqE, addressHgJq5Vi, {from: accounts[4]});
		const uinttukZBEv = await LayerxrNeapj.withdraw.call(uintmdtOnH2, {from: accounts[3]});

		await expect(LayerxrNeapj.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQ13ujeC = accounts[4]
		const LayerxdsjyNyr = await Layerx.new(addressQ13ujeC, {from: accounts[4]});
		const addresscLfDs9t = accounts[2]
		const addressDeiVtUD = accounts[0]
		const addressEeR1G9b = accounts[5]
		const addressEabuBNW = "0x0000000000000000000000000000000000000001"
		const uintjMtR0up = BigInt("1305")
		const addressVtFBvYv = accounts[4]
		const uintDuIul4q = await LayerxdsjyNyr.allowance.call(addressDeiVtUD, addresscLfDs9t, {from: accounts[1]});
		const addresswwgz9h0 = await LayerxdsjyNyr.setNewStakeCreator.call(addressEeR1G9b, {from: accounts[5]});
		await LayerxdsjyNyr.addStakePayment.call({from: accounts[4]});
		const addressK4nQycu = await LayerxdsjyNyr.transferOwnership.call(addressEabuBNW, {from: accounts[1]});
		const uint256cm0wxwU = await LayerxdsjyNyr.burn.call(uintjMtR0up, {from: accounts[1]});
		const addressJA38RoG = await LayerxdsjyNyr.transferOwnership.call(addressVtFBvYv, {from: accounts[3]});

		assert.equal(uintDuIul4q, BigInt("0"))
		await expect(LayerxdsjyNyr.setNewStakeCreator.call(addressEeR1G9b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGC9Z4YK = "0x0000000000000000000000000000000000000001"
		const LayerxKvWN89b = await Layerx.new(addressGC9Z4YK, {from: accounts[0]});
		const uintovpCIhr = BigInt("1951")
		const uintet822tp = BigInt("129")
		const uintgrdOzXe = BigInt("533")
		const uintZ83h2o = await LayerxKvWN89b.lock.call(uintovpCIhr, {from: "0x0000000000000000000000000000000000000001"});
		const uintg9yok74 = await LayerxKvWN89b.lock.call(uintet822tp, {from: accounts[0]});
		const uintrMznITb = await LayerxKvWN89b.lock.call(uintgrdOzXe, {from: accounts[2]});
		const uintcarxHoW = await LayerxKvWN89b.getStakesNum.call({from: accounts[3]});
		const uintAHwOEs = await LayerxKvWN89b.totalSupply.call({from: accounts[5]});

		await expect(LayerxKvWN89b.lock.call(uintovpCIhr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxInRBJJ = accounts[1]
		const LayerxMSXMvrQ = await Layerx.new(addressxInRBJJ, {from: accounts[4]});
		const byten33UHSB = "0x1c0b0f061908121a190e03"
		const uintRZFYbk2 = BigInt("323")
		const addressJYhNwAS = accounts[5]
		const addresslna3yUS = accounts[4]
		const uintBRbgRP = await LayerxMSXMvrQ.totalSupply.call({from: accounts[0]});
		const boolvAYs1Nm = await LayerxMSXMvrQ.approveAndCall.call(addressJYhNwAS, uintRZFYbk2, byten33UHSB, {from: accounts[1]});
		const addressQZA4jBx = await LayerxMSXMvrQ.setNewStakeCreator.call(addresslna3yUS, {from: accounts[4]});

		assert.equal(uintBRbgRP, BigInt("40000000000000000000000"))
		await expect(LayerxMSXMvrQ.approveAndCall.call(addressJYhNwAS, uintRZFYbk2, byten33UHSB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfgye6bB = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressfgye6bB, {from: accounts[1]});
		const addressMehxr2b = accounts[1]
		const addressb7ZDvxP = accounts[3]
		const uintjCPli6z = BigInt("596")
		const addresskGFo16H = await LayerxK6A6jun.transferOwnership.call(addressMehxr2b, {from: accounts[0]});
		const addressUqIglok = await LayerxK6A6jun.setNewStakeCreator.call(addressb7ZDvxP, {from: accounts[0]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintjCPli6z, {from: accounts[2]});
		await LayerxK6A6jun.unlock.call({from: accounts[3]});

		await expect(LayerxK6A6jun.burn.call(uintjCPli6z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfKPb8qJ = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressfKPb8qJ, {from: accounts[1]});
		const uintaXjZ0C = BigInt("946")
		const addressu1YLOZO = accounts[2]
		const addresstptqKPW = accounts[1]
		const uintw6jqHol = BigInt("623")
		const boolmT9ssiD = await LayerxK6A6jun.transferFrom.call(addresstptqKPW, addressu1YLOZO, uintaXjZ0C, {from: accounts[4]});
		await LayerxK6A6jun.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintw6jqHol, {from: accounts[2]});

		await expect(LayerxK6A6jun.transferFrom.call(addresstptqKPW, addressu1YLOZO, uintaXjZ0C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshyql5Tl = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addresshyql5Tl, {from: accounts[1]});
		const uintAXBka1d = BigInt("1077")
		const uintVbHFy4J = BigInt("611")
		const uintqnEt4vt = await LayerxK6A6jun.withdraw.call(uintAXBka1d, {from: accounts[4]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintVbHFy4J, {from: accounts[2]});

		await expect(LayerxK6A6jun.withdraw.call(uintAXBka1d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYqMRzja = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressYqMRzja, {from: accounts[1]});
		const uintSjmpqvZ = BigInt("604")
		const uintFyyNl7s = await LayerxK6A6jun.getStakesNum.call({from: accounts[2]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintSjmpqvZ, {from: accounts[2]});

		assert.equal(uintFyyNl7s, BigInt("1"))
		await expect(LayerxK6A6jun.burn.call(uintSjmpqvZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressALIbXP = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressALIbXP, {from: accounts[1]});
		const uintmrYib6G = BigInt("602")
		const addressSkJRA3X = accounts[2]
		await LayerxK6A6jun.f.call({from: accounts[1]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintmrYib6G, {from: accounts[2]});
		const addressRiv0VZP = await LayerxK6A6jun.setNewStakeCreator.call(addressSkJRA3X, {from: accounts[3]});

		await expect(LayerxK6A6jun.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressByPWPAA = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressByPWPAA, {from: accounts[1]});
		const uintmZb44ai = BigInt("604")
		const uintsXigqqL = BigInt("966")
		const addressdxm2ddT = accounts[1]
		await LayerxK6A6jun.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintmZb44ai, {from: accounts[2]});
		const boolhRwn9Aq = await LayerxK6A6jun.approve.call(addressdxm2ddT, uintsXigqqL, {from: accounts[4]});

		await expect(LayerxK6A6jun.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszalDatB = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addresszalDatB, {from: accounts[1]});
		const uintGroBOZ = BigInt("180")
		const addressF0eAyKp = accounts[0]
		const uintbSVywai = BigInt("597")
		const boolUBtrZy = await LayerxK6A6jun.transfer.call(addressF0eAyKp, uintGroBOZ, {from: accounts[3]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintbSVywai, {from: accounts[2]});
		await LayerxK6A6jun.paused.call({from: accounts[5]});
		await LayerxK6A6jun.paused.call({from: accounts[5]});

		await expect(LayerxK6A6jun.transfer.call(addressF0eAyKp, uintGroBOZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskUPvPwS = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addresskUPvPwS, {from: accounts[1]});
		const uintrqLKg3H = BigInt("891")
		const addressY25hO9 = accounts[1]
		const uintcSv9FA = BigInt("1684")
		await LayerxK6A6jun.addStakePayment.call({from: accounts[0]});
		const boolbalkDDa = await LayerxK6A6jun.transfer.call(addressY25hO9, uintrqLKg3H, {from: accounts[0]});
		await LayerxK6A6jun.onlyOwner.call({from: accounts[3]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintcSv9FA, {from: accounts[2]});

		await expect(LayerxK6A6jun.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIn0dQn1 = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressIn0dQn1, {from: accounts[1]});
		const uintVK0zYh = BigInt("763")
		await LayerxK6A6jun.addStakePayment.call({from: accounts[0]});
		const uint256mwLlPXS = await LayerxK6A6jun.burn.call(uintVK0zYh, {from: accounts[0]});

		await expect(LayerxK6A6jun.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYfSsxma = accounts[0]
		const LayerxK6A6jun = await Layerx.new(addressYfSsxma, {from: accounts[1]});
		const booly7w5Ff = true
		const uintFibovE = BigInt("54")
		const addressBw90Zn = accounts[5]
		const boolTL1hBTA = await LayerxK6A6jun.setIsPaused.call(booly7w5Ff, {from: accounts[0]});
		const uint256iUmLrb5 = await LayerxK6A6jun.burn.call(uintFibovE, {from: accounts[2]});
		const addressJJQydXg = await LayerxK6A6jun.setNewStakeCreator.call(addressBw90Zn, {from: accounts[1]});

		await expect(LayerxK6A6jun.burn.call(uintFibovE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})