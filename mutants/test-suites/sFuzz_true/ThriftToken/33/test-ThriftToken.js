const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenTT5r9KP = await ThriftToken.new({from: accounts[0]});
		const uintTR0EFf8 = BigInt("328")
		const addressF84Xe5T = accounts[3]
		const uintXV0xABz = BigInt("542")
		const addressKgwWTzQ = accounts[1]
		const uintdQonNQT = BigInt("889")
		const addressB9psqCg = accounts[1]
		const addressIjhga2x = accounts[3]
		const uintrrqEcHo = BigInt("2022")
		const addresswVlfDkG = "0x0000000000000000000000000000000000000001"
		const boolf5u0a7k = await ThriftTokenTT5r9KP.decreaseApproval.call(addressF84Xe5T, uintTR0EFf8, {from: accounts[2]});
		const boolykedKVK = await ThriftTokenTT5r9KP.increaseApproval.call(addressKgwWTzQ, uintXV0xABz, {from: accounts[4]});
//		const boolIEvSeV = await ThriftTokenTT5r9KP.transfer.call(addressB9psqCg, uintdQonNQT, {from: accounts[3]});
//		const uint256Ndr7JK = await ThriftTokenTT5r9KP.balanceOf.call(addressIjhga2x, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMcNVGq = await ThriftTokenTT5r9KP.increaseApproval.call(addresswVlfDkG, uintrrqEcHo, {from: accounts[0]});

		assert.equal(boolf5u0a7k, true)
		assert.equal(boolykedKVK, true)
		await expect(ThriftTokenTT5r9KP.transfer.call(addressB9psqCg, uintdQonNQT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokensJHxacx = await ThriftToken.new({from: accounts[4]});
		const uintkedOxML = BigInt("1524")
		const addressXA5NlPc = accounts[0]
		const uintT0S2t30 = BigInt("1444")
		const addressx7UTe7V = accounts[3]
		const boolXyCRM2X = await ThriftTokensJHxacx.approve.call(addressXA5NlPc, uintkedOxML, {from: accounts[3]});
		const boolICKK4Y = await ThriftTokensJHxacx.increaseApproval.call(addressx7UTe7V, uintT0S2t30, {from: accounts[0]});

		assert.equal(boolICKK4Y, true)
		assert.equal(boolXyCRM2X, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenY6T46xR = await ThriftToken.new({from: accounts[5]});
		const addressGexs2CB = accounts[3]
		const addressgyVLtwY = accounts[3]
		const uintvwKCAfO = BigInt("70")
		const addressAcEU4Gx = accounts[4]
		const addressdpQGOQZ = accounts[5]
		const uintEbq1Ncr = BigInt("91")
		const addressEXRQlq4 = accounts[3]
		const addressNwvXcZq = accounts[3]
//		const addressO7MYQxS = await ThriftTokenY6T46xR.transferOwnership.call(addressGexs2CB, {from: accounts[4]});
//		const addresswN0D9d = await ThriftTokenY6T46xR.transferOwnership.call(addressgyVLtwY, {from: accounts[4]});
//		const boolEDiuTpb = await ThriftTokenY6T46xR.decreaseApproval.call(addressAcEU4Gx, uintvwKCAfO, {from: accounts[4]});
//		const uint256iwxngy = await ThriftTokenY6T46xR.transferableTokens.call(addressdpQGOQZ, {from: accounts[2]});
//		const boolNXyttgl = await ThriftTokenY6T46xR.transferFrom.call(addressNwvXcZq, addressEXRQlq4, uintEbq1Ncr, {from: accounts[5]});

		await expect(ThriftTokenY6T46xR.transferOwnership.call(addressGexs2CB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenUWj7Xda = await ThriftToken.new({from: accounts[0]});
		const uinttUpsgCn = BigInt("11")
		const addressTpWXoc1 = accounts[5]
		const addressdvlBsp5 = accounts[5]
		const uint6bN8VD = BigInt("855")
		const addressnaK51AP = accounts[4]
		const addressgsZHgoD = "0x0000000000000000000000000000000000000001"
		const uintFNR7dIy = BigInt("1784")
		const addressy4q6rYA = accounts[5]
		const boolNRHOxzW = await ThriftTokenUWj7Xda.decreaseApproval.call(addressTpWXoc1, uinttUpsgCn, {from: accounts[2]});
		const uint256BVR7ANW = await ThriftTokenUWj7Xda.transferableTokens.call(addressdvlBsp5, {from: accounts[4]});
//		const boolyznP16c = await ThriftTokenUWj7Xda.transferFrom.call(addressgsZHgoD, addressnaK51AP, uint6bN8VD, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7dLTtW = await ThriftTokenUWj7Xda.increaseApproval.call(addressy4q6rYA, uintFNR7dIy, {from: accounts[0]});

		assert.equal(boolNRHOxzW, true)
		assert.equal(uint256BVR7ANW, BigInt("0"))
		await expect(ThriftTokenUWj7Xda.transferFrom.call(addressgsZHgoD, addressnaK51AP, uint6bN8VD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenw7cN6G = await ThriftToken.new({from: accounts[2]});
		const addressBaQScBQ = "0x0000000000000000000000000000000000000001"
		const addressrVQAMmw = accounts[1]
		const addressUK4kETu = accounts[1]
		const uintPHTW8DQ = BigInt("1744")
		const addressC3zbG2w = accounts[1]
		const uint4urIln = BigInt("17")
		const addressMJ0aOlT = accounts[1]
		const uintJe3KP55 = BigInt("544")
		const addressbHhujn1 = accounts[1]
		const uint256ef5klBJ = await ThriftTokenw7cN6G.allowance.call(addressrVQAMmw, addressBaQScBQ, {from: accounts[5]});
//		const addresshxIyMTD = await ThriftTokenw7cN6G.transferOwnership.call(addressUK4kETu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvxHJTOI = await ThriftTokenw7cN6G.transfer.call(addressC3zbG2w, uintPHTW8DQ, {from: accounts[0]});
//		const boolibud9qb = await ThriftTokenw7cN6G.transfer.call(addressMJ0aOlT, uint4urIln, {from: accounts[2]});
//		const boolq0YAtTW = await ThriftTokenw7cN6G.transfer.call(addressbHhujn1, uintJe3KP55, {from: accounts[3]});

		assert.equal(uint256ef5klBJ, BigInt("0"))
		await expect(ThriftTokenw7cN6G.transferOwnership.call(addressUK4kETu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenw7cN6G = await ThriftToken.new({from: accounts[2]});
		const addressBPj2ybR = accounts[1]
		const addresswskd3Yi = accounts[0]
		const address2hIbvO = await ThriftTokenw7cN6G.transferOwnership.call(addressBPj2ybR, {from: accounts[2]});
//		const addresshxIyMTD = await ThriftTokenw7cN6G.transferOwnership.call(addresswskd3Yi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenw7cN6G.transferOwnership.call(addresswskd3Yi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenc5Jppki = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTfErs9O = accounts[0]
		const uintBsgzRQG = BigInt("1789")
		const addressw0CNSL4 = accounts[4]
		const addresss9V6p9k = accounts[5]
		const addressVsCbHFp = accounts[4]
		const uintk9d8ub8 = BigInt("727")
		const addressiGtgcJ2 = accounts[2]
		const addressiVaOc2D = await ThriftTokenc5Jppki.transferOwnership.call(addressTfErs9O, {from: accounts[1]});
		const booljO9pnyf = await ThriftTokenc5Jppki.transferFrom.call(addresss9V6p9k, addressw0CNSL4, uintBsgzRQG, {from: accounts[3]});
		const addressdGws7rM = await ThriftTokenc5Jppki.transferOwnership.call(addressVsCbHFp, {from: accounts[3]});
		const boolJDX74Zj = await ThriftTokenc5Jppki.increaseApproval.call(addressiGtgcJ2, uintk9d8ub8, {from: accounts[2]});
	});
})