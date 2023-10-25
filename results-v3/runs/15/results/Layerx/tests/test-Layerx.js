const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressSWa7dT = accounts[1]
		const LayerxNhmkBwm = await Layerx.new(addressSWa7dT, {from: accounts[1]});
		const uintqqcghQ = BigInt("1718")
		const boolqvjcKXM = true
		const uintoS8ruOE = await LayerxNhmkBwm.lock.call(uintqqcghQ, {from: accounts[0]});
		const boolADdGED = await LayerxNhmkBwm.setIsPaused.call(boolqvjcKXM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxNhmkBwm.lock.call(uintqqcghQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressH1rqwNP = accounts[5]
		const LayerxA6ippA2 = await Layerx.new(addressH1rqwNP, {from: accounts[2]});
		const uintmnAX4dU = BigInt("733")
		const addressCkcNvVS = accounts[2]
		const address2VQWxa = accounts[4]
		const byteSjO4jbf = "0x0b0c1a1b0f130d1119100a13101d"
		const uintPZBOzkz = BigInt("911")
		const addressTxxRV4f = accounts[5]
		const uintjquvNm3 = BigInt("1108")
		const addressfzKktF2 = accounts[2]
		await LayerxA6ippA2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolMHtX00z = await LayerxA6ippA2.transferFrom.call(address2VQWxa, addressCkcNvVS, uintmnAX4dU, {from: accounts[4]});
		const boolgEIxycW = await LayerxA6ippA2.approveAndCall.call(addressTxxRV4f, uintPZBOzkz, byteSjO4jbf, {from: accounts[1]});
		const uintyONl1s8 = await LayerxA6ippA2.lock.call(uintjquvNm3, {from: accounts[0]});
		const addressi7MEPT = await LayerxA6ippA2.transferOwnership.call(addressfzKktF2, {from: accounts[3]});

		await expect(LayerxA6ippA2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address2KpnZG = accounts[3]
		const Layerxb5pIzMn = await Layerx.new(address2KpnZG, {from: accounts[4]});
		const uintRi8dupe = BigInt("893")
		const addressB3P4S7Z = accounts[1]
		const addressOJc9A7V = "0x0000000000000000000000000000000000000001"
		const addresseK8jXq8 = accounts[3]
		const addressraZ6Fc3 = accounts[0]
		const addressz84tYAR = accounts[4]
		const boolBaX4pxM = await Layerxb5pIzMn.approve.call(addressB3P4S7Z, uintRi8dupe, {from: accounts[5]});
		await Layerxb5pIzMn.f.call({from: accounts[2]});
		const uintRPHUbpF = await Layerxb5pIzMn.allowance.call(addresseK8jXq8, addressOJc9A7V, {from: accounts[2]});
		const addresskceQ7wH = await Layerxb5pIzMn.transferOwnership.call(addressraZ6Fc3, {from: accounts[1]});
		const uintAxQeUWe = await Layerxb5pIzMn.balanceOf.call(addressz84tYAR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBaX4pxM, true)
		await expect(Layerxb5pIzMn.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswViuHFl = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addresswViuHFl, {from: accounts[2]});
		const addressffFzLm3 = accounts[2]
		const addresshWZXQ4a = accounts[2]
		const addressQAw7nVy = accounts[1]
		const uintd9Jk8al = await LayerxYkK3vok.allowance.call(addresshWZXQ4a, addressffFzLm3, {from: accounts[1]});
		const uints2Z8AE1 = await LayerxYkK3vok.balanceOf.call(addressQAw7nVy, {from: accounts[2]});
		await LayerxYkK3vok.unlock.call({from: accounts[5]});

		assert.equal(uintd9Jk8al, BigInt("0"))
		assert.equal(uints2Z8AE1, BigInt("0"))
		await expect(LayerxYkK3vok.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfaSylJV = "0x0000000000000000000000000000000000000001"
		const LayerxxfrzAT = await Layerx.new(addressfaSylJV, {from: accounts[4]});
		const uinteCsgEJb = BigInt("1635")
		const uintBfXumPD = BigInt("1195")
		const addresshLbRjZy = accounts[0]
		const addressaIGv6k2 = accounts[1]
		const uintDhxYZ4I = await LayerxxfrzAT.withdraw.call(uinteCsgEJb, {from: accounts[3]});
		await LayerxxfrzAT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxxfrzAT.addStakePayment.call({from: accounts[0]});
		const boolIUzS7ME = await LayerxxfrzAT.transferFrom.call(addressaIGv6k2, addresshLbRjZy, uintBfXumPD, {from: accounts[2]});

		await expect(LayerxxfrzAT.withdraw.call(uinteCsgEJb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressefiEivP = accounts[5]
		const LayerxAwzQKc6 = await Layerx.new(addressefiEivP, {from: accounts[1]});
		const uintaeosCBg = BigInt("412")
		const uint8eqd4z = BigInt("1317")
		const uintAAb0EIt = await LayerxAwzQKc6.totalSupply.call({from: accounts[2]});
		const uintKl8hWJ4 = await LayerxAwzQKc6.lock.call(uintaeosCBg, {from: accounts[2]});
		const uintCyjRgEL = await LayerxAwzQKc6.getStakesNum.call({from: accounts[4]});
		const uintvwngFw3 = await LayerxAwzQKc6.exist.call(uint8eqd4z, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxAwzQKc6.addStakePayment.call({from: accounts[3]});

		assert.equal(uintAAb0EIt, BigInt("40000000000000000000000"))
		await expect(LayerxAwzQKc6.lock.call(uintaeosCBg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqa9oXmR = accounts[1]
		const LayerxHVeqcM2 = await Layerx.new(addressqa9oXmR, {from: accounts[4]});
		const boolebnN0xu = false
		const uintAxIo4rY = BigInt("1943")
		const boolENvYfr5 = true
		await LayerxHVeqcM2.addStakePayment.call({from: accounts[3]});
		const boolJI1PfDi = await LayerxHVeqcM2.setIsPaused.call(boolebnN0xu, {from: accounts[3]});
		const uintcfNGxV7 = await LayerxHVeqcM2.getStakesNum.call({from: accounts[1]});
		await LayerxHVeqcM2.paused.call({from: accounts[4]});
		const uintjpbzoI = await LayerxHVeqcM2.lock.call(uintAxIo4rY, {from: accounts[3]});
		const boolLWylVaP = await LayerxHVeqcM2.setIsPaused.call(boolENvYfr5, {from: accounts[4]});

		await expect(LayerxHVeqcM2.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZntVzJM = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addressZntVzJM, {from: accounts[2]});
		const addressxVDcUcF = accounts[2]
		const addressTkBqqRf = accounts[2]
		const uintICFnwee = BigInt("1458")
		const addressCdPHdEQ = accounts[1]
		const addresst3SisOO = accounts[2]
		const addressCpgR5iI = accounts[2]
		const uintd9Jk8al = await LayerxYkK3vok.allowance.call(addressTkBqqRf, addressxVDcUcF, {from: accounts[1]});
		const booll3eKJnV = await LayerxYkK3vok.transferFrom.call(addresst3SisOO, addressCdPHdEQ, uintICFnwee, {from: "0x0000000000000000000000000000000000000001"});
		const uints2Z8AE1 = await LayerxYkK3vok.balanceOf.call(addressCpgR5iI, {from: accounts[2]});
		await LayerxYkK3vok.unlock.call({from: accounts[5]});

		assert.equal(uintd9Jk8al, BigInt("0"))
		await expect(LayerxYkK3vok.transferFrom.call(addresst3SisOO, addressCdPHdEQ, uintICFnwee, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHrxDYi8 = accounts[1]
		const LayerxNhmkBwm = await Layerx.new(addressHrxDYi8, {from: accounts[1]});
		const uintJnGnQFT = await LayerxNhmkBwm.getStakesNum.call({from: accounts[3]});

		assert.equal(uintJnGnQFT, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addressNQgUFO8 = accounts[4]
		const LayerxLiqxMU = await Layerx.new(addressNQgUFO8, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxLiqxMU.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxLiqxMU.unlock.call({from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressc95xwHB = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addressc95xwHB, {from: accounts[2]});
		const addressHLHJj22 = accounts[1]
		const byteFmhXFnP = "0x0e020f051f1c031c1c0115131501"
		const uintsZpZRoy = BigInt("154")
		const addressDFWK8RO = accounts[3]
		const uintcifWxwX = BigInt("536")
		const uints2Z8AE1 = await LayerxYkK3vok.balanceOf.call(addressHLHJj22, {from: accounts[2]});
		const boolDQCPbuq = await LayerxYkK3vok.approveAndCall.call(addressDFWK8RO, uintsZpZRoy, byteFmhXFnP, {from: accounts[5]});
		await LayerxYkK3vok.unlock.call({from: accounts[5]});
		const uintygvp4v = await LayerxYkK3vok.withdraw.call(uintcifWxwX, {from: accounts[1]});

		assert.equal(uints2Z8AE1, BigInt("0"))
		await expect(LayerxYkK3vok.approveAndCall.call(addressDFWK8RO, uintsZpZRoy, byteFmhXFnP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNDAmR5q = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addressNDAmR5q, {from: accounts[2]});
		const addressMf40Yud = accounts[1]
		const addresslW1A0tB = accounts[1]
		const addressYUBwA96 = accounts[0]
		const addressxsqTN07 = await LayerxYkK3vok.transferOwnership.call(addressMf40Yud, {from: accounts[3]});
		const uints2Z8AE1 = await LayerxYkK3vok.balanceOf.call(addresslW1A0tB, {from: accounts[2]});
		const addressixURL2B = await LayerxYkK3vok.setNewStakeCreator.call(addressYUBwA96, {from: accounts[1]});

		assert.equal(uints2Z8AE1, BigInt("0"))
		await expect(LayerxYkK3vok.setNewStakeCreator.call(addressYUBwA96, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressB0X39YC = accounts[0]
		const LayerxKQfawyN = await Layerx.new(addressB0X39YC, {from: accounts[4]});
		const addressyVZ03Xy = accounts[1]
		const uintcG930dx = BigInt("658")
		const uintxiJDz0W = BigInt("97")
		const addressczGQi53 = accounts[1]
		const bytel6ZloAS = "0x05040e190520121f0f0b18031f05"
		const uintcmKbnvm = BigInt("1869")
		const addresseoquTNm = accounts[4]
		const uintTJpV9BD = await LayerxKQfawyN.balanceOf.call(addressyVZ03Xy, {from: accounts[5]});
		const uint256IH4zWkc = await LayerxKQfawyN.burn.call(uintcG930dx, {from: accounts[0]});
		const boolTBlvUP7 = await LayerxKQfawyN.transfer.call(addressczGQi53, uintxiJDz0W, {from: accounts[0]});
		const boolNg824b0 = await LayerxKQfawyN.approveAndCall.call(addresseoquTNm, uintcmKbnvm, bytel6ZloAS, {from: accounts[0]});

		assert.equal(boolTBlvUP7, true)
		assert.equal(uintTJpV9BD, BigInt("0"))
		await expect(LayerxKQfawyN.approveAndCall.call(addresseoquTNm, uintcmKbnvm, bytel6ZloAS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIj1NMmO = accounts[0]
		const LayerxVCNQqrn = await Layerx.new(addressIj1NMmO, {from: accounts[3]});
		const addressFI0rnNa = "0x0000000000000000000000000000000000000001"
		const uintPd830ca = BigInt("1737")
		const addresszA4QkeG = accounts[3]
		const uintVTV55tW = BigInt("192")
		const addressXc08ONV = await LayerxVCNQqrn.setNewStakeCreator.call(addressFI0rnNa, {from: accounts[0]});
		const uintUtk3Oea = await LayerxVCNQqrn.totalSupply.call({from: accounts[0]});
		const booli4WbuNC = await LayerxVCNQqrn.approve.call(addresszA4QkeG, uintPd830ca, {from: accounts[2]});
		await LayerxVCNQqrn.addStakePayment.call({from: accounts[3]});
		const uintRQUyFXH = await LayerxVCNQqrn.exist.call(uintVTV55tW, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxVCNQqrn.paused.call({from: accounts[2]});

		assert.equal(booli4WbuNC, true)
		assert.equal(uintUtk3Oea, BigInt("40000000000000000000000"))
		await expect(LayerxVCNQqrn.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressC6Je62 = accounts[0]
		const LayerxVCNQqrn = await Layerx.new(addressC6Je62, {from: accounts[3]});
		const addressccvZNhn = "0x0000000000000000000000000000000000000000"
		const uintUpdrePA = BigInt("1737")
		const addressXTsmGwe = accounts[5]
		const uintS1C2Wwe = BigInt("192")
		const addressXc08ONV = await LayerxVCNQqrn.setNewStakeCreator.call(addressccvZNhn, {from: accounts[0]});
		const uintUtk3Oea = await LayerxVCNQqrn.totalSupply.call({from: accounts[0]});
		const booli4WbuNC = await LayerxVCNQqrn.approve.call(addressXTsmGwe, uintUpdrePA, {from: accounts[2]});
		await LayerxVCNQqrn.addStakePayment.call({from: accounts[3]});
		const uintRQUyFXH = await LayerxVCNQqrn.exist.call(uintS1C2Wwe, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxVCNQqrn.paused.call({from: accounts[2]});

		await expect(LayerxVCNQqrn.setNewStakeCreator.call(addressccvZNhn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressC0cTGj = accounts[3]
		const LayerxMtZOdbJ = await Layerx.new(addressC0cTGj, {from: accounts[5]});
		const uintYVqF3cT = BigInt("1111")
		const addressRlcMqpm = accounts[2]
		await LayerxMtZOdbJ.addStakePayment.call({from: accounts[3]});
		await LayerxMtZOdbJ.paused.call({from: accounts[1]});
		const bool73vWGz = await LayerxMtZOdbJ.approve.call(addressRlcMqpm, uintYVqF3cT, {from: accounts[3]});
		await LayerxMtZOdbJ.addStakePayment.call({from: accounts[3]});

		await expect(LayerxMtZOdbJ.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmqEU1hw = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addressmqEU1hw, {from: accounts[2]});
		const boolOzEUU13 = true
		const uinthvnGcN = BigInt("138")
		const addressgl7ceTg = accounts[0]
		const boolp9BxZ9P = await LayerxYkK3vok.setIsPaused.call(boolOzEUU13, {from: accounts[3]});
		const uintVciafZk = await LayerxYkK3vok.totalSupply.call({from: accounts[1]});
		const booldcDaeGf = await LayerxYkK3vok.transfer.call(addressgl7ceTg, uinthvnGcN, {from: accounts[4]});
		await LayerxYkK3vok.unlock.call({from: accounts[5]});
		await LayerxYkK3vok.unlock.call({from: accounts[1]});

		assert.equal(uintVciafZk, BigInt("40000000000000000000000"))
		await expect(LayerxYkK3vok.transfer.call(addressgl7ceTg, uinthvnGcN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskKk3Bv = accounts[3]
		const LayerxYkK3vok = await Layerx.new(addresskKk3Bv, {from: accounts[2]});
		const uintB0u2jxv = BigInt("0")
		const uintCwtasGg = await LayerxYkK3vok.lock.call(uintB0u2jxv, {from: accounts[1]});

		await expect(LayerxYkK3vok.lock.call(uintB0u2jxv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})