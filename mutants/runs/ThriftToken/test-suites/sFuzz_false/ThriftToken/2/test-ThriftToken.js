const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenPLPa47H = await ThriftToken.new({from: accounts[4]});
		const addressQaLx2xx = accounts[3]
		const addressj6PTUP9 = accounts[0]
		const addressPXmqoBy = accounts[1]
		const addressE7R9D87 = accounts[1]
		const uintBFqnFj8 = BigInt("730")
		const addressiOXuiLx = accounts[1]
		const addressdipL2Ip = accounts[0]
		const uint256V6O5Dby = await ThriftTokenPLPa47H.allowance.call(addressj6PTUP9, addressQaLx2xx, {from: accounts[1]});
		const uint256NmbCQNt = await ThriftTokenPLPa47H.allowance.call(addressE7R9D87, addressPXmqoBy, {from: accounts[1]});
		const boolaBJ5i6a = await ThriftTokenPLPa47H.transferFrom.call(addressdipL2Ip, addressiOXuiLx, uintBFqnFj8, {from: accounts[3]});

		assert.equal(uint256NmbCQNt, BigInt("0"))
		assert.equal(uint256V6O5Dby, BigInt("0"))
		await expect(ThriftTokenPLPa47H.transferFrom.call(addressdipL2Ip, addressiOXuiLx, uintBFqnFj8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenGCR6stB = await ThriftToken.new({from: accounts[0]});
		const uintQgAR1en = BigInt("141")
		const addressmMyzqaO = accounts[2]
		const uint6NBniJ = BigInt("930")
		const addressuChalK = accounts[4]
		const addressRhEZrQP = accounts[2]
		const uintLA8z99X = BigInt("798")
		const addressUr3qc2F = accounts[0]
		const addressXDXkarH = accounts[1]
		const addressR9wnjd7 = accounts[0]
		const uintClRRwpI = BigInt("1408")
		const addresslbXDDJA = accounts[3]
		const boolC3OrQgP = await ThriftTokenGCR6stB.decreaseApproval.call(addressmMyzqaO, uintQgAR1en, {from: accounts[4]});
		const boolzekiv4b = await ThriftTokenGCR6stB.transferFrom.call(addressRhEZrQP, addressuChalK, uint6NBniJ, {from: accounts[4]});
		const boolEDrqUAe = await ThriftTokenGCR6stB.transfer.call(addressUr3qc2F, uintLA8z99X, {from: accounts[0]});
		const uint256sF2ilYY = await ThriftTokenGCR6stB.allowance.call(addressR9wnjd7, addressXDXkarH, {from: accounts[1]});
		const boolvO44wj2 = await ThriftTokenGCR6stB.transfer.call(addresslbXDDJA, uintClRRwpI, {from: accounts[1]});

		assert.equal(boolC3OrQgP, true)
		await expect(ThriftTokenGCR6stB.transferFrom.call(addressRhEZrQP, addressuChalK, uint6NBniJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenIkknwf = await ThriftToken.new({from: accounts[2]});
		const uintTKQU4Vz = BigInt("201")
		const addressc35S6cZ = accounts[3]
		const uintFZYssKt = BigInt("609")
		const addresssh8FRxU = accounts[1]
		const addresseq7JfOn = accounts[0]
		const uintW1iH5C = BigInt("870")
		const addressyAGxb3 = "0x0000000000000000000000000000000000000001"
		const addressAtADe3P = accounts[1]
		const addressPAoitoR = accounts[1]
		const uintYD2Tz0m = BigInt("1382")
		const addressqG9yyke = accounts[0]
		const uintemNmMY2 = BigInt("332")
		const addressk5jKqLD = accounts[3]
		const booldpqjyyE = await ThriftTokenIkknwf.transfer.call(addressc35S6cZ, uintTKQU4Vz, {from: accounts[5]});
		const boolZvf2w8F = await ThriftTokenIkknwf.transferFrom.call(addresseq7JfOn, addresssh8FRxU, uintFZYssKt, {from: accounts[0]});
		const boolqEGTxBq = await ThriftTokenIkknwf.transferFrom.call(addressAtADe3P, addressyAGxb3, uintW1iH5C, {from: accounts[4]});
		const addressr7F5j5h = await ThriftTokenIkknwf.transferOwnership.call(addressPAoitoR, {from: accounts[0]});
		const booleVI4LEI = await ThriftTokenIkknwf.increaseApproval.call(addressqG9yyke, uintYD2Tz0m, {from: accounts[1]});
		const boolvph02AN = await ThriftTokenIkknwf.decreaseApproval.call(addressk5jKqLD, uintemNmMY2, {from: accounts[5]});

		await expect(ThriftTokenIkknwf.transfer.call(addressc35S6cZ, uintTKQU4Vz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzySZ8g = await ThriftToken.new({from: accounts[2]});
		const uintq0jx4aj = BigInt("740")
		const addressnXGVUnR = "0x0000000000000000000000000000000000000001"
		const addressHMN3JB = accounts[0]
		const addressMraEzL9 = accounts[2]
		const boolnhiuDId = await ThriftTokenzySZ8g.increaseApproval.call(addressnXGVUnR, uintq0jx4aj, {from: accounts[1]});
		const uint256SQECzBj = await ThriftTokenzySZ8g.allowance.call(addressMraEzL9, addressHMN3JB, {from: accounts[4]});

		assert.equal(boolnhiuDId, true)
		assert.equal(uint256SQECzBj, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokentvOaNOd = await ThriftToken.new({from: accounts[4]});
		const uintliu7H3 = BigInt("267")
		const addressDHQSBGM = accounts[3]
		const addressuNrxRhI = "0x0000000000000000000000000000000000000001"
		const uintY0MyVjr = BigInt("310")
		const addresseG1Ddq4 = accounts[2]
		const addressQULElNd = accounts[2]
		const booltQbDtv = await ThriftTokentvOaNOd.approve.call(addressDHQSBGM, uintliu7H3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hbDHzEg = await ThriftTokentvOaNOd.balanceOf.call(addressuNrxRhI, {from: accounts[0]});
		const boolJcK3ctg = await ThriftTokentvOaNOd.decreaseApproval.call(addresseG1Ddq4, uintY0MyVjr, {from: accounts[3]});
		const uint256hZrpT6h = await ThriftTokentvOaNOd.balanceOf.call(addressQULElNd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJcK3ctg, true)
		assert.equal(booltQbDtv, true)
		assert.equal(uint256hZrpT6h, BigInt("0"))
		assert.equal(uint256hbDHzEg, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzySZ8g = await ThriftToken.new({from: accounts[2]});
		const uint543Xfd = BigInt("740")
		const addressUfdzLvp = "0x0000000000000000000000000000000000000001"
		const addresssAheQBZ = accounts[4]
		const addresso20pwp = accounts[0]
		const addressaNo25Es = accounts[2]
		const boolnhiuDId = await ThriftTokenzySZ8g.increaseApproval.call(addressUfdzLvp, uint543Xfd, {from: accounts[1]});
		const addressAduUKb = await ThriftTokenzySZ8g.transferOwnership.call(addresssAheQBZ, {from: accounts[4]});
		const uint256SQECzBj = await ThriftTokenzySZ8g.allowance.call(addressaNo25Es, addresso20pwp, {from: accounts[4]});

		assert.equal(boolnhiuDId, true)
		await expect(ThriftTokenzySZ8g.transferOwnership.call(addresssAheQBZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenYavPhZD = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqlybAqf = accounts[3]
		const uintsBxSSfF = BigInt("999")
		const addressM9BQnJ1 = accounts[4]
		const addresskRjR5in = accounts[4]
		const uintuAxP9Qi = BigInt("1174")
		const addresswhhs9p = "0x0000000000000000000000000000000000000001"
		const uintTP56TCh = BigInt("1277")
		const addressFfKKpTT = accounts[3]
		const uintIVjnd7U = BigInt("1625")
		const addressLmlW7gR = accounts[4]
		const addressOare3C1 = await ThriftTokenYavPhZD.transferOwnership.call(addressqlybAqf, {from: accounts[4]});
		const boolX0Rs9S = await ThriftTokenYavPhZD.transferFrom.call(addresskRjR5in, addressM9BQnJ1, uintsBxSSfF, {from: accounts[3]});
		const boolT4ooKdF = await ThriftTokenYavPhZD.approve.call(addresswhhs9p, uintuAxP9Qi, {from: accounts[2]});
		const boolDfKnJgp = await ThriftTokenYavPhZD.approve.call(addressFfKKpTT, uintTP56TCh, {from: accounts[3]});
		const boolpkl5Vyd = await ThriftTokenYavPhZD.approve.call(addressLmlW7gR, uintIVjnd7U, {from: accounts[2]});
	});
})