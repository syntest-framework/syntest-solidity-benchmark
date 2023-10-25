const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenpkuFYL = await ThriftToken.new({from: accounts[5]});
		const addresstfWv3wl = accounts[4]
		const addresscCSZrJe = accounts[3]
		const addressuZeciSa = "0x0000000000000000000000000000000000000001"
		const addressw2boS5f = accounts[5]
		const uintCEoB3Uj = BigInt("1181")
		const addresse9mMoAZ = "0x0000000000000000000000000000000000000001"
		const uintFjdpYAE = BigInt("1648")
		const addressJmJtxGv = accounts[4]
		const addresslXKUgNX = accounts[0]
		const uint256ggW3tnl = await ThriftTokenpkuFYL.allowance.call(addresscCSZrJe, addresstfWv3wl, {from: accounts[1]});
		const uint256Kk81gDg = await ThriftTokenpkuFYL.balanceOf.call(addressuZeciSa, {from: accounts[4]});
		const addressuLnHwUL = await ThriftTokenpkuFYL.transferOwnership.call(addressw2boS5f, {from: "0x0000000000000000000000000000000000000001"});
		const boolXySCuL = await ThriftTokenpkuFYL.approve.call(addresse9mMoAZ, uintCEoB3Uj, {from: accounts[0]});
		const booltDxhpv = await ThriftTokenpkuFYL.transferFrom.call(addresslXKUgNX, addressJmJtxGv, uintFjdpYAE, {from: accounts[3]});

		assert.equal(uint256Kk81gDg, BigInt("0"))
		assert.equal(uint256ggW3tnl, BigInt("0"))
		await expect(ThriftTokenpkuFYL.transferOwnership.call(addressw2boS5f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuFZZYpb = await ThriftToken.new({from: accounts[1]});
		const addressuano8JZ = accounts[1]
		const addressPBVWJKl = accounts[4]
		const addresswDdH2yG = accounts[2]
		const uintUM59Rl8 = BigInt("1839")
		const addressbVPoepI = accounts[0]
		const uintzH4PQDy = BigInt("111")
		const address1HbbXj = accounts[3]
		const addressWZqcJB8 = accounts[2]
		const uintgH7pSYy = BigInt("1138")
		const addressy6QmbzG = accounts[1]
		const uint256rYGc9BG = await ThriftTokenuFZZYpb.transferableTokens.call(addressuano8JZ, {from: accounts[1]});
		const addressMlkupN8 = await ThriftTokenuFZZYpb.transferOwnership.call(addressPBVWJKl, {from: accounts[3]});
		const uint256rOXFAh = await ThriftTokenuFZZYpb.balanceOf.call(addresswDdH2yG, {from: accounts[0]});
		const boolNo6D9H4 = await ThriftTokenuFZZYpb.transfer.call(addressbVPoepI, uintUM59Rl8, {from: accounts[0]});
		const boolX1uIj6 = await ThriftTokenuFZZYpb.transferFrom.call(addressWZqcJB8, address1HbbXj, uintzH4PQDy, {from: accounts[0]});
		const boolPk38Vv7 = await ThriftTokenuFZZYpb.decreaseApproval.call(addressy6QmbzG, uintgH7pSYy, {from: accounts[2]});

		assert.equal(uint256rYGc9BG, BigInt("0"))
		await expect(ThriftTokenuFZZYpb.transferOwnership.call(addressPBVWJKl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokendaPHgE = await ThriftToken.new({from: accounts[2]});
		const uintZnbCUE6 = BigInt("1439")
		const addressdACUucV = accounts[5]
		const addressAW3Z4GG = "0x0000000000000000000000000000000000000001"
		const uintuwWaroW = BigInt("1169")
		const addressY3RwRaZ = accounts[3]
		const addressmBU1gpn = accounts[0]
		const boolM7rmSqG = await ThriftTokendaPHgE.transferFrom.call(addressAW3Z4GG, addressdACUucV, uintZnbCUE6, {from: accounts[2]});
		const boolQg8oxK9 = await ThriftTokendaPHgE.approve.call(addressY3RwRaZ, uintuwWaroW, {from: accounts[1]});
		const uint256E8DCW6 = await ThriftTokendaPHgE.balanceOf.call(addressmBU1gpn, {from: accounts[5]});

		await expect(ThriftTokendaPHgE.transferFrom.call(addressAW3Z4GG, addressdACUucV, uintZnbCUE6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokentbJhxi = await ThriftToken.new({from: accounts[2]});
		const uintMEtxkt4 = BigInt("556")
		const addressNyGlnS = accounts[5]
		const addresssrk1Kjh = accounts[2]
		const uintRZPnRDz = BigInt("370")
		const addressFx34cuK = "0x0000000000000000000000000000000000000001"
		const uintt9D8xyq = BigInt("434")
		const addresswunMXB6 = "0x0000000000000000000000000000000000000001"
		const addressg2ThP2P = accounts[3]
		const boolSK7x5Kp = await ThriftTokentbJhxi.increaseApproval.call(addressNyGlnS, uintMEtxkt4, {from: accounts[4]});
		const uint256oNYTXCn = await ThriftTokentbJhxi.balanceOf.call(addresssrk1Kjh, {from: accounts[0]});
		const boolNlHJ61i = await ThriftTokentbJhxi.increaseApproval.call(addressFx34cuK, uintRZPnRDz, {from: accounts[4]});
		const boolcFaqU8F = await ThriftTokentbJhxi.transfer.call(addresswunMXB6, uintt9D8xyq, {from: accounts[2]});
		const addressq57KRwv = await ThriftTokentbJhxi.transferOwnership.call(addressg2ThP2P, {from: accounts[1]});

		assert.equal(boolNlHJ61i, true)
		assert.equal(boolSK7x5Kp, true)
		assert.equal(uint256oNYTXCn, BigInt("0"))
		await expect(ThriftTokentbJhxi.transfer.call(addresswunMXB6, uintt9D8xyq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenKZW8Tlr = await ThriftToken.new({from: accounts[5]});
		const addressqbGizca = accounts[4]
		const addressPv3mLVl = accounts[0]
		const addressEEYsI53 = accounts[4]
		const uint256kFsATx3 = await ThriftTokenKZW8Tlr.transferableTokens.call(addressqbGizca, {from: "0x0000000000000000000000000000000000000001"});
		const addressoZHJUsx = await ThriftTokenKZW8Tlr.transferOwnership.call(addressPv3mLVl, {from: accounts[5]});
		const uint2565G9ir9 = await ThriftTokenKZW8Tlr.balanceOf.call(addressEEYsI53, {from: accounts[0]});

		assert.equal(uint2565G9ir9, BigInt("0"))
		assert.equal(uint256kFsATx3, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWJMeU6i = await ThriftToken.new({from: accounts[2]});
		const addressmQN0T8h = accounts[3]
		const addressoNs6W3K = accounts[0]
		const addressCmKK8ix = accounts[0]
		const uintQWfa7LN = BigInt("1554")
		const addressVdBIztA = accounts[4]
		const uintpklFWQi = BigInt("809")
		const addressPzmNKCR = accounts[3]
		const uint256gy7vcjv = await ThriftTokenWJMeU6i.balanceOf.call(addressmQN0T8h, {from: "0x0000000000000000000000000000000000000001"});
		const addressOUeXbY = await ThriftTokenWJMeU6i.transferOwnership.call(addressoNs6W3K, {from: accounts[2]});
		const addresssvWpkjO = await ThriftTokenWJMeU6i.transferOwnership.call(addressCmKK8ix, {from: accounts[2]});
		const boollBdKu00 = await ThriftTokenWJMeU6i.increaseApproval.call(addressVdBIztA, uintQWfa7LN, {from: accounts[2]});
		const boolseRIl6 = await ThriftTokenWJMeU6i.approve.call(addressPzmNKCR, uintpklFWQi, {from: accounts[1]});

		assert.equal(boollBdKu00, true)
		assert.equal(boolseRIl6, true)
		assert.equal(uint256gy7vcjv, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokentbJhxi = await ThriftToken.new({from: accounts[2]});
		const uintItHNc3 = BigInt("556")
		const addressPhu9RC = accounts[5]
		const addressDIuLLvi = accounts[2]
		const uintmT86Nob = BigInt("377")
		const addressOpNoPKe = "0x0000000000000000000000000000000000000001"
		const uintqDtW6Gz = BigInt("732")
		const addressfFpUhSA = accounts[3]
		const uintymPMWLg = BigInt("434")
		const addressvQzrkaO = "0x0000000000000000000000000000000000000001"
		const uintfI0Vdgh = BigInt("18")
		const addressjxNdnwS = accounts[0]
		const addressmVTEiXA = "0x0000000000000000000000000000000000000001"
		const addressj2aC3Ao = accounts[3]
		const boolSK7x5Kp = await ThriftTokentbJhxi.increaseApproval.call(addressPhu9RC, uintItHNc3, {from: accounts[4]});
		const uint256oNYTXCn = await ThriftTokentbJhxi.balanceOf.call(addressDIuLLvi, {from: accounts[0]});
		const boolNlHJ61i = await ThriftTokentbJhxi.increaseApproval.call(addressOpNoPKe, uintmT86Nob, {from: accounts[4]});
		const boolqeRbH8t = await ThriftTokentbJhxi.decreaseApproval.call(addressfFpUhSA, uintqDtW6Gz, {from: accounts[3]});
		const boolcFaqU8F = await ThriftTokentbJhxi.transfer.call(addressvQzrkaO, uintymPMWLg, {from: accounts[2]});
		const boolrSMzNUj = await ThriftTokentbJhxi.transferFrom.call(addressmVTEiXA, addressjxNdnwS, uintfI0Vdgh, {from: accounts[2]});
		const addressq57KRwv = await ThriftTokentbJhxi.transferOwnership.call(addressj2aC3Ao, {from: accounts[1]});

		assert.equal(boolNlHJ61i, true)
		assert.equal(boolSK7x5Kp, true)
		assert.equal(uint256oNYTXCn, BigInt("0"))
		await expect(ThriftTokentbJhxi.decreaseApproval.call(addressfFpUhSA, uintqDtW6Gz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWJMeU6i = await ThriftToken.new({from: accounts[2]});
		const uintzk9vOF = BigInt("500")
		const addresskzTkXJQ = accounts[2]
		const uintcSK4ncd = BigInt("434")
		const addressu09A3l = "0x0000000000000000000000000000000000000001"
		const addressYcFKsXg = accounts[3]
		const addressEdW2XSd = accounts[1]
		const uintJrnci2X = BigInt("1554")
		const address3nDD7d = accounts[4]
		const uintqaDCvMi = BigInt("809")
		const addressBp6BJx9 = accounts[3]
		const booldwRFNz = await ThriftTokenWJMeU6i.approve.call(addresskzTkXJQ, uintzk9vOF, {from: accounts[1]});
		const boolx3pOxCS = await ThriftTokenWJMeU6i.decreaseApproval.call(addressu09A3l, uintcSK4ncd, {from: accounts[1]});
		const uint256gy7vcjv = await ThriftTokenWJMeU6i.balanceOf.call(addressYcFKsXg, {from: "0x0000000000000000000000000000000000000001"});
		const addressOUeXbY = await ThriftTokenWJMeU6i.transferOwnership.call(addressEdW2XSd, {from: accounts[2]});
		const boollBdKu00 = await ThriftTokenWJMeU6i.increaseApproval.call(address3nDD7d, uintJrnci2X, {from: accounts[2]});
		const boolseRIl6 = await ThriftTokenWJMeU6i.approve.call(addressBp6BJx9, uintqaDCvMi, {from: accounts[1]});

		assert.equal(booldwRFNz, true)
		assert.equal(boollBdKu00, true)
		assert.equal(boolseRIl6, true)
		assert.equal(boolx3pOxCS, true)
		assert.equal(uint256gy7vcjv, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokennYlbnZn = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNoNxtIf = BigInt("454")
		const addresss6lgZ4C = accounts[1]
		const uintYiCbmRr = BigInt("1839")
		const addresszAhBayh = accounts[1]
		const addressOz7qZF2 = "0x0000000000000000000000000000000000000001"
		const uintk9aERYe = BigInt("939")
		const addresskYKXSrH = accounts[3]
		const uintFkVq4A7 = BigInt("1756")
		const addresstn8eYZY = accounts[5]
		const boolEWKugXk = await ThriftTokennYlbnZn.increaseApproval.call(addresss6lgZ4C, uintNoNxtIf, {from: accounts[5]});
		const boolrvlwH46 = await ThriftTokennYlbnZn.decreaseApproval.call(addresszAhBayh, uintYiCbmRr, {from: accounts[4]});
		const uint256NsKvqYR = await ThriftTokennYlbnZn.transferableTokens.call(addressOz7qZF2, {from: accounts[5]});
		const boolUuD3dvo = await ThriftTokennYlbnZn.decreaseApproval.call(addresskYKXSrH, uintk9aERYe, {from: accounts[3]});
		const booluNCXLaY = await ThriftTokennYlbnZn.approve.call(addresstn8eYZY, uintFkVq4A7, {from: accounts[4]});
	});
})