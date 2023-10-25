const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addresscD5O6DL = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addresscD5O6DL, {from: accounts[2]});
		const uintFhXqG3p = BigInt("105")
		const addressfnQyF3y = accounts[4]
		const uintnoGgg6I = BigInt("309")
		const addressTGL9gw = accounts[3]
//		const addressOimaJvy = await ControllerjuKagb0.withdraw.call(addressfnQyF3y, uintFhXqG3p, {from: accounts[3]});
//		const uintRIEToG = await ControllerjuKagb0.setSplit.call(uintnoGgg6I, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addressTGL9gw, {from: accounts[2]});

		await expect(ControllerjuKagb0.withdraw.call(addressfnQyF3y, uintFhXqG3p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTTiYpy = accounts[1]
		const ControllerPcggvm = await Controller.new(addressTTiYpy, {from: accounts[4]});
		const addressCDCxeR7 = accounts[1]
		const uintjlBN7hF = BigInt("574")
		const addressCc2QWVZ = accounts[3]
		const uintZNpt6GT = BigInt("1090")
		const addressuiUYsBQ = accounts[4]
		const addressj25g8g = accounts[5]
		const addressf9UHwmU = await ControllerPcggvm.setGovernance.call(addressCDCxeR7, {from: accounts[4]});
//		const addressaf9AqQH = await ControllerPcggvm.inCaseTokensGetStuck.call(addressCc2QWVZ, uintjlBN7hF, {from: accounts[4]});
//		const addressDXzo6X2 = await ControllerPcggvm.yearn.call(addressj25g8g, addressuiUYsBQ, uintZNpt6GT, {from: accounts[2]});

		await expect(ControllerPcggvm.inCaseTokensGetStuck.call(addressCc2QWVZ, uintjlBN7hF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNJ8X8Ka = accounts[5]
		const ControllerLsfYk5 = await Controller.new(addressNJ8X8Ka, {from: accounts[2]});
		const addressVvh5euf = accounts[1]
		const addresst0kgTkD = accounts[2]
		const addressS6hTCrE = accounts[3]
		const uintxmOfqOA = BigInt("118")
		const addressZqtS0Re = accounts[3]
//		const addressjI0xLPL = await ControllerLsfYk5.setOneSplit.call(addressVvh5euf, {from: accounts[5]});
//		const addresshZA4wp8 = await ControllerLsfYk5.setStrategist.call(addresst0kgTkD, {from: accounts[2]});
//		const uintVWvNkYL = await ControllerLsfYk5.balanceOf.call(addressS6hTCrE, {from: accounts[2]});
//		const addressQ5fa3Su = await ControllerLsfYk5.withdraw.call(addressZqtS0Re, uintxmOfqOA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerLsfYk5.setOneSplit.call(addressVvh5euf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszspGUlZ = accounts[3]
		const Controllerm7CJZ7n = await Controller.new(addresszspGUlZ, {from: accounts[4]});
		const addressi1Q45Yf = accounts[3]
		const addressJRlbt9K = accounts[0]
		const addressFW6x3LY = accounts[5]
		const addressdVDELas = accounts[0]
		const addressxNQPQqH = accounts[4]
		const addressVfi3aPF = accounts[0]
		const addressDrW64qh = accounts[1]
		const uintGoyHuqz = BigInt("1003")
		const addresszDXRQsy = accounts[2]
		const addressuG1H1Ka = accounts[3]
		const addressWKKmklq = "0x0000000000000000000000000000000000000001"
		const addresss3sfnLk = accounts[2]
		const addressNBbYAuj = "0x0000000000000000000000000000000000000001"
		const uintiHSgkP7 = BigInt("1280")
		const addressqacm7ow = accounts[2]
		const addressBy4ySUe = accounts[1]
//		const addressHMSFuRT = await Controllerm7CJZ7n.setVault.call(addressJRlbt9K, addressi1Q45Yf, {from: accounts[0]});
//		const addressd0v3Cgo = await Controllerm7CJZ7n.setConverter.call(addressxNQPQqH, addressdVDELas, addressFW6x3LY, {from: accounts[3]});
//		const addressWOv2zyP = await Controllerm7CJZ7n.setStrategy.call(addressDrW64qh, addressVfi3aPF, {from: accounts[3]});
//		const addressuU5DcTF = await Controllerm7CJZ7n.yearn.call(addressuG1H1Ka, addresszDXRQsy, uintGoyHuqz, {from: accounts[4]});
//		const addressgNrUOKf = await Controllerm7CJZ7n.setConverter.call(addressNBbYAuj, addresss3sfnLk, addressWKKmklq, {from: accounts[0]});
//		const addressxbXo9WP = await Controllerm7CJZ7n.yearn.call(addressBy4ySUe, addressqacm7ow, uintiHSgkP7, {from: accounts[3]});

		await expect(Controllerm7CJZ7n.setVault.call(addressJRlbt9K, addressi1Q45Yf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnIiAQV6 = accounts[0]
		const ControlleromLu5o = await Controller.new(addressnIiAQV6, {from: accounts[2]});
		const addressdRmrXX = accounts[2]
		const addressaa94L5 = accounts[4]
		const addressNgdFCfo = accounts[1]
		const addressycOZ37p = "0x0000000000000000000000000000000000000001"
		const addresstSU5pZ = await ControlleromLu5o.setVault.call(addressaa94L5, addressdRmrXX, {from: accounts[2]});
//		const addressJWxisNG = await ControlleromLu5o.withdrawAll.call(addressNgdFCfo, {from: accounts[4]});
//		const addressCvFuDQI = await ControlleromLu5o.setRewards.call(addressycOZ37p, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleromLu5o.withdrawAll.call(addressNgdFCfo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMc2514P = accounts[4]
		const ControllerIB6Btt = await Controller.new(addressMc2514P, {from: accounts[5]});
		const uintHeFLxpE = BigInt("1747")
		const addressQNc4hiF = accounts[5]
		const uintBKKixfh = BigInt("6")
		const addressunw2rQJ = accounts[2]
		const uintwSaHr9v = BigInt("3")
		const addressvMKVmV5 = accounts[2]
		const addressjTBmw7V = accounts[3]
		const addressX5jZUUq = accounts[0]
		const addressebgDZG2 = accounts[0]
		const addressgbTaDjV = accounts[5]
//		const addressybFVrgi = await ControllerIB6Btt.earn.call(addressQNc4hiF, uintHeFLxpE, {from: accounts[3]});
//		const addressqdsj256 = await ControllerIB6Btt.earn.call(addressunw2rQJ, uintBKKixfh, {from: accounts[0]});
//		const addresswyY8TSq = await ControllerIB6Btt.earn.call(addressvMKVmV5, uintwSaHr9v, {from: accounts[5]});
//		const addressunbLAIs = await ControllerIB6Btt.setStrategist.call(addressjTBmw7V, {from: "0x0000000000000000000000000000000000000001"});
//		const addressl0i65d3 = await ControllerIB6Btt.approveStrategy.call(addressebgDZG2, addressX5jZUUq, {from: accounts[1]});
//		const addressZsOr7Cr = await ControllerIB6Btt.setGovernance.call(addressgbTaDjV, {from: accounts[2]});

		await expect(ControllerIB6Btt.earn.call(addressQNc4hiF, uintHeFLxpE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAV1tH6 = accounts[0]
		const ControlleromLu5o = await Controller.new(addressAV1tH6, {from: accounts[2]});
		const addressYp4bjBu = accounts[3]
		const addressgkJdWo5 = accounts[5]
		const addressU4DZ4G = accounts[2]
		const addressinbVSBi = accounts[4]
		const addressY6Dp5V6 = accounts[2]
		const addressQGrrojU = "0x0000000000000000000000000000000000000001"
		const uintGDvi6au = BigInt("235")
		const addressP9c9fzT = accounts[4]
//		const addresskndkc1u = await ControlleromLu5o.inCaseStrategyTokenGetStuck.call(addressgkJdWo5, addressYp4bjBu, {from: accounts[0]});
//		const addresstSU5pZ = await ControlleromLu5o.setVault.call(addressinbVSBi, addressU4DZ4G, {from: accounts[2]});
//		const addressJWxisNG = await ControlleromLu5o.withdrawAll.call(addressY6Dp5V6, {from: accounts[4]});
//		const addressCvFuDQI = await ControlleromLu5o.setRewards.call(addressQGrrojU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressK7AqSOt = await ControlleromLu5o.inCaseTokensGetStuck.call(addressP9c9fzT, uintGDvi6au, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleromLu5o.inCaseStrategyTokenGetStuck.call(addressgkJdWo5, addressYp4bjBu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseoyHkDF = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addresseoyHkDF, {from: accounts[2]});
		const uintxrquYx = BigInt("1530")
		const addressNJEpZbQ = accounts[4]
		const addresswHb65Y = accounts[0]
		const uintfjWKvNR = BigInt("1732")
		const addressNe3PEBp = "0x0000000000000000000000000000000000000001"
		const addressx8H9sl9 = accounts[0]
		const uintvobsXB = BigInt("105")
		const addressyWskYO6 = accounts[4]
		const uintSxDNMTN = BigInt("306")
		const addressIyyauSH = accounts[4]
//		const addressZUPSy0d = await ControllerjuKagb0.yearn.call(addresswHb65Y, addressNJEpZbQ, uintxrquYx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressr7jyola = await ControllerjuKagb0.yearn.call(addressx8H9sl9, addressNe3PEBp, uintfjWKvNR, {from: accounts[2]});
//		const addressOimaJvy = await ControllerjuKagb0.withdraw.call(addressyWskYO6, uintvobsXB, {from: accounts[3]});
//		const uintRIEToG = await ControllerjuKagb0.setSplit.call(uintSxDNMTN, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addressIyyauSH, {from: accounts[2]});

		await expect(ControllerjuKagb0.yearn.call(addresswHb65Y, addressNJEpZbQ, uintxrquYx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressC6I4Rln = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addressC6I4Rln, {from: accounts[2]});
		const addressxrXlURc = accounts[4]
		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addressxrXlURc, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressP3Igwjh = accounts[0]
		const ControlleromLu5o = await Controller.new(addressP3Igwjh, {from: accounts[2]});
		const addressQHkatIY = accounts[2]
		const addressdVuEEjO = accounts[4]
		const addresshxuDB7f = accounts[4]
		const addressdSPsBgE = accounts[2]
		const addressMatqkxc = "0x0000000000000000000000000000000000000001"
		const addresstSU5pZ = await ControlleromLu5o.setVault.call(addressdVuEEjO, addressQHkatIY, {from: accounts[2]});
//		const uintpIeA9w = await ControlleromLu5o.balanceOf.call(addresshxuDB7f, {from: accounts[4]});
//		const addressJWxisNG = await ControlleromLu5o.withdrawAll.call(addressdSPsBgE, {from: accounts[4]});
//		const addressCvFuDQI = await ControlleromLu5o.setRewards.call(addressMatqkxc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleromLu5o.balanceOf.call(addresshxuDB7f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVWFUtrQ = accounts[4]
		const ControllerYydgISb = await Controller.new(addressVWFUtrQ, {from: accounts[4]});
		const uintvuQh2OL = BigInt("1565")
		const uintmptD5hl = BigInt("1385")
		const addressqrBi8xf = accounts[4]
		const addressIfxuzgW = "0x0000000000000000000000000000000000000001"
		const addressXIcEdkS = accounts[0]
		const addressZfGdIbW = "0x0000000000000000000000000000000000000002"
		const uintPTPict6 = await ControllerYydgISb.setSplit.call(uintvuQh2OL, {from: accounts[4]});
//		const uintBH5w9L0 = await ControllerYydgISb.getExpectedReturn.call(addressIfxuzgW, addressqrBi8xf, uintmptD5hl, {from: accounts[1]});
//		const addressSo0jJYF = await ControllerYydgISb.setOneSplit.call(addressXIcEdkS, {from: accounts[5]});
//		const addressKiwuj6y = await ControllerYydgISb.setRewards.call(addressZfGdIbW, {from: accounts[3]});

		await expect(ControllerYydgISb.getExpectedReturn.call(addressIfxuzgW, addressqrBi8xf, uintmptD5hl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZTFgiUU = accounts[2]
		const Controllers7KA7OJ = await Controller.new(addressZTFgiUU, {from: accounts[2]});
		const addressQOuOcIo = accounts[3]
		const addressRKQDmU1 = accounts[4]
		const addressRCtQqG6 = accounts[5]
//		const addressEUfqKTy = await Controllers7KA7OJ.setStrategist.call(addressQOuOcIo, {from: accounts[4]});
//		const addressJftENTF = await Controllers7KA7OJ.setVault.call(addressRCtQqG6, addressRKQDmU1, {from: accounts[0]});

		await expect(Controllers7KA7OJ.setStrategist.call(addressQOuOcIo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresss76MkNA = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addresss76MkNA, {from: accounts[2]});
		const addressyUfeqy = accounts[5]
		const addressPNtxjO3 = accounts[4]
		const addressi24Hksx = accounts[3]
		const addresswXDxEoi = accounts[0]
		const uintHoXFlpc = BigInt("817")
		const addressa1c5Vd = accounts[1]
		const addressHwyj3jZ = accounts[2]
		const addressRgA082u = accounts[2]
		const addressxK5YW8R = "0x0000000000000000000000000000000000000001"
		const addressZbJyc5 = accounts[4]
		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addressyUfeqy, {from: accounts[2]});
		const addressR318kEV = await ControllerjuKagb0.setConverter.call(addresswXDxEoi, addressi24Hksx, addressPNtxjO3, {from: accounts[2]});
//		const addressvNH0TrO = await ControllerjuKagb0.yearn.call(addressHwyj3jZ, addressa1c5Vd, uintHoXFlpc, {from: accounts[5]});
//		const addressU02A1cd = await ControllerjuKagb0.setStrategy.call(addressxK5YW8R, addressRgA082u, {from: accounts[2]});
//		const address8F0JKe = await ControllerjuKagb0.setOneSplit.call(addressZbJyc5, {from: accounts[1]});

		await expect(ControllerjuKagb0.yearn.call(addressHwyj3jZ, addressa1c5Vd, uintHoXFlpc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszao4OMb = accounts[0]
		const ControllerMZLJ5A = await Controller.new(addresszao4OMb, {from: accounts[0]});
		const addresslcJYG6 = accounts[4]
		const addressqoQPK6M = accounts[2]
		const addresszddQSjJ = accounts[1]
		const addressuu3BfEu = accounts[4]
		const addressc6z6f2T = accounts[3]
		const addresseeYKK8 = accounts[4]
		const addressXqc1t85 = accounts[4]
		const addresszsiAaCk = accounts[1]
		const addressz8pmzgc = accounts[3]
		const uintJimrBWl = BigInt("1948")
		const addressk0HP13u = accounts[1]
//		const addressGINkQfo = await ControllerMZLJ5A.setStrategy.call(addressqoQPK6M, addresslcJYG6, {from: accounts[3]});
//		const addressdtoDmv = await ControllerMZLJ5A.setConverter.call(addressc6z6f2T, addressuu3BfEu, addresszddQSjJ, {from: accounts[2]});
//		const addressrWVlAO6 = await ControllerMZLJ5A.inCaseStrategyTokenGetStuck.call(addressXqc1t85, addresseeYKK8, {from: accounts[5]});
//		const addressBu56BU9 = await ControllerMZLJ5A.approveStrategy.call(addressz8pmzgc, addresszsiAaCk, {from: accounts[1]});
//		const addressN1G02tN = await ControllerMZLJ5A.earn.call(addressk0HP13u, uintJimrBWl, {from: accounts[2]});

		await expect(ControllerMZLJ5A.setStrategy.call(addressqoQPK6M, addresslcJYG6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAauFdRl = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addressAauFdRl, {from: accounts[2]});
		const addressIIttK4I = accounts[0]
		const uintx3Mv6qn = BigInt("1730")
		const addresspfnwcLT = accounts[5]
//		const addressFoXdlo = await ControllerjuKagb0.setRewards.call(addressIIttK4I, {from: accounts[0]});
//		const uintdQLt3eh = await ControllerjuKagb0.setSplit.call(uintx3Mv6qn, {from: accounts[4]});
//		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addresspfnwcLT, {from: accounts[2]});

		await expect(ControllerjuKagb0.setRewards.call(addressIIttK4I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressumI54Yy = accounts[2]
		const Controllers7KA7OJ = await Controller.new(addressumI54Yy, {from: accounts[2]});
		const addressn9gtuDg = accounts[4]
		const addressgYkbKN = accounts[3]
		const addressBned1xP = accounts[3]
//		const addressSV0jPL5 = await Controllers7KA7OJ.approveStrategy.call(addressgYkbKN, addressn9gtuDg, {from: accounts[1]});
//		const addressEUfqKTy = await Controllers7KA7OJ.setStrategist.call(addressBned1xP, {from: accounts[4]});

		await expect(Controllers7KA7OJ.approveStrategy.call(addressgYkbKN, addressn9gtuDg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressF6jD7r = accounts[0]
		const ControllerfHUMSvo = await Controller.new(addressF6jD7r, {from: "0x0000000000000000000000000000000000000001"});
		const addressbZzN93 = accounts[5]
		const addresszfBINzx = "0x0000000000000000000000000000000000000001"
		const addressJeHzUTt = accounts[1]
		const addressm7Q25RK = accounts[2]
		const addressBVxI1DY = "0x0000000000000000000000000000000000000001"
		const addressm5IMjSs = accounts[4]
		const address5wmuYd = accounts[2]
		const addressRhmX2gg = await ControllerfHUMSvo.withdrawAll.call(addressbZzN93, {from: accounts[0]});
		const addressiWds2wW = await ControllerfHUMSvo.setConverter.call(addressm7Q25RK, addressJeHzUTt, addresszfBINzx, {from: accounts[4]});
		const addresszV9bsp = await ControllerfHUMSvo.setStrategist.call(addressBVxI1DY, {from: accounts[1]});
		const addressyHYj2f = await ControllerfHUMSvo.approveStrategy.call(address5wmuYd, addressm5IMjSs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressrKA8x6d = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addressrKA8x6d, {from: accounts[2]});
		const addressnSSNcyA = accounts[3]
		const addressnnsJCHL = accounts[0]
		const uintVlX7o2t = BigInt("105")
		const addressSt2BIb = accounts[4]
		const addressNb8TRc = accounts[3]
//		const addressAL9hIm3 = await ControllerjuKagb0.setStrategy.call(addressnnsJCHL, addressnSSNcyA, {from: accounts[2]});
//		const addressOimaJvy = await ControllerjuKagb0.withdraw.call(addressSt2BIb, uintVlX7o2t, {from: accounts[3]});
//		const addressoqAue7q = await ControllerjuKagb0.setOneSplit.call(addressNb8TRc, {from: accounts[2]});

		await expect(ControllerjuKagb0.setStrategy.call(addressnnsJCHL, addressnSSNcyA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIGZAo3p = accounts[4]
		const ControllerKOcijyA = await Controller.new(addressIGZAo3p, {from: accounts[0]});
		const addressYqVErJ8 = accounts[5]
		const addressJRMoQvS = accounts[2]
		const addresszMVLbCI = "0x0000000000000000000000000000000000000001"
		const addressFOSRV73 = accounts[4]
//		const addressyqaYhU9 = await ControllerKOcijyA.revokeStrategy.call(addressJRMoQvS, addressYqVErJ8, {from: accounts[3]});
//		const addressWZWNvi = await ControllerKOcijyA.approveStrategy.call(addressFOSRV73, addresszMVLbCI, {from: accounts[1]});

		await expect(ControllerKOcijyA.revokeStrategy.call(addressJRMoQvS, addressYqVErJ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIfo3DO0 = accounts[0]
		const ControlleromLu5o = await Controller.new(addressIfo3DO0, {from: accounts[2]});
		const addressbFwWElE = accounts[1]
		const addressZ082pxi = accounts[2]
		const addressAWgoATv = await ControlleromLu5o.setStrategist.call(addressbFwWElE, {from: accounts[2]});
//		const addressJWxisNG = await ControlleromLu5o.withdrawAll.call(addressZ082pxi, {from: accounts[4]});

		await expect(ControlleromLu5o.withdrawAll.call(addressZ082pxi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressACiyAJp = accounts[0]
		const ControlleromLu5o = await Controller.new(addressACiyAJp, {from: accounts[2]});
		const uintYbWIwsl = BigInt("896")
		const addressYPTX8O = accounts[4]
		const addresseQXHd0m = accounts[3]
		const uintxp21YkH = BigInt("1710")
		const addressTwc4Q9b = accounts[4]
		const addressSAENTt = accounts[0]
		const addressnQCBta6 = accounts[2]
//		const addressKMN6D7w = await ControlleromLu5o.yearn.call(addresseQXHd0m, addressYPTX8O, uintYbWIwsl, {from: accounts[2]});
//		const addressbnXTnb = await ControlleromLu5o.earn.call(addressTwc4Q9b, uintxp21YkH, {from: accounts[4]});
//		const addressF5uB2Ms = await ControlleromLu5o.inCaseStrategyTokenGetStuck.call(addressnQCBta6, addressSAENTt, {from: accounts[3]});

		await expect(ControlleromLu5o.yearn.call(addresseQXHd0m, addressYPTX8O, uintYbWIwsl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressetzxTVN = accounts[0]
		const ControlleromLu5o = await Controller.new(addressetzxTVN, {from: accounts[2]});
		const addresspALJPtq = accounts[0]
		const addressHHi4qwB = accounts[1]
		const addressyp7GA9g = accounts[2]
//		const addressl9b8QvU = await ControlleromLu5o.inCaseStrategyTokenGetStuck.call(addressHHi4qwB, addresspALJPtq, {from: accounts[2]});
//		const addressJWxisNG = await ControlleromLu5o.withdrawAll.call(addressyp7GA9g, {from: accounts[4]});

		await expect(ControlleromLu5o.inCaseStrategyTokenGetStuck.call(addressHHi4qwB, addresspALJPtq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWOgCB47 = accounts[2]
		const Controllers7KA7OJ = await Controller.new(addressWOgCB47, {from: accounts[2]});
		const addresscOehCqu = accounts[3]
		const addressbIpEOWm = accounts[4]
		const addressPoeD0Db = accounts[4]
//		const addressXsTVPKC = await Controllers7KA7OJ.withdrawAll.call(addresscOehCqu, {from: accounts[2]});
//		const addressSV0jPL5 = await Controllers7KA7OJ.approveStrategy.call(addressPoeD0Db, addressbIpEOWm, {from: accounts[1]});

		await expect(Controllers7KA7OJ.withdrawAll.call(addresscOehCqu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgtHGnpY = accounts[4]
		const ControllerjuKagb0 = await Controller.new(addressgtHGnpY, {from: accounts[2]});
		const addresstRNbvPN = accounts[4]
		const addressN6pDOb = accounts[0]
		const addressWBPLXY = accounts[1]
		const addressiSLbReA = accounts[4]
		const uintTiZrGC7 = BigInt("105")
		const addressjEtFMs6 = accounts[5]
		const addressPR6gCsy = await ControllerjuKagb0.revokeStrategy.call(addressN6pDOb, addresstRNbvPN, {from: accounts[2]});
//		const addressuLj7R6C = await ControllerjuKagb0.setVault.call(addressiSLbReA, addressWBPLXY, {from: accounts[0]});
//		const addressOimaJvy = await ControllerjuKagb0.withdraw.call(addressjEtFMs6, uintTiZrGC7, {from: accounts[3]});

		await expect(ControllerjuKagb0.setVault.call(addressiSLbReA, addressWBPLXY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEgmRb4J = accounts[0]
		const ControlleromLu5o = await Controller.new(addressEgmRb4J, {from: accounts[2]});
		const addressblUBTNM = accounts[1]
		const addressOkzmDyO = await ControlleromLu5o.setRewards.call(addressblUBTNM, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressM2xVtX = accounts[2]
		const Controllers7KA7OJ = await Controller.new(addressM2xVtX, {from: accounts[2]});
		const addressqfVAqt = accounts[3]
		const addressfk0NzhV = accounts[3]
		const addressqh4p42e = accounts[5]
		const addressePMded5 = accounts[4]
		const addressHOoyBsT = await Controllers7KA7OJ.approveStrategy.call(addressfk0NzhV, addressqfVAqt, {from: accounts[2]});
//		const addressSV0jPL5 = await Controllers7KA7OJ.approveStrategy.call(addressePMded5, addressqh4p42e, {from: accounts[1]});

		await expect(Controllers7KA7OJ.approveStrategy.call(addressePMded5, addressqh4p42e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})