const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinBYRNsU = await DJCoin.new({from: accounts[1]});
		const addressNIgwMzm = accounts[4]
		const addressLesV6MV = "0x0000000000000000000000000000000000000001"
		const uints656IU9 = BigInt("676")
		const addressTt3E0C6 = accounts[2]
		const addresskTLirN = accounts[4]
		const addressTT3D0Wt = accounts[1]
		const uint256hQvAd2u = await DJCoinBYRNsU.allowance.call(addressLesV6MV, addressNIgwMzm, {from: accounts[0]});
//		const booliLqC2gQ = await DJCoinBYRNsU.transferFrom.call(addresskTLirN, addressTt3E0C6, uints656IU9, {from: accounts[3]});
//		const addressf89hF6c = await DJCoinBYRNsU.validRecipient.call(addressTT3D0Wt, {from: accounts[4]});

		assert.equal(uint256hQvAd2u, BigInt("0"))
		await expect(DJCoinBYRNsU.transferFrom.call(addresskTLirN, addressTt3E0C6, uints656IU9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXlpamju = await DJCoin.new({from: accounts[2]});
		const addressN8Llp0S = accounts[1]
		const uintEBrq5qy = BigInt("144")
		const addressm73mZ3o = accounts[3]
		const uintmlShwCz = BigInt("318")
		const addressumjkIgZ = accounts[3]
		const addressU0UPUg = accounts[4]
//		const addressPqtSvYW = await DJCoinXlpamju.transferOwnership.call(addressN8Llp0S, {from: accounts[4]});
//		const boolLrB37Tv = await DJCoinXlpamju.decreaseAllowance.call(addressm73mZ3o, uintEBrq5qy, {from: accounts[4]});
//		const boolqIzH1A8 = await DJCoinXlpamju.decreaseAllowance.call(addressumjkIgZ, uintmlShwCz, {from: accounts[0]});
//		await DJCoinXlpamju.onlyOwner.call({from: accounts[5]});
//		const addressrnQPG63 = await DJCoinXlpamju.transferOwnership.call(addressU0UPUg, {from: accounts[4]});

		await expect(DJCoinXlpamju.transferOwnership.call(addressN8Llp0S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmqQxsiy = await DJCoin.new({from: accounts[1]});
		const uintECJIAl5 = BigInt("836")
		const addressqL0kYno = accounts[2]
		const uint256DBevH7S = await DJCoinmqQxsiy.totalSupply.call({from: accounts[2]});
		const uint256clYnX5X = await DJCoinmqQxsiy.totalSupply.call({from: accounts[2]});
//		await DJCoinmqQxsiy.onlyOwner.call({from: accounts[0]});
//		const boolpmUbvWJ = await DJCoinmqQxsiy.decreaseAllowance.call(addressqL0kYno, uintECJIAl5, {from: accounts[4]});

		assert.equal(uint256DBevH7S, BigInt("2100000000000"))
		assert.equal(uint256clYnX5X, BigInt("2100000000000"))
		await expect(DJCoinmqQxsiy.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindXKssm = await DJCoin.new({from: accounts[1]});
		const uintmtf5Gi7 = BigInt("1056")
		const uinthHMPdBM = BigInt("771")
		const uinth0EPx8I = BigInt("612")
		const uintXhzJfxU = BigInt("1780")
		const addresskcNBKL1 = accounts[0]
		const uintrhb7rNy = BigInt("1874")
		const addressEwy7dT = accounts[4]
		const uint256VD9F2C = await DJCoindXKssm.burn.call(uinthHMPdBM, uintmtf5Gi7, {from: accounts[1]});
//		const uint256Rt2cZxh = await DJCoindXKssm.burn.call(uintXhzJfxU, uinth0EPx8I, {from: accounts[4]});
//		const uint256tz80rF3 = await DJCoindXKssm.balanceOf.call(addresskcNBKL1, {from: accounts[2]});
//		const uint256N82zV6s = await DJCoindXKssm.totalSupply.call({from: accounts[1]});
//		const boolfiN3KX = await DJCoindXKssm.approve.call(addressEwy7dT, uintrhb7rNy, {from: accounts[2]});
//		await DJCoindXKssm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VD9F2C, BigInt("1878240000000"))
		await expect(DJCoindXKssm.burn.call(uintXhzJfxU, uinth0EPx8I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinneT3ydp = await DJCoin.new({from: accounts[3]});
		const uintZjX0LA = BigInt("152")
		const addressvZouvkz = accounts[0]
		const uintscfQn0T = BigInt("1406")
		const addressUzUBiDd = accounts[1]
		const boolgwZkdTC = await DJCoinneT3ydp.increaseAllowance.call(addressvZouvkz, uintZjX0LA, {from: accounts[1]});
		const boolyTZWsI = await DJCoinneT3ydp.decreaseAllowance.call(addressUzUBiDd, uintscfQn0T, {from: accounts[2]});

		assert.equal(boolgwZkdTC, true)
		assert.equal(boolyTZWsI, true)
	});

	it('test for DJCoin', async () => {
		const DJCoingBu5WZ7 = await DJCoin.new({from: accounts[3]});
		const addressWGDeu6R = accounts[4]
		const uintcyGJhSe = BigInt("1282")
		const addresskm5JL2 = accounts[1]
		const uint256FYIqXFN = await DJCoingBu5WZ7.balanceOf.call(addressWGDeu6R, {from: accounts[3]});
		const boolYd81kUX = await DJCoingBu5WZ7.decreaseAllowance.call(addresskm5JL2, uintcyGJhSe, {from: accounts[4]});
		const uint256az3NnzS = await DJCoingBu5WZ7.totalSupply.call({from: accounts[4]});

		assert.equal(boolYd81kUX, true)
		assert.equal(uint256FYIqXFN, BigInt("0"))
		assert.equal(uint256az3NnzS, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoindXKssm = await DJCoin.new({from: accounts[1]});
		const uinttQexeYC = BigInt("1056")
		const uintC3uUcvO = BigInt("771")
		const uintAxAKfjY = BigInt("702")
		const addressAaZVUI = accounts[1]
		const uintQZ2aevQ = BigInt("612")
		const uintCF5yFhx = BigInt("1780")
		const addresssIVO2A = accounts[0]
		const uintXAQQstE = BigInt("1874")
		const addressn2ReoNI = accounts[4]
		const uint256VD9F2C = await DJCoindXKssm.burn.call(uintC3uUcvO, uinttQexeYC, {from: accounts[1]});
		const boolbcIS7IP = await DJCoindXKssm.approve.call(addressAaZVUI, uintAxAKfjY, {from: accounts[5]});
//		const uint256Rt2cZxh = await DJCoindXKssm.burn.call(uintCF5yFhx, uintQZ2aevQ, {from: accounts[4]});
//		const uint256tz80rF3 = await DJCoindXKssm.balanceOf.call(addresssIVO2A, {from: accounts[2]});
//		const uint256N82zV6s = await DJCoindXKssm.totalSupply.call({from: accounts[1]});
//		const boolfiN3KX = await DJCoindXKssm.approve.call(addressn2ReoNI, uintXAQQstE, {from: accounts[2]});
//		await DJCoindXKssm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbcIS7IP, true)
		assert.equal(uint256VD9F2C, BigInt("1878240000000"))
		await expect(DJCoindXKssm.burn.call(uintCF5yFhx, uintQZ2aevQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYY0t6W = await DJCoin.new({from: accounts[3]});
		const uintaddWIrk = BigInt("388")
		const addresspbGBSmZ = accounts[4]
		const uintSJSpHQG = BigInt("1330")
		const uintZhrIfbU = BigInt("611")
		const uintPrhquw = BigInt("591")
		const uintqWo305t = BigInt("66")
//		const boolgtiG3mp = await DJCoinYY0t6W.transfer.call(addresspbGBSmZ, uintaddWIrk, {from: accounts[0]});
//		const uint256CiXUc1v = await DJCoinYY0t6W.burn.call(uintZhrIfbU, uintSJSpHQG, {from: accounts[2]});
//		const uint256nAdJBUe = await DJCoinYY0t6W.burn.call(uintqWo305t, uintPrhquw, {from: accounts[1]});

		await expect(DJCoinYY0t6W.transfer.call(addresspbGBSmZ, uintaddWIrk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindXKssm = await DJCoin.new({from: accounts[1]});
		const uintXYqxIy9 = BigInt("1056")
		const uintHzz9zRI = BigInt("771")
		const addressiPVsHqv = accounts[1]
		const uintz6Tg8Yd = BigInt("612")
		const uintp5CFbQt = BigInt("1780")
		const addressbsjeJ3Z = accounts[0]
		const uintNY9RG3l = BigInt("166")
		const addresspKk934V = accounts[2]
		const addressclxvTY2 = accounts[4]
		const uint8LgpDJ = BigInt("1874")
		const address359s6x = accounts[4]
		const uint256VD9F2C = await DJCoindXKssm.burn.call(uintHzz9zRI, uintXYqxIy9, {from: accounts[1]});
		const addressVUY87cN = await DJCoindXKssm.transferOwnership.call(addressiPVsHqv, {from: accounts[1]});
//		const uint256Rt2cZxh = await DJCoindXKssm.burn.call(uintp5CFbQt, uintz6Tg8Yd, {from: accounts[4]});
//		const uint256tz80rF3 = await DJCoindXKssm.balanceOf.call(addressbsjeJ3Z, {from: accounts[2]});
//		await DJCoindXKssm.onlyOwner.call({from: accounts[0]});
//		const uint256N82zV6s = await DJCoindXKssm.totalSupply.call({from: accounts[1]});
//		const boolw4NM2PJ = await DJCoindXKssm.transferFrom.call(addressclxvTY2, addresspKk934V, uintNY9RG3l, {from: accounts[1]});
//		const boolfiN3KX = await DJCoindXKssm.approve.call(address359s6x, uint8LgpDJ, {from: accounts[2]});
//		await DJCoindXKssm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VD9F2C, BigInt("1878240000000"))
		await expect(DJCoindXKssm.burn.call(uintp5CFbQt, uintz6Tg8Yd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinfTpH18 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbHauVTc = BigInt("810")
		const addressmWwYqKK = accounts[0]
		const addressEYi1t5g = accounts[2]
		const uint256gPq6ZG = await DJCoinfTpH18.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLBfkrdg = await DJCoinfTpH18.owner.call({from: accounts[0]});
		const uint256AJC4IJ7 = await DJCoinfTpH18.totalSupply.call({from: accounts[1]});
		const boolDDvI3i = await DJCoinfTpH18.transferFrom.call(addressEYi1t5g, addressmWwYqKK, uintbHauVTc, {from: accounts[1]});
	});

	it('test for DJCoin', async () => {
		const DJCoinYY0t6W = await DJCoin.new({from: accounts[3]});
		const uintDeMipwT = BigInt("591")
		const uintCzpHccE = BigInt("66")
		const addresss2zY3Em = await DJCoinYY0t6W.owner.call({from: accounts[3]});
//		const uint256nAdJBUe = await DJCoinYY0t6W.burn.call(uintCzpHccE, uintDeMipwT, {from: accounts[1]});

		assert.equal(addresss2zY3Em, 0x81B4644F3366Bf4876207B9568BAb5bE66490898)
		await expect(DJCoinYY0t6W.burn.call(uintCzpHccE, uintDeMipwT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinneT3ydp = await DJCoin.new({from: accounts[3]});
		const uintdXVmUV = BigInt("1110")
		const uintW6iGg4S = BigInt("1356")
		const addressMMWc7qf = accounts[1]
		const uintidlyKpy = BigInt("1780")
		const addressozj89Ui = accounts[4]
		const boolnzYNQFX = await DJCoinneT3ydp.changetokensPerBlock.call(uintdXVmUV, {from: "0x0000000000000000000000000000000000000001"});
		const boolyTZWsI = await DJCoinneT3ydp.decreaseAllowance.call(addressMMWc7qf, uintW6iGg4S, {from: accounts[2]});
		const boolQ9xcZ7d = await DJCoinneT3ydp.increaseAllowance.call(addressozj89Ui, uintidlyKpy, {from: accounts[2]});

		assert.equal(boolQ9xcZ7d, true)
		assert.equal(boolnzYNQFX, true)
		assert.equal(boolyTZWsI, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinDe9k8Ik = await DJCoin.new({from: accounts[4]});
		const addressHHqCDT6 = accounts[0]
		const uintD8M8jtg = BigInt("464")
		const addressTvD5eus = accounts[5]
		const addressDOtCEdF = accounts[0]
		const uint256lxiWxKc = await DJCoinDe9k8Ik.balanceOf.call(addressHHqCDT6, {from: accounts[2]});
//		await DJCoinDe9k8Ik.renounceOwnership.call({from: accounts[4]});
//		const uint256LF77K9c = await DJCoinDe9k8Ik.totalSupply.call({from: accounts[0]});
//		const boolmQroLce = await DJCoinDe9k8Ik.approve.call(addressTvD5eus, uintD8M8jtg, {from: accounts[0]});
//		const uint256ROA8rF4 = await DJCoinDe9k8Ik.balanceOf.call(addressDOtCEdF, {from: accounts[2]});
//		const addressGLHLER2 = await DJCoinDe9k8Ik.owner.call({from: accounts[3]});

		assert.equal(uint256lxiWxKc, BigInt("0"))
		await expect(DJCoinDe9k8Ik.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinv66eu45 = await DJCoin.new({from: accounts[4]});
		const uintehsX56y = BigInt("607")
		const addressv8rP5DO = accounts[2]
		const uintjPO76oQ = BigInt("0")
		const addressK18F3lv = accounts[0]
		const uintU04Djba = BigInt("464")
		const addressv9psOjF = accounts[4]
		const boolVP0xIbh = await DJCoinv66eu45.approve.call(addressv8rP5DO, uintehsX56y, {from: accounts[4]});
		const boolKFkZczw = await DJCoinv66eu45.transfer.call(addressK18F3lv, uintjPO76oQ, {from: accounts[5]});
		const boolkMfvuLg = await DJCoinv66eu45.decreaseAllowance.call(addressv9psOjF, uintU04Djba, {from: accounts[2]});

		assert.equal(boolKFkZczw, true)
		assert.equal(boolVP0xIbh, true)
		assert.equal(boolkMfvuLg, true)
	});
})