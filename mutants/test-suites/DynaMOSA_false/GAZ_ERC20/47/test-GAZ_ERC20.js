const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZKWepLm = await GAZ_ERC20.new({from: accounts[0]});
		const uintcyxvPnU = BigInt("1563")
		const addressH6rBaMu = accounts[0]
		const uintRjEKwvD = BigInt("1202")
		const addressHrDQ0Dj = accounts[4]
		const uintEunE77Z = BigInt("756")
		const addressSLdmerE = accounts[3]
		const address4Y44rW = accounts[4]
		const boolUms9Gon = await GAZ_ERC20ZKWepLm.approve.call(addressH6rBaMu, uintcyxvPnU, {from: "0x0000000000000000000000000000000000000001"});
		const booltev7Cqm = await GAZ_ERC20ZKWepLm.approve.call(addressHrDQ0Dj, uintRjEKwvD, {from: accounts[2]});
		const boolgrPlmlD = await GAZ_ERC20ZKWepLm.approve.call(addressSLdmerE, uintEunE77Z, {from: accounts[3]});
//		const boolNVZO5kZ = await GAZ_ERC20ZKWepLm.approve.call(address4Y44rW, {from: accounts[0]});

		assert.equal(boolUms9Gon, true)
		assert.equal(boolgrPlmlD, true)
		assert.equal(booltev7Cqm, true)
		await expect(GAZ_ERC20ZKWepLm.approve.call(address4Y44rW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aKuEl0l = await GAZ_ERC20.new({from: accounts[4]});
		const uintVAXOzpR = BigInt("232")
		const addressJrpyROo = accounts[3]
		const uintxT28DlK = BigInt("752")
		const addressOdqWogE = accounts[4]
		const uinthMG3bOG = BigInt("1208")
		const addresskNPEyvQ = accounts[2]
		const uintSeAYkS = BigInt("250")
		const addressRvRWs1 = accounts[0]
		const addressaESGfFa = accounts[2]
		const boolbxWwhVd = await GAZ_ERC20aKuEl0l.approve.call(addressJrpyROo, uintVAXOzpR, {from: accounts[4]});
		const boolkogdxCl = await GAZ_ERC20aKuEl0l.approve.call(addressOdqWogE, uintxT28DlK, {from: accounts[3]});
//		const boolJtcD8KY = await GAZ_ERC20aKuEl0l.transfer.call(addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]});
//		const boolg0obyQl = await GAZ_ERC20aKuEl0l.approve.call(addressRvRWs1, uintSeAYkS, {from: accounts[1]});
//		const boolrvWBcS0 = await GAZ_ERC20aKuEl0l.approve.call(addressaESGfFa, {from: accounts[4]});

		assert.equal(boolbxWwhVd, true)
		assert.equal(boolkogdxCl, true)
		await expect(GAZ_ERC20aKuEl0l.transfer.call(addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20n1aVnR = await GAZ_ERC20.new({from: accounts[2]});
		const uintSJJCG0N = BigInt("1675")
		const addressDut0Vxx = "0x0000000000000000000000000000000000000001"
		const addressxx0CrFY = accounts[2]
		const addressW1hMXJs = accounts[1]
		const uintYH2lPQr = BigInt("336")
		const addressPfKllcq = accounts[4]
//		const boolfRiry1n = await GAZ_ERC20n1aVnR.transferFrom.call(addressxx0CrFY, addressDut0Vxx, uintSJJCG0N, {from: accounts[0]});
//		const boolvTEYYkT = await GAZ_ERC20n1aVnR.approve.call(addressW1hMXJs, {from: accounts[0]});
//		const boolSl1DEpc = await GAZ_ERC20n1aVnR.approve.call(addressPfKllcq, uintYH2lPQr, {from: accounts[1]});

		await expect(GAZ_ERC20n1aVnR.transferFrom.call(addressxx0CrFY, addressDut0Vxx, uintSJJCG0N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20CmO7rF = await GAZ_ERC20.new({from: accounts[0]});
		const uintKh4l09Y = BigInt("525")
		const addressh2c6egU = accounts[1]
		const uintidprNL = BigInt("1691")
		const addresslEr6O44 = accounts[2]
		const boolQO6gfIn = await GAZ_ERC20CmO7rF.transfer.call(addressh2c6egU, uintKh4l09Y, {from: accounts[0]});
//		const boolxO4AcKN = await GAZ_ERC20CmO7rF.transfer.call(addresslEr6O44, uintidprNL, {from: accounts[5]});

		assert.equal(boolQO6gfIn, true)
		await expect(GAZ_ERC20CmO7rF.transfer.call(addresslEr6O44, uintidprNL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20y3t35ph = await GAZ_ERC20.new({from: accounts[5]});
		const addressBFyyhnd = accounts[2]
		const uintKkscbco = BigInt("549")
		const addresssBVcl5Y = accounts[3]
		const uintIs95Aiu = BigInt("1870")
		const addressAkUDTUQ = accounts[3]
//		const boolbzxcxE = await GAZ_ERC20y3t35ph.approve.call(addressBFyyhnd, {from: accounts[3]});
//		const boolD5Cpoi = await GAZ_ERC20y3t35ph.approve.call(addresssBVcl5Y, uintKkscbco, {from: accounts[1]});
//		const boolgL5bOkP = await GAZ_ERC20y3t35ph.transfer.call(addressAkUDTUQ, uintIs95Aiu, {from: accounts[2]});

		await expect(GAZ_ERC20y3t35ph.approve.call(addressBFyyhnd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZKWepLm = await GAZ_ERC20.new({from: accounts[0]});
		const addressfVCTglS = accounts[0]
		const uintqUxhbgt = BigInt("1563")
		const addressyr9a0Dr = accounts[1]
		const uintDAqIDR2 = BigInt("1202")
		const addressXanmiOD = accounts[4]
		const uintVJ9qLiQ = BigInt("756")
		const addressnEhEtsO = accounts[3]
		const addressjQo564v = accounts[4]
//		const boolX05oy4i = await GAZ_ERC20ZKWepLm.approve.call(addressfVCTglS, {from: accounts[2]});
//		const boolUms9Gon = await GAZ_ERC20ZKWepLm.approve.call(addressyr9a0Dr, uintqUxhbgt, {from: "0x0000000000000000000000000000000000000001"});
//		const booltev7Cqm = await GAZ_ERC20ZKWepLm.approve.call(addressXanmiOD, uintDAqIDR2, {from: accounts[2]});
//		const boolgrPlmlD = await GAZ_ERC20ZKWepLm.approve.call(addressnEhEtsO, uintVJ9qLiQ, {from: accounts[3]});
//		const boolNVZO5kZ = await GAZ_ERC20ZKWepLm.approve.call(addressjQo564v, {from: accounts[0]});

		await expect(GAZ_ERC20ZKWepLm.approve.call(addressfVCTglS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aKuEl0l = await GAZ_ERC20.new({from: accounts[4]});
		const uintkewiqj4 = BigInt("232")
		const addressNaO6fOA = accounts[3]
		const uintqXvJo5 = BigInt("752")
		const addressl3d95C = accounts[4]
		const uintjQ4oG6o = BigInt("238")
		const addressIfuycDc = accounts[0]
		const addressSOnwyQw = accounts[2]
		const boolbxWwhVd = await GAZ_ERC20aKuEl0l.approve.call(addressNaO6fOA, uintkewiqj4, {from: accounts[4]});
		const boolkogdxCl = await GAZ_ERC20aKuEl0l.approve.call(addressl3d95C, uintqXvJo5, {from: accounts[3]});
		const boolg0obyQl = await GAZ_ERC20aKuEl0l.approve.call(addressIfuycDc, uintjQ4oG6o, {from: accounts[1]});
//		const boolrvWBcS0 = await GAZ_ERC20aKuEl0l.approve.call(addressSOnwyQw, {from: accounts[4]});

		assert.equal(boolbxWwhVd, true)
		assert.equal(boolg0obyQl, true)
		assert.equal(boolkogdxCl, true)
		await expect(GAZ_ERC20aKuEl0l.approve.call(addressSOnwyQw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20AzSLD0J = await GAZ_ERC20.new({from: accounts[3]});
		const addressXDXksGu = accounts[3]
		const uintiJSGvrX = BigInt("551")
		const address1kOZhB = accounts[0]
		const uintbGs2vxo = BigInt("104")
		const addresspMW8v9h = accounts[0]
		const uintSpIEif = BigInt("627")
		const addressxDT4Ek8 = accounts[2]
//		const boolBywnh6D = await GAZ_ERC20AzSLD0J.approve.call(addressXDXksGu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBU4CHUa = await GAZ_ERC20AzSLD0J.transfer.call(address1kOZhB, uintiJSGvrX, {from: accounts[4]});
//		const boolXhLdg9L = await GAZ_ERC20AzSLD0J.transfer.call(addresspMW8v9h, uintbGs2vxo, {from: accounts[0]});
//		const boolKnIOQq = await GAZ_ERC20AzSLD0J.approve.call(addressxDT4Ek8, uintSpIEif, {from: accounts[2]});

		await expect(GAZ_ERC20AzSLD0J.approve.call(addressXDXksGu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uJVXPRn = await GAZ_ERC20.new({from: accounts[1]});
		const addressdaQl9bn = accounts[2]
		const uintFA0K9DP = BigInt("699")
		const addresscwZAetw = accounts[1]
		const uintSh3Y4IB = BigInt("283")
		const addressfB10FyY = accounts[2]
//		const boolqDJNnu = await GAZ_ERC20uJVXPRn.approve.call(addressdaQl9bn, {from: accounts[1]});
//		const boolfBi6so7 = await GAZ_ERC20uJVXPRn.transfer.call(addresscwZAetw, uintFA0K9DP, {from: accounts[4]});
//		const boolwq3yZFv = await GAZ_ERC20uJVXPRn.approve.call(addressfB10FyY, uintSh3Y4IB, {from: accounts[4]});

		await expect(GAZ_ERC20uJVXPRn.approve.call(addressdaQl9bn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oPHa5bs = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjqu0KJm = accounts[4]
		const uintyoNKQQD = BigInt("300")
		const addressPQ0u9gc = accounts[3]
		const uintpsaLjXS = BigInt("1183")
		const addressjhUApGW = accounts[5]
		const uintNu7x5Y9 = BigInt("1436")
		const addressTUAlMQc = accounts[2]
		const addressdsxQ9vz = accounts[0]
		const addressolPupqY = "0x0000000000000000000000000000000000000001"
		const uintAOVhylZ = BigInt("308")
		const addressHZ9mg5E = accounts[1]
		const bool81Eisz = await GAZ_ERC20oPHa5bs.approve.call(addressjqu0KJm, {from: accounts[0]});
		const boolICYW6dP = await GAZ_ERC20oPHa5bs.approve.call(addressPQ0u9gc, uintyoNKQQD, {from: accounts[0]});
		const boolGHo8mjh = await GAZ_ERC20oPHa5bs.approve.call(addressjhUApGW, uintpsaLjXS, {from: accounts[5]});
		const boolHrC7Tq = await GAZ_ERC20oPHa5bs.transferFrom.call(addressdsxQ9vz, addressTUAlMQc, uintNu7x5Y9, {from: accounts[1]});
		const boolsjGT2ir = await GAZ_ERC20oPHa5bs.approve.call(addressolPupqY, {from: accounts[3]});
		const boolJ61iyky = await GAZ_ERC20oPHa5bs.approve.call(addressHZ9mg5E, uintAOVhylZ, {from: accounts[5]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yPPj5bS = await GAZ_ERC20.new({from: accounts[0]});
		const uintcqjl9N1 = BigInt("851")
		const addressTmFeGdh = accounts[0]
		const addressGStDTro = "0x0000000000000000000000000000000000000001"
		const uintM7ZKt15 = BigInt("696")
		const addressHY1EnIm = accounts[0]
		const uintrdrpUGG = BigInt("1555")
		const addressBtRN8Ja = accounts[0]
		const uinta8Nizp = BigInt("1464")
		const addressolad8sU = accounts[2]
		const addressynNiM8X = accounts[4]
		const uintWxtzfst = BigInt("1480")
		const addressWPehwqL = accounts[3]
		const uintg5akyr = BigInt("429")
		const addresskRDZ55z = accounts[0]
		const boolsqMoYs = await GAZ_ERC20yPPj5bS.approve.call(addressTmFeGdh, uintcqjl9N1, {from: accounts[4]});
//		const boolnOt9cI6 = await GAZ_ERC20yPPj5bS.approve.call(addressGStDTro, {from: accounts[5]});
//		const boolLSiF2MD = await GAZ_ERC20yPPj5bS.transfer.call(addressHY1EnIm, uintM7ZKt15, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpn8dZhq = await GAZ_ERC20yPPj5bS.approve.call(addressBtRN8Ja, uintrdrpUGG, {from: accounts[4]});
//		const boolaMtPoEi = await GAZ_ERC20yPPj5bS.transferFrom.call(addressynNiM8X, addressolad8sU, uinta8Nizp, {from: accounts[2]});
//		const boolhEBxwK = await GAZ_ERC20yPPj5bS.approve.call(addressWPehwqL, uintWxtzfst, {from: accounts[0]});
//		const boolWpIR4B = await GAZ_ERC20yPPj5bS.transfer.call(addresskRDZ55z, uintg5akyr, {from: accounts[2]});

		assert.equal(boolsqMoYs, true)
		await expect(GAZ_ERC20yPPj5bS.approve.call(addressGStDTro, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})