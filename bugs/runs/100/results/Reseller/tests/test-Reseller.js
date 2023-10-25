const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrwxSeVYL = accounts[2]
		const FOSTERAddrolDZ4Bl = accounts[1]
		const initialRateFl1J7U8 = BigInt("690")
		const initialPeriodMuQQbfC = BigInt("540")
		const initialOwnerrO7ezjT = accounts[5]
		const contractWYWuA6 = await Reseller.new(USDTAddrwxSeVYL, FOSTERAddrolDZ4Bl, initialRateFl1J7U8, initialPeriodMuQQbfC, initialOwnerrO7ezjT, {from: accounts[4]});
		const newBoss2lFWJLx5 = accounts[5]
		const newMinimumPD9jMqr = BigInt("609")
		await contractWYWuA6.switchState.call({from: accounts[3]});
		await contractWYWuA6.deposeBoss2.call(newBoss2lFWJLx5, {from: accounts[0]});
		await contractWYWuA6.setMinimum.call(newMinimumPD9jMqr, {from: accounts[4]});

		await expect(contractWYWuA6.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrG9UaXa = accounts[2]
		const FOSTERAddrHJoZZYA = accounts[4]
		const initialRatezgWjZ7e = BigInt("1595")
		const initialPeriodlyTpq1p = BigInt("702")
		const initialOwnermDX6Nh2 = accounts[5]
		const contractdyfnovq = await Reseller.new(USDTAddrG9UaXa, FOSTERAddrHJoZZYA, initialRatezgWjZ7e, initialPeriodlyTpq1p, initialOwnermDX6Nh2, {from: accounts[4]});
		const accountmt6IM7m = accounts[5]
		const valueDlHh3zs = BigInt("142")
		const recipientG5o9Et1 = accounts[1]
		const ERC20TokenkQUMtnZ = accounts[4]
		const _periodzTPasdM = BigInt("302")
		const amountQxbzX8j = BigInt("1870")
		const recipientvDIji4h = accounts[0]
		const accountoBNSIvE = accounts[5]
		const level5hiFhXZv = BigInt("134")
		const level4a7NBFV = BigInt("104")
		const level3zmoJwm4 = BigInt("92")
		const level2yLU3Riv = BigInt("155")
		const level1VRlyJ7n = BigInt("176")
		const nullmU8Bsd = await contractdyfnovq.allowanceFOSTER.call(accountmt6IM7m, {from: accounts[3]});
		await contractdyfnovq.withdrawERC20.call(ERC20TokenkQUMtnZ, recipientG5o9Et1, valueDlHh3zs, {from: accounts[4]});
		await contractdyfnovq.freezeAndTransfer.call(recipientvDIji4h, amountQxbzX8j, _periodzTPasdM, {from: accounts[3]});
		const nullZ7Hu1ap = await contractdyfnovq.balanceFOSTER.call(accountoBNSIvE, {from: accounts[2]});
		await contractdyfnovq.setRefBonus.call(level1VRlyJ7n, level2yLU3Riv, level3zmoJwm4, level4a7NBFV, level5hiFhXZv, {from: accounts[1]});

		await expect(contractdyfnovq.allowanceFOSTER.call(accountmt6IM7m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgeTwvhA = accounts[2]
		const FOSTERAddriFO9je = accounts[4]
		const initialRatemPUnEKb = BigInt("855")
		const initialPeriodX9zI25q = BigInt("309")
		const initialOwnerCymie6m = accounts[5]
		const contractGuiX6ao = await Reseller.new(USDTAddrgeTwvhA, FOSTERAddriFO9je, initialRatemPUnEKb, initialPeriodX9zI25q, initialOwnerCymie6m, {from: accounts[3]});
		const newBoss3hHuQgJG = accounts[0]
		const newPeriodjJ5lsQX = BigInt("1933")
		const level5GoqS9cR = BigInt("191")
		const level4gbfFzI = BigInt("7")
		const level3xyJUAdb = BigInt("118")
		const level2fILudYl = BigInt("70")
		const level1GfYkJaf = BigInt("100")
		const newPeriodHOXYC2A = BigInt("765")
		await contractGuiX6ao.deposeBoss3.call(newBoss3hHuQgJG, {from: accounts[1]});
		await contractGuiX6ao.setPeriod.call(newPeriodjJ5lsQX, {from: accounts[2]});
		await contractGuiX6ao.setRefBonus.call(level1GfYkJaf, level2fILudYl, level3xyJUAdb, level4gbfFzI, level5GoqS9cR, {from: accounts[2]});
		await contractGuiX6ao.setPeriod.call(newPeriodHOXYC2A, {from: accounts[0]});

		await expect(contractGuiX6ao.deposeBoss3.call(newBoss3hHuQgJG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEhuRyi1 = accounts[4]
		const FOSTERAddrOcbISJ = accounts[2]
		const initialRateUH5GDU0 = BigInt("191")
		const initialPeriodTic6c7 = BigInt("1712")
		const initialOwnerH5BkngH = accounts[5]
		const contractxkkZQmV = await Reseller.new(USDTAddrEhuRyi1, FOSTERAddrOcbISJ, initialRateUH5GDU0, initialPeriodTic6c7, initialOwnerH5BkngH, {from: accounts[1]});
		const newBoss1XfFIDRA = accounts[5]
		await contractxkkZQmV.deposeBoss1.call(newBoss1XfFIDRA, {from: accounts[0]});
		await contractxkkZQmV.switchState.call({from: accounts[4]});

		await expect(contractxkkZQmV.deposeBoss1.call(newBoss1XfFIDRA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPZytJ1a = accounts[2]
		const FOSTERAddra5xTey2 = accounts[3]
		const initialRate7Mj5a9 = BigInt("857")
		const initialPeriodCg1TJN = BigInt("1394")
		const initialOwnernLwihvZ = accounts[2]
		const contractuXwIVtq = await Reseller.new(USDTAddrPZytJ1a, FOSTERAddra5xTey2, initialRate7Mj5a9, initialPeriodCg1TJN, initialOwnernLwihvZ, {from: accounts[3]});
		const newFeel4TMRGK = BigInt("113")
		const newBoss1K9kYMEN = accounts[2]
		const newMinimumauFxxMS = BigInt("830")
		const commentLHhktU7 = "8bdYhUHofRtCN7BTOqqONVCSfGVF0wzewbBQP5VaCptGYhdNNTQwSM4hIxUHsPW1fajDzMWq4tftOqDQP6r3hz"
		const _ref5JIIyZzz = accounts[5]
		const _ref4trzphuv = accounts[5]
		const _ref3gr0z87w = accounts[3]
		const _ref2gETSfZc = accounts[5]
		const _ref1r8zzIAL = accounts[1]
		const valueTAczVzH = BigInt("900")
		await contractuXwIVtq.setFee.call(newFeel4TMRGK, {from: accounts[3]});
		await contractuXwIVtq.deposeBoss1.call(newBoss1K9kYMEN, {from: accounts[0]});
		await contractuXwIVtq.setMinimum.call(newMinimumauFxxMS, {from: accounts[4]});
		await contractuXwIVtq.purchase.call(valueTAczVzH, _ref1r8zzIAL, _ref2gETSfZc, _ref3gr0z87w, _ref4trzphuv, _ref5JIIyZzz, commentLHhktU7, {from: accounts[3]});

		await expect(contractuXwIVtq.setFee.call(newFeel4TMRGK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddropSOX4 = accounts[0]
		const FOSTERAddrdHOmYTP = accounts[3]
		const initialRateZqU127 = BigInt("850")
		const initialPeriodm3fGK2K = BigInt("1809")
		const initialOwnerQaJwDaP = accounts[1]
		const contracts3PM4I = await Reseller.new(USDTAddropSOX4, FOSTERAddrdHOmYTP, initialRateZqU127, initialPeriodm3fGK2K, initialOwnerQaJwDaP, {from: accounts[2]});
		const newMinimumQGi6UHz = BigInt("1463")
		const newBoss2xXtX44K = accounts[1]
		const newFeeOEm6A6h = BigInt("48")
		const _ref5EyxHaed = accounts[4]
		const _ref4GpJt5tP = accounts[0]
		const _ref3NyqQHwt = accounts[3]
		const _ref2vV4R0u0 = accounts[0]
		const _ref1tXVECHl = accounts[4]
		const valuefSb1l7g = BigInt("453")
		const newFeesnfgTYe = BigInt("81")
		const level5ZFmeHxJ = BigInt("123")
		const level4bW2bAmX = BigInt("124")
		const level3ZXpITv = BigInt("60")
		const level2xmw9pp = BigInt("110")
		const level1Pz2lKPG = BigInt("195")
		await contracts3PM4I.setMinimum.call(newMinimumQGi6UHz, {from: accounts[2]});
		await contracts3PM4I.deposeBoss2.call(newBoss2xXtX44K, {from: "0x0000000000000000000000000000000000000001"});
		await contracts3PM4I.setFee.call(newFeeOEm6A6h, {from: accounts[2]});
		await contracts3PM4I.buy.call(valuefSb1l7g, _ref1tXVECHl, _ref2vV4R0u0, _ref3NyqQHwt, _ref4GpJt5tP, _ref5EyxHaed, {from: accounts[5]});
		await contracts3PM4I.setFee.call(newFeesnfgTYe, {from: accounts[3]});
		await contracts3PM4I.setRefBonus.call(level1Pz2lKPG, level2xmw9pp, level3ZXpITv, level4bW2bAmX, level5ZFmeHxJ, {from: accounts[3]});

		await expect(contracts3PM4I.setMinimum.call(newMinimumQGi6UHz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXG4WiTm = accounts[0]
		const FOSTERAddrn6g9nc1 = accounts[4]
		const initialRateFuurV2P = BigInt("527")
		const initialPerioddj3KTn = BigInt("621")
		const initialOwnerUx9p4lH = accounts[3]
		const contracti4HV9HQ = await Reseller.new(USDTAddrXG4WiTm, FOSTERAddrn6g9nc1, initialRateFuurV2P, initialPerioddj3KTn, initialOwnerUx9p4lH, {from: accounts[5]});
		const newBoss2iFHoBeM = accounts[0]
		const valueAfhOPro = BigInt("1312")
		const recipienthVwBCje = accounts[3]
		const ERC20TokenXKT6ZR7 = accounts[1]
		const commentHj8W2O5 = "OkaPSPmwPp4"
		const _ref5koKNBY4 = accounts[3]
		const _ref4MX40sO1 = accounts[5]
		const _ref3JSDkJFJ = accounts[5]
		const _ref2IcTRwv = accounts[2]
		const _ref1tJ0dOrm = accounts[1]
		const valueN2usyH6 = BigInt("708")
		const newPeriodMxKWrKy = BigInt("1415")
		await contracti4HV9HQ.deposeBoss2.call(newBoss2iFHoBeM, {from: accounts[3]});
		await contracti4HV9HQ.withdrawERC20.call(ERC20TokenXKT6ZR7, recipienthVwBCje, valueAfhOPro, {from: "0x0000000000000000000000000000000000000001"});
		await contracti4HV9HQ.purchase.call(valueN2usyH6, _ref1tJ0dOrm, _ref2IcTRwv, _ref3JSDkJFJ, _ref4MX40sO1, _ref5koKNBY4, commentHj8W2O5, {from: accounts[0]});
		await contracti4HV9HQ.setPeriod.call(newPeriodMxKWrKy, {from: accounts[1]});

		await expect(contracti4HV9HQ.deposeBoss2.call(newBoss2iFHoBeM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbOMmL1k = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrNelrson = accounts[2]
		const initialRateZG9BXf2 = BigInt("1492")
		const initialPeriodmaYDZb5 = BigInt("277")
		const initialOwnerLzu3WWZ = accounts[0]
		const contract8aFhDC = await Reseller.new(USDTAddrbOMmL1k, FOSTERAddrNelrson, initialRateZG9BXf2, initialPeriodmaYDZb5, initialOwnerLzu3WWZ, {from: accounts[4]});
		const level5RrPkXsk = BigInt("145")
		const level4gQezjxa = BigInt("191")
		const level3GPYkIPs = BigInt("139")
		const level2MDygjd = BigInt("51")
		const level1BCtK7qA = BigInt("152")
		const level566l19W = BigInt("131")
		const level4AUntb7 = BigInt("195")
		const level3ZQb0GWe = BigInt("67")
		const level2pdC2WIP = BigInt("255")
		const level1AkIm9Cf = BigInt("173")
		const level5ZW6tqnc = BigInt("146")
		const level4jkcLus5 = BigInt("219")
		const level3VIRGqUV = BigInt("134")
		const level2ucmzDc = BigInt("114")
		const level1NW9zFZL = BigInt("80")
		await contract8aFhDC.setRefBonus.call(level1BCtK7qA, level2MDygjd, level3GPYkIPs, level4gQezjxa, level5RrPkXsk, {from: "0x0000000000000000000000000000000000000001"});
		await contract8aFhDC.switchState.call({from: accounts[3]});
		await contract8aFhDC.setRefBonus.call(level1AkIm9Cf, level2pdC2WIP, level3ZQb0GWe, level4AUntb7, level566l19W, {from: accounts[4]});
		await contract8aFhDC.setRefBonus.call(level1NW9zFZL, level2ucmzDc, level3VIRGqUV, level4jkcLus5, level5ZW6tqnc, {from: accounts[1]});

		await expect(contract8aFhDC.setRefBonus.call(level1BCtK7qA, level2MDygjd, level3GPYkIPs, level4gQezjxa, level5RrPkXsk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkbjkwaW = accounts[4]
		const FOSTERAddroJPt54Z = accounts[2]
		const initialRatezC2s5jC = BigInt("612")
		const initialPeriodjFAol1X = BigInt("177")
		const initialOwnerHvGcmMI = accounts[4]
		const contracti1KUMcx = await Reseller.new(USDTAddrkbjkwaW, FOSTERAddroJPt54Z, initialRatezC2s5jC, initialPeriodjFAol1X, initialOwnerHvGcmMI, {from: accounts[3]});
		const newPeriodkRl0KU = BigInt("932")
		const level5tydjSjn = BigInt("215")
		const level4eK1dK8L = BigInt("142")
		const level3ltOTfik = BigInt("88")
		const level2F9XBD8w = BigInt("132")
		const level1v3Ttej7 = BigInt("186")
		const newPeriodPOL4qA2 = BigInt("1816")
		const valueeZz4PHA = BigInt("1424")
		await contracti1KUMcx.setPeriod.call(newPeriodkRl0KU, {from: accounts[3]});
		await contracti1KUMcx.switchState.call({from: accounts[0]});
		await contracti1KUMcx.setRefBonus.call(level1v3Ttej7, level2F9XBD8w, level3ltOTfik, level4eK1dK8L, level5tydjSjn, {from: accounts[3]});
		await contracti1KUMcx.setPeriod.call(newPeriodPOL4qA2, {from: accounts[3]});
		await contracti1KUMcx.withdraw.call(valueeZz4PHA, {from: accounts[1]});

		await expect(contracti1KUMcx.setPeriod.call(newPeriodkRl0KU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrG8WsVjT = accounts[2]
		const FOSTERAddrQ9X1hqp = accounts[1]
		const initialRateFovkiD = BigInt("690")
		const initialPeriod8gUBEC = BigInt("540")
		const initialOwnerOQtyT44 = accounts[5]
		const contractb9BMR2Q = await Reseller.new(USDTAddrG8WsVjT, FOSTERAddrQ9X1hqp, initialRateFovkiD, initialPeriod8gUBEC, initialOwnerOQtyT44, {from: accounts[4]});
		const newBoss46v4HM5 = accounts[4]
		await contractb9BMR2Q.deposeBoss4.call(newBoss46v4HM5, {from: accounts[3]});
		await contractb9BMR2Q.switchState.call({from: accounts[3]});

		await expect(contractb9BMR2Q.deposeBoss4.call(newBoss46v4HM5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHsip565 = accounts[2]
		const FOSTERAddrDE8uxJE = accounts[4]
		const initialRatemzhBowK = BigInt("855")
		const initialPeriodgK6SEAF = BigInt("309")
		const initialOwnernqAnS1X = accounts[5]
		const contractf7r1zam = await Reseller.new(USDTAddrHsip565, FOSTERAddrDE8uxJE, initialRatemzhBowK, initialPeriodgK6SEAF, initialOwnernqAnS1X, {from: accounts[3]});
		const accountWfRGOA5 = accounts[2]
		const newPeriodX3wkgx7 = BigInt("1933")
		const nulleNw8Bw8 = await contractf7r1zam.allowanceUSDT.call(accountWfRGOA5, {from: accounts[3]});
		await contractf7r1zam.setPeriod.call(newPeriodX3wkgx7, {from: accounts[2]});

		await expect(contractf7r1zam.allowanceUSDT.call(accountWfRGOA5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAm3xzuz = accounts[2]
		const FOSTERAddrDAsOrCE = accounts[4]
		const initialRateUm4KvJ6 = BigInt("855")
		const initialPeriodYFFquzI = BigInt("309")
		const initialOwnerMX5cIhH = accounts[5]
		const contractKOagYj8 = await Reseller.new(USDTAddrAm3xzuz, FOSTERAddrDAsOrCE, initialRateUm4KvJ6, initialPeriodYFFquzI, initialOwnerMX5cIhH, {from: accounts[3]});
		const valuePdrsb6y = BigInt("459")
		const newPeriodZ47nw3j = BigInt("2034")
		const accountbcXclcp = accounts[2]
		await contractKOagYj8.withdraw.call(valuePdrsb6y, {from: accounts[4]});
		await contractKOagYj8.setPeriod.call(newPeriodZ47nw3j, {from: accounts[2]});
		const nullkpR8Y2b = await contractKOagYj8.allowanceFOSTER.call(accountbcXclcp, {from: accounts[5]});

		await expect(contractKOagYj8.withdraw.call(valuePdrsb6y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvW4crAR = accounts[2]
		const FOSTERAddrvREEoLI = accounts[1]
		const initialRateLdVzd7u = BigInt("690")
		const initialPeriodp6kXPo8 = BigInt("540")
		const initialOwnerio7366k = accounts[5]
		const contracthC5hKzI = await Reseller.new(USDTAddrvW4crAR, FOSTERAddrvREEoLI, initialRateLdVzd7u, initialPeriodp6kXPo8, initialOwnerio7366k, {from: accounts[4]});
		const _ref5WZWzhqa = accounts[2]
		const _ref4tjw6gko = accounts[3]
		const _ref3emk98FZ = accounts[4]
		const _ref2JOQezvA = accounts[4]
		const _ref1IdcOf9k = accounts[1]
		const valuePe0cJom = BigInt("1005")
		const newPeriodTUVORHN = BigInt("1782")
		const newMinimumB0vFRaL = BigInt("1291")
		await contracthC5hKzI.buy.call(valuePe0cJom, _ref1IdcOf9k, _ref2JOQezvA, _ref3emk98FZ, _ref4tjw6gko, _ref5WZWzhqa, {from: accounts[5]});
		await contracthC5hKzI.switchState.call({from: accounts[3]});
		await contracthC5hKzI.setPeriod.call(newPeriodTUVORHN, {from: accounts[3]});
		await contracthC5hKzI.setMinimum.call(newMinimumB0vFRaL, {from: accounts[4]});

		await expect(contracthC5hKzI.buy.call(valuePe0cJom, _ref1IdcOf9k, _ref2JOQezvA, _ref3emk98FZ, _ref4tjw6gko, _ref5WZWzhqa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKEjm0gW = accounts[3]
		const FOSTERAddrRtfKad = accounts[5]
		const initialRatecLA6ZQa = BigInt("1982")
		const initialPeriodYm2EFYE = BigInt("378")
		const initialOwnerLbAD4Y = accounts[1]
		const contractwQY0SHp = await Reseller.new(USDTAddrKEjm0gW, FOSTERAddrRtfKad, initialRatecLA6ZQa, initialPeriodYm2EFYE, initialOwnerLbAD4Y, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss1aAX8Qkx = accounts[4]
		const newMinimumo0JlgwI = BigInt("593")
		const amounthGrJsGh = BigInt("563")
		const newBoss20CeUcy = accounts[2]
		const accountxH2WStS = accounts[2]
		await contractwQY0SHp.deposeBoss1.call(newBoss1aAX8Qkx, {from: accounts[2]});
		await contractwQY0SHp.setMinimum.call(newMinimumo0JlgwI, {from: accounts[1]});
		const nulleCoaVU7 = await contractwQY0SHp.getEstimation.call(amounthGrJsGh, {from: accounts[0]});
		await contractwQY0SHp.deposeBoss2.call(newBoss20CeUcy, {from: accounts[4]});
		const nullyc9H6Ei = await contractwQY0SHp.allowanceFOSTER.call(accountxH2WStS, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrywbr9dx = accounts[0]
		const FOSTERAddrh1qQHL8 = accounts[4]
		const initialRateQp5Qkod = BigInt("527")
		const initialPeriodnPQfqF = BigInt("621")
		const initialOwnerI6zKi1e = accounts[3]
		const contractPztNaU = await Reseller.new(USDTAddrywbr9dx, FOSTERAddrh1qQHL8, initialRateQp5Qkod, initialPeriodnPQfqF, initialOwnerI6zKi1e, {from: accounts[5]});
		const valuekCh5a9z = BigInt("1312")
		const recipientzNLb85r = accounts[3]
		const ERC20TokenB2d38xx = accounts[1]
		await contractPztNaU.withdrawERC20.call(ERC20TokenB2d38xx, recipientzNLb85r, valuekCh5a9z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPztNaU.withdrawERC20.call(ERC20TokenB2d38xx, recipientzNLb85r, valuekCh5a9z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrA3P19ne = accounts[0]
		const FOSTERAddrd2rzurJ = accounts[2]
		const initialRate9AXi29 = BigInt("41")
		const initialPeriodzQB0i52 = BigInt("1681")
		const initialOwnerlwF8nhz = accounts[4]
		const contractdbqqJT = await Reseller.new(USDTAddrA3P19ne, FOSTERAddrd2rzurJ, initialRate9AXi29, initialPeriodzQB0i52, initialOwnerlwF8nhz, {from: accounts[2]});
		const newMinimumBgjoXGC = BigInt("1329")
		await contractdbqqJT.setMinimum.call(newMinimumBgjoXGC, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrYHIuULb = accounts[2]
		const FOSTERAddrlHkqCIS = accounts[0]
		const initialRatehhJanYO = BigInt("530")
		const initialPeriodSdckLPn = BigInt("9")
		const initialOwnerg5928o6 = accounts[2]
		const contractay3nwr2 = await Reseller.new(USDTAddrYHIuULb, FOSTERAddrlHkqCIS, initialRatehhJanYO, initialPeriodSdckLPn, initialOwnerg5928o6, {from: accounts[2]});
		const accountOG7CJ9p = accounts[3]
		const accountfPjIlCU = accounts[5]
		const amountPQZfzy0 = BigInt("1147")
		const level5Bmpfs51 = BigInt("144")
		const level4FFYPM8h = BigInt("12")
		const level3Li4CWdW = BigInt("221")
		const level2DnNdmf9 = BigInt("24")
		const level1nUUpq3a = BigInt("235")
		const newFeeVJ2kLA7 = BigInt("111")
		const nulltJv10wz = await contractay3nwr2.balanceUSDT.call(accountOG7CJ9p, {from: accounts[2]});
		const nullT0mC0qs = await contractay3nwr2.balanceFOSTER.call(accountfPjIlCU, {from: accounts[4]});
		await contractay3nwr2.switchState.call({from: accounts[0]});
		const nullwsy34P = await contractay3nwr2.getEstimation.call(amountPQZfzy0, {from: accounts[0]});
		await contractay3nwr2.setRefBonus.call(level1nUUpq3a, level2DnNdmf9, level3Li4CWdW, level4FFYPM8h, level5Bmpfs51, {from: accounts[0]});
		await contractay3nwr2.setFee.call(newFeeVJ2kLA7, {from: accounts[2]});

		await expect(contractay3nwr2.balanceUSDT.call(accountOG7CJ9p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbsDmpQ = accounts[4]
		const FOSTERAddrMjcLR1 = accounts[0]
		const initialRatebD44FWv = BigInt("133")
		const initialPeriodjGGEOYM = BigInt("939")
		const initialOwnertQKh6EQ = accounts[1]
		const contractnF8TQlV = await Reseller.new(USDTAddrbsDmpQ, FOSTERAddrMjcLR1, initialRatebD44FWv, initialPeriodjGGEOYM, initialOwnertQKh6EQ, {from: accounts[4]});
		const amountpLhV1fr = BigInt("1384")
		const newBoss1pTqYILz = "0x0000000000000000000000000000000000000001"
		const commentdojszYh = "MnCXqxJ21KK0Hcpsk5zDjHKqsbnH246HWq4JETh8W43OBl4n2SyxmPbZ"
		const _ref5FjM6q0 = accounts[2]
		const _ref4ut26uj = accounts[3]
		const _ref3b0EWS5 = accounts[2]
		const _ref2EmdN6Lx = accounts[1]
		const _ref1TZWUWK = accounts[2]
		const valuetvG1aO = BigInt("1225")
		const nullMqsJoi3 = await contractnF8TQlV.getEstimation.call(amountpLhV1fr, {from: accounts[2]});
		await contractnF8TQlV.switchState.call({from: accounts[1]});
		await contractnF8TQlV.deposeBoss1.call(newBoss1pTqYILz, {from: accounts[0]});
		await contractnF8TQlV.purchase.call(valuetvG1aO, _ref1TZWUWK, _ref2EmdN6Lx, _ref3b0EWS5, _ref4ut26uj, _ref5FjM6q0, commentdojszYh, {from: accounts[0]});

		assert.equal(nullMqsJoi3, 184072)
		await expect(contractnF8TQlV.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVMJD2k5 = accounts[2]
		const FOSTERAddrSlfmauj = accounts[3]
		const initialRateQRGA5kf = BigInt("857")
		const initialPeriodFghyct4 = BigInt("1394")
		const initialOwnerDTIlDIw = accounts[2]
		const contractmy1bI66 = await Reseller.new(USDTAddrVMJD2k5, FOSTERAddrSlfmauj, initialRateQRGA5kf, initialPeriodFghyct4, initialOwnerDTIlDIw, {from: accounts[3]});
		const commentXzDOYpZ = "WnyiwChmNQuwTcnRohlSzsjD"
		const _ref5dgYGVUy = accounts[2]
		const _ref4WVekPtv = accounts[2]
		const _ref3dCkpnVK = accounts[3]
		const _ref2wHIj9Ou = accounts[4]
		const _ref1UzSoVHz = accounts[4]
		const valueCeyvVJL = BigInt("1520")
		const newFeeCdnYdF0 = BigInt("113")
		const accountrgXJbDb = accounts[3]
		const commentlcfptUo = "8bdYhUHofRtCN7BTOqqONVCSfGVF0wzewbBQP5VaCptGYhdNNTQwSM4hIxUHsPW1fajDzMWq4tftOqDQP6r3hz"
		const _ref5bVDFD36 = accounts[5]
		const _ref4skR87a2 = accounts[5]
		const _ref3KTCphgP = accounts[3]
		const _ref2P2pi59I = accounts[6]
		const _ref1o7QpxMt = accounts[1]
		const valueRbOer2R = BigInt("900")
		await contractmy1bI66.purchase.call(valueCeyvVJL, _ref1UzSoVHz, _ref2wHIj9Ou, _ref3dCkpnVK, _ref4WVekPtv, _ref5dgYGVUy, commentXzDOYpZ, {from: accounts[2]});
		await contractmy1bI66.setFee.call(newFeeCdnYdF0, {from: accounts[3]});
		const nullAlxo2XG = await contractmy1bI66.balanceUSDT.call(accountrgXJbDb, {from: accounts[3]});
		await contractmy1bI66.purchase.call(valueRbOer2R, _ref1o7QpxMt, _ref2P2pi59I, _ref3KTCphgP, _ref4skR87a2, _ref5bVDFD36, commentlcfptUo, {from: accounts[3]});

		await expect(contractmy1bI66.purchase.call(valueCeyvVJL, _ref1UzSoVHz, _ref2wHIj9Ou, _ref3dCkpnVK, _ref4WVekPtv, _ref5dgYGVUy, commentXzDOYpZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpGgZqU6 = accounts[2]
		const FOSTERAddruD26LcC = accounts[4]
		const initialRateBwYKJ5N = BigInt("855")
		const initialPeriodDjlk55l = BigInt("309")
		const initialOwnerRlN7kBf = accounts[5]
		const contractgaEBS3i = await Reseller.new(USDTAddrpGgZqU6, FOSTERAddruD26LcC, initialRateBwYKJ5N, initialPeriodDjlk55l, initialOwnerRlN7kBf, {from: accounts[3]});
		const _periodjl7NBmC = BigInt("655")
		const amountHl1gmvI = BigInt("548")
		const recipientR7nAuCe = accounts[2]
		const valueIONxI7W = BigInt("458")
		const newPeriodfX6ehSd = BigInt("2034")
		await contractgaEBS3i.freezeAndTransfer.call(recipientR7nAuCe, amountHl1gmvI, _periodjl7NBmC, {from: accounts[4]});
		await contractgaEBS3i.withdraw.call(valueIONxI7W, {from: accounts[4]});
		await contractgaEBS3i.setPeriod.call(newPeriodfX6ehSd, {from: accounts[2]});

		await expect(contractgaEBS3i.freezeAndTransfer.call(recipientR7nAuCe, amountHl1gmvI, _periodjl7NBmC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddraHcjA8 = accounts[5]
		const FOSTERAddrbrCWaB8 = accounts[3]
		const initialRategwqrTC5 = BigInt("1408")
		const initialPeriodKZlwk3 = BigInt("1739")
		const initialOwnerF6VQ8uW = accounts[1]
		const contractGOQc2Hb = await Reseller.new(USDTAddraHcjA8, FOSTERAddrbrCWaB8, initialRategwqrTC5, initialPeriodKZlwk3, initialOwnerF6VQ8uW, {from: accounts[0]});
		const newFeexdONny6 = BigInt("96")
		const commentairf0uD = "as6k28HZS8fDl51obL9rVx5126FAFAlmMeaTd9qQshBe1XFzh"
		const _ref5dtjAzZE = accounts[3]
		const _ref4XJerSwb = accounts[5]
		const _ref3gi9TPSB = accounts[2]
		const _ref2BqLzys = accounts[1]
		const _ref1SPGu6q0 = accounts[2]
		const valuefnAEytP = BigInt("1498")
		const commentNg5wMqa = "A1QeYq51bWRRuUOwp37RlNVwVzZEd3"
		const _ref5xGFTCMr = accounts[0]
		const _ref4sKHnmx = accounts[0]
		const _ref3LaOtDu4 = accounts[1]
		const _ref2cKSy1pW = accounts[2]
		const _ref1zmOEglT = accounts[1]
		const valuec4uTtwE = BigInt("643")
		const amountqqjuAFr = BigInt("102")
		const newFeejpj4k9 = BigInt("175")
		await contractGOQc2Hb.setFee.call(newFeexdONny6, {from: accounts[1]});
		await contractGOQc2Hb.purchase.call(valuefnAEytP, _ref1SPGu6q0, _ref2BqLzys, _ref3gi9TPSB, _ref4XJerSwb, _ref5dtjAzZE, commentairf0uD, {from: accounts[4]});
		await contractGOQc2Hb.purchase.call(valuec4uTtwE, _ref1zmOEglT, _ref2cKSy1pW, _ref3LaOtDu4, _ref4sKHnmx, _ref5xGFTCMr, commentNg5wMqa, {from: accounts[2]});
		await contractGOQc2Hb.switchState.call({from: accounts[1]});
		const nullhnLlZgD = await contractGOQc2Hb.getEstimation.call(amountqqjuAFr, {from: accounts[2]});
		await contractGOQc2Hb.setFee.call(newFeejpj4k9, {from: accounts[2]});

		await expect(contractGOQc2Hb.setFee.call(newFeexdONny6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPeCcc9 = accounts[4]
		const FOSTERAddralOzS1h = accounts[2]
		const initialRatefU3tREB = BigInt("191")
		const initialPeriodnc40j7 = BigInt("1712")
		const initialOwnerZLx2xPh = accounts[5]
		const contractmlZhMSB = await Reseller.new(USDTAddrPeCcc9, FOSTERAddralOzS1h, initialRatefU3tREB, initialPeriodnc40j7, initialOwnerZLx2xPh, {from: accounts[1]});
		const accountpmA9jJj = accounts[1]
		const newBoss1S4NbScE = accounts[6]
		const nullr1FzvLT = await contractmlZhMSB.balanceFOSTER.call(accountpmA9jJj, {from: accounts[2]});
		await contractmlZhMSB.deposeBoss1.call(newBoss1S4NbScE, {from: accounts[0]});

		await expect(contractmlZhMSB.balanceFOSTER.call(accountpmA9jJj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbOali1o = accounts[0]
		const FOSTERAddroZwwUmk = accounts[4]
		const initialRategcHsnuC = BigInt("527")
		const initialPeriodRAasJ9q = BigInt("621")
		const initialOwnerIXMz1wv = accounts[3]
		const contractS4AxrPN = await Reseller.new(USDTAddrbOali1o, FOSTERAddroZwwUmk, initialRategcHsnuC, initialPeriodRAasJ9q, initialOwnerIXMz1wv, {from: accounts[5]});
		const newPeriodERBjSod = BigInt("626")
		const newFeeXBXAfjp = BigInt("231")
		const valueNHZQFHy = BigInt("1312")
		const recipientlUXIqWo = accounts[3]
		const ERC20TokenzRE4FP = accounts[1]
		await contractS4AxrPN.setPeriod.call(newPeriodERBjSod, {from: accounts[3]});
		await contractS4AxrPN.setFee.call(newFeeXBXAfjp, {from: accounts[1]});
		await contractS4AxrPN.withdrawERC20.call(ERC20TokenzRE4FP, recipientlUXIqWo, valueNHZQFHy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractS4AxrPN.setPeriod.call(newPeriodERBjSod, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr7Cpc0p = accounts[2]
		const FOSTERAddrkDVAyHD = accounts[4]
		const initialRateKoCacil = BigInt("855")
		const initialPeriodQamIFVS = BigInt("309")
		const initialOwnerOBR4n5z = accounts[5]
		const contractLUgjF8G = await Reseller.new(USDTAddr7Cpc0p, FOSTERAddrkDVAyHD, initialRateKoCacil, initialPeriodQamIFVS, initialOwnerOBR4n5z, {from: accounts[3]});
		const newRateETsmq6U = BigInt("56")
		const amountiShLwhz = BigInt("669")
		const _periodvmio4av = BigInt("655")
		const amountHB1IEMZ = BigInt("548")
		const recipientQ7laqiO = accounts[3]
		const newBoss4ygP6kF9 = accounts[4]
		await contractLUgjF8G.setRate.call(newRateETsmq6U, {from: accounts[2]});
		const nulltFo7H6J = await contractLUgjF8G.getEstimation.call(amountiShLwhz, {from: accounts[5]});
		await contractLUgjF8G.freezeAndTransfer.call(recipientQ7laqiO, amountHB1IEMZ, _periodvmio4av, {from: accounts[4]});
		await contractLUgjF8G.deposeBoss4.call(newBoss4ygP6kF9, {from: accounts[0]});

		await expect(contractLUgjF8G.setRate.call(newRateETsmq6U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgeuiGxb = accounts[4]
		const FOSTERAddrrXPVy2f = accounts[2]
		const initialRatePpXgxK = BigInt("191")
		const initialPeriodmowSqra = BigInt("1712")
		const initialOwnerLS5Z5zX = accounts[5]
		const contractoDN9HVF = await Reseller.new(USDTAddrgeuiGxb, FOSTERAddrrXPVy2f, initialRatePpXgxK, initialPeriodmowSqra, initialOwnerLS5Z5zX, {from: accounts[1]});
		const _perioduEVxE1S = BigInt("513")
		const amountKNsu3R = BigInt("189")
		const recipientcdukBJr = accounts[3]
		const newBoss1qxBpH1l = accounts[6]
		await contractoDN9HVF.freezeAndTransfer.call(recipientcdukBJr, amountKNsu3R, _perioduEVxE1S, {from: accounts[5]});
		await contractoDN9HVF.deposeBoss1.call(newBoss1qxBpH1l, {from: accounts[0]});

		await expect(contractoDN9HVF.freezeAndTransfer.call(recipientcdukBJr, amountKNsu3R, _perioduEVxE1S, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPUpNsZ4 = accounts[2]
		const FOSTERAddr0xiIqe = accounts[4]
		const initialRatezJgk69c = BigInt("855")
		const initialPeriodXkLouxg = BigInt("309")
		const initialOwnerNlFefu3 = accounts[5]
		const contractvtlXiMB = await Reseller.new(USDTAddrPUpNsZ4, FOSTERAddr0xiIqe, initialRatezJgk69c, initialPeriodXkLouxg, initialOwnerNlFefu3, {from: accounts[3]});
		const level5JitSsZA = BigInt("100")
		const level4TPgxoVl = BigInt("139")
		const level30DzmU0 = BigInt("177")
		const level2xSQGJZv = BigInt("179")
		const level1BMiCnvb = BigInt("143")
		const valueHxEbytk = BigInt("489")
		const amountDgsn8Ak = BigInt("319")
		await contractvtlXiMB.setRefBonus.call(level1BMiCnvb, level2xSQGJZv, level30DzmU0, level4TPgxoVl, level5JitSsZA, {from: accounts[5]});
		await contractvtlXiMB.withdraw.call(valueHxEbytk, {from: accounts[4]});
		const nullzHVlVz5 = await contractvtlXiMB.getEstimation.call(amountDgsn8Ak, {from: accounts[0]});

		await expect(contractvtlXiMB.setRefBonus.call(level1BMiCnvb, level2xSQGJZv, level30DzmU0, level4TPgxoVl, level5JitSsZA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrL5W9XVZ = accounts[4]
		const FOSTERAddrFEJP0t = accounts[0]
		const initialRatev6brQp = BigInt("1245")
		const initialPeriodIy0ANtz = BigInt("107")
		const initialOwneryJiCQIC = accounts[1]
		const contractTIngyB4 = await Reseller.new(USDTAddrL5W9XVZ, FOSTERAddrFEJP0t, initialRatev6brQp, initialPeriodIy0ANtz, initialOwneryJiCQIC, {from: accounts[3]});
		const newBoss4svEYH9W = accounts[0]
		const accountaY8oUz = accounts[3]
		await contractTIngyB4.deposeBoss4.call(newBoss4svEYH9W, {from: accounts[1]});
		const nullfNjplVp = await contractTIngyB4.allowanceUSDT.call(accountaY8oUz, {from: accounts[0]});

		await expect(contractTIngyB4.deposeBoss4.call(newBoss4svEYH9W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzWG99b = accounts[2]
		const FOSTERAddrOXJhy7y = accounts[4]
		const initialRaterOFp96 = BigInt("855")
		const initialPeriodssx196v = BigInt("309")
		const initialOwnerzDw64Oc = accounts[5]
		const contractIesfHM6 = await Reseller.new(USDTAddrzWG99b, FOSTERAddrOXJhy7y, initialRaterOFp96, initialPeriodssx196v, initialOwnerzDw64Oc, {from: accounts[3]});
		const newBoss3i3H1UVI = accounts[0]
		const newBoss3s2W9Uzb = accounts[1]
		await contractIesfHM6.deposeBoss3.call(newBoss3i3H1UVI, {from: accounts[5]});
		await contractIesfHM6.deposeBoss3.call(newBoss3s2W9Uzb, {from: accounts[1]});

		await expect(contractIesfHM6.deposeBoss3.call(newBoss3i3H1UVI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUujMUbL = accounts[4]
		const FOSTERAddrQCvpv95 = accounts[2]
		const initialRateUIRkiYy = BigInt("191")
		const initialPeriodPvaNLCq = BigInt("1712")
		const initialOwnernjbwzQx = accounts[5]
		const contractYFm3vOu = await Reseller.new(USDTAddrUujMUbL, FOSTERAddrQCvpv95, initialRateUIRkiYy, initialPeriodPvaNLCq, initialOwnernjbwzQx, {from: accounts[1]});
		const newRateaTDaEts = BigInt("920")
		const newBoss1s96ssdo = accounts[6]
		await contractYFm3vOu.setRate.call(newRateaTDaEts, {from: accounts[5]});
		await contractYFm3vOu.deposeBoss1.call(newBoss1s96ssdo, {from: accounts[0]});

		await expect(contractYFm3vOu.setRate.call(newRateaTDaEts, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})