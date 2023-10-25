const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressRlRXQy3 = "0x0000000000000000000000000000000000000001"
		const LayerxQuw7JNn = await Layerx.new(addressRlRXQy3, {from: accounts[1]});
		const addressXDnWgvp = "0x0000000000000000000000000000000000000001"
		const uintw9tbjZw = BigInt("569")
		const addressRlLfLA = "0x0000000000000000000000000000000000000001"
		const uintNd5jRn = BigInt("743")
		const addressAGYxynJ = await LayerxQuw7JNn.transferOwnership.call(addressXDnWgvp, {from: accounts[1]});
		const boolk4soUl6 = await LayerxQuw7JNn.approve.call(addressRlLfLA, uintw9tbjZw, {from: accounts[0]});
		const uintpMY2jdS = await LayerxQuw7JNn.withdraw.call(uintNd5jRn, {from: accounts[4]});
		await LayerxQuw7JNn.f.call({from: accounts[3]});

		await expect(LayerxQuw7JNn.transferOwnership.call(addressXDnWgvp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressugGSmvl = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressugGSmvl, {from: accounts[0]});
		const bytepJ4X9X = "0x120e021f200010051a0e040e091c0c13001505040b071c04020c040b"
		const uintlAXM479 = BigInt("190")
		const addresscoqABuT = accounts[1]
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});
		const boolCO9oOEU = await LayerxL74tAYq.approveAndCall.call(addresscoqABuT, uintlAXM479, bytepJ4X9X, {from: accounts[2]});

		await expect(LayerxL74tAYq.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdJrzLJD = accounts[3]
		const Layerxf6TDYth = await Layerx.new(addressdJrzLJD, {from: accounts[1]});
		const addressCn8Ffs0 = accounts[3]
		const bytew7T5FZc = "0x100d0519160c0e1b070815181a130e10081c010f1404180a0a0a0b0202"
		const uintAoHjC4 = BigInt("1085")
		const addressL0H1Fy7 = accounts[3]
		const addressWpGMEeN = await Layerxf6TDYth.setNewStakeCreator.call(addressCn8Ffs0, {from: accounts[3]});
		const boolV4Nb08T = await Layerxf6TDYth.approveAndCall.call(addressL0H1Fy7, uintAoHjC4, bytew7T5FZc, {from: accounts[4]});

		await expect(Layerxf6TDYth.approveAndCall.call(addressL0H1Fy7, uintAoHjC4, bytew7T5FZc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWu3iKh4 = "0x0000000000000000000000000000000000000001"
		const LayerxreId8Z = await Layerx.new(addressWu3iKh4, {from: accounts[3]});
		const uintib0LH0X = BigInt("1387")
		const addressg3qhriu = accounts[4]
		const address9ZgDx5 = accounts[0]
		const addressVEgpmg2 = accounts[0]
		const uintSeq4pms = await LayerxreId8Z.exist.call(uintib0LH0X, {from: accounts[2]});
		const addressSX8YKcb = await LayerxreId8Z.setNewStakeCreator.call(addressg3qhriu, {from: accounts[3]});
		await LayerxreId8Z.unlock.call({from: accounts[1]});
		const uintDqXOU96 = await LayerxreId8Z.balanceOf.call(address9ZgDx5, {from: accounts[3]});
		const uintc4OrDx1 = await LayerxreId8Z.balanceOf.call(addressVEgpmg2, {from: accounts[1]});

		await expect(LayerxreId8Z.exist.call(uintib0LH0X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVITsxtz = accounts[2]
		const LayerxzBVVbzD = await Layerx.new(addressVITsxtz, {from: accounts[0]});
		const uintvX9mO8s = BigInt("1607")
		const boolvCzcApK = false
		const uintewin7Mp = BigInt("1944")
		const uintOdsinGt = await LayerxzBVVbzD.lock.call(uintvX9mO8s, {from: accounts[2]});
		const boolLTgW6xb = await LayerxzBVVbzD.setIsPaused.call(boolvCzcApK, {from: accounts[2]});
		const uintI9xgWvl = await LayerxzBVVbzD.withdraw.call(uintewin7Mp, {from: accounts[5]});
		await LayerxzBVVbzD.addStakePayment.call({from: accounts[4]});

		await expect(LayerxzBVVbzD.lock.call(uintvX9mO8s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresse1rhQEI = accounts[1]
		const LayerxvgG5epU = await Layerx.new(addresse1rhQEI, {from: accounts[3]});
		const addressOSM9IhF = accounts[2]
		const uintM8aIEFQ = BigInt("1000")
		const addressddPCpJh = accounts[1]
		const addressMxYGVdS = accounts[0]
		await LayerxvgG5epU.unlock.call({from: accounts[1]});
		const addressm6uE6V = await LayerxvgG5epU.transferOwnership.call(addressOSM9IhF, {from: accounts[4]});
		const uint256CO3YyZ7 = await LayerxvgG5epU.burn.call(uintM8aIEFQ, {from: accounts[3]});
		const uintmKoJB2h = await LayerxvgG5epU.allowance.call(addressMxYGVdS, addressddPCpJh, {from: accounts[3]});

		await expect(LayerxvgG5epU.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSVOWUVf = accounts[3]
		const LayerxGXdcxg8 = await Layerx.new(addressSVOWUVf, {from: accounts[1]});
		const addressNUpB62a = accounts[0]
		const addressSEJKJlP = "0x0000000000000000000000000000000000000001"
		const byteoA2TA0q = "0x09101a1a0f11031b071e1f1b200a1e050e031402"
		const uintbaRcp1B = BigInt("708")
		const addressJR3WDvP = accounts[4]
		const addressyBrGIQg = accounts[1]
		const uintUnUSGk5 = await LayerxGXdcxg8.allowance.call(addressSEJKJlP, addressNUpB62a, {from: accounts[2]});
		const boolEVn1JTU = await LayerxGXdcxg8.approveAndCall.call(addressJR3WDvP, uintbaRcp1B, byteoA2TA0q, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxGXdcxg8.paused.call({from: accounts[3]});
		const addressG08Qcmb = await LayerxGXdcxg8.setNewStakeCreator.call(addressyBrGIQg, {from: accounts[1]});

		assert.equal(uintUnUSGk5, BigInt("0"))
		await expect(LayerxGXdcxg8.approveAndCall.call(addressJR3WDvP, uintbaRcp1B, byteoA2TA0q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMOlwXNf = accounts[3]
		const LayerxVSbmieQ = await Layerx.new(addressMOlwXNf, {from: accounts[3]});
		const addressyh0PuRA = accounts[5]
		const boolbxu7OHB = true
		const uintIS7GnFi = await LayerxVSbmieQ.balanceOf.call(addressyh0PuRA, {from: accounts[4]});
		const uintaD7zLdv = await LayerxVSbmieQ.totalSupply.call({from: accounts[3]});
		const boolhSdfZSy = await LayerxVSbmieQ.setIsPaused.call(boolbxu7OHB, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxVSbmieQ.addStakePayment.call({from: accounts[2]});
		await LayerxVSbmieQ.unlock.call({from: accounts[3]});

		assert.equal(uintIS7GnFi, BigInt("0"))
		assert.equal(uintaD7zLdv, BigInt("40000000000000000000000"))
		await expect(LayerxVSbmieQ.setIsPaused.call(boolbxu7OHB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXNoS7Jb = accounts[0]
		const LayerxqTdsDT3 = await Layerx.new(addressXNoS7Jb, {from: accounts[5]});
		const addressEJxdOfp = accounts[5]
		const addressX2yaysc = "0x0000000000000000000000000000000000000001"
		const addressOIQPgd2 = accounts[3]
		const uintyz4bvry = BigInt("78")
		const address5fZMiO = accounts[3]
		const uint992IsI = BigInt("744")
		await LayerxqTdsDT3.f.call({from: accounts[3]});
		const uintZOFnSIO = await LayerxqTdsDT3.allowance.call(addressX2yaysc, addressEJxdOfp, {from: accounts[1]});
		const addressGAfpRc7 = await LayerxqTdsDT3.setNewStakeCreator.call(addressOIQPgd2, {from: accounts[1]});
		const uintDd8KTde = await LayerxqTdsDT3.withdraw.call(uintyz4bvry, {from: accounts[4]});
		const uintMdW20S7 = await LayerxqTdsDT3.balanceOf.call(address5fZMiO, {from: accounts[4]});
		const uint6stYAT = await LayerxqTdsDT3.exist.call(uint992IsI, {from: accounts[0]});

		await expect(LayerxqTdsDT3.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressN7ZKg8m = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressN7ZKg8m, {from: accounts[0]});
		const uintsvg0CM2 = BigInt("10")
		const address5NYnBn = accounts[0]
		const uint8MEU8u = BigInt("2023")
		const booljJMU9D = await LayerxL74tAYq.approve.call(address5NYnBn, uintsvg0CM2, {from: accounts[5]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[3]});
		const uint256UVqY103 = await LayerxL74tAYq.burn.call(uint8MEU8u, {from: accounts[3]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});

		assert.equal(booljJMU9D, true)
		await expect(LayerxL74tAYq.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressOwarSK2 = accounts[1]
		const LayerxxLS9tbg = await Layerx.new(addressOwarSK2, {from: "0x0000000000000000000000000000000000000001"});
		const uintfOzBJnP = BigInt("1014")
		const addresslpK0kFX = accounts[3]
		const uintdoOq5n7 = BigInt("1525")
		const addresssqkJ9T = accounts[5]
		const addresseYfVHr = accounts[3]
		const boolDlnLl59 = await LayerxxLS9tbg.approve.call(addresslpK0kFX, uintfOzBJnP, {from: accounts[3]});
		const uint256RHNp9yQ = await LayerxxLS9tbg.burn.call(uintdoOq5n7, {from: accounts[0]});
		await LayerxxLS9tbg.addStakePayment.call({from: accounts[0]});
		const uintsv96fXS = await LayerxxLS9tbg.allowance.call(addresseYfVHr, addresssqkJ9T, {from: accounts[4]});
		const uintzYRKkjb = await LayerxxLS9tbg.totalSupply.call({from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressnUCwBlY = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressnUCwBlY, {from: accounts[0]});
		const uintd0sKJ2L = BigInt("2002")
		const addressI0f6eYH = accounts[3]
		const addressYNGYaPu = accounts[1]
		const boolO5HoqjN = await LayerxL74tAYq.transferFrom.call(addressYNGYaPu, addressI0f6eYH, uintd0sKJ2L, {from: accounts[1]});
		await LayerxL74tAYq.unlock.call({from: accounts[2]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});

		await expect(LayerxL74tAYq.transferFrom.call(addressYNGYaPu, addressI0f6eYH, uintd0sKJ2L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssRH5HXI = accounts[4]
		const LayerxxItisP = await Layerx.new(addresssRH5HXI, {from: accounts[0]});
		const addressSmGm5e3 = accounts[0]
		const uintBHDsqQy = BigInt("898")
		const uintRJXdLK = await LayerxxItisP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintiD8s9Ec = await LayerxxItisP.balanceOf.call(addressSmGm5e3, {from: accounts[4]});
		const uinto89GpHz = await LayerxxItisP.totalSupply.call({from: accounts[5]});
		const uintR2JfsMM = await LayerxxItisP.getStakesNum.call({from: accounts[3]});
		const uintgIwUVl7 = await LayerxxItisP.lock.call(uintBHDsqQy, {from: accounts[5]});
		await LayerxxItisP.addStakePayment.call({from: accounts[2]});

		assert.equal(uintR2JfsMM, BigInt("1"))
		assert.equal(uintRJXdLK, BigInt("40000000000000000000000"))
		assert.equal(uintiD8s9Ec, BigInt("0"))
		assert.equal(uinto89GpHz, BigInt("40000000000000000000000"))
		await expect(LayerxxItisP.lock.call(uintBHDsqQy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressH5UujR0 = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressH5UujR0, {from: accounts[0]});
		const uintTnwP0k5 = BigInt("1391")
		const addressNUDHa1M = accounts[2]
		const boolRbqrfCd = await LayerxL74tAYq.transfer.call(addressNUDHa1M, uintTnwP0k5, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});

		await expect(LayerxL74tAYq.transfer.call(addressNUDHa1M, uintTnwP0k5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXGbqlT8 = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressXGbqlT8, {from: accounts[0]});
		const uintv71rTIM = BigInt("882")
		const uintUGNYb42 = await LayerxL74tAYq.withdraw.call(uintv71rTIM, {from: accounts[2]});
		await LayerxL74tAYq.unlock.call({from: accounts[2]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});

		await expect(LayerxL74tAYq.withdraw.call(uintv71rTIM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressh6EbRdR = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressh6EbRdR, {from: accounts[0]});
		const addressQRU1Abh = accounts[4]
		const addressAEuPNYK = accounts[4]
		const uintBSlcqVF = await LayerxL74tAYq.balanceOf.call(addressQRU1Abh, {from: accounts[4]});
		const uintcmWb7zn = await LayerxL74tAYq.totalSupply.call({from: accounts[4]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[1]});
		await LayerxL74tAYq.f.call({from: accounts[3]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});
		const uintpMomZVB = await LayerxL74tAYq.balanceOf.call(addressAEuPNYK, {from: accounts[3]});

		assert.equal(uintBSlcqVF, BigInt("0"))
		assert.equal(uintcmWb7zn, BigInt("40000000000000000000000"))
		await expect(LayerxL74tAYq.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmnY7Hl = accounts[3]
		const LayerxHNoorOi = await Layerx.new(addressmnY7Hl, {from: accounts[5]});
		const addressMbCVJoo = accounts[5]
		const uintlKsF2CX = BigInt("1199")
		const uintNzG3ZB = await LayerxHNoorOi.balanceOf.call(addressMbCVJoo, {from: accounts[4]});
		const uint256BcRvIha = await LayerxHNoorOi.burn.call(uintlKsF2CX, {from: accounts[3]});
		await LayerxHNoorOi.addStakePayment.call({from: accounts[3]});

		assert.equal(uintNzG3ZB, BigInt("0"))
		await expect(LayerxHNoorOi.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressymkjasF = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressymkjasF, {from: accounts[0]});
		const uintCBbHzNm = BigInt("652")
		const address9WLjwl = accounts[1]
		const boolLJoPRxR = false
		const uintE5uN477 = BigInt("287")
		const uintmUPOMzi = BigInt("804")
		const addressZiuuWDt = accounts[0]
		const uintCw1hE3J = BigInt("1378")
		const boolJCvknr = await LayerxL74tAYq.approve.call(address9WLjwl, uintCBbHzNm, {from: "0x0000000000000000000000000000000000000001"});
		const boolgAd6muf = await LayerxL74tAYq.setIsPaused.call(boolLJoPRxR, {from: accounts[1]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[4]});
		const uintPnvdwTl = await LayerxL74tAYq.lock.call(uintE5uN477, {from: accounts[0]});
		const uintKFRMvp = await LayerxL74tAYq.totalSupply.call({from: accounts[0]});
		const uintSMFMQki = await LayerxL74tAYq.totalSupply.call({from: accounts[5]});
		const boolpCsGj2b = await LayerxL74tAYq.approve.call(addressZiuuWDt, uintmUPOMzi, {from: accounts[5]});
		const uintvMrKLAe = await LayerxL74tAYq.exist.call(uintCw1hE3J, {from: accounts[2]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[2]});
		await LayerxL74tAYq.addStakePayment.call({from: accounts[5]});

		assert.equal(boolJCvknr, true)
		await expect(LayerxL74tAYq.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszLS73RP = accounts[4]
		const Layerxx9LZAid = await Layerx.new(addresszLS73RP, {from: accounts[0]});
		const addressH12nvk5 = accounts[3]
		const uintQx44GaW = BigInt("243")
		const addressHgDakf = accounts[0]
		const addressmTRNqY = "0x0000000000000000000000000000000000000001"
		const addressSoJBB43 = accounts[2]
		const uintmTI8hNe = BigInt("745")
		const uintcHJW6y7 = BigInt("744")
		const addressmD1Zwrh = await Layerxx9LZAid.transferOwnership.call(addressH12nvk5, {from: accounts[4]});
		const boolHAl4914 = await Layerxx9LZAid.approve.call(addressHgDakf, uintQx44GaW, {from: accounts[3]});
		const uintAEjYqZ = await Layerxx9LZAid.allowance.call(addressSoJBB43, addressmTRNqY, {from: accounts[2]});
		const uint256e0niMc = await Layerxx9LZAid.burn.call(uintmTI8hNe, {from: accounts[1]});
		const uint256DuI8R7A = await Layerxx9LZAid.burn.call(uintcHJW6y7, {from: accounts[4]});
		await Layerxx9LZAid.addStakePayment.call({from: accounts[5]});

		assert.equal(boolHAl4914, true)
		assert.equal(uintAEjYqZ, BigInt("0"))
		await expect(Layerxx9LZAid.burn.call(uintmTI8hNe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressljO0uMb = accounts[1]
		const LayerxL74tAYq = await Layerx.new(addressljO0uMb, {from: accounts[0]});
		const uintmrpyq34 = BigInt("652")
		const addressvC8hzY = accounts[2]
		const uintZKj3gii = BigInt("0")
		const uintDmAfYZI = BigInt("472")
		const uintJrlTOdz = BigInt("1393")
		const boolJCvknr = await LayerxL74tAYq.approve.call(addressvC8hzY, uintmrpyq34, {from: "0x0000000000000000000000000000000000000001"});
		const uintpHPVBdW = await LayerxL74tAYq.lock.call(uintZKj3gii, {from: accounts[2]});
		await LayerxL74tAYq.paused.call({from: accounts[2]});
		const uintmy5L7GN = await LayerxL74tAYq.exist.call(uintDmAfYZI, {from: accounts[3]});
		const uintvMrKLAe = await LayerxL74tAYq.exist.call(uintJrlTOdz, {from: accounts[2]});

		assert.equal(boolJCvknr, true)
		await expect(LayerxL74tAYq.lock.call(uintZKj3gii, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})