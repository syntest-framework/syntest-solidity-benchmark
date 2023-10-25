const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2Rd6zkQT = await DmmControllerV2.new({from: accounts[4]});
		const addressAP6I3T1 = accounts[0]
		await DmmControllerV2Rd6zkQT.whenPaused.call({from: accounts[3]});
		const address2eM6Lh = await DmmControllerV2Rd6zkQT.setOffChainCurrencyValuator.call(addressAP6I3T1, {from: accounts[3]});
		const uintarrayCGMUlOQ = await DmmControllerV2Rd6zkQT.getDmmTokenIds.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuXn53yh = accounts[1]
		const addressnMJwoCZ = accounts[2]
		const addresspdUGrHj = accounts[0]
		const addressoJty6US = accounts[4]
		const addressJJcTEWe = "0x0000000000000000000000000000000000000001"
		const addresszNIrI8z = accounts[2]
		const addressmFFVHd = accounts[0]
		const addressG1jWIGu = accounts[5]
		const addressol2GHB = accounts[1]
		const uintvgWVS2z = BigInt("1019")
		const uintzw7M2mR = BigInt("664")
		const addressy5UDnfr = accounts[1]
		const DmmControllerV2rcq9jaf = await DmmControllerV2.new(addressuXn53yh, addressnMJwoCZ, addresspdUGrHj, addressoJty6US, addressJJcTEWe, addresszNIrI8z, addressmFFVHd, addressG1jWIGu, addressol2GHB, uintvgWVS2z, uintzw7M2mR, addressy5UDnfr, {from: accounts[4]});
		const addressnKfB5i = accounts[5]
		const addressHQotuKu = accounts[1]
		const addressKaLygfo = accounts[3]
		const addresstSM5VhP = accounts[2]
		const addressxahoXFw = accounts[1]
		const uintX0LJVWZ = BigInt("1211")
		const uintbVir6ez = BigInt("545")
		const boolEAhfbKK = await DmmControllerV2rcq9jaf.isPauser.call(addressnKfB5i, {from: accounts[1]});
		const 
Uv1FoWB = await DmmControllerV2rcq9jaf.transferOwnershipToNewController.call(addressHQotuKu, {from: accounts[1]});
		const 
