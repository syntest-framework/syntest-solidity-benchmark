const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinqlwddVy = await DJCoin.new({from: accounts[5]});
		const uintY5LxrHF = BigInt("292")
		const addressM5Mtwlt = accounts[2]
		const addresspfnKT13 = accounts[2]
		const addressAkMe2o5 = accounts[0]
		const addressvTjUqH1 = "0x0000000000000000000000000000000000000001"
		const boolHXoKMQ3 = await DJCoinqlwddVy.increaseAllowance.call(addressM5Mtwlt, uintY5LxrHF, {from: accounts[1]});
		const uint256TWJ6f3 = await DJCoinqlwddVy.allowance.call(addressAkMe2o5, addresspfnKT13, {from: accounts[2]});
		const uint256oFJbfN8 = await DJCoinqlwddVy.balanceOf.call(addressvTjUqH1, {from: accounts[0]});

		assert.equal(boolHXoKMQ3, true)
		assert.equal(uint256TWJ6f3, BigInt("0"))
		assert.equal(uint256oFJbfN8, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinf7ptPkg = await DJCoin.new({from: accounts[1]});
		const addressx9sXm52 = accounts[1]
		const addresso5Onj47 = accounts[5]
		const addressbN6On9l = accounts[1]
		const uintyKyNA1M = BigInt("1241")
		const uintcj9ZSUO = BigInt("1786")
		const addressWoGdqA = await DJCoinf7ptPkg.owner.call({from: accounts[1]});
		const uint256LK1f7U4 = await DJCoinf7ptPkg.balanceOf.call(addressx9sXm52, {from: accounts[0]});
		const uint256FYdtUJH = await DJCoinf7ptPkg.balanceOf.call(addresso5Onj47, {from: accounts[0]});
		const uint256gb21d8W = await DJCoinf7ptPkg.balanceOf.call(addressbN6On9l, {from: accounts[3]});
//		const uint256PROvtZP = await DJCoinf7ptPkg.burn.call(uintcj9ZSUO, uintyKyNA1M, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressWoGdqA, 0x38D11dFDe3A28bB4a18b5a954B8e1BD95Cf43Dc2)
		assert.equal(uint256FYdtUJH, BigInt("0"))
		assert.equal(uint256LK1f7U4, BigInt("2100000000000"))
		assert.equal(uint256gb21d8W, BigInt("2100000000000"))
		await expect(DJCoinf7ptPkg.burn.call(uintcj9ZSUO, uintyKyNA1M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintqKJIDql = BigInt("1006")
		const addresswfvJKEg = accounts[2]
		const uintF2pzeeT = BigInt("819")
		const addressxFW4PoP = accounts[1]
		const boolbELcHt = await DJCoinnqNNH12.decreaseAllowance.call(addresswfvJKEg, uintqKJIDql, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressxFW4PoP, uintF2pzeeT, {from: accounts[5]});

		assert.equal(boolbELcHt, true)
		await expect(DJCoinnqNNH12.transfer.call(addressxFW4PoP, uintF2pzeeT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinCu87yd = await DJCoin.new({from: accounts[4]});
		const addresseLPZUp0 = "0x0000000000000000000000000000000000000001"
		const uintfjJ4cxN = BigInt("1989")
		const addressHEJZYhP = accounts[4]
		const addressoiIjUS9 = accounts[1]
		const addressRRz9MSb = accounts[1]
		const uinthnuKGNp = BigInt("1083")
		const uintcpxEcO = BigInt("236")
		const uintKKQIjJF = BigInt("1875")
		const addressml69Gf2 = accounts[0]
		const uintKKS8HMc = BigInt("252")
//		const address2XZ7jf = await DJCoinCu87yd.validRecipient.call(addresseLPZUp0, {from: accounts[0]});
//		const booluICn4pU = await DJCoinCu87yd.transferFrom.call(addressoiIjUS9, addressHEJZYhP, uintfjJ4cxN, {from: "0x0000000000000000000000000000000000000001"});
//		const addressmbKqfDo = await DJCoinCu87yd.validRecipient.call(addressRRz9MSb, {from: accounts[3]});
//		const uint256iTigZVV = await DJCoinCu87yd.burn.call(uintcpxEcO, uinthnuKGNp, {from: accounts[1]});
//		const boolvCZ6kNN = await DJCoinCu87yd.transfer.call(addressml69Gf2, uintKKQIjJF, {from: accounts[0]});
//		const boolANnvVVN = await DJCoinCu87yd.changetokensPerBlock.call(uintKKS8HMc, {from: accounts[3]});

		await expect(DJCoinCu87yd.validRecipient.call(addresseLPZUp0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoiniFdCBz = await DJCoin.new({from: accounts[0]});
		const addressgJA7M5C = accounts[4]
		const addressdEPPby = accounts[4]
		const addresswVCC3Cx = accounts[1]
		const uintateoc9o = BigInt("324")
		const addressVEZFPhy = accounts[4]
		const uint256bvslAM = await DJCoiniFdCBz.allowance.call(addressdEPPby, addressgJA7M5C, {from: accounts[4]});
		const uint256H822eGe = await DJCoiniFdCBz.totalSupply.call({from: accounts[5]});
//		const address9AMJHO = await DJCoiniFdCBz.validRecipient.call(addresswVCC3Cx, {from: accounts[2]});
//		await DJCoiniFdCBz.renounceOwnership.call({from: accounts[5]});
//		const bool0hj4oR = await DJCoiniFdCBz.approve.call(addressVEZFPhy, uintateoc9o, {from: accounts[0]});

		assert.equal(uint256H822eGe, BigInt("2100000000000"))
		assert.equal(uint256bvslAM, BigInt("0"))
		await expect(DJCoiniFdCBz.validRecipient.call(addresswVCC3Cx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintfmCh8Ic = BigInt("1006")
		const addressURAMgdd = accounts[2]
		const uintZgFrJc6 = BigInt("1014")
		const uintOpngbZP = BigInt("1754")
		const uintTyA0ILp = BigInt("819")
		const addressQXYYWCD = accounts[1]
		const boolbELcHt = await DJCoinnqNNH12.decreaseAllowance.call(addressURAMgdd, uintfmCh8Ic, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XQwemPY = await DJCoinnqNNH12.burn.call(uintOpngbZP, uintZgFrJc6, {from: accounts[1]});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressQXYYWCD, uintTyA0ILp, {from: accounts[5]});

		assert.equal(boolbELcHt, true)
		assert.equal(uint256XQwemPY, BigInt("1887060000000"))
		await expect(DJCoinnqNNH12.transfer.call(addressQXYYWCD, uintTyA0ILp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintksbEkfX = BigInt("1006")
		const addressmxc27qk = accounts[2]
		const uintGn51vlx = BigInt("1813")
		const uintDR9wMjw = BigInt("819")
		const addressRxXuSD8 = accounts[1]
		const addressu2O61W2 = accounts[3]
		const boolbELcHt = await DJCoinnqNNH12.decreaseAllowance.call(addressmxc27qk, uintksbEkfX, {from: "0x0000000000000000000000000000000000000001"});
		const boolq2D4Pcc = await DJCoinnqNNH12.changetokensPerBlock.call(uintGn51vlx, {from: accounts[2]});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressRxXuSD8, uintDR9wMjw, {from: accounts[5]});
//		const uint256zmgkZAd = await DJCoinnqNNH12.balanceOf.call(addressu2O61W2, {from: accounts[4]});

		assert.equal(boolbELcHt, true)
		assert.equal(boolq2D4Pcc, true)
		await expect(DJCoinnqNNH12.transfer.call(addressRxXuSD8, uintDR9wMjw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintysVOZYl = BigInt("1265")
		const addresszxBXYhK = "0x0000000000000000000000000000000000000001"
		const uintslBG1KP = BigInt("819")
		const addressn2TtklI = accounts[2]
		const boolPeYP1sK = await DJCoinnqNNH12.approve.call(addresszxBXYhK, uintysVOZYl, {from: accounts[1]});
		const uint256XhLZbAT = await DJCoinnqNNH12.totalSupply.call({from: accounts[0]});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressn2TtklI, uintslBG1KP, {from: accounts[5]});
//		await DJCoinnqNNH12.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolPeYP1sK, true)
		assert.equal(uint256XhLZbAT, BigInt("2100000000000"))
		await expect(DJCoinnqNNH12.transfer.call(addressn2TtklI, uintslBG1KP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintFULjxe = BigInt("1673")
		const addressv9ns1GZ = accounts[1]
		const addressYuisVoZ = "0x0000000000000000000000000000000000000001"
		const uintSUTcokF = BigInt("820")
		const addressCPfRC5T = accounts[1]
//		const boolgiQIGDi = await DJCoinnqNNH12.transferFrom.call(addressYuisVoZ, addressv9ns1GZ, uintFULjxe, {from: accounts[1]});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressCPfRC5T, uintSUTcokF, {from: accounts[5]});

		await expect(DJCoinnqNNH12.transferFrom.call(addressYuisVoZ, addressv9ns1GZ, uintFULjxe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const addressyxkPMbk = accounts[0]
		const addresscTmmuE8 = accounts[2]
		const uintDsUdPJL = BigInt("1411")
		const addressusGFNdV = accounts[5]
		const uintcbhkErb = BigInt("819")
		const addressJpS1mee = accounts[2]
//		await DJCoinnqNNH12.renounceOwnership.call({from: accounts[1]});
//		const uint256ClDL8JX = await DJCoinnqNNH12.allowance.call(addresscTmmuE8, addressyxkPMbk, {from: accounts[0]});
//		const boolvrNgNwp = await DJCoinnqNNH12.increaseAllowance.call(addressusGFNdV, uintDsUdPJL, {from: accounts[1]});
//		const boolvCC6A8k = await DJCoinnqNNH12.transfer.call(addressJpS1mee, uintcbhkErb, {from: accounts[5]});

		await expect(DJCoinnqNNH12.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBxaS4D1 = await DJCoin.new({from: accounts[2]});
		const uintnqYdDmM = BigInt("1797")
		const addressr6r7JRS = accounts[0]
		const addressfgo6R1w = accounts[1]
		const uintS8K7VUB = BigInt("504")
		const addressPPHpiHQ = accounts[4]
		const uintgSvMqZJ = BigInt("1825")
		const boolCJopKI = await DJCoinBxaS4D1.decreaseAllowance.call(addressr6r7JRS, uintnqYdDmM, {from: accounts[4]});
		const addressEpDMIYY = await DJCoinBxaS4D1.transferOwnership.call(addressfgo6R1w, {from: accounts[2]});
		const boolgoUNhYb = await DJCoinBxaS4D1.increaseAllowance.call(addressPPHpiHQ, uintS8K7VUB, {from: accounts[0]});
		const boolVhNhnzz = await DJCoinBxaS4D1.changetokensPerBlock.call(uintgSvMqZJ, {from: accounts[2]});

		assert.equal(boolCJopKI, true)
		assert.equal(boolVhNhnzz, true)
		assert.equal(boolgoUNhYb, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinsAfMlQz = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseIJzQx2 = accounts[2]
		const uinth9yDDl5 = BigInt("1775")
		const uintohxoKrE = BigInt("1212")
		const addressxjqCghp = await DJCoinsAfMlQz.validRecipient.call(addresseIJzQx2, {from: accounts[3]});
		const uint256pZBLwe = await DJCoinsAfMlQz.burn.call(uintohxoKrE, uinth9yDDl5, {from: accounts[2]});
	});

	it('test for DJCoin', async () => {
		const DJCoinnqNNH12 = await DJCoin.new({from: accounts[1]});
		const uintDAJZyVa = BigInt("0")
		const addressa0CP4Xw = accounts[3]
		const boolHX3jHqA = await DJCoinnqNNH12.transfer.call(addressa0CP4Xw, uintDAJZyVa, {from: accounts[1]});
//		await DJCoinnqNNH12.renounceOwnership.call({from: accounts[1]});

		assert.equal(boolHX3jHqA, true)
		await expect(DJCoinnqNNH12.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})