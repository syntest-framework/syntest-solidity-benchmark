const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressH1JWeb9 = accounts[3]
		const addressMicMVB = accounts[2]
		const addresssYgWqer = accounts[5]
		const addresslbSviY = accounts[0]
		const addressGSQ9aEm = "0x0000000000000000000000000000000000000001"
		const addressBfzixu5 = accounts[2]
		const addressvoLH0Wa = accounts[0]
		const addressKVweBgB = accounts[0]
		const addressXO0PMpn = accounts[5]
		const uintD85OjJg = BigInt("376")
		const uintUG7LXU9 = BigInt("1194")
		const addressZJSVmIw = accounts[0]
		const DmmControllerV2NWHMHb = await DmmControllerV2.new(addressH1JWeb9, addressMicMVB, addresssYgWqer, addresslbSviY, addressGSQ9aEm, addressBfzixu5, addressvoLH0Wa, addressKVweBgB, addressXO0PMpn, uintD85OjJg, uintUG7LXU9, addressZJSVmIw, {from: accounts[2]});
		const uintT2UcOai = BigInt("56")
		const uintqWh0yOf = BigInt("915")
		const addressM2uhYsW = accounts[0]
		const uintpJZYIcq = BigInt("1773")
		const 
Ld7A2IL = await DmmControllerV2NWHMHb.adminDepositFunds.call(uintqWh0yOf, uintT2UcOai, {from: accounts[0]});
		const address8hangj = await DmmControllerV2NWHMHb.blacklist.call(addressM2uhYsW, {from: accounts[0]});
		const uinthnNufe9 = await DmmControllerV2NWHMHb.getInterestRateByDmmTokenId.call(uintpJZYIcq, {from: accounts[2]});
		await DmmControllerV2NWHMHb.initializer.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2WZTfPtD = await DmmControllerV2.new({from: accounts[4]});
		const addressBwIDEip = accounts[2]
		const boolaRShRhf = await DmmControllerV2WZTfPtD.isBlacklisted.call(addressBwIDEip, {from: accounts[3]});
		await DmmControllerV2WZTfPtD.whenPaused.call({from: accounts[3]});
		await DmmControllerV2WZTfPtD.onlyOwnerOrGuardian.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHJhxMko = accounts[0]
		const address9vG5Fl = accounts[4]
		const addressscjLZJJ = accounts[1]
		const addressnktv9TU = accounts[3]
		const addressnJW72pa = accounts[2]
		const addressPPnI9T = accounts[0]
		const addresszZfQRHA = accounts[4]
		const addressdUPGyds = accounts[0]
		const addressWUXiXxm = accounts[4]
		const uintrpH3Dkm = BigInt("333")
		const uintpLsCclF = BigInt("924")
		const addressyFS0iw = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2Ksw1Zre = await DmmControllerV2.new(addressHJhxMko, address9vG5Fl, addressscjLZJJ, addressnktv9TU, addressnJW72pa, addressPPnI9T, addresszZfQRHA, addressdUPGyds, addressWUXiXxm, uintrpH3Dkm, uintpLsCclF, addressyFS0iw, {from: accounts[1]});
		const addressXYW424m = accounts[3]
		const addresst31puX = await DmmControllerV2Ksw1Zre.setInterestRateInterface.call(addressXYW424m, {from: accounts[0]});
		const boolhoisrbc = await DmmControllerV2Ksw1Zre.paused.call({from: accounts[2]});
		const uintlGvUI1 = await DmmControllerV2Ksw1Zre.getTotalCollateralization.call({from: accounts[0]});
		await DmmControllerV2Ksw1Zre.renounceGuardian.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresshLmoZPd = accounts[3]
		const addressZgQMhXV = accounts[2]
		const addresscAFIB22 = accounts[5]
		const addressjqk0Zd = accounts[0]
		const addressRQ8pqEh = "0x0000000000000000000000000000000000000001"
		const addresskfGg0nE = accounts[2]
		const addresscNPj7bd = accounts[0]
		const addressERa5dWT = accounts[0]
		const addresspuC5JkH = accounts[5]
		const uinto6F9NX = BigInt("376")
		const uintUVM9CxG = BigInt("1194")
		const addressvB2kWM = accounts[0]
		const DmmControllerV2NWHMHb = await DmmControllerV2.new(addresshLmoZPd, addressZgQMhXV, addresscAFIB22, addressjqk0Zd, addressRQ8pqEh, addresskfGg0nE, addresscNPj7bd, addressERa5dWT, addresspuC5JkH, uinto6F9NX, uintUVM9CxG, addressvB2kWM, {from: accounts[2]});
		const addressasPHdqe = accounts[2]
		const uintb3gYq70 = BigInt("56")
		const uintDa8zOd = BigInt("915")
		const addressSTWU82K = accounts[0]
		const addressZqKczVr = accounts[4]
		const uintGzHK14 = BigInt("1769")
		const addressHPyIhOy = await DmmControllerV2NWHMHb.checkNotBlacklisted.call(addressasPHdqe, {from: accounts[4]});
		const 
