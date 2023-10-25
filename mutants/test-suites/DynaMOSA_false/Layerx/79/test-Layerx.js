const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressmeoKBnA = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressmeoKBnA, {from: accounts[4]});
		const uintNlNY2Mb = BigInt("192")
		const addressDq5vO2c = accounts[1]
//		await LayerxnBGB2a.addStakePayment.call({from: accounts[0]});
//		const uintAxnhflO = await LayerxnBGB2a.withdraw.call(uintNlNY2Mb, {from: accounts[3]});
//		const uinthOuRYnW = await LayerxnBGB2a.balanceOf.call(addressDq5vO2c, {from: accounts[3]});

		await expect(LayerxnBGB2a.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSHXfaLJ = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addressSHXfaLJ, {from: accounts[0]});
		const uintTmGLhjH = await LayerxEkQHnFo.getStakesNum.call({from: accounts[1]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});

		assert.equal(uintTmGLhjH, BigInt("1"))
		await expect(LayerxEkQHnFo.unlock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRPT33uP = accounts[4]
		const LayerxPl6nhWG = await Layerx.new(addressRPT33uP, {from: accounts[1]});
		const addressq7xreRI = accounts[2]
		const uintmY5cTAp = BigInt("1051")
		const addressmEqlIwg = accounts[3]
		const uintxTwEk2j = await LayerxPl6nhWG.getStakesNum.call({from: accounts[2]});
//		const addressidmH0L3 = await LayerxPl6nhWG.transferOwnership.call(addressq7xreRI, {from: accounts[3]});
//		const uintNVwsYm = await LayerxPl6nhWG.withdraw.call(uintmY5cTAp, {from: accounts[2]});
//		const uintKDA5IEV = await LayerxPl6nhWG.getStakesNum.call({from: accounts[4]});
//		const uintVry9KvQ = await LayerxPl6nhWG.balanceOf.call(addressmEqlIwg, {from: accounts[3]});

		assert.equal(uintxTwEk2j, BigInt("1"))
		await expect(LayerxPl6nhWG.transferOwnership.call(addressq7xreRI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressb7HTv2 = accounts[1]
		const LayerxEBzU3bH = await Layerx.new(addressb7HTv2, {from: accounts[2]});
		const addressrB3hoJv = accounts[1]
		const addressmZpiq5z = accounts[2]
		const addressjYDWb8L = await LayerxEBzU3bH.setNewStakeCreator.call(addressrB3hoJv, {from: accounts[1]});
//		await LayerxEBzU3bH.unlock.call({from: accounts[1]});
//		const addressI9dNWiK = await LayerxEBzU3bH.transferOwnership.call(addressmZpiq5z, {from: accounts[2]});
		await LayerxEBzU3bH.unlock.call({from: accounts[1]});

		await expect(LayerxEBzU3bH.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTMyMxPL = accounts[3]
		const Layerxg80dHE1 = await Layerx.new(addressTMyMxPL, {from: accounts[0]});
		const uintSFnx5so = BigInt("673")
		const addressKv1tnmH = accounts[3]
		const uintdeZ9Lre = BigInt("1888")
		const uintkhNkirZ = BigInt("1422")
		const addressz4hOlrF = accounts[3]
		const addressKxlf3GP = accounts[2]
		const addressXOjU4tC = accounts[4]
		const addressNn7SpYV = accounts[1]
		const boolsRmT9ZS = await Layerxg80dHE1.approve.call(addressKv1tnmH, uintSFnx5so, {from: accounts[4]});
//		const uintJHOfFvf = await Layerxg80dHE1.lock.call(uintdeZ9Lre, {from: accounts[0]});
//		const boolCACkZjC = await Layerxg80dHE1.transfer.call(addressz4hOlrF, uintkhNkirZ, {from: accounts[5]});
//		await Layerxg80dHE1.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintANY5da5 = await Layerxg80dHE1.allowance.call(addressXOjU4tC, addressKxlf3GP, {from: accounts[4]});
//		const uintnjhc5O = await Layerxg80dHE1.balanceOf.call(addressNn7SpYV, {from: accounts[1]});

		assert.equal(boolsRmT9ZS, true)
		await expect(Layerxg80dHE1.lock.call(uintdeZ9Lre, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressC6kavKJ = accounts[5]
		const LayerxzVuBuum = await Layerx.new(addressC6kavKJ, {from: accounts[4]});
		const uintCRfep4n = BigInt("1109")
		const addressR23xJSe = accounts[0]
		const addressXd4zWAp = accounts[4]
		const uintCSonwW = BigInt("1735")
		const addressEbm5EUO = accounts[1]
		const addresscmFtOWm = accounts[4]
		const addressHMIQXzY = accounts[0]
//		const boolzFlFXoo = await LayerxzVuBuum.transferFrom.call(addressXd4zWAp, addressR23xJSe, uintCRfep4n, {from: accounts[2]});
//		const booloIBWo4l = await LayerxzVuBuum.approve.call(addressEbm5EUO, uintCSonwW, {from: accounts[3]});
//		const addressn7Jv0yM = await LayerxzVuBuum.transferOwnership.call(addresscmFtOWm, {from: accounts[2]});
//		await LayerxzVuBuum.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresstZNsBhy = await LayerxzVuBuum.setNewStakeCreator.call(addressHMIQXzY, {from: accounts[5]});

		await expect(LayerxzVuBuum.transferFrom.call(addressXd4zWAp, addressR23xJSe, uintCRfep4n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKTOyuS = accounts[3]
		const LayerxjeH8Ik6 = await Layerx.new(addressKTOyuS, {from: accounts[0]});
		const addressTlFjVSs = accounts[0]
		const uintnvDl4BH = BigInt("1340")
		const addressFAKzHzI = accounts[2]
//		await LayerxjeH8Ik6.paused.call({from: accounts[5]});
//		await LayerxjeH8Ik6.addStakePayment.call({from: accounts[1]});
//		const addressb9xhvA3 = await LayerxjeH8Ik6.setNewStakeCreator.call(addressTlFjVSs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkDBmRgw = await LayerxjeH8Ik6.transfer.call(addressFAKzHzI, uintnvDl4BH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxjeH8Ik6.paused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiTwKeRR = accounts[4]
		const LayerxAjA2ZL = await Layerx.new(addressiTwKeRR, {from: accounts[3]});
		const addressg2fE0qu = accounts[1]
		const boolmGMQQQp = false
		const boolYgVxoWO = true
		const addressE5vS42s = accounts[5]
		const uintan2Rh3l = BigInt("343")
		const uintcl8I4sI = await LayerxAjA2ZL.totalSupply.call({from: accounts[4]});
//		const addressJkW6n8 = await LayerxAjA2ZL.setNewStakeCreator.call(addressg2fE0qu, {from: accounts[3]});
//		const booljMJCNUY = await LayerxAjA2ZL.setIsPaused.call(boolmGMQQQp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTZBECOI = await LayerxAjA2ZL.setIsPaused.call(boolYgVxoWO, {from: accounts[2]});
//		const addressPjyrJMK = await LayerxAjA2ZL.transferOwnership.call(addressE5vS42s, {from: accounts[0]});
//		const uintPNiJdg3 = await LayerxAjA2ZL.lock.call(uintan2Rh3l, {from: accounts[3]});

		assert.equal(uintcl8I4sI, BigInt("40000000000000000000000"))
		await expect(LayerxAjA2ZL.setNewStakeCreator.call(addressg2fE0qu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSubtZL4 = accounts[1]
		const LayerxStrjHpk = await Layerx.new(addressSubtZL4, {from: accounts[0]});
		const uintfjEQix7 = BigInt("10")
		const addressb8UY1fD = accounts[3]
		const addresspEpRGvf = accounts[4]
		const uintil1A3JX = BigInt("2021")
		const addressM9cayud = accounts[2]
		const boolnR4pGTv = await LayerxStrjHpk.approve.call(addressb8UY1fD, uintfjEQix7, {from: accounts[0]});
		const uintCDZbdc = await LayerxStrjHpk.balanceOf.call(addresspEpRGvf, {from: accounts[3]});
//		const uintmZYIrOP = await LayerxStrjHpk.exist.call(uintil1A3JX, {from: "0x0000000000000000000000000000000000000001"});
//		const uinttGZ7Kus = await LayerxStrjHpk.balanceOf.call(addressM9cayud, {from: accounts[0]});
//		await LayerxStrjHpk.onlyOwner.call({from: accounts[2]});

		assert.equal(boolnR4pGTv, true)
		assert.equal(uintCDZbdc, BigInt("0"))
		await expect(LayerxStrjHpk.exist.call(uintil1A3JX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMKxCRZQ = accounts[0]
		const LayerxC8973kz = await Layerx.new(addressMKxCRZQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintJiLWsJO = BigInt("1291")
		const uintpCSaft8 = BigInt("19")
		await LayerxC8973kz.onlyOwner.call({from: accounts[4]});
		await LayerxC8973kz.unlock.call({from: accounts[1]});
		const uintXrm0Q9 = await LayerxC8973kz.withdraw.call(uintJiLWsJO, {from: accounts[5]});
		const uint256Tzr5i7 = await LayerxC8973kz.burn.call(uintpCSaft8, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressj82nRl8 = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressj82nRl8, {from: accounts[4]});
		const addressLrAAW8 = accounts[2]
		const address0fTh07 = accounts[0]
		const uintysVaU0o = BigInt("475")
		const addressnU6waz2 = "0x0000000000000000000000000000000000000001"
		const addressx3jG92T = accounts[3]
		const uinthdSvxHT = BigInt("543")
		const uintwljuwL0 = BigInt("192")
		const uintpG9hM4n = await LayerxnBGB2a.allowance.call(address0fTh07, addressLrAAW8, {from: accounts[5]});
//		await LayerxnBGB2a.unlock.call({from: accounts[0]});
//		const boolsYRNpEU = await LayerxnBGB2a.transferFrom.call(addressx3jG92T, addressnU6waz2, uintysVaU0o, {from: accounts[4]});
//		const uintfgbOl1I = await LayerxnBGB2a.lock.call(uinthdSvxHT, {from: accounts[2]});
//		await LayerxnBGB2a.addStakePayment.call({from: accounts[0]});
//		const uintAxnhflO = await LayerxnBGB2a.withdraw.call(uintwljuwL0, {from: accounts[3]});

		assert.equal(uintpG9hM4n, BigInt("0"))
		await expect(LayerxnBGB2a.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshG12W1 = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addresshG12W1, {from: accounts[0]});
		const uintkJ2JZWV = BigInt("2018")
		const addressAlo1G90 = accounts[3]
		const uintkZdtfaK = BigInt("1888")
		const addressaALrxoN = accounts[1]
//		const boolfjksn8P = await LayerxEkQHnFo.transfer.call(addressAlo1G90, uintkJ2JZWV, {from: accounts[5]});
//		const boolIvq1Ib = await LayerxEkQHnFo.transfer.call(addressaALrxoN, uintkZdtfaK, {from: accounts[0]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});
//		await LayerxEkQHnFo.addStakePayment.call({from: accounts[0]});

		await expect(LayerxEkQHnFo.transfer.call(addressAlo1G90, uintkJ2JZWV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGY5POYX = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressGY5POYX, {from: accounts[4]});
		const uintBCdHhuv = BigInt("210")
//		const uintAxnhflO = await LayerxnBGB2a.withdraw.call(uintBCdHhuv, {from: accounts[3]});

		await expect(LayerxnBGB2a.withdraw.call(uintBCdHhuv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbzexuA = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addressbzexuA, {from: accounts[0]});
		const bytegNR6pgH = "0x0617071c011f1d13181f1c11121318"
		const uinthxwiKhv = BigInt("1211")
		const addresslFYTvoY = accounts[3]
		const uintCxgJzUF = BigInt("670")
		const uintTmGLhjH = await LayerxEkQHnFo.getStakesNum.call({from: accounts[1]});
//		const boolL75pvBB = await LayerxEkQHnFo.approveAndCall.call(addresslFYTvoY, uinthxwiKhv, bytegNR6pgH, {from: accounts[1]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});
//		const uint256rceUwx0 = await LayerxEkQHnFo.burn.call(uintCxgJzUF, {from: accounts[3]});

		assert.equal(uintTmGLhjH, BigInt("1"))
		await expect(LayerxEkQHnFo.approveAndCall.call(addresslFYTvoY, uinthxwiKhv, bytegNR6pgH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressPpTAEZo = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addressPpTAEZo, {from: accounts[0]});
//		await LayerxEkQHnFo.f.call({from: accounts[2]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});

		await expect(LayerxEkQHnFo.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyQG9xrv = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressyQG9xrv, {from: accounts[4]});
		const addresswyt00DF = accounts[1]
		const addressEIYOm6K = "0x0000000000000000000000000000000000000001"
		const uintScfPybM = BigInt("192")
//		await LayerxnBGB2a.addStakePayment.call({from: accounts[2]});
//		await LayerxnBGB2a.addStakePayment.call({from: accounts[0]});
//		await LayerxnBGB2a.unlock.call({from: accounts[4]});
//		const uint71WLow = await LayerxnBGB2a.allowance.call(addressEIYOm6K, addresswyt00DF, {from: accounts[3]});
//		const uintAxnhflO = await LayerxnBGB2a.withdraw.call(uintScfPybM, {from: accounts[3]});

		await expect(LayerxnBGB2a.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressR9SvitH = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addressR9SvitH, {from: accounts[0]});
		const addressQuJKVIi = accounts[2]
		const uintTmGLhjH = await LayerxEkQHnFo.getStakesNum.call({from: accounts[1]});
		const addressBXqKJB9 = await LayerxEkQHnFo.transferOwnership.call(addressQuJKVIi, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxEkQHnFo.f.call({from: accounts[4]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});
//		await LayerxEkQHnFo.paused.call({from: accounts[0]});

		assert.equal(uintTmGLhjH, BigInt("1"))
		await expect(LayerxEkQHnFo.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSbLgrnt = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressSbLgrnt, {from: accounts[4]});
		const addressRwYwqf = accounts[2]
		const boolW9k6PKU = false
		const uintRNo735L = BigInt("58")
//		await LayerxnBGB2a.addStakePayment.call({from: accounts[2]});
//		const addressV2g1sFd = await LayerxnBGB2a.setNewStakeCreator.call(addressRwYwqf, {from: accounts[2]});
//		const boole1CmvEi = await LayerxnBGB2a.setIsPaused.call(boolW9k6PKU, {from: accounts[2]});
//		const uintAM64NVL = await LayerxnBGB2a.lock.call(uintRNo735L, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxnBGB2a.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUqTG39x = accounts[2]
		const LayerxnBGB2a = await Layerx.new(addressUqTG39x, {from: accounts[4]});
		const addressfQQs6vW = accounts[4]
		const addressea81bh8 = accounts[3]
		const addressuqsJjnY = accounts[3]
		const addressWTG8KID = accounts[1]
		const uintrkOemf8 = BigInt("0")
		const uintzZ9wUAs = await LayerxnBGB2a.totalSupply.call({from: accounts[1]});
		const uintGVA0qoG = await LayerxnBGB2a.allowance.call(addressea81bh8, addressfQQs6vW, {from: accounts[4]});
		const uintT1U7o6T = await LayerxnBGB2a.allowance.call(addressWTG8KID, addressuqsJjnY, {from: accounts[2]});
//		const uintAM64NVL = await LayerxnBGB2a.lock.call(uintrkOemf8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGVA0qoG, BigInt("0"))
		assert.equal(uintT1U7o6T, BigInt("0"))
		assert.equal(uintzZ9wUAs, BigInt("40000000000000000000000"))
		await expect(LayerxnBGB2a.lock.call(uintrkOemf8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressevVMjSP = "0x0000000000000000000000000000000000000001"
		const LayerxEkQHnFo = await Layerx.new(addressevVMjSP, {from: accounts[0]});
		const uintXsDsXMB = BigInt("801")
		const addressmqdnXC = accounts[3]
		const uint256nqsyHi = await LayerxEkQHnFo.burn.call(uintXsDsXMB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressF8NNJsw = await LayerxEkQHnFo.transferOwnership.call(addressmqdnXC, {from: accounts[3]});
//		await LayerxEkQHnFo.unlock.call({from: accounts[2]});

		await expect(LayerxEkQHnFo.transferOwnership.call(addressmqdnXC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})