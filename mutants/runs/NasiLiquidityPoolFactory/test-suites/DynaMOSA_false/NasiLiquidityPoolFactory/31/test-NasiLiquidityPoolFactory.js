const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUkdMSNL = "EGbgbtcqARZqIzYMw71nHNCet5uaEruLNJvRUvn9hBDcYOO8WtVloQjBOgCzTV9ehdq0ikQLqUX4CvTty"
		const stringkGcM5LT = "Ci3PUp2heV6UJYz9vAKUddMjVmJuK1Ec8dmCTU35ax8WXlMLwkFplFMBESNtGOk62"
		const uintY9Hdt8V = BigInt("166")
		const NasiLiquidityPoolFactorylkAz9nE = await NasiLiquidityPoolFactory.new(stringUkdMSNL, stringkGcM5LT, uintY9Hdt8V, {from: accounts[1]});
		const addresssX9AQCl = accounts[3]
		const address9LRipA = accounts[1]
		const uint256ynpABT2 = await NasiLiquidityPoolFactorylkAz9nE.balanceOf.call(addresssX9AQCl, {from: accounts[3]});
		await NasiLiquidityPoolFactorylkAz9nE.renounceMinter.call({from: accounts[0]});
		const addressFE9cOrW = await NasiLiquidityPoolFactorylkAz9nE.addMinter.call(address9LRipA, {from: accounts[5]});
		await NasiLiquidityPoolFactorylkAz9nE.pause.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressI98Xknr = accounts[3]
		const addressahZN0Kq = accounts[3]
		const uintbT4EOJO = BigInt("1130")
		const uintTDktJr8 = BigInt("138")
		const NasiLiquidityPoolFactoryz0yg9y7 = await NasiLiquidityPoolFactory.new(addressI98Xknr, addressahZN0Kq, uintbT4EOJO, uintTDktJr8, {from: "0x0000000000000000000000000000000000000001"});
		const addressJrYNZw0 = accounts[3]
		const addresse0Csgg = accounts[4]
		const boolfHB32C5 = false
		const uintIJvmRiO = BigInt("1644")
		const uintIi53pyn = BigInt("561")
		const uintJDtYN6G = BigInt("1784")
		const addressR7PUV34 = accounts[0]
		const uintpnHE3T4 = BigInt("935")
		const addressAgQPZl = await NasiLiquidityPoolFactoryz0yg9y7._delegate.call(addresse0Csgg, addressJrYNZw0, {from: accounts[4]});
		const uint256hMO3gX = await NasiLiquidityPoolFactoryz0yg9y7.setAllocationPoint.call(uintIi53pyn, uintIJvmRiO, boolfHB32C5, {from: accounts[5]});
		const booliud2iM1 = await NasiLiquidityPoolFactoryz0yg9y7.decreaseAllowance.call(addressR7PUV34, uintJDtYN6G, {from: accounts[4]});
		const uint256TJFeRbG = await NasiLiquidityPoolFactoryz0yg9y7.leaveStaking.call(uintpnHE3T4, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwJ3y4Oe = "cWUyDzv2zHWOuwk1piVs"
		const stringUD3cEgJ = "JThqrGUj1QEjKCRxmz"
		const uintN7pQ1D = BigInt("183")
		const NasiLiquidityPoolFactoryEwZXyDV = await NasiLiquidityPoolFactory.new(stringwJ3y4Oe, stringUD3cEgJ, uintN7pQ1D, {from: accounts[1]});
		const uintasOQcTo = BigInt("319")
		const addressOC2OuVI = accounts[3]
		const addressQdyoDs2 = accounts[3]
		const uintY1HEAFh = BigInt("1970")
		const uint256QylNNAx = await NasiLiquidityPoolFactoryEwZXyDV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DWtAdT1 = await NasiLiquidityPoolFactoryEwZXyDV.updatePool.call(uintasOQcTo, {from: accounts[3]});
		const addressVREPedK = await NasiLiquidityPoolFactoryEwZXyDV.delegate.call(addressOC2OuVI, {from: accounts[3]});
		const addressET0IUs = await NasiLiquidityPoolFactoryEwZXyDV.delegate.call(addressQdyoDs2, {from: accounts[4]});
		const uint256HKikemR = await NasiLiquidityPoolFactoryEwZXyDV.emergencyWithdraw.call(uintY1HEAFh, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvEeabXs = "b3GIRLgu12Nic5QcsWh3KtqGzrpy7A3LrWlaq"
		const stringzLwhIwG = "tQfGfre3fW4nbVNBROGwxWd4R5bYvpYqIxi5"
		const uintqwEwL7n = BigInt("77")
		const NasiLiquidityPoolFactoryAuwMPYH = await NasiLiquidityPoolFactory.new(stringvEeabXs, stringzLwhIwG, uintqwEwL7n, {from: accounts[5]});
		const uintzoBR4LC = BigInt("2008")
		const addressP7deS0 = accounts[4]
		await NasiLiquidityPoolFactoryAuwMPYH.onlyPauser.call({from: accounts[3]});
		const uint256os1Tcdr = await NasiLiquidityPoolFactoryAuwMPYH.enterStaking.call(uintzoBR4LC, {from: accounts[3]});
		const addressEE6xEld = await NasiLiquidityPoolFactoryAuwMPYH.addMinter.call(addressP7deS0, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxIxgm4O = accounts[1]
		const addressfn9v6YQ = accounts[0]
		const uintbew3fgY = BigInt("704")
		const uintPpa9LYV = BigInt("1249")
		const NasiLiquidityPoolFactoryJa6uq63 = await NasiLiquidityPoolFactory.new(addressxIxgm4O, addressfn9v6YQ, uintbew3fgY, uintPpa9LYV, {from: accounts[0]});
		const addresskEfvbi = accounts[0]
		const uintJUplKE7 = BigInt("1625")
		const addressgXGF6O3 = accounts[2]
		const addressbi3BdpN = accounts[1]
		const uint7imH6n = BigInt("1708")
		const addressAM9WEWY = accounts[5]
		const uint5wJsb6 = BigInt("1676")
		const addressHBZ2j7J = accounts[1]
		const uintwUwrjcj = BigInt("639")
		const addressAhDjvI2 = accounts[4]
		const addressKAmko05 = await NasiLiquidityPoolFactoryJa6uq63.addPauser.call(addresskEfvbi, {from: accounts[3]});
		const boolW9MDJQq = await NasiLiquidityPoolFactoryJa6uq63.increaseAllowance.call(addressgXGF6O3, uintJUplKE7, {from: "0x0000000000000000000000000000000000000001"});
		const addressmIXmfYw = await NasiLiquidityPoolFactoryJa6uq63.dev.call(addressbi3BdpN, {from: accounts[1]});
		const boolLD6zIrB = await NasiLiquidityPoolFactoryJa6uq63.decreaseAllowance.call(addressAM9WEWY, uint7imH6n, {from: accounts[1]});
		const boolrBIQdF7 = await NasiLiquidityPoolFactoryJa6uq63.approve.call(addressHBZ2j7J, uint5wJsb6, {from: accounts[3]});
		const boollw5QFE4 = await NasiLiquidityPoolFactoryJa6uq63.mint.call(addressAhDjvI2, uintwUwrjcj, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringS9OSQ2e = "HX9Q36T4Jw"
		const stringDNuE4l = "om8NwV3hoaoXKhdr37yOmYLNEYdyidfE4CPcs1aAw9S2FYNY67PbH3elbnrqv"
		const uintza3kgEH = BigInt("252")
		const NasiLiquidityPoolFactoryIhahsiG = await NasiLiquidityPoolFactory.new(stringS9OSQ2e, stringDNuE4l, uintza3kgEH, {from: accounts[1]});
		const uintKfIrEPd = BigInt("1612")
		const stringBBhEGf8 = await NasiLiquidityPoolFactoryIhahsiG.symbol.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryIhahsiG.whenPaused.call({from: accounts[3]});
		const uint256UgMU76L = await NasiLiquidityPoolFactoryIhahsiG.burn.call(uintKfIrEPd, {from: accounts[0]});
		await NasiLiquidityPoolFactoryIhahsiG.renouncePauser.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressT4IUrh9 = accounts[5]
		const address6ke0DY = accounts[4]
		const uintSwc1gQW = BigInt("1407")
		const uintEao721 = BigInt("725")
		const NasiLiquidityPoolFactoryriZZWY7 = await NasiLiquidityPoolFactory.new(addressT4IUrh9, address6ke0DY, uintSwc1gQW, uintEao721, {from: accounts[1]});
		const uintADlFxeN = BigInt("118")
		const uintygjIizG = BigInt("1476")
		const boolkkH9lmB = false
		const addressZHbCgu = accounts[1]
		const uintPbi44Mv = BigInt("932")
		const addressPXv7ZXo = accounts[1]
		const uint256jvjWLD7 = await NasiLiquidityPoolFactoryriZZWY7.getBonusMultiplier.call(uintygjIizG, uintADlFxeN, {from: accounts[5]});
		const uint256z36uszl = await NasiLiquidityPoolFactoryriZZWY7.addLpToken.call(uintPbi44Mv, addressZHbCgu, boolkkH9lmB, {from: accounts[4]});
		const addressyKx1BZg = await NasiLiquidityPoolFactoryriZZWY7.dev.call(addressPXv7ZXo, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcTYaQjY = "dG"
		const stringXt8VGSu = "83Tku44Pueu67KJiaJ2BdmXPQipEJg259CwU2DwXaPIW"
		const uintaNwWCVi = BigInt("77")
		const NasiLiquidityPoolFactoryMn8UUS2 = await NasiLiquidityPoolFactory.new(stringcTYaQjY, stringXt8VGSu, uintaNwWCVi, {from: accounts[4]});
		const addressdO6tAQ = accounts[4]
		const addressG39ErO = accounts[2]
		const uintIKVtVGO = BigInt("983")
		const addresstrWQwHz = accounts[0]
		const addressOkghOow = accounts[1]
		const uintFTGjwJp = BigInt("1183")
		const uintEK12WJT = BigInt("725")
		const uintgJjSo8 = BigInt("790")
		const addressxBE65o9 = "0x0000000000000000000000000000000000000001"
		const addressCGrwLC = accounts[1]
		await NasiLiquidityPoolFactoryMn8UUS2.onlyPauser.call({from: accounts[4]});
		const addressp5gBU3i = await NasiLiquidityPoolFactoryMn8UUS2.transferOwnership.call(addressdO6tAQ, {from: accounts[2]});
		const addresszC6b3X = await NasiLiquidityPoolFactoryMn8UUS2.transferOwnership.call(addressG39ErO, {from: accounts[5]});
		const boolbI4q6sS = await NasiLiquidityPoolFactoryMn8UUS2.transferFrom.call(addressOkghOow, addresstrWQwHz, uintIKVtVGO, {from: accounts[3]});
		const 
nBEn6rt = await NasiLiquidityPoolFactoryMn8UUS2._writeCheckpoint.call(addressxBE65o9, uintgJjSo8, uintEK12WJT, uintFTGjwJp, {from: accounts[1]});
		const addressznK5Ya9 = await NasiLiquidityPoolFactoryMn8UUS2.setMigrator.call(addressCGrwLC, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressPEYMxID = accounts[5]
		const addressEk4jv7 = accounts[4]
		const uintPdsGZGK = BigInt("1407")
		const uintWDm6PB = BigInt("725")
		const NasiLiquidityPoolFactoryriZZWY7 = await NasiLiquidityPoolFactory.new(addressPEYMxID, addressEk4jv7, uintPdsGZGK, uintWDm6PB, {from: accounts[1]});
		const uintlBFyZ3q = BigInt("1164")
		const uintw4zKohn = BigInt("118")
		const uintA0hgpOi = BigInt("1476")
		const boolkkH9lmB = false
		const addresseJLJfMT = accounts[2]
		const uintscMceis = BigInt("932")
		const uintwQtxysL = BigInt("1249")
		const address2c08oZ = accounts[3]
		const addresshu685St = accounts[1]
		const uint256wD8q0eL = await NasiLiquidityPoolFactoryriZZWY7.migrate.call(uintlBFyZ3q, {from: accounts[1]});
		const boolwdAzGDX = await NasiLiquidityPoolFactoryriZZWY7.paused.call({from: accounts[0]});
		const uint256jvjWLD7 = await NasiLiquidityPoolFactoryriZZWY7.getBonusMultiplier.call(uintA0hgpOi, uintw4zKohn, {from: accounts[5]});
		const uint256z36uszl = await NasiLiquidityPoolFactoryriZZWY7.addLpToken.call(uintscMceis, addresseJLJfMT, boolkkH9lmB, {from: accounts[4]});
		const boolRKtYg1p = await NasiLiquidityPoolFactoryriZZWY7.transfer.call(address2c08oZ, uintwQtxysL, {from: accounts[2]});
		const addressyKx1BZg = await NasiLiquidityPoolFactoryriZZWY7.dev.call(addresshu685St, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnniXOIt = "IPkHtNWvukJJZ2QE4yD8zJp4u2PysXhKknkFn6OT4znXnEDbuIamvTwPcJofEyIrCzEt972bdN6ghxeDLUfLdq"
		const stringuBQEIVs = "UKN6GCK1TPBoFQXKilmpnguOwtse6GHJ36NQmvxvR7BWcs75uVWgwR8wl79tILlQ9nWGxjl2egry4pijp"
		const uintrwhWtrl = BigInt("111")
		const NasiLiquidityPoolFactoryzJ0OHD = await NasiLiquidityPoolFactory.new(stringnniXOIt, stringuBQEIVs, uintrwhWtrl, {from: accounts[2]});
		const uintyAhSxIq = BigInt("212")
		const addressj2Foulu = accounts[4]
		const boolTt3GJrg = await NasiLiquidityPoolFactoryzJ0OHD.increaseAllowance.call(addressj2Foulu, uintyAhSxIq, {from: accounts[1]});
		await NasiLiquidityPoolFactoryzJ0OHD.onlyOwner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringLq5wVR = "aEwysSbDStmhujTqes3EMdG2fY1GOov26JvawfrIK48rvfWVahSJPdKIAS"
		const stringhTKJccz = "PnjziFQ3QwcgRp7Ze2qVwokYqlF1yl"
		const uintIp29Nuo = BigInt("136")
		const NasiLiquidityPoolFactoryUutJ9H = await NasiLiquidityPoolFactory.new(stringLq5wVR, stringhTKJccz, uintIp29Nuo, {from: accounts[5]});
		const uintkgV304f = BigInt("1775")
		const addresshGq93Iv = accounts[3]
		const uintDRU2IX0 = BigInt("539")
		const stringfeUS4Hu = await NasiLiquidityPoolFactoryUutJ9H.symbol.call({from: accounts[4]});
		const stringehrnyif = await NasiLiquidityPoolFactoryUutJ9H.symbol.call({from: accounts[4]});
		const boolsLRqFPb = await NasiLiquidityPoolFactoryUutJ9H.approve.call(addresshGq93Iv, uintkgV304f, {from: accounts[4]});
		const uint256HYtRtBw = await NasiLiquidityPoolFactoryUutJ9H.enterStaking.call(uintDRU2IX0, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressM2q10ji = accounts[1]
		const addressfaJ1j1o = accounts[1]
		const uintQ1NYFD = BigInt("1732")
		const uintOyJkCzY = BigInt("21")
		const NasiLiquidityPoolFactoryva8BOE = await NasiLiquidityPoolFactory.new(addressM2q10ji, addressfaJ1j1o, uintQ1NYFD, uintOyJkCzY, {from: accounts[3]});
		const uintKF8stJp = BigInt("747")
		const uintcU9Q47 = BigInt("906")
		const uint9red5k = BigInt("1259")
		const uintxFcUMf5 = BigInt("217")
		const uintUdaTuoq = BigInt("155")
		const uint25605mA1h = await NasiLiquidityPoolFactoryva8BOE.emergencyWithdraw.call(uintKF8stJp, {from: accounts[2]});
		const uint256Eu8Zeb1 = await NasiLiquidityPoolFactoryva8BOE.totalSupply.call({from: accounts[0]});
		const uint2563gZQUF = await NasiLiquidityPoolFactoryva8BOE.getBonusMultiplier.call(uint9red5k, uintcU9Q47, {from: accounts[1]});
		const uint256ZDfs3Pn = await NasiLiquidityPoolFactoryva8BOE.withdraw.call(uintUdaTuoq, uintxFcUMf5, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgE8Sg03 = "pR6vAaafxNEuXqz89uWIS33haIXRH1bI1LQwUNG9TVWuHuYE9xys85WUS3eS8AkPrgF3WiNyjUWobhAJ4ie4VOcMR1VvvUBt"
		const stringhAL5q3r = "lk7giDiffTGOMMOfPWNBcECe0HxVsPx"
		const uintoFOvaLj = BigInt("95")
		const NasiLiquidityPoolFactoryrc6dp2T = await NasiLiquidityPoolFactory.new(stringgE8Sg03, stringhAL5q3r, uintoFOvaLj, {from: accounts[4]});
		const address3PFl8Q = accounts[5]
		const uintvtPjbIH = BigInt("343")
		const addresss1Ez34d = accounts[2]
		const uintedEJzsQ = BigInt("1680")
		const addressXgmxZ54 = accounts[1]
		const uinttLoYi4h = BigInt("833")
		const boolPnscI2x = await NasiLiquidityPoolFactoryrc6dp2T.isMinter.call(address3PFl8Q, {from: accounts[3]});
		await NasiLiquidityPoolFactoryrc6dp2T.renounceOwnership.call({from: accounts[3]});
		const boolivJ8V8Z = await NasiLiquidityPoolFactoryrc6dp2T.mint.call(addresss1Ez34d, uintvtPjbIH, {from: accounts[1]});
		const booleKGhS7k = await NasiLiquidityPoolFactoryrc6dp2T.approve.call(addressXgmxZ54, uintedEJzsQ, {from: accounts[2]});
		const uint256vKMxVBE = await NasiLiquidityPoolFactoryrc6dp2T.burn.call(uinttLoYi4h, {from: accounts[4]});
		await NasiLiquidityPoolFactoryrc6dp2T.whenPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYJ64aDc = "Wo"
		const stringCuCxAGA = "C86YcleJbS19L7TQrFM7X9hYyyG7r6iV9VuxCzrCOQWO3Fm3DmD3b8gP"
		const uintM8BsmTQ = BigInt("103")
		const NasiLiquidityPoolFactorymOtoWv0 = await NasiLiquidityPoolFactory.new(stringYJ64aDc, stringCuCxAGA, uintM8BsmTQ, {from: accounts[1]});
		const addresskVn4J5 = await NasiLiquidityPoolFactorymOtoWv0.owner.call({from: accounts[5]});
		await NasiLiquidityPoolFactorymOtoWv0.renouncePauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVPyJD2f = "ZaukuNuqGNBQATvYvApvAjCGOp"
		const stringhHtD85D = "t2Y4P1EvyEUaJnQxmIUtqPOXbYXRUUq"
		const uintmKmssKN = BigInt("112")
		const NasiLiquidityPoolFactoryt2N98Rq = await NasiLiquidityPoolFactory.new(stringVPyJD2f, stringhHtD85D, uintmKmssKN, {from: accounts[1]});
		await NasiLiquidityPoolFactoryt2N98Rq.onlyPauser.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryt2N98Rq.unpause.call({from: accounts[4]});
		const stringGNos1CN = await NasiLiquidityPoolFactoryt2N98Rq.symbol.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqlHaYpx = accounts[4]
		const addressqAOOcR = accounts[3]
		const uintRv8eq1y = BigInt("853")
		const uintfTeJpb3 = BigInt("588")
		const NasiLiquidityPoolFactoryurEN0m = await NasiLiquidityPoolFactory.new(addressqlHaYpx, addressqAOOcR, uintRv8eq1y, uintfTeJpb3, {from: accounts[0]});
		const addressWQJN47p = "0x0000000000000000000000000000000000000001"
		const uintwoLfONP = BigInt("1073")
		const addressLOdg8F5 = accounts[1]
		const uintP7hozbJ = BigInt("889")
		const uint256d7xIf8J = await NasiLiquidityPoolFactoryurEN0m.pendingNasi.call(uintwoLfONP, addressWQJN47p, {from: accounts[3]});
		await NasiLiquidityPoolFactoryurEN0m.whenNotPaused.call({from: accounts[3]});
		const uint256QA969c = await NasiLiquidityPoolFactoryurEN0m.pendingNasi.call(uintP7hozbJ, addressLOdg8F5, {from: accounts[3]});
		await NasiLiquidityPoolFactoryurEN0m.onlyPauser.call({from: accounts[4]});
		const uint256CDeawXW = await NasiLiquidityPoolFactoryurEN0m.totalSupply.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryurEN0m.whenNotPaused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringuBPF9A = "JanBdT97x0Od"
		const stringDZjKoXL = "ye6cENs2gc0hvJpM9cDBJH62yEUVEkULplcRMgKNJwAkSKHF6sbl1z6zGl1KEYRcNx8CGTAvBlLOnyDx6hSzJwa"
		const uintoO4qI9U = BigInt("232")
		const NasiLiquidityPoolFactoryMgagCg = await NasiLiquidityPoolFactory.new(stringuBPF9A, stringDZjKoXL, uintoO4qI9U, {from: accounts[4]});
		const addressVLHn4xV = accounts[4]
		const addressqE0Ys60 = accounts[1]
		await NasiLiquidityPoolFactoryMgagCg.renounceOwnership.call({from: accounts[0]});
		const boolTN35ahE = await NasiLiquidityPoolFactoryMgagCg.isPauser.call(addressVLHn4xV, {from: accounts[5]});
		const addresszndcW9l = await NasiLiquidityPoolFactoryMgagCg.addMinter.call(addressqE0Ys60, {from: accounts[3]});
		const boolTUhZV5 = await NasiLiquidityPoolFactoryMgagCg.isOwner.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgfgxUHt = "Q9zhrSnd0phmcHQVHrgQlTlndT4lSfbV7zwTOmlHltNnz4vmTytrfARdd8N"
		const stringwxYKk88 = "tMGDlebmyEgVCW6vsltydYB"
		const uintcYMaSFZ = BigInt("5")
		const NasiLiquidityPoolFactoryCrint9n = await NasiLiquidityPoolFactory.new(stringgfgxUHt, stringwxYKk88, uintcYMaSFZ, {from: accounts[2]});
		await NasiLiquidityPoolFactoryCrint9n.pause.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryCrint9n.whenNotPaused.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressajr34L = accounts[4]
		const addressxjsLLo = accounts[3]
		const uintcB2ir9p = BigInt("853")
		const uintiY2VPJ9 = BigInt("588")
		const NasiLiquidityPoolFactoryurEN0m = await NasiLiquidityPoolFactory.new(addressajr34L, addressxjsLLo, uintcB2ir9p, uintiY2VPJ9, {from: accounts[0]});
		const uintyLZrVFm = BigInt("373")
		const addressHwppER = accounts[1]
		const uintgB7EQT = BigInt("883")
		const uinty6YnB4K = BigInt("522")
		const addressroHWUVF = accounts[2]
		const uint256M7jYg5 = await NasiLiquidityPoolFactoryurEN0m.enterStaking.call(uintyLZrVFm, {from: accounts[3]});
		const uint256QA969c = await NasiLiquidityPoolFactoryurEN0m.pendingNasi.call(uintgB7EQT, addressHwppER, {from: accounts[3]});
		await NasiLiquidityPoolFactoryurEN0m.renounceMinter.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryurEN0m.onlyPauser.call({from: accounts[4]});
		const boolZX9MgQz = await NasiLiquidityPoolFactoryurEN0m.mint.call(addressroHWUVF, uinty6YnB4K, {from: accounts[1]});
		const uint256CDeawXW = await NasiLiquidityPoolFactoryurEN0m.totalSupply.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryurEN0m.whenNotPaused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSKyshpE = "MYrDvUyNLEdGLrJKtPPfJpsNkVc918PIzj8PIIEVh5pExzP2W5kRBXXujHFNAkym8nxvHRLJf2GSWDhXEf81a5ErGGiFPwGAb1N"
		const stringzbkxLUe = "0MkjJwqhtG7kFkp57v4EQkMQwlquLJCLFYkRT5z1IAjEg"
		const uintc63RX2w = BigInt("199")
		const NasiLiquidityPoolFactoryQ4bUdX9 = await NasiLiquidityPoolFactory.new(stringSKyshpE, stringzbkxLUe, uintc63RX2w, {from: accounts[1]});
		const addressQaWVfeB = "0x0000000000000000000000000000000000000001"
		const uintf9ks9AF = BigInt("606")
		const addressUHVjAgm = "0x0000000000000000000000000000000000000001"
		const addressku7zUkB = accounts[3]
		const uintlRBIxdH = BigInt("1823")
		const boolpyllrhh = await NasiLiquidityPoolFactoryQ4bUdX9.isOwner.call({from: accounts[3]});
		const uint256RbijiaL = await NasiLiquidityPoolFactoryQ4bUdX9.getCurrentVotes.call(addressQaWVfeB, {from: accounts[3]});
		const boolq8Lv4aW = await NasiLiquidityPoolFactoryQ4bUdX9.decreaseAllowance.call(addressUHVjAgm, uintf9ks9AF, {from: accounts[4]});
		const uint256jplrVDq = await NasiLiquidityPoolFactoryQ4bUdX9.balanceOf.call(addressku7zUkB, {from: accounts[2]});
		const uint256gTxdDZs = await NasiLiquidityPoolFactoryQ4bUdX9.totalSupply.call({from: accounts[2]});
		const uint256Kx4p5GW = await NasiLiquidityPoolFactoryQ4bUdX9.burn.call(uintlRBIxdH, {from: accounts[3]});
	});
})