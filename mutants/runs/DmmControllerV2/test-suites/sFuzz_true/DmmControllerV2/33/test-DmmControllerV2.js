const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressBE9Xv7C = accounts[0]
		const addressFHxiD34 = accounts[5]
		const addressFGj2xXp = accounts[4]
		const addressVp5MHAP = accounts[1]
		const addressiWkaAa = accounts[5]
		const addressRN6gGA = "0x0000000000000000000000000000000000000001"
		const addresszGSAeHT = accounts[4]
		const addressghAD7xm = accounts[4]
		const addressAEEWwMO = accounts[5]
		const uintFWrmfnv = BigInt("604")
		const uintxa3kwA5 = BigInt("487")
		const addressruvkyeH = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2yUw6UhJ = await DmmControllerV2.new(addressBE9Xv7C, addressFHxiD34, addressFGj2xXp, addressVp5MHAP, addressiWkaAa, addressRN6gGA, addresszGSAeHT, addressghAD7xm, addressAEEWwMO, uintFWrmfnv, uintxa3kwA5, addressruvkyeH, {from: accounts[2]});
		const address5obtLZ = accounts[3]
		const addresswVLa7iw = accounts[0]
		const addressSwjZHOE = await DmmControllerV2yUw6UhJ.addPauser.call(address5obtLZ, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2yUw6UhJ.whenNotPaused.call({from: accounts[0]});
		await DmmControllerV2yUw6UhJ.renouncePauser.call({from: accounts[3]});
		await DmmControllerV2yUw6UhJ.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const 
EANMW9I = await DmmControllerV2yUw6UhJ.transferGuardian.call(addresswVLa7iw, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressIehXaaq = accounts[5]
		const addressMHoixgl = accounts[0]
		const addressd8zDtRd = "0x0000000000000000000000000000000000000001"
		const addressUeSTpil = accounts[4]
		const addressOIBPpkU = accounts[3]
		const addressMaY7Flr = "0x0000000000000000000000000000000000000001"
		const addresszc08OUx = accounts[5]
		const addressrNWPpzx = accounts[0]
		const addressmgbmARy = accounts[1]
		const uintw8IyaT = BigInt("1619")
		const uintBKwcnq = BigInt("902")
		const addressme0ibja = accounts[1]
		const DmmControllerV2kICIDAq = await DmmControllerV2.new(addressIehXaaq, addressMHoixgl, addressd8zDtRd, addressUeSTpil, addressOIBPpkU, addressMaY7Flr, addresszc08OUx, addressrNWPpzx, addressmgbmARy, uintw8IyaT, uintBKwcnq, addressme0ibja, {from: accounts[5]});
		const addresskz1nwCZ = accounts[3]
		const addressUIxEMjA = "0x0000000000000000000000000000000000000001"
		const addressgGgcf6U = await DmmControllerV2kICIDAq.guardian.call({from: accounts[4]});
		const addressTGdDGmU = await DmmControllerV2kICIDAq.setOffChainAssetValuator.call(addresskz1nwCZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressCouhDqo = await DmmControllerV2kICIDAq.setUnderlyingTokenValuator.call(addressUIxEMjA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2mS74Rrq = await DmmControllerV2.new({from: accounts[1]});
		const addressMluMKs = accounts[1]
		const addressHtt5Q06 = accounts[3]
		const uintf4wwjT = BigInt("291")
		const uintEZ5n2Ot = BigInt("976")
		const addressbrda0gK = await DmmControllerV2mS74Rrq.setOffChainCurrencyValuator.call(addressMluMKs, {from: accounts[0]});
		const addressIQRIvCn = await DmmControllerV2mS74Rrq.notBlacklisted.call(addressHtt5Q06, {from: accounts[2]});
		const 
XRfBChf = await DmmControllerV2mS74Rrq.decreaseTotalSupply.call(uintEZ5n2Ot, uintf4wwjT, {from: accounts[1]});
		await DmmControllerV2mS74Rrq.renounceOwnership.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressQWsh1rK = accounts[1]
		const addressD13lBmj = accounts[1]
		const addressiL8OWCo = accounts[1]
		const addressxNNLoX = accounts[5]
		const addressbdtDZPM = accounts[3]
		const addressHkoqUj = accounts[2]
		const addresspdYOjZs = accounts[3]
		const addressSSCEEE1 = accounts[2]
		const addressEpIo8f = accounts[5]
		const uintfXa1Z6r = BigInt("1343")
		const uintwM0ApK = BigInt("248")
		const addressMePmjz9 = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressQWsh1rK, addressD13lBmj, addressiL8OWCo, addressxNNLoX, addressbdtDZPM, addressHkoqUj, addresspdYOjZs, addressSSCEEE1, addressEpIo8f, uintfXa1Z6r, uintwM0ApK, addressMePmjz9, {from: accounts[3]});
		const addressH5Un8M0 = accounts[0]
		const boolGiE6Lj = await DmmControllerV2tIKkS8u.isMarketEnabledByDmmTokenAddress.call(addressH5Un8M0, {from: accounts[3]});
		const uintzwwh8Fk = await DmmControllerV2tIKkS8u.getTotalCollateralization.call({from: accounts[3]});
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
		await DmmControllerV2tIKkS8u.pause.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRCQ1BAs = accounts[2]
		const addressrSFhypb = accounts[2]
		const addressYK6OFQh = accounts[0]
		const addressec9GpPy = accounts[5]
		const addressWoZgZzG = accounts[4]
		const addresso5oXjsu = accounts[4]
		const addressoqxLmYa = accounts[2]
		const addressshY6ghl = accounts[4]
		const addressDB9sNoS = accounts[1]
		const uintAUJQ56 = BigInt("338")
		const uintYqpfxs8 = BigInt("1330")
		const addressFjE91Yf = accounts[0]
		const DmmControllerV2hfeVIdb = await DmmControllerV2.new(addressRCQ1BAs, addressrSFhypb, addressYK6OFQh, addressec9GpPy, addressWoZgZzG, addresso5oXjsu, addressoqxLmYa, addressshY6ghl, addressDB9sNoS, uintAUJQ56, uintYqpfxs8, addressFjE91Yf, {from: accounts[3]});
		const addressYRBAYnv = accounts[0]
		const address1mFExa = accounts[2]
		const 
ngjyZ56 = await DmmControllerV2hfeVIdb.setCollateralizationCalculator.call(addressYRBAYnv, {from: accounts[0]});
		const boolr9RYn0 = await DmmControllerV2hfeVIdb.isBlacklisted.call(address1mFExa, {from: accounts[0]});
		await DmmControllerV2hfeVIdb.renounceGuardian.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressjILM1dd = accounts[1]
		const addressqBpNeFk = accounts[1]
		const addressk23rcSs = accounts[1]
		const addressqFLiT5I = accounts[5]
		const addressy5Y9dIV = accounts[3]
		const addressbNAvsCU = accounts[2]
		const addressxKespUY = accounts[3]
		const addressivLhxFp = accounts[2]
		const addressvNxH0MF = accounts[5]
		const uintjxP3upz = BigInt("1343")
		const uintdDBq0re = BigInt("248")
		const addressxwEtwC4 = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressjILM1dd, addressqBpNeFk, addressk23rcSs, addressqFLiT5I, addressy5Y9dIV, addressbNAvsCU, addressxKespUY, addressivLhxFp, addressvNxH0MF, uintjxP3upz, uintdDBq0re, addressxwEtwC4, {from: accounts[3]});
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
		await DmmControllerV2tIKkS8u.pause.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswEcob9U = accounts[1]
		const addresspBGLKJ6 = accounts[1]
		const addressi26OZPK = accounts[1]
		const addressIMBJj7c = accounts[5]
		const addressIvygGkg = accounts[3]
		const addressEuv9xE5 = accounts[2]
		const addressjBMatzj = accounts[3]
		const addressUST9LkG = accounts[2]
		const addressDh3eJmj = accounts[5]
		const uintOrhXNX = BigInt("1343")
		const uintJD5sims = BigInt("248")
		const addressY9lWMJF = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addresswEcob9U, addresspBGLKJ6, addressi26OZPK, addressIMBJj7c, addressIvygGkg, addressEuv9xE5, addressjBMatzj, addressUST9LkG, addressDh3eJmj, uintOrhXNX, uintJD5sims, addressY9lWMJF, {from: accounts[3]});
		const addresszlZl2En = accounts[1]
		const addressKKzHxC = accounts[0]
		const addressgjP9TCi = accounts[3]
		const uintYegY8PQ = await DmmControllerV2tIKkS8u.getInterestRateByUnderlyingTokenAddress.call(addresszlZl2En, {from: accounts[2]});
		const boolGiE6Lj = await DmmControllerV2tIKkS8u.isMarketEnabledByDmmTokenAddress.call(addressKKzHxC, {from: accounts[3]});
		await DmmControllerV2tIKkS8u.whenPaused.call({from: accounts[1]});
		const addressjUgUqc = await DmmControllerV2tIKkS8u.blacklist.call(addressgjP9TCi, {from: accounts[4]});
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressS4K5KLF = accounts[1]
		const addressyyisutv = accounts[1]
		const addressG6yiR3X = accounts[1]
		const addressvRPSqd = accounts[5]
		const addresssWTyHCH = accounts[3]
		const addressoeSj9ig = accounts[2]
		const addressNFqUweQ = accounts[3]
		const addressfusUIIp = accounts[2]
		const addressgGxZNTU = accounts[5]
		const uintgfNgSQc = BigInt("1343")
		const uintnTKMibQ = BigInt("248")
		const addressllOHvwK = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressS4K5KLF, addressyyisutv, addressG6yiR3X, addressvRPSqd, addresssWTyHCH, addressoeSj9ig, addressNFqUweQ, addressfusUIIp, addressgGxZNTU, uintgfNgSQc, uintnTKMibQ, addressllOHvwK, {from: accounts[3]});
		const addresslmy7e3 = accounts[2]
		const uintZBGVEwQ = BigInt("289")
		const uintC03Tjms = BigInt("1629")
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const uintEPMIh1 = await DmmControllerV2tIKkS8u.getTokenIdFromDmmTokenAddress.call(addresslmy7e3, {from: accounts[4]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
		const uintywfc7T7 = await DmmControllerV2tIKkS8u.requireIsPrimaryMarketNft.call(uintZBGVEwQ, {from: accounts[4]});
		const addresshEcKDnl = await DmmControllerV2tIKkS8u.getDmmTokenAddressByDmmTokenId.call(uintC03Tjms, {from: accounts[0]});
		await DmmControllerV2tIKkS8u.pause.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspRBgrsh = accounts[1]
		const addresswClapf = accounts[1]
		const addressApWWEoH = accounts[1]
		const addressO9RtB1 = accounts[5]
		const addressCaul811 = accounts[3]
		const addressuK1rRnr = accounts[2]
		const addresszqQHANk = accounts[3]
		const addressdxdJe9C = accounts[2]
		const addressK1d2O0a = accounts[5]
		const uintmnr2Cip = BigInt("1343")
		const uintD1xXdif = BigInt("248")
		const addressYu9zvZK = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addresspRBgrsh, addresswClapf, addressApWWEoH, addressO9RtB1, addressCaul811, addressuK1rRnr, addresszqQHANk, addressdxdJe9C, addressK1d2O0a, uintmnr2Cip, uintD1xXdif, addressYu9zvZK, {from: accounts[3]});
		const addressgkCyUo = accounts[3]
		const addresscTPORS1 = accounts[2]
		const addressgtvdeyQ = accounts[3]
		const uintXGk1I6 = BigInt("831")
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const 
tC8Zndp = await DmmControllerV2tIKkS8u.addMarketFromExistingDmmToken.call(addresscTPORS1, addressgkCyUo, {from: accounts[3]});
		const boolrcD3mS = await DmmControllerV2tIKkS8u.isBlacklisted.call(addressgtvdeyQ, {from: accounts[0]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
		const uintdVKhG9N = await DmmControllerV2tIKkS8u.disableMarket.call(uintXGk1I6, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressTaylccf = accounts[1]
		const addressru4Jyjn = accounts[1]
		const addressgP0aYhq = accounts[1]
		const addressJUSw0OJ = accounts[5]
		const addressA9mthCX = accounts[3]
		const addressHyH1uSE = accounts[2]
		const addresscIFtD1Z = accounts[3]
		const addressX38j8y6 = accounts[2]
		const addressfXP7Wzb = accounts[5]
		const uintXwUOJun = BigInt("1343")
		const uintfFaT7y5 = BigInt("248")
		const addressbgmUt37 = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressTaylccf, addressru4Jyjn, addressgP0aYhq, addressJUSw0OJ, addressA9mthCX, addressHyH1uSE, addresscIFtD1Z, addressX38j8y6, addressfXP7Wzb, uintXwUOJun, uintfFaT7y5, addressbgmUt37, {from: accounts[3]});
		const uinttTzsAWg = await DmmControllerV2tIKkS8u.getActiveCollateralization.call({from: accounts[0]});
		await DmmControllerV2tIKkS8u.renounceOwnership.call({from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressAgKeqCq = accounts[1]
		const addressJjyIK8y = accounts[1]
		const addressPbW1Ch = accounts[1]
		const addresskBP0q0s = accounts[5]
		const addressW7Sr77T = accounts[3]
		const addressuybbnu2 = accounts[2]
		const addressq4VGNH = accounts[3]
		const addressV0Xk60O = accounts[2]
		const addressrrHBSO7 = accounts[5]
		const uintE7HGPWO = BigInt("1343")
		const uintTFXZOYW = BigInt("248")
		const addressWuroEM = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressAgKeqCq, addressJjyIK8y, addressPbW1Ch, addresskBP0q0s, addressW7Sr77T, addressuybbnu2, addressq4VGNH, addressV0Xk60O, addressrrHBSO7, uintE7HGPWO, uintTFXZOYW, addressWuroEM, {from: accounts[3]});
		const addressV8dbPBb = accounts[0]
		const 
lnQWT5H = await DmmControllerV2tIKkS8u.transferOwnership.call(addressV8dbPBb, {from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressLPtV4Bi = accounts[1]
		const addresssJTBAI4 = accounts[1]
		const addressjaKF9RE = accounts[1]
		const addressu91H62X = accounts[5]
		const addressMYGPWnp = accounts[3]
		const addresstzKTGV = accounts[2]
		const addressMdILq7W = accounts[3]
		const addressWw25wgn = accounts[2]
		const addressFv96xdY = accounts[5]
		const uintI5Hi8ra = BigInt("1343")
		const uintebgTvjZ = BigInt("248")
		const addressVVBzEfP = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressLPtV4Bi, addresssJTBAI4, addressjaKF9RE, addressu91H62X, addressMYGPWnp, addresstzKTGV, addressMdILq7W, addressWw25wgn, addressFv96xdY, uintI5Hi8ra, uintebgTvjZ, addressVVBzEfP, {from: accounts[3]});
		const addressSQ6eSio = accounts[3]
		await DmmControllerV2tIKkS8u.unpause.call({from: accounts[3]});
		const 
WDG76tS = await DmmControllerV2tIKkS8u.setCollateralizationCalculator.call(addressSQ6eSio, {from: "0x0000000000000000000000000000000000000001"});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressQi9Xy0I = accounts[1]
		const address9mSkA6 = accounts[1]
		const addressEliyiDv = accounts[1]
		const addresse1D9qm = accounts[5]
		const addressq7IorE3 = accounts[3]
		const addressi8WrI2Q = accounts[2]
		const addressxVzY4Pd = accounts[3]
		const addressJJW4QzM = accounts[2]
		const addressTf7zoUH = accounts[5]
		const uintfVSkJlh = BigInt("1343")
		const uintJlp0l2s = BigInt("248")
		const addressMjjTGZ4 = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addressQi9Xy0I, address9mSkA6, addressEliyiDv, addresse1D9qm, addressq7IorE3, addressi8WrI2Q, addressxVzY4Pd, addressJJW4QzM, addressTf7zoUH, uintfVSkJlh, uintJlp0l2s, addressMjjTGZ4, {from: accounts[3]});
		const uintxQsCnMM = BigInt("1508")
		const uintKIK83r0 = BigInt("2037")
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
		const addressH7gd1fi = await DmmControllerV2tIKkS8u.getDmmTokenAddressByDmmTokenId.call(uintxQsCnMM, {from: accounts[0]});
		const uinttml3oUE = await DmmControllerV2tIKkS8u.setMinCollateralization.call(uintKIK83r0, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresso98lGS4 = accounts[1]
		const addressGfGO6zK = accounts[1]
		const addressSxaBl5 = accounts[1]
		const addressfeZAplt = accounts[5]
		const addressGTYSSB6 = accounts[3]
		const addressFQ9QXxC = accounts[2]
		const addressGUUcG9J = accounts[3]
		const addresspfKqXi = accounts[2]
		const addressxsJ2STD = accounts[5]
		const uintObPMKUu = BigInt("1343")
		const uintzccQ0q9 = BigInt("248")
		const addressdNbgg1w = accounts[1]
		const DmmControllerV2tIKkS8u = await DmmControllerV2.new(addresso98lGS4, addressGfGO6zK, addressSxaBl5, addressfeZAplt, addressGTYSSB6, addressFQ9QXxC, addressGUUcG9J, addresspfKqXi, addressxsJ2STD, uintObPMKUu, uintzccQ0q9, addressdNbgg1w, {from: accounts[3]});
		const address2JTNHd = accounts[4]
		const 
Wi8Ka6b = await DmmControllerV2tIKkS8u.setCollateralizationCalculator.call(address2JTNHd, {from: accounts[3]});
		const addressOP7E5en = await DmmControllerV2tIKkS8u.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPFtoC2M = accounts[5]
		const addresseDirekc = accounts[5]
		const addressz5BWNZz = accounts[4]
		const addresse1XJerE = accounts[2]
		const addressCatankS = accounts[4]
		const addresshzgUb3 = accounts[5]
		const addressvuMs6rv = accounts[0]
		const addressRjElyNU = accounts[1]
		const addresstIFDxdL = accounts[1]
		const uintnEaaX1i = BigInt("855")
		const uinttZN9XZi = BigInt("1986")
		const addressfrh2Amc = accounts[2]
		const DmmControllerV2n4WNUnk = await DmmControllerV2.new(addressPFtoC2M, addresseDirekc, addressz5BWNZz, addresse1XJerE, addressCatankS, addresshzgUb3, addressvuMs6rv, addressRjElyNU, addresstIFDxdL, uintnEaaX1i, uinttZN9XZi, addressfrh2Amc, {from: accounts[2]});
		const addressMZeihj = accounts[3]
		const addresskYKaOye = accounts[0]
		const addressS5jm00Y = accounts[3]
		const addressTW3CzNq = accounts[1]
		const uintXQjHARf = await DmmControllerV2n4WNUnk.getExchangeRateByUnderlying.call(addressMZeihj, {from: accounts[1]});
		const uinteQdoDrW = await DmmControllerV2n4WNUnk.getInterestRateByDmmTokenAddress.call(addresskYKaOye, {from: accounts[1]});
		const addressjBCOF3B = await DmmControllerV2n4WNUnk.blacklist.call(addressS5jm00Y, {from: accounts[0]});
		const boolEfWGb0K = await DmmControllerV2n4WNUnk.isBlacklisted.call(addressTW3CzNq, {from: "0x0000000000000000000000000000000000000001"});
	});
})