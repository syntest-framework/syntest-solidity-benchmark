const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenSPCOt9U = await ThriftToken.new({from: accounts[3]});
		const uintpaBEJ71 = BigInt("1577")
		const addressos9V8RD = accounts[2]
		const uintHYkPjhC = BigInt("1870")
		const addressqSHaX33 = accounts[4]
		const uintj5rBvyH = BigInt("1512")
		const addressNRKFLL = accounts[5]
		const addressDqbzgio = accounts[0]
		const addressaXBsIFt = "0x0000000000000000000000000000000000000001"
		const uintUsYiSV6 = BigInt("556")
		const addresssKcJ2tG = accounts[4]
		const boolaoAeJ4H = await ThriftTokenSPCOt9U.increaseApproval.call(addressos9V8RD, uintpaBEJ71, {from: accounts[0]});
		const boolWxQyoJc = await ThriftTokenSPCOt9U.approve.call(addressqSHaX33, uintHYkPjhC, {from: accounts[1]});
//		const boolt346cji = await ThriftTokenSPCOt9U.transfer.call(addressNRKFLL, uintj5rBvyH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pXJhg0w = await ThriftTokenSPCOt9U.allowance.call(addressaXBsIFt, addressDqbzgio, {from: accounts[4]});
//		const boolU1XXIKx = await ThriftTokenSPCOt9U.transfer.call(addresssKcJ2tG, uintUsYiSV6, {from: accounts[3]});

		assert.equal(boolWxQyoJc, true)
		assert.equal(boolaoAeJ4H, true)
		await expect(ThriftTokenSPCOt9U.transfer.call(addressNRKFLL, uintj5rBvyH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenOvqWNZ = await ThriftToken.new({from: accounts[4]});
		const addressgZ2Prt = "0x0000000000000000000000000000000000000001"
		const uintMLEyOxu = BigInt("991")
		const addressDVizXP = accounts[3]
		const addressYk7gIDi = accounts[2]
		const uintm1NhbNi = BigInt("39")
		const addressv2WwRyV = accounts[2]
		const addressQC5vvqF = accounts[5]
		const uintVZrnpFO = BigInt("502")
		const addressuR5hMxv = accounts[0]
		const addressAgV4yak = "0x0000000000000000000000000000000000000001"
		const addressYt3sXN = accounts[0]
		const uint256S5YGyDV = await ThriftTokenOvqWNZ.balanceOf.call(addressgZ2Prt, {from: accounts[1]});
//		const boolAOKB7Rs = await ThriftTokenOvqWNZ.transferFrom.call(addressYk7gIDi, addressDVizXP, uintMLEyOxu, {from: accounts[3]});
//		const boolmkRDcum = await ThriftTokenOvqWNZ.increaseApproval.call(addressv2WwRyV, uintm1NhbNi, {from: accounts[5]});
//		const uint256LAh13fn = await ThriftTokenOvqWNZ.transferableTokens.call(addressQC5vvqF, {from: accounts[4]});
//		const boolB3HIf1k = await ThriftTokenOvqWNZ.transfer.call(addressuR5hMxv, uintVZrnpFO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256S1VAoSj = await ThriftTokenOvqWNZ.allowance.call(addressYt3sXN, addressAgV4yak, {from: accounts[1]});

		assert.equal(uint256S5YGyDV, BigInt("0"))
		await expect(ThriftTokenOvqWNZ.transferFrom.call(addressYk7gIDi, addressDVizXP, uintMLEyOxu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWjURHgQ = await ThriftToken.new({from: accounts[3]});
		const uintYvP84xG = BigInt("862")
		const addressaTTpQzt = accounts[0]
		const addressLUThzpD = accounts[1]
		const uintkYskULg = BigInt("2017")
		const addressBTfsMZ = accounts[2]
		const addressJ9MqBiK = accounts[5]
		const boolumpgV2P = await ThriftTokenWjURHgQ.decreaseApproval.call(addressaTTpQzt, uintYvP84xG, {from: accounts[4]});
		const uint256VgmfknW = await ThriftTokenWjURHgQ.balanceOf.call(addressLUThzpD, {from: accounts[4]});
//		const boollEfZumT = await ThriftTokenWjURHgQ.transferFrom.call(addressJ9MqBiK, addressBTfsMZ, uintkYskULg, {from: accounts[4]});

		assert.equal(boolumpgV2P, true)
		assert.equal(uint256VgmfknW, BigInt("0"))
		await expect(ThriftTokenWjURHgQ.transferFrom.call(addressJ9MqBiK, addressBTfsMZ, uintkYskULg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokencJkRBrC = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjT8u8a = "0x0000000000000000000000000000000000000001"
		const uintzWdBNGS = BigInt("1513")
		const addressX11c8de = accounts[3]
		const uintTovDF5v = BigInt("1257")
		const addressfmCBGX = accounts[0]
		const uintsmxx4xg = BigInt("102")
		const addressy04Ow6E = accounts[2]
		const addressCtZFBg7 = await ThriftTokencJkRBrC.transferOwnership.call(addressjT8u8a, {from: accounts[4]});
		const boolXe3Kqfy = await ThriftTokencJkRBrC.transfer.call(addressX11c8de, uintzWdBNGS, {from: accounts[2]});
		const boolBjBOTOe = await ThriftTokencJkRBrC.increaseApproval.call(addressfmCBGX, uintTovDF5v, {from: "0x0000000000000000000000000000000000000001"});
		const boolu6BCybX = await ThriftTokencJkRBrC.increaseApproval.call(addressy04Ow6E, uintsmxx4xg, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenHz03OI = await ThriftToken.new({from: accounts[2]});
		const addressClYYjhL = accounts[3]
		const uintaUbR3e = BigInt("1280")
		const addressVam7mmU = accounts[4]
		const addressg4jhcOx = accounts[3]
		const uintHRv42P4 = BigInt("741")
		const addressHwrd2s2 = "0x0000000000000000000000000000000000000001"
//		const addressoC6zdI9 = await ThriftTokenHz03OI.transferOwnership.call(addressClYYjhL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSDZv8xj = await ThriftTokenHz03OI.decreaseApproval.call(addressVam7mmU, uintaUbR3e, {from: accounts[2]});
//		const addressFmZc9HT = await ThriftTokenHz03OI.transferOwnership.call(addressg4jhcOx, {from: accounts[4]});
//		const boolLgDeuxg = await ThriftTokenHz03OI.transfer.call(addressHwrd2s2, uintHRv42P4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenHz03OI.transferOwnership.call(addressClYYjhL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWjURHgQ = await ThriftToken.new({from: accounts[3]});
		const uintjErvzOs = BigInt("862")
		const addresssTcB3hE = accounts[0]
		const addressoF4t6iQ = accounts[1]
		const addressTPG4e6U = accounts[3]
		const addressno6B8un = accounts[0]
		const uintRJjL7yD = BigInt("825")
		const addressR3gBkP = accounts[3]
		const uintO6QJxYK = BigInt("2017")
		const addressDAjuo1Y = accounts[2]
		const addressbqNYp5 = accounts[5]
		const boolumpgV2P = await ThriftTokenWjURHgQ.decreaseApproval.call(addresssTcB3hE, uintjErvzOs, {from: accounts[4]});
		const uint256VgmfknW = await ThriftTokenWjURHgQ.balanceOf.call(addressoF4t6iQ, {from: accounts[4]});
		const uint256daisnJe = await ThriftTokenWjURHgQ.allowance.call(addressno6B8un, addressTPG4e6U, {from: accounts[0]});
		const boolkzBAECg = await ThriftTokenWjURHgQ.decreaseApproval.call(addressR3gBkP, uintRJjL7yD, {from: accounts[4]});
//		const boollEfZumT = await ThriftTokenWjURHgQ.transferFrom.call(addressbqNYp5, addressDAjuo1Y, uintO6QJxYK, {from: accounts[4]});

		assert.equal(boolkzBAECg, true)
		assert.equal(boolumpgV2P, true)
		assert.equal(uint256VgmfknW, BigInt("0"))
		assert.equal(uint256daisnJe, BigInt("0"))
		await expect(ThriftTokenWjURHgQ.transferFrom.call(addressbqNYp5, addressDAjuo1Y, uintO6QJxYK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})