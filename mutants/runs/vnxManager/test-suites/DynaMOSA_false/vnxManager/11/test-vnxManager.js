const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManageru0GHQFB = await vnxManager.new({from: accounts[0]});
		const addressceoO5St = accounts[4]
		const addressALkKvY5 = accounts[0]
		const uintli5MGL = BigInt("1411")
		const addressPe2N5oO = accounts[0]
		const addressLQG4oO1 = accounts[3]
		const boolNMv9OE4 = await vnxManageru0GHQFB.transferContractOwnership.call(addressALkKvY5, addressceoO5St, {from: accounts[0]});
		const addressE1K4Wlm = await vnxManageru0GHQFB.removeBearer.call(addressPe2N5oO, uintli5MGL, {from: accounts[2]});
		const addressHuHi4XK = await vnxManageru0GHQFB.transferOwnership.call(addressLQG4oO1, {from: accounts[2]});
		await vnxManageru0GHQFB.onlyOwner.call({from: accounts[3]});
		const addressfBi8DFK = await vnxManageru0GHQFB.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcgpziag = await vnxManageru0GHQFB.isOwner.call({from: accounts[4]});

		await expect(vnxManageru0GHQFB.transferContractOwnership.call(addressALkKvY5, addressceoO5St, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYbamc8 = await vnxManager.new({from: accounts[2]});
		const addressQ79Te7 = accounts[3]
		const addressAajszwr = accounts[2]
		const uintCPpS4zE = BigInt("1787")
		const addressOsK99Sf = accounts[3]
		const addressbZU4zRa = accounts[5]
		const addressrYVdTAA = await vnxManagerYbamc8.owner.call({from: accounts[2]});
		const booloLf16Wo = await vnxManagerYbamc8.transferContractOwnership.call(addressAajszwr, addressQ79Te7, {from: accounts[3]});
		const uint256cJxP59x = await vnxManagerYbamc8.totalRoles.call({from: accounts[3]});
		const addressHgtlXrj = await vnxManagerYbamc8.removeBearer.call(addressOsK99Sf, uintCPpS4zE, {from: accounts[2]});
		const addressGDAWIA = await vnxManagerYbamc8.transferOwnership.call(addressbZU4zRa, {from: accounts[2]});
		await vnxManagerYbamc8.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressrYVdTAA, 0xEB2269F30b91a8641B6Aa5Ecd04f216263baCCB3)
		await expect(vnxManagerYbamc8.transferContractOwnership.call(addressAajszwr, addressQ79Te7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerN7zvrbH = await vnxManager.new({from: accounts[2]});
		const stringtQDmNKI = "Kjh5sC6vwkwsyhysbGCIwlNS5peHFo0VhhOooF8hwUwDrF3xCeGyobTkoCXrUU21UvEOQIEGwYbfGgH"
		const addressHMp8XLe = accounts[4]
		const addressktRVhOk = accounts[3]
		const boolND53hpx = await vnxManagerN7zvrbH.isOwner.call({from: accounts[3]});
		const uint256TMo5oww = await vnxManagerN7zvrbH.addRootRole.call(stringtQDmNKI, {from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerN7zvrbH.onlyAdmin.call({from: accounts[3]});
		const booltMuP8JH = await vnxManagerN7zvrbH.transferContractOwnership.call(addressktRVhOk, addressHMp8XLe, {from: accounts[2]});

		assert.equal(boolND53hpx, false)
		assert.equal(uint256TMo5oww, BigInt("0"))
		await expect(vnxManagerN7zvrbH.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlgh4lTN = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressi6Pgyq = accounts[4]
		const addressW9I4tPX = accounts[1]
		const uintTbsqv9E = BigInt("1741")
		const stringW825fK = "yVh"
		const boolNJzTmlf = await vnxManagerlgh4lTN.transferContractOwnership.call(addressW9I4tPX, addressi6Pgyq, {from: accounts[0]});
		await vnxManagerlgh4lTN.renounceOwnership.call({from: accounts[3]});
		const uint256phAm6ng = await vnxManagerlgh4lTN.addRole.call(stringW825fK, uintTbsqv9E, {from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerXcNLM6J = await vnxManager.new({from: accounts[3]});
		const stringkV6wcoh = "weVVIhwnwzXkfFiBNtlnHagqp1hyFLgk07cIuqTgGq1PyP"
		const uintInwgaxl = BigInt("1411")
		const addressCnYFJu = accounts[2]
		const addresszZeJ0qC = accounts[3]
		const uint256PZqinxG = await vnxManagerXcNLM6J.totalRoles.call({from: accounts[3]});
		const uint256J1fbnSE = await vnxManagerXcNLM6J.addRootRole.call(stringkV6wcoh, {from: accounts[5]});
		const addressBdYuENs = await vnxManagerXcNLM6J.removeBearer.call(addressCnYFJu, uintInwgaxl, {from: accounts[3]});
		const addressF0VneBf = await vnxManagerXcNLM6J.transferOwnership.call(addresszZeJ0qC, {from: accounts[0]});
		await vnxManagerXcNLM6J.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256J1fbnSE, BigInt("0"))
		assert.equal(uint256PZqinxG, BigInt("1"))
		await expect(vnxManagerXcNLM6J.removeBearer.call(addressCnYFJu, uintInwgaxl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerJqF0BiT = await vnxManager.new({from: accounts[1]});
		const uintSsyNkk5 = BigInt("1079")
		const stringIBWCB37 = "rtqscEbgx"
		const boolZfV9J58 = await vnxManagerJqF0BiT.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolt2sYydF = await vnxManagerJqF0BiT.isAdmin.call({from: accounts[1]});
		const uint256vmRA492 = await vnxManagerJqF0BiT.addRole.call(stringIBWCB37, uintSsyNkk5, {from: accounts[0]});

		assert.equal(boolZfV9J58, false)
		assert.equal(boolt2sYydF, true)
		await expect(vnxManagerJqF0BiT.addRole.call(stringIBWCB37, uintSsyNkk5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYbamc8 = await vnxManager.new({from: accounts[2]});
		const uintjBXcgvz = BigInt("422")
		const addressz4nAJBf = accounts[4]
		const addressBQXZLqo = accounts[1]
		const addresslM8q5rt = accounts[2]
		const addressGX1P1jb = accounts[3]
		const address9IXQph = accounts[2]
		const uintwfvoa6o = BigInt("1787")
		const addresspnzmC4j = accounts[3]
		const addressJvZU9r3 = accounts[5]
		const addressbkEbhM1 = await vnxManagerYbamc8.addBearer.call(addressz4nAJBf, uintjBXcgvz, {from: accounts[1]});
		const addressrYVdTAA = await vnxManagerYbamc8.owner.call({from: accounts[2]});
		const boolb08az7P = await vnxManagerYbamc8.transferContractOwnership.call(addresslM8q5rt, addressBQXZLqo, {from: "0x0000000000000000000000000000000000000001"});
		const booloLf16Wo = await vnxManagerYbamc8.transferContractOwnership.call(address9IXQph, addressGX1P1jb, {from: accounts[3]});
		const uint256cJxP59x = await vnxManagerYbamc8.totalRoles.call({from: accounts[3]});
		const addressHgtlXrj = await vnxManagerYbamc8.removeBearer.call(addresspnzmC4j, uintwfvoa6o, {from: accounts[2]});
		const addressGDAWIA = await vnxManagerYbamc8.transferOwnership.call(addressJvZU9r3, {from: accounts[2]});
		await vnxManagerYbamc8.renounceOwnership.call({from: accounts[1]});

		await expect(vnxManagerYbamc8.addBearer.call(addressz4nAJBf, uintjBXcgvz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIk8Wn6y = await vnxManager.new({from: accounts[0]});
		const stringCZOndSf = "KlQK"
		const addressllX58X1 = accounts[2]
		const uint256Q7k14eN = await vnxManagerIk8Wn6y.addRootRole.call(stringCZOndSf, {from: accounts[0]});
		const uint256ONvK9PK = await vnxManagerIk8Wn6y.totalRoles.call({from: accounts[3]});
		const addressQjrHR2 = await vnxManagerIk8Wn6y.transferOwnership.call(addressllX58X1, {from: accounts[3]});

		assert.equal(uint256ONvK9PK, BigInt("1"))
		assert.equal(uint256Q7k14eN, BigInt("0"))
		await expect(vnxManagerIk8Wn6y.transferOwnership.call(addressllX58X1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWGD4h9n = await vnxManager.new({from: accounts[3]});
		const uintpUzqcHE = BigInt("1185")
		const addressP7F1fM8 = accounts[4]
		const uintCshrcYI = BigInt("767")
		const addressbYQAAAP = accounts[3]
		await vnxManagerWGD4h9n.renounceOwnership.call({from: accounts[3]});
		const addressFIu0yRW = await vnxManagerWGD4h9n.removeBearer.call(addressP7F1fM8, uintpUzqcHE, {from: accounts[0]});
		const addressLrpz6x0 = await vnxManagerWGD4h9n.addBearer.call(addressbYQAAAP, uintCshrcYI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerWGD4h9n.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerXcNLM6J = await vnxManager.new({from: accounts[3]});
		const stringkV6wcoh = "weVVIhwnwzXkfFiBNtlnHagqT1hyFLgk07cIuqTgGq1PyP"
		const addressFKXcp5A = "0x0000000000000000000000000000000000000001"
		const uintWIpZUL5 = BigInt("1411")
		const addressUDVQKGr = accounts[3]
		const addressbYC2J0h = accounts[4]
		const uint256PZqinxG = await vnxManagerXcNLM6J.totalRoles.call({from: accounts[3]});
		const uint256J1fbnSE = await vnxManagerXcNLM6J.addRootRole.call(stringkV6wcoh, {from: accounts[5]});
		const addressZkQ0ltr = await vnxManagerXcNLM6J.transferOwnership.call(addressFKXcp5A, {from: accounts[3]});
		const uint256jZ4p8NP = await vnxManagerXcNLM6J.totalRoles.call({from: accounts[4]});
		const addressBdYuENs = await vnxManagerXcNLM6J.removeBearer.call(addressUDVQKGr, uintWIpZUL5, {from: accounts[3]});
		await vnxManagerXcNLM6J.renounceOwnership.call({from: accounts[3]});
		const addressF0VneBf = await vnxManagerXcNLM6J.transferOwnership.call(addressbYC2J0h, {from: accounts[0]});

		assert.equal(uint256J1fbnSE, BigInt("0"))
		assert.equal(uint256PZqinxG, BigInt("1"))
		assert.equal(uint256jZ4p8NP, BigInt("1"))
		await expect(vnxManagerXcNLM6J.removeBearer.call(addressUDVQKGr, uintWIpZUL5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})