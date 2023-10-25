const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressn3oWvHJ = accounts[3]
		const addressLwnruQp = accounts[3]
		const SpiritCoinF26UU9R = await SpiritCoin.new(addressn3oWvHJ, addressLwnruQp, {from: accounts[3]});
		const uintq2bgJY6 = BigInt("1904")
		const addresselSgbou = accounts[2]
		const addressvlAb48 = accounts[5]
		const addressUQXUySg = accounts[5]
		const uintavzyaKu = BigInt("1052")
		const addressR9j8dJ = accounts[3]
		const addressQwrPHdM = await SpiritCoinF26UU9R.mint.call(addresselSgbou, uintq2bgJY6, {from: accounts[4]});
		const uintZtfwGTT = await SpiritCoinF26UU9R.allowance.call(addressUQXUySg, addressvlAb48, {from: "0x0000000000000000000000000000000000000001"});
		const addressakBRjVa = await SpiritCoinF26UU9R.mint.call(addressR9j8dJ, uintavzyaKu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SpiritCoinF26UU9R.mint.call(addresselSgbou, uintq2bgJY6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressVgY92As = accounts[1]
		const addressPXQQJY = accounts[2]
		const SpiritCoinpjGZMY = await SpiritCoin.new(addressVgY92As, addressPXQQJY, {from: accounts[3]});
		const uintIgWmXqk = BigInt("1102")
		const addressCg71CnB = accounts[2]
		const addressRTLUnwH = accounts[2]
		const addressqK1IXmg = accounts[4]
		const addressN6u6qc = accounts[1]
		const addressAIsedPH = "0x0000000000000000000000000000000000000001"
		const boolCNOmMK6 = await SpiritCoinpjGZMY.approve.call(addressCg71CnB, uintIgWmXqk, {from: accounts[1]});
		const uintP88QMzw = await SpiritCoinpjGZMY.balanceOf.call(addressRTLUnwH, {from: accounts[4]});
		const uintsUWE68v = await SpiritCoinpjGZMY.allowance.call(addressN6u6qc, addressqK1IXmg, {from: accounts[4]});
		const addressZvmNtei = await SpiritCoinpjGZMY.setMinter.call(addressAIsedPH, {from: accounts[4]});

		assert.equal(boolCNOmMK6, true)
		assert.equal(uintP88QMzw, BigInt("0"))
		assert.equal(uintsUWE68v, BigInt("0"))
		await expect(SpiritCoinpjGZMY.setMinter.call(addressAIsedPH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresseQXSzhe = accounts[5]
		const addressVO06sp3 = "0x0000000000000000000000000000000000000001"
		const SpiritCoinrGmKwU2 = await SpiritCoin.new(addresseQXSzhe, addressVO06sp3, {from: "0x0000000000000000000000000000000000000001"});
		const uinturAuSK8 = BigInt("27")
		const addressvBdgKpZ = accounts[3]
		const addresscjxHnB2 = accounts[4]
		const addressRnDXJuV = accounts[2]
		const uintH5TNu5S = BigInt("913")
		const addressV6NKJSL = accounts[4]
		const addressNZIGpYX = accounts[0]
		const uintqKmJedc = BigInt("1556")
		const addressnhSzue5 = accounts[2]
		const addressVxerwg8 = accounts[2]
		const addressmM9SOYr = accounts[2]
		const boolvcS9bw4 = await SpiritCoinrGmKwU2.transfer.call(addressvBdgKpZ, uinturAuSK8, {from: accounts[2]});
		const uintERUcWhr = await SpiritCoinrGmKwU2.allowance.call(addressRnDXJuV, addresscjxHnB2, {from: accounts[3]});
		const boolECoLta7 = await SpiritCoinrGmKwU2.transfer.call(addressV6NKJSL, uintH5TNu5S, {from: accounts[3]});
		const uintwYAf3cu = await SpiritCoinrGmKwU2.balanceOf.call(addressNZIGpYX, {from: accounts[0]});
		const boolumJh3L7 = await SpiritCoinrGmKwU2.transfer.call(addressnhSzue5, uintqKmJedc, {from: accounts[2]});
		const uintjjGJSD2 = await SpiritCoinrGmKwU2.allowance.call(addressmM9SOYr, addressVxerwg8, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addresswUbBetv = accounts[5]
		const addressaQeaRLZ = accounts[5]
		const SpiritCoindDNgDcf = await SpiritCoin.new(addresswUbBetv, addressaQeaRLZ, {from: accounts[4]});
		const uintPW4gQis = BigInt("1568")
		const addressrpLRwpQ = accounts[2]
		const uintb8FPjdZ = BigInt("1224")
		const addressRlxshZC = accounts[3]
		const uintFoVo0a = BigInt("1731")
		const addressfdTSDX = accounts[2]
		const uintatfFjTV = BigInt("890")
		const addressxPfQBuI = accounts[1]
		const addressfMdUTy2 = accounts[2]
		const addressHR5077 = accounts[4]
		const boolNR19WMc = await SpiritCoindDNgDcf.transfer.call(addressrpLRwpQ, uintPW4gQis, {from: accounts[2]});
		const addresszJVTXqc = await SpiritCoindDNgDcf.mint.call(addressRlxshZC, uintb8FPjdZ, {from: accounts[5]});
		const boolvKrBsV6 = await SpiritCoindDNgDcf.transfer.call(addressfdTSDX, uintFoVo0a, {from: accounts[5]});
		const addressUvGKrag = await SpiritCoindDNgDcf.mint.call(addressxPfQBuI, uintatfFjTV, {from: accounts[5]});
		const uintFE2ZtUh = await SpiritCoindDNgDcf.balanceOf.call(addressfMdUTy2, {from: accounts[0]});
		const uintQMrqfn4 = await SpiritCoindDNgDcf.balanceOf.call(addressHR5077, {from: accounts[5]});

		await expect(SpiritCoindDNgDcf.transfer.call(addressrpLRwpQ, uintPW4gQis, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresscRVRvHe = accounts[4]
		const addressjFlBYe = accounts[2]
		const SpiritCoinkNwcGj6 = await SpiritCoin.new(addresscRVRvHe, addressjFlBYe, {from: accounts[3]});
		const uintkU0fyXh = BigInt("1165")
		const addressKVMi4Vm = accounts[0]
		const addresseRJHYa6 = accounts[2]
		const uintUhnVjrM = BigInt("1969")
		const addresstVefjVm = accounts[4]
		const addressme8n3qm = accounts[2]
		const boolyrUHRnE = await SpiritCoinkNwcGj6.transferFrom.call(addresseRJHYa6, addressKVMi4Vm, uintkU0fyXh, {from: accounts[2]});
		const boolZaDesFf = await SpiritCoinkNwcGj6.approve.call(addresstVefjVm, uintUhnVjrM, {from: accounts[5]});
		const addressYCebpcb = await SpiritCoinkNwcGj6.setMinter.call(addressme8n3qm, {from: accounts[2]});

		await expect(SpiritCoinkNwcGj6.transferFrom.call(addresseRJHYa6, addressKVMi4Vm, uintkU0fyXh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressdkmYEPd = accounts[3]
		const addresscgyM7HG = accounts[0]
		const SpiritCoinjtO8jAX = await SpiritCoin.new(addressdkmYEPd, addresscgyM7HG, {from: accounts[0]});
		const addressJ40uIcY = accounts[0]
		const addressc4uAPGn = accounts[3]
		const uintlTF8XXH = BigInt("628")
		const addressV3VfZYV = accounts[5]
		const uintOeIXgpC = BigInt("1146")
		const addresscV8TnCn = accounts[0]
		const addressccTxa20 = accounts[2]
		const address6rIuOJ = "0x0000000000000000000000000000000000000001"
		const uintx5AcloZ = BigInt("89")
		const addressdH3amO = accounts[1]
		const uintyOLYF05 = await SpiritCoinjtO8jAX.allowance.call(addressc4uAPGn, addressJ40uIcY, {from: accounts[1]});
		const booltiAvjkb = await SpiritCoinjtO8jAX.approve.call(addressV3VfZYV, uintlTF8XXH, {from: accounts[4]});
		const boolxQRO6hQ = await SpiritCoinjtO8jAX.transferFrom.call(addressccTxa20, addresscV8TnCn, uintOeIXgpC, {from: accounts[0]});
		const uintmlqjSHy = await SpiritCoinjtO8jAX.balanceOf.call(address6rIuOJ, {from: accounts[3]});
		const boolnfQ2hg = await SpiritCoinjtO8jAX.transfer.call(addressdH3amO, uintx5AcloZ, {from: accounts[3]});

		assert.equal(booltiAvjkb, true)
		assert.equal(uintyOLYF05, BigInt("0"))
		await expect(SpiritCoinjtO8jAX.transferFrom.call(addressccTxa20, addresscV8TnCn, uintOeIXgpC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresslPz09l6 = accounts[3]
		const addresspVcq4N = accounts[0]
		const SpiritCoinjtO8jAX = await SpiritCoin.new(addresslPz09l6, addresspVcq4N, {from: accounts[0]});
		const addressyLp1U5X = accounts[1]
		const addresshutJp98 = accounts[3]
		const uintcBrX7Xv = BigInt("120")
		const addressYbb4rdY = accounts[2]
		const addressa2fxfF = accounts[3]
		const addressf2uyO9M = accounts[2]
		const uintG7RBRDO = BigInt("603")
		const addressdC5yMH = accounts[5]
		const uintLln3Wo5 = BigInt("1897")
		const addresstJscRY0 = accounts[4]
		const addressqU8sd6 = "0x0000000000000000000000000000000000000001"
		const uintyOLYF05 = await SpiritCoinjtO8jAX.allowance.call(addresshutJp98, addressyLp1U5X, {from: accounts[1]});
		const boolXRTUMA4 = await SpiritCoinjtO8jAX.approve.call(addressYbb4rdY, uintcBrX7Xv, {from: accounts[2]});
		const uintgBoPA9B = await SpiritCoinjtO8jAX.allowance.call(addressf2uyO9M, addressa2fxfF, {from: accounts[0]});
		const booltiAvjkb = await SpiritCoinjtO8jAX.approve.call(addressdC5yMH, uintG7RBRDO, {from: accounts[4]});
		const addressSjV2EZO = await SpiritCoinjtO8jAX.mint.call(addresstJscRY0, uintLln3Wo5, {from: accounts[0]});
		const uintmlqjSHy = await SpiritCoinjtO8jAX.balanceOf.call(addressqU8sd6, {from: accounts[3]});

		assert.equal(boolXRTUMA4, true)
		assert.equal(booltiAvjkb, true)
		assert.equal(uintgBoPA9B, BigInt("0"))
		assert.equal(uintmlqjSHy, BigInt("0"))
		assert.equal(uintyOLYF05, BigInt("0"))
	});
})