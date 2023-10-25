const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinP0nWeh = await DJCoin.new({from: accounts[4]});
		const addressrQ6oUk5 = accounts[2]
		const addressnBDPhjJ = accounts[1]
		const addresso3LCbK = accounts[2]
		const uintZRwfua = BigInt("193")
		const addressyo56ePU = accounts[4]
		const addressii9dYjd = await DJCoinP0nWeh.validRecipient.call(addressrQ6oUk5, {from: accounts[0]});
		const uint256o52wwUM = await DJCoinP0nWeh.allowance.call(addresso3LCbK, addressnBDPhjJ, {from: accounts[2]});
		const boolaW43xXG = await DJCoinP0nWeh.transfer.call(addressyo56ePU, uintZRwfua, {from: "0x0000000000000000000000000000000000000001"});
		const addresskce22iv = await DJCoinP0nWeh.owner.call({from: accounts[0]});

		await expect(DJCoinP0nWeh.validRecipient.call(addressrQ6oUk5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinh7tl1oY = await DJCoin.new({from: accounts[0]});
		const uinthP2DoNw = BigInt("1809")
		const addressr7umvOb = accounts[3]
		const addresssjYs95p = accounts[4]
		const addresso2cakP6 = accounts[2]
		const uintG2uSbgz = BigInt("327")
		const addressiYD9YDu = accounts[1]
		const addressMHWNgl9 = accounts[0]
		const boolYJanKFQ = await DJCoinh7tl1oY.transferFrom.call(addresssjYs95p, addressr7umvOb, uinthP2DoNw, {from: accounts[2]});
		const uint256rJUX4Za = await DJCoinh7tl1oY.balanceOf.call(addresso2cakP6, {from: accounts[2]});
		const boolzGvolni = await DJCoinh7tl1oY.approve.call(addressiYD9YDu, uintG2uSbgz, {from: "0x0000000000000000000000000000000000000001"});
		const addressgZQxf9M = await DJCoinh7tl1oY.validRecipient.call(addressMHWNgl9, {from: accounts[4]});

		await expect(DJCoinh7tl1oY.transferFrom.call(addresssjYs95p, addressr7umvOb, uinthP2DoNw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinrhRfGec = await DJCoin.new({from: accounts[4]});
		const addressAjSXmyJ = accounts[1]
		const uintC800Igz = BigInt("615")
		const address9rETYR = accounts[0]
		const uintlY07iOX = BigInt("19")
		const addressMXSXG8M = accounts[3]
		const addressO6QjVj = accounts[0]
		const uintIKaT3uu = BigInt("1364")
		const addressIaKnhM = accounts[4]
		const uintDqzgTLO = BigInt("1840")
		const addressym9FiOy = accounts[2]
		const addressOIXIva0 = accounts[2]
		const uint256JUvxfB = await DJCoinrhRfGec.balanceOf.call(addressAjSXmyJ, {from: accounts[0]});
		const boolDj9h9wS = await DJCoinrhRfGec.approve.call(address9rETYR, uintC800Igz, {from: accounts[2]});
		const boolkxyGSMe = await DJCoinrhRfGec.transferFrom.call(addressO6QjVj, addressMXSXG8M, uintlY07iOX, {from: accounts[2]});
		const boolAwFvno = await DJCoinrhRfGec.approve.call(addressIaKnhM, uintIKaT3uu, {from: accounts[1]});
		const booljD3rUlD = await DJCoinrhRfGec.transferFrom.call(addressOIXIva0, addressym9FiOy, uintDqzgTLO, {from: accounts[0]});
		const uint256Y6pNk8 = await DJCoinrhRfGec.totalSupply.call({from: accounts[3]});

		assert.equal(boolDj9h9wS, true)
		assert.equal(uint256JUvxfB, BigInt("0"))
		await expect(DJCoinrhRfGec.transferFrom.call(addressO6QjVj, addressMXSXG8M, uintlY07iOX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinwJ5ZUi = await DJCoin.new({from: accounts[5]});
		const uintXh8pviM = BigInt("488")
		const uintd1bXslM = BigInt("539")
		const uintzrzg98S = BigInt("1481")
		const uintRBOaP5E = BigInt("228")
		const addressFJwyafb = accounts[5]
		const addressQtDO1pp = accounts[1]
		const uinthkDN2w = BigInt("291")
		const addressRSb7rjp = accounts[3]
		const uint2562wyt4v = await DJCoinwJ5ZUi.burn.call(uintd1bXslM, uintXh8pviM, {from: accounts[0]});
		const uint256SYhBXeZ = await DJCoinwJ5ZUi.burn.call(uintRBOaP5E, uintzrzg98S, {from: accounts[0]});
		const uint256bbhDj9J = await DJCoinwJ5ZUi.allowance.call(addressQtDO1pp, addressFJwyafb, {from: accounts[4]});
		const boolzepUgny = await DJCoinwJ5ZUi.decreaseAllowance.call(addressRSb7rjp, uinthkDN2w, {from: accounts[0]});
		const addressqh5kvW2 = await DJCoinwJ5ZUi.owner.call({from: accounts[1]});

		await expect(DJCoinwJ5ZUi.burn.call(uintd1bXslM, uintXh8pviM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinvUpSD87 = await DJCoin.new({from: accounts[4]});
		const uintoD3cFU = BigInt("211")
		const addressh4yDysv = accounts[0]
		const uintedEv84p = BigInt("82")
		const addresswoOxXQ = accounts[5]
		const uintuVR9yB5 = BigInt("1361")
		const addressHTGXeQ7 = "0x0000000000000000000000000000000000000001"
		const addressbKShaN = accounts[1]
		const boolWDY88Yh = await DJCoinvUpSD87.changetokensPerBlock.call(uintoD3cFU, {from: accounts[1]});
		const addressERfKN8O = await DJCoinvUpSD87.validRecipient.call(addressh4yDysv, {from: accounts[3]});
		const boolZfzbPQ5 = await DJCoinvUpSD87.approve.call(addresswoOxXQ, uintedEv84p, {from: "0x0000000000000000000000000000000000000001"});
		const boolWZO8rlf = await DJCoinvUpSD87.transferFrom.call(addressbKShaN, addressHTGXeQ7, uintuVR9yB5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWDY88Yh, true)
		await expect(DJCoinvUpSD87.validRecipient.call(addressh4yDysv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqa5Y4dQ = await DJCoin.new({from: accounts[4]});
		const uintt4ggT1g = BigInt("623")
		const addressYSw3XLg = accounts[4]
		const uintBQ9EYP = BigInt("289")
		const addresskIaOWfa = accounts[3]
		const addressrOM0OA8 = accounts[2]
		const booljutDW2p = await DJCoinqa5Y4dQ.increaseAllowance.call(addressYSw3XLg, uintt4ggT1g, {from: accounts[1]});
		const boolJNU1y9h = await DJCoinqa5Y4dQ.decreaseAllowance.call(addresskIaOWfa, uintBQ9EYP, {from: accounts[2]});
		const uint256eu4HCY0 = await DJCoinqa5Y4dQ.balanceOf.call(addressrOM0OA8, {from: accounts[5]});

		assert.equal(boolJNU1y9h, true)
		assert.equal(booljutDW2p, true)
		assert.equal(uint256eu4HCY0, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinGryAeyh = await DJCoin.new({from: accounts[1]});
		const addressT0X9eW5 = accounts[5]
		const uintaSknt4d = BigInt("41")
		const addressiTx164M = accounts[5]
		const uint256wTQlFBD = await DJCoinGryAeyh.balanceOf.call(addressT0X9eW5, {from: accounts[3]});
		const booldc4Yjvn = await DJCoinGryAeyh.transfer.call(addressiTx164M, uintaSknt4d, {from: accounts[2]});

		assert.equal(uint256wTQlFBD, BigInt("0"))
		await expect(DJCoinGryAeyh.transfer.call(addressiTx164M, uintaSknt4d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGryAeyh = await DJCoin.new({from: accounts[1]});
		const addressW83ssb = accounts[4]
		const addressUhEjUv = accounts[0]
		const addresszgjpXPF = accounts[4]
		const uint256X4QN6A = await DJCoinGryAeyh.allowance.call(addressUhEjUv, addressW83ssb, {from: accounts[3]});
		await DJCoinGryAeyh.onlyOwner.call({from: accounts[1]});
		const uint256wTQlFBD = await DJCoinGryAeyh.balanceOf.call(addresszgjpXPF, {from: accounts[3]});
		await DJCoinGryAeyh.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256X4QN6A, BigInt("0"))
		await expect(DJCoinGryAeyh.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGryAeyh = await DJCoin.new({from: accounts[1]});
		const addresstEpkyXE = accounts[5]
		const uintKJKVSuG = BigInt("280")
		const addressaWa3Ohp = accounts[1]
		const uint256wTQlFBD = await DJCoinGryAeyh.balanceOf.call(addresstEpkyXE, {from: accounts[3]});
		const bool8zpTO6 = await DJCoinGryAeyh.decreaseAllowance.call(addressaWa3Ohp, uintKJKVSuG, {from: accounts[1]});
		await DJCoinGryAeyh.renounceOwnership.call({from: accounts[1]});

		assert.equal(bool8zpTO6, true)
		assert.equal(uint256wTQlFBD, BigInt("0"))
		await expect(DJCoinGryAeyh.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGryAeyh = await DJCoin.new({from: accounts[1]});
		const uintJzxOAd = BigInt("1139")
		const uintM2M4K0Y = BigInt("1241")
		const addressfJulA6z = accounts[5]
		const uint256lAyWDjP = await DJCoinGryAeyh.burn.call(uintM2M4K0Y, uintJzxOAd, {from: accounts[1]});
		const uint256wTQlFBD = await DJCoinGryAeyh.balanceOf.call(addressfJulA6z, {from: accounts[3]});

		assert.equal(uint256lAyWDjP, BigInt("1860810000000"))
		assert.equal(uint256wTQlFBD, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinXGHbkV = await DJCoin.new({from: accounts[2]});
		const uintntnw7OM = BigInt("1300")
		const uintulN3FlG = BigInt("671")
		const addressHa86CuZ = accounts[0]
		const addressKyaXa7r = await DJCoinXGHbkV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256C4nvFqH = await DJCoinXGHbkV.burn.call(uintulN3FlG, uintntnw7OM, {from: accounts[1]});
		const addressnNbhmo6 = await DJCoinXGHbkV.validRecipient.call(addressHa86CuZ, {from: accounts[2]});
		const uint256EHyB2sY = await DJCoinXGHbkV.totalSupply.call({from: accounts[2]});

		assert.equal(addressKyaXa7r, 0xE5a2b0c92ec51F787682780519507B0010A312E1)
		await expect(DJCoinXGHbkV.burn.call(uintulN3FlG, uintntnw7OM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinlGCSwZo = await DJCoin.new({from: accounts[4]});
		const uint256Da9IFPl = await DJCoinlGCSwZo.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await DJCoinlGCSwZo.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256Da9IFPl, BigInt("2100000000000"))
		await expect(DJCoinlGCSwZo.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGryAeyh = await DJCoin.new({from: accounts[1]});
		const uintCefQxK8 = BigInt("0")
		const addressdNxDiDN = accounts[1]
		const uintVe93kk0 = BigInt("560")
		const addressP71G12A = accounts[1]
		const addressShLFRSv = accounts[3]
		const addressUkmH5U = accounts[0]
		const uintvaLm7AE = BigInt("208")
		const addressKNXFlpe = accounts[4]
		const uint256FoE6Ww = await DJCoinGryAeyh.totalSupply.call({from: accounts[1]});
		const boolZkiPryI = await DJCoinGryAeyh.transfer.call(addressdNxDiDN, uintCefQxK8, {from: accounts[4]});
		await DJCoinGryAeyh.renounceOwnership.call({from: accounts[4]});
		const boolK2vG4nj = await DJCoinGryAeyh.transfer.call(addressP71G12A, uintVe93kk0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dl1imx0 = await DJCoinGryAeyh.allowance.call(addressUkmH5U, addressShLFRSv, {from: accounts[3]});
		const booljSQLRNP = await DJCoinGryAeyh.changetokensPerBlock.call(uintvaLm7AE, {from: accounts[0]});
		const uint256wTQlFBD = await DJCoinGryAeyh.balanceOf.call(addressKNXFlpe, {from: accounts[3]});

		assert.equal(boolZkiPryI, true)
		assert.equal(uint256FoE6Ww, BigInt("2100000000000"))
		await expect(DJCoinGryAeyh.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinyEOvzmG = await DJCoin.new({from: accounts[0]});
		const addressHDZHL0O = accounts[5]
		const uintth67Am4 = BigInt("137")
		const uinty5AxOop = BigInt("591")
		const addressY7wxmmR = accounts[0]
		const addressHeeO6pd = accounts[1]
		const addresslJO0RNM = await DJCoinyEOvzmG.transferOwnership.call(addressHDZHL0O, {from: accounts[0]});
		await DJCoinyEOvzmG.onlyOwner.call({from: accounts[1]});
		const boolxlUyu2V = await DJCoinyEOvzmG.changetokensPerBlock.call(uintth67Am4, {from: accounts[3]});
		await DJCoinyEOvzmG.onlyOwner.call({from: accounts[1]});
		const boolKykWtBV = await DJCoinyEOvzmG.transferFrom.call(addressHeeO6pd, addressY7wxmmR, uinty5AxOop, {from: accounts[4]});

		await expect(DJCoinyEOvzmG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBBmbmEh = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKJcga8A = BigInt("1492")
		const addressI5Z4ce0 = accounts[0]
		const addressvCLFBDi = accounts[2]
		const uintYsVMLlm = BigInt("1367")
		const uintFt5psCW = BigInt("1216")
		const uintOb9rr6 = BigInt("845")
		const addressOgJuwXS = accounts[3]
		const uint256HEUuiEN = await DJCoinBBmbmEh.totalSupply.call({from: accounts[3]});
		const boollW5JOAg = await DJCoinBBmbmEh.transferFrom.call(addressvCLFBDi, addressI5Z4ce0, uintKJcga8A, {from: accounts[1]});
		const uint256nwWK1YB = await DJCoinBBmbmEh.burn.call(uintFt5psCW, uintYsVMLlm, {from: accounts[2]});
		const boolM5MsVsh = await DJCoinBBmbmEh.approve.call(addressOgJuwXS, uintOb9rr6, {from: accounts[4]});
		await DJCoinBBmbmEh.onlyOwner.call({from: accounts[4]});
	});
})