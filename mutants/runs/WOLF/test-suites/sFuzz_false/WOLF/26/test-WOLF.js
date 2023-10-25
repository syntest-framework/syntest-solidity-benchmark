const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringtLxi1UI = "7tgqHwwbpLGiWJ2N8hqMDGYVruOfYllEK6L1xjFLYzCWBSKHoWLQQLtuaTKUjuVHNEVw48VW539KlrO8PvG"
		const stringXWjrLM6 = "SgVovP0AVOtSHxwRn9JGhlhB9f1VWiDsVl8Icb"
		const uintqUP5wmG = BigInt("1958")
		const WOLFU8dOCnC = await WOLF.new(stringtLxi1UI, stringXWjrLM6, uintqUP5wmG, {from: accounts[1]});
		const uintCwchmRU = BigInt("1812")
		const addresszBveeuP = "0x0000000000000000000000000000000000000001"
		const uintOyq2PCJ = BigInt("678")
		const addresstefJDoz = accounts[1]
		const addressEm4ufGK = accounts[3]
		const boolBSP4bKG = await WOLFU8dOCnC.approveAndCall.call(addresszBveeuP, uintCwchmRU, {from: accounts[1]});
		const boolo0k9gQu = await WOLFU8dOCnC.transferFrom.call(addressEm4ufGK, addresstefJDoz, uintOyq2PCJ, {from: accounts[1]});

		assert.equal(boolBSP4bKG, true)
		await expect(WOLFU8dOCnC.transferFrom.call(addressEm4ufGK, addresstefJDoz, uintOyq2PCJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmIOrSH = "qMtn4HQqEHuHu7s6xHwhl12SSH07cCRrtjzO3emhW9HJOBoq1L"
		const stringWLRpyuV = "qjIWF33TGQ3eoat6mi9rmvSOKDmKKIqGtZ5B9Lnip"
		const uintw5QF3Z = BigInt("801")
		const WOLFN6Q8cvo = await WOLF.new(stringmIOrSH, stringWLRpyuV, uintw5QF3Z, {from: accounts[4]});
		const uintMBroIC = BigInt("1413")
		const addressLPadxaC = accounts[4]
		const uintsQznHZF = BigInt("1964")
		const address1ZVLkl = accounts[1]
		const boolr2havbf = await WOLFN6Q8cvo.approve.call(addressLPadxaC, uintMBroIC, {from: accounts[1]});
		const boolglFWHRb = await WOLFN6Q8cvo.transfer.call(address1ZVLkl, uintsQznHZF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolr2havbf, true)
		await expect(WOLFN6Q8cvo.transfer.call(address1ZVLkl, uintsQznHZF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringvH1klkB = "fbW9TuAqchmu7RQXXi6RrfbvM5rQNsdzYJ6MPFdFc4UPU47XKOHjCCiH5wY"
		const stringn5dR5Dh = "8nhvnICyt4uKqGKMhp6Y"
		const uintP4MLphO = BigInt("1354")
		const WOLFc7Q9Voh = await WOLF.new(stringvH1klkB, stringn5dR5Dh, uintP4MLphO, {from: accounts[1]});
		const uintmBOGpaA = BigInt("937")
		const addressW776tz7 = accounts[1]
		const uintjaZEUvf = BigInt("1913")
		const addressaIPss2V = accounts[2]
		const boolRARVWd2 = await WOLFc7Q9Voh.transfer.call(addressW776tz7, uintmBOGpaA, {from: accounts[4]});
		const boolx8itaBC = await WOLFc7Q9Voh.transfer.call(addressaIPss2V, uintjaZEUvf, {from: accounts[3]});

		await expect(WOLFc7Q9Voh.transfer.call(addressW776tz7, uintmBOGpaA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtLxi1UI = "7tgqHwwbpLGiWJ2N8hqMDGYVruOfYllEK6L1xjFLYzCWBSKHoWLQQLtuaTKUjuVHNEVw48VW539KlrO8PvG"
		const stringXWjrLM6 = "SgVovP0AVOtSHxwRn9JGhlhB9f1VWiDsVl8Icb"
		const uintTgVA0S4 = BigInt("1958")
		const WOLFU8dOCnC = await WOLF.new(stringtLxi1UI, stringXWjrLM6, uintTgVA0S4, {from: accounts[1]});
		const uintORiyWWN = BigInt("1803")
		const addressrTjRCU = "0x0000000000000000000000000000000000000001"
		const addressrBIDhIW = accounts[1]
		const uintsLZJCd1 = BigInt("117")
		const addressQDfsaV4 = accounts[3]
		const uintY2WIeS = BigInt("678")
		const addressCIuwjbE = accounts[1]
		const addresspKAvf54 = accounts[3]
		const boolBSP4bKG = await WOLFU8dOCnC.approveAndCall.call(addressrTjRCU, uintORiyWWN, {from: accounts[1]});
		const boolRU1I3BD = await WOLFU8dOCnC.transferownership.call(addressrBIDhIW, {from: accounts[4]});
		const boolFuUmlS = await WOLFU8dOCnC.approve.call(addressQDfsaV4, uintsLZJCd1, {from: accounts[0]});
		const boolo0k9gQu = await WOLFU8dOCnC.transferFrom.call(addresspKAvf54, addressCIuwjbE, uintY2WIeS, {from: accounts[1]});

		assert.equal(boolBSP4bKG, true)
		await expect(WOLFU8dOCnC.transferownership.call(addressrBIDhIW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIsR9zKj = "FSzjEKowhBg5ZvXnbrpP8H3af2USH18CXO2yro77tJE8PlN0ibPDE1d7ttFrJSCjAIx6Y3LcUuhUzAtDFKwZT2M0ID7WexL"
		const stringrxl5LKh = "8"
		const uintYpVbR9M = BigInt("1155")
		const WOLFt4qhgBW = await WOLF.new(stringIsR9zKj, stringrxl5LKh, uintYpVbR9M, {from: "0x0000000000000000000000000000000000000001"});
		const uintFjgnrrX = BigInt("40")
		const addressg2IUssG = accounts[5]
		const uintK3Gjl7w = BigInt("1496")
		const addressSUKGBuR = accounts[2]
		const uintPCWN9wY = BigInt("382")
		const addressdn6ap6U = accounts[0]
		const uintpFEq0W6 = BigInt("1423")
		const addressc5fBg9 = accounts[4]
		const boolcV7zsY = await WOLFt4qhgBW.transfer.call(addressg2IUssG, uintFjgnrrX, {from: accounts[4]});
		const boolsGPFJLI = await WOLFt4qhgBW.approveAndCall.call(addressSUKGBuR, uintK3Gjl7w, {from: accounts[0]});
		const boolV8VErxg = await WOLFt4qhgBW.approve.call(addressdn6ap6U, uintPCWN9wY, {from: accounts[5]});
		const boolP6V7dfX = await WOLFt4qhgBW.approve.call(addressc5fBg9, uintpFEq0W6, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringtLxi1UI = "7tgqHwwbpLGiWJ2N8hqMDGYVruOfYllEK6L1xjFLYzCWBSKHoWLQQLtuaTKUjuVHNEVw48VW539KlrO8PvG"
		const stringXWjrLM6 = "SgVovP0AVOtSHxwRn9JGhlhB9f1VWiDsVl8Icb"
		const uintIu76Zzp = BigInt("1958")
		const WOLFU8dOCnC = await WOLF.new(stringtLxi1UI, stringXWjrLM6, uintIu76Zzp, {from: accounts[1]});
		const uintyDYT060 = BigInt("1803")
		const addresssDHFsJ = "0x00000000000000000000000000000000000000-1"
		const uintrPdNn9a = BigInt("117")
		const addressg0eyETu = accounts[3]
		const uintyft1WDK = BigInt("678")
		const addressFwePjFu = accounts[1]
		const addressRXmkgjM = accounts[3]
		const boolBSP4bKG = await WOLFU8dOCnC.approveAndCall.call(addresssDHFsJ, uintyDYT060, {from: accounts[1]});
		const boolFuUmlS = await WOLFU8dOCnC.approve.call(addressg0eyETu, uintrPdNn9a, {from: accounts[0]});
		const boolo0k9gQu = await WOLFU8dOCnC.transferFrom.call(addressRXmkgjM, addressFwePjFu, uintyft1WDK, {from: accounts[1]});

		await expect(WOLFU8dOCnC.approveAndCall.call(addresssDHFsJ, uintyDYT060, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnaT4BJ = "jvAv3aELm6x8WOqBPcme6Vyu6y7pYmp8FwwUhyMuFkwTvY5JDnjjY6"
		const stringFqfHcE8 = "9opB6"
		const uintJw8N0q = BigInt("450")
		const WOLFtZYuieP = await WOLF.new(stringnaT4BJ, stringFqfHcE8, uintJw8N0q, {from: accounts[0]});
		const uintuhhtcqA = BigInt("0")
		const addressBBYCBPg = accounts[3]
		const addressUKjHDNw = accounts[2]
		const addressexZvZpI = accounts[0]
		const addressp0NTiVf = accounts[1]
		const boolajgOpD5 = await WOLFtZYuieP.transferFrom.call(addressUKjHDNw, addressBBYCBPg, uintuhhtcqA, {from: accounts[5]});
		const boolMNGutIh = await WOLFtZYuieP.transferownership.call(addressexZvZpI, {from: accounts[1]});
		const boole5LtZ7d = await WOLFtZYuieP.transferownership.call(addressp0NTiVf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolajgOpD5, true)
		await expect(WOLFtZYuieP.transferownership.call(addressexZvZpI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringLTCC8nq = "hmsPRqI4yjbLkPgfOfaPPrXq4eJUKGZlsUV9qNATVyab7MNcFf4tHrdD1eMA5Q87NjIMPSEw17sOWV7fpTKiWH1"
		const stringnKGc60j = "hMt157lhmbxVhFbp0n8xvSesxfS5zudPr599JcbTLe6anI0EeaLxm2578KtQgfDCs9z7aaHRtZRY7NYQwHL2XaBTRvuLgK"
		const uintiwoZR2U = BigInt("611")
		const WOLFYqkKXk = await WOLF.new(stringLTCC8nq, stringnKGc60j, uintiwoZR2U, {from: accounts[5]});
		const uintrjSw3E = BigInt("0")
		const addressYXLPwgN = accounts[3]
		const boolXoNHjGk = await WOLFYqkKXk.approveAndCall.call(addressYXLPwgN, uintrjSw3E, {from: accounts[5]});

		assert.equal(boolXoNHjGk, true)
	});
})