Ld7A2IL = await DmmControllerV2NWHMHb.adminDepositFunds.call(uintDa8zOd, uintb3gYq70, {from: accounts[0]});
		const address8hangj = await DmmControllerV2NWHMHb.blacklist.call(addressSTWU82K, {from: accounts[0]});
		const 
EeZUn68 = await DmmControllerV2NWHMHb.setGuardian.call(addressZqKczVr, {from: accounts[3]});
		const uinthnNufe9 = await DmmControllerV2NWHMHb.getInterestRateByDmmTokenId.call(uintGzHK14, {from: accounts[2]});
		await DmmControllerV2NWHMHb.initializer.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressIXX8w89 = accounts[0]
		const addressm95Ai4i = "0x0000000000000000000000000000000000000001"
		const addressJaOewK0 = accounts[4]
		const addressnBHRFlL = accounts[2]
		const addressYMSP4Fw = accounts[5]
		const addressypnakwh = accounts[2]
		const addressgREALbe = accounts[4]
		const addressPZa7kmV = "0x0000000000000000000000000000000000000001"
		const addresstn4vagi = accounts[4]
		const uintqYdfnHA = BigInt("461")
		const uintC9GgaHT = BigInt("435")
		const addressLIGyZGP = accounts[0]
		const DmmControllerV2pLcbKLA = await DmmControllerV2.new(addressIXX8w89, addressm95Ai4i, addressJaOewK0, addressnBHRFlL, addressYMSP4Fw, addressypnakwh, addressgREALbe, addressPZa7kmV, addresstn4vagi, uintqYdfnHA, uintC9GgaHT, addressLIGyZGP, {from: accounts[4]});
		const addressP43wN5 = accounts[3]
		const addressmy5ErEF = accounts[5]
		const uintYBzt4pE = BigInt("1728")
		const uintS8FUqHG = await DmmControllerV2pLcbKLA.getExchangeRateByUnderlying.call(addressP43wN5, {from: accounts[3]});
		const 
MeFJg0 = await DmmControllerV2pLcbKLA.transferGuardian.call(addressmy5ErEF, {from: accounts[4]});
		const addresspSopQt = await DmmControllerV2pLcbKLA.owner.call({from: accounts[2]});
		await DmmControllerV2pLcbKLA.whenNotPaused.call({from: accounts[5]});
		const booltRblMDG = await DmmControllerV2pLcbKLA.isMarketEnabledByDmmTokenId.call(uintYBzt4pE, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPhxf4uG = accounts[4]
		const addressyEeEwdE = accounts[1]
		const addressUzdtc9m = accounts[0]
		const addressyCuKMzf = accounts[4]
		const addressymr27BP = accounts[1]
		const addressRxU9Aop = accounts[0]
		const addressyuvpFHm = accounts[4]
		const addressxiV81d7 = accounts[1]
		const addressR7RbDgP = accounts[2]
		const uintU5IOxCG = BigInt("436")
		const uintHXlLRK9 = BigInt("77")
		const addressqR6FbGb = accounts[3]
		const DmmControllerV2RCFsq3k = await DmmControllerV2.new(addressPhxf4uG, addressyEeEwdE, addressUzdtc9m, addressyCuKMzf, addressymr27BP, addressRxU9Aop, addressyuvpFHm, addressxiV81d7, addressR7RbDgP, uintU5IOxCG, uintHXlLRK9, addressqR6FbGb, {from: accounts[2]});
		const addressoC5TzoB = accounts[4]
		const addressDyNArAE = accounts[1]
		const addressK5lx8Xi = accounts[0]
		const addressCh9DFkx = accounts[3]
		const boolTMD6roG = await DmmControllerV2RCFsq3k.isPauser.call(addressoC5TzoB, {from: "0x0000000000000000000000000000000000000001"});
		const 
pZRMaXB = await DmmControllerV2RCFsq3k.setGuardian.call(addressDyNArAE, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2RCFsq3k.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const 
y0seLcu = await DmmControllerV2RCFsq3k.transferGuardian.call(addressK5lx8Xi, {from: accounts[1]});
		const 
sPwkV8 = await DmmControllerV2RCFsq3k.setGuardian.call(addressCh9DFkx, {from: accounts[1]});
	});
})