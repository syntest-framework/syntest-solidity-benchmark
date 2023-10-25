const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2jaaxNpp = await DmmControllerV2.new({from: accounts[1]});
		const addressZUqOguX = accounts[1]
		const addressdtTiuo2 = accounts[0]
		const addressnAfqzLL = accounts[4]
		const uintyTcX0sy = BigInt("1348")
		const addressCjaM9Cl = accounts[3]
		const uintogXn5yf = await DmmControllerV2jaaxNpp.getTotalCollateralization.call({from: accounts[0]});
		const uintCJq1GEu = await DmmControllerV2jaaxNpp.getTokenIdFromDmmTokenAddress.call(addressZUqOguX, {from: accounts[4]});
		const 
kUi1yEW = await DmmControllerV2jaaxNpp.transferOwnershipToNewController.call(addressdtTiuo2, {from: "0x0000000000000000000000000000000000000001"});
		const 
sWwMYAd = await DmmControllerV2jaaxNpp.setGuardian.call(addressnAfqzLL, {from: accounts[0]});
		const uinteoRcx28 = await DmmControllerV2jaaxNpp.setMinCollateralization.call(uintyTcX0sy, {from: accounts[2]});
		const 
nwKrpKw = await DmmControllerV2jaaxNpp.setCollateralizationCalculator.call(addressCjaM9Cl, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHQQCf6K = accounts[3]
		const address9HwSEw = accounts[3]
		const addresstWGPdAn = accounts[5]
		const addressg1rUl0t = "0x0000000000000000000000000000000000000001"
		const addressKgLTHzc = accounts[4]
		const addressx0RZ5Tr = accounts[0]
		const addresszL8mRx3 = accounts[3]
		const addressXcqqMRE = accounts[4]
		const addressH5SvQR = accounts[2]
		const uintmzSx5Vi = BigInt("813")
		const uintJAtlcFc = BigInt("1743")
		const addressEDUBwsl = accounts[1]
		const DmmControllerV2vlKLMu = await DmmControllerV2.new(addressHQQCf6K, address9HwSEw, addresstWGPdAn, addressg1rUl0t, addressKgLTHzc, addressx0RZ5Tr, addresszL8mRx3, addressXcqqMRE, addressH5SvQR, uintmzSx5Vi, uintJAtlcFc, addressEDUBwsl, {from: accounts[1]});
		const uintG7HBDqd = BigInt("732")
		const uintTnF5AKc = BigInt("535")
		await DmmControllerV2vlKLMu.whenPaused.call({from: accounts[2]});
		const 
lsKzp7a = await DmmControllerV2vlKLMu.decreaseTotalSupply.call(uintTnF5AKc, uintG7HBDqd, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresswgqFMaG = "0x0000000000000000000000000000000000000001"
		const addressp1fx1QD = accounts[0]
		const addressIeYhqam = accounts[4]
		const addresssQ5K21 = accounts[5]
		const addressTHIFTkK = accounts[0]
		const addresslNtj5P = accounts[3]
		const addressMNCpU3 = accounts[1]
		const addressP9NhD3A = accounts[3]
		const addresscxha9ym = accounts[1]
		const uintPZadsy = BigInt("2005")
		const uintq7vdWL = BigInt("280")
		const addressw7uyRIr = accounts[2]
		const DmmControllerV2FYRKov = await DmmControllerV2.new(addresswgqFMaG, addressp1fx1QD, addressIeYhqam, addresssQ5K21, addressTHIFTkK, addresslNtj5P, addressMNCpU3, addressP9NhD3A, addresscxha9ym, uintPZadsy, uintq7vdWL, addressw7uyRIr, {from: accounts[0]});
		const addressdokYO1 = accounts[1]
		const uintdoo69a = BigInt("1229")
		const addressy9Eq10d = "0x0000000000000000000000000000000000000001"
		const boolMj474F = await DmmControllerV2FYRKov.isMarketEnabledByDmmTokenAddress.call(addressdokYO1, {from: accounts[2]});
		const uintWS4XSW = await DmmControllerV2FYRKov.enableMarket.call(uintdoo69a, {from: accounts[3]});
		const addressFXH8vSV = await DmmControllerV2FYRKov.setDmmEtherFactory.call(addressy9Eq10d, {from: accounts[4]});
		const boolAl9gy9m = await DmmControllerV2FYRKov.isOwner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressCYPhq4b = accounts[1]
		const addressa2hevVw = accounts[2]
		const addressqqNpSY = accounts[3]
		const addressBIi941u = accounts[1]
		const addressWMhVTtZ = "0x0000000000000000000000000000000000000001"
		const addressOPbnJgF = accounts[2]
		const addressjKJhrDz = accounts[1]
		const addresswWwCiil = accounts[2]
		const addresslD63oMK = accounts[0]
		const uintBF8zNPc = BigInt("520")
		const uintpBJif4Y = BigInt("430")
		const addressCB6VLcx = accounts[2]
		const DmmControllerV2biqAwhp = await DmmControllerV2.new(addressCYPhq4b, addressa2hevVw, addressqqNpSY, addressBIi941u, addressWMhVTtZ, addressOPbnJgF, addressjKJhrDz, addresswWwCiil, addresslD63oMK, uintBF8zNPc, uintpBJif4Y, addressCB6VLcx, {from: accounts[5]});
		const addresssclFKo1 = accounts[2]
		const uintE9rdzA7 = BigInt("104")
		const uint6LCZz4 = BigInt("1723")
		const addressbDTsBGE = await DmmControllerV2biqAwhp.setDmmTokenFactory.call(addresssclFKo1, {from: accounts[3]});
		const boolFnGpVeG = await DmmControllerV2biqAwhp.isMarketEnabledByDmmTokenId.call(uintE9rdzA7, {from: accounts[0]});
		const uintY5L5Ope = await DmmControllerV2biqAwhp.requireIsPrimaryMarketNft.call(uint6LCZz4, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressWHl0q5O = accounts[5]
		const addressaV5JJlB = accounts[5]
		const addressXzs77Z = accounts[4]
		const addressdTawXGe = accounts[1]
		const addressHn7EjR0 = accounts[1]
		const addressFWXy3TR = accounts[0]
		const addresszRowPsg = "0x0000000000000000000000000000000000000001"
		const addressUYLUjCk = "0x0000000000000000000000000000000000000001"
		const addressPEbAhdA = accounts[3]
		const uint6yo8xj = BigInt("342")
		const uintUITy9SL = BigInt("179")
		const address0sdDQN = accounts[5]
		const DmmControllerV2HXd2dMn = await DmmControllerV2.new(addressWHl0q5O, addressaV5JJlB, addressXzs77Z, addressdTawXGe, addressHn7EjR0, addressFWXy3TR, addresszRowPsg, addressUYLUjCk, addressPEbAhdA, uint6yo8xj, uintUITy9SL, address0sdDQN, {from: accounts[2]});
		const addressIXbRIVH = accounts[4]
		const addressBGhw4Xr = "0x0000000000000000000000000000000000000001"
		const uintvvl2eh = BigInt("868")
		const uintFjYxsov = BigInt("9")
		const addressrbJmH9 = await DmmControllerV2HXd2dMn.owner.call({from: accounts[3]});
		const uintvWeHh2g = await DmmControllerV2HXd2dMn.getInterestRateByDmmTokenAddress.call(addressIXbRIVH, {from: accounts[5]});
		await DmmControllerV2HXd2dMn.requireIsFromAssetIntroducer.call({from: accounts[0]});
		const addressrPLOyz = await DmmControllerV2HXd2dMn.setDmmTokenFactory.call(addressBGhw4Xr, {from: accounts[1]});
		const 
FXhLaJM = await DmmControllerV2HXd2dMn.adminDepositFunds.call(uintFjYxsov, uintvvl2eh, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressxjhO1gy = accounts[5]
		const addressjgOcb0G = accounts[5]
		const addressXToIByv = accounts[4]
		const addressuNuwPg = accounts[1]
		const addressdlzprSd = accounts[1]
		const addressBfVeSXs = accounts[0]
		const addressPATMo63 = "0x0000000000000000000000000000000000000001"
		const addressmGhDfA = "0x0000000000000000000000000000000000000001"
		const addressB3g1NGY = accounts[3]
		const uinthUxg3WD = BigInt("342")
		const uintummlnBT = BigInt("179")
		const addressx5Eo4ay = accounts[5]
		const DmmControllerV2HXd2dMn = await DmmControllerV2.new(addressxjhO1gy, addressjgOcb0G, addressXToIByv, addressuNuwPg, addressdlzprSd, addressBfVeSXs, addressPATMo63, addressmGhDfA, addressB3g1NGY, uinthUxg3WD, uintummlnBT, addressx5Eo4ay, {from: accounts[2]});
		const addressjcxuzuK = accounts[4]
		const addresslbVSKMP = "0x0000000000000000000000000000000000000001"
		const uintDVbsqy4 = BigInt("868")
		const uintk6VYhTB = BigInt("9")
		const addressrbJmH9 = await DmmControllerV2HXd2dMn.owner.call({from: accounts[3]});
		const uintXtfDKgk = await DmmControllerV2HXd2dMn.getTotalCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvWeHh2g = await DmmControllerV2HXd2dMn.getInterestRateByDmmTokenAddress.call(addressjcxuzuK, {from: accounts[5]});
		await DmmControllerV2HXd2dMn.requireIsFromAssetIntroducer.call({from: accounts[0]});
		const addressrPLOyz = await DmmControllerV2HXd2dMn.setDmmTokenFactory.call(addresslbVSKMP, {from: accounts[1]});
		const 
FXhLaJM = await DmmControllerV2HXd2dMn.adminDepositFunds.call(uintk6VYhTB, uintDVbsqy4, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresszNCzTk = accounts[1]
		const addressbfHi83L = accounts[2]
		const addresscKEpEy = accounts[3]
		const addresss75eHD = accounts[1]
		const addressnd9Pnhj = "0x0000000000000000000000000000000000000001"
		const addressFRM3eSm = accounts[2]
		const address7QVEFe = accounts[1]
		const addressFObofYl = accounts[2]
		const addressPz5UJjb = accounts[0]
		const uintkO8kQ3m = BigInt("520")
		const uintwVpaJGS = BigInt("430")
		const addressR1pv4v = accounts[2]
		const DmmControllerV2biqAwhp = await DmmControllerV2.new(addresszNCzTk, addressbfHi83L, addresscKEpEy, addresss75eHD, addressnd9Pnhj, addressFRM3eSm, address7QVEFe, addressFObofYl, addressPz5UJjb, uintkO8kQ3m, uintwVpaJGS, addressR1pv4v, {from: accounts[5]});
		const addressDhfinPR = "0x0000000000000000000000000000000000000001"
		const addressv8HvMg2 = accounts[2]
		const uintZ2zUWtK = BigInt("104")
		const uintYMIsOS = BigInt("1735")
		const addressMlibwR9 = await DmmControllerV2biqAwhp.transferOwnership.call(addressDhfinPR, {from: accounts[5]});
		const addressbDTsBGE = await DmmControllerV2biqAwhp.setDmmTokenFactory.call(addressv8HvMg2, {from: accounts[3]});
		const boolFnGpVeG = await DmmControllerV2biqAwhp.isMarketEnabledByDmmTokenId.call(uintZ2zUWtK, {from: accounts[0]});
		const uintY5L5Ope = await DmmControllerV2biqAwhp.requireIsPrimaryMarketNft.call(uintYMIsOS, {from: accounts[0]});
	});
})