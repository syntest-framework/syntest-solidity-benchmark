const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresszS5nR9U = accounts[2]
		const addresscK885qe = accounts[0]
		const QuickTokenJTDJHe = await QuickToken.new(addresszS5nR9U, addresscK885qe, {from: accounts[0]});
		const uintKCev63S = BigInt("638")
		const addressmNLivsn = accounts[0]
		const uintaGg1Iud = BigInt("445")
		const addressEa4AkUI = accounts[5]
//		const addressVt9c4WN = await QuickTokenJTDJHe.mint.call(addressmNLivsn, uintKCev63S, {from: accounts[3]});
//		const boolARBnZh = await QuickTokenJTDJHe.approve.call(addressEa4AkUI, uintaGg1Iud, {from: accounts[1]});

		await expect(QuickTokenJTDJHe.mint.call(addressmNLivsn, uintKCev63S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressdNEk2vh = accounts[2]
		const addressaT19gr0 = accounts[3]
		const QuickTokenEzimb0z = await QuickToken.new(addressdNEk2vh, addressaT19gr0, {from: accounts[2]});
		const uintvo6S33s = BigInt("42")
		const addresshjBvuD1 = accounts[4]
		const uintgnV7qwG = BigInt("1456")
		const addresssmmDxit = accounts[3]
		const addressyBftqbK = "0x0000000000000000000000000000000000000001"
		const address44iu4B = accounts[3]
		const addressTMtpSky = accounts[1]
		const addressDBcAypI = accounts[4]
		const booltaR4uHB = await QuickTokenEzimb0z.approve.call(addresshjBvuD1, uintvo6S33s, {from: accounts[3]});
		const addressPlWOk7o = await QuickTokenEzimb0z.mint.call(addresssmmDxit, uintgnV7qwG, {from: accounts[3]});
		const uintqt78eJ = await QuickTokenEzimb0z.balanceOf.call(addressyBftqbK, {from: accounts[3]});
		const uinthMziTYF = await QuickTokenEzimb0z.allowance.call(addressTMtpSky, address44iu4B, {from: accounts[4]});
		const uintHjvMcff = await QuickTokenEzimb0z.balanceOf.call(addressDBcAypI, {from: accounts[2]});

		assert.equal(booltaR4uHB, true)
		assert.equal(uintHjvMcff, BigInt("0"))
		assert.equal(uinthMziTYF, BigInt("0"))
		assert.equal(uintqt78eJ, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressPkFch5n = accounts[2]
		const addresstvXuGua = accounts[4]
		const QuickTokensCswMix = await QuickToken.new(addressPkFch5n, addresstvXuGua, {from: accounts[1]});
		const addressKvELZA = accounts[1]
		const addressBu5ovxu = accounts[0]
		const uintWYSyi2 = BigInt("440")
		const address335M08 = accounts[0]
		const uintVmGijP = BigInt("193")
		const addressbpQbesR = accounts[2]
		const addressSQHwQeq = accounts[3]
		const addressIwLICh = accounts[4]
		const uintPrRNGP = await QuickTokensCswMix.allowance.call(addressBu5ovxu, addressKvELZA, {from: "0x0000000000000000000000000000000000000001"});
		const boolz3vI5Fc = await QuickTokensCswMix.approve.call(address335M08, uintWYSyi2, {from: accounts[1]});
		const boolfl8cXoh = await QuickTokensCswMix.transfer.call(addressbpQbesR, uintVmGijP, {from: accounts[2]});
		const uintWQZeo5w = await QuickTokensCswMix.allowance.call(addressIwLICh, addressSQHwQeq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfl8cXoh, true)
		assert.equal(boolz3vI5Fc, true)
		assert.equal(uintPrRNGP, BigInt("0"))
		assert.equal(uintWQZeo5w, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressPljGho = accounts[4]
		const addressn6b605B = accounts[3]
		const QuickTokennyTC6kO = await QuickToken.new(addressPljGho, addressn6b605B, {from: accounts[0]});
		const addressnIIZWRj = accounts[3]
		const uintsUZZZ7w = BigInt("443")
		const addressPxV1lhK = accounts[3]
		const uint3RgorC = BigInt("464")
		const addressHe3dZQI = accounts[2]
		const addresspssUka8 = accounts[3]
		const uintgxBWd8s = BigInt("685")
		const addressw7L1Xe = accounts[3]
		const addresswZ5jA0m = accounts[4]
//		const addressxwWXgMT = await QuickTokennyTC6kO.setMinter.call(addressnIIZWRj, {from: accounts[2]});
//		const addresskFgTY6 = await QuickTokennyTC6kO.mint.call(addressPxV1lhK, uintsUZZZ7w, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNNAjJa = await QuickTokennyTC6kO.transfer.call(addressHe3dZQI, uint3RgorC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressR6Yje9l = await QuickTokennyTC6kO.setMinter.call(addresspssUka8, {from: accounts[0]});
//		const boolNWXxGco = await QuickTokennyTC6kO.approve.call(addressw7L1Xe, uintgxBWd8s, {from: accounts[4]});
//		const addressd3AsJI5 = await QuickTokennyTC6kO.setMinter.call(addresswZ5jA0m, {from: accounts[4]});

		await expect(QuickTokennyTC6kO.setMinter.call(addressnIIZWRj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressXOlSGyy = accounts[0]
		const addresssVBJgO = accounts[0]
		const QuickTokenFuKtSOr = await QuickToken.new(addressXOlSGyy, addresssVBJgO, {from: "0x0000000000000000000000000000000000000001"});
		const uintkKSvoGC = BigInt("54")
		const addressNTvcZHt = accounts[3]
		const uintI9O6qS4 = BigInt("1501")
		const addressnJgtj4 = accounts[2]
		const addressopZZY1c = accounts[3]
		const uinttIvaE1F = BigInt("1493")
		const addressWJ5D1bv = accounts[2]
		const boolXvWovcu = await QuickTokenFuKtSOr.transfer.call(addressNTvcZHt, uintkKSvoGC, {from: accounts[3]});
		const boolw0POcIl = await QuickTokenFuKtSOr.transferFrom.call(addressopZZY1c, addressnJgtj4, uintI9O6qS4, {from: accounts[4]});
		const addressKY8uLcQ = await QuickTokenFuKtSOr.mint.call(addressWJ5D1bv, uinttIvaE1F, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressxvh2UOO = accounts[2]
		const addressfkLW0w = accounts[2]
		const QuickTokengyexSc7 = await QuickToken.new(addressxvh2UOO, addressfkLW0w, {from: accounts[2]});
		const uintfWKRZJV = BigInt("1781")
		const addressHVjx190 = accounts[0]
		const uintoUHqDF7 = BigInt("1675")
		const addresseW6WnTG = "0x0000000000000000000000000000000000000001"
		const uintSp2SczE = BigInt("717")
		const addressxrm7oA = accounts[4]
		const addressTUkIrOn = accounts[2]
		const uintaLmUycW = BigInt("1360")
		const addressuDjcJgN = accounts[1]
//		const boolzHygA9 = await QuickTokengyexSc7.transfer.call(addressHVjx190, uintfWKRZJV, {from: accounts[5]});
//		const boolgMKhE87 = await QuickTokengyexSc7.approve.call(addresseW6WnTG, uintoUHqDF7, {from: accounts[1]});
//		const boolcAPviJf = await QuickTokengyexSc7.transferFrom.call(addressTUkIrOn, addressxrm7oA, uintSp2SczE, {from: accounts[2]});
//		const boolP4xNx8 = await QuickTokengyexSc7.approve.call(addressuDjcJgN, uintaLmUycW, {from: accounts[3]});

		await expect(QuickTokengyexSc7.transfer.call(addressHVjx190, uintfWKRZJV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressLaUFDKq = accounts[3]
		const addressMmoQI6M = accounts[1]
		const QuickToken4cAAJQ = await QuickToken.new(addressLaUFDKq, addressMmoQI6M, {from: accounts[0]});
		const uintibyoqm = BigInt("524")
		const addresssCD3jeX = accounts[0]
		const addressXH1tfFr = accounts[2]
		const uintEGKj6A7 = BigInt("1480")
		const addressgZsi8ZC = accounts[3]
		const uintWipY7FW = BigInt("1868")
		const address8vP0ql = accounts[0]
		const addressrDDWldk = accounts[1]
		const addressVLa0bhE = accounts[0]
		const addressVCgseFb = accounts[2]
//		const boolVIaDZlg = await QuickToken4cAAJQ.transferFrom.call(addressXH1tfFr, addresssCD3jeX, uintibyoqm, {from: accounts[2]});
//		const addressyCvWPgo = await QuickToken4cAAJQ.mint.call(addressgZsi8ZC, uintEGKj6A7, {from: accounts[3]});
//		const boolbDFofv = await QuickToken4cAAJQ.approve.call(address8vP0ql, uintWipY7FW, {from: accounts[3]});
//		const uintdQSzW7 = await QuickToken4cAAJQ.allowance.call(addressVLa0bhE, addressrDDWldk, {from: accounts[1]});
//		const uintGIaoCCs = await QuickToken4cAAJQ.balanceOf.call(addressVCgseFb, {from: accounts[3]});

		await expect(QuickToken4cAAJQ.transferFrom.call(addressXH1tfFr, addresssCD3jeX, uintibyoqm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAPGxydU = accounts[2]
		const addressIbM5hYy = accounts[4]
		const QuickTokensCswMix = await QuickToken.new(addressAPGxydU, addressIbM5hYy, {from: accounts[1]});
		const addressJ1Y70a = accounts[1]
		const addressQow8GKc = accounts[0]
		const uintlwWoucn = BigInt("909")
		const addressV8PCTcr = accounts[3]
		const addressmxAw2BH = accounts[4]
		const uintcuK4q36 = BigInt("440")
		const addresskIVlGhy = accounts[0]
		const addressOaUJsiS = accounts[3]
		const addressezJzKOb = accounts[4]
		const uintPrRNGP = await QuickTokensCswMix.allowance.call(addressQow8GKc, addressJ1Y70a, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXb8MhmT = await QuickTokensCswMix.transferFrom.call(addressmxAw2BH, addressV8PCTcr, uintlwWoucn, {from: accounts[0]});
//		const boolz3vI5Fc = await QuickTokensCswMix.approve.call(addresskIVlGhy, uintcuK4q36, {from: accounts[1]});
//		const uintWQZeo5w = await QuickTokensCswMix.allowance.call(addressezJzKOb, addressOaUJsiS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintPrRNGP, BigInt("0"))
		await expect(QuickTokensCswMix.transferFrom.call(addressmxAw2BH, addressV8PCTcr, uintlwWoucn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressGW61eF = accounts[2]
		const addressert7mls = accounts[3]
		const QuickTokenEzimb0z = await QuickToken.new(addressGW61eF, addressert7mls, {from: accounts[2]});
		const uinteuAwlzc = BigInt("20")
		const addressaxx5xuU = accounts[4]
		const uintliqJSX4 = BigInt("1456")
		const addresssu8ejZx = accounts[3]
		const addressRBGD9hi = "0x00000000000000000000000000000000000000-1"
		const addressSFeic4W = accounts[5]
		const booltaR4uHB = await QuickTokenEzimb0z.approve.call(addressaxx5xuU, uinteuAwlzc, {from: accounts[3]});
		const addressPlWOk7o = await QuickTokenEzimb0z.mint.call(addresssu8ejZx, uintliqJSX4, {from: accounts[3]});
//		const uintqt78eJ = await QuickTokenEzimb0z.balanceOf.call(addressRBGD9hi, {from: accounts[3]});
//		const uintHjvMcff = await QuickTokenEzimb0z.balanceOf.call(addressSFeic4W, {from: accounts[2]});

		assert.equal(booltaR4uHB, true)
		await expect(QuickTokenEzimb0z.balanceOf.call(addressRBGD9hi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})