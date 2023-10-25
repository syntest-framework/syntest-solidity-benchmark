const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintSsrLmoP = BigInt("1513")
		const stringXpjVXUx = "13HGX8OHjcwhPkAcSbC1dgnKlnYQnGlBpDdB9FkQUtAaCcAzJDDpeXjN"
		const stringWTGDhmw = "Mhpf7bWJilrgryIJFtWTifpheEjtchWUsmEgn1SjzHUQmvzlWkpYzaKfwT89SsQWYKwNcv6so"
		const uintDs7tJU = BigInt("1700")
		const TetherTokenBr60Hcy = await TetherToken.new(uintSsrLmoP, stringXpjVXUx, stringWTGDhmw, uintDs7tJU, {from: accounts[2]});
		const uintQuOn3Tu = BigInt("884")
		const addressFPOFGDW = accounts[0]
		const addressnyeVtVV = accounts[4]
		const uintoDFKRn8 = BigInt("813")
		const uintEQMdW4t = BigInt("1340")
		const uintnql4z8P = BigInt("1971")
		const uintDsucUKm = BigInt("1486")
		const addressUtdkUED = await TetherTokenBr60Hcy.transferFrom.call(addressnyeVtVV, addressFPOFGDW, uintQuOn3Tu, {from: accounts[3]});
		const uintPqji3IT = await TetherTokenBr60Hcy.setParams.call(uintEQMdW4t, uintoDFKRn8, {from: accounts[2]});
		const uintsf80qCe = await TetherTokenBr60Hcy.setParams.call(uintDsucUKm, uintnql4z8P, {from: accounts[1]});

		await expect(TetherTokenBr60Hcy.transferFrom.call(addressnyeVtVV, addressFPOFGDW, uintQuOn3Tu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintYWVFsHW = BigInt("1073")
		const stringLElFh0C = "CFgsHih3qep6kPMak2pQOOEf7cbcEXeYp1MGBpUU5"
		const stringhHYqWz6 = "yc1Bxd196Gs9kcCyPLxt1MRSXdS0LXdeXqVaezcvPzxIe"
		const uintEuRCCl5 = BigInt("48")
		const TetherTokenrGCy71w = await TetherToken.new(uintYWVFsHW, stringLElFh0C, stringhHYqWz6, uintEuRCCl5, {from: accounts[4]});
		const uintrOerWaP = BigInt("690")
		const uintf3bPb9M = BigInt("1611")
		const uint8jZ8QL = BigInt("1438")
		const uintMGcEl3i = BigInt("1345")
		const uintZMWa9Sv = await TetherTokenrGCy71w.issue.call(uintrOerWaP, {from: accounts[4]});
		const uintfRBky3R = await TetherTokenrGCy71w.setParams.call(uint8jZ8QL, uintf3bPb9M, {from: accounts[5]});
		const uintZeescLw = await TetherTokenrGCy71w.issue.call(uintMGcEl3i, {from: accounts[4]});

		await expect(TetherTokenrGCy71w.setParams.call(uint8jZ8QL, uintf3bPb9M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqBM37Xs = BigInt("424")
		const stringPzRh9l = "TndLJ6ac3qmTbuKbGMOFRfEq7eSiJ82n"
		const stringPfjdsdC = "CLEgiyVMAuVYReb2fku8lMrUnI2K"
		const uintF4uckB0 = BigInt("254")
		const TetherTokenxnAdbGm = await TetherToken.new(uintqBM37Xs, stringPzRh9l, stringPfjdsdC, uintF4uckB0, {from: accounts[4]});
		const addressECofUC9 = accounts[2]
		const addressV7IRzny = accounts[3]
		const uintC2S5Dc = await TetherTokenxnAdbGm.allowance.call(addressV7IRzny, addressECofUC9, {from: accounts[0]});
		const uintU1cBlpH = await TetherTokenxnAdbGm.totalSupply.call({from: accounts[5]});

		assert.equal(uintC2S5Dc, BigInt("0"))
		assert.equal(uintU1cBlpH, BigInt("424"))
	});

	it('test for TetherToken', async () => {
		const uintBuPfvzB = BigInt("880")
		const stringIOmrPTB = "stfbuATvA3bWCDrasn1IIz96DztsdDO2KRN2yDNSDWFFrv9pV78I"
		const stringpfwN0CR = "63s8PGKMUjckwIpkz5WiJfIYSTKGUqGpF60Z"
		const uintrO4LJR2 = BigInt("1996")
		const TetherTokenqsSmODr = await TetherToken.new(uintBuPfvzB, stringIOmrPTB, stringpfwN0CR, uintrO4LJR2, {from: accounts[3]});
		const uintjTiDwX6 = BigInt("835")
		const uinteSrNpdr = BigInt("1560")
		const addressTA0Ht77 = accounts[2]
		const addressLZGHXpv = accounts[4]
		const uintw3ggGJD = BigInt("366")
		const addressT98bN25 = accounts[4]
		const addresss06z03G = accounts[0]
		const uintN2lfhXo = BigInt("1264")
		const uintXAZqLoF = await TetherTokenqsSmODr.redeem.call(uintjTiDwX6, {from: accounts[3]});
		const addressSPbSTB4 = await TetherTokenqsSmODr.approve.call(addressTA0Ht77, uinteSrNpdr, {from: accounts[1]});
		const uintWd5tsXD = await TetherTokenqsSmODr.balanceOf.call(addressLZGHXpv, {from: accounts[2]});
		const addressbuUhkY2 = await TetherTokenqsSmODr.transferFrom.call(addresss06z03G, addressT98bN25, uintw3ggGJD, {from: accounts[0]});
		const uintW2vjh1m = await TetherTokenqsSmODr.redeem.call(uintN2lfhXo, {from: accounts[0]});

		assert.equal(uintWd5tsXD, BigInt("0"))
		await expect(TetherTokenqsSmODr.transferFrom.call(addresss06z03G, addressT98bN25, uintw3ggGJD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintTBfD6Ht = BigInt("1315")
		const stringwCfBgHU = "VVDgqTHbAJ0b2ApTIHfMvApaFparJL7B68CnFAfjUwKWXWM55nxQPO6D11L1nQBAaRZjaa2h1OgVu"
		const stringBAO5obL = "YI3WVDidV5UnkVJKN2rJTaFJJcZu0CHiWjpTrULIk9uho6OYTNCqBT1IV7XmgY4j0lawT2eaTYXyTGidk"
		const uintYnMnZwY = BigInt("183")
		const TetherTokenByBsVGI = await TetherToken.new(uintTBfD6Ht, stringwCfBgHU, stringBAO5obL, uintYnMnZwY, {from: accounts[4]});
		const uintC6baWfz = BigInt("1820")
		const addressd3ciod0 = accounts[4]
		const addressWevUG7r = accounts[2]
		const addressdxixy6Y = "0x0000000000000000000000000000000000000001"
		const uintGgsgj4K = BigInt("573")
		const addressobb1dwN = accounts[4]
		const addressIe2WTnX = accounts[3]
		const addresspGfheXl = await TetherTokenByBsVGI.transfer.call(addressd3ciod0, uintC6baWfz, {from: accounts[2]});
		const uintm6A9gwA = await TetherTokenByBsVGI.balanceOf.call(addressWevUG7r, {from: accounts[2]});
		const addressPl0JOTf = await TetherTokenByBsVGI.deprecate.call(addressdxixy6Y, {from: accounts[5]});
		const uintWMkHG8 = await TetherTokenByBsVGI.issue.call(uintGgsgj4K, {from: accounts[3]});
		const uintdZ70UY = await TetherTokenByBsVGI.allowance.call(addressIe2WTnX, addressobb1dwN, {from: accounts[2]});

		await expect(TetherTokenByBsVGI.transfer.call(addressd3ciod0, uintC6baWfz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintOnI4dH0 = BigInt("424")
		const stringPzRh9l = "TndLJ6ac3qmTbuKbGMOFRfEq7eSiJ82n"
		const stringPfjdsdC = "CLEgiyVMAuVYReb2fku8lMrUnI2K"
		const uintiqmon6E = BigInt("254")
		const TetherTokenxnAdbGm = await TetherToken.new(uintOnI4dH0, stringPzRh9l, stringPfjdsdC, uintiqmon6E, {from: accounts[4]});
		const addressW0RFwk = accounts[2]
		const addressoLXYmpi = accounts[4]
		const addressxaK9KIR = accounts[2]
		const uintC2S5Dc = await TetherTokenxnAdbGm.allowance.call(addressoLXYmpi, addressW0RFwk, {from: accounts[0]});
		const address5IN97u = await TetherTokenxnAdbGm.deprecate.call(addressxaK9KIR, {from: accounts[3]});
		const uintn2LpnKL = await TetherTokenxnAdbGm.totalSupply.call({from: accounts[1]});
		const uintU1cBlpH = await TetherTokenxnAdbGm.totalSupply.call({from: accounts[5]});

		assert.equal(uintC2S5Dc, BigInt("0"))
		await expect(TetherTokenxnAdbGm.deprecate.call(addressxaK9KIR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqdYFsL = BigInt("889")
		const stringw9CcavN = "sBiL6V11zQbgyrauMBVpGStDPeMTPeAWEsWg3qi6ArwxnJvQPT5nrby5ao8eiElVo7irjwYhkOTTPhOScqKH9sCXnVYu"
		const stringmEMEglE = "9I8HcgwF9O6WP0lEjUGlbHgRikLNf9qTYtVH78BntGJ6KVX1IEMqVAvdAgzQuecwao3Kx8"
		const uintVZlnJnC = BigInt("845")
		const TetherTokendLMumjw = await TetherToken.new(uintqdYFsL, stringw9CcavN, stringmEMEglE, uintVZlnJnC, {from: "0x0000000000000000000000000000000000000001"});
		const addresshpTskRK = accounts[4]
		const addresseTP2Ac = accounts[4]
		const uintkIrvWSI = BigInt("1588")
		const addressPBcwImB = accounts[1]
		const uintwG2aSGZ = await TetherTokendLMumjw.balanceOf.call(addresshpTskRK, {from: accounts[3]});
		const addresslHz9RUR = await TetherTokendLMumjw.deprecate.call(addresseTP2Ac, {from: accounts[5]});
		const addressIq8KR7F = await TetherTokendLMumjw.transfer.call(addressPBcwImB, uintkIrvWSI, {from: accounts[4]});
	});
})