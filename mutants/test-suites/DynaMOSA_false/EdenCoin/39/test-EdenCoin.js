const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinNRgBgkF = await EdenCoin.new({from: accounts[3]});
		const uintVFhH2lR = BigInt("1685")
		const addressdIuNyOI = accounts[1]
		const uintNhIz7R6 = BigInt("1899")
		const addressIywLVJm = accounts[5]
		const uintB7Pw3aI = BigInt("1269")
		const addresspVS4K0X = accounts[1]
		const addressMAV06le = accounts[5]
		const addressXbBQTKo = "0x0000000000000000000000000000000000000001"
		const uintdEdHmNX = BigInt("444")
		const addressz1HkBCt = accounts[4]
//		const boolGVYGDHO = await EdenCoinNRgBgkF.transfer.call(addressdIuNyOI, uintVFhH2lR, {from: accounts[0]});
//		const boolOWV89fG = await EdenCoinNRgBgkF.transfer.call(addressIywLVJm, uintNhIz7R6, {from: accounts[3]});
//		const boolBRDQ119 = await EdenCoinNRgBgkF.increaseApproval.call(addresspVS4K0X, uintB7Pw3aI, {from: accounts[1]});
//		const uint256hKXFr46 = await EdenCoinNRgBgkF.allowance.call(addressXbBQTKo, addressMAV06le, {from: accounts[2]});
//		const boolZ94M0pP = await EdenCoinNRgBgkF.approve.call(addressz1HkBCt, uintdEdHmNX, {from: accounts[3]});

		await expect(EdenCoinNRgBgkF.transfer.call(addressdIuNyOI, uintVFhH2lR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkytV6AD = await EdenCoin.new({from: accounts[2]});
		const uintZWA0OUJ = BigInt("240")
		const addressYisBH7h = accounts[1]
		const addressE2jqade = accounts[3]
		const addressGjXOTyH = accounts[2]
		const uintlt9JnjC = BigInt("1462")
		const addressc4d1gHJ = accounts[3]
		const boolOxZmUW = await EdenCoinkytV6AD.transfer.call(addressYisBH7h, uintZWA0OUJ, {from: accounts[2]});
		const uint256kfzsPZ2 = await EdenCoinkytV6AD.allowance.call(addressGjXOTyH, addressE2jqade, {from: accounts[0]});
		const boolQ67GCij = await EdenCoinkytV6AD.increaseApproval.call(addressc4d1gHJ, uintlt9JnjC, {from: accounts[0]});

		assert.equal(boolOxZmUW, true)
		assert.equal(boolQ67GCij, true)
		assert.equal(uint256kfzsPZ2, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjJzMEyh = await EdenCoin.new({from: accounts[4]});
		const uintnmAAAMU = BigInt("587")
		const addressngHKMYi = accounts[2]
		const uintQEpVwIS = BigInt("228")
		const addressYirBvMP = accounts[1]
		const uintlePcC5Y = BigInt("1589")
		const addressDGt03hI = accounts[5]
		const addressgwnr2mT = "0x0000000000000000000000000000000000000001"
		const addresscFK0RGq = accounts[0]
		const uintXI8nJLD = BigInt("442")
		const addressTDJWYrD = accounts[0]
		const boolQBfj45Y = await EdenCoinjJzMEyh.increaseApproval.call(addressngHKMYi, uintnmAAAMU, {from: accounts[0]});
		const boolEsUrRlF = await EdenCoinjJzMEyh.increaseApproval.call(addressYirBvMP, uintQEpVwIS, {from: accounts[4]});
		const boolfBv3JsV = await EdenCoinjJzMEyh.approve.call(addressDGt03hI, uintlePcC5Y, {from: accounts[4]});
		const uint256XvGXNUZ = await EdenCoinjJzMEyh.allowance.call(addresscFK0RGq, addressgwnr2mT, {from: accounts[0]});
		const boolGzaNqOe = await EdenCoinjJzMEyh.approve.call(addressTDJWYrD, uintXI8nJLD, {from: accounts[5]});

		assert.equal(boolEsUrRlF, true)
		assert.equal(boolGzaNqOe, true)
		assert.equal(boolQBfj45Y, true)
		assert.equal(boolfBv3JsV, true)
		assert.equal(uint256XvGXNUZ, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZOEYnB4 = await EdenCoin.new({from: accounts[3]});
		const uintqOb6Le5 = BigInt("1580")
		const addressHOfyx9 = accounts[2]
		const addresspKnvYKJ = accounts[3]
		const uintYQ4sx7E = BigInt("334")
		const addressOyPa2dK = accounts[3]
//		const boolhWD7Fsp = await EdenCoinZOEYnB4.transferFrom.call(addresspKnvYKJ, addressHOfyx9, uintqOb6Le5, {from: accounts[0]});
//		const boolO92uZFy = await EdenCoinZOEYnB4.transfer.call(addressOyPa2dK, uintYQ4sx7E, {from: accounts[2]});

		await expect(EdenCoinZOEYnB4.transferFrom.call(addresspKnvYKJ, addressHOfyx9, uintqOb6Le5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinsLdlWmy = await EdenCoin.new({from: accounts[0]});
		const uinteEJF7qJ = BigInt("650")
		const addressX5G9Xa = accounts[1]
		const uintzzSFKwe = BigInt("623")
		const addressM9HQ6q = accounts[1]
		const addressb4roaFh = accounts[3]
		const uintDpQueLu = BigInt("766")
		const addresslB9FeN = accounts[3]
		const uint5HSn7D = BigInt("1059")
		const addressOkFjda2 = accounts[0]
		const addresslYUoJTg = accounts[4]
		const uintRcPbXHr = BigInt("117")
		const addresswPNVm3A = accounts[5]
		const boolBb4I5Cx = await EdenCoinsLdlWmy.increaseApproval.call(addressX5G9Xa, uinteEJF7qJ, {from: accounts[2]});
		const boolmycq07R = await EdenCoinsLdlWmy.increaseApproval.call(addressM9HQ6q, uintzzSFKwe, {from: accounts[4]});
		const uint256TJ0upU = await EdenCoinsLdlWmy.balanceOf.call(addressb4roaFh, {from: accounts[1]});
		const boolBKdm7cP = await EdenCoinsLdlWmy.approve.call(addresslB9FeN, uintDpQueLu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfzUezvg = await EdenCoinsLdlWmy.transferFrom.call(addresslYUoJTg, addressOkFjda2, uint5HSn7D, {from: accounts[4]});
//		const boolnVKaOwt = await EdenCoinsLdlWmy.transfer.call(addresswPNVm3A, uintRcPbXHr, {from: accounts[3]});

		assert.equal(boolBKdm7cP, true)
		assert.equal(boolBb4I5Cx, true)
		assert.equal(boolmycq07R, true)
		assert.equal(uint256TJ0upU, BigInt("0"))
		await expect(EdenCoinsLdlWmy.transferFrom.call(addresslYUoJTg, addressOkFjda2, uint5HSn7D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin4pncF9 = await EdenCoin.new({from: accounts[4]});
		const uintKH3wEVF = BigInt("984")
		const addresswgzjnIg = accounts[0]
		const addresso3z5VJC = "0x0000000000000000000000000000000000000001"
		const addresszhxYp8G = accounts[4]
		const uintIfhCpcu = BigInt("269")
		const addressVe90sF = accounts[3]
		const uintQixHmpf = BigInt("1292")
		const addressJihMnR = accounts[5]
		const uintWeNjNUv = BigInt("1916")
		const addressKiYTpw5 = accounts[5]
		const uintJlWLlCt = BigInt("1028")
		const addressa8aDCt9 = accounts[1]
		const uintrHkoHZ = BigInt("1659")
		const addressRJ6JK1x = accounts[5]
		const boolF1hktw = await EdenCoin4pncF9.approve.call(addresswgzjnIg, uintKH3wEVF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rf7yjdK = await EdenCoin4pncF9.allowance.call(addresszhxYp8G, addresso3z5VJC, {from: accounts[0]});
		const boolvqx4IaE = await EdenCoin4pncF9.increaseApproval.call(addressVe90sF, uintIfhCpcu, {from: accounts[1]});
		const boolsYFCasc = await EdenCoin4pncF9.increaseApproval.call(addressJihMnR, uintQixHmpf, {from: accounts[1]});
		const boolBWF9iq8 = await EdenCoin4pncF9.increaseApproval.call(addressKiYTpw5, uintWeNjNUv, {from: accounts[4]});
		const boolwyUtPe1 = await EdenCoin4pncF9.decreaseApproval.call(addressa8aDCt9, uintJlWLlCt, {from: accounts[2]});
		const boolo2YWkb = await EdenCoin4pncF9.approve.call(addressRJ6JK1x, uintrHkoHZ, {from: accounts[4]});

		assert.equal(boolBWF9iq8, true)
		assert.equal(boolF1hktw, true)
		assert.equal(boolo2YWkb, true)
		assert.equal(boolsYFCasc, true)
		assert.equal(boolvqx4IaE, true)
		assert.equal(boolwyUtPe1, true)
		assert.equal(uint256rf7yjdK, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinl7PaOOZ = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHz1xQpD = BigInt("187")
		const addressdAh0AV7 = accounts[1]
		const uintky53FJo = BigInt("1556")
		const addressb8VKJ9 = accounts[4]
		const addressRQSKDkd = accounts[1]
		const uintkL1ycTj = BigInt("1970")
		const addressTwHsXLT = accounts[4]
		const uintO0nNhOb = BigInt("181")
		const addresso58KvXR = accounts[5]
		const addressNRVNqvw = accounts[1]
		const uintLRPP25N = BigInt("762")
		const addressNGpHxDU = accounts[4]
		const boolWNModtt = await EdenCoinl7PaOOZ.approve.call(addressdAh0AV7, uintHz1xQpD, {from: accounts[4]});
		const bool5EojEJ = await EdenCoinl7PaOOZ.transferFrom.call(addressRQSKDkd, addressb8VKJ9, uintky53FJo, {from: accounts[4]});
		const bool7aS8Bp = await EdenCoinl7PaOOZ.approve.call(addressTwHsXLT, uintkL1ycTj, {from: accounts[3]});
		const boolgwE0vaK = await EdenCoinl7PaOOZ.transferFrom.call(addressNRVNqvw, addresso58KvXR, uintO0nNhOb, {from: "0x0000000000000000000000000000000000000001"});
		const boolg1NrmK = await EdenCoinl7PaOOZ.approve.call(addressNGpHxDU, uintLRPP25N, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoin4pncF9 = await EdenCoin.new({from: accounts[4]});
		const uintV9FqPuz = BigInt("984")
		const addressvd3vRAz = accounts[0]
		const addressOi8sYG2 = accounts[4]
		const addressE7RM0xP = accounts[3]
		const addressSeNFYBq = "0x0000000000000000000000000000000000000001"
		const addressGNbyxiS = accounts[6]
		const uintxDZ7PHz = BigInt("1302")
		const addressYkPgEKx = accounts[4]
		const uintFWbJHeY = BigInt("0")
		const addressEjzczx = accounts[6]
		const uintQzJTpai = BigInt("857")
		const addressRNQWCFe = accounts[2]
		const uintvtZY582 = BigInt("1292")
		const addressQKAtqim = accounts[5]
		const uintcBFmi3b = BigInt("248")
		const addressXaSSthR = accounts[0]
		const addressTc2qGtl = accounts[1]
		const uintqqQFUHa = BigInt("1916")
		const addressKpTjMFm = accounts[6]
		const uintOErWMfQ = BigInt("1599")
		const addressU8L8Uf2 = accounts[3]
		const boolF1hktw = await EdenCoin4pncF9.approve.call(addressvd3vRAz, uintV9FqPuz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RxHTzoH = await EdenCoin4pncF9.allowance.call(addressE7RM0xP, addressOi8sYG2, {from: accounts[4]});
		const uint256rf7yjdK = await EdenCoin4pncF9.allowance.call(addressGNbyxiS, addressSeNFYBq, {from: accounts[0]});
		const boolzRCg60A = await EdenCoin4pncF9.approve.call(addressYkPgEKx, uintxDZ7PHz, {from: accounts[5]});
		const boolCWOTZmI = await EdenCoin4pncF9.decreaseApproval.call(addressEjzczx, uintFWbJHeY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolr95VsCB = await EdenCoin4pncF9.transfer.call(addressRNQWCFe, uintQzJTpai, {from: accounts[0]});
//		const boolsYFCasc = await EdenCoin4pncF9.increaseApproval.call(addressQKAtqim, uintvtZY582, {from: accounts[1]});
//		const booloaHz1lo = await EdenCoin4pncF9.decreaseApproval.call(addressXaSSthR, uintcBFmi3b, {from: accounts[1]});
//		const uint256p4lUqAq = await EdenCoin4pncF9.balanceOf.call(addressTc2qGtl, {from: accounts[4]});
//		const boolBWF9iq8 = await EdenCoin4pncF9.increaseApproval.call(addressKpTjMFm, uintqqQFUHa, {from: accounts[4]});
//		const booleDHHQos = await EdenCoin4pncF9.increaseApproval.call(addressU8L8Uf2, uintOErWMfQ, {from: accounts[2]});

		assert.equal(boolCWOTZmI, true)
		assert.equal(boolF1hktw, true)
		assert.equal(boolzRCg60A, true)
		assert.equal(uint256RxHTzoH, BigInt("0"))
		assert.equal(uint256rf7yjdK, BigInt("0"))
		await expect(EdenCoin4pncF9.transfer.call(addressRNQWCFe, uintQzJTpai, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})