NL4nIJi = await DmmControllerV2rcq9jaf.initialize.call(addresstSM5VhP, addressKaLygfo, {from: "0x0000000000000000000000000000000000000001"});
		const uintHaKshy = await DmmControllerV2rcq9jaf.getInterestRateByDmmTokenAddress.call(addressxahoXFw, {from: accounts[3]});
		const uintrPapi4d = await DmmControllerV2rcq9jaf.getInterestRateByDmmTokenId.call(uintX0LJVWZ, {from: accounts[1]});
		const uintPn9fX9v = await DmmControllerV2rcq9jaf.requireIsPrimaryMarketNft.call(uintbVir6ez, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressggUUkPj = accounts[2]
		const addressIbzP5U = accounts[4]
		const addressDGoYh0M = accounts[3]
		const addressL8qZXEp = accounts[5]
		const addressR53XPw6 = accounts[4]
		const addressH0cvV9m = accounts[0]
		const addressYs4LRK = accounts[1]
		const addressundrYzC = accounts[0]
		const addressl5hBIsX = accounts[4]
		const uintG58wzHl = BigInt("1572")
		const uintWAvOJ0u = BigInt("1542")
		const addressMx4umRL = accounts[4]
		const DmmControllerV2CCRZZBi = await DmmControllerV2.new(addressggUUkPj, addressIbzP5U, addressDGoYh0M, addressL8qZXEp, addressR53XPw6, addressH0cvV9m, addressYs4LRK, addressundrYzC, addressl5hBIsX, uintG58wzHl, uintWAvOJ0u, addressMx4umRL, {from: accounts[0]});
		const uintXDCWget = BigInt("1931")
		await DmmControllerV2CCRZZBi.onlyOwner.call({from: accounts[1]});
		await DmmControllerV2CCRZZBi.nonReentrant.call({from: accounts[4]});
		await DmmControllerV2CCRZZBi.renounceOwnership.call({from: accounts[0]});
		const uintBgLgM7z = await DmmControllerV2CCRZZBi.requireIsValidNft.call(uintXDCWget, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2CCRZZBi.initializer.call({from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2CCRZZBi.onlyOwner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuE7w4AN = accounts[3]
		const addressFcnLZvP = accounts[3]
		const addressRkyOz39 = accounts[4]
		const addressnLbbEoN = accounts[4]
		const addressBrDfEfV = "0x0000000000000000000000000000000000000001"
		const addressI6Idbl1 = accounts[0]
		const addressyL0CJyF = accounts[5]
		const addressSFmGkaQ = "0x0000000000000000000000000000000000000001"
		const addressbmlIVct = accounts[4]
		const uintWCRavq1 = BigInt("43")
		const uintZEcjlsW = BigInt("293")
		const addressObmAjD8 = accounts[3]
		const DmmControllerV2JuvH21R = await DmmControllerV2.new(addressuE7w4AN, addressFcnLZvP, addressRkyOz39, addressnLbbEoN, addressBrDfEfV, addressI6Idbl1, addressyL0CJyF, addressSFmGkaQ, addressbmlIVct, uintWCRavq1, uintZEcjlsW, addressObmAjD8, {from: accounts[3]});
		const uintWbAORnB = BigInt("2001")
		const addressZiC6W97 = accounts[1]
		const addressXtGw0Tp = accounts[3]
		const addressM5d3p6I = await DmmControllerV2JuvH21R.getDmmTokenAddressByDmmTokenId.call(uintWbAORnB, {from: accounts[3]});
		const 
uaHezh = await DmmControllerV2JuvH21R.initialize.call(addressXtGw0Tp, addressZiC6W97, {from: accounts[1]});
		await DmmControllerV2JuvH21R.unpause.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresscpod8nk = accounts[2]
		const addressdMDDnXE = "0x0000000000000000000000000000000000000001"
		const addressqsPaqI = accounts[3]
		const addressNOI1zKH = accounts[4]
		const addressPmmLIst = accounts[2]
		const addresssykPNn = "0x0000000000000000000000000000000000000001"
		const addresssp8VCRd = accounts[1]
		const addressr95iWPK = "0x0000000000000000000000000000000000000001"
		const addressd0ZydHE = accounts[4]
		const uinty86bVE = BigInt("1079")
		const uintqyYaBqS = BigInt("312")
		const addressFntcfc = accounts[1]
		const DmmControllerV2IgpeUyE = await DmmControllerV2.new(addresscpod8nk, addressdMDDnXE, addressqsPaqI, addressNOI1zKH, addressPmmLIst, addresssykPNn, addresssp8VCRd, addressr95iWPK, addressd0ZydHE, uinty86bVE, uintqyYaBqS, addressFntcfc, {from: accounts[4]});
		const addresstx7bKw7 = accounts[5]
		const uintLsAq4kB = BigInt("1312")
		const uintvJjbzO4 = BigInt("1254")
		const uintyTP7VHT = BigInt("263")
		const uintecmmwid = await DmmControllerV2IgpeUyE.getExchangeRate.call(addresstx7bKw7, {from: accounts[0]});
		const uintgYwgDRK = await DmmControllerV2IgpeUyE.requireIsNftOwner.call(uintLsAq4kB, {from: accounts[1]});
		const addressRLElBU9 = await DmmControllerV2IgpeUyE.owner.call({from: accounts[2]});
		const 
OfT0FxK = await DmmControllerV2IgpeUyE.adminDepositFunds.call(uintyTP7VHT, uintvJjbzO4, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressf7ds6j = accounts[3]
		const addressOl5P8Df = accounts[3]
		const addressgIvu1Ss = accounts[4]
		const address5Rg5Qy = accounts[4]
		const addresseQGZI0l = "0x0000000000000000000000000000000000000001"
		const addresszOk5lIG = accounts[0]
		const addressT8tAesH = accounts[5]
		const addressjvvuaCq = "0x0000000000000000000000000000000000000001"
		const addressJihey2V = accounts[4]
		const uintAX6Cp2X = BigInt("43")
		const uintpsXlFKf = BigInt("293")
		const addressAnEJIQy = accounts[3]
		const DmmControllerV2JuvH21R = await DmmControllerV2.new(addressf7ds6j, addressOl5P8Df, addressgIvu1Ss, address5Rg5Qy, addresseQGZI0l, addresszOk5lIG, addressT8tAesH, addressjvvuaCq, addressJihey2V, uintAX6Cp2X, uintpsXlFKf, addressAnEJIQy, {from: accounts[3]});
		const addressA3ZOUrE = accounts[3]
		const uint7MvYtF = BigInt("2001")
		const addressgerZaln = await DmmControllerV2JuvH21R.addPauser.call(addressA3ZOUrE, {from: accounts[0]});
		await DmmControllerV2JuvH21R.renouncePauser.call({from: accounts[4]});
		const addressM5d3p6I = await DmmControllerV2JuvH21R.getDmmTokenAddressByDmmTokenId.call(uint7MvYtF, {from: accounts[3]});
		await DmmControllerV2JuvH21R.requireIsFromAssetIntroducer.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswJE84BU = accounts[2]
		const addressQ0tYydk = "0x0000000000000000000000000000000000000001"
		const addressa17G8U = accounts[3]
		const addresswn6zS7S = accounts[4]
		const addressaXdpK7 = accounts[2]
		const addressDS8ionM = "0x0000000000000000000000000000000000000001"
		const addressprBx8dj = accounts[1]
		const addressIDKfdKv = "0x0000000000000000000000000000000000000001"
		const addressdhBp6K = accounts[4]
		const uintTZc4AuG = BigInt("1079")
		const uintrRRxn4e = BigInt("312")
		const addressvNeno52 = accounts[1]
		const DmmControllerV2IgpeUyE = await DmmControllerV2.new(addresswJE84BU, addressQ0tYydk, addressa17G8U, addresswn6zS7S, addressaXdpK7, addressDS8ionM, addressprBx8dj, addressIDKfdKv, addressdhBp6K, uintTZc4AuG, uintrRRxn4e, addressvNeno52, {from: accounts[4]});
		const addressVZCQnr = accounts[5]
		const uintjoe6jZ = BigInt("144")
		const uintOrWBZHK = BigInt("232")
		const uintPoGsG5T = BigInt("1312")
		const uintzYJ2DKy = BigInt("1254")
		const uintfqAfZmc = BigInt("263")
		const addressBMhTZpr = await DmmControllerV2IgpeUyE.owner.call({from: accounts[3]});
		const uintecmmwid = await DmmControllerV2IgpeUyE.getExchangeRate.call(addressVZCQnr, {from: accounts[0]});
		const 
XXKyUmV = await DmmControllerV2IgpeUyE.decreaseTotalSupply.call(uintOrWBZHK, uintjoe6jZ, {from: accounts[0]});
		const uintgYwgDRK = await DmmControllerV2IgpeUyE.requireIsNftOwner.call(uintPoGsG5T, {from: accounts[1]});
		const 
OfT0FxK = await DmmControllerV2IgpeUyE.adminDepositFunds.call(uintfqAfZmc, uintzYJ2DKy, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressoDmv9SS = accounts[2]
		const addressKYtz3b = "0x0000000000000000000000000000000000000001"
		const addressLBYetIi = accounts[3]
		const addressJOBBA6f = accounts[4]
		const addressKNWkphp = accounts[2]
		const addressMroJ0PQ = "0x0000000000000000000000000000000000000001"
		const addressrc3q3WK = accounts[1]
		const addressM82Y8gw = "0x0000000000000000000000000000000000000001"
		const addressZKBKzJB = accounts[4]
		const uintvpqMjN = BigInt("1079")
		const uintEKn8i6z = BigInt("312")
		const addressdoWuvKX = accounts[1]
		const DmmControllerV2IgpeUyE = await DmmControllerV2.new(addressoDmv9SS, addressKYtz3b, addressLBYetIi, addressJOBBA6f, addressKNWkphp, addressMroJ0PQ, addressrc3q3WK, addressM82Y8gw, addressZKBKzJB, uintvpqMjN, uintEKn8i6z, addressdoWuvKX, {from: accounts[4]});
		const uintPi0F6Jt = BigInt("1254")
		const uintiSRk7X = BigInt("263")
		const uintc9UrR5 = await DmmControllerV2IgpeUyE.getTotalCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
		const 
OfT0FxK = await DmmControllerV2IgpeUyE.adminDepositFunds.call(uintiSRk7X, uintPi0F6Jt, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGX4ouS = accounts[3]
		const addressxTxuaVg = accounts[3]
		const addressZ8J3915 = accounts[4]
		const addressEBzw6E = accounts[4]
		const addresskm9tqLc = "0x0000000000000000000000000000000000000001"
		const addressNjnHon = accounts[0]
		const addressrPK3e7e = accounts[5]
		const addressDQW4D6 = "0x0000000000000000000000000000000000000001"
		const addressUUG6Jt5 = accounts[4]
		const uinthUaNDzm = BigInt("43")
		const uints87tctk = BigInt("293")
		const addressNgC1IUS = accounts[3]
		const DmmControllerV2JuvH21R = await DmmControllerV2.new(addressGX4ouS, addressxTxuaVg, addressZ8J3915, addressEBzw6E, addresskm9tqLc, addressNjnHon, addressrPK3e7e, addressDQW4D6, addressUUG6Jt5, uinthUaNDzm, uints87tctk, addressNgC1IUS, {from: accounts[3]});
		const uintQil4XM4 = BigInt("2027")
		const uintCjq3Qs6 = await DmmControllerV2JuvH21R.getActiveCollateralization.call({from: accounts[1]});
		const addressM5d3p6I = await DmmControllerV2JuvH21R.getDmmTokenAddressByDmmTokenId.call(uintQil4XM4, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssnznD3L = accounts[4]
		const addressNtN5S4 = accounts[4]
		const addressmaMiRve = accounts[5]
		const addressc7euNh = accounts[1]
		const addresspbu7ohz = accounts[2]
		const addressv0cy78A = accounts[1]
		const addressfqfdebR = accounts[3]
		const addressKmGJZG = accounts[3]
		const addressAGPthSY = accounts[5]
		const uintxDRp41 = BigInt("804")
		const uintmxl7qKh = BigInt("541")
		const addressC2dcjR9 = accounts[4]
		const DmmControllerV2m76zuKy = await DmmControllerV2.new(addresssnznD3L, addressNtN5S4, addressmaMiRve, addressc7euNh, addresspbu7ohz, addressv0cy78A, addressfqfdebR, addressKmGJZG, addressAGPthSY, uintxDRp41, uintmxl7qKh, addressC2dcjR9, {from: "0x0000000000000000000000000000000000000001"});
		const addressG2P5xvc = accounts[4]
		const uintMEd6aih = BigInt("124")
		const uintZfxvTDa = BigInt("1606")
		const uintWo70mNH = BigInt("1840")
		const uintZmfnD61 = BigInt("759")
		const 
QOTgqjh = await DmmControllerV2m76zuKy.transferOwnership.call(addressG2P5xvc, {from: accounts[1]});
		const uintblPnJtj = await DmmControllerV2m76zuKy.requireIsNftOwner.call(uintMEd6aih, {from: accounts[1]});
		const uintgtN3Le7 = await DmmControllerV2m76zuKy.setMinReserveRatio.call(uintZfxvTDa, {from: accounts[1]});
		await DmmControllerV2m76zuKy.onlyOwnerOrGuardian.call({from: accounts[1]});
		await DmmControllerV2m76zuKy.onlyOwner.call({from: accounts[0]});
		const 
GRLZeNB = await DmmControllerV2m76zuKy.adminDepositFunds.call(uintZmfnD61, uintWo70mNH, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresseTRPS2D = accounts[3]
		const addressRcjFieg = accounts[3]
		const addresskL6uZ6A = accounts[4]
		const addresssunjxLT = accounts[4]
		const addressVu3Rj30 = "0x0000000000000000000000000000000000000001"
		const addressKrhuizl = accounts[0]
		const addresse70L7EY = accounts[5]
		const addressLHMOcWo = "0x0000000000000000000000000000000000000001"
		const addresshtIveL = accounts[4]
		const uintebYa5BX = BigInt("43")
		const uintUDBNztq = BigInt("293")
		const address7i2mEK = accounts[3]
		const DmmControllerV2JuvH21R = await DmmControllerV2.new(addresseTRPS2D, addressRcjFieg, addresskL6uZ6A, addresssunjxLT, addressVu3Rj30, addressKrhuizl, addresse70L7EY, addressLHMOcWo, addresshtIveL, uintebYa5BX, uintUDBNztq, address7i2mEK, {from: accounts[3]});
		const addressmmLfZ9q = accounts[0]
		const addressQpSHpk9 = accounts[0]
		const uintMfMuV87 = BigInt("2003")
		const addressh9w7AdQ = await DmmControllerV2JuvH21R.setDmmEtherFactory.call(addressmmLfZ9q, {from: accounts[0]});
		const boolU5s7Stt = await DmmControllerV2JuvH21R.isBlacklisted.call(addressQpSHpk9, {from: accounts[2]});
		await DmmControllerV2JuvH21R.initializer.call({from: accounts[4]});
		const addressM5d3p6I = await DmmControllerV2JuvH21R.getDmmTokenAddressByDmmTokenId.call(uintMfMuV87, {from: accounts[3]});
	});
})