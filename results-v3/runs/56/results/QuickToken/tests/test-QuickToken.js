const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const address0xOvGi = accounts[2]
		const addresssZuNIb1 = accounts[1]
		const QuickTokenNdis5YC = await QuickToken.new(address0xOvGi, addresssZuNIb1, {from: "0x0000000000000000000000000000000000000001"});
		const uintPCn2trT = BigInt("877")
		const addressmLF0VPp = accounts[2]
		const addressSEW8X3s = "0x0000000000000000000000000000000000000001"
		const uintngZAhc7 = BigInt("544")
		const addressDDrc2F3 = accounts[3]
		const addressB4hONKd = accounts[0]
		const uintQlzMpT9 = BigInt("1633")
		const addressvQARUt4 = "0x0000000000000000000000000000000000000001"
		const address1I3zGN = accounts[4]
		const addressrBdQCtx = accounts[4]
		const boolxNog6n6 = await QuickTokenNdis5YC.transfer.call(addressmLF0VPp, uintPCn2trT, {from: accounts[3]});
		const addressjEmCpOh = await QuickTokenNdis5YC.setMinter.call(addressSEW8X3s, {from: accounts[2]});
		const boolPCWxftK = await QuickTokenNdis5YC.transferFrom.call(addressB4hONKd, addressDDrc2F3, uintngZAhc7, {from: accounts[4]});
		const boolObrYoO = await QuickTokenNdis5YC.transfer.call(addressvQARUt4, uintQlzMpT9, {from: accounts[1]});
		const uintLPtIz3 = await QuickTokenNdis5YC.balanceOf.call(address1I3zGN, {from: "0x0000000000000000000000000000000000000001"});
		const uintB8JvEvh = await QuickTokenNdis5YC.balanceOf.call(addressrBdQCtx, {from: accounts[2]});
	});

	it('test for QuickToken', async () => {
		const addressPbB42a = accounts[1]
		const addresst7qtZR9 = accounts[5]
		const QuickTokenU3Xw1xx = await QuickToken.new(addressPbB42a, addresst7qtZR9, {from: accounts[4]});
		const uintTIHcjUY = BigInt("1260")
		const addressscj9e5 = accounts[1]
		const uintKxh8I1v = BigInt("1331")
		const addresszstMilV = "0x0000000000000000000000000000000000000001"
		const addresscMloQlf = accounts[2]
		const addressZYYyy7 = accounts[1]
		const addresssG26NuE = accounts[0]
		const addressZCHxmCJ = accounts[1]
		const uintcuCkzAB = BigInt("739")
		const addressEPn4FmX = accounts[4]
		const addressa2rySf4 = await QuickTokenU3Xw1xx.mint.call(addressscj9e5, uintTIHcjUY, {from: accounts[0]});
		const addresseWA1fTu = await QuickTokenU3Xw1xx.mint.call(addresszstMilV, uintKxh8I1v, {from: accounts[0]});
		const uintQp36Hb = await QuickTokenU3Xw1xx.allowance.call(addressZYYyy7, addresscMloQlf, {from: accounts[3]});
		const addressEemQHXZ = await QuickTokenU3Xw1xx.setMinter.call(addresssG26NuE, {from: accounts[4]});
		const uintojqtO9U = await QuickTokenU3Xw1xx.balanceOf.call(addressZCHxmCJ, {from: accounts[3]});
		const addressayMoObP = await QuickTokenU3Xw1xx.mint.call(addressEPn4FmX, uintcuCkzAB, {from: accounts[0]});

		await expect(QuickTokenU3Xw1xx.mint.call(addressscj9e5, uintTIHcjUY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressfRK4gVC = accounts[1]
		const addressr1prrPh = accounts[4]
		const QuickTokenHN1MZy = await QuickToken.new(addressfRK4gVC, addressr1prrPh, {from: accounts[2]});
		const addressmt03T3 = accounts[1]
		const addressn2m3IQl = accounts[2]
		const addresspt9xC60 = accounts[0]
		const addressrlThRnN = accounts[1]
		const addresswTcDw6R = accounts[1]
		const addressFXTUbmr = accounts[5]
		const uintyV0A9Ox = await QuickTokenHN1MZy.allowance.call(addressn2m3IQl, addressmt03T3, {from: accounts[4]});
		const uintkHw0Fba = await QuickTokenHN1MZy.balanceOf.call(addresspt9xC60, {from: accounts[1]});
		const addressvNHgmn6 = await QuickTokenHN1MZy.setMinter.call(addressrlThRnN, {from: accounts[4]});
		const uintxBZNXOY = await QuickTokenHN1MZy.allowance.call(addressFXTUbmr, addresswTcDw6R, {from: accounts[0]});

		assert.equal(uintkHw0Fba, BigInt("0"))
		assert.equal(uintxBZNXOY, BigInt("0"))
		assert.equal(uintyV0A9Ox, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressQV26PB = accounts[2]
		const addresstIFz6SN = accounts[0]
		const QuickTokend173eO1 = await QuickToken.new(addressQV26PB, addresstIFz6SN, {from: accounts[3]});
		const uintesnll1L = BigInt("1584")
		const addressk2L4tKt = accounts[2]
		const uintjwqpz4t = BigInt("459")
		const addresssq7DkAT = accounts[2]
		const addressis5r1VN = "0x0000000000000000000000000000000000000001"
		const addressWPGvwK = accounts[0]
		const bool5YBfDl = await QuickTokend173eO1.approve.call(addressk2L4tKt, uintesnll1L, {from: "0x0000000000000000000000000000000000000001"});
		const boolzPBKk2x = await QuickTokend173eO1.approve.call(addresssq7DkAT, uintjwqpz4t, {from: accounts[1]});
		const uintbS2ebzr = await QuickTokend173eO1.allowance.call(addressWPGvwK, addressis5r1VN, {from: accounts[5]});

		assert.equal(bool5YBfDl, true)
		assert.equal(boolzPBKk2x, true)
		assert.equal(uintbS2ebzr, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressD51JmB = "0x0000000000000000000000000000000000000001"
		const addressU1NYkjh = accounts[4]
		const QuickTokenwH6aBel = await QuickToken.new(addressD51JmB, addressU1NYkjh, {from: accounts[0]});
		const addressFTkh5wF = accounts[2]
		const addressdVXATYf = accounts[4]
		const uintAZmZubT = BigInt("1188")
		const addressoARzDy6 = accounts[3]
		const addressA0cVsFs = accounts[0]
		const uintB8RbW4I = await QuickTokenwH6aBel.allowance.call(addressdVXATYf, addressFTkh5wF, {from: accounts[0]});
		const boolU6OgXf = await QuickTokenwH6aBel.approve.call(addressoARzDy6, uintAZmZubT, {from: accounts[1]});
		const addressKQV7m3s = await QuickTokenwH6aBel.setMinter.call(addressA0cVsFs, {from: accounts[2]});

		assert.equal(boolU6OgXf, true)
		assert.equal(uintB8RbW4I, BigInt("0"))
		await expect(QuickTokenwH6aBel.setMinter.call(addressA0cVsFs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressXZs3wAy = accounts[1]
		const addresssIIVy5O = accounts[3]
		const QuickToken9BOjB7 = await QuickToken.new(addressXZs3wAy, addresssIIVy5O, {from: accounts[4]});
		const uintyE7Y7ga = BigInt("1219")
		const addressH6Wma3j = accounts[3]
		const addressVJpYfo = accounts[4]
		const uintK5PjdWG = BigInt("1577")
		const addressiVLFdSy = accounts[3]
		const uintSWJyGWx = BigInt("373")
		const addressxZJWLUB = accounts[0]
		const uintez2OpKQ = BigInt("1691")
		const addressxfHc6KQ = accounts[1]
		const addressjgYPjOF = "0x0000000000000000000000000000000000000001"
		const uintV1lWMxl = BigInt("1329")
		const addressYnCGZPk = accounts[0]
		const boollS3DD0B = await QuickToken9BOjB7.transferFrom.call(addressVJpYfo, addressH6Wma3j, uintyE7Y7ga, {from: accounts[4]});
		const addressoePdRIC = await QuickToken9BOjB7.mint.call(addressiVLFdSy, uintK5PjdWG, {from: accounts[0]});
		const addresstlctFph = await QuickToken9BOjB7.mint.call(addressxZJWLUB, uintSWJyGWx, {from: accounts[2]});
		const boolgR1VvF9 = await QuickToken9BOjB7.transferFrom.call(addressjgYPjOF, addressxfHc6KQ, uintez2OpKQ, {from: accounts[1]});
		const addressXHiFNjK = await QuickToken9BOjB7.mint.call(addressYnCGZPk, uintV1lWMxl, {from: accounts[5]});

		await expect(QuickToken9BOjB7.transferFrom.call(addressVJpYfo, addressH6Wma3j, uintyE7Y7ga, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressny6ePqq = accounts[0]
		const addressFuYTcTp = accounts[0]
		const QuickTokenA6bzLQ4 = await QuickToken.new(addressny6ePqq, addressFuYTcTp, {from: accounts[5]});
		const addressAZKxzag = accounts[0]
		const addressIsgtuyY = accounts[5]
		const uintEpNHEaf = BigInt("1060")
		const addressSzLNBd = accounts[2]
		const addressXBpknUZ = accounts[4]
		const uintx7QOI2T = await QuickTokenA6bzLQ4.allowance.call(addressIsgtuyY, addressAZKxzag, {from: accounts[1]});
		const boolziRlL0T = await QuickTokenA6bzLQ4.transfer.call(addressSzLNBd, uintEpNHEaf, {from: "0x0000000000000000000000000000000000000001"});
		const uintglWlbpA = await QuickTokenA6bzLQ4.balanceOf.call(addressXBpknUZ, {from: accounts[2]});

		assert.equal(uintx7QOI2T, BigInt("0"))
		await expect(QuickTokenA6bzLQ4.transfer.call(addressSzLNBd, uintEpNHEaf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressCSXO7ew = accounts[2]
		const addresshCiodbQ = accounts[1]
		const QuickTokenTgzAyld = await QuickToken.new(addressCSXO7ew, addresshCiodbQ, {from: accounts[5]});
		const addressKBeUwsg = accounts[3]
		const uintpiF7qWQ = BigInt("883")
		const addressnWs4l6Z = accounts[3]
		const uintD0Wft7 = BigInt("2028")
		const addresskupAd0h = accounts[2]
		const uintFPBPdLK = await QuickTokenTgzAyld.balanceOf.call(addressKBeUwsg, {from: accounts[2]});
		const addressRhFpBAF = await QuickTokenTgzAyld.mint.call(addressnWs4l6Z, uintpiF7qWQ, {from: accounts[1]});
		const bool6fOYj1 = await QuickTokenTgzAyld.transfer.call(addresskupAd0h, uintD0Wft7, {from: accounts[1]});

		assert.equal(uintFPBPdLK, BigInt("0"))
		await expect(QuickTokenTgzAyld.transfer.call(addresskupAd0h, uintD0Wft7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressLHXEWr = accounts[0]
		const addressoP1TVff = accounts[0]
		const QuickTokenA6bzLQ4 = await QuickToken.new(addressLHXEWr, addressoP1TVff, {from: accounts[5]});
		const addresshOJqx2N = accounts[0]
		const addressU67yWuz = accounts[5]
		const uintnOZCUAX = BigInt("1035")
		const addressdwAXzGU = "0x0000000000000000000000000000000000000001"
		const addresslHT4NPG = accounts[5]
		const uintg48xTvc = BigInt("1060")
		const addresswiujRKU = accounts[3]
		const addressLNwrFH = accounts[4]
		const uintx7QOI2T = await QuickTokenA6bzLQ4.allowance.call(addressU67yWuz, addresshOJqx2N, {from: accounts[1]});
		const boolWONdnM = await QuickTokenA6bzLQ4.transferFrom.call(addresslHT4NPG, addressdwAXzGU, uintnOZCUAX, {from: accounts[4]});
		const boolziRlL0T = await QuickTokenA6bzLQ4.transfer.call(addresswiujRKU, uintg48xTvc, {from: "0x0000000000000000000000000000000000000001"});
		const uintglWlbpA = await QuickTokenA6bzLQ4.balanceOf.call(addressLNwrFH, {from: accounts[2]});

		assert.equal(uintx7QOI2T, BigInt("0"))
		await expect(QuickTokenA6bzLQ4.transferFrom.call(addresslHT4NPG, addressdwAXzGU, uintnOZCUAX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressiJlZMw = accounts[0]
		const addressePoUXqM = accounts[0]
		const QuickTokenA6bzLQ4 = await QuickToken.new(addressiJlZMw, addressePoUXqM, {from: accounts[5]});
		const addressWfBgehf = accounts[1]
		const addressEfK6OiF = accounts[5]
		const uintpSfcpPc = BigInt("148")
		const addresscG1icC = accounts[3]
		const uintbEtMDaX = BigInt("437")
		const addressBBY5jEZ = "0x0000000000000000000000000000000000000001"
		const addressyJOH57 = accounts[5]
		const uintK8Opie4 = BigInt("255")
		const addressMzTOg5c = accounts[5]
		const uintx7QOI2T = await QuickTokenA6bzLQ4.allowance.call(addressEfK6OiF, addressWfBgehf, {from: accounts[1]});
		const boolQuxv5j = await QuickTokenA6bzLQ4.transfer.call(addresscG1icC, uintpSfcpPc, {from: accounts[0]});
		const boolZQit98w = await QuickTokenA6bzLQ4.transferFrom.call(addressyJOH57, addressBBY5jEZ, uintbEtMDaX, {from: accounts[0]});
		const boolLR7mSgc = await QuickTokenA6bzLQ4.approve.call(addressMzTOg5c, uintK8Opie4, {from: accounts[2]});

		assert.equal(boolQuxv5j, true)
		assert.equal(uintx7QOI2T, BigInt("0"))
		await expect(QuickTokenA6bzLQ4.transferFrom.call(addressyJOH57, addressBBY5jEZ, uintbEtMDaX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})