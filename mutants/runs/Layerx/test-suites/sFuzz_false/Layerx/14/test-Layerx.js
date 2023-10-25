const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressxIY6Keq = accounts[0]
		const LayerxFH3kVa5 = await Layerx.new(addressxIY6Keq, {from: accounts[5]});
		const addresslirjmr2 = accounts[4]
		const uintOOBsR8t = BigInt("634")
		const bytepUWsHyZ = "0x1017171d120b1a0f1606061c061912040a16"
		const uintUYPo2hB = BigInt("280")
		const addresseHNcxhr = accounts[0]
		const uint2kfNKc = await LayerxFH3kVa5.balanceOf.call(addresslirjmr2, {from: "0x0000000000000000000000000000000000000001"});
		const uintBLjrzG = await LayerxFH3kVa5.lock.call(uintOOBsR8t, {from: accounts[4]});
		const boolSwSJMwD = await LayerxFH3kVa5.approveAndCall.call(addresseHNcxhr, uintUYPo2hB, bytepUWsHyZ, {from: accounts[0]});
		await LayerxFH3kVa5.addStakePayment.call({from: accounts[3]});

		assert.equal(uint2kfNKc, BigInt("0"))
		await expect(LayerxFH3kVa5.lock.call(uintOOBsR8t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXb79bcB = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressXb79bcB, {from: accounts[0]});
		const uintTiRfYON = BigInt("1671")
		const addressWfjQfqb = accounts[5]
		const uintPyREHSn = BigInt("1504")
		const boolR3gKiuD = await LayerxPBaE1CX.transfer.call(addressWfjQfqb, uintTiRfYON, {from: accounts[0]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintPyREHSn, {from: accounts[2]});

		assert.equal(boolR3gKiuD, true)
		await expect(LayerxPBaE1CX.burn.call(uintPyREHSn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUWRaNlY = accounts[2]
		const LayerxZO934c = await Layerx.new(addressUWRaNlY, {from: accounts[3]});
		const byterm3CxGR = "0x100a12091b1d180c0b091401180f0c080211030b08001c100110"
		const uintHuFOc7V = BigInt("54")
		const addresshaYZQbR = accounts[1]
		const addresspWgZIYL = accounts[2]
		const addressjXBpy9q = accounts[1]
		const addressgnfele = accounts[1]
		const addressBwvRDc3 = accounts[3]
		const boolh4qJkK6 = await LayerxZO934c.approveAndCall.call(addresshaYZQbR, uintHuFOc7V, byterm3CxGR, {from: "0x0000000000000000000000000000000000000001"});
		const uintmd0ENWO = await LayerxZO934c.balanceOf.call(addresspWgZIYL, {from: accounts[4]});
		const addressffluYB = await LayerxZO934c.setNewStakeCreator.call(addressjXBpy9q, {from: accounts[1]});
		const uintNTIlpOY = await LayerxZO934c.allowance.call(addressBwvRDc3, addressgnfele, {from: accounts[2]});

		await expect(LayerxZO934c.approveAndCall.call(addresshaYZQbR, uintHuFOc7V, byterm3CxGR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswS9xvzd = accounts[2]
		const LayerxJSn0L70 = await Layerx.new(addresswS9xvzd, {from: accounts[2]});
		const byteOCOcSU = "0x171210"
		const uintwv1iAF = BigInt("674")
		const addressJFlgNUT = accounts[4]
		const uintrwyJJqM = BigInt("683")
		const addressyLqP1b = accounts[3]
		const addressbXMTfcD = accounts[0]
		await LayerxJSn0L70.onlyOwner.call({from: accounts[3]});
		const boolbdPoJyQ = await LayerxJSn0L70.approveAndCall.call(addressJFlgNUT, uintwv1iAF, byteOCOcSU, {from: accounts[0]});
		await LayerxJSn0L70.paused.call({from: accounts[1]});
		const boolv0SIx7c = await LayerxJSn0L70.approve.call(addressyLqP1b, uintrwyJJqM, {from: accounts[3]});
		const addressyqK11MD = await LayerxJSn0L70.transferOwnership.call(addressbXMTfcD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxJSn0L70.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresss62NnvP = accounts[4]
		const LayerxfzrKr2o = await Layerx.new(addresss62NnvP, {from: "0x0000000000000000000000000000000000000001"});
		const uintp5FrsPk = BigInt("1342")
		const addressKlQKVd = accounts[0]
		const addressWGTr3fl = accounts[1]
		await LayerxfzrKr2o.addStakePayment.call({from: accounts[4]});
		await LayerxfzrKr2o.paused.call({from: accounts[1]});
		const bool2P6w2C = await LayerxfzrKr2o.approve.call(addressKlQKVd, uintp5FrsPk, {from: accounts[2]});
		const addressGVYNEsl = await LayerxfzrKr2o.setNewStakeCreator.call(addressWGTr3fl, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addressIOYRLMQ = accounts[3]
		const LayerxrRAmDRb = await Layerx.new(addressIOYRLMQ, {from: accounts[4]});
		const boolMg8nfI = true
		const boolP7QGWan = false
		await LayerxrRAmDRb.f.call({from: accounts[3]});
		await LayerxrRAmDRb.unlock.call({from: accounts[1]});
		const boolwxR6Xtl = await LayerxrRAmDRb.setIsPaused.call(boolMg8nfI, {from: accounts[5]});
		await LayerxrRAmDRb.f.call({from: accounts[4]});
		const boolMY8iDs = await LayerxrRAmDRb.setIsPaused.call(boolP7QGWan, {from: accounts[0]});

		await expect(LayerxrRAmDRb.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxBbniRM = accounts[0]
		const LayerxqD6jEkw = await Layerx.new(addressxBbniRM, {from: accounts[2]});
		const uintNFqc2fJ = BigInt("1364")
		const uintQNrOksb = BigInt("1228")
		const uintcKR833w = await LayerxqD6jEkw.withdraw.call(uintNFqc2fJ, {from: accounts[3]});
		const uintPDndmlM = await LayerxqD6jEkw.exist.call(uintQNrOksb, {from: accounts[0]});

		await expect(LayerxqD6jEkw.withdraw.call(uintNFqc2fJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshXUVSFZ = accounts[1]
		const LayerxYSjvrYl = await Layerx.new(addresshXUVSFZ, {from: accounts[1]});
		const uintpYpKJjz = await LayerxYSjvrYl.getStakesNum.call({from: accounts[2]});
		const uintfv1TDO = await LayerxYSjvrYl.getStakesNum.call({from: accounts[5]});

		assert.equal(uintfv1TDO, BigInt("1"))
		assert.equal(uintpYpKJjz, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addresssSGyEda = accounts[0]
		const LayerxqD6jEkw = await Layerx.new(addresssSGyEda, {from: accounts[2]});
		const uintSpGeECn = BigInt("2036")
		const addressyoXaE45 = accounts[5]
		const uintBzpvTcw = BigInt("1364")
		const uintojvtABa = BigInt("1452")
		const boolgAtFx33 = await LayerxqD6jEkw.approve.call(addressyoXaE45, uintSpGeECn, {from: accounts[3]});
		const uintcKR833w = await LayerxqD6jEkw.withdraw.call(uintBzpvTcw, {from: accounts[3]});
		await LayerxqD6jEkw.unlock.call({from: accounts[5]});
		const uintPDndmlM = await LayerxqD6jEkw.exist.call(uintojvtABa, {from: accounts[0]});

		assert.equal(boolgAtFx33, true)
		await expect(LayerxqD6jEkw.withdraw.call(uintBzpvTcw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAo6NLOO = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressAo6NLOO, {from: accounts[0]});
		const addressGaTrHDq = accounts[5]
		const uintMWJHGB = BigInt("1671")
		const addresscmIahEi = accounts[5]
		const uintKh9tPn5 = BigInt("1515")
		const uintxpV6vcr = await LayerxPBaE1CX.balanceOf.call(addressGaTrHDq, {from: accounts[1]});
		const boolR3gKiuD = await LayerxPBaE1CX.transfer.call(addresscmIahEi, uintMWJHGB, {from: accounts[0]});
		const uintvHGoOx4 = await LayerxPBaE1CX.totalSupply.call({from: accounts[2]});
		await LayerxPBaE1CX.addStakePayment.call({from: accounts[4]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintKh9tPn5, {from: accounts[2]});

		assert.equal(boolR3gKiuD, true)
		assert.equal(uintvHGoOx4, BigInt("40000000000000000000000"))
		assert.equal(uintxpV6vcr, BigInt("0"))
		await expect(LayerxPBaE1CX.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscBYWRg = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addresscBYWRg, {from: accounts[0]});
		const uintc9XJm9 = BigInt("1671")
		const addressvGys8a6 = accounts[5]
		const uintTwBLKoL = BigInt("801")
		const addressyHDbBH3 = accounts[0]
		const addressUpiQc5x = "0x0000000000000000000000000000000000000001"
		const uintjWn1xXR = BigInt("1523")
		const uintkT2d1vl = await LayerxPBaE1CX.getStakesNum.call({from: accounts[0]});
		const boolR3gKiuD = await LayerxPBaE1CX.transfer.call(addressvGys8a6, uintc9XJm9, {from: accounts[0]});
		const boolsrPqIPd = await LayerxPBaE1CX.transferFrom.call(addressUpiQc5x, addressyHDbBH3, uintTwBLKoL, {from: accounts[3]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintjWn1xXR, {from: accounts[2]});

		assert.equal(boolR3gKiuD, true)
		assert.equal(uintkT2d1vl, BigInt("1"))
		await expect(LayerxPBaE1CX.transferFrom.call(addressUpiQc5x, addressyHDbBH3, uintTwBLKoL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressp9IN0s = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressp9IN0s, {from: accounts[0]});
		const addressYir9NW8 = accounts[3]
		const uintkUjeBZ = BigInt("1504")
		const addressjvFfLbr = await LayerxPBaE1CX.setNewStakeCreator.call(addressYir9NW8, {from: accounts[0]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintkUjeBZ, {from: accounts[2]});

		await expect(LayerxPBaE1CX.burn.call(uintkUjeBZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVHhZnaP = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressVHhZnaP, {from: accounts[0]});
		const uintDjCyC5P = BigInt("1169")
		const uint256qZ3IRlZ = await LayerxPBaE1CX.burn.call(uintDjCyC5P, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressDjcYZuV = accounts[2]
		const Layerxt3hxFlY = await Layerx.new(addressDjcYZuV, {from: accounts[4]});
		const bytezpzL8pu = "0x1e031a171e13180e011d101012060f010e"
		const uintyDZs5qa = BigInt("773")
		const addresspmLleo = accounts[4]
		await Layerxt3hxFlY.addStakePayment.call({from: accounts[2]});
		const boolSdnU3kn = await Layerxt3hxFlY.approveAndCall.call(addresspmLleo, uintyDZs5qa, bytezpzL8pu, {from: accounts[2]});
		await Layerxt3hxFlY.unlock.call({from: accounts[2]});

		await expect(Layerxt3hxFlY.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address0fyE4G = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(address0fyE4G, {from: accounts[0]});
		const booltrtz4Eb = true
		const uintLIWymFU = BigInt("1608")
		const uintia07FVY = BigInt("1509")
		const boolkToVP1v = await LayerxPBaE1CX.setIsPaused.call(booltrtz4Eb, {from: accounts[0]});
		const uintDH8TYh = await LayerxPBaE1CX.exist.call(uintLIWymFU, {from: accounts[3]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintia07FVY, {from: accounts[2]});

		await expect(LayerxPBaE1CX.exist.call(uintLIWymFU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressI5DPLrg = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressI5DPLrg, {from: accounts[0]});
		const addressS7r6Yu4 = accounts[1]
		const addressdSz59C = accounts[1]
		const uintMZHGTLN = BigInt("1478")
		const uintyUzJssK = await LayerxPBaE1CX.allowance.call(addressdSz59C, addressS7r6Yu4, {from: accounts[4]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintMZHGTLN, {from: accounts[2]});

		assert.equal(uintyUzJssK, BigInt("0"))
		await expect(LayerxPBaE1CX.burn.call(uintMZHGTLN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmNiydMb = accounts[0]
		const LayerxPBaE1CX = await Layerx.new(addressmNiydMb, {from: accounts[0]});
		const addressA66viB = accounts[1]
		const uintbeo8d3T = BigInt("1489")
		const addressDG0fgk9 = await LayerxPBaE1CX.transferOwnership.call(addressA66viB, {from: accounts[0]});
		const uint256clInmjE = await LayerxPBaE1CX.burn.call(uintbeo8d3T, {from: accounts[2]});
		await LayerxPBaE1CX.paused.call({from: accounts[3]});

		await expect(LayerxPBaE1CX.burn.call(uintbeo8d3T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})