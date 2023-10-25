const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addresssNm7Gvy = accounts[0]
		const FompUyoQAeT = await Fomp.new(addresssNm7Gvy, {from: accounts[0]});
		const addressU5rqe7p = accounts[4]
		const uintBYyohP = BigInt("1703")
		const addressPixSbXT = accounts[2]
		const uintXrJBMC3 = BigInt("586")
		const addressWTkgpVy = accounts[4]
		const addressG0QcAoo = accounts[3]
		const uintzTWu5iA = await FompUyoQAeT.balanceOf.call(addressU5rqe7p, {from: accounts[3]});
		const boolUga8hmZ = await FompUyoQAeT.transfer.call(addressPixSbXT, uintBYyohP, {from: accounts[1]});
		const boolZCTsDNs = await FompUyoQAeT.approve.call(addressWTkgpVy, uintXrJBMC3, {from: accounts[0]});
		const uintDinxI8y = await FompUyoQAeT.balanceOf.call(addressG0QcAoo, {from: accounts[4]});

		assert.equal(uintzTWu5iA, BigInt("0"))
		await expect(FompUyoQAeT.transfer.call(addressPixSbXT, uintBYyohP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressTqXF4nt = accounts[2]
		const FompcOQrRFN = await Fomp.new(addressTqXF4nt, {from: accounts[0]});
		const addressp1UlPNO = accounts[4]
		const addressxFm7DaB = accounts[3]
		const addressXr8ZDFu = accounts[3]
		const addressrJHBqiP = await FompcOQrRFN.delegate.call(addressp1UlPNO, {from: "0x0000000000000000000000000000000000000001"});
		const uintezlfS1X = await FompcOQrRFN.balanceOf.call(addressxFm7DaB, {from: accounts[0]});
		const addressCDGPzJ3 = await FompcOQrRFN.delegate.call(addressXr8ZDFu, {from: accounts[0]});

		assert.equal(uintezlfS1X, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressXakRhl = accounts[4]
		const FompXAiJN0Q = await Fomp.new(addressXakRhl, {from: accounts[5]});
		const uintQUoPJi4 = BigInt("1715")
		const addressGEOXDgd = "0x0000000000000000000000000000000000000001"
		const addressgP5mDZO = accounts[5]
		const boolKo4hT5Z = await FompXAiJN0Q.approve.call(addressGEOXDgd, uintQUoPJi4, {from: "0x0000000000000000000000000000000000000001"});
		const addresse7wcluj = await FompXAiJN0Q.delegate.call(addressgP5mDZO, {from: accounts[3]});

		assert.equal(boolKo4hT5Z, true)
	});

	it('test for Fomp', async () => {
		const addressUv751QY = accounts[4]
		const FompkdjlDBv = await Fomp.new(addressUv751QY, {from: accounts[4]});
		const addressrzMAfQA = accounts[2]
		const addressnzTITVa = accounts[4]
		const addresss9xE61w = accounts[4]
		const addressNuVKKEe = accounts[3]
		const addresszo9P0Wq = await FompkdjlDBv.delegate.call(addressrzMAfQA, {from: accounts[5]});
		const uint96V2pYTx = await FompkdjlDBv.getCurrentVotes.call(addressnzTITVa, {from: accounts[1]});
		const addressFJlWRMk = await FompkdjlDBv.delegate.call(addresss9xE61w, {from: accounts[2]});
		const addressRJJdqF = await FompkdjlDBv.delegate.call(addressNuVKKEe, {from: accounts[1]});

		assert.equal(uint96V2pYTx, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const address7uOuIs = accounts[3]
		const FompIb0YbBO = await Fomp.new(address7uOuIs, {from: accounts[3]});
		const addressURnJJsA = accounts[5]
		const addressLfElHVp = accounts[3]
		const addressLLywqu = accounts[4]
		const uint96G0QVcjV = await FompIb0YbBO.getCurrentVotes.call(addressURnJJsA, {from: accounts[0]});
		const addressnIMFt5D = await FompIb0YbBO.delegate.call(addressLfElHVp, {from: accounts[3]});
		const addressQwgGVy2 = await FompIb0YbBO.delegate.call(addressLLywqu, {from: accounts[4]});

		assert.equal(uint96G0QVcjV, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressfdgB03t = accounts[5]
		const FompytbgY1o = await Fomp.new(addressfdgB03t, {from: accounts[4]});
		const addressnZB7cDU = accounts[2]
		const addressJxi0V0e = accounts[3]
		const addressn0XnUbS = accounts[1]
		const uintlbwUDic = BigInt("1977")
		const addressGmNiHiG = accounts[1]
		const addressJC0TUn = accounts[1]
		const uintpB2WR6w = BigInt("1452")
		const address4INsNA = accounts[4]
		const uint96HIGGokM = await FompytbgY1o.getCurrentVotes.call(addressnZB7cDU, {from: accounts[4]});
		const uintzQoJmPG = await FompytbgY1o.allowance.call(addressn0XnUbS, addressJxi0V0e, {from: accounts[5]});
		const boolbYoTDS = await FompytbgY1o.transferFrom.call(addressJC0TUn, addressGmNiHiG, uintlbwUDic, {from: accounts[4]});
		const uint96qLXWWFB = await FompytbgY1o.getPriorVotes.call(address4INsNA, uintpB2WR6w, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96HIGGokM, BigInt("0"))
		assert.equal(uintzQoJmPG, BigInt("0"))
		await expect(FompytbgY1o.transferFrom.call(addressJC0TUn, addressGmNiHiG, uintlbwUDic, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressyl2YQsO = accounts[3]
		const FompvSx0gbP = await Fomp.new(addressyl2YQsO, {from: accounts[5]});
		const addresstFgjIKx = accounts[0]
		const addressqKVeaSz = accounts[1]
		const addressE3X0xe9 = accounts[3]
		const addressQmx1nes = accounts[2]
		const uintBuKUj6 = BigInt("328")
		const addressIyHgoPu = accounts[4]
		const uintTsZxoHK = await FompvSx0gbP.allowance.call(addressqKVeaSz, addresstFgjIKx, {from: accounts[2]});
		const uintU4J5nGv = await FompvSx0gbP.allowance.call(addressQmx1nes, addressE3X0xe9, {from: accounts[0]});
		const uint96KgfKcgj = await FompvSx0gbP.getPriorVotes.call(addressIyHgoPu, uintBuKUj6, {from: accounts[4]});

		assert.equal(uint96KgfKcgj, BigInt("0"))
		assert.equal(uintTsZxoHK, BigInt("0"))
		assert.equal(uintU4J5nGv, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressUuoX3uk = accounts[3]
		const FompvSx0gbP = await Fomp.new(addressUuoX3uk, {from: accounts[5]});
		const addressdxpLp7i = accounts[0]
		const addressd81SV7 = accounts[1]
		const byteC5GavNz = "0x1c1b1c1502151e03101a0e200b0a1a1c080b0b1d1f0105190517080e0e01071f"
		const byteNE1grQR = "0x1c1b100e1702101c0a0c180420001005051f1f07190f090710171f01191e190a"
		const uintruJfrrW = BigInt("80")
		const uintubsjkng = BigInt("86")
		const uintvtKbvFX = BigInt("947")
		const addresskweLdOf = accounts[1]
		const addressIg0i4R6 = accounts[4]
		const addressPJptuHM = accounts[2]
		const addressWn19Dw8 = "0x0000000000000000000000000000000000000001"
		const uintnAVWgHu = BigInt("328")
		const addressmpPrIOs = accounts[4]
		const uintTsZxoHK = await FompvSx0gbP.allowance.call(addressd81SV7, addressdxpLp7i, {from: accounts[2]});
		const addresscdOZKSJ = await FompvSx0gbP.delegateBySig.call(addresskweLdOf, uintvtKbvFX, uintubsjkng, uintruJfrrW, byteNE1grQR, byteC5GavNz, {from: accounts[0]});
		const uintU4J5nGv = await FompvSx0gbP.allowance.call(addressPJptuHM, addressIg0i4R6, {from: accounts[0]});
		const addressSeBCEO = await FompvSx0gbP.delegate.call(addressWn19Dw8, {from: accounts[2]});
		const uint96KgfKcgj = await FompvSx0gbP.getPriorVotes.call(addressmpPrIOs, uintnAVWgHu, {from: accounts[4]});

		assert.equal(uintTsZxoHK, BigInt("0"))
		await expect(FompvSx0gbP.delegateBySig.call(addresskweLdOf, uintvtKbvFX, uintubsjkng, uintruJfrrW, byteNE1grQR, byteC5GavNz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresskZpPywc = "0x0000000000000000000000000000000000000001"
		const FompxmqoR3R = await Fomp.new(addresskZpPywc, {from: "0x0000000000000000000000000000000000000001"});
		const addressDPqMNj1 = "0x0000000000000000000000000000000000000001"
		const bytesEaZeE = "0x1e121f130704060f0f0e1f0c0f13141e150b040f11170e020302110a021b1a0e"
		const byteh47hh4 = "0x0e04161f1f1e08090b1f130b10041e071b12160914130f151d09060113151911"
		const uintuBBqyTV = BigInt("98")
		const uinte1mnGqM = BigInt("705")
		const uinteRby7OI = BigInt("756")
		const addressICuyorI = accounts[2]
		const uintPeIRRDA = BigInt("338")
		const addressqrtwpt6 = accounts[4]
		const uintLYhjiqP = await FompxmqoR3R.balanceOf.call(addressDPqMNj1, {from: accounts[5]});
		const addressTtWGDy = await FompxmqoR3R.delegateBySig.call(addressICuyorI, uinteRby7OI, uinte1mnGqM, uintuBBqyTV, byteh47hh4, bytesEaZeE, {from: accounts[0]});
		const bool3mexd4 = await FompxmqoR3R.approve.call(addressqrtwpt6, uintPeIRRDA, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addresspQZT3FT = accounts[3]
		const FompIb0YbBO = await Fomp.new(addresspQZT3FT, {from: accounts[3]});
		const uinteS4g10Q = BigInt("23")
		const addressv5pj6th = accounts[0]
		const addressKj6dcn8 = accounts[4]
		const uint96xz7VwPk = await FompIb0YbBO.getPriorVotes.call(addressv5pj6th, uinteS4g10Q, {from: accounts[4]});
		const addressnIMFt5D = await FompIb0YbBO.delegate.call(addressKj6dcn8, {from: accounts[3]});

		assert.equal(uint96xz7VwPk, BigInt("0"))
	});
})