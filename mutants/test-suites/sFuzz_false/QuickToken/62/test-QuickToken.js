const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressGrF22MK = "0x0000000000000000000000000000000000000001"
		const addressv3PuLKq = "0x0000000000000000000000000000000000000001"
		const QuickTokenpM7Ehom = await QuickToken.new(addressGrF22MK, addressv3PuLKq, {from: accounts[1]});
		const addressoOnJv1I = "0x0000000000000000000000000000000000000001"
		const addressAZPAK1m = accounts[3]
		const addressQsurNnD = accounts[4]
		const addresshimmSQ = accounts[3]
		const addresslfg3MtP = accounts[3]
		const uintQVfDsYx = BigInt("1120")
		const addressPnoaD6Q = accounts[0]
//		const addressnIZk4w7 = await QuickTokenpM7Ehom.setMinter.call(addressoOnJv1I, {from: accounts[0]});
//		const uinttmiMJXc = await QuickTokenpM7Ehom.allowance.call(addressQsurNnD, addressAZPAK1m, {from: accounts[0]});
//		const addressQNhV0Wj = await QuickTokenpM7Ehom.setMinter.call(addresshimmSQ, {from: accounts[5]});
//		const uintmnTWict = await QuickTokenpM7Ehom.balanceOf.call(addresslfg3MtP, {from: accounts[1]});
//		const boolqSIcYAB = await QuickTokenpM7Ehom.transfer.call(addressPnoaD6Q, uintQVfDsYx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenpM7Ehom.setMinter.call(addressoOnJv1I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTOUsrNZ = accounts[0]
		const address60Nxsy = accounts[3]
		const QuickTokennHNuFlI = await QuickToken.new(addressTOUsrNZ, address60Nxsy, {from: accounts[0]});
		const addressFs6ogxB = accounts[2]
		const addressgYFG7gV = accounts[4]
		const addresspmYPcQR = accounts[0]
		const addressFzJlBU1 = accounts[3]
		const addressvcSUsnB = accounts[1]
		const addresshrT9vUj = accounts[0]
		const addressi18Us7j = accounts[4]
		const uinterqtXeR = await QuickTokennHNuFlI.allowance.call(addressgYFG7gV, addressFs6ogxB, {from: accounts[0]});
		const uinti9dtREj = await QuickTokennHNuFlI.balanceOf.call(addresspmYPcQR, {from: accounts[4]});
		const uintjG46p47 = await QuickTokennHNuFlI.allowance.call(addressvcSUsnB, addressFzJlBU1, {from: accounts[3]});
		const uintojCLOKa = await QuickTokennHNuFlI.allowance.call(addressi18Us7j, addresshrT9vUj, {from: accounts[1]});

		assert.equal(uinterqtXeR, BigInt("0"))
		assert.equal(uinti9dtREj, BigInt("2000000000000"))
		assert.equal(uintjG46p47, BigInt("0"))
		assert.equal(uintojCLOKa, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresssLPOIfO = accounts[3]
		const addresslzO5IL = accounts[0]
		const QuickTokenKcCj2Uf = await QuickToken.new(addresssLPOIfO, addresslzO5IL, {from: accounts[4]});
		const addressBOzaHVs = accounts[1]
		const uintGjvYgmt = BigInt("1341")
		const addressSkzbTG2 = accounts[3]
		const uintCQ7A6U = BigInt("305")
		const addressLG0ZUR8 = accounts[3]
		const addressgFDrqTC = accounts[0]
		const addressgiHdMQI = accounts[0]
		const uintJy6rTJw = BigInt("1289")
		const addressmchkC3 = accounts[2]
		const uintLwzrVOX = await QuickTokenKcCj2Uf.balanceOf.call(addressBOzaHVs, {from: accounts[0]});
		const boolq5SA0Ez = await QuickTokenKcCj2Uf.approve.call(addressSkzbTG2, uintGjvYgmt, {from: accounts[1]});
//		const addresscjhxJZ = await QuickTokenKcCj2Uf.mint.call(addressLG0ZUR8, uintCQ7A6U, {from: accounts[2]});
//		const uintatZmsu0 = await QuickTokenKcCj2Uf.allowance.call(addressgiHdMQI, addressgFDrqTC, {from: "0x0000000000000000000000000000000000000001"});
//		const boole9GWwwE = await QuickTokenKcCj2Uf.transfer.call(addressmchkC3, uintJy6rTJw, {from: accounts[4]});

		assert.equal(boolq5SA0Ez, true)
		assert.equal(uintLwzrVOX, BigInt("0"))
		await expect(QuickTokenKcCj2Uf.mint.call(addressLG0ZUR8, uintCQ7A6U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressjUM2OXs = accounts[0]
		const addresskqOMlS1 = accounts[2]
		const QuickTokenLG1UAYF = await QuickToken.new(addressjUM2OXs, addresskqOMlS1, {from: accounts[0]});
		const uintcSkRqIk = BigInt("792")
		const addressK2Bigca = accounts[0]
		const addressiN1tWlO = accounts[0]
		const uintUwgcaqR = BigInt("1510")
		const addressvedtsu = accounts[1]
		const uintXZ4soJ4 = BigInt("413")
		const addresszmn1wyP = accounts[4]
		const addressXicybGP = accounts[1]
		const addressJfLjrBm = accounts[0]
//		const boolnqmuUjr = await QuickTokenLG1UAYF.transferFrom.call(addressiN1tWlO, addressK2Bigca, uintcSkRqIk, {from: "0x0000000000000000000000000000000000000001"});
//		const addressEWgQXif = await QuickTokenLG1UAYF.mint.call(addressvedtsu, uintUwgcaqR, {from: accounts[4]});
//		const addressjoF3xJi = await QuickTokenLG1UAYF.mint.call(addresszmn1wyP, uintXZ4soJ4, {from: accounts[3]});
//		const uintOIhT8p6 = await QuickTokenLG1UAYF.balanceOf.call(addressXicybGP, {from: accounts[1]});
//		const addressjimEdB4 = await QuickTokenLG1UAYF.setMinter.call(addressJfLjrBm, {from: accounts[1]});

		await expect(QuickTokenLG1UAYF.transferFrom.call(addressiN1tWlO, addressK2Bigca, uintcSkRqIk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressSigrB7e = accounts[1]
		const addressSbCrRGO = accounts[5]
		const QuickTokenqq4w6Lp = await QuickToken.new(addressSigrB7e, addressSbCrRGO, {from: "0x0000000000000000000000000000000000000001"});
		const addressrsKLe5c = accounts[3]
		const addresslnra3xK = accounts[2]
		const uintC0ywCyo = BigInt("1317")
		const addressLMqTIsy = accounts[4]
		const addressKyIH0cS = accounts[3]
		const uinti4qKFxD = BigInt("772")
		const addressb2H1NMs = accounts[5]
		const uintSsJvr7F = BigInt("1689")
		const addressMeE1RLx = "0x0000000000000000000000000000000000000001"
		const uintQDomjco = await QuickTokenqq4w6Lp.allowance.call(addresslnra3xK, addressrsKLe5c, {from: accounts[3]});
		const boolTAnj5it = await QuickTokenqq4w6Lp.transferFrom.call(addressKyIH0cS, addressLMqTIsy, uintC0ywCyo, {from: accounts[1]});
		const boolRZu3YM = await QuickTokenqq4w6Lp.approve.call(addressb2H1NMs, uinti4qKFxD, {from: accounts[5]});
		const boolQ2fV3ZS = await QuickTokenqq4w6Lp.transfer.call(addressMeE1RLx, uintSsJvr7F, {from: accounts[5]});
	});

	it('test for QuickToken', async () => {
		const addressbai5r7z = accounts[1]
		const address1ms6qt = accounts[4]
		const QuickTokenESe0Bye = await QuickToken.new(addressbai5r7z, address1ms6qt, {from: accounts[1]});
		const addresswsivGf = accounts[0]
		const uintfgGMNf = BigInt("223")
		const addressKWF6uyC = accounts[2]
		const uintogpQB3w = BigInt("268")
		const addressw4xpAb = accounts[0]
		const uintQZSTJNi = await QuickTokenESe0Bye.balanceOf.call(addresswsivGf, {from: accounts[1]});
//		const boolHJD7Zg = await QuickTokenESe0Bye.transfer.call(addressKWF6uyC, uintfgGMNf, {from: accounts[2]});
//		const boolim7th8k = await QuickTokenESe0Bye.approve.call(addressw4xpAb, uintogpQB3w, {from: accounts[0]});

		assert.equal(uintQZSTJNi, BigInt("0"))
		await expect(QuickTokenESe0Bye.transfer.call(addressKWF6uyC, uintfgGMNf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressMs9GZfu = accounts[5]
		const addressgPSPMfU = accounts[1]
		const QuickTokenKxpju6w = await QuickToken.new(addressMs9GZfu, addressgPSPMfU, {from: accounts[1]});
		const uintVC9V4p9 = BigInt("193")
		const addressFb2Lh8S = accounts[3]
		const addressCnUBNS5 = accounts[2]
		const addressO1O62eS = await QuickTokenKxpju6w.mint.call(addressFb2Lh8S, uintVC9V4p9, {from: accounts[1]});
		const uintRkpcqNT = await QuickTokenKxpju6w.balanceOf.call(addressCnUBNS5, {from: accounts[3]});

		assert.equal(uintRkpcqNT, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressk2MZ800 = accounts[5]
		const addressHXRrHtB = accounts[1]
		const QuickTokenKxpju6w = await QuickToken.new(addressk2MZ800, addressHXRrHtB, {from: accounts[1]});
		const uintbQ45xi = BigInt("193")
		const addressbuY6UN = "0x0000000000000000000000000000000000000000"
		const uintInvA0QW = BigInt("120")
		const addressN5TQEC3 = accounts[1]
//		const addressO1O62eS = await QuickTokenKxpju6w.mint.call(addressbuY6UN, uintbQ45xi, {from: accounts[1]});
//		const addresssA0AmX4 = await QuickTokenKxpju6w.mint.call(addressN5TQEC3, uintInvA0QW, {from: accounts[4]});

		await expect(QuickTokenKxpju6w.mint.call(addressbuY6UN, uintbQ45xi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})