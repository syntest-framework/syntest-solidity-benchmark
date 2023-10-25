const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringz7gW1B2 = "MjV"
		const stringSwUtmDv = "94AjVYIHEr70o6nCs2wtNicYnbKg7WKp1DCs2XkMCuQOQu9Ig6egR8JVXnCHGbVvXqCC9tb7oE0wnCgPmb1NwytKkt"
		const uintMdOKeXc = BigInt("1263")
		const RexonaSlAYCor = await Rexona.new(stringz7gW1B2, stringSwUtmDv, uintMdOKeXc, {from: accounts[2]});
		const uintlorrTJ6 = BigInt("1488")
		const addressMhnF9lk = accounts[0]
		const addressQvJCrr1 = accounts[3]
//		const boolZUlYJmS = await RexonaSlAYCor.transfer.call(addressMhnF9lk, uintlorrTJ6, {from: accounts[1]});
//		const boolCbLQGZ = await RexonaSlAYCor.transferownership.call(addressQvJCrr1, {from: accounts[4]});

		await expect(RexonaSlAYCor.transfer.call(addressMhnF9lk, uintlorrTJ6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringRnckYB1 = "km9"
		const stringVPDMWbO = "OcW3oKjfg8G3oyvQvtfGj5Pg92j0ykirluCPg4JMpPvwMNdFoGp6RJC"
		const uintFDHyWcQ = BigInt("166")
		const RexonaKR1KeoI = await Rexona.new(stringRnckYB1, stringVPDMWbO, uintFDHyWcQ, {from: accounts[2]});
		const addresshCutWPL = accounts[0]
		const uintmDsnBEW = BigInt("1764")
		const addressb0P5iHe = accounts[2]
		const uinttek8Y9 = BigInt("808")
		const addressu4NQAJO = accounts[2]
//		const boolWvCcuPC = await RexonaKR1KeoI.transferownership.call(addresshCutWPL, {from: accounts[3]});
//		const boolxJ8WHG = await RexonaKR1KeoI.approve.call(addressb0P5iHe, uintmDsnBEW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFJoxt3y = await RexonaKR1KeoI.approveAndCall.call(addressu4NQAJO, uinttek8Y9, {from: accounts[2]});

		await expect(RexonaKR1KeoI.transferownership.call(addresshCutWPL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringg4po86K = "lV9yu6yOfvOhFwsWboYxgc5MZiGbl883QN8qP6jAq7k7m"
		const stringbKpEQjO = "R"
		const uintl7gcD4Z = BigInt("292")
		const RexonaDIaZRJa = await Rexona.new(stringg4po86K, stringbKpEQjO, uintl7gcD4Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintJlL2EIU = BigInt("1551")
		const addressUN5PWSQ = accounts[1]
		const uintUml6ox = BigInt("481")
		const addressdkIWuX0 = accounts[2]
		const addressbRQAzbA = accounts[1]
		const boolESZa2sl = await RexonaDIaZRJa.approve.call(addressUN5PWSQ, uintJlL2EIU, {from: "0x0000000000000000000000000000000000000001"});
		const boolvMwrIq3 = await RexonaDIaZRJa.approveAndCall.call(addressdkIWuX0, uintUml6ox, {from: accounts[1]});
		const boolqJ2tMbr = await RexonaDIaZRJa.transferownership.call(addressbRQAzbA, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringHBVZ4Yt = "y2u34nihgkwIpz4EmpqZ5RauplEMexnoXqG1gbMg5CWu9LX7OWFyqQqjsy29xd"
		const stringJeOoMLE = "EYt301U7xp7JrbB2ozaVJ6Gdk2IQXNP51dKYfZ9ywWIYihac"
		const uintqTFoQ0Y = BigInt("1974")
		const RexonahtPFnCn = await Rexona.new(stringHBVZ4Yt, stringJeOoMLE, uintqTFoQ0Y, {from: accounts[3]});
		const uintJpZQql = BigInt("782")
		const addresshhllvJ8 = accounts[3]
		const uintYa4AopF = BigInt("188")
		const addressUBLxh0q = accounts[3]
		const uintCNjpcjJ = BigInt("1088")
		const addressrK4uvEf = accounts[0]
		const uintEqNSu7 = BigInt("1064")
		const addressPdJysO7 = accounts[4]
		const boolMKNEE0C = await RexonahtPFnCn.approve.call(addresshhllvJ8, uintJpZQql, {from: accounts[3]});
//		const boolo5E14YT = await RexonahtPFnCn.approveAndCall.call(addressUBLxh0q, uintYa4AopF, {from: accounts[2]});
//		const boollLEU1a3 = await RexonahtPFnCn.approve.call(addressrK4uvEf, uintCNjpcjJ, {from: accounts[2]});
//		const booly3OeaGK = await RexonahtPFnCn.approveAndCall.call(addressPdJysO7, uintEqNSu7, {from: accounts[1]});

		assert.equal(boolMKNEE0C, true)
		await expect(RexonahtPFnCn.approveAndCall.call(addressUBLxh0q, uintYa4AopF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringX5y31ZS = "EJJUFfgus3g0ctFVc4jlcNu8FSU"
		const stringRhXqw12 = "pPVK0WdvI2SwRsDQRDzCz4RaLrJDNUBK8eWjro6VagsDUDJnVdPBF63pGGAHoBVN0lVSihVoE3FSEhfAKBV"
		const uintPgpx03 = BigInt("1912")
		const RexonaEv37A5 = await Rexona.new(stringX5y31ZS, stringRhXqw12, uintPgpx03, {from: accounts[4]});
		const uinthSMAook = BigInt("133")
		const addresspgpWIK6 = accounts[4]
		const uintqBu4P7d = BigInt("1583")
		const addressPRWQV8b = accounts[4]
		const uintrVco9FC = BigInt("1583")
		const addresspzH4ykR = accounts[2]
//		const boolaIH1KBr = await RexonaEv37A5.transfer.call(addresspgpWIK6, uinthSMAook, {from: accounts[2]});
//		const boolQ1Oi687 = await RexonaEv37A5.approve.call(addressPRWQV8b, uintqBu4P7d, {from: accounts[4]});
//		const boolxigwDV6 = await RexonaEv37A5.approveAndCall.call(addresspzH4ykR, uintrVco9FC, {from: accounts[0]});

		await expect(RexonaEv37A5.transfer.call(addresspgpWIK6, uinthSMAook, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringz7gW1B2 = "MjV"
		const stringSwUtmDv = "94AjVYIHEr70o6nCs2wtNicYnbKg7WKp1DCs2XkMCuQOQu9Ig6egR8JVXnCHGbVvXqCC9tb7oE0wnCgPmb1NwytKkt"
		const uintTJjPmgW = BigInt("1263")
		const RexonaSlAYCor = await Rexona.new(stringz7gW1B2, stringSwUtmDv, uintTJjPmgW, {from: accounts[2]});
		const uintyS3mtH6 = BigInt("891")
		const addressjxznS5t = accounts[4]
		const uintopIIjkY = BigInt("1505")
		const addressjaOfWW4 = accounts[1]
		const uintJYUJH0O = BigInt("2008")
		const addressoLwwt9C = accounts[3]
		const boolmGxTxH = await RexonaSlAYCor.approveAndCall.call(addressjxznS5t, uintyS3mtH6, {from: accounts[2]});
//		const boolZUlYJmS = await RexonaSlAYCor.transfer.call(addressjaOfWW4, uintopIIjkY, {from: accounts[1]});
//		const boolzdSjYC5 = await RexonaSlAYCor.approve.call(addressoLwwt9C, uintJYUJH0O, {from: accounts[2]});

		assert.equal(boolmGxTxH, true)
		await expect(RexonaSlAYCor.transfer.call(addressjaOfWW4, uintopIIjkY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringnVw5dA3 = "roJWEaQ2lfyl5wQCVkaa1nUEFUMoIaKULitsuHVVDMDaVHA40uGnArHIrTB1rRzIBFc0g5s4oRmMhOoijDmfAJT2LNe4wYf"
		const stringXC2acyu = "tAIaXCWzGfeBPD0cFB46BH6DxnPuRoqHb1OhCvj71GwByBL4zigwvAqktx787cfh9eeovrfvO"
		const uintyJ7rMVH = BigInt("672")
		const Rexonaa8xFtUf = await Rexona.new(stringnVw5dA3, stringXC2acyu, uintyJ7rMVH, {from: accounts[1]});
		const uinto1lkLNI = BigInt("1414")
		const addresssuIvaK = accounts[3]
		const uintUWGI0G5 = BigInt("0")
		const addressgBZNyz = accounts[0]
		const boolgXQ2ddm = await Rexonaa8xFtUf.approve.call(addresssuIvaK, uinto1lkLNI, {from: "0x0000000000000000000000000000000000000001"});
		const boolybK27zu = await Rexonaa8xFtUf.transfer.call(addressgBZNyz, uintUWGI0G5, {from: accounts[2]});

		assert.equal(boolgXQ2ddm, true)
		assert.equal(boolybK27zu, true)
	});

	it('test for Rexona', async () => {
		const stringz7gW1B2 = "MjV"
		const stringSwUtmDv = "94AjVYIHEr70o6nCs2wtNicYnbKg7WKp1DCs2XkMCuQOQu9Ig6egR8JVXnCHGbVvXqCC9tb7oE0wnCgPmb1NwytKkt"
		const uinte1ZdbSm = BigInt("1263")
		const RexonaSlAYCor = await Rexona.new(stringz7gW1B2, stringSwUtmDv, uinte1ZdbSm, {from: accounts[2]});
		const uintn02IjBS = BigInt("0")
		const addressXesZnXc = accounts[5]
		const addressjB4mmy = accounts[4]
		const boolNfVST7W = await RexonaSlAYCor.approveAndCall.call(addressXesZnXc, uintn02IjBS, {from: accounts[2]});
//		const boolJTHaekH = await RexonaSlAYCor.transferownership.call(addressjB4mmy, {from: accounts[0]});

		assert.equal(boolNfVST7W, true)
		await expect(RexonaSlAYCor.transferownership.call(addressjB4mmy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})