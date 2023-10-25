const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100Le2s4UY = await Token50X100.new({from: accounts[4]});
		const uintShJYjxi = BigInt("1156")
		const addresshYYz1KF = accounts[3]
		const addressDQO3UL2 = accounts[4]
		const uintUfaQ6wI = BigInt("1304")
		const addresscQCFyMJ = "0x0000000000000000000000000000000000000001"
		const uintHsoO23c = BigInt("1764")
		const uintIHICTDR = BigInt("157")
		const boolHDMIh3u = await Token50X100Le2s4UY.issueTokens.call(addressDQO3UL2, addresshYYz1KF, uintShJYjxi, {from: "0x0000000000000000000000000000000000000001"});
		const boolWcYcSDh = await Token50X100Le2s4UY.transfer.call(addresscQCFyMJ, uintUfaQ6wI, {from: accounts[3]});
		const booloWkEy2i = await Token50X100Le2s4UY.safeLock.call(uintIHICTDR, uintHsoO23c, {from: accounts[0]});

		await expect(Token50X100Le2s4UY.issueTokens.call(addressDQO3UL2, addresshYYz1KF, uintShJYjxi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const addressXWlrid3 = accounts[3]
		const uintRB3EIJh = BigInt("1106")
		const addressYfyZkgh = accounts[0]
		const uint256S4BlEU = await Token50X100aDwfZrd.balanceOf.call(addressXWlrid3, {from: accounts[3]});
		const boolaRmILX7 = await Token50X100aDwfZrd.transfer.call(addressYfyZkgh, uintRB3EIJh, {from: accounts[2]});

		assert.equal(uint256S4BlEU, BigInt("0"))
		await expect(Token50X100aDwfZrd.transfer.call(addressYfyZkgh, uintRB3EIJh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Ya1O3uc = await Token50X100.new({from: accounts[1]});
		const uintSIMrNoF = BigInt("1491")
		const addressthhMEB = accounts[4]
		const uintoQfPRx = BigInt("1008")
		const addressugoD4GN = accounts[2]
		const boolKaPxl9W = await Token50X100Ya1O3uc.approve.call(addressthhMEB, uintSIMrNoF, {from: accounts[5]});
		const boola0FyJs2 = await Token50X100Ya1O3uc.approve.call(addressugoD4GN, uintoQfPRx, {from: accounts[3]});

		assert.equal(boolKaPxl9W, true)
		assert.equal(boola0FyJs2, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100Wyxadzk = await Token50X100.new({from: accounts[4]});
		const addresshtFfghZ = accounts[2]
		const addressFTT3Xv = accounts[3]
		const uintYWHjBe1 = BigInt("1098")
		const uintsGSVhqL = BigInt("1406")
		const addressCywciF8 = accounts[0]
		const addressfQFnCNz = accounts[5]
		const uintk5Z1ZZH = BigInt("183")
		const stringlEErS0 = "2MoGkZuU88csmBYIYF9I5dP2jkKd5CstGCdb4BBy7N8CHfc14tUvIqWwaQAj3C5chxzDb4pn5sN"
		const stringoeJSGOV = "viXDVh9gFDXrxKlz87IqC8kJ2fHasfGJwPPirhacpKC33jm3RbPw7UHOH1qCvDdCS5rSMoXt9OudDYMTaM2q7U6"
		const uint2568xukbM = await Token50X100Wyxadzk.allowance.call(addressFTT3Xv, addresshtFfghZ, {from: accounts[3]});
		const boolU7bUxlO = await Token50X100Wyxadzk._transfer.call(addressfQFnCNz, addressCywciF8, uintsGSVhqL, uintYWHjBe1, {from: accounts[3]});
		await Token50X100Wyxadzk.setSymbolNameDecimals.call(stringoeJSGOV, stringlEErS0, uintk5Z1ZZH, {from: accounts[3]});

		assert.equal(uint2568xukbM, BigInt("0"))
		await expect(Token50X100Wyxadzk._transfer.call(addressfQFnCNz, addressCywciF8, uintsGSVhqL, uintYWHjBe1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RnMUhkb = await Token50X100.new({from: accounts[4]});
		const uintuz6Tpy4 = BigInt("1358")
		const addressS1vqZq3 = accounts[4]
		const addressGfxAWVc = accounts[1]
		const uint256tzlZANJ = await Token50X100RnMUhkb.totalSupply.call({from: accounts[3]});
		const boolChiK4Bb = await Token50X100RnMUhkb.issueTokens.call(addressGfxAWVc, addressS1vqZq3, uintuz6Tpy4, {from: accounts[5]});

		assert.equal(uint256tzlZANJ, BigInt("4714285714285710"))
		await expect(Token50X100RnMUhkb.issueTokens.call(addressGfxAWVc, addressS1vqZq3, uintuz6Tpy4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const addressa5Xwe4 = accounts[3]
		const uint6K31g7 = BigInt("463")
		const addresswmt58zn = accounts[0]
		const uintKpk3ERY = BigInt("1310")
		const addressQfVh6nD = accounts[4]
		const addressSiFjDMV = accounts[4]
		const uint256S4BlEU = await Token50X100aDwfZrd.balanceOf.call(addressa5Xwe4, {from: accounts[3]});
		const boolrOsmMu = await Token50X100aDwfZrd.approve.call(addresswmt58zn, uint6K31g7, {from: accounts[2]});
		const boolUkQTwk8 = await Token50X100aDwfZrd.transferFrom.call(addressSiFjDMV, addressQfVh6nD, uintKpk3ERY, {from: accounts[1]});

		assert.equal(boolrOsmMu, true)
		assert.equal(uint256S4BlEU, BigInt("0"))
		await expect(Token50X100aDwfZrd.transferFrom.call(addressSiFjDMV, addressQfVh6nD, uintKpk3ERY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uint5cu9fA = BigInt("1904")
		const uintRKKw55K = BigInt("600")
		const addresseydkhw = accounts[2]
		const uintStVMeIx = BigInt("1940")
		const addresss4qF9LA = accounts[1]
		const addresswoK9Jk = accounts[5]
		const addressapu70RS = accounts[3]
		const uintgpcmxIG = BigInt("1106")
		const address4fzB9u = accounts[1]
		const boolrHlPYu = await Token50X100aDwfZrd.setMaxLockPeriod.call(uint5cu9fA, {from: accounts[0]});
		const booljTtYfN2 = await Token50X100aDwfZrd.increaseApproval.call(addresseydkhw, uintRKKw55K, {from: accounts[0]});
		const boolcwEhZqv = await Token50X100aDwfZrd.transferFrom.call(addresswoK9Jk, addresss4qF9LA, uintStVMeIx, {from: accounts[3]});
		const uint256S4BlEU = await Token50X100aDwfZrd.balanceOf.call(addressapu70RS, {from: accounts[3]});
		const boolaRmILX7 = await Token50X100aDwfZrd.transfer.call(address4fzB9u, uintgpcmxIG, {from: accounts[2]});

		assert.equal(booljTtYfN2, true)
		assert.equal(boolrHlPYu, false)
		await expect(Token50X100aDwfZrd.transferFrom.call(addresswoK9Jk, addresss4qF9LA, uintStVMeIx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JbfoFZn = await Token50X100.new({from: accounts[2]});
		const uintd5yCzI = BigInt("1003")
		const uintUyG25m1 = BigInt("1948")
		const uintWEMDr02 = BigInt("1676")
		const uintI6KIdLK = BigInt("1431")
		const addressBwtfHOJ = accounts[3]
		const addressxdfuGtT = accounts[4]
		const uintT0sTN09 = BigInt("74")
		const addressQrWYPL8 = accounts[3]
		const boolbGDa53 = await Token50X100JbfoFZn.setMaxLockPeriod.call(uintd5yCzI, {from: accounts[4]});
		const boolrKNQkQN = await Token50X100JbfoFZn.safeLock.call(uintWEMDr02, uintUyG25m1, {from: accounts[3]});
		const boolDLMK7vJ = await Token50X100JbfoFZn.transferFrom.call(addressxdfuGtT, addressBwtfHOJ, uintI6KIdLK, {from: accounts[1]});
		const boolAckmzjv = await Token50X100JbfoFZn.transfer.call(addressQrWYPL8, uintT0sTN09, {from: accounts[0]});

		assert.equal(boolbGDa53, false)
		await expect(Token50X100JbfoFZn.safeLock.call(uintWEMDr02, uintUyG25m1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const addressSjTeSaU = accounts[4]
		const addressyuTDeeP = accounts[5]
		const addressgAgrfFy = accounts[2]
		const addressOXOpEu0 = accounts[4]
		const uint256S4BlEU = await Token50X100aDwfZrd.balanceOf.call(addressSjTeSaU, {from: accounts[3]});
		await Token50X100aDwfZrd.setLinkingAddresses.call(addressgAgrfFy, addressyuTDeeP, {from: accounts[0]});
		await Token50X100aDwfZrd.setTokenContract.call(addressOXOpEu0, {from: accounts[4]});

		assert.equal(uint256S4BlEU, BigInt("0"))
		await expect(Token50X100aDwfZrd.setLinkingAddresses.call(addressgAgrfFy, addressyuTDeeP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uintJL7FFMX = BigInt("1984")
		const addressxMsLlG1 = accounts[0]
		const uintJ9vPvG8 = BigInt("1878")
		const uintTtydQEx = BigInt("196")
		const uintT6Onda6 = BigInt("150")
		const stringttBCmKi = "SpBohIgs2pgKQsiS2And6NPmVwokqrtvs5zUA5iGx8XpV0KP3d6NfCOuzcLo5dnlJzPRgqYGyCHh"
		const stringUiwyd0w = "MAuTslCmaz4HkEoTMTaFiUvm7wJKsYWLldgtCKu2I"
		const uintRMallXo = BigInt("540")
		const address1Wvi3O = accounts[1]
		const boolCublwOm = await Token50X100aDwfZrd.decreaseApproval.call(addressxMsLlG1, uintJL7FFMX, {from: accounts[4]});
		const boolWCHnXxv = await Token50X100aDwfZrd.safeLock.call(uintTtydQEx, uintJ9vPvG8, {from: accounts[2]});
		await Token50X100aDwfZrd.setSymbolNameDecimals.call(stringUiwyd0w, stringttBCmKi, uintT6Onda6, {from: accounts[4]});
		const boolaRmILX7 = await Token50X100aDwfZrd.transfer.call(address1Wvi3O, uintRMallXo, {from: accounts[2]});

		assert.equal(boolCublwOm, true)
		await expect(Token50X100aDwfZrd.safeLock.call(uintTtydQEx, uintJ9vPvG8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uintzAcMj6e = BigInt("612")
		const addressfRLAhaO = "0x0000000000000000000000000000000000000000"
		await Token50X100aDwfZrd.release.call({from: accounts[0]});
		const boolkLTMPrL = await Token50X100aDwfZrd.transfer.call(addressfRLAhaO, uintzAcMj6e, {from: accounts[3]});

		await expect(Token50X100aDwfZrd.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const booltJKH5Uv = false
		const addresseMN9sm = accounts[0]
		const uintJt653g = BigInt("612")
		const addressfSYc59a = "0x0000000000000000000000000000000000000000"
		await Token50X100aDwfZrd.setWhiteList.call(addresseMN9sm, booltJKH5Uv, {from: accounts[0]});
		const boolkLTMPrL = await Token50X100aDwfZrd.transfer.call(addressfSYc59a, uintJt653g, {from: accounts[3]});
		await Token50X100aDwfZrd.onlyOwner.call({from: accounts[4]});

		await expect(Token50X100aDwfZrd.setWhiteList.call(addresseMN9sm, booltJKH5Uv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100USuUMbQ = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOqwWboP = BigInt("1765")
		const addresswCsibte = accounts[4]
		const addressiRmAhxB = accounts[2]
		const uintgnhm2KT = BigInt("1798")
		const uintLk5FscZ = BigInt("957")
		const uintxsO3B7z = BigInt("504")
		const addressitSXRU7 = accounts[0]
		const boolcXYcz4v = await Token50X100USuUMbQ.setMaxLockPeriod.call(uintOqwWboP, {from: accounts[4]});
		await Token50X100USuUMbQ.setLinkingAddresses.call(addressiRmAhxB, addresswCsibte, {from: accounts[4]});
		const boolKlToBtm = await Token50X100USuUMbQ.safeLock.call(uintLk5FscZ, uintgnhm2KT, {from: accounts[4]});
		const boolMzdJzF6 = await Token50X100USuUMbQ.decreaseApproval.call(addressitSXRU7, uintxsO3B7z, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const addressqm42CCr = "0x0000000000000000000000000000000000000001"
		const addressUq49WrI = accounts[4]
		const addressgxmfPK6 = await Token50X100aDwfZrd.transferOwnership.call(addressqm42CCr, {from: accounts[0]});
		const uint256S4BlEU = await Token50X100aDwfZrd.balanceOf.call(addressUq49WrI, {from: accounts[3]});

		assert.equal(uint256S4BlEU, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100Y8qlSgS = await Token50X100.new({from: accounts[1]});
		const addressIv8IjSl = accounts[2]
		const uintH3GzD7s = BigInt("430")
		const uintWAXUJVr = BigInt("1272")
		const addressoa5I03S = accounts[2]
		const addressMOHHlZT = accounts[5]
		const address0GFevT = "0x0000000000000000000000000000000000000001"
		const uintu1DLXEa = BigInt("1967")
		const uint256xxjQxkx = await Token50X100Y8qlSgS.balanceOf.call(addressIv8IjSl, {from: "0x0000000000000000000000000000000000000001"});
		const booldQ2uX1a = await Token50X100Y8qlSgS._transfer.call(addressMOHHlZT, addressoa5I03S, uintWAXUJVr, uintH3GzD7s, {from: accounts[1]});
		const addressuOw1kqk = await Token50X100Y8qlSgS.transferOwnership.call(address0GFevT, {from: accounts[0]});
		await Token50X100Y8qlSgS.release.call({from: accounts[1]});
		const boolt61djtO = await Token50X100Y8qlSgS.setMaxLockPeriod.call(uintu1DLXEa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256xxjQxkx, BigInt("0"))
		await expect(Token50X100Y8qlSgS._transfer.call(addressMOHHlZT, addressoa5I03S, uintWAXUJVr, uintH3GzD7s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uintCbzWtUI = BigInt("514")
		const addresshcNVq0W = accounts[2]
		await Token50X100aDwfZrd.lock.call({from: accounts[0]});
		const boolwO2USXY = await Token50X100aDwfZrd.decreaseApproval.call(addresshcNVq0W, uintCbzWtUI, {from: accounts[1]});

		await expect(Token50X100aDwfZrd.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const addressGH66mH = accounts[5]
		const uintVlvnMPJ = BigInt("612")
		const addressnmsNwVX = "0x0000000000000000000000000000000000000001"
		await Token50X100aDwfZrd.setTokenContract.call(addressGH66mH, {from: accounts[0]});
		const boolkLTMPrL = await Token50X100aDwfZrd.transfer.call(addressnmsNwVX, uintVlvnMPJ, {from: accounts[3]});

		await expect(Token50X100aDwfZrd.setTokenContract.call(addressGH66mH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oQ2ZPVJ = await Token50X100.new({from: accounts[4]});
		const uintfoCvTrQ = BigInt("1374")
		const addressgYZHGCj = accounts[4]
		const uintuQroYLT = BigInt("625")
		const uintkL1bGB8 = BigInt("1233")
		const addressPtrf2c = accounts[0]
		const uint711NYc = BigInt("960")
		const uintH51hQEO = BigInt("593")
		const addresstEqhZ59 = "0x0000000000000000000000000000000000000001"
		const boolPPL3j1c = await Token50X100oQ2ZPVJ.approve.call(addressgYZHGCj, uintfoCvTrQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolZcUsd7r = await Token50X100oQ2ZPVJ.setVesting.call(addressPtrf2c, uintkL1bGB8, uintuQroYLT, {from: accounts[4]});
		const boolLXmqLXF = await Token50X100oQ2ZPVJ.setVesting.call(addresstEqhZ59, uintH51hQEO, uint711NYc, {from: accounts[5]});

		assert.equal(boolPPL3j1c, true)
		assert.equal(boolZcUsd7r, true)
		await expect(Token50X100oQ2ZPVJ.setVesting.call(addresstEqhZ59, uintH51hQEO, uint711NYc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uintj6MERHU = BigInt("475")
		const addressxyIMpcs = accounts[2]
		const boolPkrUidv = false
		const addressiVfM7Ey = accounts[4]
		const boolwO2USXY = await Token50X100aDwfZrd.decreaseApproval.call(addressxyIMpcs, uintj6MERHU, {from: accounts[1]});
		await Token50X100aDwfZrd.setWhiteListReceivers.call(addressiVfM7Ey, boolPkrUidv, {from: accounts[0]});
		await Token50X100aDwfZrd.lock.call({from: accounts[1]});

		assert.equal(boolwO2USXY, true)
		await expect(Token50X100aDwfZrd.setWhiteListReceivers.call(addressiVfM7Ey, boolPkrUidv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDwfZrd = await Token50X100.new({from: accounts[0]});
		const uintDlIH3SB = BigInt("143")
		const stringgnZ8kzT = "vGDKMHDcF51A78umCxUdnFt4GAOa17Nq2FlXvB"
		const stringFSHcs2f = "Zbfd7cAAIiXfNNvBpWLoVuQQJkwcXW9qyFIwh7y3R3IAQ1o8O2Cz"
		const addressWGLcmc = accounts[4]
		const addressHyrFkD7 = accounts[0]
		const uintXJOTL9 = BigInt("270")
		const addressxfU2etr = accounts[4]
		const boolO222SJ = await Token50X100aDwfZrd.setSymbolNameDecimals.call(stringFSHcs2f, stringgnZ8kzT, uintDlIH3SB, {from: accounts[0]});
		const uint256MOZ9sHE = await Token50X100aDwfZrd.allowance.call(addressHyrFkD7, addressWGLcmc, {from: accounts[4]});
		const boolqXcayCa = await Token50X100aDwfZrd.decreaseApproval.call(addressxfU2etr, uintXJOTL9, {from: accounts[0]});

		assert.equal(boolqXcayCa, true)
		assert.equal(uint256MOZ9sHE, BigInt("0"))
	});
})