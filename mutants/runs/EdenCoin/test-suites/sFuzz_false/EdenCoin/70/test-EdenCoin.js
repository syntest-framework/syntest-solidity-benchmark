const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinU68H6kM = await EdenCoin.new({from: accounts[3]});
		const uintTJllUP5 = BigInt("791")
		const addressJiz6Qhf = accounts[3]
		const uintVdPYNkP = BigInt("13")
		const addressmM1PvLe = accounts[1]
		const addressch2RwjL = accounts[3]
		const addressoScqimJ = accounts[4]
		const boole2Njjte = await EdenCoinU68H6kM.transfer.call(addressJiz6Qhf, uintTJllUP5, {from: accounts[4]});
		const bool2dePUs = await EdenCoinU68H6kM.increaseApproval.call(addressmM1PvLe, uintVdPYNkP, {from: accounts[4]});
		const uint256rPYbVsz = await EdenCoinU68H6kM.allowance.call(addressoScqimJ, addressch2RwjL, {from: accounts[2]});

		await expect(EdenCoinU68H6kM.transfer.call(addressJiz6Qhf, uintTJllUP5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZBct9DS = await EdenCoin.new({from: accounts[3]});
		const addressTHcIaI = accounts[4]
		const addressIZzYOSw = accounts[2]
		const uintr6QMhjg = BigInt("1216")
		const addresszkadxrW = accounts[1]
		const addressm7aRdvR = accounts[1]
		const uintoQZeEn6 = BigInt("1699")
		const addressP51MBdJ = accounts[0]
		const addressRfMlSg = accounts[2]
		const addressnx4Du5L = accounts[1]
		const uint256ibbBlX9 = await EdenCoinZBct9DS.allowance.call(addressIZzYOSw, addressTHcIaI, {from: "0x0000000000000000000000000000000000000001"});
		const bool4HuwAR = await EdenCoinZBct9DS.transferFrom.call(addressm7aRdvR, addresszkadxrW, uintr6QMhjg, {from: accounts[1]});
		const booltqFfwYs = await EdenCoinZBct9DS.decreaseApproval.call(addressP51MBdJ, uintoQZeEn6, {from: accounts[5]});
		const uint256ce6HUfK = await EdenCoinZBct9DS.allowance.call(addressnx4Du5L, addressRfMlSg, {from: accounts[5]});

		assert.equal(uint256ibbBlX9, BigInt("0"))
		await expect(EdenCoinZBct9DS.transferFrom.call(addressm7aRdvR, addresszkadxrW, uintr6QMhjg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKjA59m7 = await EdenCoin.new({from: accounts[0]});
		const uintdxLrty = BigInt("1962")
		const addresssxUGidI = accounts[1]
		const addressh1lKmbw = accounts[0]
		const addresspGB1oQ8 = accounts[0]
		const uintXiyAQYn = BigInt("1267")
		const addresszollvbJ = accounts[2]
		const uinticHpGev = BigInt("1151")
		const addressJodsIj8 = accounts[3]
		const boold7VQ6Vr = await EdenCoinKjA59m7.increaseApproval.call(addresssxUGidI, uintdxLrty, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PkbDOTq = await EdenCoinKjA59m7.allowance.call(addresspGB1oQ8, addressh1lKmbw, {from: accounts[1]});
		const boolLiVQAM = await EdenCoinKjA59m7.approve.call(addresszollvbJ, uintXiyAQYn, {from: accounts[5]});
		const boolfKaBHuW = await EdenCoinKjA59m7.increaseApproval.call(addressJodsIj8, uinticHpGev, {from: accounts[4]});

		assert.equal(boolLiVQAM, true)
		assert.equal(boold7VQ6Vr, true)
		assert.equal(boolfKaBHuW, true)
		assert.equal(uint256PkbDOTq, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkZxnSY = await EdenCoin.new({from: accounts[1]});
		const uintzqCtMc = BigInt("949")
		const addressUJxAy7s = accounts[3]
		const addressxlLnJhs = accounts[4]
		const uintIM0yoO = BigInt("1303")
		const addressbIpcx54 = accounts[2]
		const addressIX1mlXH = accounts[0]
		const uintgglbmTt = BigInt("589")
		const addressk0X9vJs = accounts[3]
		const booloJDblHN = await EdenCoinkZxnSY.decreaseApproval.call(addressUJxAy7s, uintzqCtMc, {from: accounts[0]});
		const uint256AWsPejA = await EdenCoinkZxnSY.balanceOf.call(addressxlLnJhs, {from: accounts[4]});
		const boolxo3t6U = await EdenCoinkZxnSY.transferFrom.call(addressIX1mlXH, addressbIpcx54, uintIM0yoO, {from: accounts[4]});
		const boolhKOeXv = await EdenCoinkZxnSY.transfer.call(addressk0X9vJs, uintgglbmTt, {from: accounts[0]});

		assert.equal(booloJDblHN, true)
		assert.equal(uint256AWsPejA, BigInt("0"))
		await expect(EdenCoinkZxnSY.transferFrom.call(addressIX1mlXH, addressbIpcx54, uintIM0yoO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOLjqXzk = await EdenCoin.new({from: accounts[4]});
		const uintlfYH0V = BigInt("0")
		const address9VzJd1 = accounts[3]
		const addressfOBKtZt = accounts[3]
		const addresshDmFs1r = accounts[0]
		const uintPWTVC03 = BigInt("1323")
		const addressmvQq8YS = accounts[4]
		const boolQ1EwjaA = await EdenCoinOLjqXzk.decreaseApproval.call(address9VzJd1, uintlfYH0V, {from: accounts[0]});
		const uint256x8fjbqE = await EdenCoinOLjqXzk.allowance.call(addresshDmFs1r, addressfOBKtZt, {from: accounts[4]});
		const boolZUs0u92 = await EdenCoinOLjqXzk.approve.call(addressmvQq8YS, uintPWTVC03, {from: accounts[3]});

		assert.equal(boolQ1EwjaA, true)
		assert.equal(boolZUs0u92, true)
		assert.equal(uint256x8fjbqE, BigInt("0"))
	});
})