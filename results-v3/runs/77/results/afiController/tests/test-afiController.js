const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressZfl2AOu = accounts[5]
		const afiControllerVZizrhz = await afiController.new(addressZfl2AOu, {from: accounts[2]});
		const uintfXHplNT = BigInt("446")
		const addressOohxpFj = accounts[2]
		const addressTRC84l = accounts[3]
		const uintwe18Yvt = BigInt("1356")
		const addressqhmrN92 = accounts[4]
		const uintzjlRlns = BigInt("2040")
		const addresswX3Lxko = accounts[3]
		const addresstHGf5cm = accounts[3]
		const addressvo0tvDA = accounts[0]
		const addresspJTAjXC = accounts[3]
		const uintmgqIwe7 = await afiControllerVZizrhz.getExpectedReturn.call(addressTRC84l, addressOohxpFj, uintfXHplNT, {from: accounts[2]});
		const addressWYzCscT = await afiControllerVZizrhz.withdraw.call(addressqhmrN92, uintwe18Yvt, {from: accounts[2]});
		const addressKnLC6cT = await afiControllerVZizrhz.inCaseTokensGetStuck.call(addresswX3Lxko, uintzjlRlns, {from: accounts[4]});
		const addressrAqX0lz = await afiControllerVZizrhz.inCaseStrategyTokenGetStuck.call(addressvo0tvDA, addresstHGf5cm, {from: accounts[4]});
		const addressHZktb6Y = await afiControllerVZizrhz.setStrategist.call(addresspJTAjXC, {from: accounts[3]});

		await expect(afiControllerVZizrhz.getExpectedReturn.call(addressTRC84l, addressOohxpFj, uintfXHplNT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoSJxB5x = accounts[5]
		const afiControllerpioSvrz = await afiController.new(addressoSJxB5x, {from: accounts[2]});
		const address9dCQNp = accounts[3]
		const addressy40tYZ7 = accounts[2]
		const uintqJ3OkWX = BigInt("1676")
		const addressuHFdNGm = accounts[3]
		const addressVyWjMGb = accounts[5]
		const addressGN5bw52 = await afiControllerpioSvrz.inCaseStrategyTokenGetStuck.call(addressy40tYZ7, address9dCQNp, {from: "0x0000000000000000000000000000000000000001"});
		const addressoHdVnxe = await afiControllerpioSvrz.earn.call(addressuHFdNGm, uintqJ3OkWX, {from: accounts[1]});
		const addressd7axZ8g = await afiControllerpioSvrz.setOneSplit.call(addressVyWjMGb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerpioSvrz.inCaseStrategyTokenGetStuck.call(addressy40tYZ7, address9dCQNp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLKxyli = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addressLKxyli, {from: accounts[3]});
		const addressawM5fjc = accounts[0]
		const addressDfnt8sO = accounts[0]
		const addressvwTQp8v = accounts[2]
		const addressEIJbCF = accounts[0]
		const uintNHoZVkq = await afiControllerSLA0Eic.balanceOf.call(addressawM5fjc, {from: accounts[0]});
		const addressjPDAP11 = await afiControllerSLA0Eic.setConverter.call(addressEIJbCF, addressvwTQp8v, addressDfnt8sO, {from: accounts[2]});

		await expect(afiControllerSLA0Eic.balanceOf.call(addressawM5fjc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseYSiEcF = accounts[3]
		const afiControllereg7CWe = await afiController.new(addresseYSiEcF, {from: accounts[0]});
		const addressHeaAzqp = accounts[3]
		const addressxXJ3A5C = accounts[4]
		const addressPisEQR = accounts[2]
		const addresstbzlXZY = accounts[2]
		const addresszXVunnL = "0x0000000000000000000000000000000000000001"
		const addressPxxUCqv = accounts[2]
		const addressVlMSqy1 = accounts[5]
		const addressSJbI1IF = await afiControllereg7CWe.approveStrategy.call(addressxXJ3A5C, addressHeaAzqp, {from: accounts[3]});
		const addressJwfnai = await afiControllereg7CWe.setGovernance.call(addressPisEQR, {from: accounts[5]});
		const addressbgOCFQN = await afiControllereg7CWe.setOneSplit.call(addresstbzlXZY, {from: accounts[4]});
		const addressbOafWlu = await afiControllereg7CWe.inCaseStrategyTokenGetStuck.call(addressPxxUCqv, addresszXVunnL, {from: accounts[4]});
		const addresstARbfJN = await afiControllereg7CWe.setOneSplit.call(addressVlMSqy1, {from: accounts[0]});

		await expect(afiControllereg7CWe.approveStrategy.call(addressxXJ3A5C, addressHeaAzqp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCvvgT3m = accounts[5]
		const afiControllerLOCfR1V = await afiController.new(addressCvvgT3m, {from: "0x0000000000000000000000000000000000000001"});
		const uintFyh5yb7 = BigInt("414")
		const addressy3epXYF = accounts[1]
		const addressORKJnNl = accounts[3]
		const addressVMno3PJ = accounts[2]
		const uintDY7Kpr = BigInt("976")
		const addressgPb6ZyG = accounts[1]
		const uintJxBeNLq = await afiControllerLOCfR1V.setSplit.call(uintFyh5yb7, {from: accounts[4]});
		const addresshKfZjX = await afiControllerLOCfR1V.approveStrategy.call(addressORKJnNl, addressy3epXYF, {from: accounts[4]});
		const addressGL2KSw8 = await afiControllerLOCfR1V.withdrawAll.call(addressVMno3PJ, {from: accounts[0]});
		const addressOSUyGBH = await afiControllerLOCfR1V.earn.call(addressgPb6ZyG, uintDY7Kpr, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressVyM7iOW = accounts[0]
		const afiControllerJwQUf2C = await afiController.new(addressVyM7iOW, {from: accounts[0]});
		const addressVjVLA3 = accounts[2]
		const address9piMWb = accounts[4]
		const addressiB2HQaQ = accounts[1]
		const addressCiZEKg9 = accounts[3]
		const addressCZuECXL = await afiControllerJwQUf2C.setStrategist.call(addressVjVLA3, {from: accounts[2]});
		const addresstiUr11F = await afiControllerJwQUf2C.setVault.call(addressiB2HQaQ, address9piMWb, {from: accounts[1]});
		const addressrztpv0C = await afiControllerJwQUf2C.setOneSplit.call(addressCiZEKg9, {from: accounts[4]});

		await expect(afiControllerJwQUf2C.setStrategist.call(addressVjVLA3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPbNPpVb = accounts[2]
		const afiControllerC1bJUjR = await afiController.new(addressPbNPpVb, {from: accounts[4]});
		const uinticrT1wd = BigInt("1858")
		const addresseFL6wiQ = accounts[2]
		const addressG462yM2 = accounts[5]
		const addressrCfS759 = accounts[4]
		const uintSSnwDva = BigInt("1813")
		const addressYRZTIp = accounts[3]
		const addresszs5uOc = accounts[1]
		const addressAdlGaRb = await afiControllerC1bJUjR.earn.call(addresseFL6wiQ, uinticrT1wd, {from: accounts[4]});
		const addressK8z7VY6 = await afiControllerC1bJUjR.inCaseStrategyTokenGetStuck.call(addressrCfS759, addressG462yM2, {from: accounts[3]});
		const uintYmsOzXH = await afiControllerC1bJUjR.getExpectedReturn.call(addresszs5uOc, addressYRZTIp, uintSSnwDva, {from: accounts[4]});

		await expect(afiControllerC1bJUjR.earn.call(addresseFL6wiQ, uinticrT1wd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address1Hufar = accounts[0]
		const afiControllerJwQUf2C = await afiController.new(address1Hufar, {from: accounts[0]});
		const address7O8gjF = accounts[0]
		const addressMJlRTOL = accounts[2]
		const addresseFaXXJ5 = accounts[3]
		const addressKoHevLs = accounts[4]
		const address4TfLar = accounts[1]
		const addressLlPdLjo = await afiControllerJwQUf2C.setVault.call(addressMJlRTOL, address7O8gjF, {from: accounts[1]});
		const addressCZuECXL = await afiControllerJwQUf2C.setStrategist.call(addresseFaXXJ5, {from: accounts[2]});
		const addresstiUr11F = await afiControllerJwQUf2C.setVault.call(address4TfLar, addressKoHevLs, {from: accounts[1]});

		await expect(afiControllerJwQUf2C.setVault.call(addressMJlRTOL, address7O8gjF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLsrvLXr = accounts[3]
		const afiControllerzh78nnh = await afiController.new(addressLsrvLXr, {from: accounts[2]});
		const addressUQjPrqP = accounts[1]
		const uinth4SJG9p = BigInt("1889")
		const uintpb6H57M = BigInt("1635")
		const addresspEtMYVp = accounts[1]
		const addressb5Sn8Sp = accounts[1]
		const addressmoidScv = accounts[2]
		const addressWYxctIh = await afiControllerzh78nnh.setRewards.call(addressUQjPrqP, {from: accounts[3]});
		const uintvY1ql5M = await afiControllerzh78nnh.setSplit.call(uinth4SJG9p, {from: accounts[2]});
		const addressdQ1Kdt = await afiControllerzh78nnh.yearn.call(addressb5Sn8Sp, addresspEtMYVp, uintpb6H57M, {from: accounts[4]});
		const addressVYUkY3q = await afiControllerzh78nnh.setRewards.call(addressmoidScv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerzh78nnh.setRewards.call(addressUQjPrqP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmtYLzzg = accounts[3]
		const afiControllereg7CWe = await afiController.new(addressmtYLzzg, {from: accounts[0]});
		const addressRacXlL2 = "0x0000000000000000000000000000000000000001"
		const addressooISutO = accounts[3]
		const addressWMavoK = accounts[4]
		const addresslodRT3 = accounts[2]
		const addressYCCt1yd = accounts[2]
		const uintHPVPRlP = BigInt("1887")
		const addressn5Io61X = accounts[3]
		const address7h5WwB = accounts[3]
		const addressHvDgO8l = "0x0000000000000000000000000000000000000001"
		const addressqepHIT = accounts[2]
		const addressaw78q5D = accounts[6]
		const addressLtmrCO = await afiControllereg7CWe.withdrawAll.call(addressRacXlL2, {from: accounts[1]});
		const addressSJbI1IF = await afiControllereg7CWe.approveStrategy.call(addressWMavoK, addressooISutO, {from: accounts[3]});
		const addressJwfnai = await afiControllereg7CWe.setGovernance.call(addresslodRT3, {from: accounts[5]});
		const addressbgOCFQN = await afiControllereg7CWe.setOneSplit.call(addressYCCt1yd, {from: accounts[4]});
		const uintzrNtKXW = await afiControllereg7CWe.getExpectedReturn.call(address7h5WwB, addressn5Io61X, uintHPVPRlP, {from: accounts[0]});
		const addressbOafWlu = await afiControllereg7CWe.inCaseStrategyTokenGetStuck.call(addressqepHIT, addressHvDgO8l, {from: accounts[4]});
		const addresstARbfJN = await afiControllereg7CWe.setOneSplit.call(addressaw78q5D, {from: accounts[0]});

		await expect(afiControllereg7CWe.withdrawAll.call(addressRacXlL2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresso9FgS6v = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addresso9FgS6v, {from: accounts[3]});
		const addresspVzgpip = accounts[0]
		const addressJfVuKdX = accounts[0]
		const addressSZ8DHY = accounts[1]
		const addressxitr5J = accounts[2]
		const addressr23g3C6 = await afiControllerSLA0Eic.setOneSplit.call(addresspVzgpip, {from: accounts[2]});
		const uintNHoZVkq = await afiControllerSLA0Eic.balanceOf.call(addressJfVuKdX, {from: accounts[0]});
		const addressC5JZIXS = await afiControllerSLA0Eic.revokeStrategy.call(addressxitr5J, addressSZ8DHY, {from: accounts[0]});

		await expect(afiControllerSLA0Eic.setOneSplit.call(addresspVzgpip, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPhd6nLe = accounts[3]
		const afiControllereg7CWe = await afiController.new(addressPhd6nLe, {from: accounts[0]});
		const addressj2YC3pu = accounts[2]
		const addressq8fmkOD = accounts[2]
		const addressJGPxcp6 = accounts[5]
		const addressJwfnai = await afiControllereg7CWe.setGovernance.call(addressj2YC3pu, {from: accounts[5]});
		const addressbgOCFQN = await afiControllereg7CWe.setOneSplit.call(addressq8fmkOD, {from: accounts[4]});
		const addresstARbfJN = await afiControllereg7CWe.setOneSplit.call(addressJGPxcp6, {from: accounts[0]});

		await expect(afiControllereg7CWe.setGovernance.call(addressj2YC3pu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh9d6szq = accounts[0]
		const afiControllerXHEwSg5 = await afiController.new(addressh9d6szq, {from: accounts[3]});
		const addressbcPrI54 = accounts[2]
		const addressVHsRfMY = accounts[4]
		const addresshlPgmEf = accounts[1]
		const uintc91hndt = BigInt("1718")
		const addressEsCs4kj = "0x0000000000000000000000000000000000000001"
		const addressnuh7b5s = accounts[3]
		const uintkS0IsEM = BigInt("1381")
		const addressxAGhDsr = accounts[1]
		const addressAAV7KGl = await afiControllerXHEwSg5.approveStrategy.call(addressVHsRfMY, addressbcPrI54, {from: accounts[3]});
		const addressgAkWVev = await afiControllerXHEwSg5.setOneSplit.call(addresshlPgmEf, {from: accounts[0]});
		const addressycrSsaY = await afiControllerXHEwSg5.yearn.call(addressnuh7b5s, addressEsCs4kj, uintc91hndt, {from: accounts[1]});
		const addresslA4B2cO = await afiControllerXHEwSg5.inCaseTokensGetStuck.call(addressxAGhDsr, uintkS0IsEM, {from: accounts[3]});

		await expect(afiControllerXHEwSg5.setOneSplit.call(addresshlPgmEf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressANkowHN = accounts[2]
		const afiControllerkiZiS7N = await afiController.new(addressANkowHN, {from: accounts[0]});
		const uintCLdYkr8 = BigInt("674")
		const addressjT8IncI = accounts[4]
		const addressrhT5elU = accounts[3]
		const addressNoQlHO = accounts[6]
		const addresslShXgRs = accounts[2]
		const addressqoRb1X = accounts[2]
		const addressbTPTHBM = await afiControllerkiZiS7N.yearn.call(addressrhT5elU, addressjT8IncI, uintCLdYkr8, {from: accounts[1]});
		const addressc0vlWY0 = await afiControllerkiZiS7N.setGovernance.call(addressNoQlHO, {from: accounts[2]});
		const addressTqSv7bE = await afiControllerkiZiS7N.setVault.call(addressqoRb1X, addresslShXgRs, {from: accounts[4]});

		await expect(afiControllerkiZiS7N.yearn.call(addressrhT5elU, addressjT8IncI, uintCLdYkr8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNtcllZ = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addressNtcllZ, {from: accounts[3]});
		const addressIMO6Xj = accounts[5]
		const addressmgcPOJP = accounts[2]
		const addressyN9k027 = accounts[2]
		const addressduCn7Uw = await afiControllerSLA0Eic.setVault.call(addressmgcPOJP, addressIMO6Xj, {from: accounts[3]});
		const addressr23g3C6 = await afiControllerSLA0Eic.setOneSplit.call(addressyN9k027, {from: accounts[2]});

		await expect(afiControllerSLA0Eic.setOneSplit.call(addressyN9k027, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaCVy7MY = accounts[4]
		const afiControllerS1VexJQ = await afiController.new(addressaCVy7MY, {from: accounts[0]});
		const addressr9xxccF = accounts[2]
		const addressS6JEkR = accounts[3]
		const addresssm29wWa = accounts[1]
		const uintxwBm4WO = BigInt("1818")
		const addresssnl3qB = "0x0000000000000000000000000000000000000001"
		const addressCFMT4H = accounts[1]
		const addressQO3ByBV = accounts[4]
		const addressxqyWb3 = await afiControllerS1VexJQ.setStrategy.call(addressS6JEkR, addressr9xxccF, {from: accounts[2]});
		const addressLvP7Uqj = await afiControllerS1VexJQ.setOneSplit.call(addresssm29wWa, {from: accounts[4]});
		const addresswHpUuCB = await afiControllerS1VexJQ.inCaseTokensGetStuck.call(addresssnl3qB, uintxwBm4WO, {from: accounts[1]});
		const addressMZ2aLqO = await afiControllerS1VexJQ.setStrategy.call(addressQO3ByBV, addressCFMT4H, {from: accounts[2]});

		await expect(afiControllerS1VexJQ.setStrategy.call(addressS6JEkR, addressr9xxccF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfCjs5TQ = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addressfCjs5TQ, {from: accounts[3]});
		const addresssAE22zm = accounts[2]
		const addressKeW6nDt = accounts[2]
		const uintlDnazq8 = BigInt("1330")
		const addressjn0lW4w = accounts[4]
		const addressgTHNwp8 = accounts[0]
		const addressIvjLh70 = accounts[2]
		const addressSoz8QnS = accounts[3]
		const addressC5JZIXS = await afiControllerSLA0Eic.revokeStrategy.call(addressKeW6nDt, addresssAE22zm, {from: accounts[0]});
		const addressnBeEOY6 = await afiControllerSLA0Eic.yearn.call(addressgTHNwp8, addressjn0lW4w, uintlDnazq8, {from: accounts[3]});
		const addressclqLOI = await afiControllerSLA0Eic.approveStrategy.call(addressSoz8QnS, addressIvjLh70, {from: accounts[0]});

		await expect(afiControllerSLA0Eic.revokeStrategy.call(addressKeW6nDt, addresssAE22zm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqp0IVCq = "0x0000000000000000000000000000000000000001"
		const afiControllerarLvMNT = await afiController.new(addressqp0IVCq, {from: accounts[0]});
		const uintir1pBox = BigInt("1550")
		const uintZ4MBlt = BigInt("533")
		const addressFTnfoFi = accounts[0]
		const addressrivcr7O = "0x0000000000000000000000000000000000000001"
		const uintkjKwCoI = BigInt("1623")
		const addressPGW508X = accounts[4]
		const addressc1UgO6C = accounts[0]
		const uintjQfKqwk = await afiControllerarLvMNT.setSplit.call(uintir1pBox, {from: accounts[0]});
		const address1g1liZ = await afiControllerarLvMNT.inCaseTokensGetStuck.call(addressFTnfoFi, uintZ4MBlt, {from: accounts[1]});
		const addressPzfjgo4 = await afiControllerarLvMNT.setOneSplit.call(addressrivcr7O, {from: accounts[0]});
		const addressk5XeVZI = await afiControllerarLvMNT.yearn.call(addressc1UgO6C, addressPGW508X, uintkjKwCoI, {from: accounts[0]});

		await expect(afiControllerarLvMNT.inCaseTokensGetStuck.call(addressFTnfoFi, uintZ4MBlt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressngPotpB = "0x0000000000000000000000000000000000000001"
		const afiControllerarLvMNT = await afiController.new(addressngPotpB, {from: accounts[0]});
		const uintTir17Sv = BigInt("1550")
		const addressenavY9I = accounts[2]
		const addressq0G7Zd = accounts[5]
		const addressNticHU7 = accounts[0]
		const uintpCnwivv = BigInt("533")
		const addressQ6elPNs = accounts[0]
		const addressk9biYYe = "0x0000000000000000000000000000000000000001"
		const addressBc7c1at = accounts[4]
		const uintlrALqzh = BigInt("1623")
		const addressckzwRJ = accounts[4]
		const addresshEQcpxJ = accounts[0]
		const uintjQfKqwk = await afiControllerarLvMNT.setSplit.call(uintTir17Sv, {from: accounts[0]});
		const addressEw6jcqE = await afiControllerarLvMNT.setConverter.call(addressNticHU7, addressq0G7Zd, addressenavY9I, {from: accounts[0]});
		const address1g1liZ = await afiControllerarLvMNT.inCaseTokensGetStuck.call(addressQ6elPNs, uintpCnwivv, {from: accounts[1]});
		const addressPzfjgo4 = await afiControllerarLvMNT.setOneSplit.call(addressk9biYYe, {from: accounts[0]});
		const addressP98d6WU = await afiControllerarLvMNT.withdrawAll.call(addressBc7c1at, {from: "0x0000000000000000000000000000000000000001"});
		const addressk5XeVZI = await afiControllerarLvMNT.yearn.call(addresshEQcpxJ, addressckzwRJ, uintlrALqzh, {from: accounts[0]});

		await expect(afiControllerarLvMNT.inCaseTokensGetStuck.call(addressQ6elPNs, uintpCnwivv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrMhQzsi = "0x0000000000000000000000000000000000000001"
		const afiControllerarLvMNT = await afiController.new(addressrMhQzsi, {from: accounts[0]});
		const uintAGv157o = BigInt("1550")
		const addressddHtHWV = "0x0000000000000000000000000000000000000001"
		const uintgl1MYGB = BigInt("1623")
		const addressSJxLdwa = accounts[4]
		const addressIsJZUh = accounts[0]
		const uintjQfKqwk = await afiControllerarLvMNT.setSplit.call(uintAGv157o, {from: accounts[0]});
		const addressPzfjgo4 = await afiControllerarLvMNT.setOneSplit.call(addressddHtHWV, {from: accounts[0]});
		const addressk5XeVZI = await afiControllerarLvMNT.yearn.call(addressIsJZUh, addressSJxLdwa, uintgl1MYGB, {from: accounts[0]});

		await expect(afiControllerarLvMNT.yearn.call(addressIsJZUh, addressSJxLdwa, uintgl1MYGB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbKRsgGc = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addressbKRsgGc, {from: accounts[3]});
		const uintN1wTD0J = BigInt("1255")
		const addresskqWSLwf = accounts[4]
		const addressTXKKXd2 = accounts[4]
		const addressOQ20DvV = await afiControllerSLA0Eic.withdraw.call(addresskqWSLwf, uintN1wTD0J, {from: accounts[2]});
		const uintNHoZVkq = await afiControllerSLA0Eic.balanceOf.call(addressTXKKXd2, {from: accounts[0]});

		await expect(afiControllerSLA0Eic.withdraw.call(addresskqWSLwf, uintN1wTD0J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ4HbEsn = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addressJ4HbEsn, {from: accounts[3]});
		const addressd4KuPts = accounts[3]
		const addressRvQqwV = "0x0000000000000000000000000000000000000001"
		const addressXiXVMCG = accounts[3]
		const addresspY9Mbp = accounts[1]
		const addressIMNymi = accounts[5]
		const addressp7zMpXh = accounts[4]
		const addressrnrrAvT = await afiControllerSLA0Eic.approveStrategy.call(addressRvQqwV, addressd4KuPts, {from: accounts[3]});
		const addressfsp6HPr = await afiControllerSLA0Eic.setStrategy.call(addresspY9Mbp, addressXiXVMCG, {from: accounts[3]});
		const addressC5JZIXS = await afiControllerSLA0Eic.revokeStrategy.call(addressp7zMpXh, addressIMNymi, {from: accounts[0]});

		await expect(afiControllerSLA0Eic.setStrategy.call(addresspY9Mbp, addressXiXVMCG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressst1h6WX = accounts[3]
		const afiControllerzh78nnh = await afiController.new(addressst1h6WX, {from: accounts[2]});
		const uintVjEkIg = BigInt("1709")
		const addressm19Fy3 = accounts[4]
		const addressLtiwX86 = accounts[2]
		const addressapocODT = accounts[1]
		const addressC9ybCvW = accounts[2]
		const addressf9i6Ont = accounts[2]
		const addressnQoYxz = await afiControllerzh78nnh.inCaseTokensGetStuck.call(addressm19Fy3, uintVjEkIg, {from: accounts[2]});
		const uintyrsLkRg = await afiControllerzh78nnh.balanceOf.call(addressLtiwX86, {from: accounts[2]});
		const addressG8kZH8c = await afiControllerzh78nnh.setStrategy.call(addressC9ybCvW, addressapocODT, {from: accounts[1]});
		const addressWYxctIh = await afiControllerzh78nnh.setRewards.call(addressf9i6Ont, {from: accounts[3]});

		await expect(afiControllerzh78nnh.inCaseTokensGetStuck.call(addressm19Fy3, uintVjEkIg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressotekBhB = accounts[0]
		const afiControllerJwQUf2C = await afiController.new(addressotekBhB, {from: accounts[0]});
		const addressgLZ94h1 = accounts[0]
		const addresskaKQ0v8 = accounts[4]
		const addressaSFVTAz = accounts[2]
		const addressyoS9jpI = accounts[0]
		const addressN2Lnzl5 = await afiControllerJwQUf2C.revokeStrategy.call(addresskaKQ0v8, addressgLZ94h1, {from: accounts[0]});
		const addressCZuECXL = await afiControllerJwQUf2C.setStrategist.call(addressaSFVTAz, {from: accounts[2]});
		const addressnubKaPm = await afiControllerJwQUf2C.setRewards.call(addressyoS9jpI, {from: accounts[5]});

		await expect(afiControllerJwQUf2C.setStrategist.call(addressaSFVTAz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIHBrbv = accounts[0]
		const afiControllerJwQUf2C = await afiController.new(addressIHBrbv, {from: accounts[0]});
		const addressOKsW3Im = accounts[1]
		const addressKS8g8Tq = accounts[0]
		const addressgCAOAn7 = accounts[0]
		const addressAeW8zeJ = await afiControllerJwQUf2C.inCaseStrategyTokenGetStuck.call(addressKS8g8Tq, addressOKsW3Im, {from: accounts[0]});
		const addressCZuECXL = await afiControllerJwQUf2C.setStrategist.call(addressgCAOAn7, {from: accounts[2]});

		await expect(afiControllerJwQUf2C.inCaseStrategyTokenGetStuck.call(addressKS8g8Tq, addressOKsW3Im, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKgpLoJf = accounts[3]
		const afiControllerzh78nnh = await afiController.new(addressKgpLoJf, {from: accounts[2]});
		const addressXaEi3iz = "0x0000000000000000000000000000000000000001"
		const addressDCLUjpA = accounts[2]
		const addressMxl7lY3 = await afiControllerzh78nnh.setStrategist.call(addressXaEi3iz, {from: accounts[2]});
		const addressWYxctIh = await afiControllerzh78nnh.setRewards.call(addressDCLUjpA, {from: accounts[3]});

		await expect(afiControllerzh78nnh.setRewards.call(addressDCLUjpA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address5kOvjS = accounts[2]
		const afiController5eAIng = await afiController.new(address5kOvjS, {from: accounts[4]});
		const addressdeAs9F = "0x0000000000000000000000000000000000000001"
		const addressGkatjq8 = "0x0000000000000000000000000000000000000001"
		const addressqBBayQj = accounts[1]
		const addressHku6F4E = accounts[2]
		const addresstHTrXps = accounts[1]
		const uintCA0uZx7 = BigInt("886")
		const addressEyyYP2I = accounts[4]
		const addressIn0agb1 = accounts[1]
		const addressG6Hc0Rf = accounts[0]
		const addresszlKyX0P = accounts[3]
		const addressU5AYCmc = accounts[4]
		const addressZrlsIW = await afiController5eAIng.setGovernance.call(addressdeAs9F, {from: accounts[4]});
		const address8mMHps = await afiController5eAIng.approveStrategy.call(addressqBBayQj, addressGkatjq8, {from: accounts[4]});
		const addressLXtcjWU = await afiController5eAIng.inCaseStrategyTokenGetStuck.call(addresstHTrXps, addressHku6F4E, {from: accounts[3]});
		const uint3ZbME9 = await afiController5eAIng.getExpectedReturn.call(addressIn0agb1, addressEyyYP2I, uintCA0uZx7, {from: accounts[1]});
		const addressCWsQFjr = await afiController5eAIng.setStrategy.call(addresszlKyX0P, addressG6Hc0Rf, {from: accounts[0]});
		const addressgYvMWUm = await afiController5eAIng.setGovernance.call(addressU5AYCmc, {from: accounts[4]});

		await expect(afiController5eAIng.inCaseStrategyTokenGetStuck.call(addresstHTrXps, addressHku6F4E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswJ6ND6m = accounts[4]
		const afiControllerSLA0Eic = await afiController.new(addresswJ6ND6m, {from: accounts[3]});
		const addressSkVIw2t = accounts[1]
		const addressVPazeYs = accounts[2]
		const addressMsuWUu = "0x0000000000000000000000000000000000000001"
		const addresshaXemiU = accounts[5]
		const addressCjp4ayX = accounts[4]
		const addresszfgbFg7 = accounts[2]
		const addressHJyHbSK = await afiControllerSLA0Eic.withdrawAll.call(addressSkVIw2t, {from: accounts[3]});
		const addressjVv2S95 = await afiControllerSLA0Eic.setStrategy.call(addressMsuWUu, addressVPazeYs, {from: accounts[2]});
		const addressC5JZIXS = await afiControllerSLA0Eic.revokeStrategy.call(addressCjp4ayX, addresshaXemiU, {from: accounts[0]});
		const addressXkHXS1U = await afiControllerSLA0Eic.setRewards.call(addresszfgbFg7, {from: accounts[3]});

		await expect(afiControllerSLA0Eic.withdrawAll.call(addressSkVIw2t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})