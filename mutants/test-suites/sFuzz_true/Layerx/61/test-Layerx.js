const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressCXRp9RA = accounts[1]
		const LayerxuEdwbqK = await Layerx.new(addressCXRp9RA, {from: accounts[2]});
		const addressXlJDTdb = accounts[4]
		const addressJkc7ZHA = "0x0000000000000000000000000000000000000001"
		const uintLdO0Ggb = BigInt("1820")
		const addressx6f0nlx = accounts[2]
		const addressgdR7HfA = accounts[2]
//		const addressy4cdvI = await LayerxuEdwbqK.transferOwnership.call(addressXlJDTdb, {from: accounts[2]});
//		await LayerxuEdwbqK.addStakePayment.call({from: accounts[3]});
//		const addressd4f6aDt = await LayerxuEdwbqK.setNewStakeCreator.call(addressJkc7ZHA, {from: accounts[4]});
//		await LayerxuEdwbqK.f.call({from: accounts[0]});
//		const booltnSb38O = await LayerxuEdwbqK.transferFrom.call(addressgdR7HfA, addressx6f0nlx, uintLdO0Ggb, {from: accounts[4]});

		await expect(LayerxuEdwbqK.transferOwnership.call(addressXlJDTdb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressS81U1M = "0x0000000000000000000000000000000000000001"
		const LayerxIXz9TFr = await Layerx.new(addressS81U1M, {from: accounts[3]});
		const bytetFJBQG = "0x13171a0b10000613031b1219140d070a12040614070b190b1e0109"
		const uinttLJrIEY = BigInt("2006")
		const addressRgphnpS = accounts[1]
		const addressVsB2oxN = accounts[2]
		const addressI7p6eRr = "0x0000000000000000000000000000000000000001"
		const addressxZVXTLB = accounts[1]
		const addressZKtQHf3 = accounts[0]
		const addressEc0zFpR = accounts[0]
//		const booll39Qt2i = await LayerxIXz9TFr.approveAndCall.call(addressRgphnpS, uinttLJrIEY, bytetFJBQG, {from: accounts[1]});
//		const addressh6AxOqA = await LayerxIXz9TFr.transferOwnership.call(addressVsB2oxN, {from: accounts[3]});
//		const uintyUwIyXY = await LayerxIXz9TFr.allowance.call(addressxZVXTLB, addressI7p6eRr, {from: accounts[4]});
//		const uintK66nzMi = await LayerxIXz9TFr.allowance.call(addressEc0zFpR, addressZKtQHf3, {from: accounts[3]});

		await expect(LayerxIXz9TFr.approveAndCall.call(addressRgphnpS, uinttLJrIEY, bytetFJBQG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGMH1sHG = accounts[3]
		const LayerxBxgM989 = await Layerx.new(addressGMH1sHG, {from: accounts[1]});
		const uintJccVSC1 = BigInt("352")
		const uintYdvKsOh = BigInt("684")
//		const uintdUGxitk = await LayerxBxgM989.exist.call(uintJccVSC1, {from: accounts[5]});
//		const uintBUjNKco = await LayerxBxgM989.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintYnEiAJK = await LayerxBxgM989.totalSupply.call({from: accounts[4]});
//		const uintAYvwXKI = await LayerxBxgM989.withdraw.call(uintYdvKsOh, {from: accounts[3]});
//		await LayerxBxgM989.unlock.call({from: accounts[2]});
//		const uint3ACpTz = await LayerxBxgM989.totalSupply.call({from: accounts[0]});

		await expect(LayerxBxgM989.exist.call(uintJccVSC1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressaUt3kEf = accounts[4]
		const LayerxoiDjdEU = await Layerx.new(addressaUt3kEf, {from: accounts[0]});
		const uintvYnybuY = BigInt("1168")
		const uintUJ7qAer = BigInt("195")
//		const uinteOK4NS = await LayerxoiDjdEU.lock.call(uintvYnybuY, {from: accounts[2]});
//		const uint256p55RPl1 = await LayerxoiDjdEU.burn.call(uintUJ7qAer, {from: accounts[3]});

		await expect(LayerxoiDjdEU.lock.call(uintvYnybuY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqSOhWjI = accounts[2]
		const LayerxHuegGHp = await Layerx.new(addressqSOhWjI, {from: accounts[5]});
		const addressn9m8wM = accounts[3]
		const uintOcqTUd6 = BigInt("1490")
		const addresslagnyO2 = accounts[5]
		const uintBQ9KNc4 = await LayerxHuegGHp.balanceOf.call(addressn9m8wM, {from: accounts[4]});
		const boolgn7e1kp = await LayerxHuegGHp.approve.call(addresslagnyO2, uintOcqTUd6, {from: accounts[5]});

		assert.equal(boolgn7e1kp, true)
		assert.equal(uintBQ9KNc4, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressEqoOESj = accounts[2]
		const LayerxXy4A4bC = await Layerx.new(addressEqoOESj, {from: accounts[0]});
		const uintxqFMZL = BigInt("433")
		const addressrYHnqMb = accounts[5]
		const addressTcyxg2m = accounts[1]
		const addressE6QLape = accounts[0]
		const addressUxNrBBY = accounts[0]
//		const booln6Fai5o = await LayerxXy4A4bC.transferFrom.call(addressTcyxg2m, addressrYHnqMb, uintxqFMZL, {from: accounts[3]});
//		const addresslA421uX = await LayerxXy4A4bC.setNewStakeCreator.call(addressE6QLape, {from: accounts[5]});
//		const addressd0Xq4Tk = await LayerxXy4A4bC.setNewStakeCreator.call(addressUxNrBBY, {from: accounts[1]});

		await expect(LayerxXy4A4bC.transferFrom.call(addressTcyxg2m, addressrYHnqMb, uintxqFMZL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZoBPS5F = accounts[3]
		const LayerxYhLOh0u = await Layerx.new(addressZoBPS5F, {from: "0x0000000000000000000000000000000000000001"});
		const addressPUf4TQP = accounts[5]
		const addressoWTui0k = "0x0000000000000000000000000000000000000001"
		const byteY4TFEOn = "0x04070b18121407111213191f1d191b091f041b130a02"
		const uintrYGAK1j = BigInt("592")
		const addressTb7q3gY = accounts[5]
		const addressUOBp6CY = await LayerxYhLOh0u.setNewStakeCreator.call(addressPUf4TQP, {from: accounts[3]});
		const addressH5ObVB = await LayerxYhLOh0u.setNewStakeCreator.call(addressoWTui0k, {from: accounts[0]});
		const uintnKYpACg = await LayerxYhLOh0u.totalSupply.call({from: accounts[0]});
		const boolU4ewsnw = await LayerxYhLOh0u.approveAndCall.call(addressTb7q3gY, uintrYGAK1j, byteY4TFEOn, {from: accounts[5]});
		const uintuvll99T = await LayerxYhLOh0u.getStakesNum.call({from: accounts[4]});
		const uintyR3bq0 = await LayerxYhLOh0u.getStakesNum.call({from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addresswbrlTT = accounts[2]
		const LayerxXy4A4bC = await Layerx.new(addresswbrlTT, {from: accounts[0]});
		const addressmHDlI4 = accounts[1]
		const uintYjO7NJ9 = BigInt("433")
		const addresswABsw9U = accounts[5]
		const addressabnzduC = accounts[1]
		const addressPTVySR = accounts[0]
		const addressIOZ8lT5 = accounts[1]
		const addressJZwspzP = await LayerxXy4A4bC.transferOwnership.call(addressmHDlI4, {from: accounts[2]});
//		const booln6Fai5o = await LayerxXy4A4bC.transferFrom.call(addressabnzduC, addresswABsw9U, uintYjO7NJ9, {from: accounts[3]});
//		const addresslA421uX = await LayerxXy4A4bC.setNewStakeCreator.call(addressPTVySR, {from: accounts[5]});
//		const addressd0Xq4Tk = await LayerxXy4A4bC.setNewStakeCreator.call(addressIOZ8lT5, {from: accounts[1]});

		await expect(LayerxXy4A4bC.transferFrom.call(addressabnzduC, addresswABsw9U, uintYjO7NJ9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAUL9VXA = accounts[2]
		const LayerxXy4A4bC = await Layerx.new(addressAUL9VXA, {from: accounts[0]});
		const uintRynXcpE = BigInt("433")
		const addressYvhY2CV = accounts[5]
		const addressK6Hn4dn = accounts[2]
		const addressovoh0Ex = accounts[5]
		const addresshLBmHzV = "0x0000000000000000000000000000000000000001"
		const addressrSt9by6 = accounts[0]
		const uintJuH9NYI = BigInt("1228")
		const addressmKNLSsm = accounts[0]
		const uintBg8HVU0 = BigInt("1148")
		const addressP36lgXG = accounts[1]
//		const booln6Fai5o = await LayerxXy4A4bC.transferFrom.call(addressK6Hn4dn, addressYvhY2CV, uintRynXcpE, {from: accounts[3]});
//		const uintAzht51Q = await LayerxXy4A4bC.allowance.call(addresshLBmHzV, addressovoh0Ex, {from: accounts[4]});
//		const addresslA421uX = await LayerxXy4A4bC.setNewStakeCreator.call(addressrSt9by6, {from: accounts[5]});
//		const uintGWTtmg = await LayerxXy4A4bC.lock.call(uintJuH9NYI, {from: accounts[2]});
//		const addressd0Xq4Tk = await LayerxXy4A4bC.setNewStakeCreator.call(addressmKNLSsm, {from: accounts[1]});
//		const boolYozjx1m = await LayerxXy4A4bC.approve.call(addressP36lgXG, uintBg8HVU0, {from: accounts[3]});

		await expect(LayerxXy4A4bC.transferFrom.call(addressK6Hn4dn, addressYvhY2CV, uintRynXcpE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnFgu7ee = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressnFgu7ee, {from: accounts[3]});
		const addresskwJOhvq = accounts[2]
		const addressErpEa8W = accounts[0]
		const uints7ZlY6K = BigInt("1442")
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addressErpEa8W, addresskwJOhvq, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		const uint256M8wbob0 = await LayerxbmZb3M4.burn.call(uints7ZlY6K, {from: accounts[0]});
//		const uintd7CsOSE = await LayerxbmZb3M4.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDz0bYk = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressDz0bYk, {from: accounts[3]});
		const addressr9Em7Pp = accounts[2]
		const address25vxNJ = accounts[0]
		const addressOX8eSKl = accounts[0]
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(address25vxNJ, addressr9Em7Pp, {from: accounts[0]});
		const addressnbTJuQa = await LayerxbmZb3M4.transferOwnership.call(addressOX8eSKl, {from: accounts[3]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[0]});
//		const uintd7CsOSE = await LayerxbmZb3M4.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUu6FQAE = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressUu6FQAE, {from: accounts[3]});
		const addressLXHGFBZ = accounts[3]
		const addressJ4u5jY = accounts[0]
		const uintLZFJKUB = BigInt("315")
		const addressl78npp = accounts[4]
		const uintn9ihb66 = BigInt("1442")
		const uintOEbdIhn = BigInt("831")
		const addressQWkBYmh = accounts[1]
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addressJ4u5jY, addressLXHGFBZ, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		const boolVhh5Kb = await LayerxbmZb3M4.transfer.call(addressl78npp, uintLZFJKUB, {from: accounts[2]});
//		const uint256M8wbob0 = await LayerxbmZb3M4.burn.call(uintn9ihb66, {from: accounts[0]});
//		const boolmnPr9s0 = await LayerxbmZb3M4.approve.call(addressQWkBYmh, uintOEbdIhn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressznRInPz = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressznRInPz, {from: accounts[3]});
		const addressUS6Sa0H = accounts[2]
		const addressm8a1rXx = accounts[0]
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addressm8a1rXx, addressUS6Sa0H, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		const uintd7CsOSE = await LayerxbmZb3M4.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressPTREHuH = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressPTREHuH, {from: accounts[3]});
		const boolhETZ7B = true
		const addressagPCBBU = accounts[2]
		const addressBSBfSia = accounts[0]
		const boolDLcpGN = await LayerxbmZb3M4.setIsPaused.call(boolhETZ7B, {from: accounts[3]});
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addressBSBfSia, addressagPCBBU, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		const uintd7CsOSE = await LayerxbmZb3M4.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVrjSClD = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressVrjSClD, {from: accounts[3]});
		const addressAW30p1M = accounts[2]
		const addressqkeWuE = accounts[0]
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addressqkeWuE, addressAW30p1M, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});
//		await LayerxbmZb3M4.unlock.call({from: accounts[0]});
//		const uintd7CsOSE = await LayerxbmZb3M4.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressutiXv5E = accounts[4]
		const LayerxoiDjdEU = await Layerx.new(addressutiXv5E, {from: accounts[0]});
		const uintYTamGfg = BigInt("192")
		const uintAtu2DH = await LayerxoiDjdEU.totalSupply.call({from: accounts[2]});
		const uintUQiAmMP = await LayerxoiDjdEU.totalSupply.call({from: accounts[0]});
//		const uint256p55RPl1 = await LayerxoiDjdEU.burn.call(uintYTamGfg, {from: accounts[3]});

		assert.equal(uintAtu2DH, BigInt("40000000000000000000000"))
		assert.equal(uintUQiAmMP, BigInt("40000000000000000000000"))
		await expect(LayerxoiDjdEU.burn.call(uintYTamGfg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressFz3Dael = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressFz3Dael, {from: accounts[3]});
		const addressiq59VAX = accounts[3]
		const addresszzzvo0k = accounts[0]
		const uinthndAb3h = BigInt("1084")
		const uintxFJeev3 = await LayerxbmZb3M4.allowance.call(addresszzzvo0k, addressiq59VAX, {from: accounts[0]});
//		const uinttJJNGxk = await LayerxbmZb3M4.withdraw.call(uinthndAb3h, {from: accounts[3]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});

		assert.equal(uintxFJeev3, BigInt("0"))
		await expect(LayerxbmZb3M4.withdraw.call(uinthndAb3h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressu1aHwJY = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressu1aHwJY, {from: accounts[3]});
		const uintAjwibwa = BigInt("458")
		const addressROYLGA = accounts[3]
//		await LayerxbmZb3M4.f.call({from: accounts[2]});
//		const boolwbPDIvm = await LayerxbmZb3M4.transfer.call(addressROYLGA, uintAjwibwa, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});

		await expect(LayerxbmZb3M4.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVVZNEkW = accounts[4]
		const LayerxoiDjdEU = await Layerx.new(addressVVZNEkW, {from: accounts[0]});
		const addressbc0xZuw = accounts[4]
		const uintLP2UdK9 = BigInt("942")
		const addressJQjMEl = await LayerxoiDjdEU.setNewStakeCreator.call(addressbc0xZuw, {from: accounts[4]});
//		const uint256p55RPl1 = await LayerxoiDjdEU.burn.call(uintLP2UdK9, {from: accounts[3]});

		await expect(LayerxoiDjdEU.burn.call(uintLP2UdK9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfxwZMHG = accounts[3]
		const LayerxbmZb3M4 = await Layerx.new(addressfxwZMHG, {from: accounts[3]});
		const uintLsnc8R = BigInt("1776")
		const uintJlytN8K = BigInt("370")
		const addressq1Snu0a = "0x0000000000000000000000000000000000000001"
		const uint256QDCLwyR = await LayerxbmZb3M4.burn.call(uintLsnc8R, {from: accounts[3]});
		const booluntjH4N = await LayerxbmZb3M4.approve.call(addressq1Snu0a, uintJlytN8K, {from: accounts[0]});
//		await LayerxbmZb3M4.addStakePayment.call({from: accounts[3]});

		assert.equal(booluntjH4N, true)
		await expect(LayerxbmZb3M4.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})