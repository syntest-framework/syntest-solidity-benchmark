const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerOBBmpZa = await vnxManager.new({from: accounts[5]});
		const uintoaLAity = BigInt("309")
		const addressC0wuwn1 = accounts[0]
		const uintpfX5NHe = BigInt("1364")
		const addressrbmojpW = "0x0000000000000000000000000000000000000001"
		const uintuSuj1MP = BigInt("1477")
		const addressRgZ9THu = "0x0000000000000000000000000000000000000001"
		const stringilYM0lX = "Dn3NORi95Z9XU7PDNL8uR1kaGoAa1bQ2dbIc1afajaApoX5I28Mrg0eL6msUZ8o6nlCGw8k5doY2K"
		const stringRpKxP5o = "L6e2HHp6RjADZLqn4qYIDujwNedgyTVFKgyzoTdTA3Tg3jGm2ttxjn6W6ptmQOJLnokc3HD"
		const addressR8LvHr = await vnxManagerOBBmpZa.removeBearer.call(addressC0wuwn1, uintoaLAity, {from: "0x0000000000000000000000000000000000000001"});
		const addressNUz1tvb = await vnxManagerOBBmpZa.addBearer.call(addressrbmojpW, uintpfX5NHe, {from: accounts[0]});
		const booliAGA4ew = await vnxManagerOBBmpZa.hasRole.call(addressRgZ9THu, uintuSuj1MP, {from: accounts[1]});
		const uint256SSU5OR = await vnxManagerOBBmpZa.addRootRole.call(stringilYM0lX, {from: accounts[4]});
		const uint256BBEswVV = await vnxManagerOBBmpZa.addRootRole.call(stringRpKxP5o, {from: accounts[4]});

		await expect(vnxManagerOBBmpZa.removeBearer.call(addressC0wuwn1, uintoaLAity, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTkWx1T = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOKJ8Yxa = "0x0000000000000000000000000000000000000001"
		const addressEEOWuMf = accounts[1]
		await vnxManagerTkWx1T.onlyOwner.call({from: accounts[0]});
		const uint256L2glKQ = await vnxManagerTkWx1T.totalRoles.call({from: accounts[2]});
		const addressWgZB04h = await vnxManagerTkWx1T.owner.call({from: accounts[3]});
		const boolXnqcDKc = await vnxManagerTkWx1T.transferContractOwnership.call(addressEEOWuMf, addressOKJ8Yxa, {from: accounts[0]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerzJEDqJj = await vnxManager.new({from: accounts[1]});
		const addressXwXFXfH = accounts[5]
		const addressc4emJVO = accounts[2]
		const uintu9ijjZ = BigInt("1911")
		const stringZj0sTYl = "XcOpdikbBbynOtr2NNqUspT"
		const uintEXepAhU = BigInt("1881")
		const addressKRXlwIK = accounts[3]
		const uintimgkBQ = BigInt("1103")
		const addressOHmkO8P = accounts[4]
		await vnxManagerzJEDqJj.renounceOwnership.call({from: accounts[3]});
		const booljYg6ucc = await vnxManagerzJEDqJj.transferContractOwnership.call(addressc4emJVO, addressXwXFXfH, {from: accounts[2]});
		const uint256SETVUaz = await vnxManagerzJEDqJj.addRole.call(stringZj0sTYl, uintu9ijjZ, {from: accounts[4]});
		const addressNG1CzJr = await vnxManagerzJEDqJj.removeBearer.call(addressKRXlwIK, uintEXepAhU, {from: accounts[0]});
		const boolWc2diGN = await vnxManagerzJEDqJj.hasRole.call(addressOHmkO8P, uintimgkBQ, {from: accounts[4]});

		await expect(vnxManagerzJEDqJj.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerI2YNov = await vnxManager.new({from: accounts[4]});
		const stringYhNPCjR = "tPdD"
		const uintsFzWOOT = BigInt("1767")
		const addressRTMqEz0 = accounts[0]
		const uintTxcrLbA = BigInt("1670")
		const addressYOq6H18 = accounts[4]
		await vnxManagerI2YNov.onlyOwner.call({from: accounts[0]});
		const uint256WwjJ81b = await vnxManagerI2YNov.addRootRole.call(stringYhNPCjR, {from: accounts[5]});
		const addressGKs1WhC = await vnxManagerI2YNov.addBearer.call(addressRTMqEz0, uintsFzWOOT, {from: accounts[5]});
		const addressBXac8h = await vnxManagerI2YNov.addBearer.call(addressYOq6H18, uintTxcrLbA, {from: accounts[4]});
		await vnxManagerI2YNov.onlyOwner.call({from: accounts[1]});

		await expect(vnxManagerI2YNov.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerI2RKVCS = await vnxManager.new({from: accounts[2]});
		await vnxManagerI2RKVCS.renounceOwnership.call({from: accounts[2]});
		const uint256P0BFU8 = await vnxManagerI2RKVCS.totalRoles.call({from: accounts[0]});
		const addresssFwJAFq = await vnxManagerI2RKVCS.owner.call({from: accounts[3]});
		const boolBKoaxgz = await vnxManagerI2RKVCS.isOwner.call({from: accounts[0]});

		await expect(vnxManagerI2RKVCS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdwrMXmV = await vnxManager.new({from: accounts[3]});
		const uintvEDuwtj = BigInt("1130")
		const addresstcwmFDl = accounts[1]
		const addressOuwV7L = accounts[1]
		const uintvMB5nmY = BigInt("1550")
		const addressAUqTOsQ = accounts[4]
		const boolvmuEurp = await vnxManagerdwrMXmV.hasRole.call(addresstcwmFDl, uintvEDuwtj, {from: accounts[1]});
		const addressXRJxike = await vnxManagerdwrMXmV.transferOwnership.call(addressOuwV7L, {from: accounts[1]});
		const addressE9HXWwE = await vnxManagerdwrMXmV.removeBearer.call(addressAUqTOsQ, uintvMB5nmY, {from: accounts[4]});

		assert.equal(boolvmuEurp, false)
		await expect(vnxManagerdwrMXmV.transferOwnership.call(addressOuwV7L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVNzGW5F = await vnxManager.new({from: accounts[2]});
		const addressp5YGmeD = accounts[4]
		const uintPjBo3rX = BigInt("108")
		const addressibKcFGS = accounts[2]
		const uintlx55oht = BigInt("220")
		const addressvCFsc2n = accounts[0]
		const addressMEd56SA = await vnxManagerVNzGW5F.transferOwnership.call(addressp5YGmeD, {from: accounts[2]});
		const addressNv5fBUT = await vnxManagerVNzGW5F.addBearer.call(addressibKcFGS, uintPjBo3rX, {from: accounts[1]});
		const addresskqIFRFy = await vnxManagerVNzGW5F.removeBearer.call(addressvCFsc2n, uintlx55oht, {from: accounts[1]});

		await expect(vnxManagerVNzGW5F.addBearer.call(addressibKcFGS, uintPjBo3rX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerHIdgMO9 = await vnxManager.new({from: accounts[3]});
		const addressJAbcpoG = accounts[0]
		const boolfnDc7pV = await vnxManagerHIdgMO9.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UinYre = await vnxManagerHIdgMO9.totalRoles.call({from: accounts[3]});
		const addressY0eYdD = await vnxManagerHIdgMO9.transferOwnership.call(addressJAbcpoG, {from: accounts[4]});

		assert.equal(boolfnDc7pV, false)
		assert.equal(uint256UinYre, BigInt("1"))
		await expect(vnxManagerHIdgMO9.transferOwnership.call(addressJAbcpoG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdwrMXmV = await vnxManager.new({from: accounts[3]});
		const uintjO9hJfU = BigInt("1130")
		const addressTiH6l7F = accounts[2]
		const uintyqcPFWd = BigInt("58")
		const stringvYUVSH5 = "zJtLxumUYV0xdGdgnDzc01vCSMi"
		const addressZqiQk9S = accounts[1]
		const boolvmuEurp = await vnxManagerdwrMXmV.hasRole.call(addressTiH6l7F, uintjO9hJfU, {from: accounts[1]});
		const uint256rx8J1F = await vnxManagerdwrMXmV.addRole.call(stringvYUVSH5, uintyqcPFWd, {from: accounts[1]});
		const addressXRJxike = await vnxManagerdwrMXmV.transferOwnership.call(addressZqiQk9S, {from: accounts[1]});

		assert.equal(boolvmuEurp, false)
		await expect(vnxManagerdwrMXmV.addRole.call(stringvYUVSH5, uintyqcPFWd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdwrMXmV = await vnxManager.new({from: accounts[3]});
		const uintTCW0g0 = BigInt("1130")
		const addressBUkge0Q = accounts[2]
		const addressNPd1Q1G = accounts[5]
		const addressNSYYXaj = accounts[2]
		const addressoHTtcq = accounts[4]
		const boolvmuEurp = await vnxManagerdwrMXmV.hasRole.call(addressBUkge0Q, uintTCW0g0, {from: accounts[1]});
		const boolliT0EDs = await vnxManagerdwrMXmV.transferContractOwnership.call(addressNSYYXaj, addressNPd1Q1G, {from: accounts[1]});
		const addressUMolYvL = await vnxManagerdwrMXmV.transferOwnership.call(addressoHTtcq, {from: accounts[1]});

		assert.equal(boolvmuEurp, false)
		await expect(vnxManagerdwrMXmV.transferContractOwnership.call(addressNSYYXaj, addressNPd1Q1G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdwrMXmV = await vnxManager.new({from: accounts[3]});
		const uintrD85qNW = BigInt("91")
		const addressrNuvVN = accounts[3]
		const addresslUOJkqV = accounts[1]
		const addresscosoviz = accounts[2]
		const uintckyQWCX = BigInt("1130")
		const addressuWklmTQ = accounts[2]
		const boolMniemnZ = await vnxManagerdwrMXmV.hasRole.call(addressrNuvVN, uintrD85qNW, {from: accounts[4]});
		const boolgM8EPrO = await vnxManagerdwrMXmV.transferContractOwnership.call(addresscosoviz, addresslUOJkqV, {from: accounts[3]});
		const boolvmuEurp = await vnxManagerdwrMXmV.hasRole.call(addressuWklmTQ, uintckyQWCX, {from: accounts[1]});

		assert.equal(boolMniemnZ, false)
		await expect(vnxManagerdwrMXmV.transferContractOwnership.call(addresscosoviz, addresslUOJkqV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})