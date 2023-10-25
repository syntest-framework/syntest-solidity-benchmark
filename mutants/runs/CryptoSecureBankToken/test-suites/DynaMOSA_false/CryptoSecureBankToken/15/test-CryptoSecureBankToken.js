const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRTr0eij = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUYwcyMG = accounts[2]
		const uinti1KqoVT = BigInt("1472")
		const addressqlfwwut = "0x0000000000000000000000000000000000000001"
		const uintnURtWX3 = BigInt("628")
		const addressZAfVUdY = accounts[1]
		const uintmvgVxOU = await CryptoSecureBankTokenRTr0eij.totalSupply.call({from: accounts[5]});
		const addressQUXPIHT = await CryptoSecureBankTokenRTr0eij.transferOwnership.call(addressUYwcyMG, {from: accounts[0]});
		const boolYOF8z6H = await CryptoSecureBankTokenRTr0eij.transfer.call(addressqlfwwut, uinti1KqoVT, {from: accounts[4]});
		const uintq5hLA0M = await CryptoSecureBankTokenRTr0eij.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenRTr0eij.whenNotPaused.call({from: accounts[3]});
		const boolfQ58Snz = await CryptoSecureBankTokenRTr0eij.transfer.call(addressZAfVUdY, uintnURtWX3, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressXAGtlpR = accounts[3]
		const addressz9h8BjL = accounts[0]
		const addressIpbc4Vb = accounts[1]
		const addresse0NTZVa = accounts[1]
		await CryptoSecureBankTokenBGJkX9B.whenNotPaused.call({from: accounts[1]});
		const uintuX91To8 = await CryptoSecureBankTokenBGJkX9B.allowance.call(addressz9h8BjL, addressXAGtlpR, {from: accounts[0]});
		const uintWpXdm9Y = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressIpbc4Vb, {from: accounts[2]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addresse0NTZVa, {from: accounts[5]});

		await expect(CryptoSecureBankTokenBGJkX9B.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZdV5aOB = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressrGenXoL = accounts[0]
		const uintYTA8VGI = BigInt("339")
		const addressipk1eH9 = accounts[1]
		await CryptoSecureBankTokenZdV5aOB.unpause.call({from: accounts[0]});
		await CryptoSecureBankTokenZdV5aOB.whenNotPaused.call({from: accounts[3]});
		const uintoEP9RU = await CryptoSecureBankTokenZdV5aOB.totalSupply.call({from: accounts[1]});
		const boolgrBbPtf = await CryptoSecureBankTokenZdV5aOB.deprecate.call(addressrGenXoL, {from: accounts[3]});
		const boolfgGfxPZ = await CryptoSecureBankTokenZdV5aOB.approve.call(addressipk1eH9, uintYTA8VGI, {from: accounts[1]});
		await CryptoSecureBankTokenZdV5aOB.whenNotPaused.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenZdV5aOB.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend5PWfI6 = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressE7x04tm = accounts[3]
		const addressZYDEli6 = accounts[3]
		const addressCjjvRm = await CryptoSecureBankTokend5PWfI6.removeBlackList.call(addressE7x04tm, {from: accounts[0]});
		const boolR1FDaDw = await CryptoSecureBankTokend5PWfI6.getBlackListStatus.call(addressZYDEli6, {from: accounts[3]});
		await CryptoSecureBankTokend5PWfI6.pause.call({from: accounts[3]});
		await CryptoSecureBankTokend5PWfI6.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolR1FDaDw, false)
		await expect(CryptoSecureBankTokend5PWfI6.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressbJAXZSn = accounts[3]
		const addresssZOjXKk = accounts[0]
		const addresskfqZT9 = accounts[1]
		const addressX347hfp = accounts[1]
		const uintuX91To8 = await CryptoSecureBankTokenBGJkX9B.allowance.call(addresssZOjXKk, addressbJAXZSn, {from: accounts[0]});
		const uintWpXdm9Y = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addresskfqZT9, {from: accounts[2]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressX347hfp, {from: accounts[5]});

		assert.equal(uintFGRNI2A, BigInt("0"))
		assert.equal(uintWpXdm9Y, BigInt("0"))
		assert.equal(uintuX91To8, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintgsBqqGc = BigInt("595")
		const addressw67jht6 = accounts[1]
		const addressd2a8ols = accounts[3]
		const boolQaiYCgQ = await CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressd2a8ols, addressw67jht6, uintgsBqqGc, {from: accounts[1]});

		await expect(CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressd2a8ols, addressw67jht6, uintgsBqqGc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintwcCMLBT = BigInt("869")
		const addressWbeQk9J = accounts[3]
		const uintOLnS8MW = BigInt("595")
		const addresss3ruVtQ = accounts[2]
		const addresssKMwChe = accounts[3]
		const addressrV5A7mc = accounts[0]
		const addressFSOcQi = accounts[3]
		const uinthmqdbBr = BigInt("149")
		const addressW7P2rU2 = accounts[2]
		const boolkArOoi1 = await CryptoSecureBankTokenPW9Am9C.transfer.call(addressWbeQk9J, uintwcCMLBT, {from: accounts[2]});
		const boolQaiYCgQ = await CryptoSecureBankTokenPW9Am9C.transferFrom.call(addresssKMwChe, addresss3ruVtQ, uintOLnS8MW, {from: accounts[1]});
		const uinthrT9Ko = await CryptoSecureBankTokenPW9Am9C.allowance.call(addressFSOcQi, addressrV5A7mc, {from: accounts[5]});
		const boolaaupzNm = await CryptoSecureBankTokenPW9Am9C.transfer.call(addressW7P2rU2, uinthmqdbBr, {from: accounts[0]});

		await expect(CryptoSecureBankTokenPW9Am9C.transfer.call(addressWbeQk9J, uintwcCMLBT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintrZ2D6tv = BigInt("1208")
		const addressAM3Ixrs = "0x0000000000000000000000000000000000000001"
		const addressvlEzhrl = accounts[3]
		const addressN5bAmlg = accounts[0]
		const addresshO5K6e = accounts[1]
		const addressNer3G0r = accounts[1]
		const boolTWBILss = await CryptoSecureBankTokenBGJkX9B.approve.call(addressAM3Ixrs, uintrZ2D6tv, {from: "0x0000000000000000000000000000000000000001"});
		const uintuX91To8 = await CryptoSecureBankTokenBGJkX9B.allowance.call(addressN5bAmlg, addressvlEzhrl, {from: accounts[0]});
		const uintWpXdm9Y = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addresshO5K6e, {from: accounts[2]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressNer3G0r, {from: accounts[5]});

		assert.equal(boolTWBILss, true)
		assert.equal(uintFGRNI2A, BigInt("0"))
		assert.equal(uintWpXdm9Y, BigInt("0"))
		assert.equal(uintuX91To8, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintVIQJX0m = BigInt("595")
		const addressKrNjSd = accounts[2]
		const addressQGnYuSm = accounts[3]
		const addressBiavClF = accounts[2]
		const uinttBk68y = await CryptoSecureBankTokenPW9Am9C.totalSupply.call({from: accounts[5]});
		const boolQaiYCgQ = await CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressQGnYuSm, addressKrNjSd, uintVIQJX0m, {from: accounts[1]});
		const addressGFzZQeB = await CryptoSecureBankTokenPW9Am9C.removeBlackList.call(addressBiavClF, {from: accounts[2]});

		assert.equal(uinttBk68y, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressQGnYuSm, addressKrNjSd, uintVIQJX0m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintxa9vbU2 = BigInt("1017")
		const addressOpyAYu = accounts[3]
		const addresszlgoIy7 = accounts[0]
		const addressqSfr31 = accounts[1]
		const addressNabdkpm = accounts[2]
		const boolcpn2rcK = await CryptoSecureBankTokenBGJkX9B.redeem.call(uintxa9vbU2, {from: accounts[5]});
		const uintuX91To8 = await CryptoSecureBankTokenBGJkX9B.allowance.call(addresszlgoIy7, addressOpyAYu, {from: accounts[0]});
		const uintWpXdm9Y = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressqSfr31, {from: accounts[2]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressNabdkpm, {from: accounts[5]});

		assert.equal(boolcpn2rcK, true)
		assert.equal(uintFGRNI2A, BigInt("0"))
		assert.equal(uintWpXdm9Y, BigInt("0"))
		assert.equal(uintuX91To8, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenSX0IJFO = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintPCXWOfP = BigInt("1809")
		const uintStFNiut = BigInt("894")
		const uintA3w2XXo = BigInt("675")
		const addressnfYM4uL = "0x0000000000000000000000000000000000000001"
		const address1BfzH2 = await CryptoSecureBankTokenSX0IJFO.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uinttlV4PYy = await CryptoSecureBankTokenSX0IJFO.setParams.call(uintStFNiut, uintPCXWOfP, {from: accounts[0]});
		const uintO7pHtIk = await CryptoSecureBankTokenSX0IJFO.onlyPayloadSize.call(uintA3w2XXo, {from: accounts[2]});
		const uinteWwSXZ6 = await CryptoSecureBankTokenSX0IJFO.balanceOf.call(addressnfYM4uL, {from: accounts[1]});

		assert.equal(address1BfzH2, 0x252Fe3ef93f946c8850423058D309B04bADD48db)
		await expect(CryptoSecureBankTokenSX0IJFO.setParams.call(uintStFNiut, uintPCXWOfP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressP1n6Kdc = accounts[5]
		const addressOWLnZr = accounts[1]
		const addressz0YjPGP = await CryptoSecureBankTokenBGJkX9B.transferOwnership.call(addressP1n6Kdc, {from: accounts[2]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressOWLnZr, {from: accounts[5]});

		await expect(CryptoSecureBankTokenBGJkX9B.transferOwnership.call(addressP1n6Kdc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenF6j1Oqz = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressUybWv0r = accounts[0]
		const uintN6em2X8 = BigInt("1157")
		const uintn40WIS = BigInt("272")
		const addressjK35T5c = await CryptoSecureBankTokenF6j1Oqz.transferOwnership.call(addressUybWv0r, {from: accounts[1]});
		const boolsE7Z0f = await CryptoSecureBankTokenF6j1Oqz.redeem.call(uintN6em2X8, {from: accounts[5]});
		const booljjlhoqw = await CryptoSecureBankTokenF6j1Oqz.redeem.call(uintn40WIS, {from: accounts[3]});

		await expect(CryptoSecureBankTokenF6j1Oqz.redeem.call(uintN6em2X8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintZ55uztN = BigInt("618")
		const addressRq23HVK = accounts[3]
		const addressqOPoxOV = accounts[4]
		const boolJCPgEBp = await CryptoSecureBankTokenPW9Am9C.approve.call(addressRq23HVK, uintZ55uztN, {from: accounts[5]});
		const boolRwZYx1f = await CryptoSecureBankTokenPW9Am9C.getBlackListStatus.call(addressqOPoxOV, {from: accounts[4]});
		await CryptoSecureBankTokenPW9Am9C.pause.call({from: accounts[0]});

		assert.equal(boolJCPgEBp, true)
		assert.equal(boolRwZYx1f, false)
		await expect(CryptoSecureBankTokenPW9Am9C.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintlZSSzEb = BigInt("0")
		const addressUysG0ew = accounts[1]
		const uint5kyO2v = BigInt("1642")
		const uintc6sOFN = BigInt("593")
		const addressPQyLm3F = accounts[1]
		const uintJ7fEAf = BigInt("1493")
		const addressceEGYdr = accounts[5]
		const addressby11rOR = accounts[0]
		const addressk6O2Dfl = accounts[1]
		const addressv5dDvr = accounts[3]
		const boolQ4jWoOr = await CryptoSecureBankTokenPW9Am9C.transfer.call(addressUysG0ew, uintlZSSzEb, {from: accounts[2]});
		const boolg4vklQK = await CryptoSecureBankTokenPW9Am9C.redeem.call(uint5kyO2v, {from: "0x0000000000000000000000000000000000000001"});
		const boolhAMVJHv = await CryptoSecureBankTokenPW9Am9C.approve.call(addressPQyLm3F, uintc6sOFN, {from: accounts[1]});
		const boolK4j2qzY = await CryptoSecureBankTokenPW9Am9C.approve.call(addressceEGYdr, uintJ7fEAf, {from: accounts[0]});
		const addressM47TXvn = await CryptoSecureBankTokenPW9Am9C.transferOwnership.call(addressby11rOR, {from: accounts[1]});
		const addressL9jAP36 = await CryptoSecureBankTokenPW9Am9C.getOwner.call({from: accounts[1]});
		const uintN7dhqw1 = await CryptoSecureBankTokenPW9Am9C.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint96wDMp = await CryptoSecureBankTokenPW9Am9C.allowance.call(addressv5dDvr, addressk6O2Dfl, {from: accounts[3]});

		assert.equal(boolQ4jWoOr, true)
		await expect(CryptoSecureBankTokenPW9Am9C.redeem.call(uint5kyO2v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGJkX9B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressi4dJu0M = accounts[2]
		const addressW4r6CLi = accounts[3]
		const addressA9DSskd = accounts[3]
		const addressCH8FBGg = await CryptoSecureBankTokenBGJkX9B.addBlackList.call(addressi4dJu0M, {from: accounts[5]});
		const uintFGRNI2A = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressW4r6CLi, {from: accounts[5]});
		const uintNe7XXOq = await CryptoSecureBankTokenBGJkX9B.balanceOf.call(addressA9DSskd, {from: accounts[5]});

		assert.equal(uintFGRNI2A, BigInt("0"))
		assert.equal(uintNe7XXOq, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressumwALKC = accounts[4]
		const uintpxCLJKc = BigInt("196")
		const addressFKs1L6m = "0x0000000000000000000000000000000000000001"
		const addressTds1Uzg = accounts[3]
		const uintk0gqXG = BigInt("582")
		const addressLTbidYI = accounts[1]
		const addressVJ2KQSd = accounts[3]
		const booltaXEtub = await CryptoSecureBankTokenPW9Am9C.deprecate.call(addressumwALKC, {from: accounts[0]});
		const boolzQIQrbv = await CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressTds1Uzg, addressFKs1L6m, uintpxCLJKc, {from: accounts[5]});
		const boolQaiYCgQ = await CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressVJ2KQSd, addressLTbidYI, uintk0gqXG, {from: accounts[1]});

		assert.equal(booltaXEtub, true)
		await expect(CryptoSecureBankTokenPW9Am9C.transferFrom.call(addressTds1Uzg, addressFKs1L6m, uintpxCLJKc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRSNN8HU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressXaoRAo5 = accounts[1]
		const address78rtw4 = accounts[3]
		const addressFHQY5JG = accounts[0]
		const uintHChHA0M = BigInt("127")
		const address3uWrg4 = accounts[1]
		const uintHfmjRf8 = await CryptoSecureBankTokenRSNN8HU.allowance.call(address78rtw4, addressXaoRAo5, {from: accounts[4]});
		const addressCBEZjC = await CryptoSecureBankTokenRSNN8HU.setOwner2.call(addressFHQY5JG, {from: accounts[1]});
		await CryptoSecureBankTokenRSNN8HU.onlyOwner.call({from: accounts[3]});
		const booljcWPxkS = await CryptoSecureBankTokenRSNN8HU.approve.call(address3uWrg4, uintHChHA0M, {from: accounts[2]});

		assert.equal(uintHfmjRf8, BigInt("0"))
		await expect(CryptoSecureBankTokenRSNN8HU.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPW9Am9C = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressZPMhV9O = accounts[0]
		const addressIWRdq6v = accounts[3]
		const addressT6stw8G = accounts[4]
		const addressIomWYSY = accounts[0]
		const addressTjdHuO = accounts[4]
		const addressPEAhKU4 = accounts[3]
		const uintUsLF3Ez = await CryptoSecureBankTokenPW9Am9C.allowance.call(addressIWRdq6v, addressZPMhV9O, {from: accounts[3]});
		const uint19Z6D1 = await CryptoSecureBankTokenPW9Am9C.balanceOf.call(addressT6stw8G, {from: accounts[5]});
		const addressKLsmQsF = await CryptoSecureBankTokenPW9Am9C.destroyBlackFunds.call(addressIomWYSY, {from: accounts[0]});
		await CryptoSecureBankTokenPW9Am9C.whenPaused.call({from: accounts[0]});
		const uintUcoKwVj = await CryptoSecureBankTokenPW9Am9C.allowance.call(addressPEAhKU4, addressTjdHuO, {from: accounts[4]});

		assert.equal(uint19Z6D1, BigInt("0"))
		assert.equal(uintUsLF3Ez, BigInt("0"))
		await expect(CryptoSecureBankTokenPW9Am9C.destroyBlackFunds.call(addressIomWYSY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})